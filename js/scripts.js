jQuery(document).ready(function (e) {
    function o(o) {
        //   toogle mobile
        e(".nav-menu .nav-list").slideToggle(),
        e("#nav-toggle").toggleClass("active"),
        o.preventDefault();
    }
      e("#content").on("click", function (n) {
        e("#nav-toggle").hasClass("active") && o(n);
      }),
      e("body").on("click", "#nav-toggle", function (e) {
        o(e);
      });



// fullwitdh
      (function () {
        let t,
            e = !1,
            n = 1;
        function o() {
            (t = Array.prototype.slice.call(document.querySelectorAll('[data-full-width="true"]'))), t.length && l();
            (t = Array.prototype.slice.call(document.querySelectorAll('[data-full-width="true"]'))), t.length && l();
        }
        function l() {
            t.length &&
                (e ||
                    ("number" == typeof n && 1 !== n) ||
                    t.forEach(function (t) {
                        const e = document.body,
                            n = t.parentElement,
                            o = t.querySelector('[data-element-content="true"]'),
                            l = parseInt(window.getComputedStyle(t, null)["margin-left"], 10),
                            i = parseInt(window.getComputedStyle(t, null)["margin-right"], 10);
                        let r, c;
                        
                        
               
                        if (
                            (
                            ((r = 0 - n.getBoundingClientRect().left - l), (c = document.documentElement.getBoundingClientRect().width)),
                            (t.style.width = c + "px"),
                            (t.style.left = r + "px"),
                            t.getAttribute("data-stretch-content")
                            )
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
        o(),window.addEventListener("resize", ((t, e) => {
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
            (window.ResetFullWidthElements = o),
            window.vcv.on("ready", function () {
                window.ResetFullWidthElements && window.ResetFullWidthElements();
            });
    })();
   
  })