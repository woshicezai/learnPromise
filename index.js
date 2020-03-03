import SimplePromise from "./simplePromise";

let p = new SimplePromise((resolve, reject) => {
  resolve(2);
});

p.then(value => {
  return value + 1;
})
  .then(value => {
    return value + 1;
  })
  .then(value => {
    return value + 1;
  })
  .then(value => {
    return value + 1;
  })
  .then(value => {
    console.log(p.value);
    return value + 1;
  });
