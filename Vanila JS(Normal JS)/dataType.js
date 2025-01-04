// data are 2 type
// premetive :- 7 | string , Boolean , Number , BigInt , null , undefined ,Symbol

id = Symbol("123")
vid = Symbol("123")
// console.log(id);
// console.log(vid);
// console.log(id === vid);

// Non-premetive | array , object , function


// premitive is stack and non-primitive is heap


// stack(premitive)
let a = "a"
let b = a
a = "c"
// console.log(a); // c
// console.log(b); // a

// heap (non-primitive)
let c = {
  "a":'a',
  "b":'b',
}
let d = c;

c.a = 'c';

// console.log(c); // {'a':'c' , 'b' :'b'}
// console.log(d); // {'a':'c' , 'b' :'b'}
