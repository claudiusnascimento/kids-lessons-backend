'use strict'

const DictionaryCrawler = use('App/Services/DictionaryCrawler');

class DictionaryController {

	async wordExists({request, response}) {

		let crawler = new DictionaryCrawler();

		let exists = await crawler.wordExists(request.input('word'));

		//if(exists && noExistsInDb) saveIndb();

		response.json({exists});
	}

}

module.exports = DictionaryController
