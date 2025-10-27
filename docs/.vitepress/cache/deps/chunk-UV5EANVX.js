// node_modules/vitepress-demo-editor/dist/_commonjsHelpers.da91e947.js
var f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function l(e) {
  var o = e.default;
  if (typeof o == "function") {
    var t = function() {
      return o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: true,
      get: function() {
        return e[r];
      }
    });
  }), t;
}

export {
  f,
  u,
  l
};
//# sourceMappingURL=chunk-UV5EANVX.js.map
