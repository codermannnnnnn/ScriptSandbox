function updateHtml() {
  (document.getElementsByTagName("iframe")[0].id=="js"?document.getElementsByTagName("iframe")[1]:document.getElementsByTagName("iframe")[0]).contentWindow.location.reload();
  (document.getElementsByTagName("iframe")[0].id=="js"?document.getElementsByTagName("iframe")[1]:document.getElementsByTagName("iframe")[0]).contentDocument.body.innerHTML+=document.getElementById("html").value;
}

function runJs() {
  var result = "";
  try {
    result = eval(document.getElement)
  }
  (document.getElementsByTagName("iframe")[1].id=="html"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentWindow.location.reload();
  (document.getElementsByTagName("iframe")[1].id=="html"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentDocument.body.innerHTML+="Output: ";
  
}
