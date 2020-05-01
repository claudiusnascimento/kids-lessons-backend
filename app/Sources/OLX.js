'use strict'

class OLX {

	async getSource() {

		return {
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
		};
	}
}

module.exports = OLX
