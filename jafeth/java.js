const like = document.getElementById('num1')
LikeCountElement = document.getElementById('num0')
let dislike = document.getElementById('num2')
let LikeCUENTA = 0;

like.addEventListener( 'click' , () => {

   LikeCUENTA++;
   LikeCountElement.textContent = LikeCUENTA;

})


num2.addEventListener( 'click' , () => {

    LikeCUENTA--;
    LikeCountElement.textContent = LikeCUENTA;
 
 })
 

 const subs = document.getElementById('subs');

 subs.addEventListener('click', function () {
    if (subs.innerHTML == 'Suscripshon') {
        subs.innerHTML = 'Desuscripshon'
    } else { 
        subs.innerHTML = 'Desuscripshon'
    }
 })
