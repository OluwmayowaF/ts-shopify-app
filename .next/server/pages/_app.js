module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./components/ClientRouter.js":
/*!************************************!*\
  !*** ./components/ClientRouter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Mawhizzle/Documents/Programming/Tracksend/tracksend-shopify/components/ClientRouter.js\";\n\n\n\nfunction ClientRouter(props) {\n  const {\n    router\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ClientRouter\"], {\n    history: router\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, this);\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ClientRouter));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsaWVudFJvdXRlci5qcz81OGJlIl0sIm5hbWVzIjpbIkNsaWVudFJvdXRlciIsInByb3BzIiwicm91dGVyIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixRQUFNO0FBQUNDO0FBQUQsTUFBV0QsS0FBakI7QUFDQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUF1QixXQUFPLEVBQUVDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUFBO0FBRWNDLDZIQUFVLENBQUNILFlBQUQsQ0FBekIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsaWVudFJvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge0NsaWVudFJvdXRlciBhcyBBcHBCcmlkZ2VDbGllbnRSb3V0ZXJ9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuXG5mdW5jdGlvbiBDbGllbnRSb3V0ZXIocHJvcHMpIHtcbiAgY29uc3Qge3JvdXRlcn0gPSBwcm9wcztcbiAgcmV0dXJuIDxBcHBCcmlkZ2VDbGllbnRSb3V0ZXIgaGlzdG9yeT17cm91dGVyfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ2xpZW50Um91dGVyKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClientRouter.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/@shopify/polaris/dist/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/dist/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9wb2xhcmlzL2Rpc3Qvc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@shopify/polaris/dist/styles.css\n");

/***/ }),

/***/ "./node_modules/@shopify/polaris/locales/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/locales/en.json ***!
  \*******************************************************/
/*! exports provided: Polaris, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"Polaris\\\":{\\\"Actions\\\":{\\\"moreActions\\\":\\\"More actions\\\"},\\\"Avatar\\\":{\\\"label\\\":\\\"Avatar\\\",\\\"labelWithInitials\\\":\\\"Avatar with initials {initials}\\\"},\\\"Autocomplete\\\":{\\\"spinnerAccessibilityLabel\\\":\\\"Loading\\\"},\\\"Badge\\\":{\\\"PROGRESS_LABELS\\\":{\\\"incomplete\\\":\\\"Incomplete\\\",\\\"partiallyComplete\\\":\\\"Partially complete\\\",\\\"complete\\\":\\\"Complete\\\"},\\\"STATUS_LABELS\\\":{\\\"info\\\":\\\"Info\\\",\\\"success\\\":\\\"Success\\\",\\\"warning\\\":\\\"Warning\\\",\\\"critical\\\":\\\"Critical\\\",\\\"attention\\\":\\\"Attention\\\",\\\"new\\\":\\\"New\\\"},\\\"progressAndStatus\\\":\\\"{statusLabel} {progressLabel}\\\"},\\\"Button\\\":{\\\"spinnerAccessibilityLabel\\\":\\\"Loading\\\",\\\"connectedDisclosureAccessibilityLabel\\\":\\\"Related actions\\\"},\\\"Common\\\":{\\\"checkbox\\\":\\\"checkbox\\\",\\\"undo\\\":\\\"Undo\\\",\\\"cancel\\\":\\\"Cancel\\\",\\\"newWindowAccessibilityHint\\\":\\\"(opens a new window)\\\",\\\"clear\\\":\\\"Clear\\\",\\\"close\\\":\\\"Close\\\",\\\"submit\\\":\\\"Submit\\\",\\\"more\\\":\\\"More\\\"},\\\"ContextualSaveBar\\\":{\\\"save\\\":\\\"Save\\\",\\\"discard\\\":\\\"Discard\\\"},\\\"DataTable\\\":{\\\"sortAccessibilityLabel\\\":\\\"sort {direction} by\\\",\\\"navAccessibilityLabel\\\":\\\"Scroll table {direction} one column\\\",\\\"totalsRowHeading\\\":\\\"Totals\\\",\\\"totalRowHeading\\\":\\\"Total\\\"},\\\"DatePicker\\\":{\\\"previousMonth\\\":\\\"Show previous month, {previousMonthName} {showPreviousYear}\\\",\\\"nextMonth\\\":\\\"Show next month, {nextMonth} {nextYear}\\\",\\\"today\\\":\\\"Today \\\",\\\"start\\\":\\\"Start of range\\\",\\\"end\\\":\\\"End of range\\\",\\\"months\\\":{\\\"january\\\":\\\"January\\\",\\\"february\\\":\\\"February\\\",\\\"march\\\":\\\"March\\\",\\\"april\\\":\\\"April\\\",\\\"may\\\":\\\"May\\\",\\\"june\\\":\\\"June\\\",\\\"july\\\":\\\"July\\\",\\\"august\\\":\\\"August\\\",\\\"september\\\":\\\"September\\\",\\\"october\\\":\\\"October\\\",\\\"november\\\":\\\"November\\\",\\\"december\\\":\\\"December\\\"},\\\"days\\\":{\\\"monday\\\":\\\"Monday\\\",\\\"tuesday\\\":\\\"Tuesday\\\",\\\"wednesday\\\":\\\"Wednesday\\\",\\\"thursday\\\":\\\"Thursday\\\",\\\"friday\\\":\\\"Friday\\\",\\\"saturday\\\":\\\"Saturday\\\",\\\"sunday\\\":\\\"Sunday\\\"},\\\"daysAbbreviated\\\":{\\\"monday\\\":\\\"Mo\\\",\\\"tuesday\\\":\\\"Tu\\\",\\\"wednesday\\\":\\\"We\\\",\\\"thursday\\\":\\\"Th\\\",\\\"friday\\\":\\\"Fr\\\",\\\"saturday\\\":\\\"Sa\\\",\\\"sunday\\\":\\\"Su\\\"}},\\\"DiscardConfirmationModal\\\":{\\\"title\\\":\\\"Discard all unsaved changes\\\",\\\"message\\\":\\\"If you discard changes, you’ll delete any edits you made since you last saved.\\\",\\\"primaryAction\\\":\\\"Discard changes\\\",\\\"secondaryAction\\\":\\\"Continue editing\\\"},\\\"DropZone\\\":{\\\"single\\\":{\\\"overlayTextFile\\\":\\\"Drop file to upload\\\",\\\"overlayTextImage\\\":\\\"Drop image to upload\\\",\\\"actionTitleFile\\\":\\\"Add file\\\",\\\"actionTitleImage\\\":\\\"Add image\\\",\\\"actionHintFile\\\":\\\"or drop file to upload\\\",\\\"actionHintImage\\\":\\\"or drop image to upload\\\",\\\"labelFile\\\":\\\"Upload file\\\",\\\"labelImage\\\":\\\"Upload image\\\"},\\\"allowMultiple\\\":{\\\"overlayTextFile\\\":\\\"Drop files to upload\\\",\\\"overlayTextImage\\\":\\\"Drop images to upload\\\",\\\"actionTitleFile\\\":\\\"Add files\\\",\\\"actionTitleImage\\\":\\\"Add images\\\",\\\"actionHintFile\\\":\\\"or drop files to upload\\\",\\\"actionHintImage\\\":\\\"or drop images to upload\\\",\\\"labelFile\\\":\\\"Upload files\\\",\\\"labelImage\\\":\\\"Upload images\\\"},\\\"errorOverlayTextFile\\\":\\\"File type is not valid\\\",\\\"errorOverlayTextImage\\\":\\\"Image type is not valid\\\"},\\\"EmptySearchResult\\\":{\\\"altText\\\":\\\"Empty search results\\\"},\\\"Frame\\\":{\\\"skipToContent\\\":\\\"Skip to content\\\",\\\"navigationLabel\\\":\\\"Navigation\\\",\\\"Navigation\\\":{\\\"closeMobileNavigationLabel\\\":\\\"Close navigation\\\"}},\\\"ActionMenu\\\":{\\\"RollupActions\\\":{\\\"rollupButton\\\":\\\"Actions\\\"}},\\\"Filters\\\":{\\\"moreFilters\\\":\\\"More filters\\\",\\\"moreFiltersWithCount\\\":\\\"More filters ({count})\\\",\\\"filter\\\":\\\"Filter {resourceName}\\\",\\\"noFiltersApplied\\\":\\\"No filters applied\\\",\\\"cancel\\\":\\\"Cancel\\\",\\\"done\\\":\\\"Done\\\",\\\"clearAllFilters\\\":\\\"Clear all filters\\\",\\\"clear\\\":\\\"Clear\\\",\\\"clearLabel\\\":\\\"Clear {filterName}\\\"},\\\"IndexProvider\\\":{\\\"defaultItemSingular\\\":\\\"Item\\\",\\\"defaultItemPlural\\\":\\\"Items\\\",\\\"allItemsSelected\\\":\\\"All {itemsLength}+ {resourceNamePlural} are selected.\\\",\\\"selected\\\":\\\"{selectedItemsCount} selected\\\",\\\"a11yCheckboxDeselectAllSingle\\\":\\\"Deselect {resourceNameSingular}\\\",\\\"a11yCheckboxSelectAllSingle\\\":\\\"Select {resourceNameSingular}\\\",\\\"a11yCheckboxDeselectAllMultiple\\\":\\\"Deselect all {itemsLength} {resourceNamePlural}\\\",\\\"a11yCheckboxSelectAllMultiple\\\":\\\"Select all {itemsLength} {resourceNamePlural}\\\"},\\\"IndexTable\\\":{\\\"emptySearchTitle\\\":\\\"No {resourceNamePlural} found\\\",\\\"emptySearchDescription\\\":\\\"Try changing the filters or search term\\\",\\\"onboardingBadgeText\\\":\\\"New\\\",\\\"resourceLoadingAccessibilityLabel\\\":\\\"Loading {resourceNamePlural}…\\\",\\\"selectAllLabel\\\":\\\"Select all {resourceNamePlural}\\\",\\\"selected\\\":\\\"{selectedItemsCount} selected\\\",\\\"undo\\\":\\\"Undo\\\",\\\"selectAllItems\\\":\\\"Select all {itemsLength}+ {resourceNamePlural}\\\",\\\"selectItem\\\":\\\"Select {resourceName}\\\",\\\"selectButtonText\\\":\\\"Select\\\"},\\\"Loading\\\":{\\\"label\\\":\\\"Page loading bar\\\"},\\\"Modal\\\":{\\\"iFrameTitle\\\":\\\"body markup\\\",\\\"modalWarning\\\":\\\"These required properties are missing from Modal: {missingProps}\\\"},\\\"Pagination\\\":{\\\"previous\\\":\\\"Previous\\\",\\\"next\\\":\\\"Next\\\",\\\"pagination\\\":\\\"Pagination\\\"},\\\"ProgressBar\\\":{\\\"negativeWarningMessage\\\":\\\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\\\",\\\"exceedWarningMessage\\\":\\\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\\\"},\\\"ResourceList\\\":{\\\"sortingLabel\\\":\\\"Sort by\\\",\\\"defaultItemSingular\\\":\\\"item\\\",\\\"defaultItemPlural\\\":\\\"items\\\",\\\"showing\\\":\\\"Showing {itemsCount} {resource}\\\",\\\"showingTotalCount\\\":\\\"Showing {itemsCount} of {totalItemsCount} {resource}\\\",\\\"loading\\\":\\\"Loading {resource}\\\",\\\"selected\\\":\\\"{selectedItemsCount} selected\\\",\\\"allItemsSelected\\\":\\\"All {itemsLength}+ {resourceNamePlural} in your store are selected.\\\",\\\"allFilteredItemsSelected\\\":\\\"All {itemsLength}+ {resourceNamePlural} in this filter are selected.\\\",\\\"selectAllItems\\\":\\\"Select all {itemsLength}+ {resourceNamePlural} in your store\\\",\\\"selectAllFilteredItems\\\":\\\"Select all {itemsLength}+ {resourceNamePlural} in this filter\\\",\\\"emptySearchResultTitle\\\":\\\"No {resourceNamePlural} found\\\",\\\"emptySearchResultDescription\\\":\\\"Try changing the filters or search term\\\",\\\"selectButtonText\\\":\\\"Select\\\",\\\"a11yCheckboxDeselectAllSingle\\\":\\\"Deselect {resourceNameSingular}\\\",\\\"a11yCheckboxSelectAllSingle\\\":\\\"Select {resourceNameSingular}\\\",\\\"a11yCheckboxDeselectAllMultiple\\\":\\\"Deselect all {itemsLength} {resourceNamePlural}\\\",\\\"a11yCheckboxSelectAllMultiple\\\":\\\"Select all {itemsLength} {resourceNamePlural}\\\",\\\"ariaLiveSingular\\\":\\\"{itemsLength} item\\\",\\\"ariaLivePlural\\\":\\\"{itemsLength} items\\\",\\\"Item\\\":{\\\"actionsDropdownLabel\\\":\\\"Actions for {accessibilityLabel}\\\",\\\"actionsDropdown\\\":\\\"Actions dropdown\\\",\\\"viewItem\\\":\\\"View details for {itemName}\\\"},\\\"BulkActions\\\":{\\\"actionsActivatorLabel\\\":\\\"Actions\\\",\\\"moreActionsActivatorLabel\\\":\\\"More actions\\\",\\\"warningMessage\\\":\\\"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions.\\\"},\\\"FilterCreator\\\":{\\\"filterButtonLabel\\\":\\\"Filter\\\",\\\"selectFilterKeyPlaceholder\\\":\\\"Select a filter…\\\",\\\"addFilterButtonLabel\\\":\\\"Add filter\\\",\\\"showAllWhere\\\":\\\"Show all {resourceNamePlural} where:\\\"},\\\"FilterControl\\\":{\\\"textFieldLabel\\\":\\\"Search {resourceNamePlural}\\\"},\\\"FilterValueSelector\\\":{\\\"selectFilterValuePlaceholder\\\":\\\"Select a filter…\\\"},\\\"DateSelector\\\":{\\\"dateFilterLabel\\\":\\\"Select a value\\\",\\\"dateValueLabel\\\":\\\"Date\\\",\\\"dateValueError\\\":\\\"Match YYYY-MM-DD format\\\",\\\"dateValuePlaceholder\\\":\\\"YYYY-MM-DD\\\",\\\"SelectOptions\\\":{\\\"PastWeek\\\":\\\"in the last week\\\",\\\"PastMonth\\\":\\\"in the last month\\\",\\\"PastQuarter\\\":\\\"in the last 3 months\\\",\\\"PastYear\\\":\\\"in the last year\\\",\\\"ComingWeek\\\":\\\"next week\\\",\\\"ComingMonth\\\":\\\"next month\\\",\\\"ComingQuarter\\\":\\\"in the next 3 months\\\",\\\"ComingYear\\\":\\\"in the next year\\\",\\\"OnOrBefore\\\":\\\"on or before\\\",\\\"OnOrAfter\\\":\\\"on or after\\\"},\\\"FilterLabelForValue\\\":{\\\"past_week\\\":\\\"in the last week\\\",\\\"past_month\\\":\\\"in the last month\\\",\\\"past_quarter\\\":\\\"in the last 3 months\\\",\\\"past_year\\\":\\\"in the last year\\\",\\\"coming_week\\\":\\\"next week\\\",\\\"coming_month\\\":\\\"next month\\\",\\\"coming_quarter\\\":\\\"in the next 3 months\\\",\\\"coming_year\\\":\\\"in the next year\\\",\\\"on_or_before\\\":\\\"before {date}\\\",\\\"on_or_after\\\":\\\"after {date}\\\"}}},\\\"SkeletonPage\\\":{\\\"loadingLabel\\\":\\\"Page loading\\\"},\\\"Tabs\\\":{\\\"toggleTabsLabel\\\":\\\"More tabs\\\"},\\\"Tag\\\":{\\\"ariaLabel\\\":\\\"Remove {children}\\\"},\\\"TextField\\\":{\\\"characterCount\\\":\\\"{count} characters\\\",\\\"characterCountWithMaxLength\\\":\\\"{count} of {limit} characters used\\\"},\\\"TooltipOverlay\\\":{\\\"accessibilityLabel\\\":\\\"Tooltip: {label}\\\"},\\\"TopBar\\\":{\\\"toggleMenuLabel\\\":\\\"Toggle menu\\\",\\\"SearchField\\\":{\\\"clearButtonLabel\\\":\\\"Clear\\\",\\\"search\\\":\\\"Search\\\"}},\\\"MediaCard\\\":{\\\"popoverButton\\\":\\\"Actions\\\"},\\\"VideoThumbnail\\\":{\\\"playButtonA11yLabel\\\":{\\\"default\\\":\\\"Play video\\\",\\\"defaultWithDuration\\\":\\\"Play video of length {duration}\\\",\\\"duration\\\":{\\\"hours\\\":{\\\"other\\\":{\\\"only\\\":\\\"{hourCount} hours\\\",\\\"andMinutes\\\":\\\"{hourCount} hours and {minuteCount} minutes\\\",\\\"andMinute\\\":\\\"{hourCount} hours and {minuteCount} minute\\\",\\\"minutesAndSeconds\\\":\\\"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds\\\",\\\"minutesAndSecond\\\":\\\"{hourCount} hours, {minuteCount} minutes, and {secondCount} second\\\",\\\"minuteAndSeconds\\\":\\\"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds\\\",\\\"minuteAndSecond\\\":\\\"{hourCount} hours, {minuteCount} minute, and {secondCount} second\\\",\\\"andSeconds\\\":\\\"{hourCount} hours and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{hourCount} hours and {secondCount} second\\\"},\\\"one\\\":{\\\"only\\\":\\\"{hourCount} hour\\\",\\\"andMinutes\\\":\\\"{hourCount} hour and {minuteCount} minutes\\\",\\\"andMinute\\\":\\\"{hourCount} hour and {minuteCount} minute\\\",\\\"minutesAndSeconds\\\":\\\"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds\\\",\\\"minutesAndSecond\\\":\\\"{hourCount} hour, {minuteCount} minutes, and {secondCount} second\\\",\\\"minuteAndSeconds\\\":\\\"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds\\\",\\\"minuteAndSecond\\\":\\\"{hourCount} hour, {minuteCount} minute, and {secondCount} second\\\",\\\"andSeconds\\\":\\\"{hourCount} hour and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{hourCount} hour and {secondCount} second\\\"}},\\\"minutes\\\":{\\\"other\\\":{\\\"only\\\":\\\"{minuteCount} minutes\\\",\\\"andSeconds\\\":\\\"{minuteCount} minutes and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{minuteCount} minutes and {secondCount} second\\\"},\\\"one\\\":{\\\"only\\\":\\\"{minuteCount} minute\\\",\\\"andSeconds\\\":\\\"{minuteCount} minute and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{minuteCount} minute and {secondCount} second\\\"}},\\\"seconds\\\":{\\\"other\\\":\\\"{secondCount} seconds\\\",\\\"one\\\":\\\"{secondCount} second\\\"}}}}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9wb2xhcmlzL2xvY2FsZXMvZW4uanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@shopify/polaris/locales/en.json\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge-utils */ \"@shopify/app-bridge-utils\");\n/* harmony import */ var _shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris/dist/styles.css */ \"./node_modules/@shopify/polaris/dist/styles.css\");\n/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\");\nvar _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\", 1);\n/* harmony import */ var _components_ClientRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ClientRouter */ \"./components/ClientRouter.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _jsxFileName = \"/Users/Mawhizzle/Documents/Programming/Tracksend/tracksend-shopify/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction userLoggedInFetch(app) {\n  const fetchFunction = Object(_shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_6__[\"authenticatedFetch\"])(app);\n  return async (uri, options) => {\n    const response = await fetchFunction(uri, options);\n\n    if (response.headers.get('X-Shopify-API-Request-Failure-Reauthorize') === '1') {\n      const authUrlHeader = response.headers.get('X-Shopify-API-Request-Failure-Reauthorize-Url');\n      const redirect = Redirect.create(app);\n      redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`);\n      return null;\n    }\n\n    return response;\n  };\n}\n\nclass MyProvider extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const app = this.context;\n    const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_10___default.a({\n      fetch: userLoggedInFetch(app),\n      fetchOptions: {\n        credentials: \"include\"\n      }\n    });\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__[\"ApolloProvider\"], {\n      client: client,\n      children: this.props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }, this);\n  }\n\n}\n\n_defineProperty(MyProvider, \"contextType\", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]);\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {\n  render() {\n    const {\n      Component,\n      pageProps,\n      shopOrigin\n    } = this.props;\n    const config = {\n      apiKey: \"a554cb2fa06d6726a6be0f755d0000cd\",\n      shopOrigin,\n      forceRedirect: true\n    };\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"Sample App\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          charSet: \"utf-8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n        config: config,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ClientRouter__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"AppProvider\"], {\n          i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_8__,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MyProvider, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 9\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\nMyApp.getInitialProps = async ({\n  ctx\n}) => {\n  return {\n    shopOrigin: ctx.query.shop\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsidXNlckxvZ2dlZEluRmV0Y2giLCJhcHAiLCJmZXRjaEZ1bmN0aW9uIiwiYXV0aGVudGljYXRlZEZldGNoIiwidXJpIiwib3B0aW9ucyIsInJlc3BvbnNlIiwiaGVhZGVycyIsImdldCIsImF1dGhVcmxIZWFkZXIiLCJyZWRpcmVjdCIsIlJlZGlyZWN0IiwiY3JlYXRlIiwiZGlzcGF0Y2giLCJBY3Rpb24iLCJBUFAiLCJNeVByb3ZpZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjb250ZXh0IiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiZmV0Y2giLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsInByb3BzIiwiY2hpbGRyZW4iLCJDb250ZXh0IiwiTXlBcHAiLCJBcHAiLCJwYWdlUHJvcHMiLCJzaG9wT3JpZ2luIiwiY29uZmlnIiwiYXBpS2V5IiwiQVBJX0tFWSIsImZvcmNlUmVkaXJlY3QiLCJ0cmFuc2xhdGlvbnMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInNob3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDO0FBQzVCLFFBQU1DLGFBQWEsR0FBR0Msb0ZBQWtCLENBQUNGLEdBQUQsQ0FBeEM7QUFFQSxTQUFPLE9BQU9HLEdBQVAsRUFBWUMsT0FBWixLQUF3QjtBQUM3QixVQUFNQyxRQUFRLEdBQUcsTUFBTUosYUFBYSxDQUFDRSxHQUFELEVBQU1DLE9BQU4sQ0FBcEM7O0FBRUEsUUFBSUMsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxHQUFqQixDQUFxQiwyQ0FBckIsTUFBc0UsR0FBMUUsRUFBK0U7QUFDN0UsWUFBTUMsYUFBYSxHQUFHSCxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCLCtDQUFyQixDQUF0QjtBQUVBLFlBQU1FLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxNQUFULENBQWdCWCxHQUFoQixDQUFqQjtBQUNBUyxjQUFRLENBQUNHLFFBQVQsQ0FBa0JGLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQkMsR0FBbEMsRUFBdUNOLGFBQWEsSUFBSyxPQUF6RDtBQUNBLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU9ILFFBQVA7QUFDRCxHQVpEO0FBYUQ7O0FBRUgsTUFBTVUsVUFBTixTQUF5QkMsNENBQUssQ0FBQ0MsU0FBL0IsQ0FBeUM7QUFHckNDLFFBQU0sR0FBRztBQUNQLFVBQU1sQixHQUFHLEdBQUcsS0FBS21CLE9BQWpCO0FBRUEsVUFBTUMsTUFBTSxHQUFHLElBQUlDLG9EQUFKLENBQWlCO0FBQzlCQyxXQUFLLEVBQUV2QixpQkFBaUIsQ0FBQ0MsR0FBRCxDQURNO0FBRTlCdUIsa0JBQVksRUFBRTtBQUNaQyxtQkFBVyxFQUFFO0FBREQ7QUFGZ0IsS0FBakIsQ0FBZjtBQU9BLHdCQUNJLHFFQUFDLDREQUFEO0FBQWdCLFlBQU0sRUFBRUosTUFBeEI7QUFBQSxnQkFDRCxLQUFLSyxLQUFMLENBQVdDO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBS0Q7O0FBbEJvQzs7Z0JBQW5DWCxVLGlCQUNtQlksaUU7O0FBbUJ6QixNQUFNQyxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBd0I7QUFDdEJYLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUQsZUFBRjtBQUFhYSxlQUFiO0FBQXdCQztBQUF4QixRQUF1QyxLQUFLTixLQUFsRDtBQUNBLFVBQU1PLE1BQU0sR0FBRztBQUFFQyxZQUFNLEVBQUVDLGtDQUFWO0FBQW1CSCxnQkFBbkI7QUFBK0JJLG1CQUFhLEVBQUU7QUFBOUMsS0FBZjtBQUNBLHdCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGlCQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UscUVBQUMsa0VBQUQ7QUFBVSxjQUFNLEVBQUVILE1BQWxCO0FBQUEsZ0NBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVBLHFFQUFDLDREQUFEO0FBQWEsY0FBSSxFQUFFSSw2REFBbkI7QUFBQSxpQ0FDQSxxRUFBQyxVQUFEO0FBQUEsbUNBQ0EscUVBQUMsU0FBRCxvQkFBZU4sU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFnQkQ7O0FBcEJxQjs7QUFzQnhCRixLQUFLLENBQUNTLGVBQU4sR0FBd0IsT0FBTztBQUFFQztBQUFGLENBQVAsS0FBbUI7QUFDdkMsU0FBTztBQUNMUCxjQUFVLEVBQUVPLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQztBQURqQixHQUFQO0FBR0QsQ0FKSDs7QUFNZVosb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBQcm92aWRlciwgQ29udGV4dCB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkRmV0Y2ggfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS11dGlsc1wiO1xuaW1wb3J0ICdAc2hvcGlmeS9wb2xhcmlzL2Rpc3Qvc3R5bGVzLmNzcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMvbG9jYWxlcy9lbi5qc29uJztcbmltcG9ydCBDbGllbnRSb3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRSb3V0ZXInO1xuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tICdhcG9sbG8tYm9vc3QnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5mdW5jdGlvbiB1c2VyTG9nZ2VkSW5GZXRjaChhcHApIHtcbiAgICBjb25zdCBmZXRjaEZ1bmN0aW9uID0gYXV0aGVudGljYXRlZEZldGNoKGFwcCk7XG4gIFxuICAgIHJldHVybiBhc3luYyAodXJpLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoRnVuY3Rpb24odXJpLCBvcHRpb25zKTtcbiAgXG4gICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtU2hvcGlmeS1BUEktUmVxdWVzdC1GYWlsdXJlLVJlYXV0aG9yaXplJykgPT09ICcxJykge1xuICAgICAgICBjb25zdCBhdXRoVXJsSGVhZGVyID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtU2hvcGlmeS1BUEktUmVxdWVzdC1GYWlsdXJlLVJlYXV0aG9yaXplLVVybCcpO1xuICBcbiAgICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcbiAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goUmVkaXJlY3QuQWN0aW9uLkFQUCwgYXV0aFVybEhlYWRlciB8fCBgL2F1dGhgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gIFxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH07XG4gIH1cblxuY2xhc3MgTXlQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQ29udGV4dDtcbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgYXBwID0gdGhpcy5jb250ZXh0O1xuICBcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICBmZXRjaDogdXNlckxvZ2dlZEluRmV0Y2goYXBwKSxcbiAgICAgICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbn1cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHNob3BPcmlnaW4gfSA9IHRoaXMucHJvcHM7ICAgIFxuICAgIGNvbnN0IGNvbmZpZyA9IHsgYXBpS2V5OiBBUElfS0VZLCBzaG9wT3JpZ2luLCBmb3JjZVJlZGlyZWN0OiB0cnVlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlNhbXBsZSBBcHA8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFByb3ZpZGVyIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgICAgICA8Q2xpZW50Um91dGVyIC8+XG4gICAgICAgIDxBcHBQcm92aWRlciBpMThuPXt0cmFuc2xhdGlvbnN9PlxuICAgICAgICA8TXlQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L015UHJvdmlkZXI+XG4gICAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3BPcmlnaW46IGN0eC5xdWVyeS5zaG9wLFxuICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/app-bridge-utils":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-utils" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-utils\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXV0aWxzXCI/M2I1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS11dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-utils\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-boost\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIj8wNTlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1ib29zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-boost\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });