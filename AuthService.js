var s=require('http');
var fsref=require('fs');
var uname='sanjay';
var pwd='tmp001';
function processRequest(request, response){
    if(request.method == 'POST')
    {
        body='';
        request.on('data', chunk => { body += chunk.toString()}); //chunk will be in json format.
        request.on('end', () => { console.log('Data : ' + body); 
        var pairs = body.split('&');
        var u=pairs[0].split('=');
        var p=pairs[1].split('=');

        if((uname == u[1]) && (pwd== p[1]))
        {
            var resstr='<html><body><b>Welcome Mr./Ms.' + uname + '</B>';
            resstr='<BR><B>Today = ' +  new Date() + '</b></body></html>';
            today=new Date();
            var logdate=uname+'logged in on'+today;
            fsref.appendFile('login.log',logdata,function(err){
             if(err)
             console.error("Unable to write log");
             else
             console.log("userinfo logged successfully...");
            });
            }else
            {
                var resstr='<html><body><b>Invalid username/password</b><br>';
                resstr += '<b><a href=\'http://localhost:8083\'>Login again</a></b>';
                resstr+='</body></html>';
            }
            response.end(resstr);
        
        response.end('OK'); });
         /* var u=pairs[0].split('=');
        var p=pairs[1].split('=');

        if((uname == u[1]) && (pwd== p[1]))
        {
            var resstr='<html><body><b>Welcome Mr./Ms.' + uname + '</B>';
            resstr='<BR><B>Today = ' +  new Date() + '</b></body></html>';
            }else
            {
                var resstr='<html><body><b>Invalid username/password</b><br>';
                resstr += '<b><a href=\'http://localhost:8081\'>Login again</a></b>';
                resstr+='</body></html>';
            }
            response.end(resstr);*/
    } else {
        // var str='<HTML><body>';
        // str += '<B>Login to proceed</B><br>';
        // str +='<form method=\'POST\' action=\'http://localhost:8081\'>'
        // str += 'User name <input type=\'text\' placeholder=\'Enter name\' name=\'userid\'/><BR>';
        // str += 'Password <input type=\'password\' name=\'pwd\' /><BR><br>';
        // str += '<input type=\'submit\' value=\'SignIn\' /> </BODY></HTML>';
       fsref.readFile("login.html",function (err,data){
        if(err){
        console.error("Unable to open the file...");
        }
        else{
            var filedata=data;
            response.end(filedata);
        }
       });
        //response.end(str);
    }
}

var server=expapp.listen(8081);
console.log('Started server at 8081');