import { defineConfig } from "tsup";

export default defineConfig({
	target: "es2022",
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	minify: true,
	skipNodeModulesBundle: true,
});
