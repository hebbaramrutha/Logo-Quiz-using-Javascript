function validateAmul(x) {

localStorage.setItem("storageName",0);

    if(x.id==="Amul")
    {
        x.style.backgroundColor = "green";
		
		localStorage.setItem("storageName",1);
        setTimeout(function() {
            window.location="LogoTwo.html";
        }, 1000);

    }


    if(x.id!="Amul"){
        x.style.backgroundColor="red"
        document.getElementById("Amul").style.backgroundColor="green"
        setTimeout(function() {
            window.location="LogoTwo.html";
        }, 1000);

}}

function validateTanishq(x) {

    if(x.id==="Tanishq")
    {
        x.style.backgroundColor = "green";
		localStorage.setItem("storageName",2);
		 
        setTimeout(function() {
            window.location="LogoThree.html";
        }, 1000);

    }


    if(x.id!="Tanishq"){
        x.style.backgroundColor="red"
        document.getElementById("Tanishq").style.backgroundColor="green"

        setTimeout(function() {
            window.location="LogoThree.html";
        }, 1000);

    }}

function validateSbi(x) {

    if(x.id==="Sbi")
    {
        x.style.backgroundColor = "green";
        localStorage.setItem("storageName",3);
        setTimeout(function() {
            window.location="LogoFour.html";
        }, 1000);

    }


    if(x.id!="Sbi"){
        x.style.backgroundColor="red"
        document.getElementById("Sbi").style.backgroundColor="green"

        setTimeout(function() {
            window.location="LogoFour.html";
        }, 1000);

    }}

function validatePost(x) {

    if(x.id==="IndianPost")
    {
        x.style.backgroundColor = "green";

        localStorage.setItem("storageName",4);
        setTimeout(function() {
            window.location="Result.html";
        }, 1000);

    }


    if(x.id!="IndianPost"){
        x.style.backgroundColor="red"
        document.getElementById("IndianPost").style.backgroundColor="green"

        setTimeout(function() {
            window.location="Result.html";
        }, 1000);

    }}

function quizResult() {
    document.getElementById("ResultLabel").innerHTML=  localStorage.getItem("storageName") + "/4"
	localStorage.clear();
	
}



