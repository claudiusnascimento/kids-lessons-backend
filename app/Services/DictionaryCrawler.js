'use strict'

const puppeteer = require('puppeteer')

class DictionaryCrawler {

	async wordExists(word) {

		const browser = await puppeteer.launch({headless: true, args: ["--no-sandbox"]});
		const page = await browser.newPage();
		await page.goto(
			'https://www.dicio.com.br/' + word,
			{"waitUntil" : "networkidle2"}
		);

		const exists = await page.evaluate((word) => {

			let node = document.querySelector('.tit-significado');

			// none.innerText.trim()
			return node ? true : false;


		}, word);

		await browser.close();

		return exists;
	}

}

module.exports = DictionaryCrawler
