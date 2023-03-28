var password="12345"
var email="saitej9999@gmail.com"

window.alert("Login into India's Travel Page")
function accesstopage()
 {
    var usergivenUsId=document.getElementById("userEmail").value 
    var usergivenUsP=document.getElementById("userpass").value
    if (usergivenUsId==email&&usergivenUsP==password) 
    {
        var fom=document.forms
        fom[0].action="./Project_travel.html"
        fom[0].elements[2].type="submit"  
        window.alert("Login Successfully....................")  
    }
    else if (usergivenUsId!=email&&usergivenUsP==password) 
    {
        document.getElementById("status") .innerHTML="Email is Wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg, red,purple)" 
        document.getElementById("passdiv").style.borderColor="royalblue"
        window.alert("Check Your Email Id!!!!!!!!!!!!!!!!!!!!")
    }
    else if (usergivenUsId==email&&usergivenUsP!=password) 
    {
        document.getElementById("status") .innerHTML="Wrong Password"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg, rgb(255,0,111),red)" 
        window.alert("Incorrect Password, Please enter Your Password once again!!!!!!")      
    }
    else
    {
        document.getElementById("status") .innerHTML="Email & Password is Wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg, red,red)" 
        window.alert("Both Email and Password Entered is Incorrect? Modify to Login")  
    }
}
function visiblePass()
{
    var fom=document.forms 
    fom[0].element[1].type="text"
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.2s" 
    var img=document.images
    img[0].src="./mouthClose.jpg"
      
}
function invisiblePass() 
{
    var fom=document.forms
    fom[0].elements[1].type="password"
    var img=document.images
    img[0].src="./closeey.jpg"
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.2s"  
}
