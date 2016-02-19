/* loader.js */
var APP = APP || {};
window.onload = function() {
	$.get('json/data.json', function(data) {
		console.log(data)
		var allBlogs = [];
		for(var i = 0, len = data.length; i < len; i++) {
			allBlogs.push(new APP.Blog(data[i].title,
									data[i].author,
									data[i].date,
									data[i].images,
									data[i].content));
		}
		APP.renderPage(allBlogs);
	});
}