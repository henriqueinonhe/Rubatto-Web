var mainColor = "#EE2121";

$(document).ready(main);

function main() {
	animateNavBar();
	animateMembros();
	animateNavLinks();
	animateNavLinksScroll();
}

function animateNavBar() {

	let navToggled = false;
	$(document).scroll(function() {
		$("#sensor").html(window.pageYOffset);
		if(window.pageYOffset > 200 && !navToggled) {
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

function animateMembros() {
	$(window).scroll(function() {
		if(window.pageYOffset >= 300) {
			$("#boaz").animate({left: "0"}, 600, function() {
				$(window).scroll(function() {
					if(window.pageYOffset >= 450) {
						$("#henrique").animate({right: "0"}, 600, function() {
							$(window).scroll(function() {
								if(window.pageYOffset >= 600) {
									$("#daniel").animate({left: "0"}, 600);
								}
							});
						});
					}
				});
			});
		}
	});
}

function resetNavLink(id) {
	$(id).removeClass('active');
	$(id).addClass('notActive');
}

function activateNavLink(id) {
	$(id).removeClass('notActive');
	$(id).addClass('active');
}

function animateNavLinks() {
	$(window).scroll(function() {
		if(window.pageYOffset <= 200) {
			activateNavLink("#homeLink");
			resetNavLink("#sobreLink");			
		}
		else if(window.pageYOffset > 200 && window.pageYOffset <= 1000) {
			resetNavLink("#homeLink");
			activateNavLink("#sobreLink");
			resetNavLink("#fotosLink");
		}
		else if(window.pageYOffset > 1000 && window.pageYOffset <= 1550) {
			resetNavLink("#sobreLink");
			activateNavLink("#fotosLink");
			resetNavLink("#videosLink");
		}
		else if(window.pageYOffset > 1550 && window.pageYOffset <= 2000) {
			resetNavLink("#fotosLink");
			activateNavLink("#videosLink");
			resetNavLink("#repertorioLink");
		}
		else if(window.pageYOffset > 2000 && window.pageYOffset <= 2300) {
			resetNavLink("#videosLink");
			activateNavLink("#repertorioLink");
			resetNavLink("#contatoLink");
		}
		else if(window.pageYOffset > 2300) {
			resetNavLink("#repertorioLink");
			activateNavLink("#contatoLink");
		}
	});
}

function animateNavLinksScroll() {
	$("#homeLink").click(function() {
		$("body").animate({scrollTop : "0"}, 500);
	});
	$("#sobreLink").click(function() {
		$("body").animate({scrollTop : "530px"}, 500)
	});
	$("#fotosLink").click(function() {
		$("body").animate({scrollTop : "1200px"}, 500)
	});
	$("#videosLink").click(function() {
		$("body").animate({scrollTop : "1700px"}, 500)
	});
	$("#repertorioLink").click(function() {
		$("body").animate({scrollTop : "2100px"}, 500)
	});
	$("#contatoLink").click(function() {
		$("body").animate({scrollTop : "2350px"}, 500)
	});
}
