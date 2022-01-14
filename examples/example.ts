/**
 * Example
 * =====================
 * For typescript
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

import m from "../dist/functions/module"; // import m from "@ptkdev/node-module-boilerplate";

(async () => {
	const { app } = await m({ text: "hello-world" });

	console.log(app());
})();
