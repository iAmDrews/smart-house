export default class SmartHouse {
  constructor(name) {
    this.__name = name;
    this.__digitalWatches = [];
    this.__multiCookers = [];
    this.__allDevices = [];
  }

  get name() {
    return this.__name;
  }

  addDevice(obj) {
    if (obj.hasOwnProperty("__brightness")) {
      this.__digitalWatches.push(obj);
    } else {
      this.__multiCookers.push(obj);
    }
  }

  deleteDevice(name) {
    if (this.__isExist(name)) {
      this.__digitalWatches.forEach((elem, index, array) => {
        if (elem.name === name) {
          array.splice(index, 1);
        }
      });
    } else {
      this.__multiCookers.forEach((elem, index, array) => {
        if (elem.name === name) {
          array.splice(index, 1);
        }
      });
    }
  }

  everythingOn() {
    this.__digitalWatches.forEach(elem => elem.on());
    this.__multiCookers.forEach(elem => elem.on());
  }

  everythingOff() {
    this.__digitalWatches.forEach(elem => elem.off());
    this.__multiCookers.forEach(elem => elem.off());
  }

  getDeviceByName(name) {
    if (this.__isExist(name)) {
      return this.__digitalWatches.find(elem => elem.name === name);
    } else {
      return this.__multiCookers.find(elem => elem.name === name);
    }
  }

  get devices() {
    return this.__allDevices.concat(this.__digitalWatches, this.__multiCookers);
  }

  __isExist(str) {
    let result = false;
    this.__digitalWatches.forEach(elem => {
      if (elem.name === str) {
        result = true;
      }
    });
    return result;
  }
}
