$(function(){

    //Слайдер в pop-up
    $('.pop-up__slider-big').slick({
        asNavFor: '.pop-up__slider-thumb',
        draggable: false,
        arrows: false,
        fade: true
    });



    $('.pop-up__slider-thumb').slick({
        asNavFor: '.pop-up__slider-big',
        focusOnSelect: true,
        slidesToShow: 3,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="29" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2437 0.365723L17.6758 2.79785L5.20131 15.2723L17.6758 27.7468L15.2437 30.1789L0.415501 15.2723L15.2437 0.365723Z" fill="#EAEAEA"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="17" height="29" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75537 0.365723L0.323242 2.79785L12.7977 15.2723L0.323242 27.7468L2.75537 30.1789L17.5835 15.2723L2.75537 0.365723Z" fill="#EAEAEA"/></svg></button>'
    });



    //Range slider в фильтрах


    var $range = $("#example_2");
    var $inputFrom = $("#example_2_input_from");
    var $inputTo = $("#example_2_input_to");
    var instance;
    var min = 0;
    var max = 10000;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 10000,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });


});

