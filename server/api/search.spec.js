const expect = require("chai").expect;
const axios = require("axios");

describe("Express Proxy", () => {
	xit("Correctly proxies the search request.", async () => {
		const response = await axios.get(
			"http://localhost:8080/api/search/search?api_key=APIKEY&q=testquery&limit=48&offset=0&rating=pg-13&lang=en",
		);
		expect(response.status).to.equal(200);
	});
});
