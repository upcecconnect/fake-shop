import { I as IconBasket, a as asCurrency, m as makeVInputProps, b as makeVCheckboxBtnProps, u as useFocus, V as VInput, c as VCheckboxBtn, d as makeVSelectionControlProps, e as VSelectionControl, f as makeSelectionControlGroupProps, g as VLabel, h as VSelectionControlGroup, i as VDivider, j as VTextField, k as imageEmpty } from "./VTextField-TWJCBqjZ.js";
import { m as makeVOverlayProps, u as useScopeId, V as VOverlay, f as forwardRefs, a as makeLazyProps, b as useLazy } from "./forwardRefs-CeyhghAF.js";
import { c as createVueComponent, p as propsFactory, I as IconValue, m as makeComponentProps, g as makeDensityProps, h as makeSizeProps, i as makeTagProps, j as makeThemeProps, k as genericComponent, l as useLocale, q as provideTheme, r as useProxiedModel, s as computed, v as clamp, x as createRange, y as shallowRef, z as getUid, A as useRender, b as createVNode, F as Fragment, V as VBtn, B as mergeProps, f as createTextVNode, C as omit, D as ref, d as defineComponent, o as openBlock, a as createBlock, w as withCtx, e as createBaseVNode, u as unref, t as toDisplayString, E as defineStore, G as filterInputAttrs, H as makeGroupProps, J as useGroup, K as provideDefaults, L as toRef, M as inject, N as withDirectives, O as vShow, Q as VExpandTransition, S as Ripple, T as useBackgroundColor, U as resolveDirective, W as VIcon, X as makeElevationProps, Y as makeGroupItemProps, Z as makeRoundedProps, _ as useGroupItem, $ as useElevation, a0 as useRounded, a1 as provide, a2 as makeBorderProps, a3 as makeDimensionProps, a4 as makeLocationProps, a5 as makePositionProps, a6 as useBorder, a7 as useDimension, a8 as useLocation, a9 as usePosition, aa as useProductsListStore, ab as storeToRefs, ac as onMounted, ad as createElementBlock, ae as renderList, af as createCommentVNode, ag as convertToUnit, ah as watch, ai as onBeforeUnmount, aj as CircularBuffer, ak as makeDisplayProps, al as makeLayoutItemProps, am as useRtl, an as useDisplay, ao as useRouter, ap as useSsrBoot, aq as toPhysical, ar as useToggleScope, as as onBeforeMount, at as useLayoutItem, au as Transition, av as nextTick, aw as useCartStore, ax as VImg, ay as pushScopeId, az as popScopeId, aA as _export_sfc } from "./index-DSl-8azQ.js";
import { a as VCardItem, V as VCard, c as VAvatar, b as VCardText } from "./VCard-tA0e8f82.js";
import { V as VSnackbar } from "./VSnackbar-CaJkG02N.js";
import { a as VRow, V as VCol } from "./VRow-BWj4yJbd.js";
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconCheck = createVueComponent("outline", "check", "IconCheck", [["path", { "d": "M5 12l5 5l10 -10", "key": "svg-0" }]]);
/**
 * @license @tabler/icons-vue v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconMenu2 = createVueComponent("outline", "menu-2", "IconMenu2", [["path", { "d": "M4 6l16 0", "key": "svg-0" }], ["path", { "d": "M4 12l16 0", "key": "svg-1" }], ["path", { "d": "M4 18l16 0", "key": "svg-2" }]]);
const makeVRatingProps = propsFactory({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: IconValue,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: IconValue,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (v) => ["top", "bottom"].includes(v)
  },
  ripple: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VRating");
const VRating = genericComponent()({
  name: "VRating",
  props: makeVRatingProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      themeClasses
    } = provideTheme(props);
    const rating = useProxiedModel(props, "modelValue");
    const normalizedValue = computed(() => clamp(parseFloat(rating.value), 0, +props.length));
    const range = computed(() => createRange(Number(props.length), 1));
    const increments = computed(() => range.value.flatMap((v) => props.halfIncrements ? [v - 0.5, v] : [v]));
    const hoverIndex = shallowRef(-1);
    const itemState = computed(() => increments.value.map((value) => {
      const isHovering = props.hover && hoverIndex.value > -1;
      const isFilled = normalizedValue.value >= value;
      const isHovered = hoverIndex.value >= value;
      const isFullIcon = isHovering ? isHovered : isFilled;
      const icon = isFullIcon ? props.fullIcon : props.emptyIcon;
      const activeColor = props.activeColor ?? props.color;
      const color = isFilled || isHovered ? activeColor : props.color;
      return {
        isFilled,
        isHovered,
        icon,
        color
      };
    }));
    const eventState = computed(() => [0, ...increments.value].map((value) => {
      function onMouseenter() {
        hoverIndex.value = value;
      }
      function onMouseleave() {
        hoverIndex.value = -1;
      }
      function onClick() {
        if (props.disabled || props.readonly) return;
        rating.value = normalizedValue.value === value && props.clearable ? 0 : value;
      }
      return {
        onMouseenter: props.hover ? onMouseenter : void 0,
        onMouseleave: props.hover ? onMouseleave : void 0,
        onClick
      };
    }));
    const name = computed(() => props.name ?? `v-rating-${getUid()}`);
    function VRatingItem(_ref2) {
      var _a, _b;
      let {
        value,
        index: index2,
        showStar = true
      } = _ref2;
      const {
        onMouseenter,
        onMouseleave,
        onClick
      } = eventState.value[index2 + 1];
      const id = `${name.value}-${String(value).replace(".", "-")}`;
      const btnProps = {
        color: (_a = itemState.value[index2]) == null ? void 0 : _a.color,
        density: props.density,
        disabled: props.disabled,
        icon: (_b = itemState.value[index2]) == null ? void 0 : _b.icon,
        ripple: props.ripple,
        size: props.size,
        variant: "plain"
      };
      return createVNode(Fragment, null, [createVNode("label", {
        "for": id,
        "class": {
          "v-rating__item--half": props.halfIncrements && value % 1 > 0,
          "v-rating__item--full": props.halfIncrements && value % 1 === 0
        },
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave,
        "onClick": onClick
      }, [createVNode("span", {
        "class": "v-rating__hidden"
      }, [t(props.itemAriaLabel, value, props.length)]), !showStar ? void 0 : slots.item ? slots.item({
        ...itemState.value[index2],
        props: btnProps,
        value,
        index: index2,
        rating: normalizedValue.value
      }) : createVNode(VBtn, mergeProps({
        "aria-label": t(props.itemAriaLabel, value, props.length)
      }, btnProps), null)]), createVNode("input", {
        "class": "v-rating__hidden",
        "name": name.value,
        "id": id,
        "type": "radio",
        "value": value,
        "checked": normalizedValue.value === value,
        "tabindex": -1,
        "readonly": props.readonly,
        "disabled": props.disabled
      }, null)]);
    }
    function createLabel(labelProps) {
      if (slots["item-label"]) return slots["item-label"](labelProps);
      if (labelProps.label) return createVNode("span", null, [labelProps.label]);
      return createVNode("span", null, [createTextVNode(" ")]);
    }
    useRender(() => {
      var _a;
      const hasLabels = !!((_a = props.itemLabels) == null ? void 0 : _a.length) || slots["item-label"];
      return createVNode(props.tag, {
        "class": ["v-rating", {
          "v-rating--hover": props.hover,
          "v-rating--readonly": props.readonly
        }, themeClasses.value, props.class],
        "style": props.style
      }, {
        default: () => [createVNode(VRatingItem, {
          "value": 0,
          "index": -1,
          "showStar": false
        }, null), range.value.map((value, i) => {
          var _a2, _b;
          return createVNode("div", {
            "class": "v-rating__wrapper"
          }, [hasLabels && props.itemLabelPosition === "top" ? createLabel({
            value,
            index: i,
            label: (_a2 = props.itemLabels) == null ? void 0 : _a2[i]
          }) : void 0, createVNode("div", {
            "class": "v-rating__item"
          }, [props.halfIncrements ? createVNode(Fragment, null, [createVNode(VRatingItem, {
            "value": value - 0.5,
            "index": i * 2
          }, null), createVNode(VRatingItem, {
            "value": value,
            "index": i * 2 + 1
          }, null)]) : createVNode(VRatingItem, {
            "value": value,
            "index": i
          }, null)]), hasLabels && props.itemLabelPosition === "bottom" ? createLabel({
            value,
            index: i,
            label: (_b = props.itemLabels) == null ? void 0 : _b[i]
          }) : void 0]);
        })]
      });
    });
    return {};
  }
});
const makeVTooltipProps = propsFactory({
  id: String,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: "end",
    locationStrategy: "connected",
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: "auto",
    scrim: false,
    scrollStrategy: "reposition",
    transition: false
  }), ["absolute", "persistent"])
}, "VTooltip");
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: makeVTooltipProps(),
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
    const id = computed(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = computed(() => {
      if (props.transition) return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip", props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return ((_a = slots.default) == null ? void 0 : _a.call(slots, ...args)) ?? props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _hoisted_1$2 = ["src"];
const _hoisted_2$1 = { class: "d-flex justify-end mr-3 mt-n6" };
const _hoisted_3$1 = { class: "text-h6" };
const _hoisted_4$1 = { class: "d-flex align-center justify-space-between mt-1" };
const _hoisted_5$1 = { class: "d-flex align-center gap-2" };
const _hoisted_6$1 = { class: "text-h6" };
const _hoisted_7 = { class: "text-decoration-line-through text-medium-emphasis" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    offerPrice: {
      type: Number,
      required: true
    }
  },
  emits: {
    "select": () => true
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const successsnackbar = ref(false);
    const rate = ref(props.rating);
    const selectProduct = () => {
      emit("select");
      successsnackbar.value = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VCard, {
        variant: "outlined",
        class: "rounded card-hover overflow-hidden bg-surface"
      }, {
        default: withCtx(() => [
          createBaseVNode("img", {
            alt: "product",
            src: __props.image,
            class: "w-100"
          }, null, 8, _hoisted_1$2),
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(VTooltip, {
              text: _ctx.$t("title.add.to.cart"),
              location: "bottom"
            }, {
              activator: withCtx(({ props: props2 }) => [
                createVNode(VBtn, mergeProps({ icon: "" }, props2, {
                  color: "primary",
                  class: "ml-auto",
                  size: "x-small",
                  onClick: selectProduct
                }), {
                  default: withCtx(() => [
                    createVNode(unref(IconBasket), { size: "18" })
                  ]),
                  _: 2
                }, 1040)
              ]),
              _: 1
            }, 8, ["text"])
          ]),
          createVNode(VCardItem, { class: "pt-1" }, {
            default: withCtx(() => [
              createBaseVNode("h6", _hoisted_3$1, toDisplayString(__props.name), 1),
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("div", _hoisted_5$1, [
                  createBaseVNode("h6", _hoisted_6$1, toDisplayString(unref(asCurrency)(__props.price)) + " UAH", 1),
                  createBaseVNode("p", _hoisted_7, toDisplayString(unref(asCurrency)(__props.offerPrice)) + " UAH", 1)
                ]),
                createVNode(VRating, {
                  modelValue: rate.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => rate.value = $event),
                  color: "warning",
                  "half-increments": "",
                  size: "small",
                  density: "compact"
                }, null, 8, ["modelValue"])
              ])
            ]),
            _: 1
          }),
          createVNode(VSnackbar, {
            modelValue: successsnackbar.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => successsnackbar.value = $event),
            variant: "flat",
            location: "bottom right",
            color: "primary",
            rounded: "md",
            class: "text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("snackbar.item.added.to.the.cart")), 1)
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});
const useProductsFiltersStore = defineStore({
  id: "products/filters",
  state: () => ({
    selectedCategory: "All",
    selectedColor: null,
    selectedGenders: [],
    selectedPrice: null,
    selectedRating: 0
  })
});
const makeVCheckboxProps = propsFactory({
  ...makeVInputProps(),
  ...omit(makeVCheckboxBtnProps(), ["inline"])
}, "VCheckbox");
const VCheckbox = genericComponent()({
  name: "VCheckbox",
  inheritAttrs: false,
  props: makeVCheckboxProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:focused": (focused) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const uid = getUid();
    const id = computed(() => props.id || `checkbox-${uid}`);
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const checkboxProps = VCheckboxBtn.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-checkbox", props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return createVNode(VCheckboxBtn, mergeProps(checkboxProps, {
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event,
            "onFocus": focus,
            "onBlur": blur
          }), slots);
        }
      });
    });
    return {};
  }
});
const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel");
const allowedVariants = ["default", "accordion", "inset", "popout"];
const makeVExpansionPanelsProps = propsFactory({
  color: String,
  static: Boolean,
  variant: {
    type: String,
    default: "default",
    validator: (v) => allowedVariants.includes(v)
  },
  readonly: Boolean,
  ...makeComponentProps(),
  ...makeGroupProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",
  props: makeVExpansionPanelsProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = computed(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        color: toRef(props, "color"),
        readonly: toRef(props, "readonly"),
        static: toRef(props, "static")
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-expansion-panels", themeClasses.value, variantClass.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
  name: "VExpansionPanelText",
  props: makeVExpansionPanelTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-expansion-panel-text", props.class],
          "style": props.style
        }, [slots.default && hasContent.value && createVNode("div", {
          "class": "v-expansion-panel-text__wrapper"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vShow, expansionPanel.isSelected.value]])];
      }
    }));
    return {};
  }
});
const makeVExpansionPanelTitleProps = propsFactory({
  color: String,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  hideActions: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: false
  },
  readonly: Boolean,
  ...makeComponentProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple
  },
  props: makeVExpansionPanelTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    const slotProps = computed(() => ({
      collapseIcon: props.collapseIcon,
      disabled: expansionPanel.disabled.value,
      expanded: expansionPanel.isSelected.value,
      expandIcon: props.expandIcon,
      readonly: props.readonly
    }));
    useRender(() => {
      var _a;
      return withDirectives(createVNode("button", {
        "class": ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": expansionPanel.isSelected.value,
          "v-expansion-panel-title--static": props.static
        }, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "type": "button",
        "tabindex": expansionPanel.disabled.value ? -1 : void 0,
        "disabled": expansionPanel.disabled.value,
        "aria-expanded": expansionPanel.isSelected.value,
        "onClick": !props.readonly ? expansionPanel.toggle : void 0
      }, [createVNode("span", {
        "class": "v-expansion-panel-title__overlay"
      }, null), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideActions && createVNode("span", {
        "class": "v-expansion-panel-title__icon"
      }, [slots.actions ? slots.actions(slotProps.value) : createVNode(VIcon, {
        "icon": expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon
      }, null)])]), [[resolveDirective("ripple"), props.ripple]]);
    });
    return {};
  }
});
const makeVExpansionPanelProps = propsFactory({
  title: String,
  text: String,
  bgColor: String,
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",
  props: makeVExpansionPanelProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupItem = useGroupItem(props, VExpansionPanelSymbol);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "bgColor");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const isDisabled = computed(() => (groupItem == null ? void 0 : groupItem.disabled.value) || props.disabled);
    const selectedIndices = computed(() => groupItem.group.items.value.reduce((arr, item, index2) => {
      if (groupItem.group.selected.value.includes(item.id)) arr.push(index2);
      return arr;
    }, []));
    const isBeforeSelected = computed(() => {
      const index2 = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index2 === 1);
    });
    const isAfterSelected = computed(() => {
      const index2 = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index2 === -1);
    });
    provide(VExpansionPanelSymbol, groupItem);
    provideDefaults({
      VExpansionPanelText: {
        eager: toRef(props, "eager")
      },
      VExpansionPanelTitle: {
        readonly: toRef(props, "readonly")
      }
    });
    useRender(() => {
      const hasText = !!(slots.text || props.text);
      const hasTitle = !!(slots.title || props.title);
      return createVNode(props.tag, {
        "class": ["v-expansion-panel", {
          "v-expansion-panel--active": groupItem.isSelected.value,
          "v-expansion-panel--before-active": isBeforeSelected.value,
          "v-expansion-panel--after-active": isAfterSelected.value,
          "v-expansion-panel--disabled": isDisabled.value
        }, roundedClasses.value, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": ["v-expansion-panel__shadow", ...elevationClasses.value]
          }, null), hasTitle && createVNode(VExpansionPanelTitle, {
            "key": "title",
            "collapseIcon": props.collapseIcon,
            "color": props.color,
            "expandIcon": props.expandIcon,
            "hideActions": props.hideActions,
            "ripple": props.ripple
          }, {
            default: () => [slots.title ? slots.title() : props.title]
          }), hasText && createVNode(VExpansionPanelText, {
            "key": "text"
          }, {
            default: () => [slots.text ? slots.text() : props.text]
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    });
    return {};
  }
});
const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio");
const VRadio = genericComponent()({
  name: "VRadio",
  props: makeVRadioProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VSelectionControl, mergeProps(props, {
      "class": ["v-radio", props.class],
      "style": props.style,
      "type": "radio"
    }), slots));
    return {};
  }
});
const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeVInputProps(),
  ...omit(makeSelectionControlGroupProps(), ["multiple"]),
  trueIcon: {
    type: IconValue,
    default: "$radioOn"
  },
  falseIcon: {
    type: IconValue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup");
const VRadioGroup = genericComponent()({
  name: "VRadioGroup",
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, "modelValue");
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode(VInput, mergeProps({
        "class": ["v-radio-group", props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return createVNode(Fragment, null, [label && createVNode(VLabel, {
            "id": id2.value
          }, {
            default: () => [label]
          }), createVNode(VSelectionControlGroup, mergeProps(controlProps, {
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "defaultsTarget": "VRadio",
            "trueIcon": props.trueIcon,
            "falseIcon": props.falseIcon,
            "type": props.type,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "aria-labelledby": label ? id2.value : void 0,
            "multiple": false
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event
          }), slots)]);
        }
      });
    });
    return {};
  }
});
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "d-flex gap-2 flex-wrap v-col-11 px-0"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductFilters",
  setup(__props) {
    const panel = ref([0, 1, 2, 3, 4]);
    const priceOptions = [
      {
        id: 1,
        label: "1 UAH - 3 UAH",
        filter: {
          min: 0,
          max: 300
        }
      },
      {
        id: 2,
        label: "3 UAH - 5 UAH",
        filter: {
          min: 300,
          max: 500
        }
      },
      {
        id: 3,
        label: "5 UAH - 8 UAH",
        filter: {
          min: 500,
          max: 800
        }
      },
      {
        id: 4,
        label: "8 UAH - 10 UAH",
        filter: {
          min: 800,
          max: 1e3
        }
      },
      {
        id: 5,
        label: "Over 10 UAH",
        filter: {
          min: 1e3,
          max: null
        }
      }
    ];
    const productsListStore = useProductsListStore();
    const { products } = storeToRefs(productsListStore);
    const productsFiltersStore = useProductsFiltersStore();
    const selectedGendersInternal = ref([]);
    const selectedGendersComputed = computed({
      get() {
        return selectedGendersInternal.value;
      },
      set(values) {
        selectedGendersInternal.value = values;
        productsFiltersStore.$patch({
          selectedGenders: values
        });
      }
    });
    const selectedColorInternal = ref(null);
    const selectedColorComputed = computed({
      get() {
        return selectedColorInternal.value;
      },
      set(value) {
        selectedColorInternal.value = value;
        productsFiltersStore.$patch({
          selectedColor: value
        });
      }
    });
    const selectedCategoryInternal = ref("All");
    const selectedCategoryComputed = computed({
      get() {
        return selectedCategoryInternal.value;
      },
      set(value) {
        selectedCategoryInternal.value = value;
        productsFiltersStore.$patch({
          selectedCategory: value
        });
      }
    });
    const selectedFilterPriceInternal = ref(null);
    const selectedPriceComputed = computed({
      get() {
        return selectedFilterPriceInternal.value;
      },
      set(value) {
        selectedFilterPriceInternal.value = value;
        const priceOption = priceOptions.find((priceOption2) => priceOption2.id === value);
        if (priceOption) {
          productsFiltersStore.$patch({
            selectedPrice: priceOption.filter
          });
        }
      }
    });
    const selectedRatingInternal = ref(1);
    const selectedRatingComputed = computed({
      get() {
        return selectedRatingInternal.value;
      },
      set(value) {
        selectedRatingInternal.value = value;
        productsFiltersStore.$patch({
          selectedRating: value
        });
      }
    });
    const productColors = computed(() => {
      const colors = products.value.map((product) => {
        return product.colors;
      });
      return Array.from(new Set(colors.flat()));
    });
    function resetFilters() {
      selectedCategoryComputed.value = "All";
      selectedColorComputed.value = null;
      selectedGendersComputed.value = [];
      selectedPriceComputed.value = null;
      selectedRatingComputed.value = 1;
    }
    onMounted(() => {
      selectedGendersInternal.value = productsFiltersStore.selectedGenders;
      selectedColorInternal.value = productsFiltersStore.selectedColor;
      selectedCategoryInternal.value = productsFiltersStore.selectedCategory;
      selectedRatingInternal.value = productsFiltersStore.selectedRating;
      const selectedPrice = productsFiltersStore.selectedPrice;
      if (!selectedPrice) {
        return;
      }
      const option = priceOptions.find((priceOption) => {
        return priceOption.filter.min === selectedPrice.min && priceOption.filter.max === selectedPrice.max;
      });
      if (option) {
        selectedFilterPriceInternal.value = option.id;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VSheet, { class: "pa-4 pt-1" }, {
        default: withCtx(() => [
          createVNode(VExpansionPanels, {
            modelValue: panel.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => panel.value = $event),
            multiple: ""
          }, {
            default: withCtx(() => [
              createVNode(VExpansionPanel, { elevation: "0" }, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { class: "font-weight-medium custom-accordion" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("text.gender")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, { class: "acco-body" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: selectedGendersComputed.value,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedGendersComputed.value = $event),
                                label: "Male",
                                value: "male",
                                color: "primary"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: selectedGendersComputed.value,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedGendersComputed.value = $event),
                                label: "Female",
                                value: "female",
                                color: "secondary"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: selectedGendersComputed.value,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedGendersComputed.value = $event),
                                label: "Kids",
                                value: "kids",
                                color: "error"
                              }, null, 8, ["modelValue"])
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
              }),
              createVNode(VDivider),
              createVNode(VExpansionPanel, { elevation: "0" }, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { class: "font-weight-medium custom-accordion" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("text.categories")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, { class: "acco-body" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VRadioGroup, {
                                modelValue: selectedCategoryComputed.value,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedCategoryComputed.value = $event)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRadio, {
                                    label: "All",
                                    value: "All",
                                    color: "primary"
                                  }),
                                  createVNode(VRadio, {
                                    label: "Kitchen",
                                    value: "kitchen",
                                    color: "primary"
                                  }),
                                  createVNode(VRadio, {
                                    label: "Electronics",
                                    value: "electronics",
                                    color: "primary"
                                  }),
                                  createVNode(VRadio, {
                                    label: "Books",
                                    value: "books",
                                    color: "primary"
                                  }),
                                  createVNode(VRadio, {
                                    label: "Fashion",
                                    value: "fashion",
                                    color: "primary"
                                  }),
                                  createVNode(VRadio, {
                                    label: "Toys",
                                    value: "toys",
                                    color: "primary"
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VExpansionPanel, { elevation: "0" }, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { class: "font-weight-medium custom-accordion" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("text.colors")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, { class: "acco-body" }, {
                    default: withCtx(() => [
                      productColors.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(productColors.value, (color) => {
                          return openBlock(), createBlock(VAvatar, {
                            key: color,
                            class: "cursor-pointer",
                            color,
                            variant: "flat",
                            size: "small",
                            onClick: () => selectedColorComputed.value = color
                          }, {
                            default: withCtx(() => [
                              selectedColorComputed.value === color ? (openBlock(), createBlock(unref(IconCheck), {
                                key: 0,
                                size: "13"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["color", "onClick"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VExpansionPanel, { elevation: "0" }, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { class: "font-weight-medium custom-accordion" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("text.price")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, { class: "acco-body" }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: selectedPriceComputed.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedPriceComputed.value = $event),
                        class: "custom-radio-box"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createElementBlock(Fragment, null, renderList(priceOptions, (priceItem) => {
                            return createVNode(VRadio, {
                              key: priceItem.label,
                              label: priceItem.label,
                              color: "primary",
                              value: priceItem.id
                            }, null, 8, ["label", "value"]);
                          }), 64))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VExpansionPanel, { elevation: "0" }, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { class: "font-weight-medium custom-accordion" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("text.rating")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, { class: "acco-body" }, {
                    default: withCtx(() => [
                      createVNode(VRating, {
                        hover: "",
                        color: "warning",
                        modelValue: selectedRatingComputed.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedRatingComputed.value = $event),
                        class: "ma-2",
                        density: "compact"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(VBtn, {
            color: "primary",
            onClick: _cache[7] || (_cache[7] = ($event) => resetFilters()),
            block: "",
            class: "mt-5"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("action.reset.filters")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
function useSticky(_ref) {
  let {
    rootEl,
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  onMounted(() => {
    watch(isSticky, (val) => {
      if (val) {
        window.addEventListener("scroll", onScroll, {
          passive: true
        });
      } else {
        window.removeEventListener("scroll", onScroll);
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
  let lastScrollTop = 0;
  function onScroll() {
    const direction = lastScrollTop > window.scrollY ? "up" : "down";
    const rect = rootEl.value.getBoundingClientRect();
    const layoutTop = parseFloat(layoutItemStyles.value.top ?? 0);
    const top = window.scrollY - Math.max(0, stuckPosition.value - layoutTop);
    const bottom = rect.height + Math.max(stuckPosition.value, layoutTop) - window.scrollY - window.innerHeight;
    const bodyScroll = parseFloat(getComputedStyle(rootEl.value).getPropertyValue("--v-body-scroll-y")) || 0;
    if (rect.height < window.innerHeight - layoutTop) {
      isStuck.value = "top";
      stuckPosition.value = layoutTop;
    } else if (direction === "up" && isStuck.value === "bottom" || direction === "down" && isStuck.value === "top") {
      stuckPosition.value = window.scrollY + rect.top - bodyScroll;
      isStuck.value = true;
    } else if (direction === "down" && bottom <= 0) {
      stuckPosition.value = 0;
      isStuck.value = "bottom";
    } else if (direction === "up" && top <= 0) {
      if (!bodyScroll) {
        stuckPosition.value = rect.top + top;
        isStuck.value = "top";
      } else if (isStuck.value !== "top") {
        stuckPosition.value = -top + bodyScroll + layoutTop;
        isStuck.value = "top";
      }
    }
    lastScrollTop = window.scrollY;
  }
  return {
    isStuck,
    stickyStyles
  };
}
const HORIZON = 100;
const HISTORY = 20;
function kineticEnergyToVelocity(work) {
  const sqrt2 = 1.41421356237;
  return (work < 0 ? -1 : 1) * Math.sqrt(Math.abs(work)) * sqrt2;
}
function calculateImpulseVelocity(samples) {
  if (samples.length < 2) {
    return 0;
  }
  if (samples.length === 2) {
    if (samples[1].t === samples[0].t) {
      return 0;
    }
    return (samples[1].d - samples[0].d) / (samples[1].t - samples[0].t);
  }
  let work = 0;
  for (let i = samples.length - 1; i > 0; i--) {
    if (samples[i].t === samples[i - 1].t) {
      continue;
    }
    const vprev = kineticEnergyToVelocity(work);
    const vcurr = (samples[i].d - samples[i - 1].d) / (samples[i].t - samples[i - 1].t);
    work += (vcurr - vprev) * Math.abs(vcurr);
    if (i === samples.length - 1) {
      work *= 0.5;
    }
  }
  return kineticEnergyToVelocity(work) * 1e3;
}
function useVelocity() {
  const touches = {};
  function addMovement(e) {
    Array.from(e.changedTouches).forEach((touch) => {
      const samples = touches[touch.identifier] ?? (touches[touch.identifier] = new CircularBuffer(HISTORY));
      samples.push([e.timeStamp, touch]);
    });
  }
  function endTouch(e) {
    Array.from(e.changedTouches).forEach((touch) => {
      delete touches[touch.identifier];
    });
  }
  function getVelocity(id) {
    var _a;
    const samples = (_a = touches[id]) == null ? void 0 : _a.values().reverse();
    if (!samples) {
      throw new Error(`No samples for touch id ${id}`);
    }
    const newest = samples[0];
    const x = [];
    const y = [];
    for (const val of samples) {
      if (newest[0] - val[0] > HORIZON) break;
      x.push({
        t: val[0],
        d: val[1].clientX
      });
      y.push({
        t: val[0],
        d: val[1].clientY
      });
    }
    return {
      x: calculateImpulseVelocity(x),
      y: calculateImpulseVelocity(y),
      get direction() {
        const {
          x: x2,
          y: y2
        } = this;
        const [absX, absY] = [Math.abs(x2), Math.abs(y2)];
        return absX > absY && x2 >= 0 ? "right" : absX > absY && x2 <= 0 ? "left" : absY > absX && y2 >= 0 ? "down" : absY > absX && y2 <= 0 ? "up" : oops$1();
      }
    };
  }
  return {
    addMovement,
    endTouch,
    getVelocity
  };
}
function oops$1() {
  throw new Error();
}
function useTouch(_ref) {
  let {
    isActive,
    isTemporary,
    width,
    touchless,
    position
  } = _ref;
  onMounted(() => {
    window.addEventListener("touchstart", onTouchstart, {
      passive: true
    });
    window.addEventListener("touchmove", onTouchmove, {
      passive: false
    });
    window.addEventListener("touchend", onTouchend, {
      passive: true
    });
  });
  onBeforeUnmount(() => {
    window.removeEventListener("touchstart", onTouchstart);
    window.removeEventListener("touchmove", onTouchmove);
    window.removeEventListener("touchend", onTouchend);
  });
  const isHorizontal = computed(() => ["left", "right"].includes(position.value));
  const {
    addMovement,
    endTouch,
    getVelocity
  } = useVelocity();
  let maybeDragging = false;
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  const offset = shallowRef(0);
  let start;
  function getOffset(pos, active) {
    return (position.value === "left" ? pos : position.value === "right" ? document.documentElement.clientWidth - pos : position.value === "top" ? pos : position.value === "bottom" ? document.documentElement.clientHeight - pos : oops()) - (active ? width.value : 0);
  }
  function getProgress(pos) {
    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const progress = position.value === "left" ? (pos - offset.value) / width.value : position.value === "right" ? (document.documentElement.clientWidth - pos - offset.value) / width.value : position.value === "top" ? (pos - offset.value) / width.value : position.value === "bottom" ? (document.documentElement.clientHeight - pos - offset.value) / width.value : oops();
    return limit ? Math.max(0, Math.min(1, progress)) : progress;
  }
  function onTouchstart(e) {
    if (touchless.value) return;
    const touchX = e.changedTouches[0].clientX;
    const touchY = e.changedTouches[0].clientY;
    const touchZone = 25;
    const inTouchZone = position.value === "left" ? touchX < touchZone : position.value === "right" ? touchX > document.documentElement.clientWidth - touchZone : position.value === "top" ? touchY < touchZone : position.value === "bottom" ? touchY > document.documentElement.clientHeight - touchZone : oops();
    const inElement = isActive.value && (position.value === "left" ? touchX < width.value : position.value === "right" ? touchX > document.documentElement.clientWidth - width.value : position.value === "top" ? touchY < width.value : position.value === "bottom" ? touchY > document.documentElement.clientHeight - width.value : oops());
    if (inTouchZone || inElement || isActive.value && isTemporary.value) {
      maybeDragging = true;
      start = [touchX, touchY];
      offset.value = getOffset(isHorizontal.value ? touchX : touchY, isActive.value);
      dragProgress.value = getProgress(isHorizontal.value ? touchX : touchY);
      endTouch(e);
      addMovement(e);
    }
  }
  function onTouchmove(e) {
    const touchX = e.changedTouches[0].clientX;
    const touchY = e.changedTouches[0].clientY;
    if (maybeDragging) {
      if (!e.cancelable) {
        maybeDragging = false;
        return;
      }
      const dx = Math.abs(touchX - start[0]);
      const dy = Math.abs(touchY - start[1]);
      const thresholdMet = isHorizontal.value ? dx > dy && dx > 3 : dy > dx && dy > 3;
      if (thresholdMet) {
        isDragging.value = true;
        maybeDragging = false;
      } else if ((isHorizontal.value ? dy : dx) > 3) {
        maybeDragging = false;
      }
    }
    if (!isDragging.value) return;
    e.preventDefault();
    addMovement(e);
    const progress = getProgress(isHorizontal.value ? touchX : touchY, false);
    dragProgress.value = Math.max(0, Math.min(1, progress));
    if (progress > 1) {
      offset.value = getOffset(isHorizontal.value ? touchX : touchY, true);
    } else if (progress < 0) {
      offset.value = getOffset(isHorizontal.value ? touchX : touchY, false);
    }
  }
  function onTouchend(e) {
    maybeDragging = false;
    if (!isDragging.value) return;
    addMovement(e);
    isDragging.value = false;
    const velocity = getVelocity(e.changedTouches[0].identifier);
    const vx = Math.abs(velocity.x);
    const vy = Math.abs(velocity.y);
    const thresholdMet = isHorizontal.value ? vx > vy && vx > 400 : vy > vx && vy > 3;
    if (thresholdMet) {
      isActive.value = velocity.direction === ({
        left: "right",
        right: "left",
        top: "down",
        bottom: "up"
      }[position.value] || oops());
    } else {
      isActive.value = dragProgress.value > 0.5;
    }
  }
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDisplayProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    onBeforeMount(() => {
      if (props.modelValue != null || isTemporary.value) return;
      isActive.value = props.permanent || !mobile.value;
    });
    const {
      isDragging,
      dragProgress,
      dragStyles
    } = useTouch({
      isActive,
      isTemporary,
      width,
      touchless: toRef(props, "touchless"),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize: width,
      active: computed(() => isActive.value || isDragging.value),
      disableTransitions: computed(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    function onMouseenter() {
      isHovering.value = true;
    }
    function onMouseleave() {
      isHovering.value = false;
    }
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, dragStyles.value, ssrBootStyles.value, stickyStyles.value, props.style]
      }, scopeId, attrs), {
        default: () => {
          var _a, _b, _c, _d;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-navigation-drawer__img"
          }, [slots.image ? (_a = slots.image) == null ? void 0 : _a.call(slots, {
            image: props.image
          }) : createVNode("img", {
            "src": props.image,
            "alt": ""
          }, null)]), slots.prepend && createVNode("div", {
            "class": "v-navigation-drawer__prepend"
          }, [(_b = slots.prepend) == null ? void 0 : _b.call(slots)]), createVNode("div", {
            "class": "v-navigation-drawer__content"
          }, [(_c = slots.default) == null ? void 0 : _c.call(slots)]), slots.append && createVNode("div", {
            "class": "v-navigation-drawer__append"
          }, [(_d = slots.append) == null ? void 0 : _d.call(slots)])];
        }
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => isActive.value = false
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-ec870b0f"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "d-flex mainbox" };
const _hoisted_2 = {
  key: 0,
  class: "left-part"
};
const _hoisted_3 = { class: "right-part" };
const _hoisted_4 = { class: "d-flex gap-2 align-center mb-4 justify-space-between" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h5", { class: "text-h5 d-none d-lg-flex font-weight-semibold" }, "Products", -1));
const _hoisted_6 = { class: "text-h1 mt-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { lgAndUp } = useDisplay();
    const sDrawer = ref(false);
    const productsListStore = useProductsListStore();
    const { products } = storeToRefs(productsListStore);
    const cartStore = useCartStore();
    const userSearchValue = ref("");
    const productsFiltersStore = useProductsFiltersStore();
    const { selectedGenders, selectedColor, selectedPrice, selectedCategory, selectedRating } = storeToRefs(productsFiltersStore);
    const filteredProducts = computed(() => {
      let productsList = [...products.value].sort((item1, item2) => {
        const price1 = item1.price;
        const price2 = item2.price;
        return price1 - price2;
      });
      if (userSearchValue.value) {
        productsList = productsList.filter((product) => {
          return product.name.toLowerCase().includes(userSearchValue.value.toLowerCase());
        });
      }
      if (selectedGenders.value.length) {
        productsList = productsList.filter((product) => {
          return selectedGenders.value.includes(product.gender);
        });
      }
      if (selectedCategory.value !== "All") {
        productsList = productsList.filter((product) => {
          return product.categories.includes(selectedCategory.value);
        });
      }
      if (selectedColor.value && selectedColor.value !== "All") {
        productsList = productsList.filter((product) => product.colors.includes(selectedColor.value ?? ""));
      }
      if (selectedPrice.value) {
        const minPrice = selectedPrice.value.min;
        const maxPrice = selectedPrice.value.max;
        productsList = productsList.filter((product) => {
          return product.price > minPrice && (maxPrice ? product.price < maxPrice : true);
        });
      }
      if (selectedRating.value) {
        productsList = productsList.filter((product) => {
          return product.rating >= selectedRating.value;
        });
      }
      return productsList;
    });
    const addToCart = (productId) => {
      cartStore.addProductToCart(productId);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VCard, {
        elevation: "10",
        class: "inside-left-sidebar overflow-hidden"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            unref(lgAndUp) ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_sfc_main$1)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_3, [
              createVNode(VBtn, {
                block: "",
                onClick: _cache[0] || (_cache[0] = ($event) => sDrawer.value = !sDrawer.value),
                variant: "text",
                class: "d-lg-none d-md-flex d-sm-flex"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IconMenu2), {
                    size: "20",
                    class: "mr-2"
                  }),
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("text.menu")), 1)
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "d-lg-none d-block" }),
              createVNode(VSheet, { class: "pa-4" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, [
                    _hoisted_5,
                    createVNode(VSheet, { width: "300" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          variant: "outlined",
                          modelValue: userSearchValue.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => userSearchValue.value = $event),
                          "prepend-inner-icon": "mdi-magnify",
                          placeholder: "Search Product",
                          density: "compact",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  filteredProducts.value.length >= 1 ? (openBlock(), createBlock(VRow, { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                        return openBlock(), createBlock(VCol, {
                          cols: "12",
                          lg: "4",
                          sm: "6",
                          key: product.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              name: product.name,
                              image: product.image,
                              description: product.description,
                              price: product.price,
                              offerPrice: product.offerPrice,
                              rating: product.rating,
                              onSelect: ($event) => addToCart(product.id)
                            }, null, 8, ["name", "image", "description", "price", "offerPrice", "rating", "onSelect"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(VRow, {
                    key: 1,
                    class: "justify-center mt-10"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        class: "text-center",
                        lg: "7"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: unref(imageEmpty),
                            alt: "cover"
                          }, null, 8, ["src"]),
                          createBaseVNode("h1", _hoisted_6, toDisplayString(_ctx.$t("text.there.is.no.product")), 1),
                          createBaseVNode("p", null, toDisplayString(_ctx.$t("text.there.is.no.product.description")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ])
          ]),
          !unref(lgAndUp) ? (openBlock(), createBlock(VNavigationDrawer, {
            key: 0,
            temporary: "",
            modelValue: sDrawer.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sDrawer.value = $event),
            width: "320",
            top: ""
          }, {
            default: withCtx(() => [
              createVNode(VCardText, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ec870b0f"]]);
export {
  index as default
};
