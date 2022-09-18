var clarityInit = require("./src/react-clarity");

function clarity() {
  var params = Array.prototype.slice.call(arguments);
  if (!window.clarity) {
    throw new Error("Clarity is not initialized");
  }

  window.clarity.apply(undefined, params);
}

function init(id) {
  clarityInit(id);
}

function hasStarted() {
  return typeof window.clarity === "function";
}

function identify(userId, properties) {
  clarity("identify", userId, properties);
}

function upgrade(reason) {
  clarity("upgrade", reason);
}

module.exports = {
  clarity: {
    init,
    hasStarted,
    identify,
    upgrade,
  },
};
