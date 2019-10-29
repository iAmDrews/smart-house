"use strict";

class DigitalWatch {
  constructor(name) {
    this.__name = name;
    this.__state = false;
    this.__color = ["White", "Green", "Red"];
    this.__currentColor = null;
    this.__brightness = 0;
    this.__clock = null;
  }

  /* previous() {
        return this.__color[this.__currentColor--];
    } */

  set name(value) {
    const regExp = /^\w{4,10}/i;
    const result = value.match(regExp);
    if (result !== null) {
      this.__name = result[0];
    } else throw new Error("incorrect name");
  }

  get name() {
    return this.__name;
  }

  on() {
    this.__state = true;
    this.__clockStart();
  }

  off() {
    this.__state = false;
    this.__clockStop();
  }

  get state() {
    return this.__state;
  }

  changeColor(value) {
    switch (value) {
      case this.__color[0]:
        this.__currentColor = value;
        break;
      case this.__color[1]:
        this.__currentColor = value;
        break;
      case this.__color[2]:
        this.__currentColor = value;
        break;
      default:
        this.__currentColor = "Wrong type of data or wrong color";
    }
  }

  get color() {
    return this.__currentColor;
  }

  increaseBrightness() {
    if (this.__state === true && this.__brightness < 10) this.__brightness++;
  }

  decreaseBrightness() {
    if (this.__state === true && this.__brightness > 0) this.__brightness--;
  }

  get brightness() {
    return this.__brightness;
  }

  __setUpClock() {
    const currentTime = new Date();
    const hours =
      currentTime.getHours() < 10
        ? "0" + currentTime.getHours()
        : currentTime.getHours();
    const minutes =
      currentTime.getMinutes() < 10
        ? "0" + currentTime.getMinutes()
        : currentTime.getMinutes();
    const seconds =
      currentTime.getSeconds() < 10
        ? "0" + currentTime.getSeconds()
        : currentTime.getSeconds();
    const dateStr = String(currentTime);
    const regExp = /(\w{3}\s){2}\d{2}\s\d{4}/;
    const currentDate = dateStr.match(regExp)[0];

    console.log(`Date: ${currentDate}\nTime: ${hours}:${minutes}:${seconds}`);
  }

  __clockStart() {
    this.__clock = setInterval(this.__setUpClock, 1000);
  }

  __clockStop() {
    clearInterval(this.__clock);
    this.__clock = null;
  }

  /* isOn() {

    } */
}

const digitalWatch = new DigitalWatch("samsung");

digitalWatch.increaseBrightness();
digitalWatch.increaseBrightness();
digitalWatch.increaseBrightness();
digitalWatch.brightness;
