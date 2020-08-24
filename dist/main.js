/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById('audioElement');
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);
  var frequencyData = new Uint8Array(200);
  var svgHeight = '300';
  var svgWidth = '1200';
  var barPadding = '1';
  document.querySelector('button').addEventListener('click', function () {
    audioCtx.resume().then(function () {
      console.log('Playback resumed successfully');
    });
  });

  function createSvg(parent, height, width) {
    return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  }

  var svg = createSvg('body', svgHeight, svgWidth);
  svg.selectAll('rect').data(frequencyData).enter().append('rect').attr('x', function (i) {
    return i * (svgWidth / frequencyData.length);
  }).attr('width', svgWidth / frequencyData.length - barPadding);

  function renderChart() {
    requestAnimationFrame(renderChart);
    analyser.getByteFrequencyData(frequencyData);
    svg.selectAll('rect').data(frequencyData).attr('y', function (d) {
      return svgHeight - d;
    }).attr('height', function (d) {
      return d;
    }).attr('fill', function (d) {
      return 'rgb(0, 0, ' + d + ')';
    });
  }

  renderChart();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYXVkaW9DdHgiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhdWRpb0VsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF1ZGlvU3JjIiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZyZXF1ZW5jeURhdGEiLCJVaW50OEFycmF5Iiwic3ZnSGVpZ2h0Iiwic3ZnV2lkdGgiLCJiYXJQYWRkaW5nIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bWUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVN2ZyIsInBhcmVudCIsImhlaWdodCIsIndpZHRoIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic3ZnIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiaSIsImxlbmd0aCIsInJlbmRlckNoYXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUUxQixNQUFJQyxRQUFRLEdBQUcsS0FBS0MsTUFBTSxDQUFDQyxZQUFQLElBQXVCRCxNQUFNLENBQUNFLGtCQUFuQyxHQUFmO0FBQ0EsTUFBSUMsWUFBWSxHQUFHTixRQUFRLENBQUNPLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7QUFDQSxNQUFJQyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ08sd0JBQVQsQ0FBa0NILFlBQWxDLENBQWY7QUFDQSxNQUFJSSxRQUFRLEdBQUdSLFFBQVEsQ0FBQ1MsY0FBVCxFQUFmO0FBRUFILFVBQVEsQ0FBQ0ksT0FBVCxDQUFpQkYsUUFBakI7QUFDQUYsVUFBUSxDQUFDSSxPQUFULENBQWlCVixRQUFRLENBQUNXLFdBQTFCO0FBRUEsTUFBSUMsYUFBYSxHQUFHLElBQUlDLFVBQUosQ0FBZSxHQUFmLENBQXBCO0FBRUEsTUFBSUMsU0FBUyxHQUFHLEtBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLE1BQWY7QUFDQSxNQUFJQyxVQUFVLEdBQUcsR0FBakI7QUFFQWxCLFVBQVEsQ0FBQ21CLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNDLGdCQUFqQyxDQUFrRCxPQUFsRCxFQUEyRCxZQUFXO0FBQ25FbEIsWUFBUSxDQUFDbUIsTUFBVCxHQUFrQkMsSUFBbEIsQ0FBdUIsWUFBTTtBQUMzQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7QUFDRCxLQUZEO0FBR0YsR0FKRDs7QUFNQSxXQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLEtBQW5DLEVBQTBDO0FBQ3ZDLFdBQU9DLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVSixNQUFWLEVBQWtCSyxNQUFsQixDQUF5QixLQUF6QixFQUFnQ0MsSUFBaEMsQ0FBcUMsUUFBckMsRUFBK0NMLE1BQS9DLEVBQXVESyxJQUF2RCxDQUE0RCxPQUE1RCxFQUFxRUosS0FBckUsQ0FBUDtBQUNGOztBQUVELE1BQUlLLEdBQUcsR0FBR1IsU0FBUyxDQUFDLE1BQUQsRUFBU1QsU0FBVCxFQUFvQkMsUUFBcEIsQ0FBbkI7QUFFQWdCLEtBQUcsQ0FBQ0MsU0FBSixDQUFjLE1BQWQsRUFDSUMsSUFESixDQUNTckIsYUFEVCxFQUVJc0IsS0FGSixHQUdJTCxNQUhKLENBR1csTUFIWCxFQUlJQyxJQUpKLENBSVMsR0FKVCxFQUljLFVBQVVLLENBQVYsRUFBYTtBQUNyQixXQUFPQSxDQUFDLElBQUlwQixRQUFRLEdBQUdILGFBQWEsQ0FBQ3dCLE1BQTdCLENBQVI7QUFDRixHQU5KLEVBT0lOLElBUEosQ0FPUyxPQVBULEVBT2tCZixRQUFRLEdBQUdILGFBQWEsQ0FBQ3dCLE1BQXpCLEdBQWtDcEIsVUFQcEQ7O0FBU0EsV0FBU3FCLFdBQVQsR0FBdUI7QUFDcEJDLHlCQUFxQixDQUFDRCxXQUFELENBQXJCO0FBRUE3QixZQUFRLENBQUMrQixvQkFBVCxDQUE4QjNCLGFBQTlCO0FBRUFtQixPQUFHLENBQUNDLFNBQUosQ0FBYyxNQUFkLEVBQ0lDLElBREosQ0FDU3JCLGFBRFQsRUFFSWtCLElBRkosQ0FFUyxHQUZULEVBRWMsVUFBU1UsQ0FBVCxFQUFZO0FBQ3BCLGFBQU8xQixTQUFTLEdBQUcwQixDQUFuQjtBQUNGLEtBSkosRUFLSVYsSUFMSixDQUtTLFFBTFQsRUFLbUIsVUFBU1UsQ0FBVCxFQUFZO0FBQ3pCLGFBQU9BLENBQVA7QUFDRixLQVBKLEVBUUlWLElBUkosQ0FRUyxNQVJULEVBUWlCLFVBQVNVLENBQVQsRUFBWTtBQUN2QixhQUFPLGVBQWVBLENBQWYsR0FBbUIsR0FBMUI7QUFDRixLQVZKO0FBV0Y7O0FBRURILGFBQVc7QUFFYixDQXpERixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICAgIHZhciBhdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW9FbGVtZW50Jyk7XG4gICAgdmFyIGF1ZGlvU3JjID0gYXVkaW9DdHguY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvRWxlbWVudCk7XG4gICAgdmFyIGFuYWx5c2VyID0gYXVkaW9DdHguY3JlYXRlQW5hbHlzZXIoKTtcbiBcbiAgICBhdWRpb1NyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhdWRpb1NyYy5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbiBcbiAgICB2YXIgZnJlcXVlbmN5RGF0YSA9IG5ldyBVaW50OEFycmF5KDIwMCk7XG4gXG4gICAgdmFyIHN2Z0hlaWdodCA9ICczMDAnO1xuICAgIHZhciBzdmdXaWR0aCA9ICcxMjAwJztcbiAgICB2YXIgYmFyUGFkZGluZyA9ICcxJztcbiBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgIGF1ZGlvQ3R4LnJlc3VtZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2coJ1BsYXliYWNrIHJlc3VtZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgfSk7XG4gICAgfSk7XG4gXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ZnKHBhcmVudCwgaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgIHJldHVybiBkMy5zZWxlY3QocGFyZW50KS5hcHBlbmQoJ3N2ZycpLmF0dHIoJ2hlaWdodCcsIGhlaWdodCkuYXR0cignd2lkdGgnLCB3aWR0aCk7XG4gICAgfVxuIFxuICAgIHZhciBzdmcgPSBjcmVhdGVTdmcoJ2JvZHknLCBzdmdIZWlnaHQsIHN2Z1dpZHRoKTtcbiBcbiAgICBzdmcuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAuZGF0YShmcmVxdWVuY3lEYXRhKVxuICAgICAgIC5lbnRlcigpXG4gICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBpICogKHN2Z1dpZHRoIC8gZnJlcXVlbmN5RGF0YS5sZW5ndGgpO1xuICAgICAgIH0pXG4gICAgICAgLmF0dHIoJ3dpZHRoJywgc3ZnV2lkdGggLyBmcmVxdWVuY3lEYXRhLmxlbmd0aCAtIGJhclBhZGRpbmcpO1xuIFxuICAgIGZ1bmN0aW9uIHJlbmRlckNoYXJ0KCkge1xuICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJDaGFydCk7XG4gXG4gICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcXVlbmN5RGF0YSk7XG4gXG4gICAgICAgc3ZnLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgICAgLmRhdGEoZnJlcXVlbmN5RGF0YSlcbiAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICByZXR1cm4gc3ZnSGVpZ2h0IC0gZDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICByZXR1cm4gJ3JnYigwLCAwLCAnICsgZCArICcpJztcbiAgICAgICAgICB9KTtcbiAgICB9XG4gXG4gICAgcmVuZGVyQ2hhcnQoKTtcbiAgIFxuIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=