import { ToolbarBinding } from "@teniireta/toolbar"

import bModel from "./toolbar/bold.js"
import centerModel from "./toolbar/center.js"
import codeModel from "./toolbar/code.js"
import colorModel from "./toolbar/color.js"
import iModel from "./toolbar/italic.js"
import imgModel from "./toolbar/image.js"
import listModel from "./toolbar/list.js"
import quoteModel from "./toolbar/quote.js"
import rightModel from "./toolbar/right.js"
import sModel from "./toolbar/strike.js"
import sizeModel from "./toolbar/size.js"
import spoilerModel from "./toolbar/spoiler.js"
import uModel from "./toolbar/underline.js"
import urlModel from "./toolbar/url.js"
import ytModel from "./toolbar/youtube.js"

import bBinding from "./toolbar/bold.binding.js"
import centerBinding from "./toolbar/center.binding.js"
import codeBinding from "./toolbar/code.binding.js"
import colorBinding from "./toolbar/color.binding.js"
import iBinding from "./toolbar/italic.binding.js"
import imgBinding from "./toolbar/image.binding.js"
import listBinding from "./toolbar/list.binding.js"
import quoteBinding from "./toolbar/quote.binding.js"
import rightBinding from "./toolbar/right.binding.js"
import sBinding from "./toolbar/strike.binding.js"
import sizeBinding from "./toolbar/size.binding.js"
import spoilerBinding from "./toolbar/spoiler.binding.js"
import uBinding from "./toolbar/underline.binding.js"
import urlBinding from "./toolbar/url.binding.js"
import ytBinding from "./toolbar/youtube.binding.js"

export default class extends ToolbarBinding {

	onCreated() {

		const { editor } = this.properties

		this.run(bModel, { binding: new bBinding() })
		this.run(centerModel, { binding: new centerBinding() })
		this.run(codeModel, { binding: new codeBinding() })
		this.run(colorModel, { binding: new colorBinding() })
		this.run(iModel, { binding: new iBinding() })
		this.run(imgModel, { binding: new imgBinding() })
		this.run(listModel, { binding: new listBinding() })
		this.run(quoteModel, { binding: new quoteBinding() })
		this.run(rightModel, { binding: new rightBinding() })
		this.run(sModel, { binding: new sBinding() })
		this.run(sizeModel, { binding: new sizeBinding() })
		this.run(spoilerModel, { binding: new spoilerBinding() })
		this.run(uModel, { binding: new uBinding() })
		this.run(urlModel, { binding: new urlBinding() })
		this.run(ytModel, { binding: new ytBinding() })

	}

}
