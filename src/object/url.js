import { BBElement } from "@thoughtsunificator/bbcode-parser"
import { Command } from "@teniireta/toolbar"

export default class extends Command {

	static testSelection(data) {
		for(const node of data.nodeList) {
			if(node.nodeName === "A") {
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
		const bbNode = new BBElement("url", data.value)
		bbNode.innerBBCode = data.bbcode
		return bbNode
	}

}
