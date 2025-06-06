export function buildDateForm() {
    let months = ["January", "February", "March", "April", "May",  "June", "July", "August", "September", " October", "November", "December"];    
    $('#datePicker').append('<div class= "col-2"></div>');
    $('#datePicker').append('<div class= "col-3"><select class="form-select" aria-label="Default select example" id="month"></select></div>');
  
    for(let i = 0; i < months.length;i++) {
       $('#month').append('<option value="'+i+'">'+months[i]+'</option')
    }

    $('#datePicker').append('<div class= "col-3"><select class="form-select" aria-label="Default select example" id="year"></select></div>');

    for(let i = 1990; i < 2027; i++) {
       $('#year').append('<option value="'+i+'">'+i+'</option>')
    }

    $('#datePicker').append('<div class= "col-2"><button class="btn btn-secondary text-white" id="submit">Go <i class="fa-solid fa-circle-arrow-right">‌</i></button></div>');
    $('#datePicker').append('<div class= "col-2"></div>');
    // set date to current month and year
    let d = new Date();
    let n = d.getMonth();
    let y = d.getFullYear();
    $('#month option:eq('+n+')').prop('selected', true);
    $('#year option[value="'+y+'"]').prop('selected', true);
  }
export function calendar(date) {

    $("#myCal").empty();

    if (date == null) {
       date = new Date;
     }

     let day = date.getDate();
     let month = date.getMonth();
     let year = date.getFullYear();
     console.log('month = ' + month);
     /*if (year == 2000 && month == 9){
      alert('Linkin Park');
     }*/
  
     let months = new Array('January','February','March','April','May','June', 'July','August','September','October','November','December');
     let this_month = new Date(year, month, 1);
     let next_month = new Date(year, month + 1, 1);
   
     let days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
     let first_week_day = this_month.getDay(); // day of the week of the first day
     let days_in_this_month = Math.round((next_month.getTime() - this_month.getTime())  / (1000 * 60 * 60 * 24));

     $('#myCal').append('<table id="myCalendar"></table>');
     $('#myCalendar').append('<thead><tr></tr></thead>');
  
     for (let i=0; i < days.length; i++) {
       $('#myCalendar thead tr').append('<th>'+days[i]+'</th>')
     }
  
     $('#myCalendar').append('<tbody></tbody>');
     $('tbody').append('<tr>');
   
     for(let week_day = 0; week_day < first_week_day; week_day++)  {
       $('tbody tr').append('<td id="'+week_day+'"></td>');
     }
    
     let week_day = first_week_day;
     let msg = "click works!";
     /* 
Hybrid Theory is the debut studio album by American rock band Linkin Park, released on October 24, 2000,
Chester and Talinda's wedding, December 31st 2005.
Cheng was seriously injured in an automobile crash on November 4, 2008
*/

     for (let day_counter=1; day_counter <= days_in_this_month; day_counter++) {
       week_day %= 7;
     
       if (week_day == 0) {
         // go to the next line of the calendar
         $('tbody').append('</tr><tr>');
       }
       if (year == 2000 && month == 9 && day_counter == 24){
        $('tbody tr:last').append('<td id="day'+day_counter+'">' + '<a href="#" onclick="alert(5896777);">' + '[ ' + day_counter + ' ]' + '</a>' + '</td>');
        let element = document.getElementById("day24");
        element.style.backgroundColor = "lightgreen";        
        }else if(year == 2005 && month == 11 && day_counter == 31){
          $('tbody tr:last').append('<td id="day'+day_counter+'">' + '<a href="#" onclick="alert(4785555);">' + '[ ' + day_counter + ' ]' + '</a>' + '</td>');
          let element = document.getElementById("day31");
          element.style.backgroundColor = "lightgreen";    
        }else if(year == 2008 && month == 10 && day_counter == 4){
          $('tbody tr:last').append('<td id="day'+day_counter+'">' + '<a href="#" onclick="alert(3674555);">' + '[ ' + day_counter + ' ]' + '</a>' + '</td>');
          let element = document.getElementById("day4");
          element.style.backgroundColor = "lightgreen";    
        } else{
       $('tbody tr:last').append('<td id="day'+day_counter+'">' + day_counter + '</td>');
        }
       week_day++;
     }
  }  
