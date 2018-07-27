
class DOMNodeCollection {
  constructor (arrayNodes) {
    this.arrayNodes = arrayNodes;
  }
  
  empty () {
    this.html(""); 
  }
  
  append(addition){
    if(addition instanceof String){
      this.arrayNodes.forEach( el => el.innerHTML += addition);
    }else if(addition.constructor.name === 'DOMNodeCollection') {
      this.arrayNodes.forEach (el => {
        addition.forEach(addr => el.innerHTML += addr.outerHTML);
      });
    }else if(addition instanceof HTMLElement){
      this.arrayNodes.forEach( el => el.innerHTML += addition.outerHTML);
    }
  }
  
  remove() {}
  
  attr (key, value) {
    if(!key && !value){
      let answer = [];
      this.arrayNodes.forEach(el => answer.push(el.getAttribute(key)));
      return answer; 
    }
    this.arrayNodes.forEach( el => el.setAttribute(key, value));
  }
  
  addClass (className) {
    if(!className){
      return this.arrayNodes.map(el => el.className);
    } 
    this.arrayNodes.forEach( el => el.className = className);
  }
  
  removeClass () {
    return this.arrayNodes.forEach( el => el.className = "");
    // return this.arrayNodes.map(el => el.className);
  }
  
  html (string) {
    if (string === undefined) {
      return this.arrayNodes[0].innerHTML;
    } else {
      this.arrayNodes.forEach( (el) => el.innerHTML = string);
    }
  }

  children () {
    return this.arrayNodes.map( el => new DOMNodeCollection(el.children));
  }
  
  parent () {}
  
}

module.exports = DOMNodeCollection;