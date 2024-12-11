import { c as createVueComponent, d as defineComponent, o as openBlock, a as createBlock, w as withCtx, b as createVNode, n as normalizeClass, e as createBaseVNode, u as unref, t as toDisplayString, V as VBtn, R as RouteName, P as PaymentMode, f as createTextVNode } from "./index-BZtgzgBp.js";
import { V as VCard, a as VCardItem, b as VCardText } from "./VCard-w1fiAr5g.js";
import { V as VCol, a as VRow } from "./VRow-BRFRbXyO.js";
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconAppWindow = createVueComponent("outline", "app-window", "IconAppWindow", [["path", { "d": "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", "key": "svg-0" }], ["path", { "d": "M6 8h.01", "key": "svg-1" }], ["path", { "d": "M9 8h.01", "key": "svg-2" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconBuildingBank = createVueComponent("outline", "building-bank", "IconBuildingBank", [["path", { "d": "M3 21l18 0", "key": "svg-0" }], ["path", { "d": "M3 10l18 0", "key": "svg-1" }], ["path", { "d": "M5 6l7 -3l7 3", "key": "svg-2" }], ["path", { "d": "M4 10l0 11", "key": "svg-3" }], ["path", { "d": "M20 10l0 11", "key": "svg-4" }], ["path", { "d": "M8 14l0 3", "key": "svg-5" }], ["path", { "d": "M12 14l0 3", "key": "svg-6" }], ["path", { "d": "M16 14l0 3", "key": "svg-7" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconCode = createVueComponent("outline", "code", "IconCode", [["path", { "d": "M7 8l-4 4l4 4", "key": "svg-0" }], ["path", { "d": "M17 8l4 4l-4 4", "key": "svg-1" }], ["path", { "d": "M14 4l-4 16", "key": "svg-2" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconCornerUpRightDouble = createVueComponent("outline", "corner-up-right-double", "IconCornerUpRightDouble", [["path", { "d": "M4 18v-6a3 3 0 0 1 3 -3h7", "key": "svg-0" }], ["path", { "d": "M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4", "key": "svg-1" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconWall = createVueComponent("outline", "wall", "IconWall", [["path", { "d": "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", "key": "svg-0" }], ["path", { "d": "M4 8h16", "key": "svg-1" }], ["path", { "d": "M20 12h-16", "key": "svg-2" }], ["path", { "d": "M4 16h16", "key": "svg-3" }], ["path", { "d": "M9 4v4", "key": "svg-4" }], ["path", { "d": "M14 8v4", "key": "svg-5" }], ["path", { "d": "M8 12v4", "key": "svg-6" }], ["path", { "d": "M16 12v4", "key": "svg-7" }], ["path", { "d": "M11 16v4", "key": "svg-8" }]]);
const _hoisted_1 = { class: "text-h6 d-flex align-center" };
const _hoisted_2 = { class: "text-h6 title" };
const _hoisted_3 = { class: "text-h6 d-flex align-center" };
const _hoisted_4 = { class: "text-h6 title" };
const _hoisted_5 = { class: "text-h6 d-flex align-center" };
const _hoisted_6 = { class: "text-h6 title" };
const _hoisted_7 = { class: "text-h6 d-flex align-center" };
const _hoisted_8 = { class: "text-h6 title" };
const _hoisted_9 = { class: "text-h6 d-flex align-center" };
const _hoisted_10 = { class: "text-h6 title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VRow, { class: "py-6" }, {
        default: withCtx(() => [
          createVNode(VCol, {
            cols: "12",
            lg: "6"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                elevation: "10",
                class: "overflow-hidden"
              }, {
                default: withCtx(() => [
                  createVNode(VCardItem, {
                    class: normalizeClass("py-4 px-6 text-white bg-primary")
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h4", _hoisted_1, [
                        createVNode(unref(IconCornerUpRightDouble), { class: "mr-4" }),
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("text.payment.with.redirect")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createBaseVNode("h5", _hoisted_2, toDisplayString(_ctx.$t("text.payment.with.redirect.description")), 1),
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).Redirect } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("action.try.it.out")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            lg: "6"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                elevation: "10",
                class: "overflow-hidden"
              }, {
                default: withCtx(() => [
                  createVNode(VCardItem, {
                    class: normalizeClass("py-4 px-6 text-white bg-primary")
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h4", _hoisted_3, [
                        createVNode(unref(IconWall), { class: "mr-4" }),
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("text.payment.with.built.in.iframe")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createBaseVNode("h5", _hoisted_4, toDisplayString(_ctx.$t("text.payment.with.built.in.iframe.description")), 1),
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).BuiltInIframe } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("action.try.it.out")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            lg: "6"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                elevation: "10",
                class: "overflow-hidden"
              }, {
                default: withCtx(() => [
                  createVNode(VCardItem, {
                    class: normalizeClass("py-4 px-6 text-white bg-primary")
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h4", _hoisted_5, [
                        createVNode(unref(IconAppWindow), { class: "mr-4" }),
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("text.payment.with.modal.iframe")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createBaseVNode("h5", _hoisted_6, toDisplayString(_ctx.$t("text.payment.with.modal.iframe.description")), 1),
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).ModalIframe } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("action.try.it.out")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            lg: "6"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                elevation: "10",
                class: "overflow-hidden"
              }, {
                default: withCtx(() => [
                  createVNode(VCardItem, {
                    class: normalizeClass("py-4 px-6 text-white bg-primary")
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h4", _hoisted_7, [
                        createVNode(unref(IconBuildingBank), { class: "mr-4" }),
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("text.payment.by.bank")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createBaseVNode("h5", _hoisted_8, toDisplayString(_ctx.$t("text.payment.by.bank.description")), 1),
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).PayByBank } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("action.try.it.out")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            lg: "6"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                elevation: "10",
                class: "overflow-hidden"
              }, {
                default: withCtx(() => [
                  createVNode(VCardItem, {
                    class: normalizeClass("py-4 px-6 text-white bg-error")
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h4", _hoisted_9, [
                        createVNode(unref(IconCode), { class: "mr-4" }),
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("text.payment.with.manual.params")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createBaseVNode("h5", _hoisted_10, toDisplayString(_ctx.$t("text.payment.with.manual.params.description")), 1),
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).Manual } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("action.try.it.out")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
