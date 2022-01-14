/**
 * Example
 * =====================
 * For javascript vanilla
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

const m = require("../dist/functions/module").m; // const m = require("@ptkdev/node-module-boilerplate").m;

(async () => {
	const { app } = await m({ text: "hello-world" });

	console.log(app());
})();
