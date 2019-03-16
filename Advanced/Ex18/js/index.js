$(document).ready(function(){
    var userConversationString = localStorage.getItem("userConversations"); 
    var userConversationJSON = JSON.parse(userConversationString);
    if(userConversationString == null) {
        userConversationJSON = {"userMessages" : []};
    } else {
        for(var messageIter = 0 ; messageIter < userConversationJSON.userMessages.length; messageIter++) {
            var userMessage = userConversationJSON.userMessages[messageIter];
            showMessages(userMessage.sender,userMessage.message,userMessage.receiver);
        }
    }
    /**
     * @name showMessages
     * @description Loads the chat messages corresponding to the sender and receiver
     * @param {String} sender Sender of the Message
     * @param {String} message Message Sent
     * @param {String} receiver Receiver of the Message
     */
    function showMessages(sender, message, receiver) {
        var yourdom = "<div class = 'your-message'><h4>Sent by :"+sender + "</h4> Message: " + message + "</div><div class = 'clear-fix'></div>";
        var mydom = "<div class = 'my-message'><h4>Sent to :"+receiver + "</h4> Message: " + message + "</div><div class = 'clear-fix'></div>";
        $("#"+sender+ " .messages").append(mydom);
        $("#"+receiver+ " .messages").append(yourdom);
    }
    /**
     * @name saveMessages
     * @description Saves the Message Details to the Local Storage
     * @param {String} sender Sender of the Message
     * @param {String} message Message Sent
     * @param {String} receiver Receiver of the Message
     */
    function saveMessages(sender, message, receiver) {
        var conversation = {"sender" : sender , "message" :  message ,"receiver" : receiver };
        userConversationJSON.userMessages.push(conversation);
        userConversationString = JSON.stringify(userConversationJSON);
        localStorage.setItem("userConversations", userConversationString);
    }
    /**
     * @name getInput
     * @description The Inputs Fetched from the Users
     * @param {String} id User Id
     */
    function getInput(userId) {
        var sentMessage = $("#"+userId+" .user-text-input").val();
        var receiver = $("#"+userId+" .receiver option:selected").val();
        $("#"+userId+" .user-text-input").val("");
        return [sentMessage,receiver];
    }
    $(".user-text-submit").click(function() {
        var userId = $(this).parent().parent().attr('id');
        var inputReceived = getInput(userId);
        saveMessages(userId,inputReceived[0], inputReceived[1]);
        showMessages(userId,inputReceived[0], inputReceived[1]);
    });
    $("#clear").click(function() {
        alert("Your Local Storage has been Cleared !!");
        localStorage.clear();
    })
})
