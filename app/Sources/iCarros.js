'use strict'

class iCarros {

	async getSource() {

		return {
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
		};
	}
}

module.exports = OLX
