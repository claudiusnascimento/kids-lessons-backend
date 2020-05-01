'use strict'

const puppeteer = require('puppeteer')

class DashboardController {

	async index({request, response}) {


		const sources = [
			{
				name: 'Mercado Livre',
				crawler: {
					goto: 'https://lista.mercadolivre.com.br/veiculos/ford-fiesta-branco',
					nodes: 'li.results-item',
					info: {
						title: '.main-title',
						price: '.price__fraction',
						ano_km: '.item__attrs',
						img: 'img',
						link: 'a.item-link.item__js-link'
					}
				}
			},
			{
				name: 'OLX',
				crawler: {
					goto: 'https://www.olx.com.br/autos-e-pecas/carros-vans-e-utilitarios',
					nodes: 'ul.list li.item',
					info: {
						title: '.OLXad-list-title',
						price: '.OLXad-list-price',
						ano_km: '.text.detail-specific',
						img: 'img.image',
						link: 'a.OLXad-list-link'
					}
				}
			},
			{
				name: 'iCarros',
				crawler: {
					goto: 'https://www.icarros.com.br/ofertas',
					nodes: 'li.anuncio',
					info: {
						title: '.titulo_anuncio',
						price: '.preco_anuncio',
						ano_km: 'li.primeiro p',
						img: 'img',
						link: '.dados_anuncio a'
					}
				}
			}
		];


		const browser = await puppeteer.launch({headless: false});

		var allDataCars = [];

		for(var j = 0; j < sources.length; j++) {

			const page = await browser.newPage();

			var source = sources[j];

			await page.goto(
				source.crawler.goto,
				{"waitUntil" : "networkidle2"}
			);


			let cars = await page.evaluate((source) => {

				console.log(source);

				let nodes = document.querySelectorAll(source.crawler.nodes);

				var {title, price, ano_km, img, link } = source.crawler.info;

				let _c = [];

				for (var i = 0; i < nodes.length; i++) {

					let node = nodes[i];

					let _title = node.querySelector(title);
					let _price = node.querySelector(price);
					let _ano_km = node.querySelector(ano_km);
					let _link = node.querySelector(link);
					let _img = node.querySelector(img);

					let carObj = {
						title: _title ? _title.innerText.trim() : '',
						price: _price ? _price.innerText.trim() : '',
						ano_km: _ano_km ? _ano_km.innerText.trim() : '',
						link: _link ? _link.getAttribute('href') : '',
						img: _img ? (_img.getAttribute('src') || _img.getAttribute('data-src')) : ''

					};

					_c.push(carObj);

				};

				console.log(_c);
				return _c;

			}, source);

			console.log(cars);

			allDataCars = [...allDataCars, cars];
		}

		response.json(allDataCars);
	}

}

module.exports = DashboardController
