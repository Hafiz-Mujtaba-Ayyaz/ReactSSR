/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/client/actions/index.js\");\n\nvar _Header = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(route.routes)\n  );\n};\n\nexports[\"default\"] = {\n  component: App,\n  loadData: function loadData(_ref2) {\n    var dispatch = _ref2.dispatch;\n    return dispatch((0, _actions.fetchCurrentUser)());\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/App.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _UsersListPage = __webpack_require__(/*! ./pages/UsersListPage */ \"./src/client/pages/UsersListPage.js\");\n\nvar _UsersListPage2 = _interopRequireDefault(_UsersListPage);\n\nvar _NotFoundPage = __webpack_require__(/*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage.js\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nvar _AdminsListPage = __webpack_require__(/*! ./pages/AdminsListPage */ \"./src/client/pages/AdminsListPage.js\");\n\nvar _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);\n\nvar _Home = __webpack_require__(/*! ./pages/home/Home */ \"./src/client/pages/home/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = [_extends({}, _App2.default, {\n  routes: [_extends({}, _HomePage2.default, {\n    path: \"/\",\n    exact: true\n  }), _extends({}, _AdminsListPage2.default, {\n    path: \"/admins\"\n  }), _extends({}, _UsersListPage2.default, {\n    path: \"/users\"\n  }), _extends({}, _Home2.default, {\n    path: \"/home\"\n  }), _extends({}, _NotFoundPage2.default)]\n})];\n\n//# sourceURL=webpack://react-ssr/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.fetchHomeLinks = exports.FETCH_HOME_LINKS = exports.setHomeLinks = exports.fetchAdmins = exports.FETCH_ADMINS = exports.fetchCurrentUser = exports.FETCH_CURRENT_USER = exports.fetchUsers = exports.FETCH_USERS = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return api.get('/users');\n\n            case 2:\n              res = _context.sent;\n\n\n              dispatch({\n                type: FETCH_USERS,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return api.get('/current_user');\n\n            case 2:\n              res = _context2.sent;\n\n\n              dispatch({\n                type: FETCH_CURRENT_USER,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\nvar FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';\nvar fetchAdmins = exports.fetchAdmins = function fetchAdmins() {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return api.get('/admins');\n\n            case 2:\n              res = _context3.sent;\n\n\n              dispatch({\n                type: FETCH_ADMINS,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\nvar setHomeLinks = exports.setHomeLinks = function setHomeLinks(links) {\n  return {\n    type: 'SET_HOME_LINKS',\n    payload: links\n  };\n};\n\nvar FETCH_HOME_LINKS = exports.FETCH_HOME_LINKS = 'fetch_home_links';\n\nvar fetchHomeLinks = exports.fetchHomeLinks = function fetchHomeLinks() {\n  return function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return _axios2.default.get('https://content-stage.lamudi.pk/get-home-links/1');\n\n            case 2:\n              res = _context4.sent;\n\n              console.log('yo->\\n', res.data[0].links);\n\n              dispatch({\n                type: FETCH_HOME_LINKS,\n                payload: res\n              });\n\n            case 5:\n            case 'end':\n              return _context4.stop();\n          }\n        }\n      }, _callee4, undefined);\n    }));\n\n    return function (_x10) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/common/footer.js":
/*!*************************************!*\
  !*** ./src/client/common/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _md = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n\nvar _fa = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n\nvar _footerModule = __webpack_require__(/*! ../variables/footer.module.scss */ \"./src/client/variables/footer.module.scss\");\n\nvar _footerModule2 = _interopRequireDefault(_footerModule);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n// import Link from \"react-router-dom\";\n\n// import Container from \"../base/container\"\n\n// import LayoutGrid from \"../base/layout-grid\";\n// import Logo from \"./logo\";\n// import { Telephone, Facebook, Twitter, LinkedIn } from \"../icons/svg-icons\";\n\n\nvar Container = function Container(_ref) {\n  var children = _ref.children,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className;\n\n  return _react2.default.createElement(\n    \"div\",\n    {\n      style: {\n        maxWidth: \"71.25rem\",\n        paddingInline: \"1rem\",\n        marginInline: \"auto\",\n        width: \"100%\"\n      }\n    },\n    children\n  );\n};\nvar Logo = function Logo(_ref2) {\n  var _ref2$className = _ref2.className,\n      className = _ref2$className === undefined ? \"\" : _ref2$className,\n      _ref2$variant = _ref2.variant,\n      variant = _ref2$variant === undefined ? \"white\" : _ref2$variant,\n      _ref2$width = _ref2.width,\n      width = _ref2$width === undefined ? 104 : _ref2$width,\n      props = _objectWithoutProperties(_ref2, [\"className\", \"variant\", \"width\"]);\n\n  var opts = {\n    primaryColor: \"#ff8700\",\n    secondaryColor: variant === \"white\" ? \"#fff\" : \"#2a65d3\"\n  };\n  return _react2.default.createElement(\n    \"svg\",\n    _extends({\n      className: (\"\" + className).trim(),\n      width: width,\n      viewBox: \"0 0 104 28\"\n    }, props),\n    _react2.default.createElement(\"path\", {\n      d: \"M12.268.001a12.33 12.33 0 00-4.672 23.715V15.87l-1.75 1.473-1.963-2.327 3.843-4.043V6.521h3.162v2.47l4-3.858s6.451 5.136 9.65 7.19A12.3 12.3 0 0012.267 0v.001z\",\n      fill: opts.primaryColor\n    }),\n    _react2.default.createElement(\"path\", {\n      d: \"M103.57 9.321a2.679 2.679 0 01-3.205 2.613 2.676 2.676 0 112.424-4.51 2.686 2.686 0 01.781 1.897zM21.784 26.732H11.251V10.658h4.788v12.067h5.745v4.007zm11.841-6.519a2.833 2.833 0 00-2.845-2.843 2.71 2.71 0 00-2.161 1 2.831 2.831 0 000 3.693 2.681 2.681 0 002.16 1 2.814 2.814 0 002.846-2.843v-.007zm4.3 6.52H33.49v-1.632a4.541 4.541 0 01-1.28 1.165 5.155 5.155 0 01-2.572.641 6.079 6.079 0 01-4.149-1.61 6.462 6.462 0 01-2.168-5.09 6.45 6.45 0 012.222-5.14 6.01 6.01 0 014.057-1.529 5.792 5.792 0 012.505.554 5 5 0 011.388 1.07V13.93h4.437v12.8l-.005.003z\",\n      fill: opts.secondaryColor\n    }),\n    _react2.default.createElement(\"path\", {\n      d: \"M100.862 13.155a3.766 3.766 0 01-2.357-.829h-.03v14.408h4.8V12.326h-.052a3.77 3.77 0 01-2.358.83M62.164 26.732h-4.438V20.29a4.98 4.98 0 00-.337-2.217 1.616 1.616 0 00-1.5-.88 1.89 1.89 0 00-1.7.96 4.2 4.2 0 00-.417 2.137v6.442h-4.435V20.29a5.19 5.19 0 00-.27-2.11 1.774 1.774 0 00-1.658-.973 1.856 1.856 0 00-1.618.839 1.96 1.96 0 00-.31.817c-.074.472-.108.95-.1 1.427v6.442h-4.432v-12.8h4.437v1.544a6.886 6.886 0 011.432-1.111 5.426 5.426 0 012.62-.636 4.852 4.852 0 013.081.961c.47.39.872.857 1.188 1.381a4.749 4.749 0 014.2-2.356c.88-.015 1.747.22 2.5.677.75.454 1.3 1.175 1.54 2.018.157.628.23 1.275.216 1.923v8.4l.001-.001zM78.5 21.907a4.526 4.526 0 01-3.3 4.658c-1.086.34-2.221.5-3.359.473-2.6 0-4.467-.64-5.6-1.922a4.664 4.664 0 01-1.083-3.209V13.93h4.436v7.122a2.341 2.341 0 00.564 1.734 2.633 2.633 0 003.337 0 2.345 2.345 0 00.564-1.734V13.93H78.5v7.977zm12.808-1.687a2.766 2.766 0 00-.833-2.03 2.738 2.738 0 00-2.012-.834 2.699 2.699 0 00-2.162 1 2.871 2.871 0 000 3.72 2.674 2.674 0 002.162 1 2.743 2.743 0 002.02-.828 2.772 2.772 0 00.825-2.036v.008zm4.3 6.513h-4.435v-1.632a4.552 4.552 0 01-1.279 1.165 5.162 5.162 0 01-2.573.641 6.076 6.076 0 01-4.148-1.61A6.461 6.461 0 0181 20.207a6.447 6.447 0 012.223-5.14 6.011 6.011 0 014.054-1.528c.866-.004 1.72.19 2.5.568.521.273.99.635 1.387 1.07V6.62h4.438l.006 20.113z\",\n      fill: opts.primaryColor\n    })\n  );\n};\nvar links = {\n  company: [{\n    href: \"/aboutus.html\",\n    title: \"About Us\"\n  }, {\n    href: \"/contactus.html\",\n    title: \"Contact us\"\n  }, {\n    href: \"/terms.html\",\n    title: \"Terms & Privacy Policy\"\n  }, {\n    href: \"/blog/\",\n    title: \"Blog\",\n    external: true\n  }]\n};\n\nvar sampleLinks = [{\n  title: \"Browse By City\",\n  links: [{\n    id: 27731,\n    link_text: \"Houses for Sale in Lahore\",\n    ads_count: 26744,\n    slug: \"/lahore/houses-for-sale-1\"\n  }, {\n    id: 27732,\n    link_text: \"Houses for Sale in Karachi\",\n    ads_count: 16787,\n    slug: \"/karachi/houses-for-sale-2\"\n  }, {\n    id: 27733,\n    link_text: \"Houses for Sale in Islamabad\",\n    ads_count: 9901,\n    slug: \"/islamabad/houses-for-sale-3\"\n  }, {\n    id: 27743,\n    link_text: \"Houses for Sale in Faisalabad\",\n    ads_count: 3238,\n    slug: \"/faisalabad/houses-for-sale-16\"\n  }, {\n    id: 27744,\n    link_text: \"Houses for Sale in Peshawar\",\n    ads_count: 3189,\n    slug: \"/peshawar/houses-for-sale-17\"\n  }, {\n    id: 27742,\n    link_text: \"Houses for Sale in Multan\",\n    ads_count: 3184,\n    slug: \"/multan/houses-for-sale-15\"\n  }, {\n    id: 27747,\n    link_text: \"Houses for Sale in Gujrat\",\n    ads_count: 430,\n    slug: \"/gujrat/houses-for-sale-c27747\"\n  }, {\n    id: 27746,\n    link_text: \"Houses for Sale in Jhelum\",\n    ads_count: 159,\n    slug: \"/jhelum/houses-for-sale-19\"\n  }, {\n    id: 27745,\n    link_text: \"Houses for Sale in Quetta\",\n    ads_count: 133,\n    slug: \"/quetta/houses-for-sale-18\"\n  }]\n}, {\n  title: \"Browse Plots For Sale\",\n  links: [{\n    id: 39988,\n    link_text: \"Residential Plots for Sale in Lahore\",\n    ads_count: 58498,\n    slug: \"/lahore/residential-plots-for-sale-1\"\n  }, {\n    id: 39990,\n    link_text: \"Residential Plots for Sale in Islamabad\",\n    ads_count: 37523,\n    slug: \"/islamabad/residential-plots-for-sale-3\"\n  }, {\n    id: 39989,\n    link_text: \"Residential Plots for Sale in Karachi\",\n    ads_count: 24909,\n    slug: \"/karachi/residential-plots-for-sale-2\"\n  }, {\n    id: 39999,\n    link_text: \"Residential Plots for Sale in Multan\",\n    ads_count: 13484,\n    slug: \"/multan/residential-plots-for-sale-15\"\n  }, {\n    id: 40000,\n    link_text: \"Residential Plots for Sale in Faisalabad\",\n    ads_count: 7921,\n    slug: \"/faisalabad/residential-plots-for-sale-16\"\n  }, {\n    id: 40001,\n    link_text: \"Residential Plots for Sale in Peshawar\",\n    ads_count: 7866,\n    slug: \"/peshawar/residential-plots-for-sale-c40001\"\n  }, {\n    id: 40003,\n    link_text: \"Residential Plots for Sale in Jhelum\",\n    ads_count: 1566,\n    slug: \"/jhelum/residential-plots-for-sale-c40003\"\n  }, {\n    id: 40004,\n    link_text: \"Residential Plots for Sale in Gujrat\",\n    ads_count: 596,\n    slug: \"/gujrat/residential-plots-for-sale-c40004\"\n  }, {\n    id: 40002,\n    link_text: \"Residential Plots for Sale in Quetta\",\n    ads_count: 590,\n    slug: \"/quetta/residential-plots-for-sale-18\"\n  }]\n}, {\n  title: \"Browse Houses For Rent\",\n  links: [{\n    id: 34139,\n    link_text: \"Houses for Rent in Lahore\",\n    ads_count: 6735,\n    slug: \"/lahore/houses-to-rent-1\"\n  }, {\n    id: 34141,\n    link_text: \"Houses for Rent in Islamabad\",\n    ads_count: 4322,\n    slug: \"/islamabad/houses-to-rent-3\"\n  }, {\n    id: 34140,\n    link_text: \"Houses for Rent in Karachi\",\n    ads_count: 3871,\n    slug: \"/karachi/houses-to-rent-2\"\n  }, {\n    id: 34151,\n    link_text: \"Houses for Rent in Faisalabad\",\n    ads_count: 696,\n    slug: \"/faisalabad/houses-to-rent-16\"\n  }, {\n    id: 34152,\n    link_text: \"Houses for Rent in Peshawar\",\n    ads_count: 498,\n    slug: \"/peshawar/houses-to-rent-17\"\n  }, {\n    id: 34150,\n    link_text: \"Houses for Rent in Multan\",\n    ads_count: 478,\n    slug: \"/multan/houses-to-rent-15\"\n  }, {\n    id: 34154,\n    link_text: \"Houses for Rent in Jhelum\",\n    ads_count: 18,\n    slug: \"/jhelum/houses-to-rent-19\"\n  }, {\n    id: 34153,\n    link_text: \"Houses for Rent in Quetta\",\n    ads_count: 17,\n    slug: \"/quetta/houses-to-rent-18\"\n  }, {\n    id: 34155,\n    link_text: \"Houses for Rent in Gujrat\",\n    ads_count: 10,\n    slug: \"/gujrat/houses-to-rent-20\"\n  }]\n}, {\n  title: \"Browse Commercial Plots\",\n  links: [{\n    id: 36785,\n    link_text: \"Commercial Plots for Sale in Lahore\",\n    ads_count: 6315,\n    slug: \"/lahore/commercial-plots-for-sale-1\"\n  }, {\n    id: 36787,\n    link_text: \"Commercial Plots for Sale in Islamabad\",\n    ads_count: 2091,\n    slug: \"/islamabad/commercial-plots-for-sale-3\"\n  }, {\n    id: 36786,\n    link_text: \"Commercial Plots for Sale in Karachi\",\n    ads_count: 1951,\n    slug: \"/karachi/commercial-plots-for-sale-2\"\n  }, {\n    id: 36795,\n    link_text: \"Commercial Plots for Sale in Multan\",\n    ads_count: 384,\n    slug: \"/multan/commercial-plots-for-sale-15\"\n  }, {\n    id: 36796,\n    link_text: \"Commercial Plots for Sale in Faisalabad\",\n    ads_count: 231,\n    slug: \"/faisalabad/commercial-plots-for-sale-16\"\n  }, {\n    id: 36797,\n    link_text: \"Commercial Plots for Sale in Peshawar\",\n    ads_count: 200,\n    slug: \"/peshawar/commercial-plots-for-sale-17\"\n  }, {\n    id: 36799,\n    link_text: \"Commercial Plots for Sale in Jhelum\",\n    ads_count: 123,\n    slug: \"/jhelum/commercial-plots-for-sale-c36799\"\n  }, {\n    id: 36800,\n    link_text: \"Commercial Plots for Sale in Gujrat\",\n    ads_count: 81,\n    slug: \"/gujrat/commercial-plots-for-sale-20\"\n  }, {\n    id: 36798,\n    link_text: \"Commercial Plots for Sale in Quetta\",\n    ads_count: 19,\n    slug: \"/quetta/commercial-plots-for-sale-c36798\"\n  }]\n}, {\n  title: \"Browse By Locations\",\n  links: [{\n    id: 123517,\n    link_text: \"5 Marla Houses for Sale in Lahore\",\n    ads_count: 8117,\n    slug: \"/lahore/5marla-houses-for-sale-1\"\n  }, {\n    id: 123513,\n    link_text: \"10 Marla Houses for Sale in Lahore\",\n    ads_count: 6354,\n    slug: \"/lahore/10marla-houses-for-sale-c123513\"\n  }, {\n    id: 123523,\n    link_text: \"5 Marla Houses for Sale in Islamabad\",\n    ads_count: 2642,\n    slug: \"/islamabad/5marla-houses-for-sale-3\"\n  }, {\n    id: 123519,\n    link_text: \"10 Marla Houses for Sale in Islamabad\",\n    ads_count: 2279,\n    slug: \"/islamabad/10marla-houses-for-sale-3\"\n  }, {\n    id: 123563,\n    link_text: \"5 Marla Houses for Sale in Peshawar\",\n    ads_count: 1587,\n    slug: \"/peshawar/5marla-houses-for-sale-17\"\n  }, {\n    id: 123557,\n    link_text: \"5 Marla Houses for Sale in Faisalabad\",\n    ads_count: 1506,\n    slug: \"/faisalabad/5marla-houses-for-sale-c123557\"\n  }, {\n    id: 123547,\n    link_text: \"10 Marla Houses for Sale in Multan\",\n    ads_count: 1182,\n    slug: \"/multan/10marla-houses-for-sale-c123547\"\n  }, {\n    id: 123551,\n    link_text: \"5 Marla Houses for Sale in Multan\",\n    ads_count: 1156,\n    slug: \"/multan/5marla-houses-for-sale-c123551\"\n  }, {\n    id: 123553,\n    link_text: \"10 Marla Houses for Sale in Faisalabad\",\n    ads_count: 417,\n    slug: \"/faisalabad/10marla-houses-for-sale-c123553\"\n  }]\n}, {\n  title: \"Browse Apartments For Rent\",\n  links: [{\n    id: 26426,\n    link_text: \"Flats for Rent in Karachi\",\n    ads_count: 6125,\n    slug: \"/karachi/flats-apartments-to-rent-2\"\n  }, {\n    id: 26427,\n    link_text: \"Flats for Rent in Islamabad\",\n    ads_count: 2641,\n    slug: \"/islamabad/flats-apartments-to-rent-3\"\n  }, {\n    id: 26425,\n    link_text: \"Flats for Rent in Lahore\",\n    ads_count: 1690,\n    slug: \"/lahore/flats-apartments-to-rent-1\"\n  }, {\n    id: 26438,\n    link_text: \"Flats for Rent in Peshawar\",\n    ads_count: 53,\n    slug: \"/peshawar/flats-apartments-to-rent-17\"\n  }, {\n    id: 26441,\n    link_text: \"Flats for Rent in Gujrat\",\n    ads_count: 42,\n    slug: \"/gujrat/flats-apartments-to-rent-20\"\n  }, {\n    id: 26437,\n    link_text: \"Flats for Rent in Faisalabad\",\n    ads_count: 25,\n    slug: \"/faisalabad/flats-apartments-to-rent-16\"\n  }, {\n    id: 26436,\n    link_text: \"Flats for Rent in Multan\",\n    ads_count: 18,\n    slug: \"/multan/flats-apartments-for-rent-c26436\"\n  }, {\n    id: 26439,\n    link_text: \"Flats for Rent in Quetta\",\n    ads_count: 9,\n    slug: \"/quetta/flats-apartments-to-rent-18\"\n  }, {\n    id: 26440,\n    link_text: \"Flats for Rent in Jhelum\",\n    ads_count: 4,\n    slug: \"/jhelum/flats-apartments-for-rent-c26440\"\n  }]\n}, {\n  title: \"Browse Houses By Locations\",\n  links: [{\n    id: 27738,\n    link_text: \"Houses for Sale in DHA Defence Lahore\",\n    ads_count: 5717,\n    slug: \"/lahore/houses-for-sale-in-dha-defence-9\"\n  }, {\n    id: 27739,\n    link_text: \"Houses for Sale in North Nazimabad Karachi\",\n    ads_count: 628,\n    slug: \"/karachi/houses-for-sale-in-north-nazimabad-11\"\n  }, {\n    id: 27757,\n    link_text: \"Houses for Sale in Allama Iqbal Town Lahore\",\n    ads_count: 533,\n    slug: \"/lahore/houses-for-sale-in-allama-iqbal-town-58\"\n  }, {\n    id: 27737,\n    link_text: \"Houses for Sale in Model Town Lahore\",\n    ads_count: 530,\n    slug: \"/lahore/houses-for-sale-in-model-town-8\"\n  }, {\n    id: 27740,\n    link_text: \"Houses for Sale in Federal B Area Karachi\",\n    ads_count: 459,\n    slug: \"/karachi/houses-for-sale-in-federal-b-area-12\"\n  }, {\n    id: 27736,\n    link_text: \"Houses for Sale in Gulberg Lahore\",\n    ads_count: 415,\n    slug: \"/lahore/houses-for-sale-in-gulberg-7\"\n  }, {\n    id: 27734,\n    link_text: \"Houses for Sale in Garden Town Lahore\",\n    ads_count: 163,\n    slug: \"/lahore/houses-for-sale-in-garden-town-4\"\n  }, {\n    id: 27756,\n    link_text: \"Houses for Sale in Multan Road Lahore\",\n    ads_count: 113,\n    slug: \"/lahore/houses-for-sale-in-multan-road-c27756\"\n  }, {\n    id: 27735,\n    link_text: \"Houses for Sale in Clifton Karachi\",\n    ads_count: 99,\n    slug: \"/karachi/houses-for-sale-in-clifton-5\"\n  }]\n}, {\n  title: \"Browse Plots By Locations\",\n  links: [{\n    id: 39995,\n    link_text: \"Residential Plots for Sale in DHA Defence Lahore\",\n    ads_count: 16194,\n    slug: \"/lahore/residential-plots-for-sale-in-dha-defence-c39995\"\n  }, {\n    id: 39994,\n    link_text: \"Residential Plots for Sale in Model Town Lahore\",\n    ads_count: 114,\n    slug: \"/lahore/residential-plots-for-sale-in-model-town-8\"\n  }, {\n    id: 40014,\n    link_text: \"Residential Plots for Sale in Multan Road Lahore\",\n    ads_count: 48,\n    slug: \"/lahore/residential-plots-for-sale-in-multan-road-c40014\"\n  }, {\n    id: 39996,\n    link_text: \"Residential Plots for Sale in North Nazimabad Karachi\",\n    ads_count: 34,\n    slug: \"/karachi/residential-plots-for-sale-in-north-nazimabad-11\"\n  }, {\n    id: 39993,\n    link_text: \"Residential Plots for Sale in Gulberg Lahore\",\n    ads_count: 32,\n    slug: \"/lahore/residential-plots-for-sale-in-gulberg-7\"\n  }, {\n    id: 40015,\n    link_text: \"Residential Plots for Sale in Allama Iqbal Town Lahore\",\n    ads_count: 23,\n    slug: \"/lahore/residential-plots-for-sale-in-allama-iqbal-town-58\"\n  }, {\n    id: 39991,\n    link_text: \"Residential Plots for Sale in Garden Town Lahore\",\n    ads_count: 21,\n    slug: \"/lahore/residential-plots-for-sale-in-garden-town-c39991\"\n  }, {\n    id: 39997,\n    link_text: \"Residential Plots for Sale in Federal B Area Karachi\",\n    ads_count: 14,\n    slug: \"/karachi/residential-plots-for-sale-in-federal-b-area-c39997\"\n  }, {\n    id: 39992,\n    link_text: \"Residential Plots for Sale in Clifton Karachi\",\n    ads_count: 14,\n    slug: \"/karachi/residential-plots-for-sale-in-clifton-c39992\"\n  }]\n}];\n\nvar socialLinks = [{\n  href: \"https://www.facebook.com/LamudiGlobal\",\n  uniqueName: \"facebook\",\n  iconName: _react2.default.createElement(_fa.FaFacebook, null)\n}, {\n  href: \"https://twitter.com/LamudiGlobal\",\n  uniqueName: \"twitter\",\n  iconName: _react2.default.createElement(_fa.FaTwitter, null)\n}, {\n  href: \"https://www.linkedin.com/company/lamudi-global\",\n  uniqueName: \"linkedin\",\n  iconName: _react2.default.createElement(_fa.FaLinkedin, null)\n}];\n\nvar year = new Date();\n\nvar Footer = function Footer() {\n  var scrollToTop = function scrollToTop() {\n    document.body.scrollTo({ top: 0, behavior: \"smooth\" });\n    document.documentElement.scrollTo({ top: 0, behavior: \"smooth\" });\n  };\n\n  return (\n    // <div>hey!</div>\n    _react2.default.createElement(\n      \"div\",\n      { className: \"bg-gray-800 text-white py-12\" },\n      _react2.default.createElement(\n        Container,\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 hidden sm:grid\" },\n          sampleLinks.map(function (_ref3, i) {\n            var sectionTitle = _ref3.title,\n                links = _ref3.links;\n\n            return _react2.default.createElement(\n              \"div\",\n              { key: i },\n              _react2.default.createElement(\n                \"h3\",\n                { className: \"text-xl font-bold mb-4\" },\n                sectionTitle\n              ),\n              _react2.default.createElement(\n                \"ul\",\n                { className: \"space-y-2\" },\n                links.map(function (_ref4, i) {\n                  var title = _ref4.link_text,\n                      href = _ref4.slug;\n\n                  return _react2.default.createElement(\n                    \"li\",\n                    { key: i },\n                    _react2.default.createElement(\n                      _reactRouterDom.Link,\n                      { to: href, className: \"hover:text-gray-300\" },\n                      _react2.default.createElement(\n                        \"p\",\n                        null,\n                        title\n                      )\n                    )\n                  );\n                })\n              )\n            );\n          })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8\" },\n          _react2.default.createElement(\n            \"div\",\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: \"/\", className: \"block\" },\n              _react2.default.createElement(Logo, { className: \"w-32\" })\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            null,\n            _react2.default.createElement(\n              \"h3\",\n              { className: \"text-xl font-bold mb-4\" },\n              \"Lamudi.pk\"\n            ),\n            _react2.default.createElement(\n              \"ul\",\n              { className: \"space-y-2\" },\n              links.company.map(function (_ref5, i) {\n                var title = _ref5.title,\n                    href = _ref5.href,\n                    external = _ref5.external;\n\n                return _react2.default.createElement(\n                  \"li\",\n                  { key: i },\n                  external ? _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: href, className: \"hover:text-gray-300\" },\n                    title\n                  ) : _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: href, className: \"hover:text-gray-300\" },\n                    _react2.default.createElement(\n                      \"p\",\n                      null,\n                      title\n                    )\n                  )\n                );\n              })\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"md:ml-8\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"vcard\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"mb-6\" },\n                _react2.default.createElement(\n                  \"h3\",\n                  { className: \"text-xl font-bold mb-4\" },\n                  \"Contact\"\n                ),\n                _react2.default.createElement(\n                  \"span\",\n                  { className: \"flex items-center\" },\n                  _react2.default.createElement(\"span\", { className: \"mr-2\" }),\n                  _react2.default.createElement(\n                    \"span\",\n                    null,\n                    \"0800-786786\",\n                    _react2.default.createElement(\"br\", null),\n                    _react2.default.createElement(\n                      \"span\",\n                      { className: \"text-gray-400\" },\n                      \"(9:00 AM \\u2013 6:00 PM)\"\n                    )\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"flex items-center\" },\n                _react2.default.createElement(_md.MdMail, { className: \"w-5 h-5 mr-2\" }),\n                _react2.default.createElement(\n                  _reactRouterDom.Link,\n                  { to: \"mailto:support@lamudi.pk\", className: \"hover:text-gray-300\" },\n                  \"support@lamudi.pk\"\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"md:ml-8\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"vcard\" },\n              _react2.default.createElement(\n                \"h3\",\n                { className: \"text-xl font-bold mb-4\" },\n                \"Address\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"flex mb-6\" },\n                _react2.default.createElement(_md.MdPlace, { className: \"w-5 h-5 mr-2 mt-1\" }),\n                _react2.default.createElement(\n                  \"span\",\n                  null,\n                  \"8th Floor, Mega Tower,\",\n                  _react2.default.createElement(\"br\", null),\n                  \"63-B, \",\n                  _react2.default.createElement(\n                    \"span\",\n                    null,\n                    \"Main Boulevard Gulberg\"\n                  ),\n                  \",\",\n                  _react2.default.createElement(\"br\", null),\n                  _react2.default.createElement(\n                    \"span\",\n                    null,\n                    \"Gulberg II, \"\n                  ),\n                  _react2.default.createElement(\n                    \"span\",\n                    null,\n                    \"Lahore\"\n                  ),\n                  \",\",\n                  _react2.default.createElement(\"br\", null),\n                  _react2.default.createElement(\n                    \"span\",\n                    null,\n                    \"Pakistan\"\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"flex justify-between items-center\" },\n          _react2.default.createElement(\n            \"div\",\n            null,\n            _react2.default.createElement(\n              \"div\",\n              { className: \"flex space-x-4 mb-2\" },\n              socialLinks.map(function (_ref6, i) {\n                var href = _ref6.href,\n                    uniqueName = _ref6.uniqueName,\n                    iconName = _ref6.iconName;\n\n                return _react2.default.createElement(\n                  _reactRouterDom.Link,\n                  { key: i, to: href, className: \"hover:text-gray-300\" },\n                  _react2.default.createElement(\n                    \"span\",\n                    { className: \"inline-flex items-center justify-center\" },\n                    iconName\n                  )\n                );\n              })\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"text-sm text-gray-400\" },\n              \"\\xA9 \",\n              year.getFullYear(),\n              \" Lamudi.pk. All rights reserved.\"\n            )\n          ),\n          _react2.default.createElement(\n            \"button\",\n            { onClick: scrollToTop, className: \"flex items-center text-sm hover:text-gray-300\" },\n            \"Back to top\",\n            _react2.default.createElement(_md.MdExpandLess, { className: \"ml-1\" })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports[\"default\"] = Footer;\n\n//# sourceURL=webpack://react-ssr/./src/client/common/footer.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(_ref) {\n  var auth = _ref.auth;\n\n  var authButton = auth ? _react2.default.createElement(\n    'a',\n    { href: '/api/logout' },\n    'Logout'\n  ) : _react2.default.createElement(\n    'a',\n    { href: '/api/auth/google' },\n    'Login'\n  );\n\n  return _react2.default.createElement(\n    'nav',\n    null,\n    _react2.default.createElement(\n      'div',\n      { className: 'nav-wrapper' },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/', className: 'brand-logo' },\n        'React SSR'\n      ),\n      _react2.default.createElement(\n        'ul',\n        { className: 'right' },\n        _react2.default.createElement(\n          'li',\n          { className: 'text-5xl' },\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/users' },\n            'Users'\n          )\n        ),\n        _react2.default.createElement(\n          'li',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/admins' },\n            'Admins'\n          )\n        ),\n        _react2.default.createElement(\n          'li',\n          null,\n          authButton\n        )\n      )\n    )\n  );\n};\n\nfunction mapStateToProps(_ref2) {\n  var auth = _ref2.auth;\n\n  return { auth: auth };\n}\n\nexports[\"default\"] = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack://react-ssr/./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/components/hocs/requireAuth.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports[\"default\"] = function (ChildComponent) {\n  var RequireAuth = function (_Component) {\n    _inherits(RequireAuth, _Component);\n\n    function RequireAuth() {\n      _classCallCheck(this, RequireAuth);\n\n      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));\n    }\n\n    _createClass(RequireAuth, [{\n      key: 'render',\n      value: function render() {\n        switch (this.props.auth) {\n          case false:\n            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n          case null:\n            return _react2.default.createElement(\n              'div',\n              null,\n              'Loading...'\n            );\n          default:\n            return _react2.default.createElement(ChildComponent, this.props);\n        }\n      }\n    }]);\n\n    return RequireAuth;\n  }(_react.Component);\n\n  function mapStateToProps(_ref) {\n    var auth = _ref.auth;\n\n    return { auth: auth };\n  }\n\n  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/components/hocs/requireAuth.js?");

/***/ }),

/***/ "./src/client/components/page-layout.js":
/*!**********************************************!*\
  !*** ./src/client/components/page-layout.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _footer = __webpack_require__(/*! ../common/footer */ \"./src/client/common/footer.js\");\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nvar _headingWithCountModule = __webpack_require__(/*! ./heading-with-count.module.scss */ \"./src/client/components/heading-with-count.module.scss\");\n\nvar _headingWithCountModule2 = _interopRequireDefault(_headingWithCountModule);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar HeadingWithCount = function HeadingWithCount(_ref) {\n  var children = _ref.children,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className,\n      _ref$variant = _ref.variant,\n      variant = _ref$variant === undefined ? \"h2\" : _ref$variant,\n      _ref$smallText = _ref.smallText,\n      smallText = _ref$smallText === undefined ? \"\" : _ref$smallText,\n      props = _objectWithoutProperties(_ref, [\"children\", \"className\", \"variant\", \"smallText\"]);\n\n  return _react2.default.createElement(\n    Heading,\n    _extends({ variant: variant, className: className }, props),\n    children,\n    smallText ? _react2.default.createElement(\n      \"small\",\n      { className: 'text-sm text-gray-500' },\n      \"(\",\n      smallText,\n      \")\"\n    ) : null\n  );\n};\n\nvar Heading = function Heading(_ref2) {\n  var children = _ref2.children,\n      _ref2$className = _ref2.className,\n      className = _ref2$className === undefined ? \"\" : _ref2$className,\n      _ref2$variant = _ref2.variant,\n      variant = _ref2$variant === undefined ? \"h2\" : _ref2$variant,\n      _ref2$style = _ref2.style,\n      style = _ref2$style === undefined ? {} : _ref2$style,\n      props = _objectWithoutProperties(_ref2, [\"children\", \"className\", \"variant\", \"style\"]);\n\n  var cn = 'className'.bind(_headingWithCountModule2.default);\n  return (0, _react.createElement)(variant, _extends({ className: cn(className, variant), style: style }, props), children);\n};\n\nvar Container = function Container(_ref3) {\n  var children = _ref3.children,\n      _ref3$className = _ref3.className,\n      className = _ref3$className === undefined ? \"\" : _ref3$className;\n\n  return _react2.default.createElement(\n    \"div\",\n    {\n      style: {\n        maxWidth: \"71.25rem\",\n        paddingInline: \"1rem\",\n        marginInline: \"auto\",\n        width: \"100%\"\n      }\n    },\n    children\n  );\n};\n\nvar PageLayout = function PageLayout(props) {\n  var _props$count = props.count,\n      count = _props$count === undefined ? 12345 : _props$count,\n      _props$className = props.className,\n      className = _props$className === undefined ? \"\" : _props$className,\n      children = props.children,\n      _props$pageTitle = props.pageTitle,\n      pageTitle = _props$pageTitle === undefined ? \"kjnjkn\" : _props$pageTitle,\n      _props$pageSubTitle = props.pageSubTitle,\n      pageSubTitle = _props$pageSubTitle === undefined ? \"\" : _props$pageSubTitle,\n      _props$headTitle = props.headTitle,\n      headTitle = _props$headTitle === undefined ? \"\" : _props$headTitle,\n      _props$bannerless = props.bannerless,\n      bannerless = _props$bannerless === undefined ? false : _props$bannerless,\n      location_breadcrumb = props.location_breadcrumb,\n      _props$bannerComponen = props.bannerComponent,\n      bannerComponent = _props$bannerComponen === undefined ? null : _props$bannerComponen,\n      _props$bannerComponen2 = props.bannerComponentPlacement,\n      bannerComponentPlacement = _props$bannerComponen2 === undefined ? \"right\" : _props$bannerComponen2,\n      _props$backButton = props.backButton,\n      backButton = _props$backButton === undefined ? null : _props$backButton,\n      _props$navBarIconPlac = props.navBarIconPlacement,\n      navBarIconPlacement = _props$navBarIconPlac === undefined ? \"left\" : _props$navBarIconPlac,\n      _props$containerClass = props.containerClass,\n      containerClass = _props$containerClass === undefined ? \"\" : _props$containerClass,\n      _props$navBarClassNam = props.navBarClassName,\n      navBarClassName = _props$navBarClassNam === undefined ? \"\" : _props$navBarClassNam,\n      description = props.description,\n      _props$verticalAlignm = props.verticalAlignment,\n      verticalAlignment = _props$verticalAlignm === undefined ? \"end\" : _props$verticalAlignm,\n      prevPageLink = props.prevPageLink,\n      nextPageLink = props.nextPageLink,\n      resolvedUrl = props.resolvedUrl,\n      canonical = props.canonical,\n      socialUrl = props.socialUrl;\n\n\n  var location = (0, _reactRouterDom.useLocation)();\n  // const navigate = useNavigate();\n\n  var hamburgerColor = bannerless ? \"#000\" : \"#fff\";\n  var navbarStyles = { paddingTop: 8, paddingBottom: 8 };\n  var addPropertyBtnClass = bannerless ? \"bg-transparent border-2 border-primary text-primary\" : \"bg-primary text-white\";\n  var navbarContainerClass = bannerless ? \"bg-white shadow-md\" : \"bg-transparent\";\n\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"min-h-screen \" + className },\n    bannerless ? _react2.default.createElement(\n      \"div\",\n      null,\n      pageTitle && _react2.default.createElement(\"div\", null)\n      // <Container>\n      //   <HeadingWithCount smallText={count}>{pageTitle}</HeadingWithCount>\n      // </Container>\n\n    ) : _react2.default.createElement(\n      \"div\",\n      { className: \"bg-gradient-to-r from-blue-900 to-blue-700 text-white\" },\n      pageTitle && _react2.default.createElement(\n        Container,\n        null,\n        bannerComponentPlacement === \"right\" ? _react2.default.createElement(\n          \"div\",\n          { className: \"flex flex-grow justify-between items-\" + verticalAlignment + \" py-8\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"space-y-4\" },\n            pageTitle && _react2.default.createElement(\n              \"h1\",\n              { className: \"text-4xl font-bold\" },\n              pageTitle\n            ),\n            pageSubTitle && _react2.default.createElement(\n              \"h4\",\n              { className: \"text-xl\" },\n              pageSubTitle\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"flex-grow py-8\" },\n            bannerComponent\n          )\n        ) : _react2.default.createElement(\n          \"div\",\n          null,\n          pageTitle && _react2.default.createElement(\n            \"h1\",\n            { className: \"text-4xl font-bold mb-4\" },\n            pageTitle\n          ),\n          pageSubTitle && _react2.default.createElement(\n            \"h4\",\n            { className: \"text-xl mb-4\" },\n            pageSubTitle\n          ),\n          bannerComponent\n        )\n      )\n    ),\n    children,\n    _react2.default.createElement(_footer2.default, null)\n  );\n};\n\nexports[\"default\"] = PageLayout;\n\n//# sourceURL=webpack://react-ssr/./src/client/components/page-layout.js?");

/***/ }),

/***/ "./src/client/pages/AdminsListPage.js":
/*!********************************************!*\
  !*** ./src/client/pages/AdminsListPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar _requireAuth = __webpack_require__(/*! ../components/hocs/requireAuth */ \"./src/client/components/hocs/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AdminsListPage = function AdminsListPage(_ref) {\n  var admins = _ref.admins,\n      fetchAdmins = _ref.fetchAdmins;\n\n  (0, _react.useEffect)(function () {\n    fetchAdmins();\n  }, [fetchAdmins]);\n\n  var renderAdmins = function renderAdmins() {\n    return admins.map(function (admin) {\n      return _react2.default.createElement(\n        'li',\n        { key: admin.id },\n        admin.name\n      );\n    });\n  };\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h3',\n      null,\n      'Protected list of admins'\n    ),\n    _react2.default.createElement(\n      'ul',\n      null,\n      renderAdmins()\n    )\n  );\n};\n\nfunction mapStateToProps(_ref2) {\n  var admins = _ref2.admins;\n\n  return { admins: admins };\n}\n\nexports[\"default\"] = {\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),\n  loadData: function loadData(_ref3) {\n    var dispatch = _ref3.dispatch;\n    return dispatch((0, _actions.fetchAdmins)());\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/AdminsListPage.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'center-align', style: { marginTop: '200px' } },\n    _react2.default.createElement(\n      'h3',\n      { className: 'text-3xl' },\n      'Welcome'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Check out these awesome features'\n    )\n  );\n};\n\nexports[\"default\"] = {\n  component: Home\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NotFoundPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n  staticContext.notFound = true;\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'Ooops, route not found.'\n  );\n};\n\nexports[\"default\"] = {\n  component: NotFoundPage\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/client/pages/UsersListPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/UsersListPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UsersList = function UsersList(props) {\n  console.log('->:\\n', props);\n  (0, _react.useEffect)(function () {\n    props.fetchUsers();\n  }, []);\n\n  var RenderUsers = function RenderUsers() {\n    return props.users.map(function (user) {\n      return _react2.default.createElement(\n        \"li\",\n        { key: user.id },\n        user.name\n      );\n    });\n  };\n\n  var head = function head() {\n    return _react2.default.createElement(\n      _reactHelmet.Helmet,\n      null,\n      _react2.default.createElement(\n        \"title\",\n        null,\n        props.users.length + \" Users Loaded\"\n      ),\n      _react2.default.createElement(\"meta\", { property: \"og:title\", content: \"Users App\" })\n    );\n  };\n\n  console.log(\"first\");\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    head(),\n    \"Here's a big list of users:\",\n    _react2.default.createElement(\n      \"ul\",\n      null,\n      _react2.default.createElement(RenderUsers, null)\n    )\n  );\n};\n\nfunction mapStateToProps(state) {\n  return { users: state.users };\n}\n\nfunction loadData(store) {\n  return store.dispatch((0, _actions.fetchUsers)());\n}\n\nexports[\"default\"] = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/UsersListPage.js?");

/***/ }),

/***/ "./src/client/pages/home/Home.js":
/*!***************************************!*\
  !*** ./src/client/pages/home/Home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\nvar _pageLayout = __webpack_require__(/*! ../../components/page-layout */ \"./src/client/components/page-layout.js\");\n\nvar _pageLayout2 = _interopRequireDefault(_pageLayout);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LamudiHomePage = function LamudiHomePage(props) {\n  var _props$links = props.links,\n      links = _props$links === undefined ? [] : _props$links;\n\n\n  (0, _react.useEffect)(function () {\n    if (!links.length) {\n      props.fetchHomeLinks();\n    }\n  }, []);\n\n  return _react2.default.createElement(\n    _pageLayout2.default,\n    {\n      headTitle: \"Property for Sale and Rent in Pakistan | Lamudi\",\n      pageTitle: \"Find Property in Pakistan\",\n      description: \"Browse property for sale and rent in Pakistan\"\n    },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"min-h-screen bg-gray-100\" },\n      links.length > 0 ? links.map(function (section, i) {\n        return _react2.default.createElement(\n          \"div\",\n          { key: i, className: \"max-w-7xl mx-auto px-4 py-8\" },\n          _react2.default.createElement(\n            \"h2\",\n            { className: \"text-2xl font-bold mb-6\" },\n            section.title\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"grid grid-cols-1 md:grid-cols-3 gap-6\" },\n            section.links.map(function (category, j) {\n              return _react2.default.createElement(\n                \"div\",\n                { key: j, className: \"bg-white rounded-lg shadow p-6\" },\n                _react2.default.createElement(\n                  \"h3\",\n                  { className: \"text-xl font-semibold mb-4\" },\n                  category.title\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"space-y-3\" },\n                  category.links.map(function (link, k) {\n                    return _react2.default.createElement(\n                      \"a\",\n                      {\n                        key: k,\n                        href: link.slug,\n                        className: \"flex justify-between items-center text-gray-700 hover:text-blue-600\"\n                      },\n                      _react2.default.createElement(\n                        \"span\",\n                        null,\n                        link.link_text\n                      ),\n                      _react2.default.createElement(\n                        \"span\",\n                        { className: \"text-sm text-gray-500\" },\n                        \"(\",\n                        link.ads_count,\n                        \")\"\n                      )\n                    );\n                  })\n                )\n              );\n            })\n          )\n        );\n      }) : _react2.default.createElement(\n        \"div\",\n        { className: \"flex justify-center items-center min-h-[50vh]\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"text-xl text-gray-600\" },\n          \"Loading property links...\"\n        )\n      )\n    )\n  );\n};\n\nfunction mapStateToProps(state) {\n  return { links: state.homeLinks };\n}\n\nfunction loadData(store) {\n  return store.dispatch((0, _actions.fetchHomeLinks)());\n}\n\nexports[\"default\"] = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchHomeLinks: _actions.fetchHomeLinks })(LamudiHomePage)\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/home/Home.js?");

/***/ }),

/***/ "./src/client/reducers/adminsReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/adminsReducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_ADMINS:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/adminsReducer.js?");

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_CURRENT_USER:\n      return action.payload.data || false;\n    default:\n      return state;\n  }\n};\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/reducers/homeLinksReducer.js":
/*!*************************************************!*\
  !*** ./src/client/reducers/homeLinksReducer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/client/actions/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  console.log('1', state);\n  switch (action.type) {\n    case 'fetch_home_links':\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/homeLinksReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _usersReducer = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n\nvar _usersReducer2 = _interopRequireDefault(_usersReducer);\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nvar _adminsReducer = __webpack_require__(/*! ./adminsReducer */ \"./src/client/reducers/adminsReducer.js\");\n\nvar _adminsReducer2 = _interopRequireDefault(_adminsReducer);\n\nvar _homeLinksReducer = __webpack_require__(/*! ./homeLinksReducer */ \"./src/client/reducers/homeLinksReducer.js\");\n\nvar _homeLinksReducer2 = _interopRequireDefault(_homeLinksReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = (0, _redux.combineReducers)({\n  users: _usersReducer2.default,\n  auth: _authReducer2.default,\n  admins: _adminsReducer2.default,\n  homeLinks: _homeLinksReducer2.default\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  console.log(state);\n  switch (action.type) {\n    case _actions.FETCH_USERS:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function (req) {\n  var axiosInstance = _axios2.default.create({\n    baseURL: 'http://react-ssr-api.herokuapp.com',\n    headers: { cookie: req.get('cookie') || '' }\n  });\n\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n  return store;\n};\n\n//# sourceURL=webpack://react-ssr/./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function (req, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  return \"\\n    <html>\\n      <head>\\n        \" + helmet.title.toString() + \"\\n        \" + helmet.meta.toString() + \"\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css\\\">\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\" + content + \"</div>\\n        <script>\\n          window.INITIAL_STATE = \" + (0, _serializeJavascript2.default)(store.getState()) + \"\\n        </script>\\n        <script src=\\\"bundle.js\\\"></script>\\n        <script src=\\\"https://cdn.tailwindcss.com\\\"></script>\\n      </body>\\n    </html>\\n  \";\n};\n\n//# sourceURL=webpack://react-ssr/./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n}));\napp.use(_express2.default.static('public'));\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)(req);\n\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0, _renderer2.default)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.send(content);\n  });\n});\n\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack://react-ssr/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/client/components/heading-with-count.module.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/client/components/heading-with-count.module.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   small: () => (/* binding */ small)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.heading-with-count-module__small___hs_wE {\n  color: #a7a7a7;\n  margin-inline-start: 8px;\n}`, \"\"]);\n// Exports\nvar small = `heading-with-count-module__small___hs_wE`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react-ssr/./src/client/components/heading-with-count.module.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/client/variables/footer.module.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/client/variables/footer.module.scss ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  /* Brand Colors */\n  --lm-primary: #ff8700;\n  --lm-secondary: #2a65d3;\n  --lm-blue-alt: #0793ea;\n  /* Grays */\n  --lm-gray-50: #f9fafb;\n  --lm-gray-100: #e3e6ea;\n  --lm-gray-200: #e5e7eb;\n  --lm-gray-300: #d1d5db;\n  --lm-gray-400: #9ca3af;\n  --lm-gray-500: #6b7280;\n  --lm-gray-600: #4b5563;\n  --lm-gray-700: #374151;\n  --lm-gray-800: #1f2937;\n  --lm-gray-900: #111827;\n  /* Theme Colors */\n  --lm-bg-footer: #434343;\n  --lm-footer-text: #d1d1d1;\n  --lm-bg-color: #fafafa;\n  --lm-brand-muted: #edf2f7;\n  /* Breakpoints */\n  --lm-screen-landscape: 991px;\n  --lm-screen-portrait: 767px;\n  --lm-screen-portrait-min: 500px;\n  --lm-screen-xs: 640px;\n  --lm-screen-xs-min: 375px;\n  /* Typography */\n  --lm-font-size-base: 16px;\n  --lm-font-size-base-xs: 14px;\n  --lm-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react-ssr/./src/client/variables/footer.module.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://react-ssr/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://react-ssr/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/client/components/heading-with-count.module.scss":
/*!**************************************************************!*\
  !*** ./src/client/components/heading-with-count.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   small: () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_heading_with_count_module_scss__WEBPACK_IMPORTED_MODULE_6__.small)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_heading_with_count_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./heading-with-count.module.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/client/components/heading-with-count.module.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_heading_with_count_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_heading_with_count_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_heading_with_count_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_heading_with_count_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://react-ssr/./src/client/components/heading-with-count.module.scss?");

/***/ }),

/***/ "./src/client/variables/footer.module.scss":
/*!*************************************************!*\
  !*** ./src/client/variables/footer.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_footer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./footer.module.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/client/variables/footer.module.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_footer_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_footer_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_footer_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_footer_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://react-ssr/./src/client/variables/footer.module.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://react-ssr/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://react-ssr/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://react-ssr/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://react-ssr/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://react-ssr/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://react-ssr/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;