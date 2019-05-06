import { expect } from "chai";
import { buildSearchString } from "./search";

describe("Search String Builder", () => {
	it("Correctly builds the search string for a regular search.", () => {
		expect(
			buildSearchString("search", "test query", true, 48, 0, "pg-13", "en"),
		).to.equal(
			"/api/search/search?api_key=APIKEY&q=test query&limit=48&offset=0&rating=pg-13&lang=en",
		);
	});
	it("Correctly builds the search string for a trending search.", () => {
		expect(buildSearchString("trending", "", true, 48, 0, "r", "es")).to.equal(
			"/api/search/trending?api_key=APIKEY&limit=48&offset=0&rating=r",
		);
	});
	it("Correctly builds the search string for a random search.", () => {
		expect(
			buildSearchString("random", "", false, 48, 0, "pg-13", "en"),
		).to.equal("/api/search/random?api_key=APIKEY&rating=pg-13");
	});
});
