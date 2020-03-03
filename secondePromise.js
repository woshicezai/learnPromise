const PENDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";

function resolvePromise(newPromise,value,resolve,reject){
  resolve(value);
}
export default class AjPromise {
  constructor(fn) {
    this.value = "";
    this.reason = "";
    this.state = PENDING;
    this.resolveCallbackArrays = [];
    this.rejectCallbackArrays = [];
    try {
      fn(this.resovle, this.reject);
    } catch (e) {
      console.log('cathe',e);
      this.reject(e);
    }
  }

  resovle = value => {
    this.value = value;
    this.state = FULLFILLED;
    setTimeout(() => {
      this.resolveCallbackArrays.forEach(fn => {
        this.value = fn(this.value);
      });
    });
  };

  reject = reason => {
    this.reason = reason;
    this.state = REJECTED;
    setTimeout(() => {
      this.rejectCallbackArrays.forEach(fn => {
        this.reason = fn(this.reason);
      });
    });
  };

  then = fn => {
    let newPromise;
    return (newPromise = new AjPromise((resolve, reject) => {
      if (this.state == FULLFILLED) {
        let x = fn(this.value);
        resolvePromise(newPromise, x, resolve, reject);
      } else if (this.state == PENDING) {
        this.resolveCallbackArrays.push(value => {
          let newValue = fn(value);
          //解决过程 resolvePromise
          resolvePromise(newPromise, newValue, resolve, reject);
        });
      }
    }));
  };
}

module.export = AjPromise;
