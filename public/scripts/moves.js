  //NO LONGER USEFUL FOR LOGING OUT, I HAVE AN AUTO LOG OUT WHEN NOT LOG IN
  //CAN USE THIS CALLBACK TO FETCH ALL FACEBOOK MOVES DATA
function fbLogoutUser() {
  FB.getLoginStatus(function(response) {
      if (response && response.status === 'connected') {
          FB.logout(function(response) {
              document.location.reload();
          });
      }
  });
} 