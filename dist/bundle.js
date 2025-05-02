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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreatenewPostSend: () => (/* binding */ CreatenewPostSend),\n/* harmony export */   loadComments: () => (/* binding */ loadComments),\n/* harmony export */   loadPosts: () => (/* binding */ loadPosts)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\nasync function loadPosts() {\n  try {\n    const response = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL);\n    if (!response.ok) {\n      throw new Error('Failed to load posts!');\n    }\n    return await response.json();\n  } catch (err) {\n    console.error('Error loading posts:', err);\n  }\n}\nasync function CreatenewPostSend(title, body) {\n  const newPost = {\n    title: title,\n    body: body,\n    userId: Math.random()\n  };\n  try {\n    const response = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.URL_GET, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(newPost)\n    });\n    if (!response.ok) {\n      console.error('ERROR!!!! Post is not Defined');\n      return null;\n    }\n    return await response.json();\n  } catch (error) {\n    console.error('Fetch error:', error);\n  }\n}\nasync function loadComments(postId) {\n  const URL_COMMENTS = `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`;\n  try {\n    const response = await fetch(URL_COMMENTS);\n    if (!response.ok) {\n      throw new Error('Comments are not defined');\n    }\n    return await response.json();\n  } catch (err) {\n    console.error('Error loading comments:', err);\n  }\n}\n\n//# sourceURL=webpack://front_end_pro/./src/api.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   URL_GET: () => (/* binding */ URL_GET)\n/* harmony export */ });\nconst API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';\nconst URL_GET = 'https://jsonplaceholder.typicode.com/posts';\n\n//# sourceURL=webpack://front_end_pro/./src/config.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElementComments: () => (/* binding */ createElementComments),\n/* harmony export */   createElementPost: () => (/* binding */ createElementPost)\n/* harmony export */ });\nfunction createElementComments(comment) {\n  const commentsItem = document.createElement('li');\n  commentsItem.innerHTML = `\n        <h3>${comment.name}</h3><br>\n        <a href= ''>${comment.email}</a><br>\n        <p>${comment.body}</p>`;\n  return commentsItem;\n}\nfunction createElementPost(post, loadCommentsCallback) {\n  const li = document.createElement('li');\n  li.className = 'posts_item';\n  li.innerHTML = `<h3>${post.title}</h3><br>\n    <p>${post.body}</p><br> \n    <button class='add_comments'>Завантажити коментарі</button>`;\n  const addCommentsBtn = li.querySelector('.add_comments');\n  addCommentsBtn.addEventListener('click', () => {\n    loadCommentsCallback(post.id, li);\n    addCommentsBtn.classList.toggle('none');\n  });\n  return li;\n}\n\n//# sourceURL=webpack://front_end_pro/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\nconst postTitle = document.querySelector('#post_title');\nconst addPost = document.querySelector('#add_post');\nconst postList = document.querySelector('#posts_list');\nconst postBody = document.querySelector('#post_body');\naddPost.addEventListener('click', async event => {\n  event.preventDefault();\n  const title = postTitle.value.trim();\n  const body = postBody.value.trim();\n  if (title === '' || body === '') {\n    console.log('Fill in the input field');\n    return;\n  }\n  try {\n    const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.CreatenewPostSend)(title, body);\n    if (!data) {\n      return;\n    }\n    const newPostElement = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createElementPost)(data, loadCommentsCallback);\n    postList.prepend(newPostElement);\n  } catch (err) {\n    console.error('Error creating post:', err);\n  }\n  postTitle.value = '';\n  postBody.value = '';\n});\nasync function loadPostsCallback() {\n  const posts = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loadPosts)();\n  posts.forEach(post => {\n    const postElement = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createElementPost)(post, loadCommentsCallback);\n    postList.appendChild(postElement);\n  });\n}\nasync function loadCommentsCallback(postId, postElement) {\n  const existingCommentsList = postElement.querySelector('.comments_list');\n  if (existingCommentsList) {\n    return;\n  }\n  try {\n    const comments = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loadComments)(postId);\n    const commentsList = document.createElement('ul');\n    commentsList.className = 'comments_list';\n    comments.forEach(comment => {\n      const commentElement = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createElementComments)(comment);\n      commentsList.appendChild(commentElement);\n    });\n    postElement.appendChild(commentsList);\n  } catch (error) {\n    console.error('Error loading comments:', error);\n  }\n}\nloadPostsCallback();\n\n//# sourceURL=webpack://front_end_pro/./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://front_end_pro/./src/scss/style.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;