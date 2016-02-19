/* core.js */
var APP = APP || {};	//namespace

/*
 * Prototype Blog
 *
 * Attributes: Title, Author, Content, images, date
 * Functions: renderTeaser, renderDetail
 */
APP.Blog = function(title, author, date, images, content) {
	this.title = title;
	this.author = author;
	this.date = date;
	this.images = images;
	this.content = content;
}

APP.Blog.prototype.renderTeaser = function(orientation) {
	var img = (this.images.length > 0) ? 
				$('<div class="col-sm-3"><img src="' + this.images[0] + '"></div>')
				: $('<div class="col-sm-3"></div>');
	var title = $('<h2>' + this.title + '</h2>');
	var author = $('<h3>By ' + this.author + '</h3>');
	var content = $('<p>' + this.content + '</p>');
	var textDiv = $('<div class="col-sm-9"></div>');
	textDiv.append(title);
	textDiv.append(author);
	textDiv.append(content);

	if(orientation === 'left') {
		var parent = $('<div class="row blg-blogTeaser"></div>');
		parent.append(img);
		parent.append(textDiv);
		return parent;
	} else if (orientation === 'right') {
		var parent = $('<div class="row blg-blogTeaser blg-blogTeaserReverse"></div>');
		parent.append(textDiv);
		parent.append(img);
		return parent;
	}
	return null;
}

APP.Blog.prototype.renderDetail = function() {

	var parent = document.createElement('div');
	parent.className = 'row blg-blogDetail';

	var child = document.createElement('div');
	child.className = "col-md-12";

	var img = document.createElement('img');
	img.src = this.images[0];
	child.appendChild(img);

	var h1 = document.createElement('h1');
	h1.innerHTML = this.title;
	child.appendChild(h1);

	var h2 = document.createElement('h2');
	h2.innerHTML = 'By ' + this.author;
	child.appendChild(h2);

	var p = document.createElement('p');
	p.innerHTML = this.content;
	child.appendChild(p);

	parent.appendChild(child);

	return parent;
}

