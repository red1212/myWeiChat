(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpages/pages/order-in-line/index"],{

/***/ 157:
/*!*******************************************************************************************************************!*\
  !*** /Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/main.js?{"page":"subpages%2Fpages%2Forder-in-line%2Findex"} ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./subpages/pages/order-in-line/index.vue */ 158));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 158:
/*!**********************************************************************************************!*\
  !*** /Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/subpages/pages/order-in-line/index.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=bbe49450&scoped=true& */ 159);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 161);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_bbe49450_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=bbe49450&lang=scss&scoped=true& */ 165);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bbe49450",
  null,
  false,
  _index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpages/pages/order-in-line/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/*!*****************************************************************************************************************************************!*\
  !*** /Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/subpages/pages/order-in-line/index.vue?vue&type=template&id=bbe49450&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=bbe49450&scoped=true& */ 160);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_bbe49450_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 160:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/subpages/pages/order-in-line/index.vue?vue&type=template&id=bbe49450&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniSection: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-section/components/uni-section/uni-section */ "uni_modules/uni-section/components/uni-section/uni-section").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-section/components/uni-section/uni-section.vue */ 260))
    },
    weituo: function () {
      return __webpack_require__.e(/*! import() | components/weituo/weituo */ "components/weituo/weituo").then(__webpack_require__.bind(null, /*! @/components/weituo/weituo.vue */ 267))
    },
    myTab: function () {
      return __webpack_require__.e(/*! import() | components/my-tab/my-tab */ "components/my-tab/my-tab").then(__webpack_require__.bind(null, /*! @/components/my-tab/my-tab.vue */ 314))
    },
    myCouponid: function () {
      return __webpack_require__.e(/*! import() | components/my-couponid/my-couponid */ "components/my-couponid/my-couponid").then(__webpack_require__.bind(null, /*! @/components/my-couponid/my-couponid.vue */ 286))
    },
    uniFilePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue */ 321))
    },
    menuDetail: function () {
      return Promise.all(/*! import() | components/menu-detail/menu-detail */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/menu-detail/menu-detail")]).then(__webpack_require__.bind(null, /*! @/components/menu-detail/menu-detail.vue */ 339))
    },
    myPay: function () {
      return Promise.all(/*! import() | components/my-pay/my-pay */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/my-pay/my-pay")]).then(__webpack_require__.bind(null, /*! @/components/my-pay/my-pay.vue */ 232))
    },
    myPopup: function () {
      return __webpack_require__.e(/*! import() | components/my-popup/my-popup */ "components/my-popup/my-popup").then(__webpack_require__.bind(null, /*! @/components/my-popup/my-popup.vue */ 175))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.renderSampleArr.length
  var l1 = _vm.__map(_vm.renderSampleArr, function (item, i) {
    var $orig = _vm.__get_orig(item)
    var l0 = _vm.__map(
      _vm.productDetail.skus || [],
      function (item, skus_list_index) {
        var $orig = _vm.__get_orig(item)
        var m0 = _vm.skusComputed(item, i)
        return {
          $orig: $orig,
          m0: m0,
        }
      }
    )
    var m1 = _vm.isUrgent(i)
    return {
      $orig: $orig,
      l0: l0,
      m1: m1,
    }
  })
  var g1 = _vm.renderSampleArr.length
  var l2 = _vm.__map(
    _vm.productDetail.urgents || [],
    function (urgentItem, urgent_list_i) {
      var $orig = _vm.__get_orig(urgentItem)
      var m2 = _vm.urgentComputed(urgentItem)
      return {
        $orig: $orig,
        m2: m2,
      }
    }
  )
  var l3 = _vm.__map(
    _vm.skus_item.List || [],
    function (skusList, skus_list_i) {
      var $orig = _vm.__get_orig(skusList)
      var m3 = _vm.skusItemComputed(skusList)
      return {
        $orig: $orig,
        m3: m3,
      }
    }
  )
  if (!_vm._isMounted) {
    _vm.e0 = function (item, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp = args[args.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        item = _temp2.item,
        i = _temp2.i
      var _temp, _temp2
      return _vm.delProd(item, i)
    }
    _vm.e1 = function (e, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp3 = args[args.length - 1].currentTarget.dataset,
        _temp4 = _temp3.eventParams || _temp3["event-params"],
        i = _temp4.i
      var _temp3, _temp4
      return _vm.inputChange(e, i, "sample_name")
    }
    _vm.e2 = function (e, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp5 = args[args.length - 1].currentTarget.dataset,
        _temp6 = _temp5.eventParams || _temp5["event-params"],
        i = _temp6.i
      var _temp5, _temp6
      return _vm.inputChange(e, i, "sample_component")
    }
    _vm.e3 = function (sampleFormItem, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp7 = args[args.length - 1].currentTarget.dataset,
        _temp8 = _temp7.eventParams || _temp7["event-params"],
        i = _temp8.i
      var _temp7, _temp8
      return _vm.sampleArrChange(sampleFormItem, i, "sample_form")
    }
    _vm.e4 = function (sampleFormItem, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp9 = args[args.length - 1].currentTarget.dataset,
        _temp10 = _temp9.eventParams || _temp9["event-params"],
        i = _temp10.i
      var _temp9, _temp10
      return _vm.sampleArrChange(sampleFormItem, i, "sample_nature")
    }
    _vm.e5 = function (sampleFormItem, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp11 = args[args.length - 1].currentTarget.dataset,
        _temp12 = _temp11.eventParams || _temp11["event-params"],
        i = _temp12.i
      var _temp11, _temp12
      return _vm.sampleArrChange(sampleFormItem, i, "sample_storage_condition")
    }
    _vm.e6 = function (item, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp13 = args[args.length - 1].currentTarget.dataset,
        _temp14 = _temp13.eventParams || _temp13["event-params"],
        item = _temp14.item,
        i = _temp14.i
      var _temp13, _temp14
      return _vm.skustabChange(item, i)
    }
    _vm.e7 = function (e, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp15 = args[args.length - 1].currentTarget.dataset,
        _temp16 = _temp15.eventParams || _temp15["event-params"],
        i = _temp16.i
      var _temp15, _temp16
      return _vm.inputChange(e, i, "sample_recycle")
    }
    _vm.e8 = function (e, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp17 = args[args.length - 1].currentTarget.dataset,
        _temp18 = _temp17.eventParams || _temp17["event-params"],
        i = _temp18.i
      var _temp17, _temp18
      return _vm.inputChange(e, i, "sample_number")
    }
    _vm.e9 = function (e, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp19 = args[args.length - 1].currentTarget.dataset,
        _temp20 = _temp19.eventParams || _temp19["event-params"],
        i = _temp20.i
      var _temp19, _temp20
      return _vm.inputChange(e, i, "sample_sort")
    }
    _vm.e10 = function (e, i) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp21 = args[args.length - 1].currentTarget.dataset,
        _temp22 = _temp21.eventParams || _temp21["event-params"],
        i = _temp22.i
      var _temp21, _temp22
      return _vm.inputChange(e, i, "test_purpose")
    }
    _vm.e11 = function (ID) {
      return _vm.changeCouponID(ID)
    }
    _vm.e12 = function (urgentItem) {
      var args = [],
        len = arguments.length - 1
      while (len-- > 0) args[len] = arguments[len + 1]

      var _temp23 = args[args.length - 1].currentTarget.dataset,
        _temp24 = _temp23.eventParams || _temp23["event-params"],
        urgentItem = _temp24.urgentItem
      var _temp23, _temp24
      return _vm.urgent_listtabChange(urgentItem)
    }
    _vm.e13 = function (skusList) {
      var args = [],
        len = arguments.length - 1
      while (len-- > 0) args[len] = arguments[len + 1]

      var _temp25 = args[args.length - 1].currentTarget.dataset,
        _temp26 = _temp25.eventParams || _temp25["event-params"],
        skusList = _temp26.skusList
      var _temp25, _temp26
      return _vm.skus_listtabChange(skusList)
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l1: l1,
        g1: g1,
        l2: l2,
        l3: l3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 161:
/*!***********************************************************************************************************************!*\
  !*** /Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/subpages/pages/order-in-line/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 162);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 162:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/subpages/pages/order-in-line/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 46));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 48));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _index = __webpack_require__(/*! ../../../util/index.js */ 39);
var _user = __webpack_require__(/*! ../../../util/user.js */ 66);
var _lodash = __webpack_require__(/*! lodash */ 163);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      NumberToFormat: _index.NumberToFormat,
      content: '',
      productDetail: {},
      listStyles: {
        // 是否显示边框
        border: false,
        // 是否显示分隔线
        dividline: false,
        // 线条样式
        borderStyle: {
          width: 0,
          color: 'blue',
          radius: 2
        }
      },
      disable: false,
      showConfirm: false,
      payState: false,
      errTip: {
        'sample_name': '请输入样品名称',
        'sample_component': '请输入成分',
        'sample_number': '请输入检测样品数',
        'test_purpose': '请输入实验要求及目的',
        'sample_sku': '请选择测试明细'
      },
      clickTime: 0,
      clickCountPrice: false,
      imageValue: [],
      Orderno: '',
      CouponID: 0,
      File: "",
      //文件上传路径
      skus_index: 0,
      skus_item: {},
      select_skus: [],
      obj_index: 0,
      defaultValA: {
        "sampleNum": "A",
        //序列👌
        "sample_name": "",
        //样品名称
        "sample_component": "",
        //主要成分
        "sample_recycle": "否",
        //是否回收
        "urgent_name": "",
        //加急项目
        "urgent_price_per": "",
        //加急价格
        "sample_number": '',
        // 检测样品数
        "sample_sort": '',
        //样品排序
        "test_purpose": '' //实验要求及目的
      },

      defaultVal: {},
      renderSampleArr: [{}],
      SampleArr: [{
        "sampleNum": "A",
        //序列👌
        "sample_name": "",
        //样品名称
        "sample_component": "",
        //主要成分
        "sample_recycle": "否",
        //是否回收
        "urgent_name": "",
        //加急项目
        "urgent_price_per": "",
        //加急价格
        "sample_number": '',
        // 检测样品数
        "sample_sort": '',
        //样品排序
        "test_purpose": '',
        //实验要求及目的
        sample_sku: [
          // {
          // 	name: "XAFS硬线中能",
          // 	price: '0',
          // 	list:{
          // 		'0':{
          // 			item_id: '999',
          // 			item_name: "含量大于5%",
          // 			item_price: '4000',
          // 		}
          // 	}		
          // }
        ]
      }],
      sample_recycle_list: [{
        key: '是'
      }, {
        key: '否'
      }],
      totalPrice: 0 //总价
    };
  },

  watch: {
    renderSampleArr: function renderSampleArr(val, newVal) {
      var _this = this;
      val.map(function (item, i) {
        _this.SampleArr[i].sampleNum = _this.NumberToFormat[i];
        _this.$forceUpdate();
      });
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0, _vuex.mapState)('m_client', ['teamList'])), (0, _vuex.mapState)('m_purchase', ['purchaseInfo'])), {}, {
    //计算明细是否选中--大项
    skusComputed: function skusComputed() {
      var _this2 = this;
      return function (item, i) {
        var Name = item.Name;
        var sampleNum = _this2.NumberToFormat[i];
        var isActive = false;
        var res = _this2.SampleArr.filter(function (item) {
          return item.sampleNum == sampleNum;
        });
        if (!(0, _lodash.isEmpty)(res)) {
          var sample_sku_item = res[0].sample_sku.filter(function (item) {
            return item.name == Name;
          });
          if (!(0, _lodash.isEmpty)(sample_sku_item)) {
            isActive = true;
          } else {
            isActive = false;
          }
        }
        return isActive;
      };
    },
    //计算明细项列表样式
    skusItemComputed: function skusItemComputed() {
      var _this3 = this;
      return function (item) {
        var isActive = false;
        if (_this3.skus_item.List) {
          var Name = _this3.skus_item.Name;
          var res = _this3.isCurrentItem(_this3.skus_index);
          if (!(0, _lodash.isEmpty)(res)) {
            var sample_sku_item = res[0].sample_sku.filter(function (item) {
              return item.name == Name;
            });
            if (!(0, _lodash.isEmpty)(sample_sku_item)) {
              var sample_sku_item_child = sample_sku_item[0].list[0] || {};
              if (!(0, _lodash.isEmpty)(sample_sku_item_child)) {
                isActive = sample_sku_item_child.item_id == item.ID ? true : false;
              }
            }
          }
        }
        return isActive;
      };
    },
    //是否加急
    isUrgent: function isUrgent() {
      var _this4 = this;
      return function (i) {
        var isCurrentItem_res = _this4.isCurrentItem(i);
        if (!(0, _lodash.isEmpty)(isCurrentItem_res)) {
          var row_item = isCurrentItem_res[0];
          if (row_item.urgent_name && row_item.urgent_price_per) {
            return true;
          } else {
            return false;
          }
        }
      };
    },
    urgentComputed: function urgentComputed() {
      var _this5 = this;
      return function (item) {
        var fil_sample = _this5.isCurrentItem(_this5.obj_index);
        if (!(0, _lodash.isEmpty)(fil_sample)) {
          if (fil_sample[0].urgent_name == item.Name && fil_sample[0].urgent_price_per == item.PricePer) {
            return true;
          } else {
            return false;
          }
        }
      };
    }
  }),
  onLoad: function onLoad(option) {
    var _this6 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var param, _yield$uni$$http$post, res, _res$data, _res$data2, _res$data3, _res$data4, _res$data5, _res$data6, coupons, _defaultVal;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              uni.showLoading({
                title: '数据加载中...'
              });
              param = {
                ID: parseInt(option.ID)
              };
              _context.next = 4;
              return uni.$http.post('user/order/view', param);
            case 4:
              _yield$uni$$http$post = _context.sent;
              res = _yield$uni$$http$post.data;
              uni.hideLoading();
              if (!(0, _index.isSuccess)(res.code)) {
                _context.next = 21;
                break;
              }
              _this6.productDetail = res.data;
              _this6.content = res.data.product.Content2 || '';
              coupons = res.data.coupons || [];
              if (coupons.length > 0) {
                _this6.CouponID = coupons[0].ID;
              } else {
                coupons = [{
                  ID: 0,
                  Price: '无优惠券可用'
                }];
                _this6.CouponID = coupons[0].ID;
              }
              _defaultVal = {
                sample_form: res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.sample_form ? res.data.sample_form[0] : '',
                //提交 样品形态
                sample_nature: res !== null && res !== void 0 && (_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.sample_nature ? res.data.sample_nature[0] : '',
                //提交 样品性质
                sample_storage_condition: res !== null && res !== void 0 && (_res$data3 = res.data) !== null && _res$data3 !== void 0 && _res$data3.sample_storage_condition ? res.data.sample_storage_condition[0] : '' //提交 保存条件
              };

              _this6.defaultVal = _defaultVal;
              _this6.SampleArr[0].sample_form = res !== null && res !== void 0 && (_res$data4 = res.data) !== null && _res$data4 !== void 0 && _res$data4.sample_form ? res.data.sample_form[0] : ''; //提交 样品形态

              _this6.SampleArr[0].sample_nature = res !== null && res !== void 0 && (_res$data5 = res.data) !== null && _res$data5 !== void 0 && _res$data5.sample_nature ? res.data.sample_nature[0] : ''; //提交 样品性质

              _this6.SampleArr[0].sample_storage_condition = res !== null && res !== void 0 && (_res$data6 = res.data) !== null && _res$data6 !== void 0 && _res$data6.sample_storage_condition ? res.data.sample_storage_condition[0] : ''; //提交 保存条件

              //let sample_sku = res.data?.skus || []  //提交 保存条件

              // if(sample_sku.length > 0){
              // 	let fist_sample_sku =  sample_sku[0]
              // 	let fist_list = fist_sample_sku.List[0]
              // 	this.SampleArr[0].sample_sku[0] ={
              // 		name:fist_sample_sku.Name,
              // 		price:fist_sample_sku.Price,
              // 		list:{
              // 			'0':{
              // 				item_id:fist_list.ID,
              // 				item_price:fist_list.Price,
              // 				item_name:fist_list.Name,
              // 			}
              // 		}
              // 	}
              // }

              _this6.productDetail.coupons = coupons;
              _this6.$refs.parentRef.$refs.popup.open(); //-----后期放开
              _context.next = 22;
              break;
            case 21:
              return _context.abrupt("return", uni.$showMsg(res.message, 1500));
            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)('m_purchase', ['updatePurchaseInfo'])), {}, {
    //是否操作的当前项 ---明细
    isCurrentItem: function isCurrentItem(i) {
      var sampleNum = this.NumberToFormat[i];
      var res = this.SampleArr.filter(function (item) {
        return item.sampleNum == sampleNum;
      });
      return res;
    },
    closePopUp: function closePopUp() {
      this.$refs.parentRef.$refs.popup.close();
    },
    changeCouponID: function changeCouponID(ID) {
      if (this.disable) return;
      this.CouponID = ID;
    },
    //点击加急
    handleUrgent: function handleUrgent(i) {
      if (this.disable) return;
      this.obj_index = i;
      this.$refs.urgentRef.$refs.popup.open();
    },
    //操作加急
    urgent_listtabChange: function urgent_listtabChange(item) {
      var fil_sample = this.isCurrentItem(this.obj_index);
      if (!(0, _lodash.isEmpty)(fil_sample)) {
        var urgent_name = fil_sample[0].urgent_name;
        var urgent_price_per = fil_sample[0].urgent_price_per;
        if (urgent_name == item.Name && urgent_price_per == item.PricePer) {
          //删除
          fil_sample[0].urgent_name = '', fil_sample[0].urgent_price_per = '';
        } else {
          //添加/修改
          fil_sample[0].urgent_name = item.Name;
          fil_sample[0].urgent_price_per = item.PricePer + '';
        }
        this.$forceUpdate();
      }
    },
    urgentclosePopUp: function urgentclosePopUp() {
      this.$refs.urgentRef.$refs.popup.close();
    },
    //检测明细
    skustabChange: function skustabChange(item, i) {
      if (this.disable) return;
      this.skus_item = item;
      this.skus_index = i;
      this.$refs.skusRef.$refs.popup.open();
    },
    //添加明细
    addSkus: function addSkus(is_cur_opt, item) {
      is_cur_opt[0].sample_sku.push({
        name: this.skus_item.Name,
        price: this.skus_item.Price + '',
        list: {
          "0": {
            item_id: item.ID + '',
            item_price: item.Price + '',
            item_name: item.Name
          }
        }
      });
    },
    skus_listtabChange: function skus_listtabChange(item) {
      var _this7 = this;
      if (this.disable) return;
      //第一 先判断点击的当前项之前知否选中
      var is_cur_opt = this.isCurrentItem(this.skus_index);
      // 如果 明细选项不为空
      if (!(0, _lodash.isEmpty)(is_cur_opt)) {
        if (!(0, _lodash.isEmpty)(is_cur_opt[0].sample_sku)) {
          //如果当前操作的和已有的一样则删除
          var is_cur_id_list = is_cur_opt[0].sample_sku.filter(function (list_item) {
            return list_item.list[0].item_id == item.ID;
          });
          if (!(0, _lodash.isEmpty)(is_cur_id_list)) {
            is_cur_opt[0].sample_sku = is_cur_opt[0].sample_sku.filter(function (item) {
              return item.name !== _this7.skus_item.Name;
            });
          } else {
            var is_cur_opt_item = is_cur_opt[0].sample_sku.filter(function (item) {
              return item.name === _this7.skus_item.Name;
            });
            //修改
            if (!(0, _lodash.isEmpty)(is_cur_opt_item)) {
              is_cur_opt_item[0].list = {
                "0": {
                  item_id: item.ID + '',
                  item_price: item.Price + '',
                  item_name: item.Name
                }
              };
            } else {
              //添加
              this.addSkus(is_cur_opt, item);
            }
          }
          this.$forceUpdate();
        } else {
          //添加
          this.addSkus(is_cur_opt, item);
          this.$forceUpdate();
        }
      }
    },
    skusclosePopUp: function skusclosePopUp() {
      this.$refs.skusRef.$refs.popup.close();
    },
    //tab 区域选择
    sampleArrChange: function sampleArrChange(sampleFormItem, i, type) {
      if (this.disable) return;
      this.SampleArr[i][type] = sampleFormItem;
      this.$forceUpdate();
    },
    inputChange: function inputChange(e, i, type) {
      var _is_CurrentItem = this.isCurrentItem(i);
      if (!(0, _lodash.isEmpty)(_is_CurrentItem)) {
        _is_CurrentItem[0][type] = e.detail.value;
      }
      this.$forceUpdate();
    },
    changeInfo: function changeInfo() {
      //重置按钮状态
      this.clickCountPrice = false;
      this.disable = false;
      this.showConfirm = false;
      this.clickTime = 0;
    },
    //计算价格
    countPrice: function countPrice() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var errTip, no_sample_name, no_sample_component, no_sample_number, no_test_purpose, no_sample_sku;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                errTip = _this8.errTip; //判断必填的是否为空
                no_sample_name = (0, _lodash.find)(_this8.SampleArr, {
                  sample_name: ''
                }); //样品名称
                if ((0, _lodash.isEmpty)(no_sample_name)) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", uni.$showMsg(errTip['sample_name'], 1500));
              case 4:
                no_sample_component = (0, _lodash.find)(_this8.SampleArr, {
                  sample_component: ''
                }); //样品成分
                if ((0, _lodash.isEmpty)(no_sample_component)) {
                  _context2.next = 7;
                  break;
                }
                return _context2.abrupt("return", uni.$showMsg(errTip['sample_component'], 1500));
              case 7:
                no_sample_number = (0, _lodash.find)(_this8.SampleArr, {
                  sample_number: ''
                }); //样品数量
                if ((0, _lodash.isEmpty)(no_sample_number)) {
                  _context2.next = 10;
                  break;
                }
                return _context2.abrupt("return", uni.$showMsg(errTip['sample_number'], 1500));
              case 10:
                no_test_purpose = (0, _lodash.find)(_this8.SampleArr, {
                  test_purpose: ''
                }); //检测目的
                if ((0, _lodash.isEmpty)(no_test_purpose)) {
                  _context2.next = 13;
                  break;
                }
                return _context2.abrupt("return", uni.$showMsg(errTip['test_purpose'], 1500));
              case 13:
                no_sample_sku = _this8.SampleArr.filter(function (item) {
                  return item.sample_sku.length == 0;
                });
                if ((0, _lodash.isEmpty)(no_sample_sku)) {
                  _context2.next = 16;
                  break;
                }
                return _context2.abrupt("return", uni.$showMsg(errTip['test_purpose'], 1500));
              case 16:
                _context2.next = 18;
                return (0, _user.orderPrice)(_this8.orderParam());
              case 18:
                _this8.totalPrice = _context2.sent;
                if (!(_this8.totalPrice == '--')) {
                  _context2.next = 21;
                  break;
                }
                return _context2.abrupt("return");
              case 21:
                // //先走计算价格的接口
                _this8.clickCountPrice = true;
              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    orderParam: function orderParam() {
      var Code = this.productDetail.product.Code;

      // ----转换数据格式start----
      var _SampleArr = (0, _toConsumableArray2.default)(this.SampleArr);
      var _val_SampleArr = _SampleArr.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          sample_sku: Object.assign({}, item.sample_sku)
        });
      });
      _val_SampleArr = Object.assign({}, _val_SampleArr);
      // ----转换数据格式end----

      var param = {
        Item: {
          ProductCode: Code,
          File: this.File,
          //上传的附件路径，可选
          SampleArr: _val_SampleArr
        },
        TotalPrice: this.totalPrice,
        //这里后期需要计算
        CouponID: this.CouponID //优惠券id  如果没有优惠券传 0
      };

      return param;
    },
    submit: function submit() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _yield$uni$$http$post2, res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this9.clickTime = _this9.clickTime + 1; //点击次数
                _this9.showConfirm = true; //修改信息按钮
                _this9.disable = true; //确认信息
                if (!(_this9.clickTime === 2)) {
                  _context3.next = 16;
                  break;
                }
                _context3.next = 6;
                return uni.$http.post('user/order/add', _this9.orderParam());
              case 6:
                _yield$uni$$http$post2 = _context3.sent;
                res = _yield$uni$$http$post2.data;
                if (!(0, _index.isSuccess)(res.code)) {
                  _context3.next = 14;
                  break;
                }
                _this9.Orderno = res.data.Orderno || '';
                _this9.showConfirm = false;
                if (!_this9.showConfirm && _this9.disable) {
                  _this9.payState = true;
                } else {
                  _this9.payState = false;
                }
                _context3.next = 16;
                break;
              case 14:
                _this9.clickTime = 0;
                return _context3.abrupt("return", uni.$showMsg(res.message, 1500));
              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    //完成支付
    clickPay: function clickPay(item, type) {
      if (type === 'open') {
        this.$refs.payRef.$refs.popup.open();
      } else {
        this.$refs.payRef.$refs.popup.close();
      }
    },
    comfirmPay: function comfirmPay() {
      this.$refs.payRef.$refs.popup.close();
      uni.navigateTo({
        url: '/subpages/pages/order/index'
      });
    },
    //增加一个样品组
    addProd: function addProd() {
      this.renderSampleArr.push({});
      this.SampleArr.push(_objectSpread(_objectSpread(_objectSpread({}, this.defaultValA), this.defaultVal), {}, {
        sample_sku: []
      }));
    },
    delProd: function delProd(item, i) {
      var _isCurrentItem = this.isCurrentItem(i);
      this.SampleArr = (0, _lodash.difference)(this.SampleArr, _isCurrentItem); //删除指定项
      this.renderSampleArr.shift();
      this.$forceUpdate();
    },
    // 获取上传状态
    select: function select(e) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var tempFilePaths, imgUrl, param;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('选择文件：', e);
                tempFilePaths = e.tempFilePaths; //获取图片临时路径
                imgUrl = tempFilePaths[0];
                param = {
                  key: imgUrl,
                  uptype: '',
                  safe: 0,
                  name: 'imgUrl'
                };
                uni.request({
                  url: 'http://47.97.216.6/admin/api.upload/state.html',
                  //仅为示例，并非真实接口地址。
                  data: {
                    key: imgUrl,
                    uptype: '',
                    safe: 0,
                    name: 'imgUrl'
                  },
                  header: {
                    "Content-Type": "multipart/form-data"
                  },
                  success: function success(res) {
                    console.log(res);
                    // this.text = 'request success';
                  }
                });

                // let {data:res} = await uni.$http.post('admin/api.upload/state.html',param)
                // console.log(res)
                // uni.uploadFile({
                // 	//图片上传地址
                // 	url: 'http://47.97.216.6/admin/api.upload/state.html',  //'http://47.97.216.6/admin/api.upload/file.html',
                // 	key: imgUrl,
                // 	uptype:'',
                // 	safe:0,
                // 	name:'imgUrl',
                // 	//上传名字，注意与后台接收的参数名一致
                // 	//设置请求头
                // 	header: {
                // 		"Content-Type": "multipart/form-data"
                // 	},
                // 	//请求成功，后台返回自己服务器上的图片地址
                // 	success: (uploadFileRes) => {
                // 		console.log(uploadFileRes)
                // 		// console.log('uploadFileRes',JSON.parse(uploadFileRes.data));   
                // 		// //处理数据
                // 		// const path=JSON.parse(uploadFileRes.data)
                // 		// //赋值，前端渲染
                // 		// this.baseFormData.photo=path.imgUrl
                // 	}
                // });
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // 上传成功
    success: function success(e) {
      console.log('上传成功');
    },
    // 上传失败
    fail: function fail(e) {
      console.log('上传失败：', e);
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 165:
/*!********************************************************************************************************************************************************!*\
  !*** /Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/subpages/pages/order-in-line/index.vue?vue&type=style&index=0&id=bbe49450&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_bbe49450_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=bbe49450&lang=scss&scoped=true& */ 166);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_bbe49450_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_bbe49450_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_bbe49450_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_bbe49450_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_bbe49450_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 166:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/qinxiaoting/Desktop/web/myWeiChat/FOFApp/subpages/pages/order-in-line/index.vue?vue&type=style&index=0&id=bbe49450&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[157,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/subpages/pages/order-in-line/index.js.map