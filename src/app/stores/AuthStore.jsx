var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var AuthConstants = require('../constants/AuthConstants.jsx');
var _ = require('underscore');

var sessionInit = {
  _id: false
};

var session = sessionInit;

var AuthStore = _.extend({}, EventEmitter.prototype, {

  // Return Value
  getSession: function() {
    return session;
  },

  clearSession: function() {
    return sessionInit;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AuthConstants.SESSION_INIT:
      if (action.session) session = action.session;
      break;

    case AuthConstants.AUTH_LOGOUT:
      session = AuthStore.clearSession();
      break;

    default:
      return true;
  }

  AuthStore.emitChange();

  return true;
});

module.exports = AuthStore;
