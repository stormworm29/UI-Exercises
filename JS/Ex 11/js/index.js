$(document).ready(function() {
    $(".posts").on("click", "li", function() {
        var id = $(this).attr("id");
        var idName = "#" + id + " p";
        var className = ".posts p";
        $(className).slideUp();
        $(idName).slideToggle();
    });
});
/**
 * Method: getTripDetails
 * Description: Loads the details and alerts the details
 */
function getTripDetails() {
    var start = $("#start-date").val();
    var end = $("#end-date").val();
    var state = $("#state-input").val();
    alert("The start date is "+start+" and the end date is "+end+" to the state is "+state);
}

