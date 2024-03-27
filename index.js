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

function consent() {
  clarity("consent");
}

function setTag(key, value) {
  clarity("set", key, value);
}

function setEvent(event) {
  clarity("event", event);
}

function upgrade(reason) {
  clarity("upgrade", reason);
}

module.exports = {
  clarity: {
    init,
    hasStarted,
    identify,
    consent,
    setTag,
    setEvent,
    upgrade,
  },
};
