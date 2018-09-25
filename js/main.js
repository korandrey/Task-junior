// Анимация background
var imgHead = [
	'images/bg.jpg',
	'images/bg1.jpg',
	'images/bg2.jpg',
	'images/bg3.jpg',
	'images/bg4.jpg',
], i = 1;

function csaHead() {

	if (i > (imgHead.length - 1)) {

		$('.csa-head').animate({ 'opacity': '0' }, 200, function () {

			i = 1;

			$('.csa-head').css({ 'background-image': 'url(' + imgHead[0] + ')' });
			$('.csa-head').css({ 'background-position': 'center' });
			$('.csa-head').css({ 'background-repeat': 'no-repeat' });

		});

		$('.csa-head').animate({ 'opacity': '1' }, 200);

	} else {

		$('.csa-head').animate({ 'opacity': '0' }, 200, function () {
			
			$('body').css({ 'background-image': 'none' });

			$('.csa-head').css({ 'background-image': 'url(' + imgHead[i] + ')' });

			$('.csa-head').css({ 'background-position': 'center' });

			$('.csa-head').css({ 'background-repeat': 'no-repeat' });

			i++;

		});

		$('.csa-head').animate({ 'opacity': '1' }, 200);

	}

}

var intervalCsaHead = setInterval(csaHead, 8000);