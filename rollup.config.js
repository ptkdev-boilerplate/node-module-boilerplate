/* eslint-disable @typescript-eslint/no-var-requires */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
const yargs = require("yargs/yargs");
import { spawn } from "child_process";

const config = require("./configs/config");

const production = !config.debug;

function serve() {
	let server;

	function toExit() {
		if (server) {
			server.kill(0);
		}
	}

	return {
		writeBundle() {
			if (server) {
				return;
			}
			server = spawn("npm", ["run", "start"], {
				stdio: ["ignore", "inherit", "inherit"],
				shell: true,
			});

			process.on("SIGTERM", toExit);
			process.on("exit", toExit);
		},
	};
}

export default {
	input: "app/modules/index.ts",
	output: {
		sourcemap: true,
		format: "cjs",
		file: "dist/module.js",
		exports: "auto"
	},
	plugins: [
		json(),
		commonjs(),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: false
		}),
		typescript({
			sourceMap: true,
			inlineSources: !production,
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),
	],

	watch: {
		clearScreen: false,
	},
};
