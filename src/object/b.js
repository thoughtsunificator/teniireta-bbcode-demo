import { BBText, BBElement } from "@thoughtsunificator/bbcode-parser"
import { Command } from "@teniireta/toolbar"

export default class extends Command {

	static beforeExtract(data) {
		let toggle = false
		for(const node of data.nodeList) {
			if(node.nodeName === "SPAN" && node.style.fontWeight === "bold") {
				for(const child of node.childNodes) {
					node.parentNode.appendChild(child)
				}
				node.remove()
				toggle = true
			}
		}
		return { toggle }
	}

	static testSelection(data) {
		for(const node of data.nodeList) {
			if(node.nodeName === "SPAN" && node.style.fontWeight === "bold") {
				return true
			}
		}
		return false
	}

	/**
	 * @param   {Object} data
	 * @returns {BBNode}
	 */
	static createBBNode(data) {
		let bbNode
		if(data.extractData.toggle) {
			bbNode = new BBText(data.bbcode)
		} else {
			bbNode = new BBElement("b")
			bbNode.innerBBCode = data.bbcode
		}
		return bbNode
	}

}
