$(document).ready(function() {
    var today = new Date().toISOString().split('T')[0];
    $('#from-date').attr('min',today);
    var result = {};
    $("#flight-checker-submit").click(function() {
        var toLocation = $("#from-location").val();
        var toDate = $("#from-date").val();
        if(toLocation === "" || toDate === ""){
            alert('Enter All the fields');
        }else {
        toDate = toDate.replace(/-/g, "");
        var requestUrl = GOIBOBO_BASE_URL_API + "?app_id=" + GOIBOBO_APP_ID + "&app_key=" + GOIBOBO_APP_KEY + "&format=json&source=MAA&destination=" + toLocation + "&dateofdeparture=" + toDate + "&seatingclass=E&adults=2&children=0&infants=0&counter=100";
        loadFlights(requestUrl);
        }
    })
    function loadFlights(requestUrl) {
        $.ajax({ 
            type: 'GET', 
            url: requestUrl, 
            dataType: 'json',
            success: function (data) {
                showAvailableFlights(data);
            }
        });
    }
    function showAvailableFlights(data) {
        var flightLists = data.data.onwardflights;
        var flightDisplayList = "";
        $(".flights-display").html("");
        for( var i = 0; i < flightLists.length; i ++) {
            if(flightLists[i].stops == 0) {
                flightDisplayList += '<div class = "flight-display"><img src = "https://media.glassdoor.com/sqll/354360/indigo-squarelogo.png" alt = "Image could not be loaded .."/><div class = "flight-name"><h2>' + flightLists[i].airline +'</h2><h3>6E 765</h3></div><div class = "flight-timings"><div class = "flight-tracker"><h1>' + flightLists[i].deptime + '</h1><h3>' + flightLists[i].origin + '</h3></div><div class = "flight-total-hours"><h2>' + flightLists[i].splitduration + '</h2><div class = "line-design"></div></div><div class = "flight-tracker"><h1>' + flightLists[i].arrtime +'</h1><h3>' + flightLists[i].destination + '</h3></div></div><div class = "flight-amount"><h2> &#8377 ' + flightLists[i].fare.totalfare + '</h2></div><button id = "book-submit">Book</button></div>'
            }
        }
        $(".flights-display").append(flightDisplayList);
    }
})



                    
                        
                        
                    
                            
                            
                            
                            
                            
                        
                        