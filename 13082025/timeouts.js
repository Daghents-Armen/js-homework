// 1

/*console.log('start');

function block(second){
    let start = new Date();

    while(new Date() - start < second * 1000) {

    }
}
block(3)
console.log('end')
*/
// 2

/*console.log('start'); // for console.log() also works the WEB API but in this case it works in a blocking interface
setTimeout(() => console.log('timeout done'), 2000); // goes to macrotask queue and it is waiting 2 seconds but the next line is executed because its non-blocking
console.log('end'); */// prints end, now macrotask asks microtask is there sth in callstack? 
//microtask: no there is nothing
// macrotask: do you have sth to put in callstack?
//microtask: no
// macrotask: ok i am going to put the console.log() in callstack, and prints timeout done

// 3

function greetlater(name){
    setTimeout(() => {
        console.log(`hello ${name}`);
    }, 2000)
}

// 4

/*setTimeout(() => {
    console.log('hi');
    
},1000);

setTimeout(() => {
    console.log('hello');
    
}, 2000)

setTimeout(() => {
    console.log("what's up");
}, 3000)
*/

// 5


/*setTimeout(() => {
    console.log('i am first');
    
},0);

setTimeout(() => {
    console.log('i am second');
    
}, 0)

setTimeout(() => {
    console.log("i am third");
}, 0)
*/


// 6

/*setTimeout(() => {
    console.log('dialing...');
});

setTimeout(() => {
    console.log('ringing...');
}, 1000)

setTimeout(() => {
    console.log("call connected!");
}, 3000);
*/


// 7

/*function boilwater(callback){
    console.log('boiling water...');
    setTimeout(() => {
        callback();
    }, 3000);
}

boilwater((() => {
    console.log('water ready');
}));
*/

// 8

function boilWater(callback){
    callback()
    
}

function addPasta(callback){
    callback()
}

boilWater(() => {
    setTimeout(() => {
        console.log('boiling...');
    })
}, 2000);

addPasta(() => {
    setTimeout(() => {
        console.log('adding pasta...');
        console.log('pasta is cooking');
    })
    
},1000);

// 10 

setTimeout(() => {
    console.log('1...');
    console.log('Go!');
}, 1200)

setTimeout(() => {
    console.log('2...');
}, 400)

setTimeout(() => {
    console.log('3...');
}, 200)


// mid level

function handleRequest(client, delay){
    setTimeout(() => {
        console.log(`handling... ${client}`);
        
    }, delay)
}

function countDown(n){
    if(n <= 0){
        return;
    }
    console.log(n);
    setTimeout(() => countDown(n - 1)) 
}

countDown(9)