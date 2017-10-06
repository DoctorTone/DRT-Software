/**
 * Created by DrTone on 01/09/2017.
 */

//File for DRT Software Ltd



$(document).ready(() => {
    $('#fullPage').fullpage({
        anchors: ['home','about','demos1','demos2','demos3','contact'],
        sectionsColor: ['#353535', '#283ebc', '#8f3e35', '#8f3e35', '#8f3e35','#825cae'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About', 'Demos1', 'Demos2', 'Demos3', 'Contact'],
        verticalCentered: false
    });
});
