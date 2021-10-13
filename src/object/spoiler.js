import { BBElement } from "@thoughtsunificator/bbcode-parser"
import { Command } from "@teniireta/toolbar"

export default class extends Command {

	static testSelection(data) {
		for(const node of data.nodeList) {
			if(node.nodeName === "DIV" && node.className === "hide_button" && node.children.length === 2 && node.children[0].nodeName === "INPUT"
		&& node.children[0].className === "button show_button" && node.children[1].nodeName === "SPAN" && node.children[1].className === "spoiler_content") {
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
		const bbNode = new BBElement("spoiler", data.value)
		bbNode.innerBBCode = data.bbcode
		return bbNode
	}

}
