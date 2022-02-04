class TreeNode1 {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode1('a');
const b = new TreeNode1('b');
const c = new TreeNode1('c');
const d = new TreeNode1('d');
const e = new TreeNode1('e');
const f = new TreeNode1('f');
const g = new TreeNode1('g');
const h = new TreeNode1('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f
c.right = g;
d.left = h;

/*
 *         a 
 *        / \
 *       b   c
 *     / \   /\
 *    d  e  f  g
 *   /
 *  h
 */

const n1 = new TreeNode1(101)
const n2 = new TreeNode1(22)
const n3 = new TreeNode1(33)
const n4 = new TreeNode1(41)
const n5 = new TreeNode1(52)
const n6 = new TreeNode1(62)
const n7 = new TreeNode1(71)
const n10 = new TreeNode1(110)
const n9 = new TreeNode1(911)
const n8 = new TreeNode1(812)

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n4.right = n9;
n5.left = n10;

const depthValues = (root) => {
  if (root === null) return [];

  const stack = [root]
  const values = []

  while (stack.length) {
    const current = stack.pop();
    values.push(current.val);

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
  return values;
}

// const res = depthValues(a)
// const res2 = depthValues(n1)
// console.log(res2);

const recursiveDepthValues = (node) => {
  if (node === null) return [];

  const leftValues = recursiveDepthValues(node.left);
  const rightValues = recursiveDepthValues(node.right);
  return [node.val, ...leftValues, ...rightValues]
}

const res3 = recursiveDepthValues(n2)
// console.log(res3);
/*
 * take a root node a = {val: 3, left: b, right: c}
 * if a.left === null & a.right is null return 0
 * a.left.left is null & a.left.right is null, a.left.val is a left value;
 * 
 */
/*
                    1
                  /  \
                2     3
              / \    / \
             4   5  6   7
            /\  /\    
           8 9 10 
*/
const leftLeafSums = (root) => {
  const getLeftLeaves = (node, isLeft) => {
    if (node === null) return [];
    if (node.left === null && node.right === null && isLeft) return [node.val]
    const leftSide = getLeftLeaves(node.left, true)
    const rightSide = getLeftLeaves(node.right, false)
    return [...leftSide, ...rightSide]
  }
  const leftLeafs = getLeftLeaves(root, false);
  return leftLeafs.reduce((total, num) => total + num)
}

//  const sum = leftLeafSums(n1) // 1,2,3,...10
//  console.log(sum);

const findDataInTree = (root, target) => {
  if (root === null) return null;

  const queue = [root]
  while (queue.length) {
    const current = queue.shift()
    if (current.val === target) return true;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return false;
}

const res = findDataInTree(n3, 10)

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) {
    return true;
  };
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}
// console.log(res);

// console.log('tree includes', treeIncludes(n1, 33));

/*
 *                fib 7
 *          6, 5, 4, 3, 2
 *          5, 3, 1
 *
 *
 *
 */

const treeSum = (root) => {
  let sum = 0;
  if (root === null) return 0;
  const queue = [root];

  while (queue.length) {
    const current = queue.pop()
    sum += current.val;
    if (current.right !== null) queue.push(current.right)
    if (current.left !== null) queue.push(current.left)
  }
  return sum;
}
const recursiveTreeSum = (root) => {
  if (root === null) return 0;
  return root.val + recursiveTreeSum(root.left) + recursiveTreeSum(root.right)
}

// console.log('sum', treeSum(n1));
// console.log('sum', recursiveTreeSum(n1));

const treeMinValue = (root) => {
  let min = root.val;
  const queue = [root];

  while(queue.length){
    const current = queue.shift();
    if(current.val < min) min = current.val;
    if(current.left !== null) queue.push(current.left);
    if(current.right !== null) queue.push(current.right);
  }
  return min;
}

// get current value, get the min value from left child, get the min value from right child return the min value

const recursiveTreeMinValue = (root) => {
  if(root.left === null && root.right === null) return root.val;
  if (root.left !== null && root.right !== null) return Math.min(root.val, recursiveTreeMinValue(root.left), recursiveTreeMinValue(root.right))
  if (root.left === null) return Math.min(root.val, recursiveTreeMinValue(root.right))
  if (root.left !== null) return Math.min(root.val, recursiveTreeMinValue(root.left))
}

const recursiveMin = (root) => {
  if (root === null) return Number.POSITIVE_INFINITY;
  return Math.min(root.val, recursiveMin(root.left), recursiveMin(root.right))
}

console.log('Min value', treeMinValue(n5));
console.log('Min value', recursiveTreeMinValue(n5));
console.log('Min value', recursiveMin(n5));
