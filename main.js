$(document).ready(function(){

		var contentHome;
		var contentMenu;

		$('body').append('<nav>');
		$('nav').append('<ul class="nav-bar">');
		for(var i = 0; i<3; i++){
			$('.nav-bar').append('<li></li>');
		}
		$('.nav-bar li').eq(0).text('HOME').end().eq(0).addClass('home');
		$('.nav-bar li').eq(1).text('MENU').end().eq(1).addClass('menu');
		$('.nav-bar li').eq(2).text('CONTACT').end().eq(2).addClass('contact');

		$('body').append('<div id="content-home">');
		$('#content-home').append('<div class="header">');
		$('.header').append('<div class="header-text">');
		$('.header-text').append('<h1>رستوران سنتی ایرانیان</h1>');

		$('#content-home').append('<div class="blog">');
		$('.blog').append('<h1>رستوران سنتی ایرانیان طبخ بهترین غذاها</h1>');
		$('.blog').append('<p>رستوران سنتی ایرانیان با کادری مجرب از بهترین سرآشپز ها و آشپز ها پذیرای هموطنان گرامی از سراسر کشو می باشد. همراه با بهترین موسیقی زنده و فضایی کاملا مطلوب برای خانواده ها.</p>');
		contentHome = $('#content-home').detach();
		contentHome.appendTo('body');

	$('.home').on('click', function(){
		$('div[id *= "content" ]').detach();
		contentHome.appendTo('body');

	});
	/*$('.home').trigger('click.home'); */

	$('.menu').on('click',function(){
		$('div[id *= "content" ]').detach();

		$('<div id="content-menu">').appendTo('body');

		$('#content-menu').append('<div class="menu-container">');
		for(var i = 0; i<4; i++){
			$('.menu-container').append('<div class="menu-list">');
		}
		$('.menu-list').append('<div class="food-img">');
		$('.menu-list').append('<div><h1>لازانیا با گوشت</h1></div>');
		$('.menu-list').append('<div><p>لازانیا با گوشت گاو و همچنین سس مخصوص و ادوینه جات </p></div>');

	});

	$('.contact').on('click', function(){
		$('div[id *= "content" ]').detach();

		$('body').append('<div id="content-contact">');

		$('#content-contact').append('<form>');

		$('form').append('<fieldset class="name">');
			$('fieldset.name').append('<label for="name">نام</label>');
			$('fieldset.name').append('<input type="text" id="name">');

		$('form').append('<fieldset class="email-form">');
			$('fieldset.email-form').append('<label for="name">ایمیل</label>');
			$('fieldset.email-form').append('<input type="email">');

		$('form').append('<fieldset class="text-form">');
			$('fieldset.text-form').append('<textarea rows="6" cols="20">');

		$('form').append('<input type="submit" value="ارسال">');

	});

	
});
