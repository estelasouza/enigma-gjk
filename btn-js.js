var img1 = document.getElementById('hidden-img1')
var img2 = document.getElementById('hidden-img2')
function resposta1(){
    if(img1.style.display === "none"){
        img1.style.display = "inline"
        img2.style.display = "none"

    } else{
        img1.style.display = "none"

    }

}

function resposta2(){
    if(img2.style.display === "none"){
        img2.style.display = "inline"
        img1.style.display = "none"

    } else{
        img2.style.display = "none"

    }
    
}