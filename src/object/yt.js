import { BBElement } from "@thoughtsunificator/bbcode-parser"
import { Command } from "@teniireta/toolbar"

export default class extends Command {

	static testSelection(data) {
		for(const node of data.nodeList) {
			if(node.nodeName === "IFRAME" && node.className === "movie youtube"
		&& node.src.startsWith("https://youtube.com/embed/") && node.src.length > "https://youtube.com/embed/".length) {
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
		const bbNode = new BBElement("yt", data.value)
		return bbNode
	}

}
