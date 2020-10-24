$(document).ready(function() {

	$('.mob_toggle').click(function(){
        if ($('.mobile_nav').hasClass('open')) {
            $('.mobile_nav').removeClass('open');
            $('body').css('overflow-y','auto');
        } else{
            $('.mobile_nav').addClass('open');
            $('body').css('overflow-y','hidden');
        }
        return false;
    });

    var ctx = document.getElementById('chartContainer').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [80, 20],
                    backgroundColor: ['#C4C4C4', '6C739A'],
                    borderWidth: 0
                }
            ]
        },
        options: {
            cutoutPercentage: 80,
            rotation: Math.PI/2,
            tooltips: {
                enabled: false
            },
            hover: {
                mode: null
            }
        }
    });                                         
    $('.testimonials_slider').slick({
        accessibility: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll:1,
        nextArrow: '<button class="next"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM-8.11239e-09 9L17 9L17 7L8.11239e-09 7L-8.11239e-09 9Z" fill="white"/></svg></button>',
        prevArrow: '<button class="prev"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.29289ZM18 7L1 7L1 9L18 9L18 7Z" fill="white"/></svg></button>',
        responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 

    new WOW().init();

    $(".modal-trigger").click(function(e){
        e.preventDefault();      
        $("#register").addClass('active');
        $('.modal-box.login').addClass('active');
        $("body").css({"overflow-y": "hidden"});     
    });
    $(".youtube-trigger").click(function(e){
        e.preventDefault();      
        $("#youtube").addClass('active');
        $("body").css({"overflow-y": "hidden"});     
    });

    $(".close-modal, .modal-sandbox").click(function(){
      $("#register").removeClass('active');
      $("body").css({"overflow-y": "auto"});
      $('#register .modal-box').removeClass('active');
    });

    $('#youtube .close-modal, #youtube .modal-sandbox').click(function(){
        // $('#youtube .youtube_video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('#youtube .youtube_video').attr('src', $('iframe').attr('src'));
        $("#youtube").removeClass('active');        
    });
    $('.register_button').click(function(){
        $(this).closest('.modal-box.login').removeClass('active');
        $('#register .modal-box.signup').addClass('active');
    });
    $('.login_button').click(function(){
        $(this).closest('.modal-box.signup').removeClass('active');
        $('#register .modal-box.login').addClass('active');
    });
    $('.pass_reset').click(function(){
        $(this).closest('.modal-box.login').removeClass('active');
        $('#register .modal-box.forgot_pass').addClass('active');
    });
    
    $(".calculate-trigger").click(function(e){
        e.preventDefault();      
        $("#calculate").addClass('active');
        $("body").css({"overflow-y": "hidden"});     
    });
    $('#calculate .close-modal, #calculate .modal-sandbox').click(function(){
        $("#calculate").removeClass('active');        
    });

    var pluses = $('#calculate form input[name=pluses]').val();
    var minuses = 10 - pluses;
    var minusesText = $('#calculate form .minuses').html();
    var percentText = $('#calculate form .percent').html();
    var percent = pluses/10;
    var depositText = $('#calculate form .deposit').html();    
    $('#calculate form .percent').html(percentText + '<span>' + pluses/10*100 + '%</span>');
    $('#calculate form .minuses').html(minusesText + '<span>' +  minuses + '</span>');
    $('#calculate form input[name=pluses]').change(function(){
        $('#calculate form .minuses').html(minusesText + '<span>' + (10 - $(this).val()) + '</span>');
        $('#calculate form .percent').html(percentText + '<span>' + $(this).val()/10*100 + '%</span>');
        percent = $(this).val()/10;
    });
    
    $('#calculate form').submit(function(e){     
        e.preventDefault();    
        var deposit = (0.75 * $('#calculate form input[name=income]').val() * percent * 10).toFixed(2);
        if(percent >= 0.5 && percent <= 0.7) {
            deposit = (1.2 * deposit).toFixed(2);
        }
        else if(percent < 0.5) {
            $('#calculate form .deposit').html('<p>Вам нужно больше практиковаться на демо счете</p>');
            return;        
        }
        $('#calculate form .deposit').html(depositText + '<span>' + deposit + ' $</span>');               
    });

});


window.addEventListener("resize", onResize);

function onResize() {
	if(window.innerWidth > 1024 && $('.mobile_nav').hasClass('open')) {
		$('.mobile_nav').removeClass('open');
        $('body').css({'overflow-y': 'auto'});
	}              
}


