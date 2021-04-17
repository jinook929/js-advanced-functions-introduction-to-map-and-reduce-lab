// Your code here
function mapToNegativize(sourceArray) {
  const result = []
  sourceArray.forEach(e => result.push(-e))
  return result
}

function mapToNoChange(sourceArray) {
  const result = []
  sourceArray.forEach(e => result.push(e))
  return result
}

function mapToDouble(sourceArray) {
  const result = []
  sourceArray.forEach(e => result.push(e * 2))
  return result
}

function mapToSquare(sourceArray) {
  const result = []
  sourceArray.forEach(e => result.push(e * e))
  return result
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  // if(!startingPoint) {
  //   startingPoint = 0
  // }
  sourceArray.forEach(e => startingPoint += e)
  return startingPoint
}

function reduceToAllTrue(sourceArray) {
  for(const e of sourceArray) {
    if(!e) return false
  }
  return true
}
// reduceToAllTrue([1, 2, true, false, "razmatazz"])
function reduceToAnyTrue(sourceArray) {
  for(const e of sourceArray) {
    if(!!e) return true
  }
  // for(let i = 0; i < sourceArray.length;i++) {
  //   if(!!sourceArray[i]) return true
  // }
  return false
}