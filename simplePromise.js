const PENDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";

export default class AjPromise {
  constructor(fn) {
    this.value = "";
    this.reason = "";
    this.resolveCallbackArrays = [];
    this.rejectCallbackArrays = [];
    try {
      fn(this.resovle, this.reject);
    } catch (e) {
      reject(e);
    }
  }

  resovle = value => {
    this.value = value;
    setTimeout(() => {
      this.resolveCallbackArrays.forEach(fn => {
        this.value = fn(this.value);
      });
    });
  };

  reject = reason => {
    this.reason = reason;
    setTimeout(() => {
      this.rejectCallbackArrays.forEach(fn => {
        this.reason = fn(this.reason);
      });
    });
  };

  then = (fn)=>{
    this.resolveCallbackArrays.push(fn);
    return this;
  }
}

module.export = AjPromise;
