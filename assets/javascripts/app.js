var setFooter = (function() {
	currentYear = new Date().getFullYear()
	txt = "Biwek Shrestha &copy; " + currentYear
	$(".footer .copyright").html(txt);
});

$(function () {
	setFooter();
});
