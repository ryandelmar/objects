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
  askAgain();
  }
function askAgain() {
var userImput = prompt("class number or students");
var lowcase = userImput.toLowerCase();

if (lowcase === "classroom" || lowcase ==="students") {
  window.alert(theRoom[lowcase]);
}
else {
  askAgain();
  }
}
