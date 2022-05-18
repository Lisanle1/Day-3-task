let json = [{
    "id" : "1", 
    "msg"   : "TO complete the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "Guvi task",
    "mail": "xyz@gmail.com"
},
{
    "id" : "2", 
    "msg"   : "To complete the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "Guvi task",
    "mail": "xyz@gmail.com"
}];
//for loop
for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { 
  console.log(obj.msg); 
}

//for In
for (let key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
