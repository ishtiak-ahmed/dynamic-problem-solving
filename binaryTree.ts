// interface NumNode {
//   val: string,
//   left: NumNode | null,
//   right: NumNode | null
// }

// class TreeNode {
//   val: string;
//   left: NumNode | null;
//   right: NumNode | null;
//   constructor(data: string){
//     this.val = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new TreeNode('a');
// const b = new TreeNode('b');
// const c = new TreeNode('c');
// const d = new TreeNode('d');
// const e = new TreeNode('e');
// const f = new TreeNode('f');
// const g = new TreeNode('g');
// const h = new TreeNode('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f
// c.right = g;
// d.left = h

// const depthValues = (root: NumNode) => {
//   if(root === null) return [];

//   const stack = [root]
//   const values = []

//   while(stack.length){
//     const current = stack.pop();
//     values.push(current.val);

//     if(current.right) stack.push(current.right)
//     if(current.left) stack.push(current.left)
//   }
// }

// const res = depthValues(a)
// console.log(res);