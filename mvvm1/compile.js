function Compile(el){
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);
  if(this.$el){
    this.$fragment = this.node2Fragment(this.$el);
    this.init();
    this.$el.appendChild(this.$fragment);
  }
}
Compile.prototype = {
  node2Fragment: function(node){
    let fragment = document.createDocumentFragment(), child;
    while(child = node.firstChild){
      fragment.appendChild(child);
    }
    return fragment;
  },
  compileElement: function(node){
    
  },
  isElementNode: function(node){
    return node && node.nodeType === 1;  // 元素节点 p, div
  },
  isTextElementNode: function(node){
    return node && node.nodeType === 3;  // 文字
  }
}