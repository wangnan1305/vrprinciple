function Compile(el, vm){
  this.$vm = vm;
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);
  if(this.$el){
    this.$fragment = this.node2Fragment(this.$el);
    this.init();
    this.$el.appendChild(this.$fragment);
  }
}
Compile.prototype = {
  init: function (){
    this.compileElement(this.$fragment);
  },
  node2Fragment: function(node){
    let fragment = document.createDocumentFragment(), child;
    while(child = node.firstChild){
      // 拷贝节点
      fragment.appendChild(child);
    }
    return fragment;
  },
  compileElement: function(node){
    let _this = this,
        childNodes = node.childNodes;
    [].slice.call(childNodes).forEach(function(nodeItem){
      // todo 兼容处理
      /**
       * innerText受到CSS样式的影响，并且不会返回隐藏元素的文本，而textContent会
       * 改变innerText会触发重排reflow，但textContent不会
       * textContent会获取所有元素的内容，包括<script>,<style>，然而innerText不会
       * 
       * innerHTML返回HTML文本，textContent性能更好，因为文本不会被解析为HTML
       * 使用textContent可以防止XSS攻击
       */
      let content = nodeItem.textContent, 
          reg = /\{\{(.*)\}\}/;
      if(_this.isElementNode(nodeItem)){
        // 元素节点编译
        _this.compile(nodeItem);
      } else if(_this.isTextElementNode(nodeItem) && reg.test(content)){
        // 文本节点
        _this.compileText(nodeItem, RegExp.$1);
      }
      // 递归子节点
      if(nodeItem.childNodes && nodeItem.childNodes.length){
        _this.compileElement(nodeItem);
      }
    });
  },
  compile: function(node){
    // v-text="content"
    const nodeAttrs = node.attributes, _this = this;
    [].slice.call(nodeAttrs).forEach(function(attrItem){
      const attrName = attrItem.name;  // "v-text"
      if(_this.isDirective(attrName)) {
        const exp = attrItem.value;  // content
        const dir = attrName.substring(2);  // "v-text".substring(2)
        if(_this.isEventDirective(value)){
          // 事件指令
          compileUtil.eventHandler(node, _this.$vm, exp, dir);
        } else {
          // 普通指令
          compileUtil[dir] && compileUtil[dir](node, _this.$vm, exp);
        }
      }
    })
  },
  isDirective: function(name){
    return /v-|:/.test(name) ? true : false;
  },
  isEventDirective: function(name){
    return /v-on|@/.test(name) ? true : false;
  },
  compileText: function(node, content){

  },
  isElementNode: function(node){
    return node && node.nodeType === 1;  // 元素节点 p, div
  },
  isTextElementNode: function(node){
    return node && node.nodeType === 3;  // 文字
  }
}
// 指令处理集合
let compileUtil = {
  text: function(node, vm, exp){
    this.bind(node, vm, exp, 'text')
  },
  bind: function(node, vm, exp, dir){
    let updateFn = updater[dir + 'Update'];
    updateFn && updateFn(node, vm[exp])
  }
}
// 更新函数
let updater = {
  textUpdate: function(node, value){
    node.textContent = value ? value : ''
  },
  htmlUpdate: function(node, value){
    node.innerHTML = value ? value : ''
  }
}