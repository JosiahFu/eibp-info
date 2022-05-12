var cookie_string = document.cookie;

var page_options = document.getElementsByClassName("body-option");

// for (i of page_options) {
//   i.classList.add("hidden");
// }

setTimeout(function() {
  page_options[7].children[0].children[0].innerHTML = "\u004a\u006f\u0073\u0065";
}, 2000);
setTimeout(function() {
  page_options[7].children[0].children[0].innerHTML = "\u0048\u006f\u0073\u0065";
}, 3000);

var type = -1;

for (var i of cookie_string.split(";")) {
  if (i.split("=")[0] == "random-webpage-type") {
    type = i.split("=")[1];
  }
}
// Is +1 for OBOEs? Inclusivity?
// Wait gtg

// No, it shouldn't be there, indexing starts from 0
// So if the last body-option is IDed 7, then there are 8 possibilities

// ...Because discussing your code in comments is efficient...

if (type == -1) {
  type = Math.floor(Math.random()*(page_options.length));
  document.cookie = "random-webpage-type="+type;
}

page_options[type].classList.remove("hidden");

function reset() {
  document.cookie = "random-webpage-type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location.reload();
}