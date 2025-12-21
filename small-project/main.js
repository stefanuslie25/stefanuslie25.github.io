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
		controls.innerHTML = `<button data-action="Restart">🔁</button>`
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
	
	controls.innerHTML =
	`
	<nav>
		<button data-move="Rock">🗿</button>
		<button data-move="Paper">📄</button>
		<button data-move="Scissors">✂️</button>
		<button data-move="Heal">🍎</button>
		<button data-move="Inventory">🎒</button>
		<button data-move="Store">🏪</button>
	</nav>
	`
	renderHp()
}

function renderHp() {
	document.getElementById("player-hp-bar").style.width = (state.playerHp / state.playerMaxHp * 100) + "%"
	document.getElementById("enemy-hp-bar").style.width = (state.enemyHp / state.enemyMaxHp * 100) + "%"
}

let activePopup = null

function openPopup(name) {
	activePopup = name
	document.getElementById(name).classList.remove("hidden")
}

function closePopup() {
	if (!activePopup) return
	document.getElementById(activePopup).classList.add("hidden")
	activePopup = null
}

document.addEventListener("keydown", e => {
	if (activePopup) {
		if (!["Escape", "Enter"].includes(e.key)) return
		if (e.key === "Escape") {
			closePopup()
			return
		}
	}
	if (e.key.toLowerCase() === "r") update("Rock") 
	if (e.key.toLowerCase() === "p") update("Paper")
	if (e.key.toLowerCase() === "s") update("Scissors")
	if (e.key.toLowerCase() === "h") update("Heal")
	if (e.key.toLowerCase() === "i") update("Inventory")
	if (e.key.toLowerCase() === "o") update("Store")
	if ( state.gameOver || state.gameWin) {
		if (e.key === " " || e.code === "Space") restart()
	}
	render()
})

render()
renderHp()