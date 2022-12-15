$(function() {
    $('.slide li').mouseenter(function() {
        $(this).addClass('slideColorColor')
    })
    $('.slide li').mouseleave(function() {
        $(this).removeClass('slideColorColor')
    })
    $('.slide li').click(function() {
        $(this).addClass('slideColor')
        $(this).siblings().removeClass('slideColor')
    })
})