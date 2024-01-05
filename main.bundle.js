"use strict";
(self["webpackChunknhn_inje"] = self["webpackChunknhn_inje"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 10px;
  font-family: AppleGothic, sans-serif;
}
article.todo-app {
  font-size: 1.6rem;
  display: grid;
  row-gap: 2rem;
  padding: 3rem;
  & > h1 {
    font-size: 2rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;
  }
  & > section.todo-list {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border: 2px solid black;
    padding: 3rem;
  }
}
input.todo-item-input {
  outline: none;
  border: 1px solid black;
  padding: 1rem;
  &:focus {
    border: red 2px dotted;
  }
}
ul.todo-item-list {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
li.todo-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px gainsboro;
  padding: 1.5rem 0 1.5rem 0;
  &.completed label {
    text-decoration: line-through;
    color: lightgray;
  }
}
button {
  border: solid 1px black;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: lightgray;
}
.todo-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & fieldset {
    display: flex;
    column-gap: 1rem;
    & label {
      border: 1px solid black;
      border-radius: 0.3rem;
      padding: 1rem;
      background-color: lightgray;
      &:has(:checked) {
        color: red;
      }
    }
  }
  & .clear-completed {
    padding: 1rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,oCAAoC;AACtC;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,aAAa;EACb;IACE,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,aAAa;EACf;AACF;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb;IACE,sBAAsB;EACxB;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,kCAAkC;EAClC,0BAA0B;EAC1B;IACE,6BAA6B;IAC7B,gBAAgB;EAClB;AACF;AACA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB;IACE,aAAa;IACb,gBAAgB;IAChB;MACE,uBAAuB;MACvB,qBAAqB;MACrB,aAAa;MACb,2BAA2B;MAC3B;QACE,UAAU;MACZ;IACF;EACF;EACA;IACE,aAAa;EACf;AACF","sourcesContent":["html {\n  font-size: 10px;\n  font-family: AppleGothic, sans-serif;\n}\narticle.todo-app {\n  font-size: 1.6rem;\n  display: grid;\n  row-gap: 2rem;\n  padding: 3rem;\n  & > h1 {\n    font-size: 2rem;\n    font-weight: bolder;\n    display: flex;\n    justify-content: center;\n  }\n  & > section.todo-list {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1rem;\n    border: 2px solid black;\n    padding: 3rem;\n  }\n}\ninput.todo-item-input {\n  outline: none;\n  border: 1px solid black;\n  padding: 1rem;\n  &:focus {\n    border: red 2px dotted;\n  }\n}\nul.todo-item-list {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\nli.todo-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: solid 1px gainsboro;\n  padding: 1.5rem 0 1.5rem 0;\n  &.completed label {\n    text-decoration: line-through;\n    color: lightgray;\n  }\n}\nbutton {\n  border: solid 1px black;\n  border-radius: 0.3rem;\n  padding: 0.5rem;\n  background-color: lightgray;\n}\n.todo-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  & fieldset {\n    display: flex;\n    column-gap: 1rem;\n    & label {\n      border: 1px solid black;\n      border-radius: 0.3rem;\n      padding: 1rem;\n      background-color: lightgray;\n      &:has(:checked) {\n        color: red;\n      }\n    }\n  }\n  & .clear-completed {\n    padding: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! destyle.css v4.0.0 | MIT License | https://github.com/nicolas-cusan/destyle.css */

/* Reset box-model and set borders */
/* ============================================ */

*,
::before,
::after {
  box-sizing: border-box;
  border-style: solid;
  border-width: 0;
}

/* Document */
/* ============================================ */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3*/
}

/* Sections */
/* ============================================ */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/* Vertical rhythm */
/* ============================================ */

p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
}

/* Lists (enumeration) */
/* ============================================ */

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Lists (definition) */
/* ============================================ */

dt {
  font-weight: bold;
}

dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
  border-top-width: 1px;
  margin: 0;
  clear: both;
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: inherit; /* 2 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */

/**
 * Prevent vertical alignment issues.
 */

svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/* Forms */
/* ============================================ */

/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */

button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  vertical-align: middle;
  color: inherit;
  font: inherit;
  background: transparent;
  padding: 0;
  margin: 0;
  border-radius: 0;
  text-align: inherit;
  text-transform: inherit; /* 2 */
}

/**
 * Correct cursors for clickable elements.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  cursor: pointer;
}

button:disabled,
[type="button"]:disabled,
[type="reset"]:disabled,
[type="submit"]:disabled {
  cursor: default;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */

:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * Remove padding
 */

option {
  padding: 0;
}

/**
 * Reset to invisible
 */

fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * Correct the outline style in Safari.
 */

[type="search"] {
  outline-offset: -2px; /* 1 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Fix font inheritance.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/**
 * Fix appearance for Firefox
 */
[type="number"] {
  -moz-appearance: textfield;
}

/**
 * Clickable labels
 */

label[for] {
  cursor: pointer;
}

/* Interactive */
/* ============================================ */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */

[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */

/**
1. Correct table border color inheritance in all Chrome and Safari.
*/

table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"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","sourcesContent":["/*! destyle.css v4.0.0 | MIT License | https://github.com/nicolas-cusan/destyle.css */\n\n/* Reset box-model and set borders */\n/* ============================================ */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-style: solid;\n  border-width: 0;\n}\n\n/* Document */\n/* ============================================ */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Remove gray overlay on links for iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -webkit-tap-highlight-color: transparent; /* 3*/\n}\n\n/* Sections */\n/* ============================================ */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/* Vertical rhythm */\n/* ============================================ */\n\np,\ntable,\nblockquote,\naddress,\npre,\niframe,\nform,\nfigure,\ndl {\n  margin: 0;\n}\n\n/* Headings */\n/* ============================================ */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0;\n}\n\n/* Lists (enumeration) */\n/* ============================================ */\n\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Lists (definition) */\n/* ============================================ */\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n/* Grouping content */\n/* ============================================ */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n  border-top-width: 1px;\n  margin: 0;\n  clear: both;\n  color: inherit;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\naddress {\n  font-style: inherit;\n}\n\n/* Text-level semantics */\n/* ============================================ */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Replaced content */\n/* ============================================ */\n\n/**\n * Prevent vertical alignment issues.\n */\n\nsvg,\nimg,\nembed,\nobject,\niframe {\n  vertical-align: bottom;\n}\n\n/* Forms */\n/* ============================================ */\n\n/**\n * Reset form fields to make them styleable.\n * 1. Make form elements stylable across systems iOS especially.\n * 2. Inherit text-transform from parent.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  -webkit-appearance: none; /* 1 */\n  appearance: none;\n  vertical-align: middle;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  text-align: inherit;\n  text-transform: inherit; /* 2 */\n}\n\n/**\n * Correct cursors for clickable elements.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  cursor: pointer;\n}\n\nbutton:disabled,\n[type=\"button\"]:disabled,\n[type=\"reset\"]:disabled,\n[type=\"submit\"]:disabled {\n  cursor: default;\n}\n\n/**\n * Improve outlines for Firefox and unify style with input elements & buttons.\n */\n\n:-moz-focusring {\n  outline: auto;\n}\n\nselect:disabled {\n  opacity: inherit;\n}\n\n/**\n * Remove padding\n */\n\noption {\n  padding: 0;\n}\n\n/**\n * Reset to invisible\n */\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  outline-offset: -2px; /* 1 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Fix font inheritance.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Fix appearance for Firefox\n */\n[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n\n/**\n * Clickable labels\n */\n\nlabel[for] {\n  cursor: pointer;\n}\n\n/* Interactive */\n/* ============================================ */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/*\n * Remove outline for editable content.\n */\n\n[contenteditable]:focus {\n  outline: auto;\n}\n\n/* Tables */\n/* ============================================ */\n\n/**\n1. Correct table border color inheritance in all Chrome and Safari.\n*/\n\ntable {\n  border-color: inherit; /* 1 */\n  border-collapse: collapse;\n}\n\ncaption {\n  text-align: left;\n}\n\ntd,\nth {\n  vertical-align: top;\n  padding: 0;\n}\n\nth {\n  text-align: left;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TodoList/TodoList */ "./src/components/TodoList/TodoList.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");


var App = /** @class */ (function () {
    function App() {
        this.rootElement = this.createElement();
    }
    App.prototype.createElement = function () {
        var article = document.createElement("article");
        article.className = "todo-app";
        var h1 = document.createElement("h1");
        h1.textContent = "Todo App";
        this.list = new _components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.list.render().className = "todo-list";
        article.appendChild(h1);
        article.appendChild(this.list.render());
        return article;
    };
    App.prototype.render = function () {
        return this.rootElement;
    };
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/TodoList/TodoList.ts":
/*!*********************************************!*\
  !*** ./src/components/TodoList/TodoList.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var TodoList = /** @class */ (function () {
    function TodoList() {
        var _this = this;
        this.offsetX = 0;
        this.handleMousedown = function (event) {
            var target = event.target;
            var todoElement = target.closest(".todo-item");
            if (!todoElement)
                return;
            var todoId = _this.findTodoIdFromElement(todoElement);
            _this.clickItemIndex = _this.filteredTodos.findIndex(function (todo) { return todo.id === todoId; });
            if (_this.clickItemIndex > -1) {
                var target_1 = event.target;
                var todoElement_1 = target_1.closest(".todo-item");
                _this.createDragMirror(event, todoElement_1);
            }
        };
        this.createDragMirror = function (event, todoElement) {
            if (_this.clickItemIndex === -1)
                return;
            if (_this.filteredTodos[_this.clickItemIndex].completed)
                return;
            _this.mirror = todoElement.cloneNode(true);
            _this.mirror.style.position = "absolute";
            _this.mirror.style.opacity = "0.5";
            _this.mirror.style.pointerEvents = "none";
            var rect = todoElement.getBoundingClientRect();
            _this.offsetX = event.clientX - rect.left;
            var offsetY = event.clientY - rect.top;
            _this.mirror.style.position = "fixed";
            _this.mirror.style.top = "".concat(event.clientY - offsetY, "px");
            _this.mirror.style.left = "".concat(event.clientX - _this.offsetX, "px");
            _this.mirror.style.width = "".concat(rect.width, "px");
            _this.rootElement.appendChild(_this.mirror);
        };
        this.handleMousemove = function (event) {
            if (_this.clickItemIndex === null || !_this.mirror)
                return;
            _this.moveMirror(event);
            clearTimeout(_this.previewTimeout);
            _this.previewTimeout = setTimeout(function () {
                // this.showPreview(event);
            }, 2000);
        };
        this.showPreview = function (event) {
            var _a;
            var currentItemElement = _this.rootElement.querySelector("li:has(input[id=\"".concat((_a = _this.todos[_this.clickItemIndex]) === null || _a === void 0 ? void 0 : _a.id, "\"])"));
            if (currentItemElement) {
                _this.previewElement = currentItemElement.cloneNode(true);
                _this.previewElement.style.opacity = "0.7";
                _this.previewElement.style.position = "relative";
                _this.previewElement.style.color = "red";
                var dropTarget = document.elementFromPoint(event.clientX, event.clientY);
                var dropTodoElement = dropTarget.closest(".todo-item");
                dropTodoElement.insertAdjacentElement("beforebegin", _this.previewElement);
            }
        };
        this.handleMouseup = function (event) {
            if (_this.clickItemIndex === null || !_this.mirror)
                return;
            var rootRect = _this.rootElement.getBoundingClientRect();
            if (event.clientX < rootRect.left ||
                event.clientX > rootRect.right ||
                event.clientY < rootRect.top ||
                event.clientY > rootRect.bottom) {
                _this.cancelDrag();
                return;
            }
            var dropTarget = document.elementFromPoint(event.clientX, event.clientY);
            var dropTodoElement = dropTarget.closest(".todo-item");
            if (!dropTodoElement) {
                _this.cancelDrag();
                return;
            }
            var dropTodoId = _this.findTodoIdFromElement(dropTodoElement);
            var dropItemIndex = _this.filteredTodos.findIndex(function (todo) { return todo.id === dropTodoId; });
            if (dropItemIndex !== -1 && dropItemIndex !== _this.clickItemIndex) {
                var draggedItem = _this.filteredTodos.splice(_this.clickItemIndex, 1)[0];
                _this.filteredTodos.splice(dropItemIndex, 0, draggedItem);
                for (var i = 0; i < _this.filteredTodos.length; i++) {
                    _this.filteredTodos[i].order = _this.filteredTodos.length - 1 - i;
                }
                // this.syncWithMainTodos();
                _this.render();
            }
            _this.cancelDrag();
            _this.clickItemIndex = null;
        };
        this.handleKeyup = function (event) {
            if (event.key === "Escape") {
                if (_this.clickItemIndex !== null && _this.mirror) {
                    _this.cancelDrag();
                }
            }
        };
        this.getFilteredTodos = function () {
            var sortedTodos = __spreadArray([], _this.todos, true).sort(function (a, b) {
                if (a.completed === b.completed) {
                    return b.order - a.order;
                }
                return a.completed ? 1 : -1;
            });
            return _this.filterTodo(sortedTodos);
        };
        this.rootElement = document.createElement("section");
        this.rootElement.classList.add("todo-list");
        this.todos = [];
        this.currentFilter = "ALL";
    }
    TodoList.prototype.addTodo = function (todo) {
        var maxOrder = this.todos.length === 0
            ? 0
            : Math.max.apply(Math, this.todos.map(function (todo) { return todo.order; }));
        this.todos.unshift({
            id: "id" + (0,_util__WEBPACK_IMPORTED_MODULE_0__.generateUUID)(),
            content: todo,
            completed: false,
            order: maxOrder + 1,
        });
        this.render();
    };
    TodoList.prototype.filterTodo = function (todos) {
        switch (this.currentFilter) {
            case "ACTIVE":
                return todos.filter(function (todo) { return !todo.completed; });
            case "COMPLETED":
                return todos.filter(function (todo) { return todo.completed; });
            default:
                return todos;
        }
    };
    TodoList.prototype.createTodoItem = function (todo) {
        var todoItem = document.createElement("li");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var deleteButton = document.createElement("button");
        todoItem.className = "todo-item";
        if (todo.completed) {
            todoItem.classList.add("completed");
            checkbox.checked = true;
        }
        checkbox.type = "checkbox";
        checkbox.id = todo.id;
        checkbox.addEventListener("change", this.handleTodoToggle.bind(this, todo.id));
        label.textContent = todo.content;
        label.htmlFor = todo.id;
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "삭제";
        deleteButton.addEventListener("click", this.handleTodoDelete.bind(this, todo.id));
        todoItem.appendChild(label);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(deleteButton);
        return todoItem;
    };
    TodoList.prototype.handleTodoDelete = function (todoId) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== todoId; });
        this.render();
    };
    TodoList.prototype.handleTodoToggle = function (todoId) {
        this.todos.forEach(function (todo) {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
        });
        this.render();
    };
    TodoList.prototype.createFilterRadio = function (label, value, checked) {
        var _this = this;
        var $input = document.createElement("input");
        var $label = document.createElement("label");
        $input.type = "radio";
        $input.name = "filter_type";
        $input.value = value;
        $input.checked = checked;
        $label.textContent = label;
        $label.appendChild($input);
        $input.addEventListener("change", function () {
            _this.currentFilter = value;
            _this.render();
        });
        return $label;
    };
    TodoList.prototype.createFilterRadioFieldset = function () {
        var _this = this;
        var fieldset = document.createElement("fieldset");
        Object.entries({
            ALL: "All",
            ACTIVE: "Active",
            COMPLETED: "Complete",
        }).forEach(function (_a) {
            var value = _a[0], label = _a[1];
            fieldset.appendChild(_this.createFilterRadio(label, value, value === _this.currentFilter));
        });
        return fieldset;
    };
    TodoList.prototype.createItemList = function () {
        var _this = this;
        var itemList = document.createElement("ul");
        itemList.className = "todo-item-list";
        this.filteredTodos.forEach(function (todo) {
            itemList.appendChild(_this.createTodoItem(todo));
        });
        return itemList;
    };
    TodoList.prototype.createCountDisplay = function () {
        var countDisplay = document.createElement("span");
        countDisplay.textContent = "".concat(this.filteredTodos.length, " items left");
        return countDisplay;
    };
    TodoList.prototype.createClearCompletedButton = function () {
        var _this = this;
        var clearButton = document.createElement("button");
        var completedTodos = this.todos.filter(function (todo) { return todo.completed; });
        var activeTodos = this.todos.filter(function (todo) { return !todo.completed; });
        clearButton.textContent = "Clear Completed (".concat(completedTodos.length, ")");
        clearButton.className = "clear-completed";
        clearButton.addEventListener("click", function () {
            _this.todos = activeTodos;
            _this.render();
        });
        return clearButton;
    };
    TodoList.prototype.findTodoIdFromElement = function (element) {
        var checkbox = element.querySelector('input[type="checkbox"]');
        return checkbox ? checkbox.id : "";
    };
    TodoList.prototype.moveMirror = function (event) {
        var rect = this.mirror.getBoundingClientRect();
        this.mirror.style.top = "".concat(event.clientY - rect.height / 2, "px");
        this.mirror.style.left = "".concat(event.clientX - this.offsetX, "px");
    };
    TodoList.prototype.cancelDrag = function () {
        if (this.mirror) {
            this.mirror.remove();
            this.mirror = null;
        }
    };
    TodoList.prototype.syncWithMainTodos = function () {
        var _this = this;
        this.todos.sort(function (a, b) {
            var indexA = _this.filteredTodos.findIndex(function (todo) { return todo.id === a.id; });
            var indexB = _this.filteredTodos.findIndex(function (todo) { return todo.id === b.id; });
            return indexA - indexB;
        });
    };
    TodoList.prototype.createInput = function () {
        var _this = this;
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "What needs to be done?";
        input.className = "todo-item-input";
        input.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                var input_1 = event.currentTarget;
                var value = input_1.value;
                if (value) {
                    _this.addTodo(value);
                }
                input_1.value = "";
            }
        });
        return input;
    };
    TodoList.prototype.render = function () {
        this.filteredTodos = this.getFilteredTodos();
        this.rootElement.innerHTML = "";
        this.rootElement.appendChild(this.createInput());
        var inputElement = this.rootElement.querySelector("input.todo-item-input");
        inputElement.focus();
        this.rootElement.appendChild(this.createItemList());
        var todoInfo = document.createElement("div");
        todoInfo.className = "todo-info";
        todoInfo.appendChild(this.createCountDisplay());
        todoInfo.appendChild(this.createFilterRadioFieldset());
        todoInfo.appendChild(this.createClearCompletedButton());
        this.rootElement.appendChild(todoInfo);
        this.rootElement.addEventListener("mousedown", this.handleMousedown);
        document.addEventListener("mousemove", this.handleMousemove);
        document.addEventListener("keyup", this.handleKeyup);
        document.addEventListener("mouseup", this.handleMouseup);
        return this.rootElement;
    };
    return TodoList;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.ts");


var app = new _App__WEBPACK_IMPORTED_MODULE_1__["default"]();
document.body.appendChild(app.rootElement);


/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUUID: () => (/* binding */ generateUUID)
/* harmony export */ });
function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLGFBQWEsY0FBYyxRQUFRLFlBQVksYUFBYSxXQUFXLE9BQU8sVUFBVSxhQUFhLFNBQVMsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sVUFBVSxhQUFhLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxjQUFjLGNBQWMsVUFBVSxNQUFNLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxjQUFjLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxjQUFjLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxjQUFjLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksY0FBYyxPQUFPLE1BQU0sU0FBUyxZQUFZLE9BQU8sVUFBVSxhQUFhLFNBQVMsTUFBTSxTQUFTLHNCQUFzQixhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSx1QkFBdUIsT0FBTyxNQUFNLE1BQU0sUUFBUSxVQUFVLE9BQU8sUUFBUSxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLHNCQUFzQixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLGNBQWMsT0FBTyxNQUFNLEtBQUssVUFB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b3VyY2VzIjpbIndlYnBhY2s6Ly9uaG4taW5qZS8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovL25obi1pbmplLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9uaG4taW5qZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmhuLWluamUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uaG4taW5qZS8uL3NyYy9BcHAuY3NzP2Q5Y2QiLCJ3ZWJwYWNrOi8vbmhuLWluamUvLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vbmhuLWluamUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmhuLWluamUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25obi1pbmplLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25obi1pbmplLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25obi1pbmplLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmhuLWluamUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uaG4taW5qZS8uL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8vbmhuLWluamUvLi9zcmMvY29tcG9uZW50cy9Ub2RvTGlzdC9Ub2RvTGlzdC50cyIsIndlYnBhY2s6Ly9uaG4taW5qZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9uaG4taW5qZS8uL3NyYy91dGlsL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogQXBwbGVHb3RoaWMsIHNhbnMtc2VyaWY7XG59XG5hcnRpY2xlLnRvZG8tYXBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHJvdy1nYXA6IDJyZW07XG4gIHBhZGRpbmc6IDNyZW07XG4gICYgPiBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmID4gc2VjdGlvbi50b2RvLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbn1cbmlucHV0LnRvZG8taXRlbS1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6IHJlZCAycHggZG90dGVkO1xuICB9XG59XG51bC50b2RvLWl0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW07XG59XG5saS50b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbSAwO1xuICAmLmNvbXBsZXRlZCBsYWJlbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgfVxufVxuYnV0dG9uIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG4udG9kby1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmIGZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbHVtbi1nYXA6IDFyZW07XG4gICAgJiBsYWJlbCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAmOmhhcyg6Y2hlY2tlZCkge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmIC5jbGVhci1jb21wbGV0ZWQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2I7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2I7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCO0lBQ0UsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQjtNQUNFLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsYUFBYTtNQUNiLDJCQUEyQjtNQUMzQjtRQUNFLFVBQVU7TUFDWjtJQUNGO0VBQ0Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IEFwcGxlR290aGljLCBzYW5zLXNlcmlmO1xcbn1cXG5hcnRpY2xlLnRvZG8tYXBwIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDJyZW07XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgJiA+IGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gICYgPiBzZWN0aW9uLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgfVxcbn1cXG5pbnB1dC50b2RvLWl0ZW0taW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gICY6Zm9jdXMge1xcbiAgICBib3JkZXI6IHJlZCAycHggZG90dGVkO1xcbiAgfVxcbn1cXG51bC50b2RvLWl0ZW0tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbmxpLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xcbiAgcGFkZGluZzogMS41cmVtIDAgMS41cmVtIDA7XFxuICAmLmNvbXBsZXRlZCBsYWJlbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgfVxcbn1cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcbi50b2RvLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAmIGZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgJiBsYWJlbCB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICAgICY6aGFzKDpjaGVja2VkKSB7XFxuICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgJiAuY2xlYXItY29tcGxldGVkIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgZGVzdHlsZS5jc3MgdjQuMC4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vbmljb2xhcy1jdXNhbi9kZXN0eWxlLmNzcyAqL1xuXG4vKiBSZXNldCBib3gtbW9kZWwgYW5kIHNldCBib3JkZXJzICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4vKiBEb2N1bWVudCAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqIDMuIFJlbW92ZSBncmF5IG92ZXJsYXkgb24gbGlua3MgZm9yIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDMqL1xufVxuXG4vKiBTZWN0aW9ucyAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBWZXJ0aWNhbCByaHl0aG0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbnAsXG50YWJsZSxcbmJsb2NrcXVvdGUsXG5hZGRyZXNzLFxucHJlLFxuaWZyYW1lLFxuZm9ybSxcbmZpZ3VyZSxcbmRsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBIZWFkaW5ncyAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBMaXN0cyAoZW51bWVyYXRpb24pICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG51bCxcbm9sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBMaXN0cyAoZGVmaW5pdGlvbikgKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnQgKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgbWFyZ2luOiAwO1xuICBjbGVhcjogYm90aDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDsgLyogMiAqL1xufVxuXG5hZGRyZXNzIHtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3MgKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIFJlcGxhY2VkIGNvbnRlbnQgKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUHJldmVudCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaXNzdWVzLlxuICovXG5cbnN2ZyxcbmltZyxcbmVtYmVkLFxub2JqZWN0LFxuaWZyYW1lIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLyogRm9ybXMgKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVzZXQgZm9ybSBmaWVsZHMgdG8gbWFrZSB0aGVtIHN0eWxlYWJsZS5cbiAqIDEuIE1ha2UgZm9ybSBlbGVtZW50cyBzdHlsYWJsZSBhY3Jvc3Mgc3lzdGVtcyBpT1MgZXNwZWNpYWxseS5cbiAqIDIuIEluaGVyaXQgdGV4dC10cmFuc2Zvcm0gZnJvbSBwYXJlbnQuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiAxICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgY3Vyc29ycyBmb3IgY2xpY2thYmxlIGVsZW1lbnRzLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246ZGlzYWJsZWQsXG5bdHlwZT1cImJ1dHRvblwiXTpkaXNhYmxlZCxcblt0eXBlPVwicmVzZXRcIl06ZGlzYWJsZWQsXG5bdHlwZT1cInN1Ym1pdFwiXTpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLyoqXG4gKiBJbXByb3ZlIG91dGxpbmVzIGZvciBGaXJlZm94IGFuZCB1bmlmeSBzdHlsZSB3aXRoIGlucHV0IGVsZW1lbnRzICYgYnV0dG9ucy5cbiAqL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG5zZWxlY3Q6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiBpbmhlcml0O1xufVxuXG4vKipcbiAqIFJlbW92ZSBwYWRkaW5nXG4gKi9cblxub3B0aW9uIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXNldCB0byBpbnZpc2libGVcbiAqL1xuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAxICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBGaXggZm9udCBpbmhlcml0YW5jZS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEZpeCBhcHBlYXJhbmNlIGZvciBGaXJlZm94XG4gKi9cblt0eXBlPVwibnVtYmVyXCJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi8qKlxuICogQ2xpY2thYmxlIGxhYmVsc1xuICovXG5cbmxhYmVsW2Zvcl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEludGVyYWN0aXZlICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcbiAqIFJlbW92ZSBvdXRsaW5lIGZvciBlZGl0YWJsZSBjb250ZW50LlxuICovXG5cbltjb250ZW50ZWRpdGFibGVdOmZvY3VzIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLyogVGFibGVzICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbjEuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbmNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZCxcbnRoIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMDtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxRkFBcUY7O0FBRXJGLG9DQUFvQztBQUNwQyxpREFBaUQ7O0FBRWpEOzs7RUFHRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUEsYUFBYTtBQUNiLGlEQUFpRDs7QUFFakQ7Ozs7RUFJRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtFQUN0Qyx3Q0FBd0MsRUFBRSxLQUFLO0FBQ2pEOztBQUVBLGFBQWE7QUFDYixpREFBaUQ7O0FBRWpEOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxvQkFBb0I7QUFD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OztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFdBQVc7QUFDWCxpREFBaUQ7O0FBRWpEOztDQUVDOztBQUVEO0VBQ0UscUJBQXFCLEVBQUUsTUFBTTtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIGRlc3R5bGUuY3NzIHY0LjAuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL25pY29sYXMtY3VzYW4vZGVzdHlsZS5jc3MgKi9cXG5cXG4vKiBSZXNldCBib3gtbW9kZWwgYW5kIHNldCBib3JkZXJzICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi8qIERvY3VtZW50ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICogMy4gUmVtb3ZlIGdyYXkgb3ZlcmxheSBvbiBsaW5rcyBmb3IgaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMyovXFxufVxcblxcbi8qIFNlY3Rpb25zICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFZlcnRpY2FsIHJoeXRobSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxucCxcXG50YWJsZSxcXG5ibG9ja3F1b3RlLFxcbmFkZHJlc3MsXFxucHJlLFxcbmlmcmFtZSxcXG5mb3JtLFxcbmZpZ3VyZSxcXG5kbCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRpbmdzICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogTGlzdHMgKGVudW1lcmF0aW9uKSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxudWwsXFxub2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIExpc3RzIChkZWZpbml0aW9uKSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuZHQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRkIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxuICBtYXJnaW46IDA7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuYWRkcmVzcyB7XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljcyAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogUmVwbGFjZWQgY29udGVudCAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUHJldmVudCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaXNzdWVzLlxcbiAqL1xcblxcbnN2ZyxcXG5pbWcsXFxuZW1iZWQsXFxub2JqZWN0LFxcbmlmcmFtZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4vKiBGb3JtcyAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVzZXQgZm9ybSBmaWVsZHMgdG8gbWFrZSB0aGVtIHN0eWxlYWJsZS5cXG4gKiAxLiBNYWtlIGZvcm0gZWxlbWVudHMgc3R5bGFibGUgYWNyb3NzIHN5c3RlbXMgaU9TIGVzcGVjaWFsbHkuXFxuICogMi4gSW5oZXJpdCB0ZXh0LXRyYW5zZm9ybSBmcm9tIHBhcmVudC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogMSAqL1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgY3Vyc29ycyBmb3IgY2xpY2thYmxlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTpkaXNhYmxlZCxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTpkaXNhYmxlZCxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIG91dGxpbmVzIGZvciBGaXJlZm94IGFuZCB1bmlmeSBzdHlsZSB3aXRoIGlucHV0IGVsZW1lbnRzICYgYnV0dG9ucy5cXG4gKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuc2VsZWN0OmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBwYWRkaW5nXFxuICovXFxuXFxub3B0aW9uIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IHRvIGludmlzaWJsZVxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIEZpeCBmb250IGluaGVyaXRhbmNlLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogRml4IGFwcGVhcmFuY2UgZm9yIEZpcmVmb3hcXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbi8qKlxcbiAqIENsaWNrYWJsZSBsYWJlbHNcXG4gKi9cXG5cXG5sYWJlbFtmb3JdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogSW50ZXJhY3RpdmUgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgb3V0bGluZSBmb3IgZWRpdGFibGUgY29udGVudC5cXG4gKi9cXG5cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKiBUYWJsZXMgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbjEuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuY2FwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGgge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvTGlzdC9Ub2RvTGlzdFwiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgbGlzdDogVG9kb0xpc3Q7XG4gIHRvZG9zOiBzdHJpbmdbXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGFydGljbGUuY2xhc3NOYW1lID0gXCJ0b2RvLWFwcFwiO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJUb2RvIEFwcFwiO1xuICAgIHRoaXMubGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuICAgIHRoaXMubGlzdC5yZW5kZXIoKS5jbGFzc05hbWUgPSBcInRvZG8tbGlzdFwiO1xuICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGFydGljbGUuYXBwZW5kQ2hpbGQodGhpcy5saXN0LnJlbmRlcigpKTtcbiAgICByZXR1cm4gYXJ0aWNsZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdEVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlVVVJRCB9IGZyb20gXCIuLi8uLi91dGlsXCI7XG5cbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gIG9yZGVyOiBudW1iZXI7XG59XG5cbnR5cGUgRmlsdGVyVHlwZSA9IFwiQUxMXCIgfCBcIkFDVElWRVwiIHwgXCJDT01QTEVURURcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgcHJpdmF0ZSByb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdG9kb3M6IFRvZG9bXTtcbiAgcHJpdmF0ZSBmaWx0ZXJlZFRvZG9zOiBUb2RvW107XG4gIHByaXZhdGUgY3VycmVudEZpbHRlcjogRmlsdGVyVHlwZTtcbiAgcHJpdmF0ZSBvZmZzZXRYOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGNsaWNrSXRlbUluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgbWlycm9yOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aWV3VGltZW91dDogbnVtYmVyO1xuICBwcml2YXRlIGlzUHJldmlld1Nob3duOiBib29sZWFuO1xuICBwcml2YXRlIHByZXZpZXdFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdFwiKTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy5jdXJyZW50RmlsdGVyID0gXCJBTExcIjtcbiAgfVxuICBhZGRUb2RvKHRvZG86IHN0cmluZykge1xuICAgIGNvbnN0IG1heE9yZGVyID1cbiAgICAgIHRoaXMudG9kb3MubGVuZ3RoID09PSAwXG4gICAgICAgID8gMFxuICAgICAgICA6IE1hdGgubWF4KC4uLnRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB0b2RvLm9yZGVyKSk7XG4gICAgdGhpcy50b2Rvcy51bnNoaWZ0KHtcbiAgICAgIGlkOiBcImlkXCIgKyBnZW5lcmF0ZVVVSUQoKSxcbiAgICAgIGNvbnRlbnQ6IHRvZG8sXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgb3JkZXI6IG1heE9yZGVyICsgMSxcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIGZpbHRlclRvZG8odG9kb3M6IFRvZG9bXSkge1xuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50RmlsdGVyKSB7XG4gICAgICBjYXNlIFwiQUNUSVZFXCI6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+ICF0b2RvLmNvbXBsZXRlZCk7XG4gICAgICBjYXNlIFwiQ09NUExFVEVEXCI6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY29tcGxldGVkKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0b2RvcztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVUb2RvSXRlbSh0b2RvOiBUb2RvKSB7XG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRvZG9JdGVtLmNsYXNzTmFtZSA9IFwidG9kby1pdGVtXCI7XG4gICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guaWQgPSB0b2RvLmlkO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNoYW5nZVwiLFxuICAgICAgdGhpcy5oYW5kbGVUb2RvVG9nZ2xlLmJpbmQodGhpcywgdG9kby5pZClcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdG9kby5jb250ZW50O1xuICAgIGxhYmVsLmh0bWxGb3IgPSB0b2RvLmlkO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZS1idG5cIjtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIuyCreygnFwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5oYW5kbGVUb2RvRGVsZXRlLmJpbmQodGhpcywgdG9kby5pZClcbiAgICApO1xuXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHJldHVybiB0b2RvSXRlbTtcbiAgfVxuICBwcml2YXRlIGhhbmRsZVRvZG9EZWxldGUodG9kb0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IHRvZG9JZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBwcml2YXRlIGhhbmRsZVRvZG9Ub2dnbGUodG9kb0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLmlkID09PSB0b2RvSWQpIHtcbiAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBwcml2YXRlIGNyZWF0ZUZpbHRlclJhZGlvKFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgdmFsdWU6IEZpbHRlclR5cGUsXG4gICAgY2hlY2tlZDogYm9vbGVhblxuICApIHtcbiAgICBjb25zdCAkaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgJGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICRpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICRpbnB1dC5uYW1lID0gXCJmaWx0ZXJfdHlwZVwiO1xuICAgICRpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICRpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAkbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICAkbGFiZWwuYXBwZW5kQ2hpbGQoJGlucHV0KTtcbiAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuICRsYWJlbDtcbiAgfVxuICBwcml2YXRlIGNyZWF0ZUZpbHRlclJhZGlvRmllbGRzZXQoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgT2JqZWN0LmVudHJpZXMoe1xuICAgICAgQUxMOiBcIkFsbFwiLFxuICAgICAgQUNUSVZFOiBcIkFjdGl2ZVwiLFxuICAgICAgQ09NUExFVEVEOiBcIkNvbXBsZXRlXCIsXG4gICAgfSkuZm9yRWFjaCgoW3ZhbHVlLCBsYWJlbF06IFtGaWx0ZXJUeXBlLCBzdHJpbmddKSA9PiB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChcbiAgICAgICAgdGhpcy5jcmVhdGVGaWx0ZXJSYWRpbyhsYWJlbCwgdmFsdWUsIHZhbHVlID09PSB0aGlzLmN1cnJlbnRGaWx0ZXIpXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWVsZHNldDtcbiAgfVxuICBwcml2YXRlIGNyZWF0ZUl0ZW1MaXN0KCkge1xuICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGl0ZW1MaXN0LmNsYXNzTmFtZSA9IFwidG9kby1pdGVtLWxpc3RcIjtcbiAgICB0aGlzLmZpbHRlcmVkVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgaXRlbUxpc3QuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2RvSXRlbSh0b2RvKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW1MaXN0O1xuICB9XG4gIHByaXZhdGUgY3JlYXRlQ291bnREaXNwbGF5KCkge1xuICAgIGNvbnN0IGNvdW50RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvdW50RGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RoaXMuZmlsdGVyZWRUb2Rvcy5sZW5ndGh9IGl0ZW1zIGxlZnRgO1xuICAgIHJldHVybiBjb3VudERpc3BsYXk7XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVDbGVhckNvbXBsZXRlZEJ1dHRvbigpIHtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY29tcGxldGVkVG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5jb21wbGV0ZWQpO1xuICAgIGNvbnN0IGFjdGl2ZVRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+ICF0b2RvLmNvbXBsZXRlZCk7XG4gICAgY2xlYXJCdXR0b24udGV4dENvbnRlbnQgPSBgQ2xlYXIgQ29tcGxldGVkICgke2NvbXBsZXRlZFRvZG9zLmxlbmd0aH0pYDtcbiAgICBjbGVhckJ1dHRvbi5jbGFzc05hbWUgPSBcImNsZWFyLWNvbXBsZXRlZFwiO1xuICAgIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvZG9zID0gYWN0aXZlVG9kb3M7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbGVhckJ1dHRvbjtcbiAgfVxuICBwcml2YXRlIGZpbmRUb2RvSWRGcm9tRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgIHJldHVybiBjaGVja2JveCA/IGNoZWNrYm94LmlkIDogXCJcIjtcbiAgfVxuICBwcml2YXRlIGhhbmRsZU1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0b2RvRWxlbWVudCA9IHRhcmdldC5jbG9zZXN0KFwiLnRvZG8taXRlbVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIXRvZG9FbGVtZW50KSByZXR1cm47XG4gICAgY29uc3QgdG9kb0lkID0gdGhpcy5maW5kVG9kb0lkRnJvbUVsZW1lbnQodG9kb0VsZW1lbnQpO1xuICAgIHRoaXMuY2xpY2tJdGVtSW5kZXggPSB0aGlzLmZpbHRlcmVkVG9kb3MuZmluZEluZGV4KFxuICAgICAgKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZFxuICAgICk7XG4gICAgaWYgKHRoaXMuY2xpY2tJdGVtSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSB0YXJnZXQuY2xvc2VzdChcIi50b2RvLWl0ZW1cIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB0aGlzLmNyZWF0ZURyYWdNaXJyb3IoZXZlbnQsIHRvZG9FbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBjcmVhdGVEcmFnTWlycm9yID0gKGV2ZW50OiBNb3VzZUV2ZW50LCB0b2RvRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGhpcy5jbGlja0l0ZW1JbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmZpbHRlcmVkVG9kb3NbdGhpcy5jbGlja0l0ZW1JbmRleF0uY29tcGxldGVkKSByZXR1cm47XG4gICAgdGhpcy5taXJyb3IgPSB0b2RvRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5taXJyb3Iuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5taXJyb3Iuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gICAgdGhpcy5taXJyb3Iuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGNvbnN0IHJlY3QgPSB0b2RvRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMub2Zmc2V0WCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcblxuICAgIHRoaXMubWlycm9yLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIHRoaXMubWlycm9yLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgLSBvZmZzZXRZfXB4YDtcbiAgICB0aGlzLm1pcnJvci5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCAtIHRoaXMub2Zmc2V0WH1weGA7XG4gICAgdGhpcy5taXJyb3Iuc3R5bGUud2lkdGggPSBgJHtyZWN0LndpZHRofXB4YDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWlycm9yKTtcbiAgfTtcbiAgcHJpdmF0ZSBoYW5kbGVNb3VzZW1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5jbGlja0l0ZW1JbmRleCA9PT0gbnVsbCB8fCAhdGhpcy5taXJyb3IpIHJldHVybjtcbiAgICB0aGlzLm1vdmVNaXJyb3IoZXZlbnQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnByZXZpZXdUaW1lb3V0KTtcbiAgICB0aGlzLnByZXZpZXdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyB0aGlzLnNob3dQcmV2aWV3KGV2ZW50KTtcbiAgICB9LCAyMDAwKSBhcyB1bmtub3duIGFzIG51bWJlcjtcbiAgfTtcbiAgcHJpdmF0ZSBzaG93UHJldmlldyA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtRWxlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBsaTpoYXMoaW5wdXRbaWQ9XCIke3RoaXMudG9kb3NbdGhpcy5jbGlja0l0ZW1JbmRleF0/LmlkfVwiXSlgXG4gICAgKSBhcyBIVE1MTGFiZWxFbGVtZW50O1xuXG4gICAgaWYgKGN1cnJlbnRJdGVtRWxlbWVudCkge1xuICAgICAgdGhpcy5wcmV2aWV3RWxlbWVudCA9IGN1cnJlbnRJdGVtRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIHRoaXMucHJldmlld0VsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XG4gICAgICB0aGlzLnByZXZpZXdFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgdGhpcy5wcmV2aWV3RWxlbWVudC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cbiAgICAgIGNvbnN0IGRyb3BUYXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KFxuICAgICAgICBldmVudC5jbGllbnRYLFxuICAgICAgICBldmVudC5jbGllbnRZXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgZHJvcFRvZG9FbGVtZW50ID0gZHJvcFRhcmdldC5jbG9zZXN0KFwiLnRvZG8taXRlbVwiKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgZHJvcFRvZG9FbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHRoaXMucHJldmlld0VsZW1lbnQpO1xuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSBtb3ZlTWlycm9yKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMubWlycm9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMubWlycm9yLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgLSByZWN0LmhlaWdodCAvIDJ9cHhgO1xuICAgIHRoaXMubWlycm9yLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYIC0gdGhpcy5vZmZzZXRYfXB4YDtcbiAgfVxuICBwcml2YXRlIGNhbmNlbERyYWcoKSB7XG4gICAgaWYgKHRoaXMubWlycm9yKSB7XG4gICAgICB0aGlzLm1pcnJvci5yZW1vdmUoKTtcbiAgICAgIHRoaXMubWlycm9yID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBoYW5kbGVNb3VzZXVwID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuY2xpY2tJdGVtSW5kZXggPT09IG51bGwgfHwgIXRoaXMubWlycm9yKSByZXR1cm47XG5cbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMucm9vdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKFxuICAgICAgZXZlbnQuY2xpZW50WCA8IHJvb3RSZWN0LmxlZnQgfHxcbiAgICAgIGV2ZW50LmNsaWVudFggPiByb290UmVjdC5yaWdodCB8fFxuICAgICAgZXZlbnQuY2xpZW50WSA8IHJvb3RSZWN0LnRvcCB8fFxuICAgICAgZXZlbnQuY2xpZW50WSA+IHJvb3RSZWN0LmJvdHRvbVxuICAgICkge1xuICAgICAgdGhpcy5jYW5jZWxEcmFnKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcFRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoXG4gICAgICBldmVudC5jbGllbnRYLFxuICAgICAgZXZlbnQuY2xpZW50WVxuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZHJvcFRvZG9FbGVtZW50ID0gZHJvcFRhcmdldC5jbG9zZXN0KFwiLnRvZG8taXRlbVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWRyb3BUb2RvRWxlbWVudCkge1xuICAgICAgdGhpcy5jYW5jZWxEcmFnKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcFRvZG9JZCA9IHRoaXMuZmluZFRvZG9JZEZyb21FbGVtZW50KGRyb3BUb2RvRWxlbWVudCk7XG4gICAgY29uc3QgZHJvcEl0ZW1JbmRleCA9IHRoaXMuZmlsdGVyZWRUb2Rvcy5maW5kSW5kZXgoXG4gICAgICAodG9kbykgPT4gdG9kby5pZCA9PT0gZHJvcFRvZG9JZFxuICAgICk7XG5cbiAgICBpZiAoZHJvcEl0ZW1JbmRleCAhPT0gLTEgJiYgZHJvcEl0ZW1JbmRleCAhPT0gdGhpcy5jbGlja0l0ZW1JbmRleCkge1xuICAgICAgY29uc3QgZHJhZ2dlZEl0ZW0gPSB0aGlzLmZpbHRlcmVkVG9kb3Muc3BsaWNlKHRoaXMuY2xpY2tJdGVtSW5kZXgsIDEpWzBdO1xuICAgICAgdGhpcy5maWx0ZXJlZFRvZG9zLnNwbGljZShkcm9wSXRlbUluZGV4LCAwLCBkcmFnZ2VkSXRlbSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmlsdGVyZWRUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmZpbHRlcmVkVG9kb3NbaV0ub3JkZXIgPSB0aGlzLmZpbHRlcmVkVG9kb3MubGVuZ3RoIC0gMSAtIGk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLnN5bmNXaXRoTWFpblRvZG9zKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICB0aGlzLmNsaWNrSXRlbUluZGV4ID0gbnVsbDtcbiAgfTtcbiAgcHJpdmF0ZSBzeW5jV2l0aE1haW5Ub2RvcygpIHtcbiAgICB0aGlzLnRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4QSA9IHRoaXMuZmlsdGVyZWRUb2Rvcy5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT09IGEuaWQpO1xuICAgICAgY29uc3QgaW5kZXhCID0gdGhpcy5maWx0ZXJlZFRvZG9zLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PT0gYi5pZCk7XG4gICAgICByZXR1cm4gaW5kZXhBIC0gaW5kZXhCO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXl1cCA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGlmICh0aGlzLmNsaWNrSXRlbUluZGV4ICE9PSBudWxsICYmIHRoaXMubWlycm9yKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSBnZXRGaWx0ZXJlZFRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IHNvcnRlZFRvZG9zID0gWy4uLnRoaXMudG9kb3NdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLmNvbXBsZXRlZCA9PT0gYi5jb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGIub3JkZXIgLSBhLm9yZGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGEuY29tcGxldGVkID8gMSA6IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmZpbHRlclRvZG8oc29ydGVkVG9kb3MpO1xuICB9O1xuICBwcml2YXRlIGNyZWF0ZUlucHV0KCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiO1xuICAgIGlucHV0LmNsYXNzTmFtZSA9IFwidG9kby1pdGVtLWlucHV0XCI7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmFkZFRvZG8odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5maWx0ZXJlZFRvZG9zID0gdGhpcy5nZXRGaWx0ZXJlZFRvZG9zKCk7XG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRoaXMucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVJbnB1dCgpKTtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImlucHV0LnRvZG8taXRlbS1pbnB1dFwiXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSXRlbUxpc3QoKSk7XG4gICAgY29uc3QgdG9kb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9JbmZvLmNsYXNzTmFtZSA9IFwidG9kby1pbmZvXCI7XG4gICAgdG9kb0luZm8uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb3VudERpc3BsYXkoKSk7XG4gICAgdG9kb0luZm8uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGaWx0ZXJSYWRpb0ZpZWxkc2V0KCkpO1xuICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ2xlYXJDb21wbGV0ZWRCdXR0b24oKSk7XG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvSW5mbyk7XG4gICAgdGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2Vkb3duKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlTW91c2Vtb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXl1cCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5oYW5kbGVNb3VzZXVwKTtcbiAgICByZXR1cm4gdGhpcy5yb290RWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9yZXNldC5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLnJvb3RFbGVtZW50KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQoKTogc3RyaW5nIHtcbiAgcmV0dXJuIFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICB2ID0gYyA9PT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=