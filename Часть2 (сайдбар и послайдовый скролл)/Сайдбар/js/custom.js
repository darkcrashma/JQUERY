$(function() {
    var footerH = $('.footer').innerHeight();
    $("#js-sticky").sticky({
        topSpacing:0,
        bottomSpacing: 25+footerH
    });
});
