$(document).ready(function(){



var header = $('.header');
var red = $('.red');

red.on('mouseenter',function(){
  TweenMax.to(this,3, {
    left:200,
    bottom: 200,

  });
});

red.on('vmousemove',function(){
  TweenMax.to(this,3, {
    left:200,
    bottom: 200,

  });
})



// TweenMax.from(header,2, {
//   left:600,
//   top: 200,
//   borderRadius: 20,
//   borderStyle: 'solid',
//   borderWidth: 50,
//   width: 500,
//   scale: 1.5,
//   opacity: 1,
//   delay: 2,
//   background: 'red'
// });

// red.resizable();
// header.resizable();


})
