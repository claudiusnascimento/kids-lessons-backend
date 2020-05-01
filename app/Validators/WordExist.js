'use strict'

class WordExist {

	get rules () {
		return {
		word: 'required|min:2'
		}
	}

	get messages() {
		return {
			'word.required': 'Nenhuma palavra enviada para validação',
			'word.min': 'Palavra tem que ter no mínimo 2 letras'
		}
	}

  	async fails(errorMessages) {
		return this
					.ctx
					.response
					//.status(422)
					.json({ errors: errorMessages });
	}

}

module.exports = WordExist
