$( document ).ready(function() {
    /**
     * @name loadProductList()
     * @description To Load the Products to the DOM based on the JSON retrieved from the AJAX call
     */
    function loadProductList() {
        var result = {};
        $.ajax({ 
            type: 'GET', 
            url: "https://api.myjson.com/bins/17fxyw", 
            dataType: 'json',
            success: function (data) {
                prepareDOM(data.data);
            },
            error: function(){
                console.log("Unable to reach");
            }
        });
        /**
         * 
         * @param {Integer} rate 
         * @name findRating()
         * @description To print the Stars corresponding to the rating obtained.
         */
        function findRating(rating) {
            var result = "";
            for( var rate = rating; rate > 0; rate--)
            {
                if (rate == 0.5) {
                    result += "<i class='fas fa-star-half-alt'></i>";
                }
                else {
                    result += "<i class='fas fa-star'></i>";
                }
            }
            if( rating < 4.5) {
                for ( var rate = 5; rate > rating ; rate--) {
                    result += "<i class='far fa-star'></i>";
                }
            }
            return result;
        }
        /**
         * 
         * @param {The JSON resulted from AJAX Call} result 
         * @name prepareDOM()
         * @description Prepares all the Sections to display the products against the categories
         */
        function prepareDOM(result) {
            categories = {};
            for(var category = 0; category < result.length; category++) {
                if(!(result[category].category.toLowerCase() in categories)) {
                    categories[result[category].category.toLowerCase()] = [];
                }
                categories[result[category].category.toLowerCase()].push(result[category]);
            }
            var sections = "";
            Object.keys(categories).forEach((key) => {
                var section = "<section class = 'category-section'><h3>"+ key.toUpperCase() +"</h3><div class = 'products-section'><ul>";
                for(var category = 0; category < categories[key].length; category++) {
                    var clickon = "onclick = toDescription('" + categories[key][category]._id + "')";
                    var rating = findRating(categories[key][category].rating);
                    rating = "<div class = 'rating-stars'>" + rating + "</div>";
                    section += "<li class = 'product' id =  '" + categories[key][category]._id + "' " + clickon + "  ><div class = 'product-image'><img src = '" + categories[key][category].imageUrl + "'alt = 'Image Not Found'/></div><div class = 'product-content'><h5>" + categories[key][category].brand + "</h5><h4>" + categories[key][category].name + "</h4>" + rating + "</div></li>";
                }
                section += "</ul></div></div></section>";
                sections += section;
            })
            $("#products").html(sections);
        }
    }
    loadProductList();
    $("#product-description").hide();
    $("#products").show();
});
/**
 * 
 * @param {Integer} id 
 * @name toDescription()
 * @description Redirect to the Product Description Page
 * 
 */
function toDescription (id) {
    var win = window.open('./productDescription.html?id=' + id, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
}