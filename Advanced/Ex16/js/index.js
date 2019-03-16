$(document).ready(function(){
    $(".fas").click(function() {
        $(".menu-bar").toggleClass("menu-toggle");
        $(".fas").toggleClass("fa-bars");
        $(".fas").toggleClass("fa-times");
        $(".rocket").toggleClass("rocket-animation");
    })
})