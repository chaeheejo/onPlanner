var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function loginAni(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

function login(){
  var id = $("#logId").val();
  var pw = $("#logPassword").val();
  firebase.auth().signInWithEmailAndPassword(id, pw)
          .then(function() {
            alert("로그인에 성공하셨습니다.");
            window.location.href="./month.html"
          })
          .catch(function(e) {
            alert("로그인에 실패하셨습니다.");
              return;
          });
}

function registerAni(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function register(){
  var id = $("#signId").val();
  var pw = $("#signPassword").val();
  var cf = $("#signPasswordCheck").val();

  if(pw != cf) {
    alert("Password does not match the confirm password.");
    return;
  }
  else{
    firebase.auth().createUserWithEmailAndPassword(id, pw)
    .then((user) => {
      alert("Signed Up!");
      window.location.href="./month.html"
    })
    .catch((error) => {
      alert(error);
      alert(id+" "+pw);
        return;
    });
  }
}


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyCVNLPrKuAgV5AOMiljfPIXixi2JsW8K2Q",
authDomain: "onplanner-7bf3a.firebaseapp.com",
projectId: "onplanner-7bf3a",
storageBucket: "onplanner-7bf3a.appspot.com",
messagingSenderId: "735146280318",
appId: "1:735146280318:web:23f1ad899e3ea25e171f2f",
measurementId: "G-CL9V314M9Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firebaseEmailAuth;
var userInfo;

firebaseEmailAuth = firebase.auth();
firebaseDatabase = firebase.database();

function register1(){

var id = $("#signId").val();
var pw = $("#signPassword").val();
var cf = $("#signPasswordCheck").val();

firebaseEmailAuth.createUserWithEmailAndPassword(id, pw).then(function(user) {
    userInfo = user;
    console.log("userInfo/"+userInfo);
    console.log("userInfo.currentUser/"+userInfo.currentUser);
    console.log("userInfo.uid/"+userInfo.uid);
    logUser(); 

    }, function(error) {
        //에러가 발생했을 때 
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });

    function logUser(){
    
    alert("가입성공");
}

}


$('.submit_log').click(function(){
  var id = $("#logId").val();
  var pw = $("#logPassword").val();
  firebaseEmailAuth.signInWithEmailAndPassword(id, pw)
          .then(function() {
              alert("로그인에 성공하셨습니다.");
              document.location.href="calendar.html"
          })
          .catch(function(e) {
              document.location.href="calendar.html"
              return;
          });


          document.location.href="calendar.html"
})