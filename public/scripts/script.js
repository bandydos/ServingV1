const btnSend = document.getElementById("btn-send");
const messageIn = document.getElementById("message-in");
const messageTable = document.getElementById("message-table");
btnSend.onclick = function(){
    messageIn.value = "";
}
if ('geolocation' in navigator){ //If geolocation is available.
    console.log("works");

    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
    });
} else {
    console.log("doesnt work");
}