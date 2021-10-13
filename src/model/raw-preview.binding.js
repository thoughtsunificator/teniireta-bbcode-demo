import { Binding } from 'domodel'

export default class extends Binding {

	async onCreated() {

		const { template, editor } = this.properties

		let html = true

		this.listen(editor, "input changed", data => {
			if(html) {
				this.root.textContent = data.raw
			} else {
				this.root.innerHTML = data.html
			}
		})

		this.listen(editor, "mode set html", () => {
			html = true
			this.root.textContent = template.toRaw(this.root.innerHTML)
		})

		this.listen(editor, "mode set raw", () => {
			html = false
			this.root.innerHTML = template.toHTML(this.root.textContent)
		})

	}

}
