//High order function and callback

function add(a, b, callback) {
  let result = a + b;
  callback(result);
  return () => console.log(result); 
}

let resultFunction = add(10, 20, () => {});
resultFunction();