import './style.css'
import { calendar } from './calendar.js'
import { buildDateForm } from './calendar.js'
import { caller } from './calendar.js'

 $().ready(function(){
  // build the picker form
  buildDateForm();
  calendar();
  
  $("#submit").click(function() {
    var newMonth = $('#month').val();
    var newYear = $('#year').val();
    var newDate = new Date(newYear, newMonth, 1);
    calendar(newDate);
    return false;
  });
 });


