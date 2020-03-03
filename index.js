import SecondPromise from "./secondePromise";

let p = new SecondPromise((resolve, reject) => {
  resolve(2);
});

p.then(value=>{
    return value+4;
})

setTimeout(()=>{
    console.log(p.state);
    if(p.state == 'fullfilled'){
        p.then(value=>{
            console.log('value',value);
            return value+2;
        }).then(value=>{
            console.log('value2',value);
        })
    }
},2000);