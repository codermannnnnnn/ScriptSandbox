import encoder;

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
  document.getElementFromId(type == "html" ? "html_iframe" : "js_output_iframe").value = code;
  
};
