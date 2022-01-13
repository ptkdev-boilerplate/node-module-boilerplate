/**
 * Git Hash
 * =====================
 * Get version and hash of commits
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import semver from "../package.json";

const execSyncWrapper = (command: string) => {
	let stdout: string | null = null;
	try {
		stdout = execSync(command).toString().trim();
	} catch (error) {
		console.error(error);
	}
	return stdout;
};

const branch = execSyncWrapper("git rev-parse --abbrev-ref HEAD");
const hash = execSyncWrapper("git rev-parse --short=7 HEAD");

const obj = {
	semver: semver.version.split("-")[0],
	branch,
	hash,
};

fs.writeFileSync(path.resolve("app/configs", "version.json"), JSON.stringify(obj, null, "\t"));
