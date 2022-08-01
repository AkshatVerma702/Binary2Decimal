
let act = document.getElementById("btn")

function conversion(act){
    var input = document.getElementById("binary").value
    var ans = parseInt(input,2);
    document.getElementById("decimal").value = ans;
       
}

document.getElementById("reset").onclick = function(){
    document.getElementById("binary").value = null
    document.getElementById("decimal").value = null
}
