/**
 * javascript code for resume homework.
 * Created by youcheng on 16/6/14.
 */



var step = 0, $divList = null;
var $arrow = $(".arrow");
var swp = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: false,
    //initialSlide :4,
    onSlidePrevEnd: function () {
        step--;
        change();
        console.log(step)
        if (step === 4) {
            $arrow.css("display", "none");
        } else {
            $arrow.css("display", "block");
        }
    },
    onSlideNextEnd: function () {
        step++;
        change();
        console.log(step);
        if (step === 4) {
            $arrow.css("display", "none");
        } else {
            $arrow.css("display", "block");
        }

    }

});

function change() {
    $divList = $(".slider");
    $divList.each(function (index, item) {
        item.id = index === step ? $(item).attr("trueId") : '';
    })
}

/*loading*/
var $loader = $(".loading");
var $slide1 = $(".slide1");
var $arrow = $(".arrow");

window.onload = function () {
    $loader.css("display", "none");
    $slide1.attr("id", "slide1");
    $arrow.css("display", "block");
};


/*set root font size*/
~function (desW) {
    var winW = document.documentElement.clientWidth;
    var curFont = winW / desW * 100;
    document.documentElement.style.fontSize = curFont + "px";
}(320);

/*Music play and pause*/
~function () {
    var $audioWrap = $(".audio"),
        $myAudio = $audioWrap.find("audio");

    //auto play after 1s
    window.setTimeout(function () {
        $myAudio[0].play();
        $myAudio.on("canplay", function () {
            $audioWrap.css("display", "block");
            $audioWrap.addClass("rotate");
        })
    }, 1000);

    //click to pause and continue
    $audioWrap.on("click", function () {
        if ($myAudio[0].paused) {
            $myAudio[0].play();
            $audioWrap.addClass("rotate");
        } else {
            $myAudio[0].pause();
            $audioWrap.removeClass("rotate");
        }
    })
}();

/*inline-swiper*/
~function () {
    $(function () {
        var mySwiper = new Swiper('.swiper-container1', {
            direction: 'horizontal',
            pagination: '.swiper-pagination1',
            autoplay: 1000,
            loop: true,
            autoplayDisableOnInteraction: false
        })
    })
}();

















