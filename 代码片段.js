function add(a, b) { 
  a++ 
  var c = a + b 
  return c 
  }
  var m = 0,n = 19 // 把 m,n,add() 标记为进入环境。
  add(m, n) // 把 a, b, c标记为进入环境。 
  console.log(n) // a,b,c标记为离开环境，等待垃圾回收