

// function light (show){
//     var pic;
//     if (show==0) {
//         pic = "imgs/bulb_off.jpg";
//     } else {
//         pic = "imgs/bulb_on.jpg";
//     }
//     document.getElementById("bulb").src =pic;
// }

function light (show){
    var pic;
    if (show==0) {
        pic = "bulb_off.jpg";
    } else {
        pic = "bulb_on.jpg";
    }
    document.getElementById("bulb").src=pic;
}