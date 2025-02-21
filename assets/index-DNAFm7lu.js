import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, V as VContainer, F as Fragment, e as openBlock, t as toDisplayString, f as VBtn, u as unref, g as createTextVNode, T as Transition, h as createBlock, i as createCommentVNode, P as PaymentMode, R as RouteName } from "./index-oInSTNWe.js";
import { V as VRow, a as VCol } from "./VRow-bUhf9ezA.js";
import { V as VCard, a as VCardItem, b as VCardText } from "./VCard-D0XpQMJn.js";
const smoothScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;
  setTimeout(() => {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }, 100);
};
const _hoisted_1 = { class: "bg-surface" };
const _hoisted_2 = { class: "text-h2 text-md-h1 font-weight-medium" };
const _hoisted_3 = { class: "text-body-1" };
const _hoisted_4 = { class: "text-h2 font-weight-medium text-center" };
const _hoisted_5 = { class: "text-h5 font-weight-medium" };
const _hoisted_6 = { class: "text-body-1" };
const _hoisted_7 = { class: "text-h5 font-weight-medium" };
const _hoisted_8 = { class: "text-body-1" };
const _hoisted_9 = { class: "text-h5 font-weight-medium" };
const _hoisted_10 = { class: "text-body-1" };
const _hoisted_11 = { class: "text-h5 font-weight-medium" };
const _hoisted_12 = { class: "text-body-1" };
const _hoisted_13 = { class: "text-h5 font-weight-medium" };
const _hoisted_14 = { class: "text-body-1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const isVisiblePayments = ref(false);
    onMounted(() => {
      setTimeout(() => {
        isVisiblePayments.value = true;
      }, 100);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(VContainer, { class: "py-lg-16" }, {
            default: withCtx(() => [
              createVNode(VRow, { class: "py-10" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h1", _hoisted_2, toDisplayString(_ctx.$t("title.demo.shop")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("text.demo.shop")), 1),
                      createVNode(VBtn, {
                        variant: "outlined",
                        class: "mt-6 text-none",
                        color: "primary",
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(smoothScrollTo)("payments"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("action.try.payment.methods")), 1)
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
          })
        ]),
        createVNode(VContainer, { class: "payments-container" }, {
          default: withCtx(() => [
            createVNode(VRow, { class: "py-6" }, {
              default: withCtx(() => [
                createVNode(VCol, {
                  id: "payments",
                  cols: "12",
                  class: "pt-16 pb-4"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("h2", _hoisted_4, toDisplayString(_ctx.$t("title.payment.methods")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade-slide-up" }, {
              default: withCtx(() => [
                isVisiblePayments.value ? (openBlock(), createBlock(VRow, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          elevation: "10",
                          class: "overflow-hidden d-flex flex-column h-100 pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pa-0 pb-1" }, {
                              default: withCtx(() => [
                                createBaseVNode("h4", _hoisted_5, toDisplayString(_ctx.$t("text.payment.with.redirect")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pa-0 pt-1 d-flex flex-column align-start justify-space-between" }, {
                              default: withCtx(() => [
                                createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("text.payment.with.redirect.description")), 1),
                                createVNode(VBtn, {
                                  to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).Redirect } },
                                  variant: "flat",
                                  class: "mt-6 text-white",
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
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          elevation: "10",
                          class: "overflow-hidden d-flex flex-column h-100 pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pa-0 pb-1" }, {
                              default: withCtx(() => [
                                createBaseVNode("h4", _hoisted_7, toDisplayString(_ctx.$t("text.payment.with.modal.iframe")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pa-0 pt-1 d-flex flex-column align-start justify-space-between" }, {
                              default: withCtx(() => [
                                createBaseVNode("p", _hoisted_8, toDisplayString(_ctx.$t("text.payment.with.modal.iframe.description")), 1),
                                createVNode(VBtn, {
                                  to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).ModalIframe } },
                                  variant: "flat",
                                  class: "mt-6 text-white",
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
                      sm: "6",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          elevation: "10",
                          class: "overflow-hidden d-flex flex-column h-100 pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pa-0 pb-1" }, {
                              default: withCtx(() => [
                                createBaseVNode("h4", _hoisted_9, toDisplayString(_ctx.$t("text.payment.with.built.in.iframe")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pa-0 pt-1 d-flex flex-column align-start justify-space-between" }, {
                              default: withCtx(() => [
                                createBaseVNode("p", _hoisted_10, toDisplayString(_ctx.$t("text.payment.with.built.in.iframe.description")), 1),
                                createVNode(VBtn, {
                                  to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).BuiltInIframe } },
                                  variant: "flat",
                                  class: "mt-6 text-white",
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
                      sm: "6",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          elevation: "10",
                          class: "overflow-hidden d-flex flex-column h-100 pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pa-0 pb-1" }, {
                              default: withCtx(() => [
                                createBaseVNode("h4", _hoisted_11, toDisplayString(_ctx.$t("text.payment.by.bank")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pa-0 pt-1 d-flex flex-column align-start justify-space-between" }, {
                              default: withCtx(() => [
                                createBaseVNode("p", _hoisted_12, toDisplayString(_ctx.$t("text.payment.by.bank.description")), 1),
                                createVNode(VBtn, {
                                  to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).PayByBank } },
                                  variant: "flat",
                                  class: "mt-6 text-white",
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
                      "offset-sm": "3",
                      "offset-lg": "0",
                      sm: "6",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          elevation: "10",
                          class: "overflow-hidden d-flex flex-column h-100 pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pa-0 pb-1" }, {
                              default: withCtx(() => [
                                createBaseVNode("h4", _hoisted_13, toDisplayString(_ctx.$t("text.payment.with.manual.params")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pa-0 pt-1 d-flex flex-column align-start justify-space-between" }, {
                              default: withCtx(() => [
                                createBaseVNode("p", _hoisted_14, toDisplayString(_ctx.$t("text.payment.with.manual.params.description")), 1),
                                createVNode(VBtn, {
                                  to: { name: unref(RouteName).Products, query: { mode: unref(PaymentMode).Manual } },
                                  variant: "flat",
                                  class: "mt-6 text-white",
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
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
