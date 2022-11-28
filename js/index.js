
window.onload = function () {

    var adWidth;

    /* 메인 광고 슬라이드 크기 */
    function sliderImageSize() {
        var AdvertiseImage = document.querySelectorAll(".advertiseImage");
        var slideAd = document.querySelector(".sliderAdvertiseImage");
        var windowWidth = window.innerWidth;
        if(1200 < windowWidth && windowWidth < 1200){
            for(var i=0; i<AdvertiseImage.length; i++){
                AdvertiseImage[i].style.width = window.innerWidth+"px";
            }
        } else if(windowWidth <= 1200){
            for(var i=0; i<AdvertiseImage.length; i++){
                AdvertiseImage[i].style.width = "1200px";
            }
        } else {
            for(var i=0; i<AdvertiseImage.length; i++){
                AdvertiseImage[i].style.width = "1300px";
            }
        }

        slideAd.style.width = parseInt($(".advertiseImage").css("width")) * 6 +"px";
    };
    sliderImageSize();
    window.addEventListener('resize', sliderImageSize);

    /* 메인 광고 슬라이드 영역 */
    adWidth = parseInt($(".advertiseImage").css("width"));

    $(".sliderAdvertiseImage").append($(".advertiseImage").first().clone());
    $(".sliderAdvertiseImage").prepend($(".advertiseImage").eq(-2).clone());
    var index = 1;
    var auto, sw=true;

    moveSlider(index);
    autoSlider();
    $(".adUnderBar").click(function () {
        index = $(this).index();
        moveSlider(index+1);
    })

    $("#btnPrevAd").click(function() {
        if(index > 1){
            index --;
            moveSlider(index);
        } else{
            $(".sliderAdvertiseImage").css("left", -(adWidth * 6));
            index = 4;
            moveSlider(index);
        }
    });
    $("#btnNextAd").click(function() {
        if(index < 4){
            index ++;
            moveSlider(index);
        } else{
            $(".sliderAdvertiseImage").css("left", 0);
            index = 1;
            moveSlider(index);
        }
    });

    function autoSlider() {
        auto = setInterval(function () {
            if(index < 4 && sw == false){
                $("#btnPrevAd").trigger("click");
            } else {
                sw = true;
            }
            if(index > 0 && sw == true){
                $("#btnNextAd").trigger("click");
            } else {
                sw = false;
            }
        }, 8000);
    }

    function moveSlider(i) {
        $(".sliderAdvertiseImage").animate({
            left: -(i*adWidth)
        }, "slow");
        $(".adUnderBar").removeClass("active");
        $(".adUnderBar").eq(i-1).addClass("active");
    }
    /* 메인 광고 슬라이드 영역 종료 */

    /* 이벤트 슬라이드 영역 시작 */
    setInterval(slide,3000);

		function slide() {
				$('.slider').animate({
				marginRight: -800
				}, 500 , slideNext);
		}

		function slideNext(){
				$('.slider li').eq(0).appendTo('.slider');
				$('.slider').animate({
					marginRight: 0
				},0);
		}

    /* 이벤트 슬라이드 영역 종료 */

    /* 스타포스트 슬라이드 영역 시작 */
    setInterval(slide1,3000);

    function slide1() {
            $('.slider2').animate({
            marginRight: 800
            }, 500 , slideNext1);
    }

    function slideNext1 () {
            $('.slider2 li').eq(0).appendTo('.slider2');
            $('.slider2').animate({
                marginRight: 0
            },0);
    }

    /* 스타포스트 슬라이드 영역 종료 */
};

