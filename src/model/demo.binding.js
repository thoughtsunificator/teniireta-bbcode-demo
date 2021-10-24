import { Binding } from "domodel"
import { ToolbarModel } from "@teniireta/toolbar"
import { EditorModel, EditorBinding } from "teniireta"

import RawPreviewModel from "./raw-preview.js"

import RawPreviewBinding from "./raw-preview.binding.js"
import ToolbarBinding from "./toolbar.binding.js"

import BBCODE_SAMPLE from "data/bbcode-sample.js"


/**
 * @global
 */
class DemoBinding extends Binding {

	onCreated() {

		const { editor, template } = this.properties

		this.run(RawPreviewModel, {
			binding: new RawPreviewBinding({ editor, template })
		})

		this.run(ToolbarModel, {
			binding: new ToolbarBinding({ editor, toolbar })
		})

		this.run(EditorModel, {
			binding: new EditorBinding({ editor, inputStylesheetURL: `./resource/input.css`, template })
		})

		editor.listen("inputLoaded", () => editor.emit("setRaw", BBCODE_SAMPLE))

	}

}

export default DemoBinding
