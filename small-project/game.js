function getRandomEnemy() {
	const randomIndex = Math.floor(Math.random() * enemies.length)
	enemyStats = { ...enemies[randomIndex] }
}

getRandomEnemy()

function scaleStats(base, increment, level) {
  return base + (level - 1) * increment
}

const playerDamage = 5
const getMaxXP = level => scaleStats(10, 5, level)
const getMaxHP = level => scaleStats(10, 1, level)

function initialState(playerLevel) {
	
	const xpGain = Math.floor(
		Math.random() * (enemyStats.giveXp.max - enemyStats.giveXp.min + 1)
	) + enemyStats.giveXp.min
	
	const moneyGain = Math.floor(
		Math.random() * (enemyStats.giveMoney.max - enemyStats.giveMoney.min + 1)
	) + enemyStats.giveMoney.min
	
	const maxHp = getMaxHP(playerLevel)
	
	return {
		playerHp: maxHp,
		playerMaxHp: maxHp,
		enemyName: enemyStats.name,
		enemyMaxHp: enemyStats.hp,
		enemyHp: enemyStats.hp,
		getHurtMinValue: enemyStats.damage.min,
		getHurtMaxValue: enemyStats.damage.max,
		xpGain,
		moneyGain,
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
	OwnedMoney: 0,
	death: 0,
	kill: 0
}

Object.assign(state, initialState(state.playerLevel))

state.playerHp = getMaxHP(state.playerLevel)
state.playerMaxHp = getMaxHP(state.playerLevel)
state.playerMaxXP = getMaxXP(state.playerLevel)

const RPSchoice = [ "Rock", "Paper", "Scissors" ]

function enemyMove() {
	const i = Math.floor(Math.random() * RPSchoice.length)
	return RPSchoice[i]
}

function update(cmd) {
	if (state.gameOver) return
	if (state.gameWin) return

	const enemyDamageFinal = Math.floor(
		Math.random() * (enemyStats.damage.max - enemyStats.damage.min + 1)
	) + enemyStats.damage.min
	
	state.getHurt = enemyDamageFinal
	
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
		state.OwnedMoney += state.moneyGain
	}
}

function checkResult(playerMove, enemyMove) {
	if (RPSchoice.includes(playerMove)) {
		
		const win = {
			Rock: "Scissors",
			Paper: "Rock",
			Scissors: "Paper"
		}
		if (playerMove === enemyMove) {
			state.draw++
			return "Draw"
		}
		if (win[playerMove] === enemyMove) {
			state.enemyHp -= playerDamage
			return "Win"
		}
		if (win[enemyMove] === playerMove) {
			state.playerHp -= state.getHurt
			return "Lose"
		}
	} else {
		state.enemyMove = "waiting..."
		if (playerMove === "Heal") {
			if (state.playerHp >= state.playerMaxHp) {
				return "Can't heal"
			} else {
				const healValue = 10
				state.playerHp = Math.min(state.playerHp + healValue, state.playerMaxHp)
				return "Hp Healed!"
			}
		} else {
			if (playerMove === "Inventory") openPopup("popup-inventory")
			if (playerMove === "Store") openPopup("popup-store")
			if (playerMove === "Escape") closePopup()
			state.playerMove = "N/A"
		}
		return "N/A"
	}
}

function restart() {
	const level = state.playerLevel
	const xp = state.playerXp
	
	state = {
		...initialState(level),
		playerLevel: level,
		playerXp: xp,
		OwnedMoney: state.OwnedMoney,
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

document.addEventListener("click", e => {
	const btn = e.target.closest("button")
	if (!btn) return
	
	if (btn.dataset.action === "Restart") {
		if (state.gameOver || state.gameWin) {
		restart()
		render()
		}
		return
	}
	
	if (btn.dataset.action === "ClosePopup") {
		closePopup()
		return
	}
	
	if (btn.dataset.move) {
		update(btn.dataset.move)
		render()
	}
})