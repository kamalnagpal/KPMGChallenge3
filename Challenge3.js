function nestedObject(object1, key1) {
  const obj = object1

  const temp = key1.split('/')
  const key3 = temp

  const value = key3.reduce((acc,key)=>acc[key], obj)
  
  return value
}

console.log(nestedObject({"x1":{"y1":{"z1":"a1"}}},'x1/y1/z1'))
