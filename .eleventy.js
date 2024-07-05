module.exports = function (eleventyConfig) {
	// Output directory: _site

	// Add css
	eleventyConfig.addPassthroughCopy("bundle.css");

	// Copy `media/` to `_site/assets/media`
	eleventyConfig.addPassthroughCopy("src/assets/media");

	// Copy `css/fonts/` to `_site/src/assets/styles/fonts`
	eleventyConfig.addPassthroughCopy("src/assets/fonts");

	// Copy any .media file to `_site`, via Glob pattern
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("src/assets/media/**/*.jpg");
	eleventyConfig.addPassthroughCopy("src/assets/media/**/*.mp4");
	eleventyConfig.addPassthroughCopy("src/assets/media/**/*.jpeg");
	eleventyConfig.addPassthroughCopy("src/assets/media/**/*.png");
	eleventyConfig.addPassthroughCopy("src/assets/media/**/*.gif");

};

