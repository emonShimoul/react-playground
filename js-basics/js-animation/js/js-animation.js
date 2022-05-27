// *********** setInterval() and clearInterval() method (run just one time) ***************
// var a = 0;
// var id = setInterval(Anim, 500);

// function Anim(){
//     a = a+10;

//     if(a == 200){
//         clearInterval(id);
//     }else{
//         var target = document.getElementById("test");
//         target.style.width = a + 'px';
//     }
    
// }

// *********** setTimeout() and clearTimeout() method (run just one time) ***************
// var id2 = setTimeout(Anim2, 5000);

// function Anim2(){
//     var target = document.getElementById("test");
//     target.style.width = '500px';
// }

var id2 = setTimeout(function(){
    var target = document.getElementById("test");
    target.style.width = '500px';
}, 5000);


function stopAnimation(){
    clearTimeout(id2);
}