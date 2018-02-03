FontAwesomeConfig = { autoReplaceSvg: 'nest' };
$(document).ready(function () {
    var items = $(".slider .items");
    var active = $(".slider .active");
    var visible;

    // Defining Total Number of Images
    var total = items.length;

    // Count Defining Function
    function Count() {
        var visible = $(".slider .active").index() + 1;
        $(".slider .active .count").text(visible + "/" + total);
    }

    // Calling Count Defining Function
    Count();

    // Title Defining Function
    function Title() {
        var title = $(".slider .active img").attr("title");
        $(".slider .active .title").text(title);
    }

    // Calling Title Defining Function
    Title();

    // Arrow Toggler Function
    function ArrowToggler() {
        if (active.prev(".items")[0] == undefined) {
            $("#prev").css("display", "none");
        } else {
            $("#prev").css("display", "block");
        }

        if (active.next(".items")[0] == undefined) {
            $("#next").css("display", "none");
        } else {
            $("#next").css("display", "block");
        }
    }

    // Calling Arrow Toggler Function in Global
    ArrowToggler();

    // Addition of Nav-dots
    for (i = 0; i < items.length; i++) {
        $(".dot-nav").append($("<span class='dot'></span>"));
    }
    $(".dot-nav .dot").first().addClass("clicked");
    var dots = $(".slider .dot-nav .dot");

    // Previous Btn
    $("#prev").click(function () {
        $(active).removeClass("active");
        if (active.css("display", "block")) {
            active.toggle();
        }
        $(active).prev(".items").fadeIn();
        $(active).prev(".items").addClass("active");
        active = $(".slider .active");

        $(".slider .dot-nav .clicked").removeClass("clicked");
        $(dots).eq($(".slider .active").index()).addClass("clicked");

        Count();
        ArrowToggler();
        Title();
    });

    // Next Btn
    $("#next").click(function () {
        $(active).removeClass("active");
        if (active.css("display", "block")) {
            active.toggle();
        };
        $(active).next(".items").fadeIn();
        $(active).next(".items").addClass("active");
        active = $(".slider .active");

        $(".slider .dot-nav .clicked").removeClass("clicked");
        $(dots).eq($(".slider .active").index()).addClass("clicked");

        Count();
        ArrowToggler();
        Title();
    });

    // Dots Navigation
    $(".slider .dot").click(function () {
        $(".slider .dot-nav .clicked").removeClass("clicked");
        $(this).addClass("clicked");

        $(active).removeClass("active");
        if (active.css("display", "block")) {
            active.toggle();
        };

        $(items).eq($(this).index()).fadeIn();
        $(items).eq($(this).index()).addClass("active");
        active = $(".slider .active");

        Count();
        ArrowToggler();
        Title();
    });



});