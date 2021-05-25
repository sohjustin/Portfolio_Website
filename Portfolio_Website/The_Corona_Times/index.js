var image_tracker = 'img1';

 function change(){
   var image = document.querySelector('#img1');
   if(image_tracker=='img1'){
     image.src='Images/asian-american-portrait-joan-mobileMasterAt3x-v4.jpg';
     image_tracker='img2';
   }
   else if (image_tracker == 'img2'){
     image.src='Images/asian-american-portrait-josh-mobileMasterAt3x-v5.jpg';
     image_tracker='img3';
   }

   else if (image_tracker == 'img3'){
     image.src='Images/asian-american-portrait-ruru-mobileMasterAt3x-v3.png';
     image_tracker='img4';
   }

   else if (image_tracker == 'img4'){
     image.src='Images/asian-american-portrait-sally-mobileMasterAt3x-v5.png';
     image_tracker='img5';
   }
   else{
     image.src='Images/asian-american-portrait-gabby-mobileMasterAt3x-v5.png';
     image_tracker='img1';
   }
 }


 var timer = setInterval('change();',4000);

 // this function is called when the onclick event runs. It stops the timer running.
 // function stop(){
 // clearInterval(timer); //the clearInterval method stops the timer from running
 // }
