// found here
// https://raw.githubusercontent.com/itsa/polyfill/5d24388b658569831ec856dbc657e9b227b725fd/old-lib/object.defineproperty.js
'use strict';
// In Internet Explorer 8 Object.defineProperty only accepts DOM objects
// otherwise it throws an error
try {
  Object.defineProperty({}, 'a', {
    value: 0
  });
} catch (e) {
  // failed: so we're in IE8
  (function() {
    var defineProperty = Object.defineProperty;
    Object.defineProperty = function(object, property, descriptor) {
      delete descriptor.configurable;
      delete descriptor.enumerable;
      delete descriptor.writable;
      try {
        return defineProperty(object, property, descriptor);
      } catch (err) {
        object[property] = descriptor.value;
      }
    };
  }());
}
Object.defineProperties || (Object.defineProperties = function defineProperties(object, descriptors) {
  var property;
  for (property in descriptors) {
    Object.defineProperty(object, property, descriptors[property]);
  }
  return object;
});