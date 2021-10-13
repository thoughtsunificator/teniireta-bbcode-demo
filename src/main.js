import "assets/main.css"

import { Core } from "domodel"
import { Editor } from "teniireta"
import { Toolbar } from "@teniireta/toolbar"
import { Template } from "@teniireta/bbcode-template"
import * as Codes from "@thoughtsunificator/bbcode-parser-template-example"

import DemoModel from "./model/demo.js"
import DemoBinding from "./model/demo.binding.js"

const template = new Template(Object.values(Codes), document)
window.addEventListener("load", async function() {

	const editor = new Editor()
	const toolbar = new Toolbar()

	Core.run(DemoModel, {
		binding: new DemoBinding({ editor, template }),
		parentNode: document.body
	})

})
