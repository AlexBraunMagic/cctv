$(function(){

  



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

