
// require('pouchdb')


function saveauth(db,user,passw){
db.sync('db','http://localhost:5984/mydb');

}


function register(){
var width=400;
var height=200;

var frame='<iframe src="http://127.0.0.1:5000/auth.html?register=true" width="'+width+'" height="'+height+'" frameBorder="0"></iframe>';
var wind='<html><head><title>Print it!</title></head><body style="margin:0px">'+frame+'</body>';

loginwin=window.open('','','width='+width+', height='+height)
loginwin.document.write(wind);

}


function login(email,passw){

if (email&&passw){
auth(email,passw,true);
}


var width=400;
var height=200;

var frame='<iframe src="http://127.0.0.1:5000/auth.html?login=true" width="'+width+'" height="'+height+'" frameBorder="0"></iframe>';
var wind='<html><head><title>Print it!</title></head><body style="margin:0px">'+frame+'</body>';

loginwin=window.open('','','width='+width+', height='+height)
loginwin.document.write(wind);
}

function authme(){


}


function auth(email,passw,l){



if(email&&passw){
$.post('http://localhost:5000/auth',{email:email,passw:passw,register:false},function(resp){

if(resp.error){

if (login){
login();
} else {
console.log(resp);

}

} else {
saveauth();

}




})

}
}



function closelogin(){




}
