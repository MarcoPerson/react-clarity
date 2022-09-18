var clarityInit = require("./src/react-clarity");

function clarity() {
  var params = Array.prototype.slice.call(arguments);
  if (!window.clarity) {
    throw new Error("Hotjar is not initialized");
  }

  window.clarity.apply(undefined, params);
}

function initialize(id) {
  clarityInit(id);
}

function initialized() {
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
    initialize,
    initialized,
    identify,
    upgrade,
  },
};
