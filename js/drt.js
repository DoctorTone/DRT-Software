/**
 * Created by DrTone on 01/09/2017.
 */

//File for DRT Software Ltd



$(document).ready(() => {
    $('#fullPage').fullpage({
        anchors: ['home', 'about', 'demos', 'demos2', 'contact'],
        sectionsColor: ['#353535', '#283ebc', '#8f3e35', '#8f3e35', '#825cae'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About', 'Demos', 'Demos2', 'Contact'],
        verticalCentered: false
    });
});
