import Device from "./device";

export default class Multicooker extends Device {
  constructor(name) {
    super(name);
    this._tasklist = ["task1", "task2", "task3", "task4"];
    this._task = null; //a task for device
    this._currentTask = 0; //a task that is currently viewed in task list
    this._temperature = 100;
  }

  get tasklist() {
    return this._taskList;
  }

  get task() {
    if (this._task != null) {
      return this._task;
    }
  }

  //the main goal is to let user move through the task list only with the help of nextTask() and previousTask() methods
  //so this method has no arguments
  setUpTask() {
    this._task = this._tasklist[this._currentTask];
  }

  get currentTask() {
    return this._tasklist[this._currentTask];
  }

  nextTask() {
    if (this._currentTask > this._tasklist.length - 1) {
      return this._currentTask;
    } else {
      return this._currentTask++;
    }
  }

  previousTask() {
    if (this._currentTask <= 0) {
      return this._currentTask;
    } else {
      return this._currentTask--;
    }
  }

  get temperature() {
    return this._temperature;
  }

  increaseTemperature() {
    if (this._temperature >= 100) {
      return this._temperature;
    } else {
      return this._temperature++;
    }
  }
  decreaseTemperature() {
    if (this._temperature <= 0) {
      return this._temperature;
    } else {
      return this._temperature--;
    }
  }
}
