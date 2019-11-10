
var data = Array ("user1" , " user2");

function psuh_user(username)
{
  data.push(username);

}

function display()
{
  for (let index = 0; index < data.length; index++) {
    var new2 = document.getElementById('data');
    new2.innerHTML += "<li>"+data[i] +"</li>"
  }

}