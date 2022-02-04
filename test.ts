// b:any = []
// let a = [] + b + 'turing'.split('')

// console.log(a);

// const aa = [1, 'a', {x: 't'}]

// console.log(aa.indexOf({x: 't'}));

// console.log(typeof [1]);

// const p = new Promise((suc, rej) => {
//   rej(Error('Error happened'))
// })

// p.catch(e => {console.log(e.message);})

// var index = 1, count = {}
 
//  count: {
//   begin: 2
//   baz: ++index
//  }

//  count.begin + count.index + index

// console.log(Number('10') - 10 == 0);

// function Foo() {
//   this.bar = 10
// }

// Foo.prototype.bar = 42

// const foo = new Foo()

// console.log(foo.bar);

// delete foo.bar
// console.log(foo.bar);

// var t = 99

// t = 'turing'

// console.log(t);

// class QUeue<T>{
//   private data = []

//   push = (item: T) => this.data.push(item)
//   pop = (): T => this.data.shift()
// }

// const que = new QUeue<number>()

// que.push(1)
// que.push('5')
// console.log(que);

const aa = {
  a: 1,
  b: 'b'
}

Object.freeze(aa)

aa.a = 5
console.log(aa);
