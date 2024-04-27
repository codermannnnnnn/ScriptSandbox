function shareCodeLink(type, code) {
  p = confirm("Copy link?");
  if (p == true) {
    navigator.clipboard.writeText("https://codermannnnnnn.github.io/ScriptSandbox/#codecrypt-"+btoa(escape(btoa(type)))+":"+btoa(escape(btoa(code))));
    alert("Copied to clipboard!")
  } else {
    alert("Ok")
  }
}

function sharedCodeSet() {
  p = location.href.replace("https://codermannnnnnn.github.io/ScriptSandbox/#codecrypt-","");
  var type, code;
  p.split(":").forEach((element,index)=>{if(index==0){type=atob(unescape(atob(element)))}else{code=atob(unescape(atob(element)))}});
  document.getElementFromId(type).value = code;
}
