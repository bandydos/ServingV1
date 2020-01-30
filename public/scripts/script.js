const btnSend = document.getElementById("btn-send");
const messageIn = document.getElementById("message-in");
const messageTable = document.getElementById("message-table");
btnSend.onclick = function(){
    messageIn.value = "";
}
