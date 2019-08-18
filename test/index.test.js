import { compareProp } from "../index";

describe("compareProp", () => {
	let elements;

	beforeEach(() => {
		elements = [{ name: "Hydrogen" }, { name: "Sulfur" }];
	});

	it("compares name case sensitive", () => {
		const filteredElements = elements.filter(compareProp("name", "Hydrogen"));

		expect(filteredElements[0]).toBe(elements[0]);
	});

	it("throws of prop is not present", () => {
		expect(() => {
			elements.filter(compareProp("nonExistent", ""));
		}).toThrow();
	});
});
