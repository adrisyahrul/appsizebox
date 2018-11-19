var user = new Array("admin", "superuser");
var pswd = new Array("admin", "superuser");

$("#login").click(function() {
        if($("#idlogin").val() == user[0] && $("#pswdlogin").val() == pswd[0]) {
            window.open('appsizebox-dekstop.html')
            }
        else {
            alert("Error User ID or Password, Please contact your administrator.")
            }
        });
$("#login2").click(function() {
        if($("#idlogin").val() == user[0] && $("#pswdlogin").val() == pswd[0] || $("#idlogin").val() == user[1] && $("#pswdlogin").val() == pswd[1]) {
            window.open('appsizebox-mobile.html')
            }
        else {
            alert("Error User ID or Password, Please contact your administrator.")
            }
        });