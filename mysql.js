var mysql=require('mysql');
const mysqlconn=mysql.createConnection
({host:'localhost',user:'root',password:'temp@001',databases:'world'});
function testconn(err){
    if(err)
    console.log('Unable to connect to the database...');
    else
    console.log('Connected successfully...');
}
var req;
var res;

mysqlconn.connect(testconn);
function printEmployees(err,rows){
res.send(rows);
}
function getAllEmployee(request,response)
{
    req=request;
    res=response;
     console.query('select * from employee',printEmployees);
}
expapp.get('/',getAllEmployee);
expapp.listen(8081);
console.log('server started @ port 8081');