/**
 * Method: loadFriendList()
 * Description: load the json data from the url a prepare the DOM 
 */
function loadFriendList(requestUrl) {
    var result = {};
    $.ajax({ 
        type: 'GET', 
        url: FRIENDS_LIST_API, 
        dataType: 'json',
        success: function (data) {
            prepareDOM(data);
        }
    });
    /**
     * Method: prepareDom
     * Description: To prepare the DOM based on the json response data from the requested URL. 
     */
    function prepareDOM(result){
        var friendList = "<ul>";
        for(var i = 0; i < result.length; i++) {
            /* ------------------------------- Loading The Input Variables Starts ------------------------------------- */
            var name = result[i].first_name + " " + result[i].last_name;
            var email = result[i].email;
            var img = result[i].img;
            /* ------------------------------- Loading The Input Variables Ends ------------------------------------- */
            /* ------------------------------- Friends Image Section Starts ------------------------------------- */
            friendList = friendList +"<li><div class = 'friend-list-image'> <img src = '" + img + "' alt = 'Image Not Found'/></div>";
            /* ------------------------------- Friends Image Section Ends ------------------------------------- */
            /* ------------------------------- Friends Content Starts ------------------------------------- */
            var friendList = friendList + "<div class = 'friend-list-content'><h3>" + name + "</h3><p>" + email + "</p></div></li>";
            /* ------------------------------- Friends Content Starts ------------------------------------- */
        }
        var friendList = friendList + "</ul>";
        $("#friend-list-section").html(friendList);
    }
}
loadFriendList(requestUrl);