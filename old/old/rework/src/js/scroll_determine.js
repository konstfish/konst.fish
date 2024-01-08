$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('#date').offset();
        $('.post').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                $('#datedata').html($(this).find('.description').text());
                //console.log(document.getElementById("date").innerHTML)

                if (document.getElementById("datedata").innerHTML == "one"){
                  $('#date').css("background-image", "url('/rework/img/card/fish.png')");
                  $("a.link").attr("href", "https://konst.fish");
                } else if (document.getElementById("datedata").innerHTML == "two"){
                  $('#date').css("background-image", "url('/rework/img/card/break.jpg')");
                  $("a.link").attr("href", "http://break.co.at");
                } else if (document.getElementById("datedata").innerHTML == "three"){
                  $('#date').css("background-image", "url('/rework/img/card/fishbotwp.png')");
                  $("a.link").attr("href", "https://konst.fish/bot");
                    $('.footer').css("opacity", "0");
                } else if (document.getElementById("datedata").innerHTML == "four"){
                  $('#date').css("background-image", "url('/rework/img/card/nextcloud.png')");
                  $("a.link").attr("href", "https://cloud.konst.fish");
                  $('.footer').css("opacity", "1");
                }

                return; //break the loop
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
        console.log(document.getElementById("date").backgroundImage)

    });

})
