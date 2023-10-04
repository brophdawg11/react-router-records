function Hd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Wd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bs = { exports: {} },
  mi = {},
  ec = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nl = Symbol.for("react.element"),
  Qd = Symbol.for("react.portal"),
  Kd = Symbol.for("react.fragment"),
  Yd = Symbol.for("react.strict_mode"),
  Xd = Symbol.for("react.profiler"),
  Gd = Symbol.for("react.provider"),
  Zd = Symbol.for("react.context"),
  Jd = Symbol.for("react.forward_ref"),
  qd = Symbol.for("react.suspense"),
  bd = Symbol.for("react.memo"),
  ep = Symbol.for("react.lazy"),
  Ru = Symbol.iterator;
function tp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ru && e[Ru]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = lr.prototype;
function ga(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
var ya = (ga.prototype = new lc());
ya.constructor = ga;
nc(ya, lr.prototype);
ya.isPureReactComponent = !0;
var Nu = Array.isArray,
  ic = Object.prototype.hasOwnProperty,
  wa = { current: null },
  oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ic.call(t, r) && !oc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: nl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: wa.current,
  };
}
function np(e, t) {
  return {
    $$typeof: nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function rp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lu = /\/+/g;
function Vi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? rp("" + e.key)
    : t.toString(36);
}
function Dl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nl:
          case Qd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Vi(o, 0) : r),
      Nu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Lu, "$&/") + "/"),
          Dl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (xa(l) &&
            (l = np(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Lu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Nu(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + Vi(i, a);
      o += Dl(i, t, n, u, l);
    }
  else if (((u = tp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Vi(i, a++)), (o += Dl(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ml(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Dl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function lp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  Ml = { transition: null },
  ip = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: Ml,
    ReactCurrentOwner: wa,
  };
H.Children = {
  map: ml,
  forEach: function (e, t, n) {
    ml(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ml(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ml(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = lr;
H.Fragment = Kd;
H.Profiler = Xd;
H.PureComponent = ga;
H.StrictMode = Yd;
H.Suspense = qd;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = wa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      ic.call(t, u) &&
        !oc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gd, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = ac;
H.createFactory = function (e) {
  var t = ac.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: Jd, render: e };
};
H.isValidElement = xa;
H.lazy = function (e) {
  return { $$typeof: ep, _payload: { _status: -1, _result: e }, _init: lp };
};
H.memo = function (e, t) {
  return { $$typeof: bd, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Ml.transition;
  Ml.transition = {};
  try {
    e();
  } finally {
    Ml.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
H.useContext = function (e) {
  return je.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
H.useId = function () {
  return je.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return je.current.useRef(e);
};
H.useState = function (e) {
  return je.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return je.current.useTransition();
};
H.version = "18.2.0";
ec.exports = H;
var C = ec.exports;
const rl = Wd(C),
  op = Hd({ __proto__: null, default: rl }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap = C,
  up = Symbol.for("react.element"),
  sp = Symbol.for("react.fragment"),
  cp = Object.prototype.hasOwnProperty,
  fp = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) cp.call(t, r) && !dp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: up,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: fp.current,
  };
}
mi.Fragment = sp;
mi.jsx = uc;
mi.jsxs = uc;
bs.exports = mi;
var P = bs.exports,
  yo = {},
  sc = { exports: {} },
  He = {},
  cc = { exports: {} },
  fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, O) {
    var U = j.length;
    j.push(O);
    e: for (; 0 < U; ) {
      var Y = (U - 1) >>> 1,
        q = j[Y];
      if (0 < l(q, O)) (j[Y] = O), (j[U] = q), (U = Y);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var O = j[0],
      U = j.pop();
    if (U !== O) {
      j[0] = U;
      e: for (var Y = 0, q = j.length, Dt = q >>> 1; Y < Dt; ) {
        var ht = 2 * (Y + 1) - 1,
          ar = j[ht],
          mt = ht + 1,
          re = j[mt];
        if (0 > l(ar, U))
          mt < q && 0 > l(re, ar)
            ? ((j[Y] = re), (j[mt] = U), (Y = mt))
            : ((j[Y] = ar), (j[ht] = U), (Y = ht));
        else if (mt < q && 0 > l(re, U)) (j[Y] = re), (j[mt] = U), (Y = mt);
        else break e;
      }
    }
    return O;
  }
  function l(j, O) {
    var U = j.sortIndex - O.sortIndex;
    return U !== 0 ? U : j.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    d = 1,
    v = null,
    m = 3,
    S = !1,
    y = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var O = n(s); O !== null; ) {
      if (O.callback === null) r(s);
      else if (O.startTime <= j)
        r(s), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(s);
    }
  }
  function c(j) {
    if (((w = !1), h(j), !y))
      if (n(u) !== null) (y = !0), jt(k);
      else {
        var O = n(s);
        O !== null && pt(c, O.startTime - j);
      }
  }
  function k(j, O) {
    (y = !1), w && ((w = !1), p(L), (L = -1)), (S = !0);
    var U = m;
    try {
      for (
        h(O), v = n(u);
        v !== null && (!(v.expirationTime > O) || (j && !we()));

      ) {
        var Y = v.callback;
        if (typeof Y == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var q = Y(v.expirationTime <= O);
          (O = e.unstable_now()),
            typeof q == "function" ? (v.callback = q) : v === n(u) && r(u),
            h(O);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var Dt = !0;
      else {
        var ht = n(s);
        ht !== null && pt(c, ht.startTime - O), (Dt = !1);
      }
      return Dt;
    } finally {
      (v = null), (m = U), (S = !1);
    }
  }
  var R = !1,
    N = null,
    L = -1,
    W = 5,
    F = -1;
  function we() {
    return !(e.unstable_now() - F < W);
  }
  function Ue() {
    if (N !== null) {
      var j = e.unstable_now();
      F = j;
      var O = !0;
      try {
        O = N(!0, j);
      } finally {
        O ? at() : ((R = !1), (N = null));
      }
    } else R = !1;
  }
  var at;
  if (typeof f == "function")
    at = function () {
      f(Ue);
    };
  else if (typeof MessageChannel < "u") {
    var rn = new MessageChannel(),
      se = rn.port2;
    (rn.port1.onmessage = Ue),
      (at = function () {
        se.postMessage(null);
      });
  } else
    at = function () {
      T(Ue, 0);
    };
  function jt(j) {
    (N = j), R || ((R = !0), at());
  }
  function pt(j, O) {
    L = T(function () {
      j(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), jt(k));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = m;
      }
      var U = m;
      m = O;
      try {
        return j();
      } finally {
        m = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, O) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var U = m;
      m = j;
      try {
        return O();
      } finally {
        m = U;
      }
    }),
    (e.unstable_scheduleCallback = function (j, O, U) {
      var Y = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Y + U : Y))
          : (U = Y),
        j)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = U + q),
        (j = {
          id: d++,
          callback: O,
          priorityLevel: j,
          startTime: U,
          expirationTime: q,
          sortIndex: -1,
        }),
        U > Y
          ? ((j.sortIndex = U),
            t(s, j),
            n(u) === null &&
              j === n(s) &&
              (w ? (p(L), (L = -1)) : (w = !0), pt(c, U - Y)))
          : ((j.sortIndex = q), t(u, j), y || S || ((y = !0), jt(k))),
        j
      );
    }),
    (e.unstable_shouldYield = we),
    (e.unstable_wrapCallback = function (j) {
      var O = m;
      return function () {
        var U = m;
        m = O;
        try {
          return j.apply(this, arguments);
        } finally {
          m = U;
        }
      };
    });
})(fc);
cc.exports = fc;
var pp = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc = C,
  Ve = pp;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  Ur = {};
function En(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wo = Object.prototype.hasOwnProperty,
  hp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tu = {},
  ju = {};
function mp(e) {
  return wo.call(ju, e)
    ? !0
    : wo.call(Tu, e)
    ? !1
    : hp.test(e)
    ? (ju[e] = !0)
    : ((Tu[e] = !0), !1);
}
function vp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gp(e, t, n, r) {
  if (t === null || typeof t > "u" || vp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sa = /[\-:]([a-z])/g;
function ka(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, ka);
    Ce[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, ka);
    Ce[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sa, ka);
  Ce[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ea(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gp(t, n, l, r) && (n = null),
    r || l === null
      ? mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vl = Symbol.for("react.element"),
  Nn = Symbol.for("react.portal"),
  Ln = Symbol.for("react.fragment"),
  Ca = Symbol.for("react.strict_mode"),
  xo = Symbol.for("react.profiler"),
  hc = Symbol.for("react.provider"),
  mc = Symbol.for("react.context"),
  Pa = Symbol.for("react.forward_ref"),
  So = Symbol.for("react.suspense"),
  ko = Symbol.for("react.suspense_list"),
  _a = Symbol.for("react.memo"),
  It = Symbol.for("react.lazy"),
  vc = Symbol.for("react.offscreen"),
  Du = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Du && e[Du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Hi;
function Cr(e) {
  if (Hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = (t && t[1]) || "";
    }
  return (
    `
` +
    Hi +
    e
  );
}
var Wi = !1;
function Qi(e, t) {
  if (!e || Wi) return "";
  Wi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Wi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function yp(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qi(e.type, !1)), e;
    case 11:
      return (e = Qi(e.type.render, !1)), e;
    case 1:
      return (e = Qi(e.type, !0)), e;
    default:
      return "";
  }
}
function Eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case Nn:
      return "Portal";
    case xo:
      return "Profiler";
    case Ca:
      return "StrictMode";
    case So:
      return "Suspense";
    case ko:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mc:
        return (e.displayName || "Context") + ".Consumer";
      case hc:
        return (e._context.displayName || "Context") + ".Provider";
      case Pa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _a:
        return (
          (t = e.displayName || null), t !== null ? t : Eo(e.type) || "Memo"
        );
      case It:
        (t = e._payload), (e = e._init);
        try {
          return Eo(e(t));
        } catch {}
    }
  return null;
}
function wp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Eo(t);
    case 8:
      return t === Ca ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xp(e) {
  var t = gc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gl(e) {
  e._valueTracker || (e._valueTracker = xp(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Co(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && Ea(e, "checked", t, !1);
}
function Po(e, t) {
  wc(e, t);
  var n = Zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _o(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _o(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _o(e, t, n) {
  (t !== "number" || Wl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pr = Array.isArray;
function Vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ro(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Pr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function xc(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function No(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yl,
  kc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        yl = yl || document.createElement("div"),
          yl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function (e) {
  Sp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nr[t] = Nr[e]);
  });
});
function Ec(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nr.hasOwnProperty(e) && Nr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ec(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var kp = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lo(e, t) {
  if (t) {
    if (kp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function To(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jo = null;
function Ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Do = null,
  Hn = null,
  Wn = null;
function Fu(e) {
  if ((e = ol(e))) {
    if (typeof Do != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = xi(t)), Do(e.stateNode, e.type, t));
  }
}
function Pc(e) {
  Hn ? (Wn ? Wn.push(e) : (Wn = [e])) : (Hn = e);
}
function _c() {
  if (Hn) {
    var e = Hn,
      t = Wn;
    if (((Wn = Hn = null), Fu(e), t)) for (e = 0; e < t.length; e++) Fu(t[e]);
  }
}
function Rc(e, t) {
  return e(t);
}
function Nc() {}
var Ki = !1;
function Lc(e, t, n) {
  if (Ki) return e(t, n);
  Ki = !0;
  try {
    return Rc(e, t, n);
  } finally {
    (Ki = !1), (Hn !== null || Wn !== null) && (Nc(), _c());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Mo = !1;
if (Pt)
  try {
    var pr = {};
    Object.defineProperty(pr, "passive", {
      get: function () {
        Mo = !0;
      },
    }),
      window.addEventListener("test", pr, pr),
      window.removeEventListener("test", pr, pr);
  } catch {
    Mo = !1;
  }
function Ep(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Lr = !1,
  Ql = null,
  Kl = !1,
  zo = null,
  Cp = {
    onError: function (e) {
      (Lr = !0), (Ql = e);
    },
  };
function Pp(e, t, n, r, l, i, o, a, u) {
  (Lr = !1), (Ql = null), Ep.apply(Cp, arguments);
}
function _p(e, t, n, r, l, i, o, a, u) {
  if ((Pp.apply(this, arguments), Lr)) {
    if (Lr) {
      var s = Ql;
      (Lr = !1), (Ql = null);
    } else throw Error(_(198));
    Kl || ((Kl = !0), (zo = s));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Uu(e) {
  if (Cn(e) !== e) throw Error(_(188));
}
function Rp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Uu(l), e;
        if (i === r) return Uu(l), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function jc(e) {
  return (e = Rp(e)), e !== null ? Dc(e) : null;
}
function Dc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mc = Ve.unstable_scheduleCallback,
  Au = Ve.unstable_cancelCallback,
  Np = Ve.unstable_shouldYield,
  Lp = Ve.unstable_requestPaint,
  he = Ve.unstable_now,
  Tp = Ve.unstable_getCurrentPriorityLevel,
  Na = Ve.unstable_ImmediatePriority,
  zc = Ve.unstable_UserBlockingPriority,
  Yl = Ve.unstable_NormalPriority,
  jp = Ve.unstable_LowPriority,
  Oc = Ve.unstable_IdlePriority,
  vi = null,
  ft = null;
function Dp(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : Op,
  Mp = Math.log,
  zp = Math.LN2;
function Op(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mp(e) / zp) | 0)) | 0;
}
var wl = 64,
  xl = 4194304;
function _r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = _r(a)) : ((i &= o), i !== 0 && (r = _r(i)));
  } else (o = n & ~l), o !== 0 ? (r = _r(o)) : i !== 0 && (r = _r(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ip(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - lt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = Ip(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Oo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ic() {
  var e = wl;
  return (wl <<= 1), !(wl & 4194240) && (wl = 64), e;
}
function Yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ll(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n);
}
function Up(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - lt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function La(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var X = 0;
function Fc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Uc,
  Ta,
  Ac,
  Bc,
  $c,
  Io = !1,
  Sl = [],
  Vt = null,
  Ht = null,
  Wt = null,
  $r = new Map(),
  Vr = new Map(),
  Ut = [],
  Ap =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function hr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ol(t)), t !== null && Ta(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Bp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Vt = hr(Vt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ht = hr(Ht, e, t, n, r, l)), !0;
    case "mouseover":
      return (Wt = hr(Wt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return $r.set(i, hr($r.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vr.set(i, hr(Vr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Vc(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tc(n)), t !== null)) {
          (e.blockedOn = t),
            $c(e.priority, function () {
              Ac(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jo = r), n.target.dispatchEvent(r), (jo = null);
    } else return (t = ol(n)), t !== null && Ta(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $u(e, t, n) {
  zl(e) && n.delete(t);
}
function $p() {
  (Io = !1),
    Vt !== null && zl(Vt) && (Vt = null),
    Ht !== null && zl(Ht) && (Ht = null),
    Wt !== null && zl(Wt) && (Wt = null),
    $r.forEach($u),
    Vr.forEach($u);
}
function mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Io ||
      ((Io = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, $p)));
}
function Hr(e) {
  function t(l) {
    return mr(l, e);
  }
  if (0 < Sl.length) {
    mr(Sl[0], e);
    for (var n = 1; n < Sl.length; n++) {
      var r = Sl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && mr(Vt, e),
      Ht !== null && mr(Ht, e),
      Wt !== null && mr(Wt, e),
      $r.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    Vc(n), n.blockedOn === null && Ut.shift();
}
var Qn = Lt.ReactCurrentBatchConfig,
  Gl = !0;
function Vp(e, t, n, r) {
  var l = X,
    i = Qn.transition;
  Qn.transition = null;
  try {
    (X = 1), ja(e, t, n, r);
  } finally {
    (X = l), (Qn.transition = i);
  }
}
function Hp(e, t, n, r) {
  var l = X,
    i = Qn.transition;
  Qn.transition = null;
  try {
    (X = 4), ja(e, t, n, r);
  } finally {
    (X = l), (Qn.transition = i);
  }
}
function ja(e, t, n, r) {
  if (Gl) {
    var l = Fo(e, t, n, r);
    if (l === null) ro(e, t, r, Zl, n), Bu(e, r);
    else if (Bp(l, e, t, n, r)) r.stopPropagation();
    else if ((Bu(e, r), t & 4 && -1 < Ap.indexOf(e))) {
      for (; l !== null; ) {
        var i = ol(l);
        if (
          (i !== null && Uc(i),
          (i = Fo(e, t, n, r)),
          i === null && ro(e, t, r, Zl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var Zl = null;
function Fo(e, t, n, r) {
  if (((Zl = null), (e = Ra(r)), (e = cn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zl = e), null;
}
function Hc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tp()) {
        case Na:
          return 1;
        case zc:
          return 4;
        case Yl:
        case jp:
          return 16;
        case Oc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  Da = null,
  Ol = null;
function Wc() {
  if (Ol) return Ol;
  var e,
    t = Da,
    n = t.length,
    r,
    l = "value" in Bt ? Bt.value : Bt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ol = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Il(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kl() {
  return !0;
}
function Vu() {
  return !1;
}
function We(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? kl
        : Vu),
      (this.isPropagationStopped = Vu),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kl));
      },
      persist: function () {},
      isPersistent: kl,
    }),
    t
  );
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ma = We(ir),
  il = ue({}, ir, { view: 0, detail: 0 }),
  Wp = We(il),
  Xi,
  Gi,
  vr,
  gi = ue({}, il, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: za,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vr &&
            (vr && e.type === "mousemove"
              ? ((Xi = e.screenX - vr.screenX), (Gi = e.screenY - vr.screenY))
              : (Gi = Xi = 0),
            (vr = e)),
          Xi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gi;
    },
  }),
  Hu = We(gi),
  Qp = ue({}, gi, { dataTransfer: 0 }),
  Kp = We(Qp),
  Yp = ue({}, il, { relatedTarget: 0 }),
  Zi = We(Yp),
  Xp = ue({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gp = We(Xp),
  Zp = ue({}, ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jp = We(Zp),
  qp = ue({}, ir, { data: 0 }),
  Wu = We(qp),
  bp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  eh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  th = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = th[e]) ? !!t[e] : !1;
}
function za() {
  return nh;
}
var rh = ue({}, il, {
    key: function (e) {
      if (e.key) {
        var t = bp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Il(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? eh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: za,
    charCode: function (e) {
      return e.type === "keypress" ? Il(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Il(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  lh = We(rh),
  ih = ue({}, gi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qu = We(ih),
  oh = ue({}, il, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: za,
  }),
  ah = We(oh),
  uh = ue({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sh = We(uh),
  ch = ue({}, gi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fh = We(ch),
  dh = [9, 13, 27, 32],
  Oa = Pt && "CompositionEvent" in window,
  Tr = null;
Pt && "documentMode" in document && (Tr = document.documentMode);
var ph = Pt && "TextEvent" in window && !Tr,
  Qc = Pt && (!Oa || (Tr && 8 < Tr && 11 >= Tr)),
  Ku = String.fromCharCode(32),
  Yu = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return dh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function hh(e, t) {
  switch (e) {
    case "compositionend":
      return Yc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yu = !0), Ku);
    case "textInput":
      return (e = t.data), e === Ku && Yu ? null : e;
    default:
      return null;
  }
}
function mh(e, t) {
  if (Tn)
    return e === "compositionend" || (!Oa && Kc(e, t))
      ? ((e = Wc()), (Ol = Da = Bt = null), (Tn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vh[e.type] : t === "textarea";
}
function Xc(e, t, n, r) {
  Pc(r),
    (t = Jl(t, "onChange")),
    0 < t.length &&
      ((n = new Ma("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jr = null,
  Wr = null;
function gh(e) {
  of(e, 0);
}
function yi(e) {
  var t = Mn(e);
  if (yc(t)) return e;
}
function yh(e, t) {
  if (e === "change") return t;
}
var Gc = !1;
if (Pt) {
  var Ji;
  if (Pt) {
    var qi = "oninput" in document;
    if (!qi) {
      var Gu = document.createElement("div");
      Gu.setAttribute("oninput", "return;"),
        (qi = typeof Gu.oninput == "function");
    }
    Ji = qi;
  } else Ji = !1;
  Gc = Ji && (!document.documentMode || 9 < document.documentMode);
}
function Zu() {
  jr && (jr.detachEvent("onpropertychange", Zc), (Wr = jr = null));
}
function Zc(e) {
  if (e.propertyName === "value" && yi(Wr)) {
    var t = [];
    Xc(t, Wr, e, Ra(e)), Lc(gh, t);
  }
}
function wh(e, t, n) {
  e === "focusin"
    ? (Zu(), (jr = t), (Wr = n), jr.attachEvent("onpropertychange", Zc))
    : e === "focusout" && Zu();
}
function xh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yi(Wr);
}
function Sh(e, t) {
  if (e === "click") return yi(t);
}
function kh(e, t) {
  if (e === "input" || e === "change") return yi(t);
}
function Eh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : Eh;
function Qr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wo.call(t, l) || !ot(e[l], t[l])) return !1;
  }
  return !0;
}
function Ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qu(e, t) {
  var n = Ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ju(n);
  }
}
function Jc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Jc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qc() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ch(e) {
  var t = qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ia(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = qu(n, i));
        var o = qu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ph = Pt && "documentMode" in document && 11 >= document.documentMode,
  jn = null,
  Uo = null,
  Dr = null,
  Ao = !1;
function bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    jn == null ||
    jn !== Wl(r) ||
    ((r = jn),
    "selectionStart" in r && Ia(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dr && Qr(Dr, r)) ||
      ((Dr = r),
      (r = Jl(Uo, "onSelect")),
      0 < r.length &&
        ((t = new Ma("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jn))));
}
function El(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dn = {
    animationend: El("Animation", "AnimationEnd"),
    animationiteration: El("Animation", "AnimationIteration"),
    animationstart: El("Animation", "AnimationStart"),
    transitionend: El("Transition", "TransitionEnd"),
  },
  bi = {},
  bc = {};
Pt &&
  ((bc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  "TransitionEvent" in window || delete Dn.transitionend.transition);
function wi(e) {
  if (bi[e]) return bi[e];
  if (!Dn[e]) return e;
  var t = Dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bc) return (bi[e] = t[n]);
  return e;
}
var ef = wi("animationend"),
  tf = wi("animationiteration"),
  nf = wi("animationstart"),
  rf = wi("transitionend"),
  lf = new Map(),
  es =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bt(e, t) {
  lf.set(e, t), En(t, [e]);
}
for (var eo = 0; eo < es.length; eo++) {
  var to = es[eo],
    _h = to.toLowerCase(),
    Rh = to[0].toUpperCase() + to.slice(1);
  bt(_h, "on" + Rh);
}
bt(ef, "onAnimationEnd");
bt(tf, "onAnimationIteration");
bt(nf, "onAnimationStart");
bt("dblclick", "onDoubleClick");
bt("focusin", "onFocus");
bt("focusout", "onBlur");
bt(rf, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Nh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function ts(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _p(r, t, void 0, e), (e.currentTarget = null);
}
function of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          ts(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          ts(l, a, s), (i = u);
        }
    }
  }
  if (Kl) throw ((e = zo), (Kl = !1), (zo = null), e);
}
function ee(e, t) {
  var n = t[Wo];
  n === void 0 && (n = t[Wo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (af(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  t && (r |= 4), af(n, e, r, t);
}
var Cl = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Cl]) {
    (e[Cl] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Nh.has(n) || no(n, !1, e), no(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cl] || ((t[Cl] = !0), no("selectionchange", !1, t));
  }
}
function af(e, t, n, r) {
  switch (Hc(t)) {
    case 1:
      var l = Vp;
      break;
    case 4:
      l = Hp;
      break;
    default:
      l = ja;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ro(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = cn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Lc(function () {
    var s = i,
      d = Ra(n),
      v = [];
    e: {
      var m = lf.get(e);
      if (m !== void 0) {
        var S = Ma,
          y = e;
        switch (e) {
          case "keypress":
            if (Il(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = lh;
            break;
          case "focusin":
            (y = "focus"), (S = Zi);
            break;
          case "focusout":
            (y = "blur"), (S = Zi);
            break;
          case "beforeblur":
          case "afterblur":
            S = Zi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = ah;
            break;
          case ef:
          case tf:
          case nf:
            S = Gp;
            break;
          case rf:
            S = sh;
            break;
          case "scroll":
            S = Wp;
            break;
          case "wheel":
            S = fh;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Jp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Qu;
        }
        var w = (t & 4) !== 0,
          T = !w && e === "scroll",
          p = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var c = h.stateNode;
          if (
            (h.tag === 5 &&
              c !== null &&
              ((h = c),
              p !== null && ((c = Br(f, p)), c != null && w.push(Yr(f, c, h)))),
            T)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((m = new S(m, y, null, n, d)), v.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== jo &&
            (y = n.relatedTarget || n.fromElement) &&
            (cn(y) || y[_t]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = s),
              (y = y ? cn(y) : null),
              y !== null &&
                ((T = Cn(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = s)),
          S !== y)
        ) {
          if (
            ((w = Hu),
            (c = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Qu),
              (c = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (T = S == null ? m : Mn(S)),
            (h = y == null ? m : Mn(y)),
            (m = new w(c, f + "leave", S, n, d)),
            (m.target = T),
            (m.relatedTarget = h),
            (c = null),
            cn(d) === s &&
              ((w = new w(p, f + "enter", y, n, d)),
              (w.target = h),
              (w.relatedTarget = T),
              (c = w)),
            (T = c),
            S && y)
          )
            t: {
              for (w = S, p = y, f = 0, h = w; h; h = _n(h)) f++;
              for (h = 0, c = p; c; c = _n(c)) h++;
              for (; 0 < f - h; ) (w = _n(w)), f--;
              for (; 0 < h - f; ) (p = _n(p)), h--;
              for (; f--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = _n(w)), (p = _n(p));
              }
              w = null;
            }
          else w = null;
          S !== null && ns(v, m, S, w, !1),
            y !== null && T !== null && ns(v, T, y, w, !0);
        }
      }
      e: {
        if (
          ((m = s ? Mn(s) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var k = yh;
        else if (Xu(m))
          if (Gc) k = kh;
          else {
            k = xh;
            var R = wh;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Sh);
        if (k && (k = k(e, s))) {
          Xc(v, k, n, d);
          break e;
        }
        R && R(e, m, s),
          e === "focusout" &&
            (R = m._wrapperState) &&
            R.controlled &&
            m.type === "number" &&
            _o(m, "number", m.value);
      }
      switch (((R = s ? Mn(s) : window), e)) {
        case "focusin":
          (Xu(R) || R.contentEditable === "true") &&
            ((jn = R), (Uo = s), (Dr = null));
          break;
        case "focusout":
          Dr = Uo = jn = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ao = !1), bu(v, n, d);
          break;
        case "selectionchange":
          if (Ph) break;
        case "keydown":
        case "keyup":
          bu(v, n, d);
      }
      var N;
      if (Oa)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Tn
          ? Kc(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Qc &&
          n.locale !== "ko" &&
          (Tn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Tn && (N = Wc())
            : ((Bt = d),
              (Da = "value" in Bt ? Bt.value : Bt.textContent),
              (Tn = !0))),
        (R = Jl(s, L)),
        0 < R.length &&
          ((L = new Wu(L, e, null, n, d)),
          v.push({ event: L, listeners: R }),
          N ? (L.data = N) : ((N = Yc(n)), N !== null && (L.data = N)))),
        (N = ph ? hh(e, n) : mh(e, n)) &&
          ((s = Jl(s, "onBeforeInput")),
          0 < s.length &&
            ((d = new Wu("onBeforeInput", "beforeinput", null, n, d)),
            v.push({ event: d, listeners: s }),
            (d.data = N)));
    }
    of(v, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Br(e, n)),
      i != null && r.unshift(Yr(e, i, l)),
      (i = Br(e, t)),
      i != null && r.push(Yr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ns(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Br(n, i)), u != null && o.unshift(Yr(n, u, a)))
        : l || ((u = Br(n, i)), u != null && o.push(Yr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Lh = /\r\n?/g,
  Th = /\u0000|\uFFFD/g;
function rs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lh,
      `
`
    )
    .replace(Th, "");
}
function Pl(e, t, n) {
  if (((t = rs(t)), rs(e) !== t && n)) throw Error(_(425));
}
function ql() {}
var Bo = null,
  $o = null;
function Vo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ho = typeof setTimeout == "function" ? setTimeout : void 0,
  jh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ls = typeof Promise == "function" ? Promise : void 0,
  Dh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ls < "u"
      ? function (e) {
          return ls.resolve(null).then(e).catch(Mh);
        }
      : Ho;
function Mh(e) {
  setTimeout(function () {
    throw e;
  });
}
function lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hr(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function is(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var or = Math.random().toString(36).slice(2),
  ct = "__reactFiber$" + or,
  Xr = "__reactProps$" + or,
  _t = "__reactContainer$" + or,
  Wo = "__reactEvents$" + or,
  zh = "__reactListeners$" + or,
  Oh = "__reactHandles$" + or;
function cn(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = is(e); e !== null; ) {
          if ((n = e[ct])) return n;
          e = is(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ol(e) {
  return (
    (e = e[ct] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function xi(e) {
  return e[Xr] || null;
}
var Qo = [],
  zn = -1;
function en(e) {
  return { current: e };
}
function te(e) {
  0 > zn || ((e.current = Qo[zn]), (Qo[zn] = null), zn--);
}
function b(e, t) {
  zn++, (Qo[zn] = e.current), (e.current = t);
}
var Jt = {},
  Ne = en(Jt),
  Oe = en(!1),
  vn = Jt;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function bl() {
  te(Oe), te(Ne);
}
function os(e, t, n) {
  if (Ne.current !== Jt) throw Error(_(168));
  b(Ne, t), b(Oe, n);
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, wp(e) || "Unknown", l));
  return ue({}, n, r);
}
function ei(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (vn = Ne.current),
    b(Ne, e),
    b(Oe, Oe.current),
    !0
  );
}
function as(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = uf(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Oe),
      te(Ne),
      b(Ne, e))
    : te(Oe),
    b(Oe, n);
}
var xt = null,
  Si = !1,
  io = !1;
function sf(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Ih(e) {
  (Si = !0), sf(e);
}
function tn() {
  if (!io && xt !== null) {
    io = !0;
    var e = 0,
      t = X;
    try {
      var n = xt;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xt = null), (Si = !1);
    } catch (l) {
      throw (xt !== null && (xt = xt.slice(e + 1)), Mc(Na, tn), l);
    } finally {
      (X = t), (io = !1);
    }
  }
  return null;
}
var On = [],
  In = 0,
  ti = null,
  ni = 0,
  Ke = [],
  Ye = 0,
  gn = null,
  St = 1,
  kt = "";
function un(e, t) {
  (On[In++] = ni), (On[In++] = ti), (ti = e), (ni = t);
}
function cf(e, t, n) {
  (Ke[Ye++] = St), (Ke[Ye++] = kt), (Ke[Ye++] = gn), (gn = e);
  var r = St;
  e = kt;
  var l = 32 - lt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - lt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (St = (1 << (32 - lt(t) + l)) | (n << l) | r),
      (kt = i + e);
  } else (St = (1 << i) | (n << l) | r), (kt = e);
}
function Fa(e) {
  e.return !== null && (un(e, 1), cf(e, 1, 0));
}
function Ua(e) {
  for (; e === ti; )
    (ti = On[--In]), (On[In] = null), (ni = On[--In]), (On[In] = null);
  for (; e === gn; )
    (gn = Ke[--Ye]),
      (Ke[Ye] = null),
      (kt = Ke[--Ye]),
      (Ke[Ye] = null),
      (St = Ke[--Ye]),
      (Ke[Ye] = null);
}
var $e = null,
  Be = null,
  ne = !1,
  rt = null;
function ff(e, t) {
  var n = Xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function us(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Be = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: St, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (ne) {
    var t = Be;
    if (t) {
      var n = t;
      if (!us(e, t)) {
        if (Ko(e)) throw Error(_(418));
        t = Qt(n.nextSibling);
        var r = $e;
        t && us(e, t)
          ? ff(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), ($e = e));
      }
    } else {
      if (Ko(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), ($e = e);
    }
  }
}
function ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function _l(e) {
  if (e !== $e) return !1;
  if (!ne) return ss(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Ko(e)) throw (df(), Error(_(418)));
    for (; t; ) ff(e, t), (t = Qt(t.nextSibling));
  }
  if ((ss(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = $e ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function df() {
  for (var e = Be; e; ) e = Qt(e.nextSibling);
}
function Jn() {
  (Be = $e = null), (ne = !1);
}
function Aa(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var Fh = Lt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ri = en(null),
  li = null,
  Fn = null,
  Ba = null;
function $a() {
  Ba = Fn = li = null;
}
function Va(e) {
  var t = ri.current;
  te(ri), (e._currentValue = t);
}
function Xo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Kn(e, t) {
  (li = e),
    (Ba = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (li === null) throw Error(_(308));
      (Fn = e), (li.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var fn = null;
function Ha(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function pf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ha(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function Wa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ha(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function Fl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n);
  }
}
function cs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ii(e, t, n, r) {
  var l = e.updateQueue;
  Ft = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = s) : (a.next = s),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var v = l.baseState;
    (o = 0), (d = s = u = null), (a = i);
    do {
      var m = a.lane,
        S = a.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            w = a;
          switch (((m = t), (S = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                v = y.call(S, v, m);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(S, v, m) : y),
                m == null)
              )
                break e;
              v = ue({}, v, m);
              break e;
            case 2:
              Ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((s = d = S), (u = v)) : (d = d.next = S),
          (o |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = v),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (wn |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function fs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(_(191, l));
        l.call(r);
      }
    }
}
var mf = new dc.Component().refs;
function Go(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ki = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Xt(e),
      i = Et(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, l)),
      t !== null && (it(t, e, l, r), Fl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Xt(e),
      i = Et(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, l)),
      t !== null && (it(t, e, l, r), Fl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = Xt(e),
      l = Et(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Kt(e, l, r)),
      t !== null && (it(t, e, r, n), Fl(t, e, r));
  },
};
function ds(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qr(n, r) || !Qr(l, i)
      : !0
  );
}
function vf(e, t, n) {
  var r = !1,
    l = Jt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ze(i))
      : ((l = Ie(t) ? vn : Ne.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Zn(e, l) : Jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ki),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ps(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ki.enqueueReplaceState(t, t.state, null);
}
function Zo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = mf), Wa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ze(i))
    : ((i = Ie(t) ? vn : Ne.current), (l.context = Zn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Go(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ki.enqueueReplaceState(l, l.state, null),
      ii(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            a === mf && (a = l.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Rl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function hs(e) {
  var t = e._init;
  return t(e._payload);
}
function gf(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [f]), (p.flags |= 16)) : h.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = Gt(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, f, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((p.flags |= 2), f) : h)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, h, c) {
    return f === null || f.tag !== 6
      ? ((f = po(h, p.mode, c)), (f.return = p), f)
      : ((f = l(f, h)), (f.return = p), f);
  }
  function u(p, f, h, c) {
    var k = h.type;
    return k === Ln
      ? d(p, f, h.props.children, c, h.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === It &&
            hs(k) === f.type))
      ? ((c = l(f, h.props)), (c.ref = gr(p, f, h)), (c.return = p), c)
      : ((c = Hl(h.type, h.key, h.props, null, p.mode, c)),
        (c.ref = gr(p, f, h)),
        (c.return = p),
        c);
  }
  function s(p, f, h, c) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = ho(h, p.mode, c)), (f.return = p), f)
      : ((f = l(f, h.children || [])), (f.return = p), f);
  }
  function d(p, f, h, c, k) {
    return f === null || f.tag !== 7
      ? ((f = mn(h, p.mode, c, k)), (f.return = p), f)
      : ((f = l(f, h)), (f.return = p), f);
  }
  function v(p, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = po("" + f, p.mode, h)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vl:
          return (
            (h = Hl(f.type, f.key, f.props, null, p.mode, h)),
            (h.ref = gr(p, null, f)),
            (h.return = p),
            h
          );
        case Nn:
          return (f = ho(f, p.mode, h)), (f.return = p), f;
        case It:
          var c = f._init;
          return v(p, c(f._payload), h);
      }
      if (Pr(f) || dr(f))
        return (f = mn(f, p.mode, h, null)), (f.return = p), f;
      Rl(p, f);
    }
    return null;
  }
  function m(p, f, h, c) {
    var k = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : a(p, f, "" + h, c);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vl:
          return h.key === k ? u(p, f, h, c) : null;
        case Nn:
          return h.key === k ? s(p, f, h, c) : null;
        case It:
          return (k = h._init), m(p, f, k(h._payload), c);
      }
      if (Pr(h) || dr(h)) return k !== null ? null : d(p, f, h, c, null);
      Rl(p, h);
    }
    return null;
  }
  function S(p, f, h, c, k) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (p = p.get(h) || null), a(f, p, "" + c, k);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case vl:
          return (p = p.get(c.key === null ? h : c.key) || null), u(f, p, c, k);
        case Nn:
          return (p = p.get(c.key === null ? h : c.key) || null), s(f, p, c, k);
        case It:
          var R = c._init;
          return S(p, f, h, R(c._payload), k);
      }
      if (Pr(c) || dr(c)) return (p = p.get(h) || null), d(f, p, c, k, null);
      Rl(f, c);
    }
    return null;
  }
  function y(p, f, h, c) {
    for (
      var k = null, R = null, N = f, L = (f = 0), W = null;
      N !== null && L < h.length;
      L++
    ) {
      N.index > L ? ((W = N), (N = null)) : (W = N.sibling);
      var F = m(p, N, h[L], c);
      if (F === null) {
        N === null && (N = W);
        break;
      }
      e && N && F.alternate === null && t(p, N),
        (f = i(F, f, L)),
        R === null ? (k = F) : (R.sibling = F),
        (R = F),
        (N = W);
    }
    if (L === h.length) return n(p, N), ne && un(p, L), k;
    if (N === null) {
      for (; L < h.length; L++)
        (N = v(p, h[L], c)),
          N !== null &&
            ((f = i(N, f, L)), R === null ? (k = N) : (R.sibling = N), (R = N));
      return ne && un(p, L), k;
    }
    for (N = r(p, N); L < h.length; L++)
      (W = S(N, p, L, h[L], c)),
        W !== null &&
          (e && W.alternate !== null && N.delete(W.key === null ? L : W.key),
          (f = i(W, f, L)),
          R === null ? (k = W) : (R.sibling = W),
          (R = W));
    return (
      e &&
        N.forEach(function (we) {
          return t(p, we);
        }),
      ne && un(p, L),
      k
    );
  }
  function w(p, f, h, c) {
    var k = dr(h);
    if (typeof k != "function") throw Error(_(150));
    if (((h = k.call(h)), h == null)) throw Error(_(151));
    for (
      var R = (k = null), N = f, L = (f = 0), W = null, F = h.next();
      N !== null && !F.done;
      L++, F = h.next()
    ) {
      N.index > L ? ((W = N), (N = null)) : (W = N.sibling);
      var we = m(p, N, F.value, c);
      if (we === null) {
        N === null && (N = W);
        break;
      }
      e && N && we.alternate === null && t(p, N),
        (f = i(we, f, L)),
        R === null ? (k = we) : (R.sibling = we),
        (R = we),
        (N = W);
    }
    if (F.done) return n(p, N), ne && un(p, L), k;
    if (N === null) {
      for (; !F.done; L++, F = h.next())
        (F = v(p, F.value, c)),
          F !== null &&
            ((f = i(F, f, L)), R === null ? (k = F) : (R.sibling = F), (R = F));
      return ne && un(p, L), k;
    }
    for (N = r(p, N); !F.done; L++, F = h.next())
      (F = S(N, p, L, F.value, c)),
        F !== null &&
          (e && F.alternate !== null && N.delete(F.key === null ? L : F.key),
          (f = i(F, f, L)),
          R === null ? (k = F) : (R.sibling = F),
          (R = F));
    return (
      e &&
        N.forEach(function (Ue) {
          return t(p, Ue);
        }),
      ne && un(p, L),
      k
    );
  }
  function T(p, f, h, c) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Ln &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case vl:
          e: {
            for (var k = h.key, R = f; R !== null; ) {
              if (R.key === k) {
                if (((k = h.type), k === Ln)) {
                  if (R.tag === 7) {
                    n(p, R.sibling),
                      (f = l(R, h.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  R.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === It &&
                    hs(k) === R.type)
                ) {
                  n(p, R.sibling),
                    (f = l(R, h.props)),
                    (f.ref = gr(p, R, h)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            h.type === Ln
              ? ((f = mn(h.props.children, p.mode, c, h.key)),
                (f.return = p),
                (p = f))
              : ((c = Hl(h.type, h.key, h.props, null, p.mode, c)),
                (c.ref = gr(p, f, h)),
                (c.return = p),
                (p = c));
          }
          return o(p);
        case Nn:
          e: {
            for (R = h.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(p, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = ho(h, p.mode, c)), (f.return = p), (p = f);
          }
          return o(p);
        case It:
          return (R = h._init), T(p, f, R(h._payload), c);
      }
      if (Pr(h)) return y(p, f, h, c);
      if (dr(h)) return w(p, f, h, c);
      Rl(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, h)), (f.return = p), (p = f))
          : (n(p, f), (f = po(h, p.mode, c)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return T;
}
var qn = gf(!0),
  yf = gf(!1),
  al = {},
  dt = en(al),
  Gr = en(al),
  Zr = en(al);
function dn(e) {
  if (e === al) throw Error(_(174));
  return e;
}
function Qa(e, t) {
  switch ((b(Zr, t), b(Gr, e), b(dt, al), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = No(t, e));
  }
  te(dt), b(dt, t);
}
function bn() {
  te(dt), te(Gr), te(Zr);
}
function wf(e) {
  dn(Zr.current);
  var t = dn(dt.current),
    n = No(t, e.type);
  t !== n && (b(Gr, e), b(dt, n));
}
function Ka(e) {
  Gr.current === e && (te(dt), te(Gr));
}
var oe = en(0);
function oi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var oo = [];
function Ya() {
  for (var e = 0; e < oo.length; e++)
    oo[e]._workInProgressVersionPrimary = null;
  oo.length = 0;
}
var Ul = Lt.ReactCurrentDispatcher,
  ao = Lt.ReactCurrentBatchConfig,
  yn = 0,
  ae = null,
  ge = null,
  xe = null,
  ai = !1,
  Mr = !1,
  Jr = 0,
  Uh = 0;
function Pe() {
  throw Error(_(321));
}
function Xa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Ga(e, t, n, r, l, i) {
  if (
    ((yn = i),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ul.current = e === null || e.memoizedState === null ? Vh : Hh),
    (e = n(r, l)),
    Mr)
  ) {
    i = 0;
    do {
      if (((Mr = !1), (Jr = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (Ul.current = Wh),
        (e = n(r, l));
    } while (Mr);
  }
  if (
    ((Ul.current = ui),
    (t = ge !== null && ge.next !== null),
    (yn = 0),
    (xe = ge = ae = null),
    (ai = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Za() {
  var e = Jr !== 0;
  return (Jr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function Je() {
  if (ge === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? ae.memoizedState : xe.next;
  if (t !== null) (xe = t), (ge = e);
  else {
    if (e === null) throw Error(_(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function uo(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var d = s.lane;
      if ((yn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = v), (o = r)) : (u = u.next = v),
          (ae.lanes |= d),
          (wn |= d);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      ot(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ae.lanes |= i), (wn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function so(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    ot(i, t.memoizedState) || (ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function xf() {}
function Sf(e, t) {
  var n = ae,
    r = Je(),
    l = t(),
    i = !ot(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ze = !0)),
    (r = r.queue),
    Ja(Cf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      br(9, Ef.bind(null, n, r, l, t), void 0, null),
      Se === null)
    )
      throw Error(_(349));
    yn & 30 || kf(n, t, l);
  }
  return l;
}
function kf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ef(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pf(t) && _f(e);
}
function Cf(e, t, n) {
  return n(function () {
    Pf(t) && _f(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function _f(e) {
  var t = Rt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function ms(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $h.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Rf() {
  return Je().memoizedState;
}
function Al(e, t, n, r) {
  var l = st();
  (ae.flags |= e),
    (l.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ei(e, t, n, r) {
  var l = Je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var o = ge.memoizedState;
    if (((i = o.destroy), r !== null && Xa(r, o.deps))) {
      l.memoizedState = br(t, n, i, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = br(1 | t, n, i, r));
}
function vs(e, t) {
  return Al(8390656, 8, e, t);
}
function Ja(e, t) {
  return Ei(2048, 8, e, t);
}
function Nf(e, t) {
  return Ei(4, 2, e, t);
}
function Lf(e, t) {
  return Ei(4, 4, e, t);
}
function Tf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ei(4, 4, Tf.bind(null, t, e), n)
  );
}
function qa() {}
function Df(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mf(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zf(e, t, n) {
  return yn & 21
    ? (ot(n, t) || ((n = Ic()), (ae.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function Ah(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ao.transition;
  ao.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (ao.transition = r);
  }
}
function Of() {
  return Je().memoizedState;
}
function Bh(e, t, n) {
  var r = Xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    If(e))
  )
    Ff(t, n);
  else if (((n = pf(e, t, n, r)), n !== null)) {
    var l = Te();
    it(n, e, r, l), Uf(n, t, r);
  }
}
function $h(e, t, n) {
  var r = Xt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (If(e)) Ff(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ot(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ha(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = pf(e, t, l, r)),
      n !== null && ((l = Te()), it(n, e, r, l), Uf(n, t, r));
  }
}
function If(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Ff(e, t) {
  Mr = ai = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Uf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n);
  }
}
var ui = {
    readContext: Ze,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Vh = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: vs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Al(4194308, 4, Tf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Al(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Al(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bh.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ms,
    useDebugValue: qa,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = ms(!1),
        t = e[0];
      return (e = Ah.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = st();
      if (ne) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(_(349));
        yn & 30 || kf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        vs(Cf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        br(9, Ef.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = Se.identifierPrefix;
      if (ne) {
        var n = kt,
          r = St;
        (n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Uh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hh = {
    readContext: Ze,
    useCallback: Df,
    useContext: Ze,
    useEffect: Ja,
    useImperativeHandle: jf,
    useInsertionEffect: Nf,
    useLayoutEffect: Lf,
    useMemo: Mf,
    useReducer: uo,
    useRef: Rf,
    useState: function () {
      return uo(qr);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = Je();
      return zf(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = uo(qr)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Of,
    unstable_isNewReconciler: !1,
  },
  Wh = {
    readContext: Ze,
    useCallback: Df,
    useContext: Ze,
    useEffect: Ja,
    useImperativeHandle: jf,
    useInsertionEffect: Nf,
    useLayoutEffect: Lf,
    useMemo: Mf,
    useReducer: so,
    useRef: Rf,
    useState: function () {
      return so(qr);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = Je();
      return ge === null ? (t.memoizedState = e) : zf(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = so(qr)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Of,
    unstable_isNewReconciler: !1,
  };
function er(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qh = typeof WeakMap == "function" ? WeakMap : Map;
function Af(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ci || ((ci = !0), (aa = r)), Jo(e, t);
    }),
    n
  );
}
function Bf(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Jo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Jo(e, t),
          typeof r != "function" &&
            (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = im.bind(null, e, t, n)), t.then(e, e));
}
function ys(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ws(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Et(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Kh = Lt.ReactCurrentOwner,
  ze = !1;
function Le(e, t, n, r) {
  t.child = e === null ? yf(t, null, n, r) : qn(t, e.child, n, r);
}
function xs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Kn(t, l),
    (r = Ga(e, t, n, r, i, l)),
    (n = Za()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (ne && n && Fa(t), (t.flags |= 1), Le(e, t, r, l), t.child)
  );
}
function Ss(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ou(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), $f(e, t, i, r, l))
      : ((e = Hl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qr), n(o, r) && e.ref === t.ref)
    )
      return Nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Gt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $f(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qr(i, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), Nt(e, t, l);
  }
  return qo(e, t, n, r, l);
}
function Vf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(An, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(An, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(An, Ae),
        (Ae |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(An, Ae),
      (Ae |= r);
  return Le(e, t, l, n), t.child;
}
function Hf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qo(e, t, n, r, l) {
  var i = Ie(n) ? vn : Ne.current;
  return (
    (i = Zn(t, i)),
    Kn(t, l),
    (n = Ga(e, t, n, r, i, l)),
    (r = Za()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (ne && r && Fa(t), (t.flags |= 1), Le(e, t, n, l), t.child)
  );
}
function ks(e, t, n, r, l) {
  if (Ie(n)) {
    var i = !0;
    ei(t);
  } else i = !1;
  if ((Kn(t, l), t.stateNode === null))
    Bl(e, t), vf(t, n, r), Zo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Ze(s))
      : ((s = Ie(n) ? vn : Ne.current), (s = Zn(t, s)));
    var d = n.getDerivedStateFromProps,
      v =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && ps(t, o, r, s)),
      (Ft = !1);
    var m = t.memoizedState;
    (o.state = m),
      ii(t, r, o, l),
      (u = t.memoizedState),
      a !== r || m !== u || Oe.current || Ft
        ? (typeof d == "function" && (Go(t, n, d, r), (u = t.memoizedState)),
          (a = Ft || ds(t, n, a, r, m, u, s))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      hf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : et(t.type, a)),
      (o.props = s),
      (v = t.pendingProps),
      (m = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ze(u))
        : ((u = Ie(n) ? vn : Ne.current), (u = Zn(t, u)));
    var S = n.getDerivedStateFromProps;
    (d =
      typeof S == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== v || m !== u) && ps(t, o, r, u)),
      (Ft = !1),
      (m = t.memoizedState),
      (o.state = m),
      ii(t, r, o, l);
    var y = t.memoizedState;
    a !== v || m !== y || Oe.current || Ft
      ? (typeof S == "function" && (Go(t, n, S, r), (y = t.memoizedState)),
        (s = Ft || ds(t, n, s, r, m, y, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bo(e, t, n, r, i, l);
}
function bo(e, t, n, r, l, i) {
  Hf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && as(t, n, !1), Nt(e, t, i);
  (r = t.stateNode), (Kh.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = qn(t, e.child, null, i)), (t.child = qn(t, null, a, i)))
      : Le(e, t, a, i),
    (t.memoizedState = r.state),
    l && as(t, n, !0),
    t.child
  );
}
function Wf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? os(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && os(e, t.context, !1),
    Qa(e, t.containerInfo);
}
function Es(e, t, n, r, l) {
  return Jn(), Aa(l), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var ea = { dehydrated: null, treeContext: null, retryLane: 0 };
function ta(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(oe, l & 1),
    e === null)
  )
    return (
      Yo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = _i(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ta(n)),
              (t.memoizedState = ea),
              e)
            : ba(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Yh(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Gt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = Gt(a, i)) : ((i = mn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ta(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ea),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Gt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ba(e, t) {
  return (
    (t = _i({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nl(e, t, n, r) {
  return (
    r !== null && Aa(r),
    qn(t, e.child, null, n),
    (e = ba(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(_(422)))), Nl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = _i({ mode: "visible", children: r.children }, l, 0, null)),
        (i = mn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && qn(t, e.child, null, o),
        (t.child.memoizedState = ta(o)),
        (t.memoizedState = ea),
        i);
  if (!(t.mode & 1)) return Nl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(_(419))), (r = co(i, r, void 0)), Nl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), ze || a)) {
    if (((r = Se), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Rt(e, l), it(r, e, l, -1));
    }
    return iu(), (r = co(Error(_(421)))), Nl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = om.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Be = Qt(l.nextSibling)),
      ($e = t),
      (ne = !0),
      (rt = null),
      e !== null &&
        ((Ke[Ye++] = St),
        (Ke[Ye++] = kt),
        (Ke[Ye++] = gn),
        (St = e.id),
        (kt = e.overflow),
        (gn = t)),
      (t = ba(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xo(e.return, t, n);
}
function fo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Kf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Le(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cs(e, n, t);
        else if (e.tag === 19) Cs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && oi(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && oi(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        fo(t, !0, n, null, i);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xh(e, t, n) {
  switch (t.tag) {
    case 3:
      Wf(t), Jn();
      break;
    case 5:
      wf(t);
      break;
    case 1:
      Ie(t.type) && ei(t);
      break;
    case 4:
      Qa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(ri, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qf(e, t, n)
          : (b(oe, oe.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      b(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Kf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vf(e, t, n);
  }
  return Nt(e, t, n);
}
var Yf, na, Xf, Gf;
Yf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
na = function () {};
Xf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), dn(dt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Co(e, l)), (r = Co(e, r)), (i = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ro(e, l)), (r = Ro(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ql);
    }
    Lo(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Ur.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Ur.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ee("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ua(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return Ie(t.type) && bl(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        bn(),
        te(Oe),
        te(Ne),
        Ya(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_l(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (ca(rt), (rt = null)))),
        na(e, t),
        _e(t),
        null
      );
    case 5:
      Ka(t);
      var l = dn(Zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return _e(t), null;
        }
        if (((e = dn(dt.current)), _l(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[ct] = t), (r[Xr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Rr.length; l++) ee(Rr[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Mu(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Ou(r, i), ee("invalid", r);
          }
          Lo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Ur.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              gl(r), zu(r, i, !0);
              break;
            case "textarea":
              gl(r), Iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ql);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[ct] = t),
            (e[Xr] = r),
            Yf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = To(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Rr.length; l++) ee(Rr[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Mu(e, r), (l = Co(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Ou(e, r), (l = Ro(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            Lo(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? Cc(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && kc(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Ar(e, u)
                    : typeof u == "number" && Ar(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ur.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && ee("scroll", e)
                      : u != null && Ea(e, i, u, o));
              }
            switch (n) {
              case "input":
                gl(e), zu(e, r, !1);
                break;
              case "textarea":
                gl(e), Iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Vn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ql);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = dn(Zr.current)), dn(dt.current), _l(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ct] = t),
            (i = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ct] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (te(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Be !== null && t.mode & 1 && !(t.flags & 128))
          df(), Jn(), (t.flags |= 98560), (i = !1);
        else if (((i = _l(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[ct] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (i = !1);
        } else rt !== null && (ca(rt), (rt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? ye === 0 && (ye = 3) : iu())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        bn(), na(e, t), e === null && Kr(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return Va(t.type._context), _e(t), null;
    case 17:
      return Ie(t.type) && bl(), _e(t), null;
    case 19:
      if ((te(oe), (i = t.memoizedState), i === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yr(i, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = oi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > tr &&
            ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ne)
            )
              return _e(t), null;
          } else
            2 * he() - i.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = oe.current),
          b(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Zh(e, t) {
  switch ((Ua(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && bl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        bn(),
        te(Oe),
        te(Ne),
        Ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ka(t), null;
    case 13:
      if (
        (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(oe), null;
    case 4:
      return bn(), null;
    case 10:
      return Va(t.type._context), null;
    case 22:
    case 23:
      return lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ll = !1,
  Re = !1,
  Jh = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function ra(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Ps = !1;
function qh(e, t) {
  if (((Bo = Gl), (e = qc()), Ia(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            d = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              v !== n || (l !== 0 && v.nodeType !== 3) || (a = o + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (u = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (S = v.firstChild) !== null;

            )
              (m = v), (v = S);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++s === l && (a = o),
                m === i && ++d === r && (u = o),
                (S = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = S;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($o = { focusedElem: e, selectionRange: n }, Gl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    T = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : et(t.type, w),
                      T
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (c) {
          ce(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = Ps), (Ps = !1), y;
}
function zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ra(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ci(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function la(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Zf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Zf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ct], delete t[Xr], delete t[Wo], delete t[zh], delete t[Oh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Jf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _s(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ql));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
function oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oa(e, t, n), e = e.sibling; e !== null; ) oa(e, t, n), (e = e.sibling);
}
var ke = null,
  tt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) qf(e, t, n), (n = n.sibling);
}
function qf(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(vi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Un(n, t);
    case 6:
      var r = ke,
        l = tt;
      (ke = null),
        Ot(e, t, n),
        (ke = r),
        (tt = l),
        ke !== null &&
          (tt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (tt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? lo(e.parentNode, n)
              : e.nodeType === 1 && lo(e, n),
            Hr(e))
          : lo(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (l = tt),
        (ke = n.stateNode.containerInfo),
        (tt = !0),
        Ot(e, t, n),
        (ke = r),
        (tt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ra(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Ot(e, t, n), (Re = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function Rs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jh()),
      t.forEach(function (r) {
        var l = am.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (tt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (tt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(_(160));
        qf(i, o, l), (ke = null), (tt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bf(t, e), (t = t.sibling);
}
function bf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((be(t, e), ut(e), r & 4)) {
        try {
          zr(3, e, e.return), Ci(3, e);
        } catch (w) {
          ce(e, e.return, w);
        }
        try {
          zr(5, e, e.return);
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 1:
      be(t, e), ut(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (be(t, e),
        ut(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ar(l, "");
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && wc(l, i),
              To(a, o);
            var s = To(a, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                v = u[o + 1];
              d === "style"
                ? Cc(l, v)
                : d === "dangerouslySetInnerHTML"
                ? kc(l, v)
                : d === "children"
                ? Ar(l, v)
                : Ea(l, d, v, s);
            }
            switch (a) {
              case "input":
                Po(l, i);
                break;
              case "textarea":
                xc(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Vn(l, !!i.multiple, S, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Vn(l, !!i.multiple, i.defaultValue, !0)
                      : Vn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Xr] = i;
          } catch (w) {
            ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((be(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (be(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hr(t.containerInfo);
        } catch (w) {
          ce(e, e.return, w);
        }
      break;
    case 4:
      be(t, e), ut(e);
      break;
    case 13:
      be(t, e),
        ut(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (nu = he())),
        r & 4 && Rs(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (s = Re) || d), be(t, e), (Re = s)) : be(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (v = M = d; M !== null; ) {
              switch (((m = M), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, m, m.return);
                  break;
                case 1:
                  Un(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Un(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ls(v);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (M = S)) : Ls(v);
            }
            d = d.sibling;
          }
        e: for (d = null, v = e; ; ) {
          if (v.tag === 5) {
            if (d === null) {
              d = v;
              try {
                (l = v.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = v.stateNode),
                      (u = v.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Ec("display", o)));
              } catch (w) {
                ce(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (d === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (w) {
                ce(e, e.return, w);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            d === v && (d = null), (v = v.return);
          }
          d === v && (d = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      be(t, e), ut(e), r & 4 && Rs(e);
      break;
    case 21:
      break;
    default:
      be(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ar(l, ""), (r.flags &= -33));
          var i = _s(e);
          oa(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = _s(e);
          ia(e, a, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bh(e, t, n) {
  (M = e), ed(e);
}
function ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ll;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Re;
        a = Ll;
        var s = Re;
        if (((Ll = o), (Re = u) && !s))
          for (M = l; M !== null; )
            (o = M),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ts(l)
                : u !== null
                ? ((u.return = o), (M = u))
                : Ts(l);
        for (; i !== null; ) (M = i), ed(i), (i = i.sibling);
        (M = l), (Ll = a), (Re = s);
      }
      Ns(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (M = i)) : Ns(e);
  }
}
function Ns(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Ci(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && fs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                fs(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var v = d.dehydrated;
                    v !== null && Hr(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Re || (t.flags & 512 && la(t));
      } catch (m) {
        ce(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ls(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ts(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ci(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var i = t.return;
          try {
            la(t);
          } catch (u) {
            ce(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            la(t);
          } catch (u) {
            ce(t, o, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var em = Math.ceil,
  si = Lt.ReactCurrentDispatcher,
  eu = Lt.ReactCurrentOwner,
  Ge = Lt.ReactCurrentBatchConfig,
  K = 0,
  Se = null,
  me = null,
  Ee = 0,
  Ae = 0,
  An = en(0),
  ye = 0,
  el = null,
  wn = 0,
  Pi = 0,
  tu = 0,
  Or = null,
  Me = null,
  nu = 0,
  tr = 1 / 0,
  wt = null,
  ci = !1,
  aa = null,
  Yt = null,
  Tl = !1,
  $t = null,
  fi = 0,
  Ir = 0,
  ua = null,
  $l = -1,
  Vl = 0;
function Te() {
  return K & 6 ? he() : $l !== -1 ? $l : ($l = he());
}
function Xt(e) {
  return e.mode & 1
    ? K & 2 && Ee !== 0
      ? Ee & -Ee
      : Fh.transition !== null
      ? (Vl === 0 && (Vl = Ic()), Vl)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hc(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Ir) throw ((Ir = 0), (ua = null), Error(_(185)));
  ll(e, n, r),
    (!(K & 2) || e !== Se) &&
      (e === Se && (!(K & 2) && (Pi |= n), ye === 4 && At(e, Ee)),
      Fe(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((tr = he() + 500), Si && tn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Fp(e, t);
  var r = Xl(e, e === Se ? Ee : 0);
  if (r === 0)
    n !== null && Au(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Au(n), t === 1))
      e.tag === 0 ? Ih(js.bind(null, e)) : sf(js.bind(null, e)),
        Dh(function () {
          !(K & 6) && tn();
        }),
        (n = null);
    else {
      switch (Fc(r)) {
        case 1:
          n = Na;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Yl;
          break;
        case 536870912:
          n = Oc;
          break;
        default:
          n = Yl;
      }
      n = ud(n, td.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function td(e, t) {
  if ((($l = -1), (Vl = 0), K & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = Xl(e, e === Se ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = di(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var i = rd();
    (Se !== e || Ee !== t) && ((wt = null), (tr = he() + 500), hn(e, t));
    do
      try {
        rm();
        break;
      } catch (a) {
        nd(e, a);
      }
    while (1);
    $a(),
      (si.current = i),
      (K = l),
      me !== null ? (t = 0) : ((Se = null), (Ee = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Oo(e)), l !== 0 && ((r = l), (t = sa(e, l)))), t === 1)
    )
      throw ((n = el), hn(e, 0), At(e, r), Fe(e, he()), n);
    if (t === 6) At(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !tm(l) &&
          ((t = di(e, r)),
          t === 2 && ((i = Oo(e)), i !== 0 && ((r = i), (t = sa(e, i)))),
          t === 1))
      )
        throw ((n = el), hn(e, 0), At(e, r), Fe(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          sn(e, Me, wt);
          break;
        case 3:
          if (
            (At(e, r), (r & 130023424) === r && ((t = nu + 500 - he()), 10 < t))
          ) {
            if (Xl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ho(sn.bind(null, e, Me, wt), t);
            break;
          }
          sn(e, Me, wt);
          break;
        case 4:
          if ((At(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - lt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * em(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ho(sn.bind(null, e, Me, wt), r);
            break;
          }
          sn(e, Me, wt);
          break;
        case 5:
          sn(e, Me, wt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Fe(e, he()), e.callbackNode === n ? td.bind(null, e) : null;
}
function sa(e, t) {
  var n = Or;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = di(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && ca(t)),
    e
  );
}
function ca(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function tm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!ot(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function At(e, t) {
  for (
    t &= ~tu,
      t &= ~Pi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function js(e) {
  if (K & 6) throw Error(_(327));
  Yn();
  var t = Xl(e, 0);
  if (!(t & 1)) return Fe(e, he()), null;
  var n = di(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oo(e);
    r !== 0 && ((t = r), (n = sa(e, r)));
  }
  if (n === 1) throw ((n = el), hn(e, 0), At(e, t), Fe(e, he()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Me, wt),
    Fe(e, he()),
    null
  );
}
function ru(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((tr = he() + 500), Si && tn());
  }
}
function xn(e) {
  $t !== null && $t.tag === 0 && !(K & 6) && Yn();
  var t = K;
  K |= 1;
  var n = Ge.transition,
    r = X;
  try {
    if (((Ge.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (Ge.transition = n), (K = t), !(K & 6) && tn();
  }
}
function lu() {
  (Ae = An.current), te(An);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jh(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Ua(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && bl();
          break;
        case 3:
          bn(), te(Oe), te(Ne), Ya();
          break;
        case 5:
          Ka(r);
          break;
        case 4:
          bn();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          Va(r.type._context);
          break;
        case 22:
        case 23:
          lu();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (me = e = Gt(e.current, null)),
    (Ee = Ae = t),
    (ye = 0),
    (el = null),
    (tu = Pi = wn = 0),
    (Me = Or = null),
    fn !== null)
  ) {
    for (t = 0; t < fn.length; t++)
      if (((n = fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    fn = null;
  }
  return e;
}
function nd(e, t) {
  do {
    var n = me;
    try {
      if (($a(), (Ul.current = ui), ai)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ai = !1;
      }
      if (
        ((yn = 0),
        (xe = ge = ae = null),
        (Mr = !1),
        (Jr = 0),
        (eu.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (el = t), (me = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Ee),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            d = a,
            v = d.tag;
          if (!(d.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var S = ys(o);
          if (S !== null) {
            (S.flags &= -257),
              ws(S, o, a, i, t),
              S.mode & 1 && gs(i, s, t),
              (t = S),
              (u = s);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              gs(i, s, t), iu();
              break e;
            }
            u = Error(_(426));
          }
        } else if (ne && a.mode & 1) {
          var T = ys(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              ws(T, o, a, i, t),
              Aa(er(u, a));
            break e;
          }
        }
        (i = u = er(u, a)),
          ye !== 4 && (ye = 2),
          Or === null ? (Or = [i]) : Or.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Af(i, u, t);
              cs(i, p);
              break e;
            case 1:
              a = u;
              var f = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Yt === null || !Yt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var c = Bf(i, a, t);
                cs(i, c);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      id(n);
    } catch (k) {
      (t = k), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rd() {
  var e = si.current;
  return (si.current = ui), e === null ? ui : e;
}
function iu() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    Se === null || (!(wn & 268435455) && !(Pi & 268435455)) || At(Se, Ee);
}
function di(e, t) {
  var n = K;
  K |= 2;
  var r = rd();
  (Se !== e || Ee !== t) && ((wt = null), hn(e, t));
  do
    try {
      nm();
      break;
    } catch (l) {
      nd(e, l);
    }
  while (1);
  if (($a(), (K = n), (si.current = r), me !== null)) throw Error(_(261));
  return (Se = null), (Ee = 0), ye;
}
function nm() {
  for (; me !== null; ) ld(me);
}
function rm() {
  for (; me !== null && !Np(); ) ld(me);
}
function ld(e) {
  var t = ad(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? id(e) : (me = t),
    (eu.current = null);
}
function id(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zh(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (me = null);
        return;
      }
    } else if (((n = Gh(n, t, Ae)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function sn(e, t, n) {
  var r = X,
    l = Ge.transition;
  try {
    (Ge.transition = null), (X = 1), lm(e, t, n, r);
  } finally {
    (Ge.transition = l), (X = r);
  }
  return null;
}
function lm(e, t, n, r) {
  do Yn();
  while ($t !== null);
  if (K & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Up(e, i),
    e === Se && ((me = Se = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Tl ||
      ((Tl = !0),
      ud(Yl, function () {
        return Yn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ge.transition), (Ge.transition = null);
    var o = X;
    X = 1;
    var a = K;
    (K |= 4),
      (eu.current = null),
      qh(e, n),
      bf(n, e),
      Ch($o),
      (Gl = !!Bo),
      ($o = Bo = null),
      (e.current = n),
      bh(n),
      Lp(),
      (K = a),
      (X = o),
      (Ge.transition = i);
  } else e.current = n;
  if (
    (Tl && ((Tl = !1), ($t = e), (fi = l)),
    (i = e.pendingLanes),
    i === 0 && (Yt = null),
    Dp(n.stateNode),
    Fe(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ci) throw ((ci = !1), (e = aa), (aa = null), e);
  return (
    fi & 1 && e.tag !== 0 && Yn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ua ? Ir++ : ((Ir = 0), (ua = e))) : (Ir = 0),
    tn(),
    null
  );
}
function Yn() {
  if ($t !== null) {
    var e = Fc(fi),
      t = Ge.transition,
      n = X;
    try {
      if (((Ge.transition = null), (X = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (fi = 0), K & 6)) throw Error(_(331));
        var l = K;
        for (K |= 4, M = e.current; M !== null; ) {
          var i = M,
            o = i.child;
          if (M.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (M = s; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(8, d, i);
                  }
                  var v = d.child;
                  if (v !== null) (v.return = d), (M = v);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var m = d.sibling,
                        S = d.return;
                      if ((Zf(d), d === s)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (M = m);
                        break;
                      }
                      M = S;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (M = o);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (M = p);
                break e;
              }
              M = i.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          o = M;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (M = h);
          else
            e: for (o = f; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(9, a);
                  }
                } catch (k) {
                  ce(a, a.return, k);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var c = a.sibling;
              if (c !== null) {
                (c.return = a.return), (M = c);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((K = l), tn(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(vi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Ds(e, t, n) {
  (t = er(n, t)),
    (t = Af(e, t, 1)),
    (e = Kt(e, t, 1)),
    (t = Te()),
    e !== null && (ll(e, 1, t), Fe(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Ds(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yt === null || !Yt.has(r)))
        ) {
          (e = er(n, e)),
            (e = Bf(t, e, 1)),
            (t = Kt(t, e, 1)),
            (e = Te()),
            t !== null && (ll(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function im(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Ee & n) === n &&
      (ye === 4 || (ye === 3 && (Ee & 130023424) === Ee && 500 > he() - nu)
        ? hn(e, 0)
        : (tu |= n)),
    Fe(e, t);
}
function od(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xl), (xl <<= 1), !(xl & 130023424) && (xl = 4194304))
      : (t = 1));
  var n = Te();
  (e = Rt(e, t)), e !== null && (ll(e, t, n), Fe(e, n));
}
function om(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), od(e, n);
}
function am(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), od(e, n);
}
var ad;
ad = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), Xh(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), ne && t.flags & 1048576 && cf(t, ni, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bl(e, t), (e = t.pendingProps);
      var l = Zn(t, Ne.current);
      Kn(t, n), (l = Ga(null, t, r, e, l, n));
      var i = Za();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((i = !0), ei(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Wa(t),
            (l.updater = ki),
            (t.stateNode = l),
            (l._reactInternals = t),
            Zo(t, r, e, n),
            (t = bo(null, t, r, !0, i, n)))
          : ((t.tag = 0), ne && i && Fa(t), Le(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = sm(r)),
          (e = et(r, e)),
          l)
        ) {
          case 0:
            t = qo(null, t, r, e, n);
            break e;
          case 1:
            t = ks(null, t, r, e, n);
            break e;
          case 11:
            t = xs(null, t, r, e, n);
            break e;
          case 14:
            t = Ss(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        qo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        ks(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wf(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          hf(e, t),
          ii(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = er(Error(_(423)), t)), (t = Es(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = er(Error(_(424)), t)), (t = Es(e, t, r, n, l));
            break e;
          } else
            for (
              Be = Qt(t.stateNode.containerInfo.firstChild),
                $e = t,
                ne = !0,
                rt = null,
                n = yf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === l)) {
            t = Nt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wf(t),
        e === null && Yo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Vo(r, l) ? (o = null) : i !== null && Vo(r, i) && (t.flags |= 32),
        Hf(e, t),
        Le(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Qf(e, t, n);
    case 4:
      return (
        Qa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qn(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        xs(e, t, r, l, n)
      );
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          b(ri, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (ot(i.value, o)) {
            if (i.children === l.children && !Oe.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Et(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Xo(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(_(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Xo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Le(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Kn(t, n),
        (l = Ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = et(r, t.pendingProps)),
        (l = et(r.type, l)),
        Ss(e, t, r, l, n)
      );
    case 15:
      return $f(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        Bl(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), ei(t)) : (e = !1),
        Kn(t, n),
        vf(t, r, l),
        Zo(t, r, l, n),
        bo(null, t, r, !0, e, n)
      );
    case 19:
      return Kf(e, t, n);
    case 22:
      return Vf(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function ud(e, t) {
  return Mc(e, t);
}
function um(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Xe(e, t, n, r) {
  return new um(e, t, n, r);
}
function ou(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sm(e) {
  if (typeof e == "function") return ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pa)) return 11;
    if (e === _a) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ou(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ln:
        return mn(n.children, l, i, t);
      case Ca:
        (o = 8), (l |= 8);
        break;
      case xo:
        return (
          (e = Xe(12, n, t, l | 2)), (e.elementType = xo), (e.lanes = i), e
        );
      case So:
        return (e = Xe(13, n, t, l)), (e.elementType = So), (e.lanes = i), e;
      case ko:
        return (e = Xe(19, n, t, l)), (e.elementType = ko), (e.lanes = i), e;
      case vc:
        return _i(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hc:
              o = 10;
              break e;
            case mc:
              o = 9;
              break e;
            case Pa:
              o = 11;
              break e;
            case _a:
              o = 14;
              break e;
            case It:
              (o = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Xe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mn(e, t, n, r) {
  return (e = Xe(7, e, r, t)), (e.lanes = n), e;
}
function _i(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}
function ho(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yi(0)),
    (this.expirationTimes = Yi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function au(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new cm(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Xe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wa(i),
    e
  );
}
function fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sd(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return uf(e, n, t);
  }
  return t;
}
function cd(e, t, n, r, l, i, o, a, u) {
  return (
    (e = au(n, r, !0, e, l, i, o, a, u)),
    (e.context = sd(null)),
    (n = e.current),
    (r = Te()),
    (l = Xt(n)),
    (i = Et(r, l)),
    (i.callback = t ?? null),
    Kt(n, i, l),
    (e.current.lanes = l),
    ll(e, l, r),
    Fe(e, r),
    e
  );
}
function Ri(e, t, n, r) {
  var l = t.current,
    i = Te(),
    o = Xt(l);
  return (
    (n = sd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Kt(l, t, o)),
    e !== null && (it(e, l, o, i), Fl(e, l, o)),
    o
  );
}
function pi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ms(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uu(e, t) {
  Ms(e, t), (e = e.alternate) && Ms(e, t);
}
function dm() {
  return null;
}
var fd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function su(e) {
  this._internalRoot = e;
}
Ni.prototype.render = su.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ri(e, t, null, null);
};
Ni.prototype.unmount = su.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      Ri(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function Ni(e) {
  this._internalRoot = e;
}
Ni.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && Vc(e);
  }
};
function cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Li(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zs() {}
function pm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = pi(o);
        i.call(s);
      };
    }
    var o = cd(t, r, e, 0, null, !1, !1, "", zs);
    return (
      (e._reactRootContainer = o),
      (e[_t] = o.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = pi(u);
      a.call(s);
    };
  }
  var u = au(e, 0, !1, null, null, !1, !1, "", zs);
  return (
    (e._reactRootContainer = u),
    (e[_t] = u.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      Ri(t, u, n, r);
    }),
    u
  );
}
function Ti(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = pi(o);
        a.call(u);
      };
    }
    Ri(t, o, e, l);
  } else o = pm(n, t, e, l, r);
  return pi(o);
}
Uc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (La(t, n | 1), Fe(t, he()), !(K & 6) && ((tr = he() + 500), tn()));
      }
      break;
    case 13:
      xn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var l = Te();
          it(r, e, 1, l);
        }
      }),
        uu(e, 1);
  }
};
Ta = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Te();
      it(t, e, 134217728, n);
    }
    uu(e, 134217728);
  }
};
Ac = function (e) {
  if (e.tag === 13) {
    var t = Xt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = Te();
      it(n, e, t, r);
    }
    uu(e, t);
  }
};
Bc = function () {
  return X;
};
$c = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Do = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xi(r);
            if (!l) throw Error(_(90));
            yc(r), Po(r, l);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vn(e, !!n.multiple, t, !1);
  }
};
Rc = ru;
Nc = xn;
var hm = { usingClientEntryPoint: !1, Events: [ol, Mn, xi, Pc, _c, ru] },
  wr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  mm = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || dm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jl.isDisabled && jl.supportsFiber)
    try {
      (vi = jl.inject(mm)), (ft = jl);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cu(t)) throw Error(_(200));
  return fm(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!cu(e)) throw Error(_(299));
  var n = !1,
    r = "",
    l = fd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = au(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new su(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = jc(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return xn(e);
};
He.hydrate = function (e, t, n) {
  if (!Li(t)) throw Error(_(200));
  return Ti(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!cu(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = fd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = cd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[_t] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ni(t);
};
He.render = function (e, t, n) {
  if (!Li(t)) throw Error(_(200));
  return Ti(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Li(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (xn(function () {
        Ti(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = ru;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Li(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Ti(e, t, n, !1, r);
};
He.version = "18.2.0-next-9e3b772b8-20220608";
function dd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd);
    } catch (e) {
      console.error(e);
    }
}
dd(), (sc.exports = He);
var vm = sc.exports,
  Os = vm;
(yo.createRoot = Os.createRoot), (yo.hydrateRoot = Os.hydrateRoot);
/**
 * @remix-run/router v0.0.0-experimental-4a8a492a
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
var de;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(de || (de = {}));
const Is = "popstate";
function gm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return tl(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : kn(l);
  }
  return wm(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ym() {
  return Math.random().toString(36).substr(2, 8);
}
function Fs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function tl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ie(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Tt(t) : t,
      { state: n, key: (t && t.key) || r || ym() }
    )
  );
}
function kn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Tt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function wm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = de.Pop,
    u = null,
    s = d();
  s == null && ((s = 0), o.replaceState(ie({}, o.state, { idx: s }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function v() {
    a = de.Pop;
    let T = d(),
      p = T == null ? null : T - s;
    (s = T), u && u({ action: a, location: w.location, delta: p });
  }
  function m(T, p) {
    a = de.Push;
    let f = tl(w.location, T, p);
    n && n(f, T), (s = d() + 1);
    let h = Fs(f, s),
      c = w.createHref(f);
    try {
      o.pushState(h, "", c);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(c);
    }
    i && u && u({ action: a, location: w.location, delta: 1 });
  }
  function S(T, p) {
    a = de.Replace;
    let f = tl(w.location, T, p);
    n && n(f, T), (s = d());
    let h = Fs(f, s),
      c = w.createHref(f);
    o.replaceState(h, "", c),
      i && u && u({ action: a, location: w.location, delta: 0 });
  }
  function y(T) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof T == "string" ? T : kn(T);
    return (
      V(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Is, v),
        (u = T),
        () => {
          l.removeEventListener(Is, v), (u = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: y,
    encodeLocation(T) {
      let p = y(T);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: S,
    go(T) {
      return o.go(T);
    },
  };
  return w;
}
var pe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(pe || (pe = {}));
const xm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Sm(e) {
  return e.index === !0;
}
function fa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (V(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        V(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Sm(l))
      ) {
        let u = ie({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ie({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = fa(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Bn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Tt(t) : t,
    l = qt(r.pathname || "/", n);
  if (l == null) return null;
  let i = pd(e);
  Em(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) o = Dm(i[a], zm(l));
  return o;
}
function km(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function pd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (V(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Ct([r, u.relativePath]),
      d = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (V(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      pd(i.children, t, d, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: Tm(s, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of hd(i.path)) l(i, o, u);
    }),
    t
  );
}
function hd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = hd(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Em(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : jm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Cm = /^:\w+$/,
  Pm = 3,
  _m = 2,
  Rm = 1,
  Nm = 10,
  Lm = -2,
  Us = (e) => e === "*";
function Tm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Us) && (r += Lm),
    t && (r += _m),
    n
      .filter((l) => !Us(l))
      .reduce((l, i) => l + (Cm.test(i) ? Pm : i === "" ? Rm : Nm), r)
  );
}
function jm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Dm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      u = o === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      d = da(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let v = a.route;
    i.push({
      params: r,
      pathname: Ct([l, d.pathname]),
      pathnameBase: Um(Ct([l, d.pathnameBase])),
      route: v,
    }),
      d.pathnameBase !== "/" && (l = Ct([l, d.pathnameBase]));
  }
  return i;
}
function da(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Mm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, d, v) => {
      if (d === "*") {
        let m = a[v] || "";
        o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (s[d] = Om(a[v] || "", d)), s;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Mm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function zm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Sn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Om(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Sn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function qt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Im(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Tt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Fm(n, t)) : t,
    search: Am(r),
    hash: Bm(l),
  };
}
function Fm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function mo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ji(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function fu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Tt(e))
    : ((l = ie({}, e)),
      V(
        !l.pathname || !l.pathname.includes("?"),
        mo("?", "pathname", "search", l)
      ),
      V(
        !l.pathname || !l.pathname.includes("#"),
        mo("#", "pathname", "hash", l)
      ),
      V(!l.search || !l.search.includes("#"), mo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let v = t.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      l.pathname = m.join("/");
    }
    a = v >= 0 ? t[v] : "/";
  }
  let u = Im(l, a),
    s = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || d) && (u.pathname += "/"), u;
}
const Ct = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Um = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Am = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Bm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class du {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function md(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const vd = ["post", "put", "patch", "delete"],
  $m = new Set(vd),
  Vm = ["get", ...vd],
  Hm = new Set(Vm),
  Wm = new Set([301, 302, 303, 307, 308]),
  Qm = new Set([307, 308]),
  vo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Km = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  gd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ym = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  yd = "remix-router-transitions";
function Xm(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  V(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: g(x) });
  } else l = Ym;
  let i = {},
    o = fa(e.routes, l, void 0, i),
    a,
    u = e.basename || "/",
    s = ie({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    d = null,
    v = new Set(),
    m = null,
    S = null,
    y = null,
    w = e.hydrationData != null,
    T = Bn(o, e.history.location, u),
    p = null;
  if (T == null) {
    let g = Qe(404, { pathname: e.history.location.pathname }),
      { matches: x, route: E } = Ks(o);
    (T = x), (p = { [E.id]: g });
  }
  let f =
      !T.some((g) => g.route.lazy) &&
      (!T.some((g) => g.route.loader) || e.hydrationData != null),
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: T,
      initialized: f,
      navigation: vo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = de.Pop,
    R = !1,
    N,
    L = !1,
    W = new Map(),
    F = null,
    we = !1,
    Ue = !1,
    at = [],
    rn = [],
    se = new Map(),
    jt = 0,
    pt = -1,
    j = new Map(),
    O = new Set(),
    U = new Map(),
    Y = new Map(),
    q = new Map(),
    Dt = !1;
  function ht() {
    if (
      ((d = e.history.listen((g) => {
        let { action: x, location: E, delta: D } = g;
        if (Dt) {
          Dt = !1;
          return;
        }
        Sn(
          q.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let B = Eu({
          currentLocation: c.location,
          nextLocation: E,
          historyAction: x,
        });
        if (B && D != null) {
          (Dt = !0),
            e.history.go(D * -1),
            pl(B, {
              state: "blocked",
              location: E,
              proceed() {
                pl(B, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: E,
                }),
                  e.history.go(D);
              },
              reset() {
                let A = new Map(c.blockers);
                A.set(B, xr), re({ blockers: A });
              },
            });
          return;
        }
        return ln(x, E);
      })),
      n)
    ) {
      i0(t, W);
      let g = () => o0(t, W);
      t.addEventListener("pagehide", g),
        (F = () => t.removeEventListener("pagehide", g));
    }
    return c.initialized || ln(de.Pop, c.location), h;
  }
  function ar() {
    d && d(),
      F && F(),
      v.clear(),
      N && N.abort(),
      c.fetchers.forEach((g, x) => Oi(x)),
      c.blockers.forEach((g, x) => ku(x));
  }
  function mt(g) {
    return v.add(g), () => v.delete(g);
  }
  function re(g, x) {
    (c = ie({}, c, g)), v.forEach((E) => E(c, { viewTransitionOpts: x }));
  }
  function ur(g, x) {
    var E, D;
    let B =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        nt(c.navigation.formMethod) &&
        c.navigation.state === "loading" &&
        ((E = g.state) == null ? void 0 : E._isRedirect) !== !0,
      A;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (A = x.actionData)
        : (A = null)
      : B
      ? (A = c.actionData)
      : (A = null);
    let $ = x.loaderData
        ? Qs(c.loaderData, x.loaderData, x.matches || [], x.errors)
        : c.loaderData,
      I = c.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((le, Q) => I.set(Q, xr)));
    let z =
      R === !0 ||
      (c.navigation.formMethod != null &&
        nt(c.navigation.formMethod) &&
        ((D = g.state) == null ? void 0 : D._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      we ||
        k === de.Pop ||
        (k === de.Push
          ? e.history.push(g, g.state)
          : k === de.Replace && e.history.replace(g, g.state));
    let Z;
    if (k === de.Pop) {
      let le = W.get(c.location.pathname);
      le && le.has(g.pathname)
        ? (Z = { currentLocation: c.location, nextLocation: g })
        : W.has(g.pathname) &&
          (Z = { currentLocation: g, nextLocation: c.location });
    } else if (L) {
      let le = W.get(c.location.pathname);
      le
        ? le.add(g.pathname)
        : ((le = new Set([g.pathname])), W.set(c.location.pathname, le)),
        (Z = { currentLocation: c.location, nextLocation: g });
    }
    re(
      ie({}, x, {
        actionData: A,
        loaderData: $,
        historyAction: k,
        location: g,
        initialized: !0,
        navigation: vo,
        revalidation: "idle",
        restoreScrollPosition: Pu(g, x.matches || c.matches),
        preventScrollReset: z,
        blockers: I,
      }),
      Z
    ),
      (k = de.Pop),
      (R = !1),
      (L = !1),
      (we = !1),
      (Ue = !1),
      (at = []),
      (rn = []);
  }
  async function vu(g, x) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let E = pa(
        c.location,
        c.matches,
        u,
        s.v7_prependBasename,
        g,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: D,
        submission: B,
        error: A,
      } = As(s.v7_normalizeFormMethod, !1, E, x),
      $ = c.location,
      I = tl(c.location, D, x && x.state);
    I = ie({}, I, e.history.encodeLocation(I));
    let z = x && x.replace != null ? x.replace : void 0,
      Z = de.Push;
    z === !0
      ? (Z = de.Replace)
      : z === !1 ||
        (B != null &&
          nt(B.formMethod) &&
          B.formAction === c.location.pathname + c.location.search &&
          (Z = de.Replace));
    let le =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      Q = Eu({ currentLocation: $, nextLocation: I, historyAction: Z });
    if (Q) {
      pl(Q, {
        state: "blocked",
        location: I,
        proceed() {
          pl(Q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            vu(g, x);
        },
        reset() {
          let J = new Map(c.blockers);
          J.set(Q, xr), re({ blockers: J });
        },
      });
      return;
    }
    return await ln(Z, I, {
      submission: B,
      pendingError: A,
      preventScrollReset: le,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
    });
  }
  function Dd() {
    if (
      (zi(),
      re({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        ln(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ln(k || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function ln(g, x, E) {
    N && N.abort(),
      (N = null),
      (k = g),
      (we = (E && E.startUninterruptedRevalidation) === !0),
      Bd(c.location, c.matches),
      (R = (E && E.preventScrollReset) === !0),
      (L = (E && E.enableViewTransition) === !0);
    let D = a || o,
      B = E && E.overrideNavigation,
      A = Bn(D, x, u);
    if (!A) {
      let J = Qe(404, { pathname: x.pathname }),
        { matches: fe, route: on } = Ks(D);
      Ii(), ur(x, { matches: fe, loaderData: {}, errors: { [on.id]: J } });
      return;
    }
    if (
      c.initialized &&
      !Ue &&
      bm(c.location, x) &&
      !(E && E.submission && nt(E.submission.formMethod))
    ) {
      ur(x, { matches: A });
      return;
    }
    N = new AbortController();
    let $ = kr(e.history, x, N.signal, E && E.submission),
      I,
      z;
    if (E && E.pendingError) z = { [$n(A).route.id]: E.pendingError };
    else if (E && E.submission && nt(E.submission.formMethod)) {
      let J = await Md($, x, E.submission, A, { replace: E.replace });
      if (J.shortCircuited) return;
      (I = J.pendingActionData),
        (z = J.pendingActionError),
        (B = go(x, E.submission)),
        ($ = new Request($.url, { signal: $.signal }));
    }
    let {
      shortCircuited: Z,
      loaderData: le,
      errors: Q,
    } = await zd(
      $,
      x,
      A,
      B,
      E && E.submission,
      E && E.fetcherSubmission,
      E && E.replace,
      I,
      z
    );
    Z ||
      ((N = null),
      ur(
        x,
        ie({ matches: A }, I ? { actionData: I } : {}, {
          loaderData: le,
          errors: Q,
        })
      ));
  }
  async function Md(g, x, E, D, B) {
    B === void 0 && (B = {}), zi();
    let A = r0(x, E);
    re({ navigation: A });
    let $,
      I = ma(D, x);
    if (!I.route.action && !I.route.lazy)
      $ = {
        type: pe.error,
        error: Qe(405, {
          method: g.method,
          pathname: x.pathname,
          routeId: I.route.id,
        }),
      };
    else if ((($ = await Sr("action", g, I, D, i, l, u)), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Xn($)) {
      let z;
      return (
        B && B.replace != null
          ? (z = B.replace)
          : (z = $.location === c.location.pathname + c.location.search),
        await sr(c, $, { submission: E, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (Fr($)) {
      let z = $n(D, I.route.id);
      return (
        (B && B.replace) !== !0 && (k = de.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: $.error } }
      );
    }
    if (pn($)) throw Qe(400, { type: "defer-action" });
    return { pendingActionData: { [I.route.id]: $.data } };
  }
  async function zd(g, x, E, D, B, A, $, I, z) {
    let Z = D || go(x, B),
      le = B || A || Gs(Z),
      Q = a || o,
      [J, fe] = Bs(e.history, c, E, le, x, Ue, at, rn, U, O, Q, u, I, z);
    if (
      (Ii(
        (G) =>
          !(E && E.some((qe) => qe.route.id === G)) ||
          (J && J.some((qe) => qe.route.id === G))
      ),
      (pt = ++jt),
      J.length === 0 && fe.length === 0)
    ) {
      let G = xu();
      return (
        ur(
          x,
          ie(
            { matches: E, loaderData: {}, errors: z || null },
            I ? { actionData: I } : {},
            G ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!we) {
      fe.forEach((qe) => {
        let zt = c.fetchers.get(qe.key),
          $i = Er(void 0, zt ? zt.data : void 0);
        c.fetchers.set(qe.key, $i);
      });
      let G = I || c.actionData;
      re(
        ie(
          { navigation: Z },
          G
            ? Object.keys(G).length === 0
              ? { actionData: null }
              : { actionData: G }
            : {},
          fe.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    fe.forEach((G) => {
      se.has(G.key) && Mt(G.key), G.controller && se.set(G.key, G.controller);
    });
    let on = () => fe.forEach((G) => Mt(G.key));
    N && N.signal.addEventListener("abort", on);
    let {
      results: an,
      loaderResults: cr,
      fetcherResults: Fi,
    } = await yu(c.matches, E, J, fe, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    N && N.signal.removeEventListener("abort", on),
      fe.forEach((G) => se.delete(G.key));
    let vt = Ys(an);
    if (vt) {
      if (vt.idx >= J.length) {
        let G = fe[vt.idx - J.length].key;
        O.add(G);
      }
      return await sr(c, vt.result, { replace: $ }), { shortCircuited: !0 };
    }
    let { loaderData: gt, errors: hl } = Ws(c, E, J, cr, z, fe, Fi, Y);
    Y.forEach((G, qe) => {
      G.subscribe((zt) => {
        (zt || G.done) && Y.delete(qe);
      });
    });
    let Ui = xu(),
      Ai = Su(pt),
      Bi = Ui || Ai || fe.length > 0;
    return ie(
      { loaderData: gt, errors: hl },
      Bi ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function gu(g) {
    return c.fetchers.get(g) || Km;
  }
  function Od(g, x, E, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    se.has(g) && Mt(g);
    let B = a || o,
      A = pa(
        c.location,
        c.matches,
        u,
        s.v7_prependBasename,
        E,
        x,
        D == null ? void 0 : D.relative
      ),
      $ = Bn(B, A, u);
    if (!$) {
      dl(g, x, Qe(404, { pathname: A }));
      return;
    }
    let {
      path: I,
      submission: z,
      error: Z,
    } = As(s.v7_normalizeFormMethod, !0, A, D);
    if (Z) {
      dl(g, x, Z);
      return;
    }
    let le = ma($, I);
    if (((R = (D && D.preventScrollReset) === !0), z && nt(z.formMethod))) {
      Id(g, x, I, le, $, z);
      return;
    }
    U.set(g, { routeId: x, path: I }), Fd(g, x, I, le, $, z);
  }
  async function Id(g, x, E, D, B, A) {
    if ((zi(), U.delete(g), !D.route.action && !D.route.lazy)) {
      let ve = Qe(405, { method: A.formMethod, pathname: E, routeId: x });
      dl(g, x, ve);
      return;
    }
    let $ = c.fetchers.get(g),
      I = l0(A, $);
    c.fetchers.set(g, I), re({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      Z = kr(e.history, E, z.signal, A);
    se.set(g, z);
    let le = jt,
      Q = await Sr("action", Z, D, B, i, l, u);
    if (Z.signal.aborted) {
      se.get(g) === z && se.delete(g);
      return;
    }
    if (Xn(Q))
      if ((se.delete(g), pt > le)) {
        let ve = Rn(void 0);
        c.fetchers.set(g, ve), re({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        O.add(g);
        let ve = Er(A);
        return (
          c.fetchers.set(g, ve),
          re({ fetchers: new Map(c.fetchers) }),
          sr(c, Q, { fetcherSubmission: A })
        );
      }
    if (Fr(Q)) {
      dl(g, x, Q.error);
      return;
    }
    if (pn(Q)) throw Qe(400, { type: "defer-action" });
    let J = c.navigation.location || c.location,
      fe = kr(e.history, J, z.signal),
      on = a || o,
      an =
        c.navigation.state !== "idle"
          ? Bn(on, c.navigation.location, u)
          : c.matches;
    V(an, "Didn't find any matches after fetcher action");
    let cr = ++jt;
    j.set(g, cr);
    let Fi = Er(A, Q.data);
    c.fetchers.set(g, Fi);
    let [vt, gt] = Bs(
      e.history,
      c,
      an,
      A,
      J,
      Ue,
      at,
      rn,
      U,
      O,
      on,
      u,
      { [D.route.id]: Q.data },
      void 0
    );
    gt
      .filter((ve) => ve.key !== g)
      .forEach((ve) => {
        let fr = ve.key,
          _u = c.fetchers.get(fr),
          Vd = Er(void 0, _u ? _u.data : void 0);
        c.fetchers.set(fr, Vd),
          se.has(fr) && Mt(fr),
          ve.controller && se.set(fr, ve.controller);
      }),
      re({ fetchers: new Map(c.fetchers) });
    let hl = () => gt.forEach((ve) => Mt(ve.key));
    z.signal.addEventListener("abort", hl);
    let {
      results: Ui,
      loaderResults: Ai,
      fetcherResults: Bi,
    } = await yu(c.matches, an, vt, gt, fe);
    if (z.signal.aborted) return;
    z.signal.removeEventListener("abort", hl),
      j.delete(g),
      se.delete(g),
      gt.forEach((ve) => se.delete(ve.key));
    let G = Ys(Ui);
    if (G) {
      if (G.idx >= vt.length) {
        let ve = gt[G.idx - vt.length].key;
        O.add(ve);
      }
      return sr(c, G.result);
    }
    let { loaderData: qe, errors: zt } = Ws(
      c,
      c.matches,
      vt,
      Ai,
      void 0,
      gt,
      Bi,
      Y
    );
    if (c.fetchers.has(g)) {
      let ve = Rn(Q.data);
      c.fetchers.set(g, ve);
    }
    let $i = Su(cr);
    c.navigation.state === "loading" && cr > pt
      ? (V(k, "Expected pending action"),
        N && N.abort(),
        ur(c.navigation.location, {
          matches: an,
          loaderData: qe,
          errors: zt,
          fetchers: new Map(c.fetchers),
        }))
      : (re(
          ie(
            { errors: zt, loaderData: Qs(c.loaderData, qe, an, zt) },
            $i || gt.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        (Ue = !1));
  }
  async function Fd(g, x, E, D, B, A) {
    let $ = c.fetchers.get(g),
      I = Er(A, $ ? $.data : void 0);
    c.fetchers.set(g, I), re({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      Z = kr(e.history, E, z.signal);
    se.set(g, z);
    let le = jt,
      Q = await Sr("loader", Z, D, B, i, l, u);
    if (
      (pn(Q) && (Q = (await Sd(Q, Z.signal, !0)) || Q),
      se.get(g) === z && se.delete(g),
      Z.signal.aborted)
    )
      return;
    if (Xn(Q))
      if (pt > le) {
        let fe = Rn(void 0);
        c.fetchers.set(g, fe), re({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        O.add(g), await sr(c, Q);
        return;
      }
    if (Fr(Q)) {
      let fe = $n(c.matches, x);
      c.fetchers.delete(g),
        re({
          fetchers: new Map(c.fetchers),
          errors: { [fe.route.id]: Q.error },
        });
      return;
    }
    V(!pn(Q), "Unhandled fetcher deferred data");
    let J = Rn(Q.data);
    c.fetchers.set(g, J), re({ fetchers: new Map(c.fetchers) });
  }
  async function sr(g, x, E) {
    let {
      submission: D,
      fetcherSubmission: B,
      replace: A,
    } = E === void 0 ? {} : E;
    x.revalidate && (Ue = !0);
    let $ = tl(g.location, x.location, { _isRedirect: !0 });
    if ((V($, "Expected a location on the redirect navigation"), n)) {
      let J = !1;
      if (x.reloadDocument) J = !0;
      else if (gd.test(x.location)) {
        const fe = e.history.createURL(x.location);
        J = fe.origin !== t.location.origin || qt(fe.pathname, u) == null;
      }
      if (J) {
        A ? t.location.replace(x.location) : t.location.assign(x.location);
        return;
      }
    }
    N = null;
    let I = A === !0 ? de.Replace : de.Push,
      { formMethod: z, formAction: Z, formEncType: le } = g.navigation;
    !D && !B && z && Z && le && (D = Gs(g.navigation));
    let Q = D || B;
    if (Qm.has(x.status) && Q && nt(Q.formMethod))
      await ln(I, $, {
        submission: ie({}, Q, { formAction: x.location }),
        preventScrollReset: R,
      });
    else {
      let J = go($, D);
      await ln(I, $, {
        overrideNavigation: J,
        fetcherSubmission: B,
        preventScrollReset: R,
      });
    }
  }
  async function yu(g, x, E, D, B) {
    let A = await Promise.all([
        ...E.map((z) => Sr("loader", B, z, x, i, l, u)),
        ...D.map((z) =>
          z.matches && z.match && z.controller
            ? Sr(
                "loader",
                kr(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                i,
                l,
                u
              )
            : { type: pe.error, error: Qe(404, { pathname: z.path }) }
        ),
      ]),
      $ = A.slice(0, E.length),
      I = A.slice(E.length);
    return (
      await Promise.all([
        Xs(
          g,
          E,
          $,
          $.map(() => B.signal),
          !1,
          c.loaderData
        ),
        Xs(
          g,
          D.map((z) => z.match),
          I,
          D.map((z) => (z.controller ? z.controller.signal : null)),
          !0
        ),
      ]),
      { results: A, loaderResults: $, fetcherResults: I }
    );
  }
  function zi() {
    (Ue = !0),
      at.push(...Ii()),
      U.forEach((g, x) => {
        se.has(x) && (rn.push(x), Mt(x));
      });
  }
  function dl(g, x, E) {
    let D = $n(c.matches, x);
    Oi(g), re({ errors: { [D.route.id]: E }, fetchers: new Map(c.fetchers) });
  }
  function Oi(g) {
    let x = c.fetchers.get(g);
    se.has(g) && !(x && x.state === "loading" && j.has(g)) && Mt(g),
      U.delete(g),
      j.delete(g),
      O.delete(g),
      c.fetchers.delete(g);
  }
  function Mt(g) {
    let x = se.get(g);
    V(x, "Expected fetch controller: " + g), x.abort(), se.delete(g);
  }
  function wu(g) {
    for (let x of g) {
      let E = gu(x),
        D = Rn(E.data);
      c.fetchers.set(x, D);
    }
  }
  function xu() {
    let g = [],
      x = !1;
    for (let E of O) {
      let D = c.fetchers.get(E);
      V(D, "Expected fetcher: " + E),
        D.state === "loading" && (O.delete(E), g.push(E), (x = !0));
    }
    return wu(g), x;
  }
  function Su(g) {
    let x = [];
    for (let [E, D] of j)
      if (D < g) {
        let B = c.fetchers.get(E);
        V(B, "Expected fetcher: " + E),
          B.state === "loading" && (Mt(E), j.delete(E), x.push(E));
      }
    return wu(x), x.length > 0;
  }
  function Ud(g, x) {
    let E = c.blockers.get(g) || xr;
    return q.get(g) !== x && q.set(g, x), E;
  }
  function ku(g) {
    c.blockers.delete(g), q.delete(g);
  }
  function pl(g, x) {
    let E = c.blockers.get(g) || xr;
    V(
      (E.state === "unblocked" && x.state === "blocked") ||
        (E.state === "blocked" && x.state === "blocked") ||
        (E.state === "blocked" && x.state === "proceeding") ||
        (E.state === "blocked" && x.state === "unblocked") ||
        (E.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + E.state + " -> " + x.state
    );
    let D = new Map(c.blockers);
    D.set(g, x), re({ blockers: D });
  }
  function Eu(g) {
    let { currentLocation: x, nextLocation: E, historyAction: D } = g;
    if (q.size === 0) return;
    q.size > 1 && Sn(!1, "A router only supports one blocker at a time");
    let B = Array.from(q.entries()),
      [A, $] = B[B.length - 1],
      I = c.blockers.get(A);
    if (
      !(I && I.state === "proceeding") &&
      $({ currentLocation: x, nextLocation: E, historyAction: D })
    )
      return A;
  }
  function Ii(g) {
    let x = [];
    return (
      Y.forEach((E, D) => {
        (!g || g(D)) && (E.cancel(), x.push(D), Y.delete(D));
      }),
      x
    );
  }
  function Ad(g, x, E) {
    if (((m = g), (y = x), (S = E || null), !w && c.navigation === vo)) {
      w = !0;
      let D = Pu(c.location, c.matches);
      D != null && re({ restoreScrollPosition: D });
    }
    return () => {
      (m = null), (y = null), (S = null);
    };
  }
  function Cu(g, x) {
    return (
      (S &&
        S(
          g,
          x.map((D) => km(D, c.loaderData))
        )) ||
      g.key
    );
  }
  function Bd(g, x) {
    if (m && y) {
      let E = Cu(g, x);
      m[E] = y();
    }
  }
  function Pu(g, x) {
    if (m) {
      let E = Cu(g, x),
        D = m[E];
      if (typeof D == "number") return D;
    }
    return null;
  }
  function $d(g) {
    (i = {}), (a = fa(g, l, void 0, i));
  }
  return (
    (h = {
      get basename() {
        return u;
      },
      get state() {
        return c;
      },
      get routes() {
        return o;
      },
      initialize: ht,
      subscribe: mt,
      enableScrollRestoration: Ad,
      navigate: vu,
      fetch: Od,
      revalidate: Dd,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: gu,
      deleteFetcher: Oi,
      dispose: ar,
      getBlocker: Ud,
      deleteBlocker: ku,
      _internalFetchControllers: se,
      _internalActiveDeferreds: Y,
      _internalSetRoutes: $d,
    }),
    h
  );
}
function Gm(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function pa(e, t, n, r, l, i, o) {
  let a, u;
  if (i != null && o !== "path") {
    a = [];
    for (let d of t)
      if ((a.push(d), d.route.id === i)) {
        u = d;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let s = fu(
    l || ".",
    ji(a).map((d) => d.pathnameBase),
    qt(e.pathname, n) || e.pathname,
    o === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      u &&
      u.route.index &&
      !pu(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Ct([n, s.pathname])),
    kn(s)
  );
}
function As(e, t, n, r) {
  if (!r || !Gm(r)) return { path: n };
  if (r.formMethod && !n0(r.formMethod))
    return { path: n, error: Qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Qe(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = xd(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!nt(o)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, y) => {
              let [w, T] = y;
              return (
                "" +
                S +
                w +
                "=" +
                T +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!nt(o)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = ha(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = ha(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Hs(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Hs(u));
    } catch {
      return l();
    }
  let d = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (nt(d.formMethod)) return { path: n, submission: d };
  let v = Tt(n);
  return (
    t && v.search && pu(v.search) && u.append("index", ""),
    (v.search = "?" + u),
    { path: kn(v), submission: d }
  );
}
function Zm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Bs(e, t, n, r, l, i, o, a, u, s, d, v, m, S) {
  let y = S ? Object.values(S)[0] : m ? Object.values(m)[0] : void 0,
    w = e.createURL(t.location),
    T = e.createURL(l),
    p = S ? Object.keys(S)[0] : void 0,
    h = Zm(n, p).filter((k, R) => {
      if (k.route.lazy) return !0;
      if (k.route.loader == null) return !1;
      if (Jm(t.loaderData, t.matches[R], k) || o.some((W) => W === k.route.id))
        return !0;
      let N = t.matches[R],
        L = k;
      return $s(
        k,
        ie(
          {
            currentUrl: w,
            currentParams: N.params,
            nextUrl: T,
            nextParams: L.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              i ||
              w.pathname + w.search === T.pathname + T.search ||
              w.search !== T.search ||
              wd(N, L),
          }
        )
      );
    }),
    c = [];
  return (
    u.forEach((k, R) => {
      if (!n.some((we) => we.route.id === k.routeId)) return;
      let N = Bn(d, k.path, v);
      if (!N) {
        c.push({
          key: R,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let L = t.fetchers.get(R),
        W = ma(N, k.path),
        F = !1;
      s.has(R)
        ? (F = !1)
        : a.includes(R)
        ? (F = !0)
        : L && L.state !== "idle" && L.data === void 0
        ? (F = i)
        : (F = $s(
            W,
            ie(
              {
                currentUrl: w,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: T,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: i }
            )
          )),
        F &&
          c.push({
            key: R,
            routeId: k.routeId,
            path: k.path,
            matches: N,
            match: W,
            controller: new AbortController(),
          });
    }),
    [h, c]
  );
}
function Jm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function wd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function $s(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Vs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== "hasErrorBoundary";
    Sn(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !xm.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, ie({}, t(l), { lazy: void 0 }));
}
async function Sr(e, t, n, r, l, i, o, a) {
  a === void 0 && (a = {});
  let u,
    s,
    d,
    v = (y) => {
      let w,
        T = new Promise((p, f) => (w = f));
      return (
        (d = () => w()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          y({ request: t, params: n.params, context: a.requestContext }),
          T,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let w,
          T = await Promise.all([
            v(y).catch((p) => {
              w = p;
            }),
            Vs(n.route, i, l),
          ]);
        if (w) throw w;
        s = T[0];
      } else if ((await Vs(n.route, i, l), (y = n.route[e]), y)) s = await v(y);
      else if (e === "action") {
        let w = new URL(t.url),
          T = w.pathname + w.search;
        throw Qe(405, { method: t.method, pathname: T, routeId: n.route.id });
      } else return { type: pe.data, data: void 0 };
    else if (y) s = await v(y);
    else {
      let w = new URL(t.url),
        T = w.pathname + w.search;
      throw Qe(404, { pathname: T });
    }
    V(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (y) {
    (u = pe.error), (s = y);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (t0(s)) {
    let y = s.status;
    if (Wm.has(y)) {
      let p = s.headers.get("Location");
      if (
        (V(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !gd.test(p))
      )
        p = pa(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, p);
      else if (!a.isStaticRequest) {
        let f = new URL(t.url),
          h = p.startsWith("//") ? new URL(f.protocol + p) : new URL(p),
          c = qt(h.pathname, o) != null;
        h.origin === f.origin && c && (p = h.pathname + h.search + h.hash);
      }
      if (a.isStaticRequest) throw (s.headers.set("Location", p), s);
      return {
        type: pe.redirect,
        status: y,
        location: p,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === pe.error ? pe.error : pe.data, response: s };
    let w,
      T = s.headers.get("Content-Type");
    return (
      T && /\bapplication\/json\b/.test(T)
        ? (w = await s.json())
        : (w = await s.text()),
      u === pe.error
        ? { type: u, error: new du(y, s.statusText, w), headers: s.headers }
        : { type: pe.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === pe.error) return { type: u, error: s };
  if (e0(s)) {
    var m, S;
    return {
      type: pe.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((S = s.init) == null ? void 0 : S.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: pe.data, data: s };
}
function kr(e, t, n, r) {
  let l = e.createURL(xd(t)).toString(),
    i = { signal: n };
  if (r && nt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = ha(r.formData))
        : (i.body = r.formData);
  }
  return new Request(l, i);
}
function ha(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Hs(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function qm(e, t, n, r, l) {
  let i = {},
    o = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((d, v) => {
      let m = t[v].route.id;
      if (
        (V(!Xn(d), "Cannot handle redirect results in processLoaderData"),
        Fr(d))
      ) {
        let S = $n(e, m),
          y = d.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[S.route.id] == null && (o[S.route.id] = y),
          (i[m] = void 0),
          u || ((u = !0), (a = md(d.error) ? d.error.status : 500)),
          d.headers && (s[m] = d.headers);
      } else
        pn(d)
          ? (l.set(m, d.deferredData), (i[m] = d.deferredData.data))
          : (i[m] = d.data),
          d.statusCode != null &&
            d.statusCode !== 200 &&
            !u &&
            (a = d.statusCode),
          d.headers && (s[m] = d.headers);
    }),
    r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
  );
}
function Ws(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = qm(t, n, r, l, a);
  for (let d = 0; d < i.length; d++) {
    let { key: v, match: m, controller: S } = i[d];
    V(
      o !== void 0 && o[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = o[d];
    if (!(S && S.signal.aborted))
      if (Fr(y)) {
        let w = $n(e.matches, m == null ? void 0 : m.route.id);
        (s && s[w.route.id]) || (s = ie({}, s, { [w.route.id]: y.error })),
          e.fetchers.delete(v);
      } else if (Xn(y)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (pn(y)) V(!1, "Unhandled fetcher deferred data");
      else {
        let w = Rn(y.data);
        e.fetchers.set(v, w);
      }
  }
  return { loaderData: u, errors: s };
}
function Qs(e, t, n, r) {
  let l = ie({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function $n(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ks(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Qe(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (a = "defer() is not supported in actions")
          : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new du(e || 500, o, new Error(a), !0)
  );
}
function Ys(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Xn(n)) return { result: n, idx: t };
  }
}
function xd(e) {
  let t = typeof e == "string" ? Tt(e) : e;
  return kn(ie({}, t, { hash: "" }));
}
function bm(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function pn(e) {
  return e.type === pe.deferred;
}
function Fr(e) {
  return e.type === pe.error;
}
function Xn(e) {
  return (e && e.type) === pe.redirect;
}
function e0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function t0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function n0(e) {
  return Hm.has(e.toLowerCase());
}
function nt(e) {
  return $m.has(e.toLowerCase());
}
async function Xs(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((v) => v.route.id === u.route.id),
      d = s != null && !wd(s, u) && (i && i[u.route.id]) !== void 0;
    if (pn(a) && (l || d)) {
      let v = r[o];
      V(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Sd(a, v, l).then((m) => {
          m && (n[o] = m || n[o]);
        });
    }
  }
}
async function Sd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: pe.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: pe.error, error: l };
      }
    return { type: pe.data, data: e.deferredData.data };
  }
}
function pu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ma(e, t) {
  let n = typeof t == "string" ? Tt(t).search : t.search;
  if (e[e.length - 1].route.index && pu(n || "")) return e[e.length - 1];
  let r = ji(e);
  return r[r.length - 1];
}
function Gs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function go(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function r0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Er(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function l0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Rn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function i0(e, t) {
  try {
    let n = e.sessionStorage.getItem(yd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function o0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(yd, JSON.stringify(n));
    } catch (r) {
      Sn(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v0.0.0-experimental-4a8a492a
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hi() {
  return (
    (hi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hi.apply(this, arguments)
  );
}
const ul = C.createContext(null),
  hu = C.createContext(null),
  kd = C.createContext({ isTransitioning: !1 }),
  Pn = C.createContext(null),
  Di = C.createContext(null),
  nn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ed = C.createContext(null);
function a0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  sl() || V(!1);
  let { basename: r, navigator: l } = C.useContext(Pn),
    { hash: i, pathname: o, search: a } = Mi(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Ct([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function sl() {
  return C.useContext(Di) != null;
}
function cl() {
  return sl() || V(!1), C.useContext(Di).location;
}
function Cd(e) {
  C.useContext(Pn).static || C.useLayoutEffect(e);
}
function u0() {
  let { isDataRoute: e } = C.useContext(nn);
  return e ? S0() : s0();
}
function s0() {
  sl() || V(!1);
  let e = C.useContext(ul),
    { basename: t, navigator: n } = C.useContext(Pn),
    { matches: r } = C.useContext(nn),
    { pathname: l } = cl(),
    i = JSON.stringify(ji(r).map((u) => u.pathnameBase)),
    o = C.useRef(!1);
  return (
    Cd(() => {
      o.current = !0;
    }),
    C.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let d = fu(u, JSON.parse(i), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ct([t, d.pathname])),
          (s.replace ? n.replace : n.push)(d, s.state, s);
      },
      [t, n, i, l, e]
    )
  );
}
const c0 = C.createContext(null);
function f0(e) {
  let t = C.useContext(nn).outlet;
  return t && C.createElement(c0.Provider, { value: e }, t);
}
function Mi(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(nn),
    { pathname: l } = cl(),
    i = JSON.stringify(ji(r).map((o) => o.pathnameBase));
  return C.useMemo(() => fu(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function d0(e, t, n) {
  sl() || V(!1);
  let { navigator: r } = C.useContext(Pn),
    { matches: l } = C.useContext(nn),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = cl(),
    s;
  if (t) {
    var d;
    let w = typeof t == "string" ? Tt(t) : t;
    a === "/" || ((d = w.pathname) != null && d.startsWith(a)) || V(!1),
      (s = w);
  } else s = u;
  let v = s.pathname || "/",
    m = a === "/" ? v : v.slice(a.length) || "/",
    S = Bn(e, { pathname: m }),
    y = g0(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, o, w.params),
            pathname: Ct([
              a,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Ct([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && y
    ? C.createElement(
        Di.Provider,
        {
          value: {
            location: hi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: de.Pop,
          },
        },
        y
      )
    : y;
}
function p0() {
  let e = x0(),
    t = md(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    i
  );
}
const h0 = C.createElement(p0, null);
class m0 extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          nn.Provider,
          { value: this.props.routeContext },
          C.createElement(Ed.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function v0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(ul);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(nn.Provider, { value: t }, r)
  );
}
function g0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let i = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let a = i.findIndex(
      (u) => u.route.id && (o == null ? void 0 : o[u.route.id])
    );
    a >= 0 || V(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
  }
  return i.reduceRight((a, u, s) => {
    let d = u.route.id ? (o == null ? void 0 : o[u.route.id]) : null,
      v = null;
    n && (v = u.route.errorElement || h0);
    let m = t.concat(i.slice(0, s + 1)),
      S = () => {
        let y;
        return (
          d
            ? (y = v)
            : u.route.Component
            ? (y = C.createElement(u.route.Component, null))
            : u.route.element
            ? (y = u.route.element)
            : (y = a),
          C.createElement(v0, {
            match: u,
            routeContext: { outlet: a, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? C.createElement(m0, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: d,
          children: S(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var Pd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Pd || {}),
  nr = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(nr || {});
function y0(e) {
  let t = C.useContext(ul);
  return t || V(!1), t;
}
function _d(e) {
  let t = C.useContext(hu);
  return t || V(!1), t;
}
function w0(e) {
  let t = C.useContext(nn);
  return t || V(!1), t;
}
function mu(e) {
  let t = w0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function Rd() {
  let e = _d(nr.UseLoaderData),
    t = mu(nr.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function x0() {
  var e;
  let t = C.useContext(Ed),
    n = _d(nr.UseRouteError),
    r = mu(nr.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function S0() {
  let { router: e } = y0(Pd.UseNavigateStable),
    t = mu(nr.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Cd(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, hi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const k0 = "startTransition",
  Zs = op[k0];
function E0(e) {
  Zs ? Zs(e) : e();
}
class C0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function P0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = C.useState(n.state),
    [o, a] = C.useState(),
    [u, s] = C.useState({ isTransitioning: !1 }),
    [d, v] = C.useState(),
    [m, S] = C.useState(),
    [y, w] = C.useState(),
    { v7_startTransition: T } = r || {},
    p = C.useCallback(
      (R) => {
        T ? E0(R) : R();
      },
      [T]
    ),
    f = C.useCallback(
      (R, N) => {
        let { viewTransitionOpts: L } = N;
        !L || typeof document.startViewTransition != "function"
          ? p(() => i(R))
          : m && d
          ? (d.resolve(),
            m.skipTransition(),
            w({
              state: R,
              currentLocation: L.currentLocation,
              nextLocation: L.nextLocation,
            }))
          : (a(R),
            s({
              isTransitioning: !0,
              currentLocation: L.currentLocation,
              nextLocation: L.nextLocation,
            }));
      },
      [p, m, d]
    );
  C.useLayoutEffect(() => n.subscribe(f), [n, f]),
    C.useEffect(() => {
      u.isTransitioning && v(new C0());
    }, [u.isTransitioning]),
    C.useEffect(() => {
      if (d && o) {
        let R = o,
          N = d.promise,
          L = document.startViewTransition(async () => {
            p(() => i(R)), await N;
          });
        L.finished.finally(() => {
          v(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          S(L);
      }
    }, [p, o, d]),
    C.useEffect(() => {
      d && o && l.location.key === o.location.key && d.resolve();
    }, [d, m, l.location, o]),
    C.useEffect(() => {
      !u.isTransitioning &&
        y &&
        (a(y.state),
        s({
          isTransitioning: !0,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [u.isTransitioning, y]);
  let h = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, N, L) =>
          n.navigate(R, {
            state: N,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
        replace: (R, N, L) =>
          n.navigate(R, {
            replace: !0,
            state: N,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
      }),
      [n]
    ),
    c = n.basename || "/",
    k = C.useMemo(
      () => ({ router: n, navigator: h, static: !1, basename: c }),
      [n, h, c]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      ul.Provider,
      { value: k },
      C.createElement(
        hu.Provider,
        { value: l },
        C.createElement(
          kd.Provider,
          { value: u },
          C.createElement(
            N0,
            {
              basename: c,
              location: l.location,
              navigationType: l.historyAction,
              navigator: h,
            },
            l.initialized
              ? C.createElement(_0, { routes: n.routes, state: l })
              : t
          )
        )
      )
    ),
    null
  );
}
function _0(e) {
  let { routes: t, state: n } = e;
  return d0(t, void 0, n);
}
function R0(e) {
  return f0(e.context);
}
function N0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = de.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  sl() && V(!1);
  let a = t.replace(/^\/*/, "/"),
    u = C.useMemo(() => ({ basename: a, navigator: i, static: o }), [a, i, o]);
  typeof r == "string" && (r = Tt(r));
  let {
      pathname: s = "/",
      search: d = "",
      hash: v = "",
      state: m = null,
      key: S = "default",
    } = r,
    y = C.useMemo(() => {
      let w = qt(s, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: v, state: m, key: S },
            navigationType: l,
          };
    }, [a, s, d, v, m, S, l]);
  return y == null
    ? null
    : C.createElement(
        Pn.Provider,
        { value: u },
        C.createElement(Di.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function L0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v0.0.0-experimental-4a8a492a
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
function Nd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function T0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function j0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !T0(e);
}
const D0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  M0 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ];
function z0(e, t) {
  return Xm({
    basename: t == null ? void 0 : t.basename,
    future: rr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: gm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || O0(),
    routes: e,
    mapRouteProperties: L0,
  }).initialize();
}
function O0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = rr({}, t, { errors: I0(t.errors) })), t;
}
function I0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new du(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const F0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  U0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ld = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: d,
        unstable_viewTransition: v,
      } = t,
      m = Nd(t, D0),
      { basename: S } = C.useContext(Pn),
      y,
      w = !1;
    if (typeof s == "string" && U0.test(s) && ((y = s), F0))
      try {
        let h = new URL(window.location.href),
          c = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          k = qt(c.pathname, S);
        c.origin === h.origin && k != null
          ? (s = k + c.search + c.hash)
          : (w = !0);
      } catch {}
    let T = a0(s, { relative: l }),
      p = $0(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: v,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || p(h);
    }
    return C.createElement(
      "a",
      rr({}, m, { href: y || T, onClick: w || i ? r : f, ref: n, target: u })
    );
  }),
  A0 = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: d,
      } = t,
      v = Nd(t, M0),
      m = Mi(u, { relative: v.relative }),
      S = cl(),
      y = C.useContext(hu),
      { navigator: w } = C.useContext(Pn),
      T = V0(m) && s === !0,
      p = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
      f = S.pathname,
      h =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((f = f.toLowerCase()),
      (h = h ? h.toLowerCase() : null),
      (p = p.toLowerCase()));
    let c = f === p || (!o && f.startsWith(p) && f.charAt(p.length) === "/"),
      k =
        h != null &&
        (h === p || (!o && h.startsWith(p) && h.charAt(p.length) === "/")),
      R = { isActive: c, isPending: k, isTransitioning: T },
      N = c ? r : void 0,
      L;
    typeof i == "function"
      ? (L = i(R))
      : (L = [
          i,
          c ? "active" : null,
          k ? "pending" : null,
          T ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let W = typeof a == "function" ? a(R) : a;
    return C.createElement(
      Ld,
      rr({}, v, {
        "aria-current": N,
        className: L,
        ref: n,
        style: W,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof d == "function" ? d(R) : d
    );
  });
var va;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionStates = "useViewTransitionStates"),
    (e.useViewTransitionState = "useViewTransitionState");
})(va || (va = {}));
var Js;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Js || (Js = {}));
function B0(e) {
  let t = C.useContext(ul);
  return t || V(!1), t;
}
function $0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = u0(),
    s = cl(),
    d = Mi(e, { relative: o });
  return C.useCallback(
    (v) => {
      if (j0(v, n)) {
        v.preventDefault();
        let m = r !== void 0 ? r : kn(s) === kn(d);
        u(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, d, r, l, n, e, i, o, a]
  );
}
function V0(e, t) {
  t === void 0 && (t = {});
  let n = C.useContext(kd),
    { basename: r } = B0(va.useViewTransitionState),
    l = Mi(e, { relative: t.relative });
  if (n.isTransitioning) {
    let i = qt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
      o = qt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return da(l.pathname, o) != null || da(l.pathname, i) != null;
  }
  return !1;
}
function H0() {
  return P.jsx("nav", {
    className: "w-full border-b bg-white",
    id: "page-header",
    children: P.jsx("div", {
      className:
        "w-full container mx-auto max-w-screen-lg px-6 lg:px-0 flex flex-wrap items-center mt-0 py-6",
      children: P.jsx("div", {
        children: P.jsxs(Ld, {
          className:
            "flex items-center tracking-tight no-underline hover:no-underline font-bold text-black text-xl",
          to: "/",
          unstable_viewTransition: !0,
          children: [
            P.jsxs("svg", {
              width: "30",
              height: "20",
              viewBox: "0 0 94 61",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                P.jsx("path", {
                  d: "M72.7315 20.9357C70.0548 20.0941 68.6725 20.3778 65.8649 20.071C61.5246 19.5976 59.7954 17.9013 59.0619 13.5356C58.6514 11.0985 59.1361 7.53022 58.0881 5.32106C56.0839 1.10875 51.3943 -0.780439 46.6828 0.297843C42.7049 1.20956 39.3951 5.18518 39.2117 9.266C39.0021 13.9254 41.657 17.901 46.2156 19.273C48.3814 19.9261 50.6825 20.2548 52.9444 20.4214C57.0925 20.7238 57.4113 23.0297 58.5335 24.9277C59.2409 26.1243 59.9264 27.3034 59.9264 30.8714C59.9264 34.4394 59.2365 35.6185 58.5335 36.8151C57.4113 38.7087 56.0271 39.9491 51.879 40.2559C49.6171 40.4225 47.3116 40.7513 45.1502 41.4044C40.5916 42.7807 37.9367 46.7519 38.1463 51.4113C38.3297 55.4921 41.6395 59.4678 45.6174 60.3795C50.3289 61.4621 55.0185 59.5686 57.0227 55.3563C58.075 53.1471 58.6514 50.6443 59.0619 48.2072C59.7998 43.8414 61.5289 42.1451 65.8649 41.6717C68.6725 41.3649 71.5783 41.6717 74.2093 40.177C76.9895 38.1456 79.4734 35.0968 79.4734 30.8714C79.4734 26.6459 76.7967 22.2156 72.7315 20.9357Z",
                  fill: "#F44250",
                }),
                P.jsx("path", {
                  d: "M28.1997 40.7739C22.7285 40.7739 18.2656 36.3027 18.2656 30.8213C18.2656 25.3399 22.7285 20.8687 28.1997 20.8687C33.6709 20.8687 38.1338 25.3399 38.1338 30.8213C38.1338 36.2983 33.6665 40.7739 28.1997 40.7739Z",
                  fill: "#121212",
                }),
                P.jsx("path", {
                  d: "M9.899 61C4.43661 60.9868 -0.0130938 56.498 2.89511e-05 51.0122C0.0132099 45.5353 4.4936 41.0773 9.96914 41.0948C15.4359 41.108 19.8856 45.5968 19.8681 51.0825C19.8549 56.5551 15.3745 61.0131 9.899 61Z",
                  fill: "#121212",
                }),
                P.jsx("path", {
                  d: "M83.7137 60.9998C78.2339 61.0304 73.7361 56.5901 73.7052 51.122C73.6747 45.632 78.1068 41.1258 83.5646 41.0949C89.0444 41.0643 93.5423 45.5046 93.5731 50.9727C93.6036 56.4583 89.1716 60.9689 83.7137 60.9998Z",
                  fill: "#121212",
                }),
              ],
            }),
            P.jsx("span", {
              className: "inline-block pl-2",
              children: "Music Library",
            }),
          ],
        }),
      }),
    }),
  });
}
function W0() {
  return P.jsx("footer", {
    className:
      "container mx-auto max-w-screen-lg px-6 lg:px-0 flex items-center flex-wrap pt-4 pb-32",
    children: P.jsx("div", {
      className: "container flex px-3 py-8",
      children: P.jsx("div", {
        className: "w-full mx-auto flex flex-wrap",
        children: P.jsx("div", {
          className: "flex w-full lg:w-1/2",
          children: P.jsxs("div", {
            className: "px-3 md:px-0",
            children: [
              P.jsx("h3", {
                className: "font-bold text-gray-900",
                children: "About",
              }),
              P.jsxs("p", {
                className: "pt-4",
                children: [
                  "This site is a demo of a React Router SPA using",
                  " ",
                  P.jsx("strong", { children: "React Router 6.17" }),
                  " with the experimental support for the View Transitions API ✨",
                ],
              }),
              P.jsxs("p", {
                className: "pt-4",
                children: [
                  "Huge thanks and shout out to original",
                  " ",
                  P.jsx("a", {
                    href: "https://github.com/Charca/astro-records",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: "Astro version",
                  }),
                  " ",
                  "of this demo 🙌",
                ],
              }),
              P.jsxs("p", {
                className: "pt-4",
                children: [
                  "Made with ❤️ by",
                  " ",
                  P.jsx("a", {
                    href: "https://twitter.com/brophdawg11",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: "Matt Brophy",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
const Q0 = P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-10 h-10 sm:w-14 sm:h-14",
    children: P.jsx("path", {
      fillRule: "evenodd",
      d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
      clipRule: "evenodd",
    }),
  }),
  K0 = P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-10 h-10 sm:w-14 sm:h-14",
    children: P.jsx("path", {
      fillRule: "evenodd",
      d: "M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z",
      clipRule: "evenodd",
    }),
  }),
  Y0 = 4;
function X0() {
  let e = C.useRef(null),
    t = C.useRef(0),
    [n, r] = C.useState(4),
    [l, i] = C.useState(0),
    { isPlaying: o, setIsPlaying: a, currentTrack: u } = C.useContext(fl);
  function s() {
    if (e.current) {
      if (e.current.duration) {
        const d = (e.current.currentTime * 100) / e.current.duration;
        i(d);
      }
      t.current = requestAnimationFrame(s);
    }
  }
  return (
    C.useEffect(() => {
      if (!e.current) return;
      const d = (n % Y0) + 1;
      (e.current.src = `/react-router-records/mp3/song${d}.mp3`),
        (e.current.currentTime = 0),
        e.current.play(),
        r(d);
    }, [u == null ? void 0 : u.title]),
    C.useEffect(() => {
      var d, v;
      o
        ? ((d = e.current) == null || d.play(),
          (t.current = requestAnimationFrame(s)))
        : ((v = e.current) == null || v.pause(),
          cancelAnimationFrame(t.current));
    }, [o]),
    C.useEffect(() => {
      l >= 99.99 && (a(!1), i(0));
    }, [l]),
    u === null
      ? null
      : P.jsxs("div", {
          className: "fixed bottom-0 left-0 right-0 bg-gray-100 c-player",
          children: [
            P.jsx("div", {
              className: "flex-1 bg-gray-200 h-1.5 dark:bg-gray-700",
              children: P.jsx("div", {
                className: "bg-pink-500 h-1.5",
                style: { width: `${l}%` },
              }),
            }),
            P.jsxs("div", {
              className:
                "container mx-auto max-w-screen-lg px-3 py-2 sm:px-6 sm:py-4 flex items-center gap-5",
              children: [
                P.jsx("img", {
                  src: u.imageUrl,
                  width: "60",
                  height: "60",
                  className: "block rounded-md",
                }),
                P.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    P.jsx("p", {
                      className:
                        "text-xl font-medium overflow-hidden text-ellipsis whitespace-nowrap",
                      children: u.title,
                    }),
                    P.jsx("p", {
                      className:
                        "text-xl text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap",
                      children: u.artist,
                    }),
                  ],
                }),
                P.jsx("audio", {
                  ref: e,
                  src: "/react-router-records/mp3/song1.mp3",
                }),
                P.jsxs("div", {
                  className: "flex gap-6 items-center text-black",
                  children: [
                    P.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      className: "w-10 h-10 hidden sm:block",
                      children: P.jsx("path", {
                        d: "M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z",
                      }),
                    }),
                    P.jsx("button", {
                      onClick: () => a(!o),
                      children: o ? K0 : Q0,
                    }),
                    P.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      className: "w-10 h-10 hidden sm:block",
                      children: P.jsx("path", {
                        d: "M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
  );
}
const fl = C.createContext({
  isPlaying: !1,
  setIsPlaying: () => {},
  currentTrack: null,
  setCurrentTrack: () => {},
});
function G0() {
  let [e, t] = C.useState(!1),
    [n, r] = C.useState(null);
  return (
    console.log(e, n),
    P.jsxs(fl.Provider, {
      value: {
        isPlaying: e,
        setIsPlaying: t,
        currentTrack: n,
        setCurrentTrack: r,
      },
      children: [
        P.jsx(H0, {}),
        P.jsx(R0, {}),
        P.jsx(W0, {}),
        P.jsx("div", { id: "audio-player", children: P.jsx(X0, {}) }),
      ],
    })
  );
}
const Z0 = "modulepreload",
  J0 = function (e) {
    return "/react-router-records/" + e;
  },
  qs = {},
  yt = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const l = document.getElementsByTagName("link");
    return Promise.all(
      n.map((i) => {
        if (((i = J0(i)), i in qs)) return;
        qs[i] = !0;
        const o = i.endsWith(".css"),
          a = o ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let d = l.length - 1; d >= 0; d--) {
            const v = l[d];
            if (v.href === i && (!o || v.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${a}`)) return;
        const s = document.createElement("link");
        if (
          ((s.rel = o ? "stylesheet" : Z0),
          o || ((s.as = "script"), (s.crossOrigin = "")),
          (s.href = i),
          document.head.appendChild(s),
          o)
        )
          return new Promise((d, v) => {
            s.addEventListener("load", d),
              s.addEventListener("error", () =>
                v(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    )
      .then(() => t())
      .catch((i) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
          throw i;
      });
  };
function q0({ id: e, name: t, artist: n, imageUrl: r }) {
  return P.jsx("div", {
    className: "flex flex-col c-card",
    children: P.jsxs(A0, {
      to: `/album/${e}`,
      className: "text-black hover:text-pink-500",
      unstable_viewTransition: !0,
      children: [
        P.jsxs("div", {
          className: "shadow-md hover:shadow-lg relative",
          children: [
            P.jsx("img", {
              className: "card-image rounded-md relative z-10 c-card--album",
              src: r,
              alt: t,
              width: "400",
              height: "400",
            }),
            P.jsx("img", {
              src: "/react-router-records/vinyl-lp.webp",
              width: "400",
              height: "400",
              className: "absolute top-0 opacity-0 vinyl-image c-card--vinyl",
            }),
          ],
        }),
        P.jsx("p", { className: "pt-4 font-semibold", children: t }),
        P.jsx("p", { className: "pt-1 text-gray-700", children: n }),
      ],
    }),
  });
}
async function b0() {
  await new Promise((t) => setTimeout(t, 1));
  const { default: e } = await yt(() => import("./albums-a0323168.js"), []);
  return e;
}
function ev() {
  let e = Rd();
  return P.jsx("section", {
    className: "py-8",
    children: P.jsxs("div", {
      className:
        "container mx-auto max-w-screen-lg px-6 lg:px-0 flex items-center flex-wrap pt-4 pb-12",
      children: [
        P.jsx("h2", {
          className: "font-bold text-3xl text-black tracking-tight mb-12",
          children: "Recently Played",
        }),
        P.jsx("div", {
          className:
            "w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",
          children: e.map((t) =>
            P.jsx(
              q0,
              { id: t.id, name: t.name, artist: t.artist, imageUrl: t.img },
              t.id
            )
          ),
        }),
      ],
    }),
  });
}
const tv = (e, t) => {
  const n = e[t];
  return n
    ? typeof n == "function"
      ? n()
      : Promise.resolve(n)
    : new Promise((r, l) => {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          l.bind(null, new Error("Unknown variable dynamic import: " + t))
        );
      });
};
function nv({ albumId: e, title: t, imageUrl: n }) {
  let { isPlaying: r, currentTrack: l } = rl.useContext(fl);
  const o =
    r && (l == null ? void 0 : l.albumId) === e
      ? "vinyl-animation-in-spinning"
      : "vinyl-animation-in";
  return P.jsxs("div", {
    className: "relative shadow-xl mr-32 w-72 md:w-auto c-record",
    children: [
      P.jsx("img", {
        src: n,
        alt: t,
        width: "400",
        height: "400",
        className:
          "block rounded-md tag-album-cover relative z-10 bg-white c-record--album",
      }),
      P.jsx("img", {
        src: "/vinyl-lp.webp",
        width: "400",
        height: "400",
        className: `absolute top-0 opacity-0 vinyl-image c-record--vinyl ${o}`,
      }),
    ],
  });
}
function Td() {
  return P.jsx("svg", {
    "aria-hidden": "true",
    className: "w-6 h-6 mr-2 -ml-1 text-pink-600",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    children: P.jsx("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
      clipRule: "evenodd",
    }),
  });
}
function jd() {
  return P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-6 h-6 mr-2 -ml-1 text-pink-600",
    children: P.jsx("path", {
      fillRule: "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z",
      clipRule: "evenodd",
    }),
  });
}
function rv({ tracks: e, albumId: t, artist: n, imageUrl: r }) {
  let {
    isPlaying: l,
    setIsPlaying: i,
    currentTrack: o,
    setCurrentTrack: a,
  } = rl.useContext(fl);
  return P.jsx("ul", {
    className: "text-xl",
    children: e.map((u) => {
      const s = u.id == (o == null ? void 0 : o.id);
      return P.jsxs(
        "li",
        {
          className:
            "hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center",
          onClick: () => {
            a({ ...u, albumId: t, artist: n, imageUrl: r }), i(!0);
          },
          children: [
            P.jsx("span", {
              className: "text-gray-500 w-8 mr-2",
              children:
                s && !l ? P.jsx(Td, {}) : s && l ? P.jsx(jd, {}) : u.position,
            }),
            P.jsx("span", { className: "font-medium", children: u.title }),
            P.jsx("span", {
              className: "text-gray-500 ml-auto",
              children: u.length,
            }),
          ],
        },
        u.id
      );
    }),
  });
}
function lv({ tracks: e, albumId: t, artist: n, imageUrl: r }) {
  let {
    isPlaying: l,
    setIsPlaying: i,
    currentTrack: o,
    setCurrentTrack: a,
  } = rl.useContext(fl);
  const u = l && (o == null ? void 0 : o.albumId) === t;
  return P.jsx("button", {
    type: "button",
    className:
      "text-pink-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4",
    onClick: () => {
      u ? i(!1) : (a({ ...e[0], albumId: t, artist: n, imageUrl: r }), i(!l));
    },
    children: u
      ? P.jsxs(P.Fragment, { children: [P.jsx(jd, {}), "Pause"] })
      : P.jsxs(P.Fragment, { children: [P.jsx(Td, {}), "Play"] }),
  });
}
async function iv({ params: e }) {
  await new Promise((n) => setTimeout(n, 1));
  const { default: t } = await tv(
    Object.assign({
      "../data/album-1.json": () =>
        yt(() => import("./album-1-bfe26d94.js"), []),
      "../data/album-2.json": () =>
        yt(() => import("./album-2-6bcd8e89.js"), []),
      "../data/album-3.json": () =>
        yt(() => import("./album-3-e649e581.js"), []),
      "../data/album-4.json": () =>
        yt(() => import("./album-4-c4664fee.js"), []),
      "../data/album-5.json": () =>
        yt(() => import("./album-5-c168a9cb.js"), []),
      "../data/album-6.json": () =>
        yt(() => import("./album-6-3740d35b.js"), []),
      "../data/album-7.json": () =>
        yt(() => import("./album-7-9cf691a1.js"), []),
      "../data/album-8.json": () =>
        yt(() => import("./album-8-0ebba23b.js"), []),
    }),
    `../data/album-${e.id}.json`
  );
  return t;
}
function ov() {
  let e = Rd();
  return P.jsxs("section", {
    children: [
      P.jsxs("div", {
        className:
          "container mx-auto max-w-screen-lg px-6 lg:px-0 flex flex-col items-start md:items-end md:flex-row pt-8 pb-12 overflow-hidden",
        children: [
          P.jsx(nv, {
            albumId: e.id,
            title: e.name,
            imageUrl: e.img,
            "data-todo": "client:visible",
          }),
          P.jsxs("div", {
            className: "flex-1 flex flex-col justify-end pt-8",
            children: [
              P.jsx("h1", {
                className: "text-5xl font-bold tracking-tight text-gray-900",
                children: e.name,
              }),
              P.jsx("p", { className: "mt-3 text-3xl", children: e.artist }),
              P.jsxs("p", {
                className: "mt-2 text-lg",
                children: [e.strGenre, " — ", e.intYearReleased],
              }),
              P.jsxs("div", {
                className: "mt-3 flex",
                children: [
                  P.jsx(lv, {
                    tracks: e.tracks,
                    albumId: e.id,
                    artist: e.artist,
                    imageUrl: e.img,
                  }),
                  P.jsxs("button", {
                    type: "button",
                    className:
                      "text-pink-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4",
                    children: [
                      P.jsx("svg", {
                        className: "w-6 h-6 mr-2 -ml-1 text-pink-600",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: P.jsx("path", {
                          fillRule: "evenodd",
                          d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                          clipRule: "evenodd",
                        }),
                      }),
                      "Shuffle",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      P.jsx("div", {
        className: "container mx-auto max-w-screen-lg mb-10",
        children: P.jsx(rv, {
          tracks: e.tracks,
          albumId: e.id,
          artist: e.artist,
          imageUrl: e.img,
          "data-todo": "client:visible",
        }),
      }),
    ],
  });
}
let av = z0(
  [
    {
      path: "/",
      Component: G0,
      children: [
        { index: !0, loader: b0, Component: ev },
        { path: "album/:id", loader: iv, Component: ov },
      ],
    },
  ],
  { basename: "/react-router-records" }
);
function uv() {
  return P.jsx(P0, { router: av });
}
yo.createRoot(document.getElementById("root")).render(
  P.jsx(rl.StrictMode, { children: P.jsx(uv, {}) })
);
