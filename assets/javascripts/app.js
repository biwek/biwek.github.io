var setFooter = (function() {
	currentYear = new Date().getFullYear()
	txt = "Biwek Shrestha &copy; " + currentYear
	$("section.footer").html(txt);
});

$(function () {
	setFooter();
});