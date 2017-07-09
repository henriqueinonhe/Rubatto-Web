$(document).ready(main);

function main() {
	let navToggled = false;
	$(document).scroll(function() {
		if(window.pageYOffset > 150 && !navToggled) {
			$("#logo").css('background-image', 'url(img/logo2.png)');
			$("#logo").animate({
				padding: "30px 75px 30px 75px"},
				400, function() {
				/* stuff to do after animation is complete */
			});
			$("nav ul").animate({
				paddingTop: "5px",},
				400, function() {
				/* stuff to do after animation is complete */
			});
			navToggled = true;
		}
		else if(window.pageYOffset <= 150 && navToggled) {
			$("#logo").css('background-image', 'url(img/logo.png)');
			$("#logo").animate({
				padding: "50px 100px"},
				400, function() {
				/* stuff to do after animation is complete */
			});
			$("nav ul").animate({
				paddingTop: "0",},
				400, function() {
				/* stuff to do after animation is complete */
			});
			navToggled = false;
		}
	});
}