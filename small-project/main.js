const bindings = {
  "player-level": () => state.playerLevel,
  "player-hp-current": () => state.playerHp,
  "player-hp-max": () => state.playerMaxHp,
  "player-xp-current": () => state.playerXp,
  "player-xp-max": () => state.playerMaxXP,
  "player-move": () => state.playerMove,

  "enemy-name": () => state.enemyName,
  "enemy-hp": () => state.enemyHp,
  "enemy-hp-max": () => state.enemyMaxHp,
  "enemy-damage": () => state.getHurt,
  "enemy-move": () => state.enemyMove,

  "Result": () => state.result,
  "drawCount": () => state.draw,
  "killCount": () => state.kill,
  "deathCount": () => state.death
}

function render() {
	if (state.gameOver || state.gameWin) {
		controls.innerHTML = `<button data-action="restart">🔁</button>`
		document.getElementById("stats").classList.add("hidden")
	}
	if (state.gameOver) {
		out.innerHTML = `
			<div class="gameover">GAME OVER</div>
			<div class="hint">Press [Space] to restart.</div>
		`
		return;
	} else {
		out.innerHTML = ""
	}
	if (state.gameWin) {
		out.innerHTML = `
			<div class="gamewin">YOU WIN!</div>
			Rewards: ${state.xpGain} XP
			<div class="hint">Press [Space] to restart.</div>
		`
		return;
	} else {
		out.innerHTML = ""
	}
	
	document.getElementById("stats").classList.remove("hidden")
	
	for (const id in bindings) {
		document.getElementById(id).textContent = bindings[id]()
	}
	
	controls.innerHTML = `
		<button data-move="rock">🗿</button>
		<button data-move="paper">📄</button>
		<button data-move="scissors">✂️</button>
		<button data-move="heal">🍎</button>
	`
	renderHp()
}

function renderHp() {
	document.getElementById("player-hp-bar").style.width = (state.playerHp / state.playerMaxHp * 100) + "%"
	document.getElementById("enemy-hp-bar").style.width = (state.enemyHp / state.enemyMaxHp * 100) + "%"
}

document.addEventListener("keydown", e => {
	if (e.key.toLowerCase() === "r") update("rock") 
	if (e.key.toLowerCase() === "p") update("paper")
	if (e.key.toLowerCase() === "s") update("scissors")
	if (e.key.toLowerCase() === "h") update("heal")
	if ( state.gameOver || state.gameWin) {
		if (e.key === " " || e.code === "Space") restart()
	}

	render()
})

render()
renderHp()