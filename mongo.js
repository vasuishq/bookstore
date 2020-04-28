var mongo=require('mongodb');
var express=require('express');
var expapp=express();
var myDB;
function testconnect(err, client)
{
    myDB=client.db('employee');
if (err){
    console.error(err.name);
    console.error(err.stack);
}else
    console.log("Connected to db.....");
    console.log("Client info : " +client);
}
mongo.MongoClient.connect
('mongodb://localhost:27017/employee?retryWrites=true&w=majority', testconnect);

function getEmployees(request, response){
    const cursor=myDB.collection('empinfo').find();
    //response.send(cursor);
    response.send("<html><body><b>data</b></body></html>");
    console.log(cursor);
}

//Handling Read operation of CRUD
expapp.get('/', getEmployees);
expapp.listen(8081);




/*const mysqlconn=mysql.createConnection
({host:'localhost', port : '3306', user:'root', password:'temp@001', database : 'mysql'});

function testconn(err){
    console.log(err);
    if(err)
        console.log('Unable to connect to the database...');
    else
        console.log('Connected sussessfully....');
}
var req;
var res;
mysqlconn.connect(testconn);
function printEmployees(err,  rows){ //Call back function

    res.send(rows);
}
function getAllEmployee(request, response) //Call back function
{
    req=request;
    res=response;
    mysqlconn.query
        ('select * from employee', printEmployees); //Static SQL
}
function getEmployee(request, response) //Call back function
{
    req=request;
    res=response;
    if(<condition>)
    processEmpID();
    if(<condition>)
        processMobNo();
    //?  is a substitution operator. Substitution happends in NodeJS environment
    mysqlconn.query
    ('select * from employee where emp_id = ? ', [request.params.empid], 
    printEmployees); //Static SQL
}
function getFewEmployee(request, response) //Call back function
{
    req=request;
    res=response;
    //qry='select * from employee where emp_id > ? and emp_id < ?', 
    //[request.params.empid1, request.params.empid2];

    mysqlconn.query('select * from employee where emp_id > ? and emp_id < ?', 
    [request.params.empid1, request.params.empid2], printEmployees); //Static SQL
}
function errorCheck(err){
    if(err)
        console.error('Error in procedure call');
    else
        console.log('Procedure executed successfully...');
}
function updateEmployee(request,response)
{
    req=request;
    res=response;

    mysqlconn.query('CALL UpdEmployee(?, ?)', [request.params.empid, request.params.mobno], 
    errorCheck);
    response.send("<HTML><BODY><B>Updated</B></body></html>");
}
expapp.get('/', getAllEmployee);
expapp.get('/:empid', getEmployee);
expapp.get('/:empid1/:empid2', getFewEmployee);
expapp.get('/UpdateEmployee/:empid/:mobno', updateEmployee);
expapp.listen(8081);
console.log('Server started @ port 8081');*/