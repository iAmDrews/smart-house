import { Device } from "./device";

export class SmartHouse {
  constructor(name) {
    this._name = name;
    this._devices = new Map();
  }

  get name() {
    return this._name;
  }

  addDevice(obj) {
    if (obj instanceof Device) {
      this._devices.set(obj.name, obj);
    } else {
      console.error("this value does not extend from Device");
    }
  }

  deleteDevice(name) {
    for (let key of this._devices.keys()) {
      if (key === name) {
        this._devices.delete(key);
      }
    }
  }

  get allDevices() {
    return this._devices;
  }

  deleteAllDevices() {
    this._devices.clear();
  }

  everythingOn() {
    for (let val of this._devices.values()) {
      val.on();
    }
  }

  everythingOff() {
    for (let val of this._devices.values()) {
      val.off();
    }
  }

  getDeviceByName(name) {
    for (let key of this._devices.keys()) {
      if (key === name) {
        return this._devices.get(key);
      }
    }
  }
}
