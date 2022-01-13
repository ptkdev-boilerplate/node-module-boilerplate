/**
 * Run
 * =====================
 *
 * Start module
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import m from "@app/functions/module";
import translate from "@translations/translate";
import logger from "@app/utils/logger";
(async () => {
	const { app } = await m({ text: translate("hello", { name: "Boilerplate" }) });

	logger.info(app());
})();
