const arr = [1, 2, 3, 4];

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((el) => {
  console.log(el)
});

Array.prototype.myMap = function(callback) {
  const result =[]
  for (let x = 0; x < this.length; x++) {
    result.push(callback(this[x], x, this))
  }
  console.log(result);
}

let elo= arr.myMap(x=>{
  return x*4
})


Array.prototype.myFilter = function(callback) {
  const result1 =[]
  for (let a = 0; a < this.length; a++) {
    if(callback(this[a],a,this)) {
      result1.push(this[a])
    }
  }
  console.log(result1);
}

arr.myFilter(el => {
  return el%2==0
})
 
Array.prototype.myReduce = function(callback) {
 
  for (let b = 0; b < this.length; b++) {
    
  }
}
Array.prototype.mySome = function(callback) {
  for (let c = 0; c < this.length; c++) {
    if(callback(this[c],c,this)) {
      return true;
    } 
  }
  return false;
}

Array.prototype.myEvery = function(callback) {
  for (let d = 0; d < this.length; d++) {
    if(!callback(this[d],d,this)) {
      return false;
    }
    return true;
  }
}

console.log(arr.myEvery((el) => {
 return el%2==0
}))
