import m from "./module";

(async () => {
	const { app } = await m({ text: "hello-world" });

	await console.log(app());
})();
