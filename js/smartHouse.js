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
    this._devices.delete(name);
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
    return this._devices.get(name);
  }
}
