// 1 

let s1 = Symbol('hello');
let s2 = Symbol('hello');

let obj = {
    name: 'james',
    [s1]: 'hi',
    [s2]: 'hi'
}

console.log(s1 === s2);
let symbol = Reflect.ownKeys(obj)

for(let sym of symbol){
    console.log(obj[sym]);
    
}

// 2

let s3 = Symbol.for('session');
let s4 = Symbol.for('session')

let a = Symbol('session');
let b = Symbol('session');

console.log(s3 === s4);

let ob2 = {
    [a]: 's3',
    [b]: 's4'
}

let ob = {
    [s3]: 's3',
    [s4]: 's4'
}

console.log(ob2[a]);
console.log(ob[s3]); 

let c = Symbol.keyFor(a)
let d = Symbol.keyFor(s3)

console.log(c);
console.log(d);

// 3 

class AdminOnly{
   static [Symbol.hasInstance](x){
        return x && typeof x === 'object' && x.role === 'admin';
    }
}

let ob3 = {
    role: 'admin'
}

let ob4 = {
    name: 'admin'
}

console.log(ob3 instanceof AdminOnly);
console.log(ob4 instanceof AdminOnly);

// 4

let obj5 = {
    0: 'x',
    1: 'y',
    length: 2,
    [Symbol.isConcatSpreadable]: true
}

console.log([].concat(obj5));

// 5

let ob5 = {
    fruits: ['banana', 'strawberry', 'apple'],

    [Symbol.iterator]: function(){
        let index = 0;
        let values = Object.values(this);

        return {
            next(){
                if(index < values.length){
                    return {value: values[index++], done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        }
    }
}

for (let item of ob5){
    console.log(item);
    
}

// 6

let ob6 = {
    fruits: ['banana', 'strawberry', 'apple'],

    [Symbol.iterator]: function(){
        let index = this.fruits.length - 1; 
        let fruits = this.fruits;
        return {
            next(){
                if(index >= 0){
                    return {value: fruits[index--], done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        }
    }
}

for (let item of ob6){
    console.log(item);
    
}

// 7

let ob7 = {
  fruits: ['banana', 'strawberry', 'apple'],

  *[Symbol.iterator]() {
    for (let fruit of this.fruits) {
      yield fruit;
    }
  }
};

for (let item of ob5) {
  console.log(item);
}


// 8

function range(start,end,step){
    return {
        *[Symbol.iterator](){
            if(step > 0){
                for (let i = start; i < end;  i += step ){
                yield i;
                }
            }
             else if(step < 0){
                for (let i = start; i > end; i += step){
                yield i;
                }
            }
        }
    }
}

for(let item of range(10,1,-2)){
    console.log(item);
    
}

// 10

class Money {
    constructor(amount) {
        this.amount = amount;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number' || hint === 'default') {
            return this.amount; 
        }
        if (hint === 'string') {
            return `$${this.amount}`; 
        }
        return this.amount;
    }
}

let money = new Money(100);

console.log(money + 1);
console.log(`${money}`);

