!(function (t) {
  var e = {};
  function n(o) {
      if (e[o]) return e[o].exports;
      var l = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
          if ((1 & e && (t = n(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var o = Object.create(null);
          if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
              for (var l in t)
                  n.d(
                      o,
                      l,
                      function (e) {
                          return t[e];
                      }.bind(null, l)
                  );
          return o;
      }),
      (n.n = function (t) {
          var e =
              t && t.__esModule
                  ? function () {
                        return t.default;
                    }
                  : function () {
                        return t;
                    };
          return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "."),
      n((n.s = 0));
})({
  "fullWidth2": function (t, e) {
      !(function () {
          if (void 0 !== window.vceResetFullWidthElements) return;
          let t,
              e = !1,
              n = 1;
          function o() {
              (t = Array.prototype.slice.call(document.querySelectorAll('[data-vce-full-width="true"]:not([data-vcv-do-helper-clone]),[data-vce-full-width-section="true"]:not([data-vcv-do-helper-clone])'))), t.length && l();
          }
          function l() {
              t.length &&
                  (e ||
                      ("number" == typeof n && 1 !== n) ||
                      t.forEach(function (t) {
                          const e = document.body,
                              n = t.parentElement,
                              o = t.querySelector('[data-vce-element-content="true"]'),
                              l = parseInt(window.getComputedStyle(t, null)["margin-left"], 10),
                              i = parseInt(window.getComputedStyle(t, null)["margin-right"], 10);
                          let r, c;
                          if (!t.closest("[data-vce-element-content]") && (t.closest(".vcv-content--header-footer") || t.closest(".vcv-content--blank")))
                              return void (t.getAttribute("data-vce-stretch-content") || t.getAttribute("data-vce-section-stretch-content") || ((o.style["padding-left"] = ""), (o.style["padding-right"] = "")));
                          if (!t.closest("[data-vce-element-content]") && (t.closest('[data-vcv-layout-zone="header"]') || t.closest('[data-vcv-layout-zone="footer"]') || t.closest(".vcv-editor-theme-hf"))) return;
                          let d = t.closest(".vce-full-width-custom-container");
                          if (
                              (d
                                  ? ((r = 0 - n.getBoundingClientRect().left - l + d.getBoundingClientRect().left), (c = d.getBoundingClientRect().width))
                                  : ((r = 0 - n.getBoundingClientRect().left - l), (c = document.documentElement.getBoundingClientRect().width)),
                              (t.style.width = c + "px"),
                              e.classList.contains("rtl") ? (t.style.right = r + "px") : (t.style.left = r + "px"),
                              t.getAttribute("data-vce-stretch-content") || t.getAttribute("data-vce-section-stretch-content"))
                          )
                              (o.style["padding-left"] = ""), (o.style["padding-right"] = "");
                          else {
                              let t = -1 * r;
                              t < 0 && (t = 0);
                              let e = c - t - n.getBoundingClientRect().width + l + i;
                              e < 0 && (e = 0), (o.style["padding-left"] = t + "px"), (o.style["padding-right"] = e + "px");
                          }
                      }));
          }
          o(),
              window.addEventListener(
                  "touchstart",
                  function (t) {
                      2 === t.touches.length && (e = !0);
                  },
                  !1
              ),
              window.addEventListener(
                  "touchend",
                  function (t) {
                      e && ((e = !1), (n = window.visualViewport && window.visualViewport.scale));
                  },
                  !1
              );
          window.addEventListener(
              "resize",
              ((t, e) => {
                  let n, o;
                  return function () {
                      const l = this,
                          i = arguments;
                      o
                          ? (clearTimeout(n),
                            (n = setTimeout(function () {
                                Date.now() - o >= e && (t.apply(l, i), (o = Date.now()));
                            }, e - (Date.now() - o))))
                          : (t.apply(l, i), (o = Date.now()));
                  };
              })(l, 50)
          ),
              (window.vceResetFullWidthElements = o),
              window.vcv.on("ready", function () {
                  window.vceResetFullWidthElements && window.vceResetFullWidthElements();
              });
      })();
  },
  0: function (t, e, n) {
      t.exports = n("fullWidth");
  },
});
