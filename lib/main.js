const DOMNodeCollection = require('./dom_node_collection');

window.$l = $l;
window.d = DOMNodeCollection;

function $l(selector) {
  let nodeList;
  if(selector.constructor.name === "String"){
    nodeList = document.querySelectorAll(selector);
    nodeList = Array.from(nodeList);
    return new DOMNodeCollection(nodeList);
  } else if (selector instanceof HTMLElement) {
    nodeList = [selector];
    return nodeList;
    // return new DOMNodeCollection(nodeList); 
  }
}


