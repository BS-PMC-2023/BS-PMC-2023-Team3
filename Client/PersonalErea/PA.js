// (C1) GET THE SOURCE & DESTINATION ELEMENTS
var s = document.getElementsByClassName("col-md-6");
var d = document.getElementsByClassName("row");

// (C2) CREATE & APPEND EVIL CLONE
for(let i=0; i<3; i++){
  var clone = s[0].cloneNode(true);

  d[0].appendChild(clone);

}