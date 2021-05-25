var image_tracker = 'thecoronatimes-pic0';

 function change(){
   var image = document.querySelector('#thecoronatimes-pic0');
   if(image_tracker=='thecoronatimes-pic0'){
     image.src='../img/thecoronatimes-pic1.png';
     image_tracker='thecoronatimes-pic1';
   }
   else if (image_tracker == 'thecoronatimes-pic1'){
     image.src='../img/thecoronatimes-pic2.png';
     image_tracker='thecoronatimes-pic2';
   }

   else if (image_tracker == 'thecoronatimes-pic2'){
     image.src='../img/thecoronatimes-pic3.png';
     image_tracker='thecoronatimes-pic3';
   }

   else if (image_tracker == 'thecoronatimes-pic3'){
     image.src='../img/thecoronatimes-pic4.png';
     image_tracker='thecoronatimes-pic4';
   }
   else{
     image.src='../img/thecoronatimes-pic0.png';
     image_tracker='thecoronatimes-pic0';
   }
 }


 var timer = setInterval('change();',4000);

 // this function is called when the onclick event runs. It stops the timer running.
 // function stop(){
 // clearInterval(timer); //the clearInterval method stops the timer from running
 // }
