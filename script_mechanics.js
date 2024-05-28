function enc(text) {
  var p = btoa(text).split("");
  var a = "";
  p.forEach((element, index) => {
    a+=String.fromCharCode(element.charCodeAt()+index)
  });
  return a;
};

function dec(text) {
  var p = text.split("");
  var a = "";
  p.forEach((element, index) => {
    a+=String.fromCharCode(element.charCodeAt()-index)
  });
  a = atob(a);
  return a;
};

function updateHtml() {
  (document.getElementsByTagName("iframe")[0].id=="js_output_iframe"?document.getElementsByTagName("iframe")[1]:document.getElementsByTagName("iframe")[0]).contentDocument.body.innerHTML="";
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
  (document.getElementsByTagName("iframe")[1].id=="html_iframe"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentDocument.body.innerHTML+=`<p>Console:</p>
  `;
  (document.getElementsByTagName("iframe")[1].id=="html_iframe"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentDocument.body.innerHTML+=`<console></console>`;
  (document.getElementsByTagName("iframe")[1].id=="html_iframe"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentWindow.onerror=(event, source, lineno, colno, error)=>{(document.getElementsByTagName("iframe")[1].id=="html_iframe"?document.getElementsByTagName("iframe")[0]:document.getElementsByTagName("iframe")[1]).contentDocument.getElementsByTagName("console")[0].innerHTML+=error.stack};
}
function shareCodeLink(type, code, runAuto) {
  p = confirm("Copy link?");
  if (p == true) {
    navigator.clipboard.writeText("https://codermannnnnnn.github.io/ScriptSandbox/#codecrypt-" + enc(type) + ":" + enc(code) + ":" + enc(runAuto);
    alert("Copied to clipboard!")
  } else {
    alert("Ok")
  }
}

function sharedCodeSet() {
  p = location.href.replace("https://codermannnnnnn.github.io/ScriptSandbox/#codecrypt-", "");
  var type, code, runAuto;
  p.split(":").forEach((element, index) => {
    if (index == 0) {
      type = dec(element);
    } else if (index == 1) {
      code = dec(element);
    } else {
      runAuto = dec(element);
    }});
  document.getElementFromId(type == "html" ? "html" : "js").value = code;
  type == html ? updateHtml() : runJs()
};

onload = () => {
  if (location.hash != '') {
    sharedCodeSet()
  }
}
