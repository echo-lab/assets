import React from 'react';
import './App.css';
import $ from 'jquery';


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


function reviveDate(strDate){

  if(strDate == null)
    return null;

  let dateObj = new Date(strDate);
  if (isNaN(dateObj.getTime()))
  {
    dateObj = null;
  }

  return dateObj;
}


function Header(){
  return(
    <header  className = "text-center">
      <h1>CS3744 Todo List</h1>
    </header>
  )
}

function Footer(){
  return (
    <footer>
      <nav className="navbar navbar-fixed-bottom navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">CS3744 Quick Links</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a target = "_blank" href="https://canvas.vt.edu/courses/104568">Canvas</a></li>
            <li><a target = "_blank" href="https://piazza.com/className/k5hm159hdikij">Piazza </a></li>
            <li><a target = "_blank" href="http://bit.ly/cs3744-spring2020-schedule">Schedule</a></li>
            <li><a target = "_blank" href="https://calendar.google.com/calendar/embed?src=vt.edu_qqliqp0g164uae6j72k8e239ko%40group.calendar.google.com&ctz=America%2FNew_York">Office Hours</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

function NavBar(props){

  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Todo List React</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon glyphicon-refresh"></span> Refresh</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-fire"></span> Overdue</a></li>
          <li><a href="#">Hide Completed Tasks</a></li>
        </ul>
      </div>
    </nav>
  );
}


function TodoItem(props){

  return(
    <tr>
      <td className="text-center"><input type="checkbox" className="form-check-input"/></td>
      <td className="text-left">Buying Toilet Paper</td>
      <td className="text-center">04/23/2020</td>
      <td className="text-center"></td>
      <td className="text-center">
        <button type="button" className="btn btn-danger btn-xs" alt="Delete the task">
          <span className="glyphicon glyphicon-trash"></span>
        </button>&nbsp;&nbsp;
        <a target="_blank" href="mailto:?subject=Buying%20Toilet%20Paper" >
          <button type="button" className="btn btn-info btn-xs" alt="Send an email">
            <span className="glyphicon glyphicon-envelope"></span>
          </button>
        </a>
      </td>
    </tr>
  );
}


function TodoList(props){

  return(
    <main>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th className = "text-center task-title">Task</th>
            <th className = "text-center">Due date</th>
            <th className = "text-center">Complete date</th>
            <th className = "text-center">Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan="5"> Hurrah! There is nothing to do! Wait, are you sure? </td></tr>
          <TodoItem/>
          <NewTask/>
        </tbody>
      </table>
    </main>
  );
}

function NewTask(props){

  return (
    <tr className = "border">
      <td className="text-center" style={{verticalAlign: "middle"}}>
              New Task
      </td>
      <td className="text-center"><input type="text" className = "form-control"  placeholder="Type your task here. (Required)"/></td>
      <td className="text-center" ><input type="text" className = "form-control" placeholder="Due Date(mm/dd/yyyy)"/></td>
      <td className="text-right" colSpan = "2">
      <button type="button" className="btn btn-default btn-success" alt="Add New Task">
        <span className="glyphicon glyphicon-plus"></span>Add New Task
      </button>
      </td>
    </tr>
  );
}


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <TodoList/>
      <br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
