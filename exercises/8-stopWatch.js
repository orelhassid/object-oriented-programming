// exercise: StopWatch

/**
 * create a StopWatch object that have the following properties and methods:
 * 1. duration = indicate the duration time. initialize in 0 sec
 * 2. start() = increment the duration in one second. you cannot call it twice.
 * 3. stop() = stop the increment but not effecting the duration. you cannot call it twice.
 * 4. reset() = stop the increment and reset the duration value back to 0
 */

function StopWatch() {
  let startTime,
    endTime,
    isRunning,
    duration = 0;

  this.start = function () {
    if (isRunning) throw new Error("StopWatch has already been started.");

    isRunning = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!isRunning) throw new Error("StopWatch has already been stop.");

    isRunning = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    duration = 0;
    startTime = null;
    endTime = null;
    isRunning = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();
