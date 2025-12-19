function getRandomEnemy() {
	const randomIndex = Math.floor(Math.random() * enemies.length)
	enemyStats = { ...enemies[randomIndex] }
}

function getMaxXP(playerLevel) {
	return 50 + ( state.playerLevel - 1 ) * 25
}

function initialState() {
	getRandomEnemy()
	function giveRandomXP(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	
	const xpGain = giveRandomXP(enemyStats.giveXpMin, enemyStats.giveXpMax)
	
	return {
		playerHp: 10,
		enemyName: enemyStats.name,
		enemyMaxHp: enemyStats.hp,
		enemyHp: enemyStats.hp,
		getHurt: enemyStats.attack,
		xpGain,
		playerMove: "N/A",
		enemyMove: "N/A",
		result: "N/A",
		draw: 0,
		gameOver: false,
		gameWin: false
	}
}

let state = {
	...initialState(),
	playerLevel: 1,
	playerXp: 0,
	death: 0,
	kill: 0
}

state.playerMaxXP = getMaxXP(state.playerLevel)

const choice = [ "rock", "paper", "scissors" ]

function enemyMove() {
	const i = Math.floor(Math.random() * choice.length)
	return choice[i]
}

function update(cmd) {
	if (state.gameOver) return
	if (state.gameWin) return
	
	state.playerMove = cmd
	state.enemyMove = enemyMove()
	state.result = checkResult(state.playerMove, state.enemyMove)
	
	if (state.playerHp <= 0) {
		state.playerHp = 0
		state.gameOver = true
		state.death++
	}
	if (state.enemyHp <= 0) {
		state.enemyHp = 0
		state.gameWin = true
		state.kill++
		state.playerXp += state.xpGain
	}
}

function checkResult(playerMove, enemyMove) {
	if (playerMove === enemyMove) {
		state.draw ++
		return "Draw"
	}
	if (
		(playerMove === "rock" && enemyMove === "scissors") ||
		(playerMove === "paper" && enemyMove === "rock") ||
		(playerMove === "scissors" && enemyMove === "paper")
	) {
		state.enemyHp -= 10
		return "Win"
	}
	
	state.playerHp -= state.getHurt
	return "Lose"
}

function restart() {
	state = {
		...initialState(),
		playerLevel: state.playerLevel,
		playerXp: state.playerXp,
		death: state.death,
		kill: state.kill
	}
	state.playerMaxXP = getMaxXP(state.playerLevel)
}

controls.addEventListener("click", e => {
  const btn = e.target.closest("button")
  if (!btn) return

  if (btn.dataset.action === "restart") {
    if (state.gameOver || state.gameWin) {
      restart()
      render()
    }
    return
  }

  if (btn.dataset.move) {
    update(btn.dataset.move)
    render()
  }
})
