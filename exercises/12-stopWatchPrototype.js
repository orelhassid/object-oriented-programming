// exercise: StopWatch Prototype

/**
 * Move the start, stop and reset methods to the prototype of StopWatch.
 * notice that you will not be able to access the local variables defined in StopWatch function.
 * tip: in order to be able access it,  you will need to use
 */

function StopWatch() {
  let startTime,
    endTime,
    isRunning,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      startTime = value;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
    set: function (value) {
      endTime = value;
    },
  });

  Object.defineProperty(this, "isRunning", {
    get: function () {
      return isRunning;
    },
    set: function (value) {
      isRunning = value;
    },
  });
}

const sw1 = new StopWatch();
const sw2 = new StopWatch();

StopWatch.prototype.start = function () {
  if (this.isRunning) throw new Error("StopWatch has already been started.");

  this.isRunning = true;

  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.isRunning) throw new Error("StopWatch has already been stop.");

  this.isRunning = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function () {
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
  this.isRunning = false;
};
