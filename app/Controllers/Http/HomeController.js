'use strict'

const DictionaryCrawler = use('App/Services/DictionaryCrawler');

class HomeController {

	async index({response}) {

		response.send('success')

	}

}

module.exports = HomeController
