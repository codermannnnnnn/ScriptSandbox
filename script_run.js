function updateHtml() {
  (document.getElementsByTagName("iframe")[0].id=="js_output_iframe"?document.getElementsByTagName("iframe")[1]:document.getElementsByTagName("iframe")[0]).contentWindow.location.reload();
  (document.getElementsByTagName("iframe")[0].id=="js_output_iframe"?document.getElementsByTagName("iframe")[1]:document.getElementsByTagName("iframe")[0]).contentDocument.body.innerHTML+=document.getElementById("html").value;
}

function runJs() {
  var result = "";
  try {
    result = eval(document.getElementById("js").value);
  } catch (error) {
    result = `${error.name}: ${error.message}`;
  };
  (document.getElementsByTagName("iframe")[1].id=="html_iframe"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentDocument.body.innerHTML="";
  (document.getElementsByTagName("iframe")[1].id=="html_iframe"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentDocument.body.innerHTML+="Output: ";
  (document.getElementsByTagName("iframe")[1].id=="html_iframe"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentDocument.body.innerHTML+=result;
}
