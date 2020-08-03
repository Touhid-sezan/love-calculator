var random =Math.floor( Math.random() * 100);

document.getElementById("button").addEventListener("click",function (){
    var yourName = document.getElementById("your-name").value;
    var crushName = document.getElementById("crush-name").value;
    if (yourName == "") {
        alert("Please write your name");
    } else if (crushName == "") {
        alert("Please write your crush name");
    } 
     else {
        document.getElementById("percent").value = "Your result is " + random + "%";
    }
})


// Try again button works
document.getElementById("try-button").addEventListener("click", function(){
    window.location.reload();
})
