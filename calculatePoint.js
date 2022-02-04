const calPoints = (ops) => {
  let result = null;
  let nums = []
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+') {
      const num = nums[nums.length - 1] + nums[nums.length - 2];
      nums.push(num);
      continue;
    }
    if (ops[i] === 'C') {
      nums.pop()
      continue;
    }
    if (ops[i] === 'D') {
      const num = nums[nums.length - 1] * 2;
      nums.push(num)
      continue;
    }
    else {
      nums.push(Number(ops[i]))
    }
  }
  result = nums.reduce((a, b) => a + b, 0)
  return result;
}

const calPoints2 = (ops) => {
  let result = null;
  let nums = [];
  ops.forEach(val => {
    if (val === '+') {
      const num = nums[nums.length - 1] + nums[nums.length - 2]
      nums.push(num)
    } else if (val === 'D') {
      const num = nums[nums.length - 1] * 2;
      nums.push(num)
    } else if (val === 'C') {
      nums.pop()
    } else {
      nums.push(Number(val))
    }
  })
  result = nums.reduce((t, a) => t + a, 0)
  return result;
}

const testCase = ['5', 2, "D", "C", "+"]

// console.log(calPoints2(testCase));

// valid bracket 
// in - "([]{})" => valid;
// in - "({[]})" => valid;
//  ( => valid
//  ([ => valid
//  ([] => valid
//   check the pair [] => valid
//  ([]{ => valid
//  ([]{} => valid
//   check the pair {} => valid
// ([]{}) => valid
// in - "([{]})" => invalid;
// ( => valid
// ([ => valid
// ([{ => valid
// ([{] => invalid
/*
 * check brace types
 * if closing, found the earlier matching opening
 * get the inner braces of this pair
 * validate the inner braces
 * if valid, move to next braces
 * 
 */

/*
 * open braces ['(', '{', '}', ']', ')']
 * 
 */
const validBracket = (s) => {
  if (s.length % 2 !== 0) return false;
  const opening = ['(', '{', '['];
  const closing = [')', '}', ']'];
  const braces = s.split('')

  const openBraces = [];
  const valid = braces.every(val => {
    const openIndex = opening.indexOf(val)
    if (openIndex > -1) {
      openBraces.push(val)
      return true;
    } if (!openBraces.length) {
      return false
    }
    const index = closing.indexOf(val)
    const prevBrace = openBraces.pop()
    const isValid = opening.indexOf(prevBrace) === index
    return isValid;
  })
  return !openBraces.length && valid;
}

const braces = "[({[]}])"

console.log(validBracket(braces));