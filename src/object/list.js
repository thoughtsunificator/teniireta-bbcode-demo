import { BBElement } from "@thoughtsunificator/bbcode-parser"
import { Command } from "@teniireta/toolbar"

export default class extends Command {

	static testSelection(data) {
		for(const node of data.nodeList) {
			if(node.nodeName === "UL" || node.nodeName === "OL") {
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
		const bbNode = new BBElement("list", data.value)
		const listItem = new BBElement("*")
		bbNode.appendChild(listItem)
		listItem.innerBBCode = data.bbcode
		return bbNode
	}

}
