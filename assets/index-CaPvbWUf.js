import { c as createVueComponent, k as genericComponent, b as createVNode, B as mergeProps, au as Transition, p as propsFactory, d as defineComponent, aw as useCartStore, ab as storeToRefs, o as openBlock, a as createBlock, w as withCtx, e as createBaseVNode, t as toDisplayString, u as unref, P as PaymentMode, s as computed, ac as onMounted, ad as createElementBlock, af as createCommentVNode, F as Fragment, ae as renderList, ax as VImg, V as VBtn, R as RouteName, f as createTextVNode, aB as VBtnToggle, aC as Storage, m as makeComponentProps, D as ref, A as useRender, I as IconValue, ak as makeDisplayProps, i as makeTagProps, H as makeGroupProps, am as useRtl, an as useDisplay, J as useGroup, y as shallowRef, aD as useResizeObserver, aE as IN_BROWSER, ah as watch, aF as VFadeTransition, W as VIcon, aG as focusableChildren, v as clamp, aH as deepEqual, j as makeThemeProps, aI as makeVariantProps, q as provideTheme, K as provideDefaults, L as toRef, aJ as EventProp, a2 as makeBorderProps, g as makeDensityProps, X as makeElevationProps, Y as makeGroupItemProps, Z as makeRoundedProps, aK as makeRouterProps, h as makeSizeProps, S as Ripple, l as useLocale, a6 as useBorder, aL as useVariant, aM as useDensity, $ as useElevation, a0 as useRounded, aN as useSize, r as useProxiedModel, _ as useGroupItem, aO as useLink, N as withDirectives, U as resolveDirective, aP as genOverlays, aQ as VExpandXTransition, aR as VDefaultsProvider, O as vShow, M as inject, a1 as provide, aS as toRaw, ai as onBeforeUnmount, aT as getCurrentInstance, z as getUid, aU as defineComponent$1, ap as useSsrBoot, aV as MaybeTransition, Q as VExpandTransition, a3 as makeDimensionProps, a7 as useDimension, aW as deprecate, aX as useTextColor, aY as getPropertyFromItem, C as omit, T as useBackgroundColor, aZ as focusChild, av as nextTick, a_ as getNextElement, a$ as watchEffect, b0 as onScopeDispose, b1 as debounce, ar as useToggleScope, ag as convertToUnit, b2 as makeTransitionProps, b3 as wrapInArray, b4 as ensureValidVNode, b5 as matchesSelector, b6 as useI18n, n as normalizeClass, b7 as withModifiers, E as defineStore, b8 as isRef, b9 as makeVBtnProps, ba as isObject, bb as keys, bc as createSlots } from "./index-DSl-8azQ.js";
import { a as asCurrency, j as VTextField, i as VDivider, k as imageEmpty, l as makeFormProps, n as createForm, o as makeVTextFieldProps, p as useForm, c as VCheckboxBtn, I as IconBasket } from "./VTextField-TWJCBqjZ.js";
import { a as VCardItem, V as VCard, c as VAvatar, d as createSimpleFunctional, b as VCardText } from "./VCard-tA0e8f82.js";
import { V as VTable } from "./VTable-CIpy5k8j.js";
import { a as VRow, V as VCol } from "./VRow-BWj4yJbd.js";
import { c as animate, d as deceleratedEasing, s as standardEasing, e as acceleratedEasing, g as getTargetBox, n as nullifyTransforms, f as forwardRefs, m as makeVOverlayProps, u as useScopeId, h as VMenuSymbol, V as VOverlay, i as getScrollParent, a as makeLazyProps, b as useLazy } from "./forwardRefs-CeyhghAF.js";
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconChevronLeft = createVueComponent("outline", "chevron-left", "IconChevronLeft", [["path", { "d": "M15 6l-6 6l6 6", "key": "svg-0" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconChevronRight = createVueComponent("outline", "chevron-right", "IconChevronRight", [["path", { "d": "M9 6l6 6l-6 6", "key": "svg-0" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconFileDescription = createVueComponent("outline", "file-description", "IconFileDescription", [["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4", "key": "svg-0" }], ["path", { "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z", "key": "svg-1" }], ["path", { "d": "M9 17h6", "key": "svg-2" }], ["path", { "d": "M9 13h6", "key": "svg-3" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconMinus = createVueComponent("outline", "minus", "IconMinus", [["path", { "d": "M5 12l14 0", "key": "svg-0" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconPlus = createVueComponent("outline", "plus", "IconPlus", [["path", { "d": "M12 5l0 14", "key": "svg-0" }], ["path", { "d": "M5 12l14 0", "key": "svg-1" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconTrash = createVueComponent("outline", "trash", "IconTrash", [["path", { "d": "M4 7l16 0", "key": "svg-0" }], ["path", { "d": "M10 11l0 6", "key": "svg-1" }], ["path", { "d": "M14 11l0 6", "key": "svg-2" }], ["path", { "d": "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", "key": "svg-3" }], ["path", { "d": "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", "key": "svg-4" }]]);
const makeVDialogTransitionProps = propsFactory({
  target: [Object, Array]
}, "v-dialog-transition");
const VDialogTransition = genericComponent()({
  name: "VDialogTransition",
  props: makeVDialogTransitionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
      },
      async onEnter(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
        el.style.visibility = "";
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }, {}], {
          duration: 225 * speed,
          easing: deceleratedEasing
        });
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * speed,
            easing: standardEasing
          });
        });
        animation.finished.then(() => done());
      },
      onAfterEnter(el) {
        el.style.removeProperty("pointer-events");
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = "none";
      },
      async onLeave(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{}, {
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }], {
          duration: 125 * speed,
          easing: acceleratedEasing
        });
        animation.finished.then(() => done());
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * speed,
            easing: standardEasing
          });
        });
      },
      onAfterLeave(el) {
        el.style.removeProperty("pointer-events");
      }
    };
    return () => {
      return props.target ? createVNode(Transition, mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : createVNode(Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});
function getChildren(el) {
  var _a;
  const els = (_a = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = getTargetBox(target);
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === "left" || anchorOffset === "left") {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === "right" || anchorOffset === "right") {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === "top" || anchorOffset === "top") {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;
  const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}
const _hoisted_1$5 = { class: "text-h5 mb-6" };
const _hoisted_2$5 = { class: "d-flex align-center justify-space-between my-5" };
const _hoisted_3$4 = { class: "text-h6 font-weight-regular" };
const _hoisted_4$3 = { class: "font-weight-semibold text-h6" };
const _hoisted_5$3 = { class: "d-flex align-center justify-space-between my-5" };
const _hoisted_6$3 = { class: "text-h6 font-weight-regular" };
const _hoisted_7$3 = { class: "font-weight-semibold text-h6 text-error" };
const _hoisted_8$3 = { class: "d-flex align-center justify-space-between my-5" };
const _hoisted_9$2 = { class: "text-h6" };
const _hoisted_10$2 = { class: "font-weight-semibold text-h5" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "OrderSummary",
  setup(__props) {
    const cartStore = useCartStore();
    const { total, subTotal, discount } = storeToRefs(cartStore);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VCard, {
        variant: "outlined",
        class: "my-3"
      }, {
        default: withCtx(() => [
          createVNode(VCardItem, null, {
            default: withCtx(() => [
              createBaseVNode("h5", _hoisted_1$5, toDisplayString(_ctx.$t("text.order.summary")), 1),
              createBaseVNode("div", _hoisted_2$5, [
                createBaseVNode("h6", _hoisted_3$4, toDisplayString(_ctx.$t("text.sub.total")), 1),
                createBaseVNode("h6", _hoisted_4$3, toDisplayString(unref(asCurrency)(unref(subTotal))) + " UAH", 1)
              ]),
              createBaseVNode("div", _hoisted_5$3, [
                createBaseVNode("h6", _hoisted_6$3, toDisplayString(_ctx.$t("text.discount")) + " 5%", 1),
                createBaseVNode("h6", _hoisted_7$3, "- " + toDisplayString(unref(asCurrency)(unref(discount))) + " UAH", 1)
              ]),
              createBaseVNode("div", _hoisted_8$3, [
                createBaseVNode("h6", _hoisted_9$2, toDisplayString(_ctx.$t("text.total")), 1),
                createBaseVNode("h6", _hoisted_10$2, toDisplayString(unref(asCurrency)(unref(total))) + " UAH", 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$4 = { key: 0 };
const _hoisted_2$4 = { class: "text-h5 my-8" };
const _hoisted_3$3 = { class: "text-left text-subtitle-1 font-weight-semibold" };
const _hoisted_4$2 = { class: "text-left text-subtitle-1 font-weight-semibold" };
const _hoisted_5$2 = { class: "text-left text-subtitle-1 font-weight-semibold" };
const _hoisted_6$2 = { class: "text-left text-subtitle-1 font-weight-semibold" };
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("th", {
  class: "text-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_8$2 = { class: "d-flex flex-wrap align-center my-3 gap-2" };
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = { class: "ma-2" };
const _hoisted_11 = { class: "text-h6" };
const _hoisted_12 = { class: "text-subtitle-2" };
const _hoisted_13 = { class: "text-h5" };
const _hoisted_14 = { class: "text-decoration-line-through text-medium-emphasis" };
const _hoisted_15 = { class: "text-h5" };
const _hoisted_16 = { class: "text-right" };
const _hoisted_17 = {
  key: 1,
  class: "d-flex justify-center"
};
const _hoisted_18 = { class: "text-h5" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StepFirst",
  props: {
    mode: {
      type: String,
      required: false,
      default: PaymentMode.Redirect
    }
  },
  setup(__props) {
    const cartStore = useCartStore();
    const { selectedProducts, paymentDescription } = storeToRefs(cartStore);
    const productsComputed = computed(() => {
      return Array.from(selectedProducts.value.values());
    });
    const removeItemFromCart = (id) => {
      cartStore.removeProductFromCart(id);
    };
    const paymentDescriptionComputed = computed({
      get() {
        return paymentDescription.value;
      },
      set(value) {
        cartStore.$patch({
          paymentDescription: value
        });
      }
    });
    onMounted(() => {
      const titles = productsComputed.value.map((product) => product.name);
      paymentDescriptionComputed.value = `Payment for: ${titles.join(", ")}`;
    });
    return (_ctx, _cache) => {
      return unref(selectedProducts).size > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("h5", _hoisted_2$4, toDisplayString(_ctx.$t("text.item.cart")) + " (" + toDisplayString(unref(selectedProducts).size) + ")", 1),
        createVNode(VDivider),
        createVNode(VTable, null, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", _hoisted_3$3, toDisplayString(_ctx.$t("text.product")), 1),
                createBaseVNode("th", _hoisted_4$2, toDisplayString(_ctx.$t("text.price")), 1),
                createBaseVNode("th", _hoisted_5$2, toDisplayString(_ctx.$t("text.quantity")), 1),
                createBaseVNode("th", _hoisted_6$2, toDisplayString(_ctx.$t("text.total")), 1),
                _hoisted_7$2
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(productsComputed.value, (item) => {
                return openBlock(), createElementBlock("tr", {
                  key: item.id
                }, [
                  createBaseVNode("td", null, [
                    createBaseVNode("div", _hoisted_8$2, [
                      createBaseVNode("img", {
                        alt: "product",
                        class: "rounded-md custom-img-box",
                        src: item.image
                      }, null, 8, _hoisted_9$1),
                      createBaseVNode("div", _hoisted_10$1, [
                        createBaseVNode("h6", _hoisted_11, toDisplayString(item.name), 1),
                        createBaseVNode("span", _hoisted_12, toDisplayString(item.description), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("td", null, [
                    createBaseVNode("h4", _hoisted_13, toDisplayString(unref(asCurrency)(item.offerPrice)), 1),
                    createBaseVNode("p", _hoisted_14, "$" + toDisplayString(unref(asCurrency)(item.price)), 1)
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(VBtnToggle, {
                      variant: "outlined",
                      divided: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          size: "x-small",
                          onClick: ($event) => unref(cartStore).decrementQuantity(item.id),
                          disabled: item.quantity < 2
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IconMinus), { size: "18" })
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"]),
                        createVNode(VBtn, { size: "x-small" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.quantity), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VBtn, {
                          size: "x-small",
                          onClick: ($event) => unref(cartStore).incrementQuantity(item.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IconPlus), { size: "18" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createBaseVNode("td", _hoisted_15, toDisplayString(unref(asCurrency)(item.offerPrice * item.quantity)) + " UAH", 1),
                  createBaseVNode("td", _hoisted_16, [
                    createVNode(VBtn, {
                      small: "",
                      icon: "",
                      flat: "",
                      elevation: "0",
                      onClick: ($event) => removeItemFromCart(item.id)
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IconTrash), {
                          size: "18",
                          class: "text-error"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ]),
          _: 1
        }),
        __props.mode !== unref(PaymentMode).Manual ? (openBlock(), createBlock(VTextField, {
          key: 0,
          modelValue: paymentDescriptionComputed.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => paymentDescriptionComputed.value = $event),
          label: "Payment Description",
          variant: "outlined"
        }, null, 8, ["modelValue"])) : createCommentVNode("", true),
        createVNode(_sfc_main$5)
      ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
        createVNode(VRow, { class: "justify-center" }, {
          default: withCtx(() => [
            createVNode(VCol, {
              class: "text-center",
              lg: "6"
            }, {
              default: withCtx(() => [
                createVNode(VImg, {
                  src: unref(imageEmpty),
                  alt: "cover",
                  width: "300px",
                  class: "mx-auto mt-5"
                }, null, 8, ["src"]),
                createBaseVNode("h5", _hoisted_18, toDisplayString(_ctx.$t("text.cart.is.empty")), 1),
                createVNode(VBtn, {
                  class: "mt-3",
                  to: { name: unref(RouteName).Products, query: { ..._ctx.$route.query } },
                  variant: "flat",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("action.go.back.to.shopping")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]));
    };
  }
});
const rules = {
  minLength: (minLength) => (value) => value.length > minLength || "Value is too short",
  required: (value) => !!value || "Required"
};
class p {
  constructor(e) {
    const r = ["PaymentIframe", "PaymentModalIframe", "PaymentPage"];
    e.mode && r.includes(e.mode) ? this.mode = e.mode : this.mode = "PaymentPage", this.validateMerchantData(e.merchant), this.merchant = e.merchant, this.validateCustomerData(e.customer), this.customer = e.customer, this.validateIframeProps(e.iframeProps), this.iframeProps = e.iframeProps;
  }
  pay(e) {
    var s, a, l, d;
    const r = this.getPaymentForm(e);
    if (this.validatePaymentData(e), this.mode === "PaymentPage") {
      document.body.appendChild(r), r.submit();
      return;
    }
    const t = document.querySelector(((s = this.iframeProps) == null ? void 0 : s.wrapperSelector) || "body");
    if (!t)
      throw new Error("Iframe wrapper element not found");
    const n = document.querySelector(".upc-payment-iframe-wrapper");
    n && n.remove();
    const o = document.querySelector("#upc-payment-iframe");
    o && o.remove();
    const i = document.createElement("iframe");
    if (this.setMessageListener(), i.setAttribute("frameborder", "0"), i.style.width = "100%", i.style.height = "100%", i.style.minHeight = "500px", i.id = "upc-payment-iframe", this.mode === "PaymentIframe")
      t.appendChild(i);
    else {
      const m = this.getIframeWrapper();
      (a = m.querySelector("button")) == null || a.addEventListener("click", () => {
        m.remove();
      }), (l = m.querySelector("main")) == null || l.appendChild(i), document.body.appendChild(m);
    }
    (d = i.contentWindow) == null || d.document.body.appendChild(r), r.submit();
  }
  validateMerchantData(e) {
    if (typeof e.id != "string" || !e.id)
      throw new Error('Field "merchant.id" is required');
    if (typeof e.terminalId != "string" || !e.terminalId)
      throw new Error('Field "merchant.terminalId" is required');
    if (typeof e.signature != "string" || !e.signature)
      throw new Error('Field "merchant.signature" is required');
  }
  validateCustomerData(e) {
    if (e) {
      if (e.email && typeof e.email != "string")
        throw new Error('Field "customer.email" is invalid');
      if (e.phoneCountryCode && typeof e.phoneCountryCode != "string")
        throw new Error('Field "customer.phoneCountryCode" is invalid');
      if (e.phoneNumber && typeof e.phoneNumber != "string")
        throw new Error('Field "customer.phoneNumber" is invalid');
      if (e.firstName && typeof e.firstName != "string")
        throw new Error('Field "customer.firstName" is invalid');
      if (e.lastName && typeof e.lastName != "string")
        throw new Error('Field "customer.lastName" is invalid');
    }
  }
  validateIframeProps(e) {
    if (e) {
      if (e.wrapperSelector) {
        if (typeof e.wrapperSelector != "string")
          throw new Error('Field "iframeProps.wrapperSelector" is invalid');
        if (!document.querySelector(e.wrapperSelector))
          throw new Error("Wrapper element not found");
      }
      if (e.callback && typeof e.callback != "function")
        throw new Error('Field "iframeProps.callback" is invalid');
    }
  }
  validatePaymentData(e) {
    if (e.altTotalAmountCents) {
      if (typeof e.altTotalAmountCents != "number")
        throw new Error('Field "payment.altTotalAmountCents" is invalid');
      if (Number.isNaN(e.altTotalAmountCents))
        throw new Error('Field "payment.altTotalAmountCents" is invalid');
    }
    if (e.altCurrencyNumericCode && typeof e.altCurrencyNumericCode != "string")
      throw new Error('Field "payment.altCurrencyNumericCode" is invalid');
    if (e.altFeeCents && typeof e.altFeeCents != "number")
      throw new Error('Field "payment.altFeeCents" is invalid');
    if (typeof e.currencyNumericCode != "string" || !e.currencyNumericCode)
      throw new Error('Field "payment.currencyNumericCode" is invalid');
    if (e.delay) {
      if (typeof e.delay != "number")
        throw new Error('Field "payment.delay" is invalid');
      if (Number.isNaN(e.delay))
        throw new Error('Field "payment.delay" is invalid');
    }
    if (typeof e.description != "string" || !e.description)
      throw new Error('Field "payment.description" is invalid');
    if (e.feeCents && typeof e.feeCents != "number")
      throw new Error('Field "payment.feeCents" is invalid');
    if (e.locale && typeof e.locale != "string")
      throw new Error('Field "payment.locale" is invalid');
    if (typeof e.orderId != "string" || !e.orderId)
      throw new Error('Field "payment.orderId" is invalid');
    if (!e.purchaseTime)
      throw new Error('Field "payment.purchaseTime" is invalid');
    if (e.token && typeof e.token != "string")
      throw new Error('Field "payment.token" is invalid');
    if (typeof e.totalAmountCents != "number" || !e.totalAmountCents)
      throw new Error("Payment totalAmountCents is invalid");
    if (e.url && typeof e.url != "string")
      throw new Error("Payment locale is invalid");
  }
  getInputEl(e, r) {
    const t = document.createElement("input");
    return t.setAttribute("type", "hidden"), t.setAttribute("name", e), t.setAttribute("value", r), t;
  }
  getPaymentForm(e) {
    var o, i, s, a, l;
    const r = e.url || "https://ecg.test.upc.ua/go/pay", t = document.createElement("form");
    t.setAttribute("action", r), t.setAttribute("method", "POST"), t.style.visibility = "hidden", this.mode === "PaymentPage" && t.setAttribute("target", "_blank");
    const n = document.createElement("meta");
    return n.setAttribute("http-equiv", "Content-Type"), n.setAttribute("content", "text/html; charset=utf-8"), t.appendChild(n), t.appendChild(this.getInputEl("MerchantID", this.merchant.id)), t.appendChild(this.getInputEl("TerminalID", this.merchant.terminalId)), t.appendChild(this.getInputEl("Signature", this.merchant.signature)), e.altTotalAmountCents && t.appendChild(this.getInputEl("AltTotalAmount", e.altTotalAmountCents.toString())), e.altCurrencyNumericCode && t.appendChild(this.getInputEl("AltCurrency", e.altCurrencyNumericCode)), e.altFeeCents && t.appendChild(this.getInputEl("AltFee", e.altFeeCents.toString())), t.appendChild(this.getInputEl("Currency", e.currencyNumericCode)), e.delay && t.appendChild(this.getInputEl("delay", e.delay.toString())), t.appendChild(this.getInputEl("PurchaseDesc", e.description)), e.feeCents && t.appendChild(this.getInputEl("Fee", e.feeCents.toString())), e.locale && t.appendChild(this.getInputEl("locale", e.locale)), t.appendChild(this.getInputEl("OrderID", e.orderId)), t.appendChild(this.getInputEl("PurchaseTime", String(e.purchaseTime))), e.token && t.appendChild(this.getInputEl("UPCToken", e.token)), t.appendChild(this.getInputEl("TotalAmount", e.totalAmountCents.toString())), (o = this.customer) != null && o.email && t.appendChild(this.getInputEl("email", this.customer.email)), (i = this.customer) != null && i.phoneCountryCode && t.appendChild(this.getInputEl("phoneCountryCode", this.customer.phoneCountryCode)), (s = this.customer) != null && s.phoneNumber && t.appendChild(this.getInputEl("phoneNumber", this.customer.phoneNumber)), (a = this.customer) != null && a.firstName && t.appendChild(this.getInputEl("consumerFirstName", this.customer.firstName)), (l = this.customer) != null && l.lastName && t.appendChild(this.getInputEl("consumerLastName", this.customer.lastName)), t;
  }
  setMessageListener() {
    const e = (r) => {
      var i;
      if (r.data.from !== "UpcPaymentIframe")
        return;
      let n = () => {
      };
      typeof ((i = this.iframeProps) == null ? void 0 : i.callback) == "function" && (n = this.iframeProps.callback);
      const o = r.data.message;
      switch (o) {
        case "AppLoaded":
          n({
            event: "loaded",
            data: {
              height: r.data.height,
              width: r.data.width
            }
          });
          break;
        case "Failure":
          n({
            event: "failure",
            data: {
              height: r.data.height,
              width: r.data.width
            }
          });
          break;
        case "Success":
          n({
            event: "success",
            data: {
              height: r.data.height,
              width: r.data.width
            }
          });
          break;
        case "GoBackToSite":
          n({
            event: "go-back",
            data: {
              height: r.data.height,
              width: r.data.width
            }
          });
          break;
        case "TryAgain":
          n({
            event: "try-again",
            data: {
              height: r.data.height,
              width: r.data.width
            }
          });
          break;
        default:
          console.error(`Unknown message from iframe ${o}`);
          break;
      }
    };
    window.removeEventListener("message", e), window.addEventListener("message", e);
  }
  getIframeWrapper() {
    const e = document.createElement("div");
    return e.classList.add("upc-payment-iframe-wrapper"), e.style.cssText = `
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;

    `, e.innerHTML = `
      <main
        style="
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          position: relative;
          width: 80%;
          max-width: 500px;
        "
      >
        <button
          style="
            position: absolute;
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            background-color: transparent;
            border: none;
            cursor: pointer;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#312F2F"
          >
            <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
          </svg>
        </button>
      </main>
    `, e;
  }
}
const currencyNumericCode = "980";
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var literal = /\[([^]*?)\]/gm;
function shorten(arr, sLen) {
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }
  return newArr;
}
function assign(origObj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var obj = args_1[_a];
    for (var key in obj) {
      origObj[key] = obj[key];
    }
  }
  return origObj;
}
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
var defaultI18n = {
  dayNamesShort,
  dayNames,
  monthNamesShort,
  monthNames,
  amPm: ["am", "pm"],
  DoFn: function(dayOfMonth) {
    return dayOfMonth + ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3 ? 0 : (dayOfMonth - dayOfMonth % 10 !== 10 ? 1 : 0) * dayOfMonth % 10];
  }
};
var globalI18n = assign({}, defaultI18n);
var pad = function(val, len) {
  if (len === void 0) {
    len = 2;
  }
  val = String(val);
  while (val.length < len) {
    val = "0" + val;
  }
  return val;
};
var formatFlags = {
  D: function(dateObj) {
    return String(dateObj.getDate());
  },
  DD: function(dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function(dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function(dateObj) {
    return String(dateObj.getDay());
  },
  dd: function(dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function(dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function(dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function(dateObj) {
    return String(dateObj.getMonth() + 1);
  },
  MM: function(dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function(dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function(dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function(dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function(dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function(dateObj) {
    return String(dateObj.getHours() % 12 || 12);
  },
  hh: function(dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function(dateObj) {
    return String(dateObj.getHours());
  },
  HH: function(dateObj) {
    return pad(dateObj.getHours());
  },
  m: function(dateObj) {
    return String(dateObj.getMinutes());
  },
  mm: function(dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function(dateObj) {
    return String(dateObj.getSeconds());
  },
  ss: function(dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function(dateObj) {
    return String(Math.round(dateObj.getMilliseconds() / 100));
  },
  SS: function(dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function(dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function(dateObj) {
    var offset = dateObj.getTimezoneOffset();
    return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60) * 100 + Math.abs(offset) % 60, 4);
  },
  Z: function(dateObj) {
    var offset = dateObj.getTimezoneOffset();
    return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + ":" + pad(Math.abs(offset) % 60, 2);
  }
};
var globalMasks = {
  default: "ddd MMM DD YYYY HH:mm:ss",
  shortDate: "M/D/YY",
  mediumDate: "MMM D, YYYY",
  longDate: "MMMM D, YYYY",
  fullDate: "dddd, MMMM D, YYYY",
  isoDate: "YYYY-MM-DD",
  isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
  shortTime: "HH:mm",
  mediumTime: "HH:mm:ss",
  longTime: "HH:mm:ss.SSS"
};
var format = function(dateObj, mask, i18n) {
  if (mask === void 0) {
    mask = globalMasks["default"];
  }
  if (i18n === void 0) {
    i18n = {};
  }
  if (typeof dateObj === "number") {
    dateObj = new Date(dateObj);
  }
  if (Object.prototype.toString.call(dateObj) !== "[object Date]" || isNaN(dateObj.getTime())) {
    throw new Error("Invalid Date pass to format");
  }
  mask = globalMasks[mask] || mask;
  var literals = [];
  mask = mask.replace(literal, function($0, $1) {
    literals.push($1);
    return "@@@";
  });
  var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
  mask = mask.replace(token, function($0) {
    return formatFlags[$0](dateObj, combinedI18nSettings);
  });
  return mask.replace(/@@@/g, function() {
    return literals.shift();
  });
};
const getPurchaseTime = () => {
  return format(/* @__PURE__ */ new Date(), "YYMMDDHHmmss");
};
const merchantData = {
  id: "1753545",
  terminalId: "E7881545",
  signature: "Signature"
};
const getNumberOrUndefined = (value) => {
  try {
    if (typeof value === "string") {
      const numberValue = parseFloat(value);
      if (isNaN(numberValue)) {
        return void 0;
      }
      return numberValue;
    }
    return value;
  } catch (error) {
    return void 0;
  }
};
const iframeCallback$2 = (callbackData, mode) => {
  const { data: { height } } = callbackData;
  if (mode === PaymentMode.BuiltInIframe) {
    const wrapper = document.querySelector("#payment-wrapper");
    if (wrapper) {
      wrapper.style.height = `${height + 40}px`;
    }
    return;
  }
  if (mode === PaymentMode.ModalIframe) {
    const wrapper = document.querySelector("#payment-wrapper");
    if (wrapper) {
      wrapper.style.height = "auto";
    }
    const iframe = document.querySelector("#upc-payment-iframe");
    if (iframe) {
      iframe.style.height = `${height + 40}px`;
    }
  }
};
const getUPCPaymentModeFromRequestBean = (requestBean) => {
  switch (requestBean.mode) {
    case PaymentMode.BuiltInIframe:
      return "PaymentIframe";
    case PaymentMode.ModalIframe:
      return "PaymentModalIframe";
    default:
      return "PaymentPage";
  }
};
const submitPaymentManual = (requestBean) => {
  const cartStore = useCartStore();
  const { total } = storeToRefs(cartStore);
  const mode = getUPCPaymentModeFromRequestBean(requestBean);
  const payment = new p({
    mode,
    merchant: {
      id: requestBean.merchantId || merchantData.id,
      terminalId: requestBean.merchantTerminalId || merchantData.terminalId,
      signature: requestBean.merchantSignature || merchantData.signature
    },
    customer: {
      email: requestBean.customerEmail || void 0,
      firstName: requestBean.customerFirstName || void 0,
      lastName: requestBean.customerLastName || void 0,
      phoneCountryCode: requestBean.customerPhoneCode || void 0,
      phoneNumber: requestBean.customerPhone || void 0
    },
    iframeProps: {
      wrapperSelector: "#payment-wrapper",
      callback: (data) => iframeCallback$2(data, mode === "PaymentIframe" ? PaymentMode.BuiltInIframe : PaymentMode.ModalIframe)
    }
  });
  payment.pay({
    altCurrencyNumericCode: requestBean.altCurrencyNumericCode || void 0,
    altFeeCents: getNumberOrUndefined(requestBean.altFeeCents) || void 0,
    altTotalAmountCents: getNumberOrUndefined(requestBean.altTotalAmountCents) || void 0,
    currencyNumericCode: requestBean.currencyNumericCode || currencyNumericCode,
    delay: getNumberOrUndefined(requestBean.delay) || void 0,
    description: requestBean.description || "Payment description",
    feeCents: getNumberOrUndefined(requestBean.feeCents) || void 0,
    locale: requestBean.locale || "en",
    orderId: requestBean.orderId || Date.now().toString(),
    purchaseTime: requestBean.purchaseTime || getPurchaseTime(),
    token: requestBean.token || "",
    totalAmountCents: getNumberOrUndefined(requestBean.totalAmountCents) || total.value,
    url: requestBean.url || ""
  });
};
const getUniqueId = () => {
  return Date.now() + Math.floor(Math.random() * 9e3) + 1e3;
};
const getRequestBeansDefault = () => {
  const testData1 = {
    altCurrencyNumericCode: "840",
    altFeeCents: 11,
    altTotalAmountCents: 101,
    currencyNumericCode: "980",
    customerEmail: "",
    customerFirstName: "",
    customerLastName: "",
    customerPhone: "",
    customerPhoneCode: "",
    delay: 0,
    description: "",
    feeCents: 10,
    id: getUniqueId(),
    label: "TEST FORM #1",
    locale: "en",
    merchantId: "1753545",
    merchantSignature: "Signature",
    merchantTerminalId: "E7881545",
    mode: PaymentMode.Redirect,
    orderId: Date.now().toString(),
    purchaseTime: "20241210125959",
    token: "",
    totalAmountCents: 100,
    url: "https://ecg.test.upc.ua/go/pay"
  };
  const testData2 = {
    altCurrencyNumericCode: "840",
    altFeeCents: 100,
    altTotalAmountCents: 100,
    currencyNumericCode: "980",
    customerEmail: "",
    customerFirstName: "",
    customerLastName: "",
    customerPhone: "",
    customerPhoneCode: "",
    delay: 0,
    description: "Description",
    feeCents: 10,
    id: getUniqueId(),
    label: "Custom form №2",
    locale: "en",
    merchantId: "1753545",
    merchantSignature: "merchantSignature",
    merchantTerminalId: "E7881545",
    mode: PaymentMode.ModalIframe,
    orderId: Date.now().toString(),
    purchaseTime: "20241210125959",
    token: "",
    totalAmountCents: 100,
    url: "https://ecg.test.upc.ua/go/pay"
  };
  return [testData1, testData2];
};
const fetchRequestBeans = () => {
  const values = Storage.requestBeans.getValue();
  if (values.length) {
    return values;
  }
  const valuesDefault = getRequestBeansDefault();
  Storage.requestBeans.setValue(valuesDefault);
  return valuesDefault;
};
const deleteRequestBean = (id) => {
  const requestBeans = fetchRequestBeans().filter((item) => item.id !== id);
  Storage.requestBeans.setValue(requestBeans);
  return requestBeans;
};
const createRequestBean = () => {
  const requestBean = {
    altCurrencyNumericCode: "",
    altFeeCents: 0,
    altTotalAmountCents: 0,
    currencyNumericCode: "",
    customerEmail: "",
    customerFirstName: "",
    customerLastName: "",
    customerPhone: "",
    customerPhoneCode: "",
    delay: 0,
    description: "",
    feeCents: 10,
    id: NaN,
    label: "",
    locale: "",
    merchantId: "",
    merchantSignature: "",
    merchantTerminalId: "",
    mode: PaymentMode.Redirect,
    orderId: Date.now().toString(),
    purchaseTime: "",
    token: "",
    totalAmountCents: 100,
    url: "https://ecg.test.upc.ua/go/pay"
  };
  return requestBean;
};
const updateRequestBean = (value) => {
  const itemToSave = {
    altCurrencyNumericCode: value.altCurrencyNumericCode || "",
    altFeeCents: value.altFeeCents || 0,
    altTotalAmountCents: value.altTotalAmountCents || 0,
    currencyNumericCode: value.currencyNumericCode || "",
    customerEmail: "",
    customerFirstName: "",
    customerLastName: "",
    customerPhone: "",
    customerPhoneCode: "",
    delay: value.delay || 0,
    description: value.description || "",
    feeCents: value.feeCents || 0,
    id: value.id || getUniqueId(),
    label: value.label || "",
    locale: value.locale || "",
    merchantId: value.merchantId || "",
    merchantSignature: value.merchantSignature || "",
    merchantTerminalId: value.merchantTerminalId || "",
    mode: value.mode || "PaymentPage",
    orderId: value.orderId || Date.now().toString(),
    purchaseTime: value.purchaseTime || "",
    token: value.token || "",
    totalAmountCents: value.totalAmountCents || 0,
    url: value.url || "https://ecg.test.upc.ua/go/pay"
  };
  let beans = fetchRequestBeans();
  const itemIndex = beans.findIndex((item) => item.id === itemToSave.id);
  if (itemIndex === -1) {
    beans = [...beans, itemToSave];
  } else {
    beans = beans.map((item) => item.id === itemToSave.id ? itemToSave : item);
  }
  Storage.requestBeans.setValue(beans);
  return beans;
};
const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createVNode("form", {
        "ref": formRef,
        "class": ["v-form", props.class],
        "style": props.style,
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});
function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}
function calculateUpdatedOffset(_ref) {
  let {
    selectedElement,
    containerSize,
    contentSize,
    isRtl,
    currentScrollOffset,
    isHorizontal
  } = _ref;
  const clientSize = isHorizontal ? selectedElement.clientWidth : selectedElement.clientHeight;
  const offsetStart = isHorizontal ? selectedElement.offsetLeft : selectedElement.offsetTop;
  const adjustedOffsetStart = isRtl && isHorizontal ? contentSize - offsetStart - clientSize : offsetStart;
  const totalSize = containerSize + currentScrollOffset;
  const itemOffset = clientSize + adjustedOffsetStart;
  const additionalOffset = clientSize * 0.4;
  if (adjustedOffsetStart <= currentScrollOffset) {
    currentScrollOffset = Math.max(adjustedOffsetStart - additionalOffset, 0);
  } else if (totalSize <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalSize - itemOffset - additionalOffset), contentSize - containerSize);
  }
  return currentScrollOffset;
}
function calculateCenteredOffset(_ref2) {
  let {
    selectedElement,
    containerSize,
    contentSize,
    isRtl,
    isHorizontal
  } = _ref2;
  const clientSize = isHorizontal ? selectedElement.clientWidth : selectedElement.clientHeight;
  const offsetStart = isHorizontal ? selectedElement.offsetLeft : selectedElement.offsetTop;
  const offsetCentered = isRtl && isHorizontal ? contentSize - offsetStart - clientSize / 2 - containerSize / 2 : offsetStart + clientSize / 2 - containerSize / 2;
  return Math.min(contentSize - containerSize, Math.max(0, offsetCentered));
}
const VSlideGroupSymbol = Symbol.for("vuetify:v-slide-group");
const makeVSlideGroupProps = propsFactory({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: VSlideGroupSymbol
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || ["always", "desktop", "mobile"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDisplayProps(),
  ...makeTagProps(),
  ...makeGroupProps({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup");
const VSlideGroup = genericComponent()({
  name: "VSlideGroup",
  props: makeVSlideGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const group = useGroup(props, props.symbol);
    const isOverflowing = shallowRef(false);
    const scrollOffset = shallowRef(0);
    const containerSize = shallowRef(0);
    const contentSize = shallowRef(0);
    const isHorizontal = computed(() => props.direction === "horizontal");
    const {
      resizeRef: containerRef,
      contentRect: containerRect
    } = useResizeObserver();
    const {
      resizeRef: contentRef,
      contentRect
    } = useResizeObserver();
    const firstSelectedIndex = computed(() => {
      if (!group.selected.value.length) return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[0]);
    });
    const lastSelectedIndex = computed(() => {
      if (!group.selected.value.length) return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[group.selected.value.length - 1]);
    });
    if (IN_BROWSER) {
      let frame = -1;
      watch(() => [group.selected.value, containerRect.value, contentRect.value, isHorizontal.value], () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          if (containerRect.value && contentRect.value) {
            const sizeProperty = isHorizontal.value ? "width" : "height";
            containerSize.value = containerRect.value[sizeProperty];
            contentSize.value = contentRect.value[sizeProperty];
            isOverflowing.value = containerSize.value + 1 < contentSize.value;
          }
          if (firstSelectedIndex.value >= 0 && contentRef.value) {
            const selectedElement = contentRef.value.children[lastSelectedIndex.value];
            if (firstSelectedIndex.value === 0 || !isOverflowing.value) {
              scrollOffset.value = 0;
            } else if (props.centerActive) {
              scrollOffset.value = calculateCenteredOffset({
                selectedElement,
                containerSize: containerSize.value,
                contentSize: contentSize.value,
                isRtl: isRtl.value,
                isHorizontal: isHorizontal.value
              });
            } else if (isOverflowing.value) {
              scrollOffset.value = calculateUpdatedOffset({
                selectedElement,
                containerSize: containerSize.value,
                contentSize: contentSize.value,
                isRtl: isRtl.value,
                currentScrollOffset: scrollOffset.value,
                isHorizontal: isHorizontal.value
              });
            }
          }
        });
      });
    }
    const disableTransition = shallowRef(false);
    let startTouch = 0;
    let startOffset = 0;
    function onTouchstart(e) {
      const sizeProperty = isHorizontal.value ? "clientX" : "clientY";
      const sign = isRtl.value && isHorizontal.value ? -1 : 1;
      startOffset = sign * scrollOffset.value;
      startTouch = e.touches[0][sizeProperty];
      disableTransition.value = true;
    }
    function onTouchmove(e) {
      if (!isOverflowing.value) return;
      const sizeProperty = isHorizontal.value ? "clientX" : "clientY";
      const sign = isRtl.value && isHorizontal.value ? -1 : 1;
      scrollOffset.value = sign * (startOffset + startTouch - e.touches[0][sizeProperty]);
    }
    function onTouchend(e) {
      const maxScrollOffset = contentSize.value - containerSize.value;
      if (scrollOffset.value < 0 || !isOverflowing.value) {
        scrollOffset.value = 0;
      } else if (scrollOffset.value >= maxScrollOffset) {
        scrollOffset.value = maxScrollOffset;
      }
      disableTransition.value = false;
    }
    function onScroll() {
      if (!containerRef.value) return;
      containerRef.value[isHorizontal.value ? "scrollLeft" : "scrollTop"] = 0;
    }
    const isFocused = shallowRef(false);
    function onFocusin(e) {
      isFocused.value = true;
      if (!isOverflowing.value || !contentRef.value) return;
      for (const el of e.composedPath()) {
        for (const item of contentRef.value.children) {
          if (item === el) {
            scrollOffset.value = calculateUpdatedOffset({
              selectedElement: item,
              containerSize: containerSize.value,
              contentSize: contentSize.value,
              isRtl: isRtl.value,
              currentScrollOffset: scrollOffset.value,
              isHorizontal: isHorizontal.value
            });
            return;
          }
        }
      }
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      var _a;
      if (!isFocused.value && !(e.relatedTarget && ((_a = contentRef.value) == null ? void 0 : _a.contains(e.relatedTarget)))) focus();
    }
    function onKeydown(e) {
      if (!contentRef.value) return;
      if (isHorizontal.value) {
        if (e.key === "ArrowRight") {
          focus(isRtl.value ? "prev" : "next");
        } else if (e.key === "ArrowLeft") {
          focus(isRtl.value ? "next" : "prev");
        }
      } else {
        if (e.key === "ArrowDown") {
          focus("next");
        } else if (e.key === "ArrowUp") {
          focus("prev");
        }
      }
      if (e.key === "Home") {
        focus("first");
      } else if (e.key === "End") {
        focus("last");
      }
    }
    function focus(location) {
      var _a, _b, _c, _d, _e;
      if (!contentRef.value) return;
      if (!location) {
        const focusable = focusableChildren(contentRef.value);
        (_a = focusable[0]) == null ? void 0 : _a.focus();
      } else if (location === "next") {
        const el = (_b = contentRef.value.querySelector(":focus")) == null ? void 0 : _b.nextElementSibling;
        if (el) el.focus();
        else focus("first");
      } else if (location === "prev") {
        const el = (_c = contentRef.value.querySelector(":focus")) == null ? void 0 : _c.previousElementSibling;
        if (el) el.focus();
        else focus("last");
      } else if (location === "first") {
        (_d = contentRef.value.firstElementChild) == null ? void 0 : _d.focus();
      } else if (location === "last") {
        (_e = contentRef.value.lastElementChild) == null ? void 0 : _e.focus();
      }
    }
    function scrollTo(location) {
      const newAbsoluteOffset = scrollOffset.value + (location === "prev" ? -1 : 1) * containerSize.value;
      scrollOffset.value = clamp(newAbsoluteOffset, 0, contentSize.value - containerSize.value);
    }
    const contentStyles = computed(() => {
      let scrollAmount = scrollOffset.value > contentSize.value - containerSize.value ? -(contentSize.value - containerSize.value) + bias(contentSize.value - containerSize.value - scrollOffset.value) : -scrollOffset.value;
      if (scrollOffset.value <= 0) {
        scrollAmount = bias(-scrollOffset.value);
      }
      const sign = isRtl.value && isHorizontal.value ? -1 : 1;
      return {
        transform: `translate${isHorizontal.value ? "X" : "Y"}(${sign * scrollAmount}px)`,
        transition: disableTransition.value ? "none" : "",
        willChange: disableTransition.value ? "transform" : ""
      };
    });
    const slotProps = computed(() => ({
      next: group.next,
      prev: group.prev,
      select: group.select,
      isSelected: group.isSelected
    }));
    const hasAffixes = computed(() => {
      switch (props.showArrows) {
        case "always":
          return true;
        case "desktop":
          return !mobile.value;
        case true:
          return isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        case "mobile":
          return mobile.value || isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        default:
          return !mobile.value && (isOverflowing.value || Math.abs(scrollOffset.value) > 0);
      }
    });
    const hasPrev = computed(() => {
      return Math.abs(scrollOffset.value) > 0;
    });
    const hasNext = computed(() => {
      return contentSize.value > Math.abs(scrollOffset.value) + containerSize.value;
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-slide-group", {
        "v-slide-group--vertical": !isHorizontal.value,
        "v-slide-group--has-affixes": hasAffixes.value,
        "v-slide-group--is-overflowing": isOverflowing.value
      }, displayClasses.value, props.class],
      "style": props.style,
      "tabindex": isFocused.value || group.selected.value.length ? -1 : 0,
      "onFocus": onFocus
    }, {
      default: () => {
        var _a, _b, _c;
        return [hasAffixes.value && createVNode("div", {
          "key": "prev",
          "class": ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !hasPrev.value
          }],
          "onClick": () => hasPrev.value && scrollTo("prev")
        }, [((_a = slots.prev) == null ? void 0 : _a.call(slots, slotProps.value)) ?? createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.nextIcon : props.prevIcon
          }, null)]
        })]), createVNode("div", {
          "key": "container",
          "ref": containerRef,
          "class": "v-slide-group__container",
          "onScroll": onScroll
        }, [createVNode("div", {
          "ref": contentRef,
          "class": "v-slide-group__content",
          "style": contentStyles.value,
          "onTouchstartPassive": onTouchstart,
          "onTouchmovePassive": onTouchmove,
          "onTouchendPassive": onTouchend,
          "onFocusin": onFocusin,
          "onFocusout": onFocusout,
          "onKeydown": onKeydown
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)])]), hasAffixes.value && createVNode("div", {
          "key": "next",
          "class": ["v-slide-group__next", {
            "v-slide-group__next--disabled": !hasNext.value
          }],
          "onClick": () => hasNext.value && scrollTo("next")
        }, [((_c = slots.next) == null ? void 0 : _c.call(slots, slotProps.value)) ?? createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.prevIcon : props.nextIcon
          }, null)]
        })])];
      }
    }));
    return {
      selected: group.selected,
      scrollTo,
      scrollOffset,
      focus
    };
  }
});
const VChipGroupSymbol = Symbol.for("vuetify:v-chip-group");
const makeVChipGroupProps = propsFactory({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeVSlideGroupProps(),
  ...makeComponentProps(),
  ...makeGroupProps({
    selectedClass: "v-chip--selected"
  }),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChipGroup");
genericComponent()({
  name: "VChipGroup",
  props: makeVChipGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isSelected,
      select,
      next,
      prev,
      selected
    } = useGroup(props, VChipGroupSymbol);
    provideDefaults({
      VChip: {
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled"),
        filter: toRef(props, "filter"),
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      return createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "class": ["v-chip-group", {
          "v-chip-group--column": props.column
        }, themeClasses.value, props.class],
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            select,
            next,
            prev,
            selected: selected.value
          })];
        }
      });
    });
    return {};
  }
});
const makeVChipProps = propsFactory({
  activeClass: String,
  appendAvatar: String,
  appendIcon: IconValue,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "span"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChip");
const VChip = genericComponent()({
  name: "VChip",
  directives: {
    Ripple
  },
  props: makeVChipProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true,
    "group:selected": (val) => true,
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses
    } = useSize(props);
    const {
      themeClasses
    } = provideTheme(props);
    const isActive = useProxiedModel(props, "modelValue");
    const group = useGroupItem(props, VChipGroupSymbol, false);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        e.stopPropagation();
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    function onClick(e) {
      var _a;
      emit("click", e);
      if (!isClickable.value) return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    return () => {
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasClose = !!(slots.close || props.closable);
      const hasFilter = !!(slots.filter || props.filter) && group;
      const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasColor = !group || group.isSelected.value;
      return isActive.value && withDirectives(createVNode(Tag, {
        "class": ["v-chip", {
          "v-chip--disabled": props.disabled,
          "v-chip--label": props.label,
          "v-chip--link": isClickable.value,
          "v-chip--filter": hasFilter,
          "v-chip--pill": props.pill
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, group == null ? void 0 : group.selectedClass.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, props.style],
        "disabled": props.disabled || void 0,
        "draggable": props.draggable,
        "href": link.href.value,
        "tabindex": isClickable.value ? 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => {
          var _a;
          return [genOverlays(isClickable.value, "v-chip"), hasFilter && createVNode(VExpandXTransition, {
            "key": "filter"
          }, {
            default: () => [withDirectives(createVNode("div", {
              "class": "v-chip__filter"
            }, [!slots.filter ? createVNode(VIcon, {
              "key": "filter-icon",
              "icon": props.filterIcon
            }, null) : createVNode(VDefaultsProvider, {
              "key": "filter-defaults",
              "disabled": !props.filterIcon,
              "defaults": {
                VIcon: {
                  icon: props.filterIcon
                }
              }
            }, slots.filter)]), [[vShow, group.isSelected.value]])]
          }), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-chip__prepend"
          }, [!slots.prepend ? createVNode(Fragment, null, [props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon,
            "start": true
          }, null), props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "image": props.prependAvatar,
            "start": true
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                image: props.prependAvatar,
                start: true
              },
              VIcon: {
                icon: props.prependIcon,
                start: true
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-chip__content",
            "data-no-activator": ""
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected: group == null ? void 0 : group.isSelected.value,
            selectedClass: group == null ? void 0 : group.selectedClass.value,
            select: group == null ? void 0 : group.select,
            toggle: group == null ? void 0 : group.toggle,
            value: group == null ? void 0 : group.value.value,
            disabled: props.disabled
          })) ?? props.text]), hasAppend && createVNode("div", {
            "key": "append",
            "class": "v-chip__append"
          }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "end": true,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "end": true,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                end: true,
                image: props.appendAvatar
              },
              VIcon: {
                end: true,
                icon: props.appendIcon
              }
            }
          }, slots.append)]), hasClose && createVNode("button", mergeProps({
            "key": "close",
            "class": "v-chip__close",
            "type": "button"
          }, closeProps.value), [!slots.close ? createVNode(VIcon, {
            "key": "close-icon",
            "icon": props.closeIcon,
            "size": "x-small"
          }, null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VIcon: {
                icon: props.closeIcon,
                size: "x-small"
              }
            }
          }, slots.close)])];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple, null]]);
    };
  }
});
const ListKey = Symbol.for("vuetify:list");
function createList() {
  const parent = inject(ListKey, {
    hasPrepend: shallowRef(false),
    updateHasPrepend: () => null
  });
  const data = {
    hasPrepend: shallowRef(false),
    updateHasPrepend: (value) => {
      if (value) data.hasPrepend.value = value;
    }
  };
  provide(ListKey, data);
  return parent;
}
function useList() {
  return inject(ListKey, null);
}
const singleOpenStrategy = {
  open: (_ref) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref;
    if (value) {
      const newOpened = /* @__PURE__ */ new Set();
      newOpened.add(id);
      let parent = parents.get(id);
      while (parent != null) {
        newOpened.add(parent);
        parent = parents.get(parent);
      }
      return newOpened;
    } else {
      opened.delete(id);
      return opened;
    }
  },
  select: () => null
};
const multipleOpenStrategy = {
  open: (_ref2) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref2;
    if (value) {
      let parent = parents.get(id);
      opened.add(id);
      while (parent != null && parent !== id) {
        opened.add(parent);
        parent = parents.get(parent);
      }
      return opened;
    } else {
      opened.delete(id);
    }
    return opened;
  },
  select: () => null
};
const listOpenStrategy = {
  open: multipleOpenStrategy.open,
  select: (_ref3) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref3;
    if (!value) return opened;
    const path = [];
    let parent = parents.get(id);
    while (parent != null) {
      path.push(parent);
      parent = parents.get(parent);
    }
    return new Set(path);
  }
};
const independentSelectStrategy = (mandatory) => {
  const strategy = {
    select: (_ref) => {
      let {
        id,
        value,
        selected
      } = _ref;
      id = toRaw(id);
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref2) => {
          let [key, value2] = _ref2;
          return value2 === "on" ? [...arr, key] : arr;
        }, []);
        if (on.length === 1 && on[0] === id) return selected;
      }
      selected.set(id, value ? "on" : "off");
      return selected;
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: (v) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on") arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
const independentSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: (_ref3) => {
      let {
        selected,
        id,
        ...rest
      } = _ref3;
      id = toRaw(id);
      const singleSelected = selected.has(id) ? /* @__PURE__ */ new Map([[id, selected.get(id)]]) : /* @__PURE__ */ new Map();
      return parentStrategy.select({
        ...rest,
        id,
        selected: singleSelected
      });
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      if (v == null ? void 0 : v.length) {
        map = parentStrategy.in(v.slice(0, 1), children, parents);
      }
      return map;
    },
    out: (v, children, parents) => {
      return parentStrategy.out(v, children, parents);
    }
  };
  return strategy;
};
const leafSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: (_ref4) => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref4;
      id = toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const leafSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSingleSelectStrategy(mandatory);
  const strategy = {
    select: (_ref5) => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref5;
      id = toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const classicSelectStrategy = (mandatory) => {
  const strategy = {
    select: (_ref6) => {
      let {
        id,
        value,
        selected,
        children,
        parents
      } = _ref6;
      id = toRaw(id);
      const original = new Map(selected);
      const items = [id];
      while (items.length) {
        const item = items.shift();
        selected.set(item, value ? "on" : "off");
        if (children.has(item)) {
          items.push(...children.get(item));
        }
      }
      let parent = parents.get(id);
      while (parent) {
        const childrenIds = children.get(parent);
        const everySelected = childrenIds.every((cid) => selected.get(cid) === "on");
        const noneSelected = childrenIds.every((cid) => !selected.has(cid) || selected.get(cid) === "off");
        selected.set(parent, everySelected ? "on" : noneSelected ? "off" : "indeterminate");
        parent = parents.get(parent);
      }
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref7) => {
          let [key, value2] = _ref7;
          return value2 === "on" ? [...arr, key] : arr;
        }, []);
        if (on.length === 0) return original;
      }
      return selected;
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: (v, children) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on" && !children.has(key)) arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
const VNestedSymbol = Symbol.for("vuetify:nested");
const emptyNested = {
  id: shallowRef(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: ref(/* @__PURE__ */ new Map()),
    children: ref(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: ref(/* @__PURE__ */ new Set()),
    selected: ref(/* @__PURE__ */ new Map()),
    selectedValues: ref([])
  }
};
const makeNestedProps = propsFactory({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested");
const useNested = (props) => {
  let isUnmounted = false;
  const children = ref(/* @__PURE__ */ new Map());
  const parents = ref(/* @__PURE__ */ new Map());
  const opened = useProxiedModel(props, "opened", props.opened, (v) => new Set(v), (v) => [...v.values()]);
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object") return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single-leaf":
        return leafSingleSelectStrategy(props.mandatory);
      case "leaf":
        return leafSelectStrategy(props.mandatory);
      case "independent":
        return independentSelectStrategy(props.mandatory);
      case "single-independent":
        return independentSingleSelectStrategy(props.mandatory);
      case "classic":
      default:
        return classicSelectStrategy(props.mandatory);
    }
  });
  const openStrategy = computed(() => {
    if (typeof props.openStrategy === "object") return props.openStrategy;
    switch (props.openStrategy) {
      case "list":
        return listOpenStrategy;
      case "single":
        return singleOpenStrategy;
      case "multiple":
      default:
        return multipleOpenStrategy;
    }
  });
  const selected = useProxiedModel(props, "selected", props.selected, (v) => selectStrategy.value.in(v, children.value, parents.value), (v) => selectStrategy.value.out(v, children.value, parents.value));
  onBeforeUnmount(() => {
    isUnmounted = true;
  });
  function getPath(id) {
    const path = [];
    let parent = id;
    while (parent != null) {
      path.unshift(parent);
      parent = parents.value.get(parent);
    }
    return path;
  }
  const vm = getCurrentInstance("nested");
  const nested = {
    id: shallowRef(),
    root: {
      opened,
      selected,
      selectedValues: computed(() => {
        const arr = [];
        for (const [key, value] of selected.value.entries()) {
          if (value === "on") arr.push(key);
        }
        return arr;
      }),
      register: (id, parentId, isGroup) => {
        parentId && id !== parentId && parents.value.set(id, parentId);
        isGroup && children.value.set(id, []);
        if (parentId != null) {
          children.value.set(parentId, [...children.value.get(parentId) || [], id]);
        }
      },
      unregister: (id) => {
        if (isUnmounted) return;
        children.value.delete(id);
        const parent = parents.value.get(id);
        if (parent) {
          const list = children.value.get(parent) ?? [];
          children.value.set(parent, list.filter((child) => child !== id));
        }
        parents.value.delete(id);
        opened.value.delete(id);
      },
      open: (id, value, event) => {
        vm.emit("click:open", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newOpened = openStrategy.value.open({
          id,
          value,
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      openOnSelect: (id, value, event) => {
        const newOpened = openStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      select: (id, value, event) => {
        vm.emit("click:select", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newSelected = selectStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newSelected && (selected.value = newSelected);
        nested.root.openOnSelect(id, value, event);
      },
      children,
      parents
    }
  };
  provide(VNestedSymbol, nested);
  return nested.root;
};
const useNestedItem = (id, isGroup) => {
  const parent = inject(VNestedSymbol, emptyNested);
  const uidSymbol = Symbol(getUid());
  const computedId = computed(() => id.value !== void 0 ? id.value : uidSymbol);
  const item = {
    ...parent,
    id: computedId,
    open: (open, e) => parent.root.open(computedId.value, open, e),
    openOnSelect: (open, e) => parent.root.openOnSelect(computedId.value, open, e),
    isOpen: computed(() => parent.root.opened.value.has(computedId.value)),
    parent: computed(() => parent.root.parents.value.get(computedId.value)),
    select: (selected, e) => parent.root.select(computedId.value, selected, e),
    isSelected: computed(() => parent.root.selected.value.get(toRaw(computedId.value)) === "on"),
    isIndeterminate: computed(() => parent.root.selected.value.get(computedId.value) === "indeterminate"),
    isLeaf: computed(() => !parent.root.children.value.get(computedId.value)),
    isGroupActivator: parent.isGroupActivator
  };
  !parent.isGroupActivator && parent.root.register(computedId.value, parent.id.value, isGroup);
  onBeforeUnmount(() => {
    !parent.isGroupActivator && parent.root.unregister(computedId.value);
  });
  isGroup && provide(VNestedSymbol, item);
  return item;
};
const useNestedGroupActivator = () => {
  const parent = inject(VNestedSymbol, emptyNested);
  provide(VNestedSymbol, {
    ...parent,
    isGroupActivator: true
  });
};
const VListGroupActivator = defineComponent$1({
  name: "VListGroupActivator",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    useNestedGroupActivator();
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const makeVListGroupProps = propsFactory({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListGroup");
const VListGroup = genericComponent()({
  name: "VListGroup",
  props: makeVListGroupProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    const {
      isOpen,
      open,
      id: _id
    } = useNestedItem(toRef(props, "value"), true);
    const id = computed(() => `v-list-group--id-${String(_id.value)}`);
    const list = useList();
    const {
      isBooted
    } = useSsrBoot();
    function onClick(e) {
      open(!isOpen.value, e);
    }
    const activatorProps = computed(() => ({
      onClick,
      class: "v-list-group__header",
      id: id.value
    }));
    const toggleIcon = computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = computed(() => ({
      VListItem: {
        active: isOpen.value,
        activeColor: props.activeColor,
        baseColor: props.baseColor,
        color: props.color,
        prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
        appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
        title: props.title,
        value: props.value
      }
    }));
    useRender(() => createVNode(props.tag, {
      "class": ["v-list-group", {
        "v-list-group--prepend": list == null ? void 0 : list.hasPrepend.value,
        "v-list-group--fluid": props.fluid,
        "v-list-group--subgroup": props.subgroup,
        "v-list-group--open": isOpen.value
      }, props.class],
      "style": props.style
    }, {
      default: () => [slots.activator && createVNode(VDefaultsProvider, {
        "defaults": activatorDefaults.value
      }, {
        default: () => [createVNode(VListGroupActivator, null, {
          default: () => [slots.activator({
            props: activatorProps.value,
            isOpen: isOpen.value
          })]
        })]
      }), createVNode(MaybeTransition, {
        "transition": {
          component: VExpandTransition
        },
        "disabled": !isBooted.value
      }, {
        default: () => {
          var _a;
          return [withDirectives(createVNode("div", {
            "class": "v-list-group__items",
            "role": "group",
            "aria-labelledby": id.value
          }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vShow, isOpen.value]])];
        }
      })]
    }));
    return {};
  }
});
const VListItemSubtitle = createSimpleFunctional("v-list-item-subtitle");
const VListItemTitle = createSimpleFunctional("v-list-item-title");
const makeVListItemProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  disabled: Boolean,
  lines: String,
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VListItem");
const VListItem = genericComponent()({
  name: "VListItem",
  directives: {
    Ripple
  },
  props: makeVListItemProps(),
  emits: {
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const link = useLink(props, attrs);
    const id = computed(() => props.value === void 0 ? link.href.value : props.value);
    const {
      select,
      isSelected,
      isIndeterminate,
      isGroupActivator,
      root,
      parent,
      openOnSelect
    } = useNestedItem(id, false);
    const list = useList();
    const isActive = computed(() => {
      var _a;
      return props.active !== false && (props.active || ((_a = link.isActive) == null ? void 0 : _a.value) || isSelected.value);
    });
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || props.value != null && !!list));
    const roundedProps = computed(() => props.rounded || props.nav);
    const color = computed(() => props.color ?? props.activeColor);
    const variantProps = computed(() => ({
      color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
      variant: props.variant
    }));
    watch(() => {
      var _a;
      return (_a = link.isActive) == null ? void 0 : _a.value;
    }, (val) => {
      if (val && parent.value != null) {
        root.open(parent.value, true);
      }
      if (val) {
        openOnSelect(val);
      }
    }, {
      immediate: true
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(roundedProps);
    const lineClasses = computed(() => props.lines ? `v-list-item--${props.lines}-line` : void 0);
    const slotProps = computed(() => ({
      isActive: isActive.value,
      select,
      isSelected: isSelected.value,
      isIndeterminate: isIndeterminate.value
    }));
    function onClick(e) {
      var _a;
      emit("click", e);
      if (isGroupActivator || !isClickable.value) return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      props.value != null && select(!isSelected.value, e);
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = slots.title || props.title != null;
      const hasSubtitle = slots.subtitle || props.subtitle != null;
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      list == null ? void 0 : list.updateHasPrepend(hasPrepend);
      if (props.activeColor) {
        deprecate("active-color", ["color", "base-color"]);
      }
      return withDirectives(createVNode(Tag, {
        "class": ["v-list-item", {
          "v-list-item--active": isActive.value,
          "v-list-item--disabled": props.disabled,
          "v-list-item--link": isClickable.value,
          "v-list-item--nav": props.nav,
          "v-list-item--prepend": !hasPrepend && (list == null ? void 0 : list.hasPrepend.value),
          "v-list-item--slim": props.slim,
          [`${props.activeClass}`]: props.activeClass && isActive.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, props.style],
        "href": link.href.value,
        "tabindex": isClickable.value ? list ? -2 : 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => {
          var _a;
          return [genOverlays(isClickable.value || isActive.value, "v-list-item"), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-list-item__prepend"
          }, [!slots.prepend ? createVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "density": props.density,
            "image": props.prependAvatar
          }, null), props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": props.prependIcon
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                density: props.density,
                image: props.prependAvatar
              },
              VIcon: {
                density: props.density,
                icon: props.prependIcon
              },
              VListItemAction: {
                start: true
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.prepend) == null ? void 0 : _a2.call(slots, slotProps.value)];
            }
          }), createVNode("div", {
            "class": "v-list-item__spacer"
          }, null)]), createVNode("div", {
            "class": "v-list-item__content",
            "data-no-activator": ""
          }, [hasTitle && createVNode(VListItemTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots, {
                title: props.title
              })) ?? props.title];
            }
          }), hasSubtitle && createVNode(VListItemSubtitle, {
            "key": "subtitle"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots, {
                subtitle: props.subtitle
              })) ?? props.subtitle];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
            "key": "append",
            "class": "v-list-item__append"
          }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "density": props.density,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "density": props.density,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                density: props.density,
                image: props.appendAvatar
              },
              VIcon: {
                density: props.density,
                icon: props.appendIcon
              },
              VListItemAction: {
                end: true
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.append) == null ? void 0 : _a2.call(slots, slotProps.value)];
            }
          }), createVNode("div", {
            "class": "v-list-item__spacer"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const makeVListSubheaderProps = propsFactory({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListSubheader");
const VListSubheader = genericComponent()({
  name: "VListSubheader",
  props: makeVListSubheaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      const hasText = !!(slots.default || props.title);
      return createVNode(props.tag, {
        "class": ["v-list-subheader", {
          "v-list-subheader--inset": props.inset,
          "v-list-subheader--sticky": props.sticky
        }, textColorClasses.value, props.class],
        "style": [{
          textColorStyles
        }, props.style]
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-list-subheader__text"
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.title])];
        }
      });
    });
    return {};
  }
});
const makeVListChildrenProps = propsFactory({
  items: Array,
  returnObject: Boolean
}, "VListChildren");
const VListChildren = genericComponent()({
  name: "VListChildren",
  props: makeVListChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    createList();
    return () => {
      var _a, _b;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? ((_b = props.items) == null ? void 0 : _b.map((_ref2) => {
        var _a2, _b2;
        let {
          children,
          props: itemProps,
          type,
          raw: item
        } = _ref2;
        if (type === "divider") {
          return ((_a2 = slots.divider) == null ? void 0 : _a2.call(slots, {
            props: itemProps
          })) ?? createVNode(VDivider, itemProps, null);
        }
        if (type === "subheader") {
          return ((_b2 = slots.subheader) == null ? void 0 : _b2.call(slots, {
            props: itemProps
          })) ?? createVNode(VListSubheader, itemProps, null);
        }
        const slotsWithItem = {
          subtitle: slots.subtitle ? (slotProps) => {
            var _a3;
            return (_a3 = slots.subtitle) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          prepend: slots.prepend ? (slotProps) => {
            var _a3;
            return (_a3 = slots.prepend) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          append: slots.append ? (slotProps) => {
            var _a3;
            return (_a3 = slots.append) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          title: slots.title ? (slotProps) => {
            var _a3;
            return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0
        };
        const listGroupProps = VListGroup.filterProps(itemProps);
        return children ? createVNode(VListGroup, mergeProps({
          "value": itemProps == null ? void 0 : itemProps.value
        }, listGroupProps), {
          activator: (_ref3) => {
            let {
              props: activatorProps
            } = _ref3;
            const listItemProps = {
              ...itemProps,
              ...activatorProps,
              value: props.returnObject ? item : itemProps.value
            };
            return slots.header ? slots.header({
              props: listItemProps
            }) : createVNode(VListItem, listItemProps, slotsWithItem);
          },
          default: () => createVNode(VListChildren, {
            "items": children
          }, slots)
        }) : slots.item ? slots.item({
          props: itemProps
        }) : createVNode(VListItem, mergeProps(itemProps, {
          "value": props.returnObject ? item : itemProps.value
        }), slotsWithItem);
      }));
    };
  }
});
const makeItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, "list-items");
function transformItem$1(props, item) {
  const title = getPropertyFromItem(item, props.itemTitle, item);
  const value = getPropertyFromItem(item, props.itemValue, title);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? typeof item === "object" && item != null && !Array.isArray(item) ? "children" in item ? omit(item, ["children"]) : item : void 0 : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    title: String(_props.title ?? ""),
    value: _props.value,
    props: _props,
    children: Array.isArray(children) ? transformItems$1(props, children) : void 0,
    raw: item
  };
}
function transformItems$1(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem$1(props, item));
  }
  return array;
}
function useItems(props) {
  const items = computed(() => transformItems$1(props, props.items));
  const hasNullItem = computed(() => items.value.some((item) => item.value === null));
  function transformIn(value) {
    if (!hasNullItem.value) {
      value = value.filter((v) => v !== null);
    }
    return value.map((v) => {
      if (props.returnObject && typeof v === "string") {
        return transformItem$1(props, v);
      }
      return items.value.find((item) => props.valueComparator(v, item.value)) || transformItem$1(props, v);
    });
  }
  function transformOut(value) {
    return props.returnObject ? value.map((_ref) => {
      let {
        raw
      } = _ref;
      return raw;
    }) : value.map((_ref2) => {
      let {
        value: value2
      } = _ref2;
      return value2;
    });
  }
  return {
    items,
    transformIn,
    transformOut
  };
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function transformItem(props, item) {
  const type = getPropertyFromItem(item, props.itemType, "item");
  const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
  const value = getPropertyFromItem(item, props.itemValue, void 0);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? omit(item, ["children"]) : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === "item" && children ? transformItems(props, children) : void 0,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
function useListItems(props) {
  const items = computed(() => transformItems(props, props.items));
  return {
    items
  };
}
const makeVListProps = propsFactory({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  ...makeNestedProps({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  itemType: {
    type: String,
    default: "type"
  },
  ...makeItemsProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VList");
const VList = genericComponent()({
  name: "VList",
  props: makeVListProps(),
  emits: {
    "update:selected": (value) => true,
    "update:opened": (value) => true,
    "click:open": (value) => true,
    "click:select": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      open,
      select
    } = useNested(props);
    const lineClasses = computed(() => props.lines ? `v-list--${props.lines}-line` : void 0);
    const activeColor = toRef(props, "activeColor");
    const baseColor = toRef(props, "baseColor");
    const color = toRef(props, "color");
    createList();
    provideDefaults({
      VListGroup: {
        activeColor,
        baseColor,
        color,
        expandIcon: toRef(props, "expandIcon"),
        collapseIcon: toRef(props, "collapseIcon")
      },
      VListItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor,
        baseColor,
        color,
        density: toRef(props, "density"),
        disabled: toRef(props, "disabled"),
        lines: toRef(props, "lines"),
        nav: toRef(props, "nav"),
        slim: toRef(props, "slim"),
        variant: toRef(props, "variant")
      }
    });
    const isFocused = shallowRef(false);
    const contentRef = ref();
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      var _a;
      if (!isFocused.value && !(e.relatedTarget && ((_a = contentRef.value) == null ? void 0 : _a.contains(e.relatedTarget)))) focus();
    }
    function onKeydown(e) {
      if (!contentRef.value) return;
      if (e.key === "ArrowDown") {
        focus("next");
      } else if (e.key === "ArrowUp") {
        focus("prev");
      } else if (e.key === "Home") {
        focus("first");
      } else if (e.key === "End") {
        focus("last");
      } else {
        return;
      }
      e.preventDefault();
    }
    function onMousedown(e) {
      isFocused.value = true;
    }
    function focus(location) {
      if (contentRef.value) {
        return focusChild(contentRef.value, location);
      }
    }
    useRender(() => {
      return createVNode(props.tag, {
        "ref": contentRef,
        "class": ["v-list", {
          "v-list--disabled": props.disabled,
          "v-list--nav": props.nav,
          "v-list--slim": props.slim
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, dimensionStyles.value, props.style],
        "tabindex": props.disabled || isFocused.value ? -1 : 0,
        "role": "listbox",
        "aria-activedescendant": void 0,
        "onFocusin": onFocusin,
        "onFocusout": onFocusout,
        "onFocus": onFocus,
        "onKeydown": onKeydown,
        "onMousedown": onMousedown
      }, {
        default: () => [createVNode(VListChildren, {
          "items": items.value,
          "returnObject": props.returnObject
        }, slots)]
      });
    });
    return {
      open,
      select,
      focus
    };
  }
});
const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(0);
    provide(VMenuSymbol, {
      register() {
        ++openChildren.value;
      },
      unregister() {
        --openChildren.value;
      },
      closeParents() {
        setTimeout(() => {
          if (!openChildren.value) {
            isActive.value = false;
            parent == null ? void 0 : parent.closeParents();
          }
        }, 40);
      }
    });
    async function onFocusIn(e) {
      var _a, _b, _c;
      const before = e.relatedTarget;
      const after = e.target;
      await nextTick();
      if (isActive.value && before !== after && ((_a = overlay.value) == null ? void 0 : _a.contentEl) && // We're the topmost menu
      ((_b = overlay.value) == null ? void 0 : _b.globalTop) && // It isn't the document or the menu body
      ![document, overlay.value.contentEl].includes(after) && // It isn't inside the menu body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        (_c = focusable[0]) == null ? void 0 : _c.focus();
      }
    }
    watch(isActive, (val) => {
      if (val) {
        parent == null ? void 0 : parent.register();
        document.addEventListener("focusin", onFocusIn, {
          once: true
        });
      } else {
        parent == null ? void 0 : parent.unregister();
        document.removeEventListener("focusin", onFocusIn);
      }
    });
    function onClickOutside() {
      parent == null ? void 0 : parent.closeParents();
    }
    function onKeydown(e) {
      var _a, _b, _c;
      if (props.disabled) return;
      if (e.key === "Tab") {
        const nextElement = getNextElement(focusableChildren((_a = overlay.value) == null ? void 0 : _a.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          (_c = (_b = overlay.value) == null ? void 0 : _b.activatorEl) == null ? void 0 : _c.focus();
        }
      }
    }
    function onActivatorKeydown(e) {
      var _a;
      if (props.disabled) return;
      const el = (_a = overlay.value) == null ? void 0 : _a.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          focusChild(el, "prev");
        }
      } else if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
const makeVVirtualScrollItemProps = propsFactory({
  renderless: Boolean,
  ...makeComponentProps()
}, "VVirtualScrollItem");
const VVirtualScrollItem = genericComponent()({
  name: "VVirtualScrollItem",
  inheritAttrs: false,
  props: makeVVirtualScrollItemProps(),
  emits: {
    "update:height": (height) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      resizeRef,
      contentRect
    } = useResizeObserver(void 0, "border");
    watch(() => {
      var _a;
      return (_a = contentRect.value) == null ? void 0 : _a.height;
    }, (height) => {
      if (height != null) emit("update:height", height);
    });
    useRender(() => {
      var _a, _b;
      return props.renderless ? createVNode(Fragment, null, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        itemRef: resizeRef
      })]) : createVNode("div", mergeProps({
        "ref": resizeRef,
        "class": ["v-virtual-scroll__item", props.class],
        "style": props.style
      }, attrs), [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
    });
  }
});
const UP = -1;
const DOWN = 1;
const BUFFER_PX = 100;
const makeVirtualProps = propsFactory({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function useVirtual(props, items) {
  const display = useDisplay();
  const itemHeight = shallowRef(0);
  watchEffect(() => {
    itemHeight.value = parseFloat(props.itemHeight || 0);
  });
  const first = shallowRef(0);
  const last = shallowRef(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(props.height) || display.height.value) / (itemHeight.value || 16)
  ) || 1);
  const paddingTop = shallowRef(0);
  const paddingBottom = shallowRef(0);
  const containerRef = ref();
  const markerRef = ref();
  let markerOffset = 0;
  const {
    resizeRef,
    contentRect
  } = useResizeObserver();
  watchEffect(() => {
    resizeRef.value = containerRef.value;
  });
  const viewportHeight = computed(() => {
    var _a;
    return containerRef.value === document.documentElement ? display.height.value : ((_a = contentRect.value) == null ? void 0 : _a.height) || parseInt(props.height) || 0;
  });
  const hasInitialRender = computed(() => {
    return !!(containerRef.value && markerRef.value && viewportHeight.value && itemHeight.value);
  });
  let sizes = Array.from({
    length: items.value.length
  });
  let offsets = Array.from({
    length: items.value.length
  });
  const updateTime = shallowRef(0);
  let targetScrollIndex = -1;
  function getSize(index) {
    return sizes[index] || itemHeight.value;
  }
  const updateOffsets = debounce(() => {
    const start = performance.now();
    offsets[0] = 0;
    const length = items.value.length;
    for (let i = 1; i <= length - 1; i++) {
      offsets[i] = (offsets[i - 1] || 0) + getSize(i - 1);
    }
    updateTime.value = Math.max(updateTime.value, performance.now() - start);
  }, updateTime);
  const unwatch = watch(hasInitialRender, (v) => {
    if (!v) return;
    unwatch();
    markerOffset = markerRef.value.offsetTop;
    updateOffsets.immediate();
    calculateVisibleItems();
    if (!~targetScrollIndex) return;
    nextTick(() => {
      IN_BROWSER && window.requestAnimationFrame(() => {
        scrollToIndex(targetScrollIndex);
        targetScrollIndex = -1;
      });
    });
  });
  watch(viewportHeight, (val, oldVal) => {
    oldVal && calculateVisibleItems();
  });
  onScopeDispose(() => {
    updateOffsets.clear();
  });
  function handleItemResize(index, height) {
    const prevHeight = sizes[index];
    const prevMinHeight = itemHeight.value;
    itemHeight.value = prevMinHeight ? Math.min(itemHeight.value, height) : height;
    if (prevHeight !== height || prevMinHeight !== itemHeight.value) {
      sizes[index] = height;
      updateOffsets();
    }
  }
  function calculateOffset(index) {
    index = clamp(index, 0, items.value.length - 1);
    return offsets[index] || 0;
  }
  function calculateIndex(scrollTop) {
    return binaryClosest(offsets, scrollTop);
  }
  let lastScrollTop = 0;
  let scrollVelocity = 0;
  let lastScrollTime = 0;
  function handleScroll() {
    if (!containerRef.value || !markerRef.value) return;
    const scrollTop = containerRef.value.scrollTop;
    const scrollTime = performance.now();
    const scrollDeltaT = scrollTime - lastScrollTime;
    if (scrollDeltaT > 500) {
      scrollVelocity = Math.sign(scrollTop - lastScrollTop);
      markerOffset = markerRef.value.offsetTop;
    } else {
      scrollVelocity = scrollTop - lastScrollTop;
    }
    lastScrollTop = scrollTop;
    lastScrollTime = scrollTime;
    calculateVisibleItems();
  }
  function handleScrollend() {
    if (!containerRef.value || !markerRef.value) return;
    scrollVelocity = 0;
    lastScrollTime = 0;
    calculateVisibleItems();
  }
  let raf = -1;
  function calculateVisibleItems() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(_calculateVisibleItems);
  }
  function _calculateVisibleItems() {
    if (!containerRef.value || !viewportHeight.value) return;
    const scrollTop = lastScrollTop - markerOffset;
    const direction = Math.sign(scrollVelocity);
    const startPx = Math.max(0, scrollTop - BUFFER_PX);
    const start = clamp(calculateIndex(startPx), 0, items.value.length);
    const endPx = scrollTop + viewportHeight.value + BUFFER_PX;
    const end = clamp(calculateIndex(endPx) + 1, start + 1, items.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (direction !== UP || start < first.value) && (direction !== DOWN || end > last.value)
    ) {
      const topOverflow = calculateOffset(first.value) - calculateOffset(start);
      const bottomOverflow = calculateOffset(end) - calculateOffset(last.value);
      const bufferOverflow = Math.max(topOverflow, bottomOverflow);
      if (bufferOverflow > BUFFER_PX) {
        first.value = start;
        last.value = end;
      } else {
        if (start <= 0) first.value = start;
        if (end >= items.value.length) last.value = end;
      }
    }
    paddingTop.value = calculateOffset(first.value);
    paddingBottom.value = calculateOffset(items.value.length) - calculateOffset(last.value);
  }
  function scrollToIndex(index) {
    const offset = calculateOffset(index);
    if (!containerRef.value || index && !offset) {
      targetScrollIndex = index;
    } else {
      containerRef.value.scrollTop = offset;
    }
  }
  const computedItems = computed(() => {
    return items.value.slice(first.value, last.value).map((item, index) => ({
      raw: item,
      index: index + first.value
    }));
  });
  watch(items, () => {
    sizes = Array.from({
      length: items.value.length
    });
    offsets = Array.from({
      length: items.value.length
    });
    updateOffsets.immediate();
    calculateVisibleItems();
  }, {
    deep: true
  });
  return {
    containerRef,
    markerRef,
    computedItems,
    paddingTop,
    paddingBottom,
    scrollToIndex,
    handleScroll,
    handleScrollend,
    handleItemResize
  };
}
function binaryClosest(arr, val) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;
  let item = null;
  let target = -1;
  if (arr[high] < val) {
    return high;
  }
  while (low <= high) {
    mid = low + high >> 1;
    item = arr[mid];
    if (item > val) {
      high = mid - 1;
    } else if (item < val) {
      target = mid;
      low = mid + 1;
    } else if (item === val) {
      return mid;
    } else {
      return low;
    }
  }
  return target;
}
const makeVVirtualScrollProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VVirtualScroll");
const VVirtualScroll = genericComponent()({
  name: "VVirtualScroll",
  props: makeVVirtualScrollProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vm = getCurrentInstance("VVirtualScroll");
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      containerRef,
      markerRef,
      handleScroll,
      handleScrollend,
      handleItemResize,
      scrollToIndex,
      paddingTop,
      paddingBottom,
      computedItems
    } = useVirtual(props, toRef(props, "items"));
    useToggleScope(() => props.renderless, () => {
      function handleListeners() {
        var _a, _b;
        let add = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const method = add ? "addEventListener" : "removeEventListener";
        if (containerRef.value === document.documentElement) {
          document[method]("scroll", handleScroll, {
            passive: true
          });
          document[method]("scrollend", handleScrollend);
        } else {
          (_a = containerRef.value) == null ? void 0 : _a[method]("scroll", handleScroll, {
            passive: true
          });
          (_b = containerRef.value) == null ? void 0 : _b[method]("scrollend", handleScrollend);
        }
      }
      onMounted(() => {
        containerRef.value = getScrollParent(vm.vnode.el, true);
        handleListeners(true);
      });
      onScopeDispose(handleListeners);
    });
    useRender(() => {
      const children = computedItems.value.map((item) => createVNode(VVirtualScrollItem, {
        "key": item.index,
        "renderless": props.renderless,
        "onUpdate:height": (height) => handleItemResize(item.index, height)
      }, {
        default: (slotProps) => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots, {
            item: item.raw,
            index: item.index,
            ...slotProps
          });
        }
      }));
      return props.renderless ? createVNode(Fragment, null, [createVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingTop: convertToUnit(paddingTop.value)
        }
      }, null), children, createVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, null)]) : createVNode("div", {
        "ref": containerRef,
        "class": ["v-virtual-scroll", props.class],
        "onScrollPassive": handleScroll,
        "onScrollend": handleScrollend,
        "style": [dimensionStyles.value, props.style]
      }, [createVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__container",
        "style": {
          paddingTop: convertToUnit(paddingTop.value),
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, [children])]);
    });
    return {
      scrollToIndex
    };
  }
});
function useScrolling(listRef, textFieldRef) {
  const isScrolling = shallowRef(false);
  let scrollTimeout;
  function onListScroll(e) {
    cancelAnimationFrame(scrollTimeout);
    isScrolling.value = true;
    scrollTimeout = requestAnimationFrame(() => {
      scrollTimeout = requestAnimationFrame(() => {
        isScrolling.value = false;
      });
    });
  }
  async function finishScrolling() {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => {
      if (isScrolling.value) {
        const stop = watch(isScrolling, () => {
          stop();
          resolve();
        });
      } else resolve();
    });
  }
  async function onListKeydown(e) {
    var _a, _b;
    if (e.key === "Tab") {
      (_a = textFieldRef.value) == null ? void 0 : _a.focus();
    }
    if (!["PageDown", "PageUp", "Home", "End"].includes(e.key)) return;
    const el = (_b = listRef.value) == null ? void 0 : _b.$el;
    if (!el) return;
    if (e.key === "Home" || e.key === "End") {
      el.scrollTo({
        top: e.key === "Home" ? 0 : el.scrollHeight,
        behavior: "smooth"
      });
    }
    await finishScrolling();
    const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (e.key === "PageDown" || e.key === "Home") {
      const top = el.getBoundingClientRect().top;
      for (const child of children) {
        if (child.getBoundingClientRect().top >= top) {
          child.focus();
          break;
        }
      }
    } else {
      const bottom = el.getBoundingClientRect().bottom;
      for (const child of [...children].reverse()) {
        if (child.getBoundingClientRect().bottom <= bottom) {
          child.focus();
          break;
        }
      }
    }
  }
  return {
    onListScroll,
    onListKeydown
  };
}
const makeSelectProps = propsFactory({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: IconValue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...makeItemsProps({
    itemChildren: false
  })
}, "Select");
const makeVSelectProps = propsFactory({
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...makeTransitionProps({
    transition: {
      component: VDialogTransition
    }
  })
}, "VSelect");
const VSelect = genericComponent()({
  name: "VSelect",
  props: makeVSelectProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:menu": (ue) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        var _a;
        if (_menu.value && !v && ((_a = vMenuRef.value) == null ? void 0 : _a.ΨopenChildren)) return;
        _menu.value = v;
      }
    });
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
    });
    const form = useForm();
    const selectedValues = computed(() => model.value.map((selection) => selection.value));
    const isFocused = shallowRef(false);
    const label = computed(() => menu.value ? props.closeText : props.openText);
    let keyboardLookupPrefix = "";
    let keyboardLookupLastTime;
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return items.value.filter((item) => !model.value.some((s) => s === item));
      }
      return items.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || props.readonly || (form == null ? void 0 : form.isReadonly.value));
    const computedMenuProps = computed(() => {
      var _a;
      return {
        ...props.menuProps,
        activatorProps: {
          ...((_a = props.menuProps) == null ? void 0 : _a.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    });
    const listRef = ref();
    const {
      onListScroll,
      onListKeydown
    } = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = !menu.value;
    }
    function onKeydown(e) {
      var _a, _b;
      if (!e.key || props.readonly || (form == null ? void 0 : form.isReadonly.value)) return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown", " "].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape", "Tab"].includes(e.key)) {
        menu.value = false;
      }
      if (e.key === "Home") {
        (_a = listRef.value) == null ? void 0 : _a.focus("first");
      } else if (e.key === "End") {
        (_b = listRef.value) == null ? void 0 : _b.focus("last");
      }
      const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
      function checkPrintable(e2) {
        const isPrintableChar = e2.key.length === 1;
        const noModifier = !e2.ctrlKey && !e2.metaKey && !e2.altKey;
        return isPrintableChar && noModifier;
      }
      if (props.multiple || !checkPrintable(e)) return;
      const now = performance.now();
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = "";
      }
      keyboardLookupPrefix += e.key.toLowerCase();
      keyboardLookupLastTime = now;
      const item = items.value.find((item2) => item2.title.toLowerCase().startsWith(keyboardLookupPrefix));
      if (item !== void 0) {
        model.value = [item];
      }
    }
    function select(item) {
      if (props.multiple) {
        const index = model.value.findIndex((selection) => props.valueComparator(selection.value, item.value));
        if (index === -1) {
          model.value = [...model.value, item];
        } else {
          const value = [...model.value];
          value.splice(index, 1);
          model.value = value;
        }
      } else {
        model.value = [item];
        menu.value = false;
      }
    }
    function onBlur(e) {
      var _a;
      if (!((_a = listRef.value) == null ? void 0 : _a.$el.contains(e.relatedTarget))) {
        menu.value = false;
      }
    }
    function onAfterLeave() {
      var _a;
      if (isFocused.value) {
        (_a = vTextFieldRef.value) == null ? void 0 : _a.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onModelUpdate(v) {
      if (v == null) model.value = [];
      else if (matchesSelector(vTextFieldRef.value, ":autofill") || matchesSelector(vTextFieldRef.value, ":-webkit-autofill")) {
        const item = items.value.find((item2) => item2.title === v);
        if (item) {
          select(item);
        }
      } else if (vTextFieldRef.value) {
        vTextFieldRef.value.value = "";
      }
    }
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        const index = displayItems.value.findIndex((item) => model.value.some((s) => props.valueComparator(s.value, item.value)));
        IN_BROWSER && window.requestAnimationFrame(() => {
          var _a;
          index >= 0 && ((_a = vVirtualScrollRef.value) == null ? void 0 : _a.scrollToIndex(index));
        });
      }
    });
    watch(displayItems, (val, oldVal) => {
      if (!isFocused.value) return;
      if (!val.length && props.hideNoData) {
        menu.value = false;
      }
      if (!oldVal.length && val.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": model.value.map((v) => v.props.value).join(", "),
        "onUpdate:modelValue": onModelUpdate,
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "class": ["v-select", {
          "v-select--active-menu": menu.value,
          "v-select--chips": !!props.chips,
          [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
          "v-select--selected": model.value.length,
          "v-select--selection-slot": !!slots.selection
        }, props.class],
        "style": props.style,
        "inputmode": "none",
        "placeholder": placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "aria-label": t(label.value),
        "title": t(label.value)
      }), {
        ...slots,
        default: () => createVNode(Fragment, null, [createVNode(VMenu, mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": ($event) => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-select__content",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterLeave": onAfterLeave
        }, computedMenuProps.value), {
          default: () => [hasList && createVNode(VList, mergeProps({
            "ref": listRef,
            "selected": selectedValues.value,
            "selectStrategy": props.multiple ? "independent" : "single-independent",
            "onMousedown": (e) => e.preventDefault(),
            "onKeydown": onListKeydown,
            "onFocusin": onFocusin,
            "onScrollPassive": onListScroll,
            "tabindex": "-1",
            "aria-live": "polite",
            "color": props.itemColor ?? props.color
          }, props.listProps), {
            default: () => {
              var _a, _b, _c;
              return [(_a = slots["prepend-item"]) == null ? void 0 : _a.call(slots), !displayItems.value.length && !props.hideNoData && (((_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) ?? createVNode(VListItem, {
                "title": t(props.noDataText)
              }, null)), createVNode(VVirtualScroll, {
                "ref": vVirtualScrollRef,
                "renderless": true,
                "items": displayItems.value
              }, {
                default: (_ref2) => {
                  var _a2;
                  let {
                    item,
                    index,
                    itemRef
                  } = _ref2;
                  const itemProps = mergeProps(item.props, {
                    ref: itemRef,
                    key: index,
                    onClick: () => select(item)
                  });
                  return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                    item,
                    index,
                    props: itemProps
                  })) ?? createVNode(VListItem, mergeProps(itemProps, {
                    "role": "option"
                  }), {
                    prepend: (_ref3) => {
                      let {
                        isSelected
                      } = _ref3;
                      return createVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                        "key": item.value,
                        "modelValue": isSelected,
                        "ripple": false,
                        "tabindex": "-1"
                      }, null) : void 0, item.props.prependAvatar && createVNode(VAvatar, {
                        "image": item.props.prependAvatar
                      }, null), item.props.prependIcon && createVNode(VIcon, {
                        "icon": item.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (_c = slots["append-item"]) == null ? void 0 : _c.call(slots)];
            }
          })]
        }), model.value.map((item, index) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item);
          }
          const slotProps = {
            "onClick:close": onChipClose,
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            "onUpdate:modelValue": void 0
          };
          const hasSlot = hasChips ? !!slots.chip : !!slots.selection;
          const slotContent = hasSlot ? ensureValidVNode(hasChips ? slots.chip({
            item,
            index,
            props: slotProps
          }) : slots.selection({
            item,
            index
          })) : void 0;
          if (hasSlot && !slotContent) return void 0;
          return createVNode("div", {
            "key": item.value,
            "class": "v-select__selection"
          }, [hasChips ? !slots.chip ? createVNode(VChip, mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title,
            "disabled": item.props.disabled
          }, slotProps), null) : createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: "small",
                text: item.title
              }
            }
          }, {
            default: () => [slotContent]
          }) : slotContent ?? createVNode("span", {
            "class": "v-select__selection-text"
          }, [item.title, props.multiple && index < model.value.length - 1 && createVNode("span", {
            "class": "v-select__selection-comma"
          }, [createTextVNode(",")])])]);
        })]),
        "append-inner": function() {
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(Fragment, null, [(_a = slots["append-inner"]) == null ? void 0 : _a.call(slots, ...args), props.menuIcon ? createVNode(VIcon, {
            "class": "v-select__menu-icon",
            "icon": props.menuIcon
          }, null) : void 0]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      menu,
      select
    }, vTextFieldRef);
  }
});
const _hoisted_1$3 = { class: "text-h5 text-center" };
const _hoisted_2$3 = { class: "text-h5 my-3 text-left" };
const _hoisted_3$2 = { class: "text-h5 my-3 text-left" };
const _hoisted_4$1 = { class: "d-flex align-center" };
const _hoisted_5$1 = { class: "text-h5 my-3 text-left" };
const _hoisted_6$1 = { class: "text-h5 my-3 text-left" };
const _hoisted_7$1 = { class: "text-h5 my-3 text-left" };
const _hoisted_8$1 = { class: "text-h5 my-3 text-left" };
const _hoisted_9 = { class: "text-h5 my-3 text-left" };
const _hoisted_10 = { class: "d-flex justify-center" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ManualRequest",
  setup(__props) {
    const { smAndDown } = useDisplay();
    const paramsFormElement = ref(null);
    const isEditing = ref(false);
    const { t } = useI18n();
    const items = ref([]);
    const currentRequestBean = ref(null);
    const paymentModes = computed(() => {
      return [
        {
          title: t("label.payment.with.redirect"),
          value: PaymentMode.Redirect
        },
        {
          title: t("label.payment.with.modal.iframe"),
          value: PaymentMode.ModalIframe
        },
        {
          title: t("label.payment.with.built.in.iframe"),
          value: PaymentMode.BuiltInIframe
        }
      ];
    });
    const switchRequestBean = (next = true) => {
      const currentIndex = items.value.findIndex((item) => {
        var _a;
        return item.id === ((_a = currentRequestBean.value) == null ? void 0 : _a.id);
      });
      if (next) {
        if (currentIndex === items.value.length - 1) {
          currentRequestBean.value = { ...items.value[0] };
        } else {
          currentRequestBean.value = { ...items.value[currentIndex + 1] };
        }
      } else {
        if (currentIndex === 0) {
          currentRequestBean.value = { ...items.value[items.value.length - 1] };
        } else {
          currentRequestBean.value = { ...items.value[currentIndex - 1] };
        }
      }
    };
    const onCancel = () => {
      isEditing.value = false;
      const itemIndex = items.value.findIndex((item) => {
        var _a;
        return item.id === ((_a = currentRequestBean.value) == null ? void 0 : _a.id);
      });
      if (itemIndex === -1) {
        currentRequestBean.value = { ...items.value[0] };
        return;
      }
      currentRequestBean.value = { ...items.value[itemIndex] };
    };
    const addNewItem = () => {
      currentRequestBean.value = createRequestBean();
      isEditing.value = true;
    };
    const removeItem = () => {
      if (!currentRequestBean.value) {
        return;
      }
      const itemIndex = items.value.findIndex((item) => {
        var _a;
        return item.id === ((_a = currentRequestBean.value) == null ? void 0 : _a.id);
      });
      if (itemIndex === -1) {
        return;
      }
      const requestBeans = deleteRequestBean(currentRequestBean.value.id);
      if (requestBeans.length === 0) {
        currentRequestBean.value = null;
        return;
      }
      currentRequestBean.value = { ...requestBeans[0] };
    };
    const onSaveRequestItem = async () => {
      const vForm = paramsFormElement.value;
      const { valid } = await vForm.validate();
      if (!valid) {
        return;
      }
      isEditing.value = false;
      const value = currentRequestBean.value;
      if (!value) {
        return;
      }
      items.value = updateRequestBean(value);
    };
    const submitPaymentWithManualParams = () => {
      if (isEditing.value) {
        return;
      }
      if (!currentRequestBean.value) {
        return;
      }
      submitPaymentManual(currentRequestBean.value);
    };
    const isSwitchBackDisabled = computed(() => {
      return items.value.length === 1 || isEditing.value || !currentRequestBean.value || currentRequestBean.value.id === items.value[0].id;
    });
    const isSwitchForwardDisabled = computed(() => {
      return items.value.length === 1 || isEditing.value || !currentRequestBean.value || currentRequestBean.value.id === items.value[items.value.length - 1].id;
    });
    const updateOrderId = () => {
      if (!currentRequestBean.value) {
        return;
      }
      currentRequestBean.value = {
        ...currentRequestBean.value,
        orderId: Date.now().toString()
      };
    };
    onMounted(() => {
      items.value = fetchRequestBeans();
      currentRequestBean.value = { ...items.value[0] };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VRow, null, {
        default: withCtx(() => [
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["d-flex align-center justify-space-between mb-5", { "flex-column": unref(smAndDown), "text-center": unref(smAndDown) }])
              }, [
                createBaseVNode("div", {
                  class: normalizeClass({ "mb-5": unref(smAndDown) })
                }, [
                  createVNode(VBtn, {
                    size: "small",
                    color: "primary",
                    type: "button",
                    variant: "outlined",
                    icon: "",
                    title: _ctx.$t("title.previous.form"),
                    class: "mr-5",
                    disabled: isSwitchBackDisabled.value,
                    onClick: _cache[0] || (_cache[0] = ($event) => switchRequestBean(false))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IconChevronLeft), { size: "24" })
                    ]),
                    _: 1
                  }, 8, ["title", "disabled"]),
                  createVNode(VBtn, {
                    size: "small",
                    color: "primary",
                    type: "button",
                    variant: "outlined",
                    icon: "",
                    title: _ctx.$t("title.next.form"),
                    disabled: isSwitchForwardDisabled.value,
                    onClick: switchRequestBean
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IconChevronRight), { size: "24" })
                    ]),
                    _: 1
                  }, 8, ["title", "disabled"])
                ], 2),
                createBaseVNode("h4", _hoisted_1$3, toDisplayString(_ctx.$t("text.manual.request.params.form")), 1),
                createBaseVNode("div", null, [
                  createVNode(VBtn, {
                    class: "mr-4",
                    color: "primary",
                    type: "button",
                    variant: "outlined",
                    disabled: isEditing.value,
                    onClick: addNewItem
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("action.add.new.form")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(VBtn, {
                    color: "error",
                    type: "button",
                    variant: "outlined",
                    disabled: isEditing.value || items.value.length === 1,
                    onClick: removeItem
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("action.remove.form")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ], 2),
              currentRequestBean.value ? (openBlock(), createBlock(VForm, {
                key: 0,
                ref_key: "paramsFormElement",
                ref: paramsFormElement,
                onSubmit: withModifiers(onSaveRequestItem, ["prevent"])
              }, {
                default: withCtx(() => [
                  createBaseVNode("h3", _hoisted_2$3, toDisplayString(_ctx.$t("text.form.params")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.label,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentRequestBean.value.label = $event),
                            readonly: !isEditing.value,
                            rules: [unref(rules).required],
                            label: _ctx.$t("label.form.name"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "rules", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.url,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => currentRequestBean.value.url = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.request.url"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: currentRequestBean.value.mode,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => currentRequestBean.value.mode = $event),
                            readonly: !isEditing.value,
                            rules: [unref(rules).required],
                            items: paymentModes.value,
                            label: _ctx.$t("label.payment.mode"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "rules", "items", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("h3", _hoisted_3$2, toDisplayString(_ctx.$t("text.merchant")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.merchantId,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => currentRequestBean.value.merchantId = $event),
                            readonly: !isEditing.value,
                            rules: [unref(rules).required],
                            label: _ctx.$t("label.merchant.id"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "rules", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.merchantTerminalId,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => currentRequestBean.value.merchantTerminalId = $event),
                            readonly: !isEditing.value,
                            rules: [unref(rules).required],
                            label: _ctx.$t("label.terminal.id"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "rules", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_4$1, [
                            createVNode(VTextField, {
                              modelValue: currentRequestBean.value.orderId,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => currentRequestBean.value.orderId = $event),
                              readonly: !isEditing.value,
                              label: _ctx.$t("label.order.id"),
                              variant: "outlined",
                              class: "mr-2"
                            }, null, 8, ["modelValue", "readonly", "label"]),
                            createVNode(VBtn, {
                              color: "primary",
                              type: "button",
                              variant: "outlined",
                              onClick: updateOrderId
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("action.update.order.id")), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("h3", _hoisted_5$1, toDisplayString(_ctx.$t("text.currency")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.currencyNumericCode,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => currentRequestBean.value.currencyNumericCode = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.currency.numeric.code"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.altCurrencyNumericCode,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => currentRequestBean.value.altCurrencyNumericCode = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.currency.numeric.code.alternative"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("h3", _hoisted_6$1, toDisplayString(_ctx.$t("text.fee")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.feeCents,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => currentRequestBean.value.feeCents = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.fee.cents"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.altFeeCents,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => currentRequestBean.value.altFeeCents = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.alternative.fee.cents"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("h3", _hoisted_7$1, toDisplayString(_ctx.$t("text.total.amount")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.totalAmountCents,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => currentRequestBean.value.totalAmountCents = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.total.amount.cents"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.altTotalAmountCents,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => currentRequestBean.value.altTotalAmountCents = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.alternative.total.amount.cents"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("h3", _hoisted_8$1, toDisplayString(_ctx.$t("text.customer.data")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.customerPhoneCode,
                            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => currentRequestBean.value.customerPhoneCode = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.customer.phone.code"),
                            variant: "outlined",
                            placeholder: "380"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.customerPhone,
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => currentRequestBean.value.customerPhone = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.customer.phone.number"),
                            variant: "outlined",
                            placeholder: "000000000"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.customerFirstName,
                            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => currentRequestBean.value.customerFirstName = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.customer.first.name"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.customerLastName,
                            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => currentRequestBean.value.customerLastName = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.customer.last.name"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.customerEmail,
                            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => currentRequestBean.value.customerEmail = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.customer.email"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("h3", _hoisted_9, toDisplayString(_ctx.$t("text.other.params")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.locale,
                            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => currentRequestBean.value.locale = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.locale"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.purchaseTime,
                            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => currentRequestBean.value.purchaseTime = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.purchase.time"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.delay,
                            "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => currentRequestBean.value.delay = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.delay"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.description,
                            "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => currentRequestBean.value.description = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.purchase.description"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.token,
                            "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => currentRequestBean.value.token = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.payment.token"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: currentRequestBean.value.merchantSignature,
                            "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => currentRequestBean.value.merchantSignature = $event),
                            readonly: !isEditing.value,
                            label: _ctx.$t("label.signature"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "readonly", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      isEditing.value ? (openBlock(), createBlock(VCol, {
                        key: 0,
                        cols: "12",
                        lg: "12",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            class: "mr-4",
                            color: "error",
                            type: "button",
                            variant: "outlined",
                            onClick: onCancel
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("action.cancel")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            type: "submit",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("action.save.changes")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VCol, {
                        key: 1,
                        cols: "12",
                        lg: "12"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_10, [
                            createVNode(VBtn, {
                              color: "primary",
                              type: "button",
                              variant: "outlined",
                              onClick: _cache[24] || (_cache[24] = ($event) => isEditing.value = true)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("action.edit")), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  }),
                  !isEditing.value ? (openBlock(), createBlock(VBtn, {
                    key: 0,
                    color: "primary",
                    type: "button",
                    class: "d-block ml-auto mt-5",
                    onClick: submitPaymentWithManualParams
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("action.make.payment")), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 512)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const fetchBillingAddress = () => {
  let address = Storage.billingAddress.getValue();
  if (!address) {
    address = {
      building: "B-11",
      city: "Kyiv",
      country: "Ukraine",
      destination: "Office",
      email: "",
      firstName: "John",
      id: 1,
      label: "Home",
      lastName: "Doe",
      phone: "",
      phoneCode: "",
      street: "Gareth Jones 8"
    };
    Storage.billingAddress.setValue(address);
  }
  return address;
};
const updateBillingAddress = (address) => {
  Storage.billingAddress.setValue(address);
};
const usePayByBankBankStore = defineStore({
  id: "pay-by-bank",
  state: () => ({
    buttonVariant: "primary",
    buttonLocale: "en",
    buttonWrapperSelector: "#pay-by-bank",
    paymentMode: "redirect",
    creditorIBAN: "UA573220000000026007233566001",
    currencyNumericCode: "980",
    locale: "en",
    merchantID: "1753545",
    orderId: Date.now().toString(),
    purchaseDescription: "description",
    purchaseTime: "2412111356",
    sessionData: "some-session-data",
    signature: "signature",
    totalAmountCents: 12345,
    url: ""
  })
});
const _hoisted_1$2 = { class: "text-h5 text-center" };
const _hoisted_2$2 = { class: "text-h5 my-3 text-left" };
const _hoisted_3$1 = { class: "text-h5 my-3 text-left" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PayByBankForm",
  setup(__props) {
    const { smAndDown } = useDisplay();
    const payByBankStore = usePayByBankBankStore();
    const {
      buttonVariant,
      buttonLocale,
      paymentMode,
      creditorIBAN,
      currencyNumericCode: currencyNumericCode2,
      locale,
      merchantID,
      orderId,
      purchaseDescription,
      purchaseTime,
      sessionData,
      signature,
      totalAmountCents,
      url
    } = storeToRefs(payByBankStore);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VRow, null, {
        default: withCtx(() => [
          createVNode(VCol, { cols: "12" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["d-flex align-center justify-space-between mb-5", { "flex-column": unref(smAndDown), "text-center": unref(smAndDown) }])
              }, [
                createBaseVNode("h4", _hoisted_1$2, toDisplayString(_ctx.$t("text.pay.by.bank.form.params")), 1)
              ], 2),
              createVNode(VForm, {
                ref: "paramsFormElement",
                onSubmit: _cache[14] || (_cache[14] = withModifiers(() => {
                }, ["prevent"]))
              }, {
                default: withCtx(() => [
                  createBaseVNode("h3", _hoisted_2$2, toDisplayString(_ctx.$t("text.button.params")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(buttonVariant),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(buttonVariant) ? buttonVariant.value = $event : null),
                            items: ["outlined", "primary", "dark"],
                            label: _ctx.$t("label.variant"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(buttonLocale),
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(buttonLocale) ? buttonLocale.value = $event : null),
                            items: ["en", "uk"],
                            label: _ctx.$t("label.locale"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(paymentMode),
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(paymentMode) ? paymentMode.value = $event : null),
                            items: ["default", "redirect"],
                            label: _ctx.$t("label.payment.mode"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("h3", _hoisted_3$1, toDisplayString(_ctx.$t("text.payment.params")), 1),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(creditorIBAN),
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(creditorIBAN) ? creditorIBAN.value = $event : null),
                            label: _ctx.$t("label.IBAN"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(currencyNumericCode2),
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(currencyNumericCode2) ? currencyNumericCode2.value = $event : null),
                            label: _ctx.$t("label.currency.numeric.code"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(locale),
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(locale) ? locale.value = $event : null),
                            items: ["en", "uk"],
                            label: _ctx.$t("label.locale"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(merchantID),
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(merchantID) ? merchantID.value = $event : null),
                            label: _ctx.$t("label.merchant.id"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(orderId),
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(orderId) ? orderId.value = $event : null),
                            label: _ctx.$t("label.order.id"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(purchaseDescription),
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(purchaseDescription) ? purchaseDescription.value = $event : null),
                            label: _ctx.$t("label.purchase.description"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(purchaseTime),
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => isRef(purchaseTime) ? purchaseTime.value = $event : null),
                            label: _ctx.$t("label.purchase.time"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(sessionData),
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => isRef(sessionData) ? sessionData.value = $event : null),
                            label: _ctx.$t("label.session.data"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(signature),
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => isRef(signature) ? signature.value = $event : null),
                            label: _ctx.$t("label.signature"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(totalAmountCents),
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isRef(totalAmountCents) ? totalAmountCents.value = $event : null),
                            label: _ctx.$t("label.total.amount.cents"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(url),
                            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(url) ? url.value = $event : null),
                            label: _ctx.$t("label.request.url"),
                            variant: "outlined"
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$1 = { class: "d-flex align-center my-5" };
const _hoisted_2$1 = { class: "text-h5" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StepSecond",
  props: {
    mode: {
      type: String,
      required: false,
      default: PaymentMode.Redirect
    }
  },
  setup(__props) {
    const form = ref(null);
    const cartStore = useCartStore();
    const address = fetchBillingAddress();
    cartStore.$patch({
      billingAddress: address
    });
    const billingAddress = ref(address);
    const isEditing = ref(false);
    const onEdit = () => {
      isEditing.value = true;
      cartStore.$patch({
        billingAddress: null
      });
    };
    const onCancel = () => {
      isEditing.value = false;
      billingAddress.value = address;
      cartStore.$patch({
        billingAddress: address
      });
    };
    const onSubmit = async () => {
      const vForm = form.value;
      const { valid } = await vForm.validate();
      if (!valid) {
        return;
      }
      updateBillingAddress(billingAddress.value);
      cartStore.$patch({
        billingAddress: billingAddress.value
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(VRow, null, {
          default: withCtx(() => [
            createVNode(VCol, {
              cols: "12",
              md: "6",
              id: "payment-wrapper"
            })
          ]),
          _: 1
        }),
        createVNode(VRow, null, {
          default: withCtx(() => [
            createVNode(VCol, { cols: "12" }, {
              default: withCtx(() => [
                __props.mode === unref(PaymentMode).Manual ? (openBlock(), createBlock(_sfc_main$3, { key: 0 })) : __props.mode === unref(PaymentMode).PayByBank ? (openBlock(), createBlock(_sfc_main$2, { key: 1 })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  createBaseVNode("div", _hoisted_1$1, [
                    createBaseVNode("h4", _hoisted_2$1, toDisplayString(_ctx.$t("text.billing.address")), 1)
                  ]),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            ref_key: "form",
                            ref: form,
                            class: "py-3",
                            onSubmit: withModifiers(onSubmit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.firstName,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => billingAddress.value.firstName = $event),
                                        color: billingAddress.value.label.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        rules: [unref(rules).required, unref(rules).minLength(2)],
                                        label: "First Name",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "color", "readonly", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.lastName,
                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => billingAddress.value.lastName = $event),
                                        color: billingAddress.value.lastName.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        rules: [unref(rules).required, unref(rules).minLength(2)],
                                        label: "Last Name",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "color", "readonly", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.country,
                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => billingAddress.value.country = $event),
                                        label: "State",
                                        variant: "outlined",
                                        color: billingAddress.value.country.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        rules: [unref(rules).required, unref(rules).minLength(2)]
                                      }, null, 8, ["modelValue", "color", "readonly", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.city,
                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => billingAddress.value.city = $event),
                                        label: "City",
                                        variant: "outlined",
                                        color: billingAddress.value.city.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        rules: [unref(rules).required, unref(rules).minLength(2)]
                                      }, null, 8, ["modelValue", "color", "readonly", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.street,
                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => billingAddress.value.street = $event),
                                        label: "Street",
                                        variant: "outlined",
                                        color: billingAddress.value.street.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        rules: [unref(rules).required, unref(rules).minLength(2)]
                                      }, null, 8, ["modelValue", "color", "readonly", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.building,
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => billingAddress.value.building = $event),
                                        color: billingAddress.value.building.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        rules: [unref(rules).required, unref(rules).minLength(2)],
                                        label: "Building No",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "color", "readonly", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.phoneCode,
                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => billingAddress.value.phoneCode = $event),
                                        color: billingAddress.value.phoneCode.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        label: "Phone code",
                                        placeholder: "380",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "color", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.phone,
                                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => billingAddress.value.phone = $event),
                                        color: billingAddress.value.phone.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        label: "Phone number",
                                        placeholder: "000000000",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "color", "readonly"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: billingAddress.value.email,
                                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => billingAddress.value.email = $event),
                                        color: billingAddress.value.email.length > 2 ? "success" : "primary",
                                        readonly: !isEditing.value,
                                        label: "Email address",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "color", "readonly"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  isEditing.value ? (openBlock(), createBlock(VCol, {
                                    key: 0,
                                    cols: "12",
                                    lg: "12",
                                    class: "text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        class: "mr-4",
                                        color: "error",
                                        type: "button",
                                        variant: "outlined",
                                        onClick: onCancel
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("action.cancel")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        type: "submit",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("action.confirm")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VCol, {
                                    key: 1,
                                    cols: "12",
                                    lg: "12",
                                    class: "text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        type: "button",
                                        variant: "outlined",
                                        onClick: onEdit
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("action.edit")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 64))
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
const submitPaymentRedirect = () => {
  var _a, _b, _c, _d, _e;
  const cartStore = useCartStore();
  const { billingAddress, total, paymentDescription } = storeToRefs(cartStore);
  const payment = new p({
    merchant: merchantData,
    customer: {
      email: ((_a = billingAddress.value) == null ? void 0 : _a.email) ?? "",
      firstName: ((_b = billingAddress.value) == null ? void 0 : _b.firstName) ?? "",
      lastName: ((_c = billingAddress.value) == null ? void 0 : _c.lastName) ?? "",
      phoneCountryCode: ((_d = billingAddress.value) == null ? void 0 : _d.phoneCode) ?? "",
      phoneNumber: ((_e = billingAddress.value) == null ? void 0 : _e.phone) ?? ""
    }
  });
  payment.pay({
    currencyNumericCode,
    description: paymentDescription.value,
    orderId: Date.now().toString(),
    purchaseTime: getPurchaseTime(),
    totalAmountCents: total.value
  });
};
const iframeCallback$1 = (callbackData, mode) => {
  const { data: { height } } = callbackData;
  if (mode === PaymentMode.BuiltInIframe) {
    const wrapper = document.querySelector("#payment-wrapper");
    if (wrapper) {
      wrapper.style.height = `${height + 40}px`;
    }
    return;
  }
  if (mode === PaymentMode.ModalIframe) {
    const wrapper = document.querySelector("#payment-wrapper");
    if (wrapper) {
      wrapper.style.height = "auto";
    }
    const iframe = document.querySelector("#upc-payment-iframe");
    if (iframe) {
      iframe.style.height = `${height + 40}px`;
    }
  }
};
const submitPaymentBuiltIn = () => {
  var _a, _b, _c, _d, _e;
  const cartStore = useCartStore();
  const { billingAddress, total, paymentDescription } = storeToRefs(cartStore);
  const payment = new p({
    mode: "PaymentIframe",
    merchant: merchantData,
    customer: {
      email: ((_a = billingAddress.value) == null ? void 0 : _a.email) ?? "",
      firstName: ((_b = billingAddress.value) == null ? void 0 : _b.firstName) ?? "",
      lastName: ((_c = billingAddress.value) == null ? void 0 : _c.lastName) ?? "",
      phoneCountryCode: ((_d = billingAddress.value) == null ? void 0 : _d.phoneCode) ?? "",
      phoneNumber: ((_e = billingAddress.value) == null ? void 0 : _e.phone) ?? ""
    },
    iframeProps: {
      wrapperSelector: "#payment-wrapper",
      callback: (data) => iframeCallback$1(data, PaymentMode.BuiltInIframe)
    }
  });
  payment.pay({
    currencyNumericCode,
    description: paymentDescription.value,
    orderId: Date.now().toString(),
    purchaseTime: getPurchaseTime(),
    totalAmountCents: total.value
  });
};
const iframeCallback = (callbackData, mode) => {
  const { data: { height } } = callbackData;
  if (mode === PaymentMode.BuiltInIframe) {
    const wrapper = document.querySelector("#payment-wrapper");
    if (wrapper) {
      wrapper.style.height = `${height + 40}px`;
    }
    return;
  }
  if (mode === PaymentMode.ModalIframe) {
    const wrapper = document.querySelector("#payment-wrapper");
    if (wrapper) {
      wrapper.style.height = "auto";
    }
    const iframe = document.querySelector("#upc-payment-iframe");
    if (iframe) {
      iframe.style.height = `${height + 40}px`;
    }
  }
};
const submitPaymentModal = () => {
  var _a, _b, _c, _d, _e;
  const cartStore = useCartStore();
  const { billingAddress, total, paymentDescription } = storeToRefs(cartStore);
  const payment = new p({
    mode: "PaymentModalIframe",
    merchant: merchantData,
    customer: {
      email: ((_a = billingAddress.value) == null ? void 0 : _a.email) ?? "",
      firstName: ((_b = billingAddress.value) == null ? void 0 : _b.firstName) ?? "",
      lastName: ((_c = billingAddress.value) == null ? void 0 : _c.lastName) ?? "",
      phoneCountryCode: ((_d = billingAddress.value) == null ? void 0 : _d.phoneCode) ?? "",
      phoneNumber: ((_e = billingAddress.value) == null ? void 0 : _e.phone) ?? ""
    },
    iframeProps: {
      wrapperSelector: "#payment-wrapper",
      callback: (data) => iframeCallback(data, PaymentMode.ModalIframe)
    }
  });
  payment.pay({
    currencyNumericCode,
    description: paymentDescription.value,
    orderId: Date.now().toString(),
    purchaseTime: getPurchaseTime(),
    totalAmountCents: total.value
  });
};
const makeVBreadcrumbsDividerProps = propsFactory({
  divider: [Number, String],
  ...makeComponentProps()
}, "VBreadcrumbsDivider");
const VBreadcrumbsDivider = genericComponent()({
  name: "VBreadcrumbsDivider",
  props: makeVBreadcrumbsDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("li", {
        "class": ["v-breadcrumbs-divider", props.class],
        "style": props.style
      }, [((_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) ?? props.divider]);
    });
    return {};
  }
});
const makeVBreadcrumbsItemProps = propsFactory({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeRouterProps(),
  ...makeTagProps({
    tag: "li"
  })
}, "VBreadcrumbsItem");
const VBreadcrumbsItem = genericComponent()({
  name: "VBreadcrumbsItem",
  props: makeVBreadcrumbsItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      return props.active || ((_a = link.isActive) == null ? void 0 : _a.value);
    });
    const color = computed(() => isActive.value ? props.activeColor : props.color);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-breadcrumbs-item", {
          "v-breadcrumbs-item--active": isActive.value,
          "v-breadcrumbs-item--disabled": props.disabled,
          [`${props.activeClass}`]: isActive.value && props.activeClass
        }, textColorClasses.value, props.class],
        "style": [textColorStyles.value, props.style],
        "aria-current": isActive.value ? "page" : void 0
      }, {
        default: () => {
          var _a, _b;
          return [!link.isLink.value ? ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.title : createVNode("a", {
            "class": "v-breadcrumbs-item--link",
            "href": link.href.value,
            "aria-current": isActive.value ? "page" : void 0,
            "onClick": link.navigate
          }, [((_b = slots.default) == null ? void 0 : _b.call(slots)) ?? props.title])];
        }
      });
    });
    return {};
  }
});
const makeVBreadcrumbsProps = propsFactory({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: IconValue,
  items: {
    type: Array,
    default: () => []
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "ul"
  })
}, "VBreadcrumbs");
const VBreadcrumbs = genericComponent()({
  name: "VBreadcrumbs",
  props: makeVBreadcrumbsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBreadcrumbsDivider: {
        divider: toRef(props, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor: toRef(props, "activeColor"),
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled")
      }
    });
    const items = computed(() => props.items.map((item) => {
      return typeof item === "string" ? {
        item: {
          title: item
        },
        raw: item
      } : {
        item,
        raw: item
      };
    }));
    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.icon);
      return createVNode(props.tag, {
        "class": ["v-breadcrumbs", backgroundColorClasses.value, densityClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => {
          var _a;
          return [hasPrepend && createVNode("li", {
            "key": "prepend",
            "class": "v-breadcrumbs__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "start": true,
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.icon,
            "defaults": {
              VIcon: {
                icon: props.icon,
                start: true
              }
            }
          }, slots.prepend)]), items.value.map((_ref2, index, array) => {
            var _a2;
            let {
              item,
              raw
            } = _ref2;
            return createVNode(Fragment, null, [((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item,
              index
            })) ?? createVNode(VBreadcrumbsItem, mergeProps({
              "key": index,
              "disabled": index >= array.length - 1
            }, typeof item === "string" ? {
              title: item
            } : item), {
              default: slots.title ? () => {
                var _a3;
                return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
                  item,
                  index
                });
              } : void 0
            }), index < array.length - 1 && createVNode(VBreadcrumbsDivider, null, {
              default: slots.divider ? () => {
                var _a3;
                return (_a3 = slots.divider) == null ? void 0 : _a3.call(slots, {
                  item: raw,
                  index
                });
              } : void 0
            })]);
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    });
    return {};
  }
});
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a, _b;
      return ((_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) ?? false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a;
          return createVNode(Fragment, null, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
function parseItems(items) {
  if (!items) return [];
  return items.map((item) => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const parsedItems = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      return createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }), {
        default: () => [slots.default ? slots.default() : parsedItems.value.map((item) => createVNode(VTab, mergeProps(item, {
          "key": item.text
        }), null))]
      });
    });
    return {};
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a;
  const value = binding.value;
  const target = (value == null ? void 0 : value.parent) ? el.parentElement : el;
  const options = (value == null ? void 0 : value.options) ?? {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? void 0 : _a.$.uid;
  if (!target || !uid) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = target._touchHandlers ?? /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? void 0 : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? void 0 : _b.$.uid;
  if (!(target == null ? void 0 : target._touchHandlers) || !uid) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const Touch$1 = Touch;
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? void 0 : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch: Touch$1
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window2 = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window2 || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window2.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window2) {
        return;
      }
      isTransitioning.value = false;
      if (window2.transitionCount.value > 0) {
        window2.transitionCount.value -= 1;
        if (window2.transitionCount.value === 0) {
          window2.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window2) {
        return;
      }
      isTransitioning.value = true;
      if (window2.transitionCount.value === 0) {
        window2.transitionHeight.value = convertToUnit((_a = window2.rootRef.value) == null ? void 0 : _a.clientHeight);
      }
      window2.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window2) {
          return;
        }
        window2.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window2.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window2.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? void 0 : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const _hoisted_1 = { class: "mt-3 mb-6" };
const _hoisted_2 = { class: "d-flex justify-space-between" };
const _hoisted_3 = { class: "d-flex py-0 align-center" };
const _hoisted_4 = { class: "text-h3 mb-2" };
const _hoisted_5 = { class: "text-h6 font-weight-regular" };
const _hoisted_6 = { class: "text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block" };
const _hoisted_7 = { class: "text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block" };
const _hoisted_8 = {
  key: 1,
  id: "pay-by-bank"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    mode: {
      type: String,
      required: false,
      default: PaymentMode.Redirect
    }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const payByBankStore = usePayByBankBankStore();
    const {
      buttonVariant,
      buttonLocale,
      buttonWrapperSelector,
      paymentMode,
      creditorIBAN,
      currencyNumericCode: currencyNumericCode2,
      locale,
      merchantID,
      orderId,
      purchaseDescription,
      purchaseTime,
      sessionData,
      signature,
      totalAmountCents,
      url
    } = storeToRefs(payByBankStore);
    const page = ref({ title: "Checkout" });
    const breadcrumbs = ref([
      {
        text: "UPC demo-shop",
        disabled: false,
        href: "#"
      },
      {
        text: "Checkout Page",
        disabled: true,
        href: "#"
      }
    ]);
    const cartStore = useCartStore();
    const { selectedProducts, billingAddress } = storeToRefs(cartStore);
    const tab = ref("tab-1");
    const isInitPaymentButtonClickable = computed(() => {
      return billingAddress.value !== null;
    });
    const changeTab = (e) => {
      tab.value = e;
    };
    const initPayment = () => {
      if (props.mode === PaymentMode.Redirect) {
        submitPaymentRedirect();
        return;
      }
      if (props.mode === PaymentMode.BuiltInIframe) {
        submitPaymentBuiltIn();
        return;
      }
      if (props.mode === PaymentMode.ModalIframe) {
        submitPaymentModal();
        return;
      }
    };
    const button = ref(null);
    onMounted(() => {
      if (props.mode === PaymentMode.PayByBank) {
        tab.value = "tab-2";
        nextTick(() => {
          buttonLocale.value = i18n.locale.value;
          button.value = new window.UPCPayByBank({
            buttonProps: {
              locale: buttonLocale.value,
              variant: buttonVariant.value,
              wrapperSelector: buttonWrapperSelector.value,
              mode: paymentMode.value
            },
            getPaymentProps() {
              return {
                orderId: orderId.value,
                url: url.value,
                creditorIBAN: creditorIBAN.value,
                currencyNumericCode: currencyNumericCode2.value,
                locale: locale.value,
                merchantID: merchantID.value,
                purchaseDescription: purchaseDescription.value,
                purchaseTime: purchaseTime.value,
                signature: signature.value,
                totalAmountCents: totalAmountCents.value,
                sessionData: sessionData.value
              };
            },
            callback: () => {
              orderId.value = Date.now().toString();
            }
          });
        });
      }
    });
    watch(buttonLocale, (newValue) => {
      if (button.value) {
        button.value.buttonProps.locale = newValue;
      }
    });
    watch(buttonVariant, (newValue) => {
      if (button.value) {
        button.value.buttonProps.variant = newValue;
      }
    });
    watch(paymentMode, (newValue) => {
      if (button.value) {
        button.value.buttonProps.mode = newValue;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createBaseVNode("h3", _hoisted_4, toDisplayString(page.value.title), 1),
                createVNode(VBreadcrumbs, {
                  items: breadcrumbs.value,
                  class: "pa-0 ml-n1"
                }, createSlots({
                  title: withCtx(({ item }) => [
                    createBaseVNode("h6", _hoisted_5, toDisplayString(item.text), 1)
                  ]),
                  _: 2
                }, [
                  breadcrumbs.value ? {
                    name: "divider",
                    fn: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-chevron-right")
                        ]),
                        _: 1
                      })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["items"])
              ])
            ])
          ])
        ]),
        createVNode(VCard, {
          variant: "outlined",
          class: "bg-surface"
        }, {
          default: withCtx(() => [
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createVNode(VTabs, {
                  modelValue: tab.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
                  color: "primary",
                  class: "customTab"
                }, {
                  default: withCtx(() => [
                    createVNode(VTab, {
                      value: "tab-1",
                      rounded: "md",
                      class: "mb-3 mx-2 text-left",
                      height: "70"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IconBasket), {
                          "stroke-width": "1.5",
                          width: "20",
                          class: "v-icon--start"
                        }),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", null, toDisplayString(_ctx.$t("text.item.cart")), 1),
                          createBaseVNode("span", _hoisted_6, toDisplayString(_ctx.$t("text.product.summary")), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, {
                      value: "tab-2",
                      rounded: "md",
                      class: "mb-3 mx-2 text-left",
                      height: "70",
                      disabled: unref(selectedProducts).size < 1
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IconFileDescription), {
                          "stroke-width": "1.5",
                          width: "20",
                          class: "v-icon--start"
                        }),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", null, toDisplayString(_ctx.$t("text.billing")), 1),
                          createBaseVNode("span", _hoisted_7, toDisplayString(_ctx.$t("text.billing.information")), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(VWindow, {
                  modelValue: tab.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => tab.value = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(VWindowItem, {
                      value: "tab-1",
                      class: "pa-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, { mode: __props.mode }, null, 8, ["mode"]),
                        createVNode(VRow, { class: "mt-3" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "tonal",
                                  to: { name: unref(RouteName).Products, query: { ..._ctx.$route.query } }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("action.continue.shopping")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              class: "text-sm-right"
                            }, {
                              default: withCtx(() => [
                                unref(selectedProducts).size >= 1 ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  color: "primary",
                                  onClick: _cache[1] || (_cache[1] = ($event) => changeTab("tab-2"))
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("action.checkout")), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, {
                      value: "tab-2",
                      class: "pa-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { mode: __props.mode }, null, 8, ["mode"]),
                        createVNode(VRow, { class: "mt-3" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                __props.mode !== unref(PaymentMode).Manual ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  color: "primary",
                                  variant: "tonal",
                                  onClick: _cache[2] || (_cache[2] = ($event) => changeTab("tab-1"))
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("action.back")), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6",
                              class: "text-right"
                            }, {
                              default: withCtx(() => [
                                __props.mode !== unref(PaymentMode).Manual && __props.mode !== unref(PaymentMode).PayByBank ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  color: "primary",
                                  disabled: !isInitPaymentButtonClickable.value,
                                  onClick: initPayment
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("action.complete.an.order")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])) : createCommentVNode("", true),
                                __props.mode === unref(PaymentMode).PayByBank ? (openBlock(), createElementBlock("div", _hoisted_8)) : createCommentVNode("", true)
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
                }, 8, ["modelValue"])
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
