function testJQuery() {
    $("#h01").html("Hello jQuery");
    $("#h01").attr("style", "color:red").html("Hello jQuery2");

    attachButtonEventHandlers();
}

function attachButtonEventHandlers() {
    $(".btn1").click(function () {
        $(".btn1").hide();
    });

    $(".btn2").click(function () {
        $(".btn1").show();
    });

    $(".btn3").click(function () {
        $(".btn1").toggle();
    });
}