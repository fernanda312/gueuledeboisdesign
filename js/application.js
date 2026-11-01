$(function(){

  $('#toggle, #bg, .cadre').click(function(){
    $('body').toggleClass('open');
  })

  var tv,
      playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3, loop: 1};

  window.onYouTubePlayerAPIReady = function(){
    tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
  }

  function onPlayerReady(){
    tv.loadVideoById($('.tv').data('video'));
    tv.mute();
    $(window).on('load resize', function(){
      vidRescale();
    });
  }

  function onPlayerStateChange(e) {
    $('#tv').addClass('active');
    console.log("changeState");
  }

  function vidRescale(){

    var w = $(window).width()+200,
    h = $(window).height()+200;

    if (w/h > 16/9){
      tv.setSize(w, w/16*9);
      $('.tv .screen').css({'left': '0px'});
    } else {
      tv.setSize(h/9*16, h);
      $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
    }
  }

	var i = 0;
	var texts = ['Atelier', 'Architecture', 'Design'];
	setInterval(function(){
		i++;i=i%3;
		var node = $('#page.home .active');
		var nextNode = node.next();

		if(!nextNode.hasClass('background')) {
			nextNode = $('#page.home .background:first-child');
		}

		node.removeClass('active');
		nextNode.addClass('active');

		$('.case1 h1').html(texts[i]);
	}, 4000);



});
