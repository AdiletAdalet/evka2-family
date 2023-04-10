const mySound = document.getElementById("sound1");
const mySound2 = document.getElementById("sound2");
const lists = document.getElementsByClassName("list-group");




//Butun li'lere ses ekledim
// for(const list of lists){
//     list.addEventListener("click",()=>{
//         mySound2.play();
//         mySound2.volume=0.5;
//     })
// }

// Canin resmine ses ekledim
document.getElementsByClassName("section_quoute")[0].
addEventListener("click",()=>{
    mySound.play();
    mySound.volume=0.5;
})

function playSound(){
    mySound2.play();
    mySound2.volume = 0.5;
}


function playSoundAlert(){
    mySound2.play();
    mySound2.volume = 0.5;
    alert("Bunu Yapmaya Üşendim Bilader")
}




