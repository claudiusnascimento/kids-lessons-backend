'use strict'

class MercadoLivre {

	async getSource() {

		return {
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
		};
	}
}

module.exports = MercadoLivre
