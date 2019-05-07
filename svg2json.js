let svg = document.querySelector("svg");

let elmt = svg;

function svg2json(elmt) {
  let obj = {};
  obj.Tag = elmt.localName;
  obj.Attributes = {};
  obj.ChildNodes = [];
  obj.TextContent = ""
  
  for (let i = 0; i < elmt.attributes.length; i++) {
    obj.Attributes[elmt.attributes[i].name] =
      elmt.attributes[i].nodeValue;
  }
  
elmt.childNodes.forEach(e => {
 
  // if it's a text node with a value
    if(e.nodeType == 3 && e.nodeValue.match(/[a-zA-Z0-9]+/gi)){
      obj.TextContent = e.nodeValue;
    }
  
  if (e.nodeType == 1) {
    obj.ChildNodes.push(svg2json(e));
  }
})  
  return obj;
}


let json = svg2json(elmt);
let str = JSON.stringify(json, null, 4);
theP.innerHTML = "let json = "+str;
