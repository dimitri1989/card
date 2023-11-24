var test = [1,2,3,4]
function g (e){
  var u =   e.reduce(function (acc,value,key){
        return acc + value
    })
    return u
}

    

console.log(g(test));