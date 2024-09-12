import { d as defineComponent, o as openBlock, c as createBlock, w as withCtx, a as createVNode, n as normalizeClass, V as VBtn, u as unref, b as createTextVNode, e as createBaseVNode, R as RouteName, P as PaymentMode } from "./index-DJXxASaI.js";
import { V as VCard, a as VCardItem, b as VCardText, c as VCol, d as VRow } from "./VCard-BOIdaK66.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h6" }, "Payment with redirect", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h5", { class: "text-h6 title" }, "Redirect to payment page on checkout", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h6" }, "Payment with built-in iframe", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h5", { class: "text-h6 title" }, "Show built-in payment iframe on checkout page", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h6" }, "Payment with modal iframe", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h5", { class: "text-h6 title" }, "Show modal payment iframe on checkout page", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-h6" }, "Payment with manual params (development purpose only)", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h5", { class: "text-h6 title" }, "Set all available payment parameters on checkout", -1);
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
                    class: normalizeClass("py-4 px-6 text-white bg-secondary")
                  }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      _hoisted_2,
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).Redirect } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" SHOW ")
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
                      _hoisted_3
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      _hoisted_4,
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).BuiltInIframe } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" SHOW ")
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
                    class: normalizeClass("py-4 px-6 text-white bg-info")
                  }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      _hoisted_6,
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).ModalIframe } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" SHOW ")
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
                    class: normalizeClass("py-4 px-6 text-white bg-warning")
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      _hoisted_8,
                      createVNode(VBtn, {
                        to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).Manual } },
                        variant: "flat",
                        class: "mt-4 text-white",
                        color: "warning"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" SHOW ")
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
