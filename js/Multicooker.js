"use strict";

class Multicooker {
  constructor() {
    this.__name = null;
    this.__state = null;
    this.__tasklist = ["task1", "task2", "task3", "task4"];
    this.__task = null; //a task for device
    this.__currentTask = 0; //a task that is currently viewed in task list
    this.__temperature = 100;
  }

  tasklist() {
    for (const item of this.__tasklist) {
      console.log(item);
    }
  }

  get task() {
    if (this.__task != null) {
      return this.__task;
    } else {
      return console.log("There's no set task!!");
    }
  }

  setUpTask() {
    this.__task = this.__tasklist[this.__currentTask];
  }

  get currentTask() {
    return this.__tasklist[this.__currentTask];
  }

  nextTask() {
    if (this.__currentTask < this.__tasklist.length - 1)
      return this.__currentTask++;
  }
  previousTask() {
    if (this.__currentTask > this.__tasklist.length - 1)
      return this.__currentTask--;
  }

  get temperature() {
    return this.__temperature;
  }

  increaseTemperature() {
    if (this.__temperature < 100 && this.__temperature > 0)
      this.__temperature++;
  }
  decreaseTemperature() {
    if (this.__temperature < 100 && this.__temperature > 0)
      this.__temperature--;
  }
}

const multicooker = new Multicooker("redmond");
multicooker.name;
