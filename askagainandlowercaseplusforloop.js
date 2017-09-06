var theRoom = {
  classroom:"F103",
  students: 18,
};

var userImput = prompt("class number or students");
var lowcase = userImput.toLowerCase();
if (lowcase === "classroom" || lowcase ==="students") {
  window.alert(theRoom[lowcase]);
}
else {
  for (i=1; i<4; i++) {
    var userImput = prompt("class number or students. you have tried " + i +  " times");
    var lowcase = userImput.toLowerCase();
    if (lowcase === "classroom" || lowcase ==="students") {
    i = 3;
      window.alert(theRoom[lowcase]);
    }
  }
}
