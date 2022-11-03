module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css")
	eleventyConfig.addCollection("posts", function(collectionApi) {
		return collectionApi.getFilteredByGlob("_posts/*.md");
		// return collectionApi.getFilteredByGlob(["posts/*.md", "notes/*.md"]);
	});
}
