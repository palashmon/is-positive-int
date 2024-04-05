import isPositiveInt from ".";

describe("isPositiveInt", () => {
	describe("Valid positive values", () => {
		it.each([
			0,
			1,
			1.0,
			5034,
			5e2,
			9.007199254740991e15,
			Math.pow(2, 53) - 1,
			Number.MAX_SAFE_INTEGER,
		])("should return true for %p", (value) => {
			expect(isPositiveInt(value)).toBe(true);
		});
	});

	describe("Invalid values", () => {
		it.each([
			-5034,
			-5e2,
			-9.007199254740991e15,
			-Infinity,
			-Math.pow(2, 53) - 1,
			-Math.pow(2, 53),
			-Number.MAX_SAFE_INTEGER - 1,
			-Number.MAX_SAFE_INTEGER,
			"10",
			1.1,
			9.007199254740991e15 + 1,
			Infinity,
			Math.PI,
			Math.pow(2, 53),
			NaN,
			null,
			Number.MAX_SAFE_INTEGER + 1,
			Number.MIN_SAFE_INTEGER - 1,
			Number.MIN_SAFE_INTEGER,
			undefined,
			true,
			false,
			[1],
			{},
		])("should return false for %p", (value) => {
			//@ts-ignore
			expect(isPositiveInt(value)).toBe(false);
		});
	});
});
