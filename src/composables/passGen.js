const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
const NUM = '0123456789'

const generate = (length, useUpper, useNum) => {
	const possibleCharacters = (ALPHA + NUM).split('')

	let newPassword = ""
	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(Math.random() * possibleCharacters.length)
		let currentCharacter = possibleCharacters[randomIndex]

		if (!useNum && NUM.includes(currentCharacter)) {
			i--
			continue
		}

		if (useUpper && ALPHA.includes(currentCharacter)) {
			const randChance = Math.round(Math.random() * 100) % 2 == 0

			if (randChance) {
				currentCharacter = currentCharacter.toUpperCase()
			}
		}

		newPassword += currentCharacter
	}
	return newPassword
}

export { generate }