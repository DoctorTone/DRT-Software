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
        navigationTooltips: ['firstSlide', 'secondSlide','firstSlide', 'secondSlide']
    })
});

