function getRandomEnemy() {
	const randomIndex = Math.floor(Math.random() * enemies.length)
	enemyStats = { ...enemies[randomIndex] }
}

const baseXp = 10
const incrementXp = 5
const baseHp = 10
const incrementHp = 1

function getMaxXP(playerLevel) {
	return baseXp + ( state.playerLevel - 1 ) * incrementXp
}

function getMaxHP(playerLevel) {
	return baseHp + ( state.playerLevel - 1 ) * incrementHp
}

function initialState(playerLevel) {
	getRandomEnemy()
	
	const xpGain = Math.floor(
		Math.random() * (enemyStats.giveXpMax - enemyStats.giveXpMin + 1)
	) + enemyStats.giveXpMin
	
	const maxHp = getMaxHP(playerLevel)
	
	return {
		playerHp: maxHp,
		playerMaxHp: maxHp,
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
	playerLevel: 1,
	playerXp: 0,
	death: 0,
	kill: 0
}

Object.assign(state, initialState(state.playerLevel))

state.playerHp = getMaxHP(state.playerLevel)
state.playerMaxHp = getMaxHP(state.playerLevel)
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
	if (playerMove === "heal") {
		if (state.playerHp >= state.playerMaxHp) {
			return "Hp full!"
		}
	
		const heal = 10
		state.playerHp = Math.min(state.playerHp + heal, state.playerMaxHp)
		return "Hp Healed!"
	}
	state.playerHp -= state.getHurt
	return "Lose"
}

function restart() {
	const level = state.playerLevel
	const xp = state.playerXp
	
	state = {
		...initialState(level),
		playerLevel: level,
		playerXp: xp,
		death: state.death,
		kill: state.kill
	}

	while (state.playerXp >= getMaxXP(state.playerLevel)) {
		state.playerXp -= getMaxXP(state.playerLevel)
		state.playerLevel++
	}
	
	state.playerHp = getMaxHP(state.playerLevel)
	state.playerMaxHp = getMaxHP(state.playerLevel)
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
