/**
 * Created by DrTone on 01/09/2017.
 */

//File for DRT Software Ltd



$(document).ready(() => {
    $('#fullPage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        sectionsColor: ['#353535', '#1BBC9B', '#7E8F7C', '#808080'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['About', 'Demos', 'Blog', 'Contact']
    });
});
