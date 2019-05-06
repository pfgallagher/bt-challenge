const router = require("express").Router();
const proxy = require("http-proxy-middleware");
const giphyAPIKey = process.env.GIPHY_API_KEY;

const filter = (path, req) => req.method === "GET";

router.use(
	"/",
	proxy(filter, {
		target: "https://api.giphy.com/v1/gifs/",
		changeOrigin: true,
		pathRewrite: path =>
			path
				.split("/api/search/")
				.join("")
				.replace("APIKEY", giphyAPIKey),
		logLevel: "debug",
	}),
);

module.exports = router;
