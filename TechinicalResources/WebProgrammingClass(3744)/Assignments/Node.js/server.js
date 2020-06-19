
const {ObjectId} = require('mongodb');
let express = require("express");
var bodyParser   = require('body-parser');
let app = express();
let dbo = null;
let VERBOSE = true;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));


let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/3744todolist";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;

  dbo = db.db("3744todolist");
  if(VERBOSE)console.log("Database created!");

  dbo.createCollection("tasks", function(err, res) {
    if (err) throw err;
    if(VERBOSE)console.log("Collection tasks created!");
  });
});

let insertDocument = function(db, collectionName, data, callback) {
  db.collection(collectionName).insertOne( data, function(err, result) {
    if(VERBOSE)console.log("insertDocument: Inserted a document into the "+collectionName+" collection. : " + data._id);
    if(callback)callback(data);
  });
};

let updateOneDocument = function(db, collectionName, query, newvalues, callback) {
  if(VERBOSE)console.log("updateOneDocument: query:" + JSON.stringify(query));
  if(VERBOSE)console.log("updateOneDocument: newValue:" + JSON.stringify(newvalues));
  db.collection(collectionName).updateOne(query,{ $set: newvalues }, function(err, res) {
    if (err) {
      throw err;
      if(callback)callback(err);
    }
    if(VERBOSE)console.log("updateOneDocument: Updated a document in "+collectionName+" collection. ");

    if(callback)callback();
  });
};

//https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
let writeOKResponse = function(res, message, data){
  let obj = {
    status: "OK",
    message: message,
    data: data
  };
  if(VERBOSE)console.log("writeOKResponse:" + message);

  res.writeHead(200, {'Content-type': 'application/json'});
  res.end(JSON.stringify(obj));
}

let writeBadRequestResponse = function(res, message){
  if(VERBOSE)console.log("writeBadRequestResponse:" + message);
  res.writeHead(400, {'Content-type': 'text/plain'});
  res.end(message);
}

let retreiveAllDocsList = function(db, query, fields,sort ){
  try {
    cursor = db.collection('tasks').find(query).sort(sort).project(fields);
  } catch (err) {
    if(VERBOSE)console.log("retreiveAllDocsList: retreiveAllDocsList Error\n" + err);
  }
  return cursor;
};

app.get('/fetchtasks', function (req, res) {
  if(VERBOSE)console.log("/fetchtasks request");
  let list = retreiveAllDocsList(
    dbo
    , {deleted:false}
    , { _id: 1, title: 1 , note: 1, completed:1, completeDate: 1, dueDate:1 }
    , {createdDate: 1}
  );
  list.toArray(function(err, docs){
    if(err){
      writeBadRequestResponse(res, "fetchtasks: Error in fetching data: " + err);
    }
    else{
      writeOKResponse(res, "fetchtasks: Succesfully Fetched Tasks Data ", docs);
    }
  });
});


app.post('/deletetask', function (req, res) {
  if(VERBOSE)console.log("/deletetask request");

  let task_id = req.body._id;
  if(task_id == null){
    writeBadRequestResponse(res, "deletetask: task _id not defined." + req.body);
    return;
  }

  updateOneDocument(dbo, "tasks",   {_id:ObjectId(task_id)}, {deleted:true}, function(err){
    if(err){
      writeBadRequestResponse(res, "deletetask: Delete Document Failed" + err);
      return;
    }
    writeOKResponse(res, "deletetask: Task deleted Successfully", {_id: task_id});
  });
});

app.post('/updatetask', function (req, res) {
  if(VERBOSE)console.log("/updatetask");

  let task_id  = req.body._id; // provide the _id
  let task_data  = req.body.data;

  if (task_id == undefined){
    writeBadRequestResponse(res, "updatetask: _id not defined.");
    return;
  }

  if (task_data == undefined){
    writeBadRequestResponse(res, "updatetask: data for id("+task_id+") not defined.");
    return;
  }

  for (let j=0; j< Object.keys(task_data).length; j++){
    if (!["title", "note", "dueDate", "completed", "completeDate"].includes(Object.keys(task_data)[j])){
      writeBadRequestResponse(res, "updatetask: unknown update field("+Object.keys(task_data)[j]+").");
      return;
    }
  }

  if (task_data.title && typeof(task_data.title) != "string"){
    writeBadRequestResponse(res, "updatetask: title needs to be string("+task_data.title+").");
    return;
  }

  if (task_data.note && typeof(task_data.note) != "string"){
    writeBadRequestResponse(res, "updatetask: note needs to be string("+task_data.note+").");
    return;
  }

  if (task_data.completed && task_data.completed != "true" && task_data.completed != "false" ){
    writeBadRequestResponse(res, "updatetask: completed needs to be boolean("+task_data.completed+").");
    return;
  }

  if (task_data.completed){
    task_data.completed = (task_data.completed == "true");
  }

  if(task_data.dueDate && typeof(task_data.dueDate) != "string"){
    writeBadRequestResponse(res, "updatetask: Due date needs to be string:" + task_data.dueDate);
    return;
  }

  if(task_data.dueDate){
    if(task_data.dueDate != '' && isNaN(Date.parse(task_data.dueDate)))
    {
      writeBadRequestResponse(res, "updatetask: Due date ill defined:" + Date.parse(task_data.dueDate));
      return;
    }
  }

  if(task_data.completeDate && typeof(task_data.completeDate) != "string"){
    writeBadRequestResponse(res, "updatetask: Complete date needs to be string:" + task_data.completeDate);
    return;
  }

  if(task_data.completeDate && isNaN(Date.parse(task_data.completeDate))){
    writeBadRequestResponse(res, "updatetask: Complete date ill defined:" + Date.parse(task_data.completeDate));
    return;
  }

  updateOneDocument(dbo, "tasks",   {_id:ObjectId(task_id)}, task_data, function(err){
    if(err){
        writeBadRequestResponse(res, "updatetask: Update Document Failed" + err);
        return;
    }
    writeOKResponse(res, "updatetask: Updated Successfully("+task_id+")", {_id: task_id});
  });
});

app.post('/newtask', function (req, res) {
  let task = req.body;

  if(typeof(task.title)!="string"){
    writeBadRequestResponse(res, "newtask: No title is defined.");
    return;
  }

  if(task.dueDate != '' && isNaN(Date.parse(task.dueDate))){
    writeBadRequestResponse(res, "newtask: Due date ill defined:" + Date.parse(task.dueDate));
    return;
  }

  if(typeof(task.note)!="string"){
    writeBadRequestResponse(res, "newtask: No due date is defined.");
    return;
  }

  // default data.
  task.completed = false,
  task.completeDate = null,
  task.createdDate= new Date(),
  task.deleted=false;

  insertDocument(dbo, "tasks", task, function(data){
    writeOKResponse(res, "newtask: Created Successfully", {_id: data._id});
  });
});

let server = app.listen(8081, function(){
    let port = server.address().port;
    if(VERBOSE)console.log("Server started at http://localhost:%s", port);
});
