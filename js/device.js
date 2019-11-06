export class Device {
  constructor(name) {
    this._name = name;
    this._state = false;
    this._userTime = null;
    this._currentTime = null;
  }

  set name(str) {
    const regExp = /^\w{4,10}/i;
    this._name = this._isValidStr(regExp, str, "incorrect name");
  }

  get name() {
    return this._name;
  }

  on() {
    this._state = true;
  }

  off() {
    this._state = false;
  }

  get state() {
    return this._state;
  }

  timer(str, toggler) {
    const regExp = /^([01]\d|2[0-3]):[0-5][0-9]/;
    this._userTime = this._isValidStr(
      regExp,
      str,
      "incorrect format of time use -> hh:mm"
    );
    this._currentTime = this._takeCurrentTime();
    const convertedTime = this._timeConverter(
      this._currentTime,
      this._userTime
    );
    const promise = new Promise(function(resolve, reject) {
      if (toggler === true) {
         setTimeout(() => resolve("cook"), convertedTime);
      } else if (toggler === false) {
        setTimeout(() => resolve("wake up, work hard!"), convertedTime);
      } else {
        reject();
      }
    });
    promise.then(
      val => {
        console.log(`Time to ${val}`);
      },
      () => {
        console.error("Pls, put boolean data");
      }
    );
  }

  _takeCurrentTime() {
    const date = new Date();
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const result = `${hours}:${minutes}`;
    return result;
  }

  _timeConverter(currentTime, userTime) {
    const currentTimeArray = currentTime.split(":");
    const userTimeArray = userTime.split(":");
    const currentMilliseconds =
      currentTimeArray[0] * 60 * 60 * 1000 + currentTimeArray[1] * 60 * 1000;
    const userMilliseconds =
      userTimeArray[0] * 60 * 60 * 1000 + userTimeArray[1] * 60 * 1000;
    return Math.abs(userMilliseconds - currentMilliseconds);
  }

  _isValidStr(regularExp, str, reason) {
    const result = str.match(regularExp);
    let findValue;
    if (result !== null) {
      findValue = result[0];
      return findValue;
    } else console.error(reason);
  }
}
