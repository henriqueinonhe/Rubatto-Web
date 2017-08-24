var mainColor = "#EE2121";

$(document).ready(main);

function main() {
	animateNavBar();
	animateMembros();
	animateNavLinks();
	animateNavLinksScroll();

	//checkEnableMailSendButton();
}

function scrollOffset(element) {
	return parseInt($(element).offset().top - 70);
}

function animateNavBar() {

	let navToggled = false;
	$(document).scroll(function() {
		$("#sensor").html(window.pageYOffset);
		if(window.pageYOffset > 200 && !navToggled) {
			$("#logo h1 img").attr('src', 'img/logo2.png');
			$("#logo img").animate({
				width: "108px", height: "35px", margin : "0 30px"},
				400);
			navToggled = true;
		}
		else if(window.pageYOffset <= 150 && navToggled) {
			$("#logo h1 img").attr('src', 'img/logo.png');
			$("#logo img").animate({
				width: "216px", height: "70px", margin : "0 50px"},
				400);
			navToggled = false;
		}
	});
}

function animateMembros() {
	$(window).scroll(function() {
		if(window.pageYOffset >= scrollOffset("#boaz") - $(window).height() + 140) {
			$("#boaz").animate({left: "0"}, 600, function() {
				$(window).scroll(function() {
					if(window.pageYOffset >= scrollOffset("#henrique") - $(window).height() + 140) {
						$("#henrique").animate({right: "0"}, 600, function() {
							$(window).scroll(function() {
								if(window.pageYOffset >= scrollOffset("#daniel") - $(window).height() + 140) {
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

function resetNavLink() {
	$("header nav ul li").removeClass('active');
	$("header nav ul li").addClass('notActive');
}

function activateNavLink(id) {
	$(id).removeClass('notActive');
	$(id).addClass('active');
}

function animateNavLinks() {
	$(window).scroll(function() {
		if(window.pageYOffset <= scrollOffset("#sobre")) {
			resetNavLink();			
			activateNavLink("#homeLink");
		}
		else if(window.pageYOffset > scrollOffset("#sobre") && window.pageYOffset <= scrollOffset("#fotos")) {
			resetNavLink();
			activateNavLink("#sobreLink");
		}
		else if(window.pageYOffset > scrollOffset("#fotos") && window.pageYOffset <= scrollOffset("#videos")) {
			resetNavLink();
			activateNavLink("#fotosLink");
		}
		else if(window.pageYOffset > scrollOffset("#videos") && window.pageYOffset <= scrollOffset("#repertorio")) {
			resetNavLink();
			activateNavLink("#videosLink");
		}
		else if(window.pageYOffset > scrollOffset("#repertorio") && window.pageYOffset <= scrollOffset("#contato")) {
			resetNavLink();
			activateNavLink("#repertorioLink");
		}
		else if(window.pageYOffset > scrollOffset("#contato")) {
			resetNavLink();
			activateNavLink("#contatoLink");
		}
	});
}

function animateNavLinksScroll() {
	$("#homeLink").click(function() {
		$("body").animate({scrollTop : "0"}, 500);
	});
	$("#sobreLink").click(function() {
		$("body").animate({scrollTop : scrollOffset("#sobre") + 1 + "px"}, 500)
	});
	$("#fotosLink").click(function() {
		$("body").animate({scrollTop : scrollOffset("#fotos") + 1 + "px"}, 500)
	});
	$("#videosLink").click(function() {
		$("body").animate({scrollTop : scrollOffset("#videos") + 1 + "px"}, 500)
	});
	$("#repertorioLink").click(function() {
		$("body").animate({scrollTop : scrollOffset("#repertorio") + 1 + "px"}, 500)
	});
	$("#contatoLink").click(function() {
		$("body").animate({scrollTop : scrollOffset("#contato") + 1 + "px"}, 500)
	});
}

function checkEnableMailSendButton() {
	$("button").prop("disabled", true);
	$("button").css("background-color", "gray");

	$("input").click(function() {
		if(!$("input").eq(0).val() || !$("input").eq(1).val() ||
			!$("input").eq(2).val()) {
			$("button").prop("disabled", true);
			$("button").css("background-color", "#EE2121");
		}
		else {
			$("button").prop("disabled", false);
			$("button").css("background-color", "gray");
		}
	});
}





