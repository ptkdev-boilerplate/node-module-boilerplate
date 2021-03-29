import m from "./module";

(async () => {
	const { app } = await m({ text: "hello-world" });

	console.log(app());
})();
