import './style.css'
import { calendar } from './calendar.js'
import { buildDateForm } from './calendar.js'
import Swal from 'sweetalert2'

import { dom, library, icon } from '@fortawesome/fontawesome-svg-core'
import { faFrog, faChevronCircleDown, faBookOpenReader, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faFrog, faChevronCircleDown, faBookOpenReader, faCircleArrowRight)
dom.watch()
//const camera = icon({ prefix: 'fas', iconName: 'camera' });


let strArray = ['empty',
  "Biff Tannen: Oh, McFly, your shoe's untied.",
  'Can you bend this spoon using just your mind?',
  "Biff Tannen: What're you lookin' at, butthead?",
  "Trinity: What's he doing?"];
let strArray2 = ['','','','', "Morpheus: He's beginning to believe."];

let counter = 0;

 $().ready(function(){
  // build the picker form
  buildDateForm();
  calendar();
  
  $("#submit").click(function() {
    let newMonth = $('#month').val();
    let newYear = $('#year').val();
    let newDate = new Date(newYear, newMonth, 1);
   
    calendar(newDate);
if (counter == 0 || counter == 2){
  counter++;
  
    Swal.fire({      
      imageUrl: "/assets/future.jpeg",
      confirmButtonText: 'OK',
      //imageHeight: 1500,
      icon: 'info',
      imageAlt: "photos",
      title: 'Time travel!',
      html: `${strArray[counter]}`
      
    });
  }else if(counter == 1 || counter == 3){
    counter++;
    Swal.fire({      
      imageUrl: "/assets/spoon.jpg",
      confirmButtonText: 'skip',
      //imageHeight: 1500,
      icon: 'question',
      imageAlt: "photos",
      html: `${strArray[counter]}<br>${strArray2[counter]}`
      
    });
    }else if(counter == 4){
      counter = 0;
      Swal.fire({      
        icon: 'warning',
        imageUrl: "/assets/matrix.jpg",
        confirmButtonText: 'OK',
        //imageHeight: 1500,
        
        imageAlt: "photos",
        text: 'AI is the new shit'
        
      });
    }else{
      counter = 0;
    }
    
    return false;
  });
 });


