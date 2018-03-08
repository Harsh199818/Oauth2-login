
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#info").css('display',"block");
    $("#loggedout").css("display" , "none");
    $("#username").text(profile.getName());
    $("#image").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
  }
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      $("#loggedout").css("display" , "block");
      $(".g-signin2").css("display" , "block");
      $("#info").css("display" , "none");
    });
/*
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
}
*/
