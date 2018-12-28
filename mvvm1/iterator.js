function makeIteraor(arr){
  let nextIndex = 0;

  // 返回一个迭代器对象
  return {
    next: () => {
      // next()方法返回的结果对象
      console.log(nextIndex)
      if(nextIndex < arr.length - 1){
        return { value: arr[nextIndex++], done: false }
      } else {
        return { done: true }
      }
    }
  }
}
function log(){
  console.log.apply(console, arguments)
}
const it = makeIteraor(['步骤1', '步骤2', '步骤3'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

function tail(i) {
  if(i > 3) return i;
  console.log('修改前',i)
  return tail(i + 1)
}
tail(0)

