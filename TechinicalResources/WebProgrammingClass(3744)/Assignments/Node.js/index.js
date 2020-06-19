let tasks = [];

function truncate(input, number) {
   if (input.length > number)
      return input.substring(0,number) + '...';
   else
      return input;
};

function getFormattedDate(date) {
  if(date == null){
    return "";
  }
  var year = date.getFullYear();

  var month = (1+date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}

// date we get from server is string. This is to change the string to Date object
let reviveDate = function(strDate){

  if(strDate == null)
    return null;

  let dateObj = new Date(strDate);
  if (isNaN(dateObj.getTime()))
  {
    dateObj = null;
  }

  return dateObj;
}

let renderHTML = function(index){
  let renderedHTML = "";
  // TODO redner HTML element for one item.
  return renderedHTML;
}

let renderTasks =function(){
  // TODO redner all HTML elements based on the current tasks object.
  // Add event handlers for checkboxes, delete button, and udpate button.
  // using for loop is recommended over using forEach function so that you can use array index.
  // note that renderHTML takes index as its only parameter. 
};

let fetchData = function(){
  // TODO replace tasks (line 1) objects with the ones from the server response.
  // make sure that you use reviveDate to convert string to Date object.
}

$(document).ready(function(){

  fetchData();

  $("#deleteCompletedTasks").click(function(){

  });

  $('#overdue').click(function(){

  });

  $('#hidecompleted').click(function(){

  });

  $("#updateTask").click(function(event){

  });

  $("#submitNewTask" ).click(function( event ) {

  });

  $(".addtask").click(function(){

  });

  $("#refresh").click(function(){

  });

});
