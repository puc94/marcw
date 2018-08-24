var m = require('mithril');

var dragModule = {
	oninit: (vnode) => {
		vnode.state.left = [
			{name: 'Test1'},
			{name: 'Test2'},
			{name: 'Test3'},
			{name: 'Test4'},
			{name: 'Test5'}
		];
		vnode.state.right = [
			{name: 'Test6'},
			{name: 'Test7'},
			{name: 'Test8'},
			{name: 'Test9'},
			{name: 'Test10'}
		];
	},
	view: (vnode) => {
		var list = (items) => {
			return items.map((item, index) => {
				return m('li', {
					index: index
				}, item.name)
			})
		}

		return m('.drag', {
			oncreate: () => {
				var left = document.querySelector('.left'),
					right = document.querySelector('.right')

				var drake = dragula([left, right])
				drake.on('drop', (element, target, source) => {
					var i = target.getAttribute('index'),
						t = target.className

					if (t === 'left') {
						vnode.state.left.push(vnode.state.right[i])
						vnode.state.right.splice(i, 1)
					}
					else {
						vnode.state.right.push(vnode.state.left[i])
						vnode.state.left.splice(i, 1)
					}
				})
			}
		}, [
			m('ul.left', list(vnode.state.left)),
			m('ul.right', list(vnode.state.right)),
		])
	}
}

m.mount(document.querySelector('#app'), dragModule);