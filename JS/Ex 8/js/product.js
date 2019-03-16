$(document).ready(function () {
    /**
     * 
     * @param {Input Parameter} sParam 
     * Method: GetURLParameter()
     * Desc: To get the Product Id sent through the URL using GET method.
     * 
     */
    //TODO: camelCase notation
    function GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
    /**
     * 
     * @param rate : number
     * @name findRating()
     * @description To print the Stars corresponding to the rating obtained.
     * 
     */

    //JS docs notation

    function findRating(rating) {
        var result = "";
        for (var rate = rating; rate > 0; rate--) {
            if (rate == 0.5) {
                result += "<i class='fas fa-star-half-alt'></i>";
            }
            else {
                result += "<i class='fas fa-star'></i>";
            }
        }
        if (rating < 4.5) {
            for (var rate = 5; rate > rating; rate--) {
                result += "<i class='far fa-star'></i>";
            }
        }
        return result;
    }
    /**
     * 
     * @param {The JSON resulted from AJAX Call} result 
     * Method: prepareDOM()
     * Desc: Prepares all the Sections to display the products against the categories
     * 
     */
    function prepareDOM(result) {
        var id = GetURLParameter('id');
        // index 
        for (var item = 0; item < result.length; item++) {
            if (result[item]._id == id) {
                var rating = findRating(result[item].rating);
                rating = "<div class = 'rating-stars-desc'>" + rating + "</div>";
                $("#brand-id").html(result[item].brand);   
                $("#product-name").html(result[item].name);
                $("#price").html(result[item].price);
                var imgurl = "<img src = '" + result[item].imageUrl + "' alt = 'Image Not Found'/>";
                $(".description-image").html(imgurl);
                $("#description-main").html(result[item].description);
                $("#star-rate").html(rating);
                $("#size").html(result[item].size);
                $("#color").html(result[item].color);
            }
        }
    }
    /* -------------------------------- START :: AJAX Call -------------------------------- */
    $.ajax({
        type: 'GET',
        url: "https://api.myjson.com/bins/17fxyw",
        dataType: 'json',
        success: function (data) {
            prepareDOM(data.data);
        },
        error: function () {
            console.log("Unable to reach");
        }
    });
    /* -------------------------------- END :: AJAX Call -------------------------------- */
    /* -------------------------------- START :: Review Display Section -------------------------------- */
    size = $(".review").length;
    reqsize = 3;
    $('.review:lt(' + reqsize + ')').show();
    $(".read-more").click(function () {
        reqsize = (reqsize + 3 <= size) ? reqsize + 3 : size;
        $('.review:lt(' + reqsize + ')').show();
    });
    /* -------------------------------- END :: Review Display Section -------------------------------- */
    $('#product-add').submit(function (e) {
        e.preventDefault();
        alert("form submitted");
        window.location.replace("./index.html");
    });
});