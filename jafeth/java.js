const like = document.getElementById('btn btn-formulario btn-2')
LikeCountElement = document.getElementById('num-0')
DisLikeCountElement = document.getElementById('num0')
let dislike = document.getElementById('btn btn-formulario btn-2')
let LikeCUENTA = 0;
let LikeCuenta = 0;

like.addEventListener( 'click' , () => {

    LikeCuenta++;
    DisLikeCountElement.textContent = LikeCuenta;

})


num2.addEventListener( 'click' , () => {

   LikeCUENTA++;
   LikeCountElement.textContent = LikeCUENTA;
 
 })
 


