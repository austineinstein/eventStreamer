// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function to_comment() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
	FB.Event.subscribe('comment.create', comment_callback);
  });
}
function to_undo(){
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  	FB.Event.subscribe('comment.remove', comment_callback);
    });
}

var comment_callback = function(response) {
  console.log("comment_callback");
  console.log(response);
}
