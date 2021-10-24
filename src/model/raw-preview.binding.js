import { Binding } from 'domodel'

export default class extends Binding {

	async onCreated() {

		const { template, editor } = this.properties

		let html = true

		this.listen(editor, "inputChanged", data => {
			if(html) {
				this.root.textContent = data.raw
			} else {
				this.root.innerHTML = data.html
			}
		})

		this.listen(editor, "setHTMLMode", () => {
			html = true
			this.root.textContent = template.toRaw(this.root.innerHTML)
		})

		this.listen(editor, "setRawMode", () => {
			html = false
			this.root.innerHTML = template.toHTML(this.root.textContent)
		})

	}

}
