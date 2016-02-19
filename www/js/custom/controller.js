/* controller.js */
var APP = APP || {};

APP.allBlogs = [];

APP.renderPage = function(allBlogs) {
	var path = window.location.pathname;
	APP.allBlogs = allBlogs;

	if(window.location.href.indexOf('blog') > -1) {
		lastSlash = window.location.href.lastIndexOf('/');
		var index = parseInt(window.location.href.substr(lastSlash + 6));
		APP.renderBlogPage(index);
	} else if(path === "/") {
		APP.renderHomePage();
	}
}

APP.renderHomePage = function() {
	var body = $('.blg-bodyContainer');
	for(var i = 0, len = APP.allBlogs.length; i < len; i++) {
		if(i % 2 === 0) {
			body.append(APP.allBlogs[i].renderTeaser('left'));
		} else {
			body.append(APP.allBlogs[i].renderTeaser('right'));
		}
	}
}

APP.renderBlogPage = function(index) {
	var blogHTML = APP.allBlogs[index].renderDetail();
	$('.blg-bodyContainer').append(blogHTML);
}