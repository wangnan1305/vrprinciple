function Watch(){
  this.value = undefined;
}
Watch.prototype = {
  get: function(key){
    Dep.target = this;
    this.value = data[key];
    Dep.target = null;
  }
}