const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
const NUM = '0123456789'

const generate = (length) => {
	const possibleCharacters = (ALPHA + NUM).split('')

	let newPassword = ""
	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(Math.random() * possibleCharacters.length)
		let currentCharacter = possibleCharacters[randomIndex]
		newPassword += currentCharacter
	}
	return newPassword
}

export { generate }