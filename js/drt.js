/**
 * Created by DrTone on 01/09/2017.
 */

//File for DRT Software Ltd

$(document).ready( () => {
    $("#fullpage").fullpage( {
        sectionsColor: ['#494949', '#494949', '#494949', '#494949'],
        anchors: ["page1", "page2", "page3", "page4"],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About','Demos', 'Contact'],
        slidesNavigation: false
    });

    $('[id^="card"]').on("click", function() {
        $(this).hasClass("flipped") === true ? $(this).removeClass("flipped") : $(this).addClass("flipped");
    });
});

