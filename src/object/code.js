import { BBElement } from "@thoughtsunificator/bbcode-parser"
import { Command } from "@teniireta/toolbar"

export default class extends Command {

	static testSelection(data) {
		for(const node of data.nodeList) {
			if(node.nodeName === "DIV" && node.className === "codetext") {
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
		const bbNode = new BBElement("code")
		bbNode.innerBBCode = data.bbcode
		return bbNode
	}

}
