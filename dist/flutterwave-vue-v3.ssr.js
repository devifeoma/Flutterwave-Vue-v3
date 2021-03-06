'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
  name: "FlutterwavePayButton",
  props: {
    public_key: {
      type: String
    },
    tx_ref: {
      type: [String, Number]
    },
    amount: {
      type: [String, Number],
      required: true
    },
    currency: {
      type: String,
      default: 'NGN'
    },
    country: {
      type: String,
      default: 'NG'
    },
    payment_options: {
      type: String
    },
    payment_plan: {
      type: [String, Number]
    },
    subaccounts: {
      type: null
    },
    integrity_hash: {
      type: null
    },
    redirect_url: {
      type: String
    },
    meta: {
      type: Object
    },
    authorization: {
      type: null
    },
    customer: {
      type: Object
    },
    customizations: {
      type: Object
    },
    callback: {
      type: Function
    },
    onclose: {
      type: Function
    }
  },
  methods: {
    showPaymentModal: function showPaymentModal() {
      var _this = this;

      var paymentParams = {
        public_key: this.public_key,
        tx_ref: this.tx_ref,
        amount: this.amount,
        currency: this.currency,
        country: this.country,
        payment_options: this.payment_options,
        payment_plan: this.payment_plan,
        subaccounts: this.subaccounts,
        integrity_hash: this.integrity_hash,
        redirect_url: this.redirect_url,
        meta: this.meta,
        authorization: this.authorization,
        customer: this.customer,
        customizations: this.customizations,
        callback: function callback(response) {
          return _this.callback(response);
        },
        onclose: function onclose() {
          return _this.onclose();
        }
      };
      this.payWithFlutterwave(paymentParams);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    on: {
      "click": _vm.showPaymentModal
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-5d469596";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */
 //export { default as FlutterwaveVueV3Sample } from './flutterwave-vue-v3-sample.vue';
var components=/*#__PURE__*/Object.freeze({__proto__:null,FlutterwavePayButton: __vue_component__});var trackingEndPoint = 'https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent';
var packageVersion = '1.0.3';
var language = 'Vue V3';
/**
 * @param {Object} data
 * @param {Object} data.paymentData - The payment data passed to Inline JS
 * @param {Object} data.response - The callback response
 * @param {string} data.responseTime - The response time
 */

var trackApi = function trackApi(data) {
  var trackingData = {
    publicKey: data.paymentData.public_key,
    language: language,
    version: packageVersion,
    title: '',
    message: '0' // data.responseTime

  };
  var paymentOptions = data.paymentData.payment_options || '';
  var paymentOptionsArray = paymentOptions ? paymentOptions.split(',') : [];
  var title = '';

  if (paymentOptionsArray.length === 0) {
    title = 'Initiate-Charge-Dashboard';
  } else if (paymentOptionsArray.length === 1) {
    title = 'Initiate-Charge-' + paymentOptions;
  } else {
    title = 'Initiate-Charge-Multiple';
  }

  trackingData.title = data.response.status === 'successful' ? title : title + '-error';
  submitTracking(trackingData);
};

var submitTracking = function submitTracking(trackingData) {
  fetch(trackingEndPoint, {
    method: 'POST',
    body: JSON.stringify(trackingData)
  }).then(function (res) {});
};var install = function installFlutterwaveVueV3(Vue, _ref) {
  var _ref$publicKey = _ref.publicKey,
      publicKey = _ref$publicKey === void 0 ? '' : _ref$publicKey;
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        componentName = _ref3[0],
        component = _ref3[1];

    Vue.component(componentName, component);
  });
  Vue.mixin({
    mounted: function mounted() {
      var inlineSdk = "https://checkout.flutterwave.com/v3.js";
      var script = document.createElement('script');
      script.src = inlineSdk;

      if (!document.querySelector("[src=\"".concat(inlineSdk, "\"]"))) {
        document.body.appendChild(script);
      }
    },
    methods: {
      payWithFlutterwave: function payWithFlutterwave(paymentParams) {
        var payData = _objectSpread2(_objectSpread2({}, paymentParams), {}, {
          public_key: paymentParams.public_key || publicKey,
          callback: function callback(response) {
            trackApi({
              paymentData: payData,
              response: response,
              responseTime: 1000
            });
            paymentParams.callback(response);
          }
        });

        window.FlutterwaveCheckout(payData);
      },
      asyncPayWithFlutterwave: function asyncPayWithFlutterwave(paymentData) {
        return new Promise(function (resolve, reject) {
          var payData = _objectSpread2(_objectSpread2({}, paymentData), {}, {
            public_key: paymentData.public_key || publicKey,
            callback: function callback($event) {
              trackApi({
                paymentData: payData,
                response: $event,
                responseTime: 1000
              });
              resolve($event);
            },
            onclose: function onclose() {
              return resolve('closed');
            }
          });

          window.FlutterwaveCheckout(payData);
        });
      },
      closePaymentModal: function closePaymentModal() {
        var waitDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        setTimeout(function () {
          document.getElementsByName('checkout')[0].setAttribute('style', 'position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;');
          document.body.style.overflow = ''; // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
        }, waitDuration * 1000);
      }
    }
  });
}; // Create module definition for Vue.use()


var Flutterwave = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(Flutterwave);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.FlutterwavePayButton=__vue_component__;exports.default=Flutterwave;