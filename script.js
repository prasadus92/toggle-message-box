//Author: Prasad U S
//Description: Simple jQuery toggle function for a "Leave a Message" sidebar
//License: Open Source
//jQuery 1.9.1
/*** Document Ready Functions ***/
jQuery(document).ready(function() {

    "use strict";

    /*Message Box Toggle Function*/
    $(".message-box-title").click(function() {
        $(".message-box-title").toggleClass("opened");
        $(".message-box-title > i").toggleClass("icon-angle-down");
        $(".message-form").slideToggle();
    });
});
