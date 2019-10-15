function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/treetop/treetop.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/treetop/treetop.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedTreetopTreetopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-10\">\n\n        <div class=\"input-group\">\n\n          \n\n        <ul *ngIf=\"list_id\">\n            <li *ngFor=\"let item of list ;let i = index;\">\n                \n                <input type=\"checkbox\" name=\"packersOff\" [(ngModel)]=\"checkboxValue[i]\" (change)=\"changeCheckBox(item._id,checkboxValue[i])\"/>\n\t\t\t\t<label class=\"strikethrough\">{{item.value}}</label>\n\t\t\t\t \n                <div class=\"input-group mb-3\">\n                   \n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items[i]\"  required>\n                    \n                    <span class=\"input-group-btn\">\n                        <button class=\"btn btn-primary \" type=\"button\"(click)=\"addSubItem(item._id,items[i])\" >addSubItem</button>\n                        <button class=\"btn btn-primary \" type=\"button\"(click)=\"DeleteItem(item._id)\" >DeleteItem</button>\n\t\t\t\t\t\t<button class=\"btn btn-primary \" type=\"button\"(click)=\"editItem(item._id,items[i])\" >EditItem</button>\n\t\t\t\t\t</span >\n                    \n                </div>\n                <br>\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"col-sm-1\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-details/user-details.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-details/user-details.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedUserDetailsUserDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div class=\"about\">\n    <div class=\"name\">{{userFirstName}} {{userLastName}}\n     \n    </div>\n    <div class=\"status\">\n      <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/list/list.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/list/list.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodolistListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand active\"(click) ='goToTodo()'>TODOLIST</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/friendlist']\">YourFirends</a></li>\n         <li><a  (click)=\"goToOnlineUser()\"  >OnlineUsers</a></li>\n         \n         \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <button class=\"btn btn-primary \" type=\"button\" (click)=\"UndoAction()\" >Undo</button>\n        <li><a  (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n  \n<div class=\"container\">\n   <div class=\"row\">\n     <div class=\"col-sm-3\"></div>\n     <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"listName\" placeholder=\"Listname\" required>\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-primary \" type=\"button\" (click)=\"createTodoList()\">CreateList</button>\n            </span>\n            </div>\n\t\t\t\n     </div>\n      \n     <div class=\"col-sm-3\"></div>\n   </div>\n   <br>\n   <br>\n   <div class=\"row\">\n     <div class=\"col-sm-10\" *ngFor=\"let data of todolist\">\n        \n       <div *ngIf=\"data!=undefined || data!=null\" >\n          <b>{{data.value}}</b> \n         <app-treetop [list_id]='data._id'  ></app-treetop>\n         <br><br>\n        </div>\n         \n     </div>\n   </div>\n      \n</div>\n\n  \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/friendlist/friendlist.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/friendlist/friendlist.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFriendlistFriendlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\" [routerLink]=\"['/todolist']\">TODOLIST</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a [routerLink]=\"['/friendlist']\">YourFirends</a></li>\n           <li><a [routerLink]=\"['/onlineuser']\">OnlineUsers</a></li>\n        \n           \n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          \n          <li><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n        </ul>\n      </div>\n    </div>\n</nav>\n<div class=\"=row\">\n  <div class=\"col-sm-3\">\n    <div *ngFor=\"let item of friendList\">\n        <button class=\"btn btn-primary \" type=\"button\" (click)=\"userSelected(item.userId)\">{{item.firstName +' ' +item.lastName}}</button>\n      <br>\n    </div>\n  </div>\n  <div class=\"col-sm-9\"*ngFor=\"let data of todolist\">\n      <div *ngIf=\"data!=undefined || data!=null\" >\n          <b>{{data.value}}</b>\n         <app-treetop [list_id]='data._id'  ></app-treetop>\n         <br><br>\n        </div>\n        <div *ngIf=\"data==undefined || data==null || data=='' \">No list to show</div>\n  </div>\n\n</div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-inverse\">\n\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>                       \n    </button>\n    <a class=\"navbar-brand\" href=\"/\">TODOLIST</a>\n  </div>\n  \n     \n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a></li>\n       \n    </ul>\n  </div>\n     \n  \n  </nav>\n  <div class=\"container\">\n  <div class=\"row  \">\n  \n    <div class=\"col-sm-4\"></div>\n  \n    <div class=\"col-sm-4  \">\n  \n      <h2 class=\"form-signin-heading\">Please sign in</h2>\n  \n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n  \n      <br>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n  \n      <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n      <br>\n      <button class=\"btn btn-sm btn-primary btn-block\" type=\"button\" (click)=\"goToRecoverPassword()\">Forget Password</button>\n    </div>\n    \n    <div class=\"col-sm-4\"></div>\n  \n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/notfound/notfound.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/notfound/notfound.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserNotfoundNotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-inverse\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                       \n      </button>\n      <a class=\"navbar-brand\" href=\"/\">TODOLIST</a>\n    </div>\n    \n       \n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a></li>\n        <li><a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a></li>\n      </ul>\n    </div>\n       \n    \n    </nav>\n\n<div class=\"container\">\n    ERROR : 404 :(\n        <br><br>\n    Please provide the correct URL.\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/onlineuser/onlineuser.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/onlineuser/onlineuser.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserOnlineuserOnlineuserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\"[routerLink]=\"['/todolist']\">TODOLIST</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/friendlist']\">YourFirends</a></li>\n        <li class=\"active\"><a (click)='goToOnlineUsers()'>OnlineUsers</a></li>\n        \n\n      </ul>\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li><a  (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n     \n\n       \n       \n       \n<div class=\"container\"> \n     \n    \n  \n      <div class=\"p-3 text-white textCapitalize textCenter\">\n        {{userInfo.firstName}} {{userInfo.lastName}}\n        <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n        <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n        <br>\n        <br>\n         \n      </div>\n\n\n      <ul class=\"list\">\n        <li class=\"p-2 typeOfChats\">\n          Freind Requests:\n        </li>\n        <li\n          *ngFor=\"let user of friendRequest\"  >\n          <div  *ngIf=\"user.userId != userInfo.userId\"  >\n            {{user.name}}\n            <button class=\"btn btn-primary btn-block floatright\" type=\"button\" (click)=\"acceptRequest(user.userId, user.name)\">AcceptFriendRequest</button>\n          </div>\n        </li>\n       \n      </ul>\n<br><br>\n      <ul class=\"list\">\n        <li class=\"p-2 typeOfChats\">\n          Online Users:\n        </li>\n        <li class=\"clearfix cursorPointer\" \n          *ngFor=\"let user of userList\"  >\n          <div  *ngIf=\"user.userId != userInfo.userId\"  >\n            <app-user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\"  ></app-user-details>\n            <button class=\"btn btn-primary btn-block floatright\" type=\"button\" (click)=\"sendRequest(user.userId, user.name)\">sendFriendRequest</button>\n          </div>\n        </li>\n       \n      </ul>\n\n\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/recover-pasword/recover-pasword.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/recover-pasword/recover-pasword.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserRecoverPaswordRecoverPaswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-inverse\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                       \n      </button>\n      <a class=\"navbar-brand\" href=\"/\">TODOLIST</a>\n    </div>\n    \n       \n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a></li>\n        <li><a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a></li>\n      </ul>\n    </div>\n       \n    \n</nav>\n<label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n<input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n<br>\n<button class=\"btn btn-sm btn-primary btn-block\" type=\"button\" (click)=\"goToSendMail()\">Send Mail</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-inverse\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                       \n      </button>\n      <a class=\"navbar-brand\" href=\"/\">TODOLIST</a>\n    </div>\n    \n       \n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"nav-link\" (click)=\"goToSignIn()\"><span class=\"glyphicon glyphicon-log-in\"></span>Login</a></li>\n         \n      </ul>\n    </div>\n       \n    \n    </nav>\n<div class=\"container\">\n<div class=\"row p-0 m-0\">\n\n    <div class=\"col-sm-3\"></div>\n\n    <div class=\"col-sm-6 p-5\">\n\n        <h2 class=\"form-signin-heading\">Sign Up To Start TODOLIST</h2>\n\n        <br>\n\n        <span>FirstName: </span>\n\n        <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n        <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\"\n            required autofocus>\n\n        <br>\n\n        <span>LastName: </span>\n\n        <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n        <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\"\n            required>\n\n        <br>\n\n        <span>Mobile: </span>\n\n        <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n        <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile\" required>\n\n        <br>\n        <span>Country: </span>\n        \n        <label for=\"inputcoutryCode\" class=\"sr-only\"></label>\n        <select class='select-option' required [(ngModel)]='coutryCode'>\n          <option class='option' *ngFor='let option of options  | keyvalue' [value]=\"option.key\">{{option.value}}</option>\n      </select>\n     \n        <br>\n\n        <span>Email: </span>\n\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\"\n            required>\n\n        <br>\n\n        <span>Password: </span>\n\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n            required>\n\n        <br>\n                  \n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n    </div>\n\n    <div class=\"col-sm-3\"></div>\n\n</div>      \n</div>\n ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'todolist-frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./todolist/todolist.module */
    "./src/app/todolist/todolist.module.ts");
    /* harmony import */


    var _user_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user/notfound/notfound.component */
    "./src/app/user/notfound/notfound.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"], _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_11__["TodolistModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([{
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        pathMatch: 'full'
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '*',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: '404',
        component: _user_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"]
      }, {
        path: '**',
        redirectTo: '/404'
      }])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);

    var AppService =
    /*#__PURE__*/
    function () {
      function AppService(http) {
        var _this = this;

        _classCallCheck(this, AppService);

        this.http = http;
        this.url = "http://localhost:3000/api/v1";

        this.getFriendList = function (userId) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', userId);
          return _this.http.post(_this.url + '/users/getUserById', params);
        };

        this.getRequestList = function (userId) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', userId).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'));
          return _this.http.post(_this.url + '/users/friendRequest', params);
        }; //set user info in local storage by setter function


        this.setUserInfoIntoLocalStorage = function (data) {
          localStorage.setItem('userInfo', JSON.stringify(data));
        }; //get user info in local storage by setter function


        this.getUserInfoIntoLocalStorage = function () {
          return JSON.parse(localStorage.getItem('userInfo'));
        };

        this.logout = function () {
          console.log("logout called");
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('receiverId'));
          return _this.http.post(_this.url + '/users/logout', params);
        };
      }

      _createClass(AppService, [{
        key: "signupFunction",
        value: function signupFunction(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('firstName', data.firstName).set('lastName', data.lastName).set('mobileNumber', data.mobileNumber).set('email', data.email).set('password', data.password).set('coutryCode', data.coutryCode);
          return this.http.post(this.url + '/users/signup', params);
        }
      }, {
        key: "signinFunction",
        value: function signinFunction(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', data.email).set('password', data.password);
          return this.http.post(this.url + '/users/login', params);
        }
      }, {
        key: "recoverPasword",
        value: function recoverPasword(email) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
          return this.http.post(this.url + '/users/forgetPassword', params);
        }
      }, {
        key: "showUserTodoList",
        value: function showUserTodoList(userId) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', userId);
          return this.http.post(this.url + '/singleusers/gettodolist', params);
        }
      }, {
        key: "getTodo",
        value: function getTodo(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('parentId', data.parentId);
          return this.http.post(this.url + '/singleusers/getchildNodes', params);
        }
      }, {
        key: "createTodoList",
        value: function createTodoList(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', data.userId).set('listName', data.listName).set('value', data.value);
          return this.http.post(this.url + '/singleusers/createtodolist', params);
        }
      }, {
        key: "addItem",
        value: function addItem(data) {
          console.log('add');
          console.log(data);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', data.userId).set('listName', data.listName).set('value', data.value).set('parentId', data.parentId).set('optional', data.optional);
          return this.http.post(this.url + '/singleusers/addItem', params);
        }
      }, {
        key: "addItemUndo",
        value: function addItemUndo(data) {
          console.log('add');
          console.log(data);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', data.userId).set('listName', data.listName).set('_id', data._id).set('value', data.value).set('parentId', data.parentId).set('optional', data.optional);
          return this.http.post(this.url + '/singleusers/addItemUndo', params);
        }
      }, {
        key: "DeleteItem",
        value: function DeleteItem(_id, userId, optional) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('_id', _id).set('userId', userId).set('optional', optional);
          return this.http.post(this.url + '/singleusers/deleteitem', params);
        }
      }, {
        key: "editItem",
        value: function editItem(_id, value, userId, optional) {
          console.log('editItem');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('_id', _id).set('value', value).set('optional', optional).set('userId', userId);
          return this.http.post(this.url + '/singleusers/edititem', params);
        }
      }, {
        key: "changeCheckBox",
        value: function changeCheckBox(_id, done, userId, optional) {
          console.log('editItem');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('_id', _id).set('done', done).set('optional', optional).set('userId', userId);
          return this.http.post(this.url + '/singleusers/checkBox', params);
        }
      }, {
        key: "undoAction",
        value: function undoAction(userId) {
          console.log('undoAction');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', userId);
          return this.http.post(this.url + '/singleusers/undo', params);
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _treetop_treetop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./treetop/treetop.component */
    "./src/app/shared/treetop/treetop.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/shared/user-details/user-details.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_treetop_treetop_component__WEBPACK_IMPORTED_MODULE_3__["TreetopComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      exports: [_treetop_treetop_component__WEBPACK_IMPORTED_MODULE_3__["TreetopComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/treetop/treetop.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/treetop/treetop.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedTreetopTreetopComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=checkbox]:checked + label.strikethrough{\r\n    text-decoration: line-through;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC90cmVldG9wL3RyZWV0b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtFQUMvQiIsImZpbGUiOiIuLi9zaGFyZWQvdHJlZXRvcC90cmVldG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwuc3RyaWtldGhyb3VnaHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/treetop/treetop.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/treetop/treetop.component.ts ***!
    \*****************************************************/

  /*! exports provided: TreetopComponent */

  /***/
  function srcAppSharedTreetopTreetopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreetopComponent", function () {
      return TreetopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");

    var TreetopComponent =
    /*#__PURE__*/
    function () {
      function TreetopComponent(toastr, appService, socketService) {
        var _this2 = this;

        _classCallCheck(this, TreetopComponent);

        this.toastr = toastr;
        this.appService = appService;
        this.socketService = socketService;
        this.items = [];
        this.checkboxValue = [];

        this.addSubItem = function (id, value) {
          var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (!_this2.items) {
            _this2.toastr.warningToastr("first enter item");
          } else {
            console.log('addItem', _this2.list);
            var item = {
              userId: _this2.list[0].userId,
              listName: value,
              value: value,
              parentId: id,
              optional: optional
            };

            _this2.appService.addItem(item).subscribe(function (apiResponse) {
              if (apiResponse.error) {
                console.log('err');

                _this2.toastr.warningToastr(apiResponse.message);
              } else {
                _this2.toastr.successToastr("List Created");

                console.log('checked', _this2.list_id);

                _this2.getTodo(_this2.list_id);
              }
            }, function (error) {
              _this2.toastr.errorToastr('Response not geting', error);
            });
          }
        };

        this.addItemUndo = function (id, value, _id) {
          var optional = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var item = {
            userId: _this2.list[0].userId,
            _id: _id,
            listName: value,
            value: value,
            parentId: id,
            optional: optional
          };

          _this2.appService.addItemUndo(item).subscribe(function (apiResponse) {
            if (apiResponse.error) {
              console.log('err');

              _this2.toastr.warningToastr(apiResponse.message);
            } else {
              _this2.toastr.successToastr("List undo");

              console.log('checked', _this2.list_id);

              _this2.getTodo(_this2.list_id);
            }
          }, function (error) {
            _this2.toastr.errorToastr('Response not geting', error);
          });
        };

        this.getTodo = function (id) {
          var data = {
            parentId: id
          };

          _this2.appService.getTodo(data).subscribe(function (apiResponse) {
            _this2.list = apiResponse;
            console.log(_this2.list);

            for (var index = 0; index < _this2.list.length; index++) {
              _this2.items[index] = "";
              _this2.checkboxValue[index] = _this2.list[index].done == "1" ? true : false;
            }

            console.log('checkboxValue', _this2.checkboxValue);
          }, function (err) {
            console.log(err);
          });
        };

        this.DeleteItem = function (_id) {
          var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _this2.appService.DeleteItem(_id, _this2.list[0].userId, optional).subscribe(function (apiResponse) {
            if (apiResponse.error) {
              console.log('err');

              _this2.toastr.warningToastr(apiResponse.message);
            } else {
              _this2.toastr.successToastr("List deleted");

              console.log('checked', _this2.list_id);

              _this2.getTodo(_this2.list_id);

              if (_id == _this2.list_id) {
                location.reload();
              }
            }
          }, function (error) {
            _this2.toastr.errorToastr('Response not geting', error);
          });
        };

        this.editItem = function (_id, value) {
          var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          _this2.appService.editItem(_id, value, _this2.list[0].userId, optional).subscribe(function (apiResponse) {
            if (apiResponse.error) {
              console.log('err');

              _this2.toastr.warningToastr(apiResponse.message);
            } else {
              _this2.toastr.successToastr("Item Edited");

              _this2.getTodo(_this2.list_id);

              if (_id == _this2.list_id) {
                location.reload();
              }
            }
          }, function (error) {
            _this2.toastr.errorToastr('Response not geting', error);
          });
        };

        this.changeCheckBox = function (_id, value) {
          var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (value == true) {
            value = '1';
          } else {
            value = '0';
          }

          _this2.appService.changeCheckBox(_id, value, _this2.list[0].userId, optional).subscribe(function (apiResponse) {
            if (apiResponse.error) {
              console.log('err');

              _this2.toastr.warningToastr(apiResponse.message);
            } else {
              _this2.toastr.successToastr("Item Edited");

              _this2.getTodo(_this2.list_id);

              if (_id == _this2.list_id) {
                location.reload();
              }
            }
          }, function (error) {
            _this2.toastr.errorToastr('Response not geting', error);
          });
        };

        this.anyUndo = function (undo) {
          console.log('any undo');

          if (undo === '' || undo === undefined || undo === null) {
            console.log('no item in undo');
          } else {
            var optional = 1;
            console.log('app', undo);

            if (undo.typeOfCrud === "ItemAdded") {
              _this2.DeleteItem(undo.todo[0]._id, optional);
            } else if (undo.typeOfCrud === "Itemdeleted") {
              _this2.addItemUndo(undo.todo[0].parentId, undo.todo[0].value, undo.todo[0]._id, optional);
            } else if (undo.typeOfCrud === "ItemEdited") {
              _this2.editItem(undo.todo[0]._id, undo.todo[0].value, optional);
            }

            location.reload();
          }
        };
      }

      _createClass(TreetopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('ng');
          this.userInfo = this.appService.getUserInfoIntoLocalStorage();
          this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("receiverId");
          console.log(this.list_id);
          this.getTodo(this.list_id);
        }
      }]);

      return TreetopComponent;
    }();

    TreetopComponent.ctorParameters = function () {
      return [{
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('list_id')], TreetopComponent.prototype, "list_id", void 0);
    TreetopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-treetop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./treetop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/treetop/treetop.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./treetop.component.css */
      "./src/app/shared/treetop/treetop.component.css")).default]
    })], TreetopComponent);
    /***/
  },

  /***/
  "./src/app/shared/user-details/user-details.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/shared/user-details/user-details.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedUserDetailsUserDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBOzs7O0lBSUUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6Ii4uL3NoYXJlZC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gIH1cclxuICBcclxuICAub25saW5lLFxyXG4gIC5vZmZsaW5lLFxyXG4gIC5tZSxcclxuICAud2FybmluZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmxpbmUge1xyXG4gICAgY29sb3I6ICM4NkJCNzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZsaW5lIHtcclxuICAgIGNvbG9yOiAjRTM4OTY4O1xyXG4gIH1cclxuICBcclxuICAubWUge1xyXG4gICAgY29sb3I6ICM5NEMyRUQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjMDBjOGU3O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzIHtcclxuICAgIGNvbG9yOiAjOTI5NTlFO1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/user-details/user-details.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/user-details/user-details.component.ts ***!
    \***************************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppSharedUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserDetailsComponent =
    /*#__PURE__*/
    function () {
      function UserDetailsComponent() {
        _classCallCheck(this, UserDetailsComponent);
      }

      _createClass(UserDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserDetailsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userFirstName')], UserDetailsComponent.prototype, "userFirstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userLastName')], UserDetailsComponent.prototype, "userLastName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userStatus')], UserDetailsComponent.prototype, "userStatus", void 0);
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-details/user-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-details.component.css */
      "./src/app/shared/user-details/user-details.component.css")).default]
    })], UserDetailsComponent);
    /***/
  },

  /***/
  "./src/app/socket.service.ts":
  /*!***********************************!*\
    !*** ./src/app/socket.service.ts ***!
    \***********************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SocketService =
    /*#__PURE__*/
    function () {
      function SocketService(http) {
        var _this3 = this;

        _classCallCheck(this, SocketService);

        this.http = http;
        this.url = 'http://localhost:3000/'; //events to be listend

        this.verifUser = function () {
          console.log('ver');
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this3.socket.on('verifyUser', function (data) {
              observer.next(data);
            });
          });
        };

        this.onlineUserList = function () {
          console.log('socket service');
          var observable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this3.socket.on('online-user-list', function (userList) {
              observer.next(userList);
            });
          });
          return observable;
        };

        this.getFriendRequestUserId = function (id) {
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this3.socket.on(id, function (data) {
              observer.next(data);
            });
          });
        };

        this.disconnectedSocket = function () {
          var observable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this3.socket.on('disconnect', function () {
              observer.next();
            });
          });
          return observable;
        }; //events to be emited


        this.setUser = function (authToken) {
          console.log('set');

          _this3.socket.emit('set-user', authToken);
        };

        this.sendFriendRequest = function (requestObj) {
          console.log('friend request socket');

          _this3.socket.emit('friend-request', requestObj);
        };

        this.acceptFriendRequest = function (requestObj) {
          console.log('accept friend request socket');

          _this3.socket.emit('accept-friend-request', requestObj);
        };

        this.exitSocket = function () {
          _this3.socket.disconnect();
        }; //connection being created


        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
      } //error handler


      _createClass(SocketService, [{
        key: "handleError",
        value: function handleError(err) {
          var erroMessage = '';

          if (err.error instanceof Error) {
            erroMessage = 'an error occur: ' + err.error.message;
          } else {
            erroMessage = 'server return code: ' + err.status + ' error message is :' + err.error.message;
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(erroMessage);
        }
      }, {
        key: "getAllUserList",
        value: function getAllUserList(userId) {
          console.log('getALL');
          console.log(userId);
          return this.http.get(this.url + '/api/v1/chat/unseen/user/list?userId=' + userId + '&authToken=' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'));
        }
      }]);

      return SocketService;
    }();

    SocketService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketService);
    /***/
  },

  /***/
  "./src/app/todolist/list/list.component.css":
  /*!**************************************************!*\
    !*** ./src/app/todolist/list/list.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodolistListListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b2RvbGlzdC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/todolist/list/list.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/todolist/list/list.component.ts ***!
    \*************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppTodolistListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var src_app_shared_treetop_treetop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/treetop/treetop.component */
    "./src/app/shared/treetop/treetop.component.ts");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(router, toastr, appService, SocketService) {
        var _this4 = this;

        _classCallCheck(this, ListComponent);

        this.router = router;
        this.toastr = toastr;
        this.appService = appService;
        this.SocketService = SocketService;
        this.todolist = [];
        this.userList = [];

        this.checkStatus = function () {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === null) {
            console.log('auth');

            _this4.router.navigate(['/']);

            return false;
          } else {
            return true;
          }
        }; // end checkStatus


        this.verifyUserConfirmation = function () {
          _this4.SocketService.verifUser().subscribe(function (data) {
            _this4.disconnectedSocket = false;
            console.log('verified');

            _this4.SocketService.setUser(_this4.authToken);
          });
        }; //function to get notification for new friend request


        this.getRequestFromAUser = function () {
          _this4.SocketService.getFriendRequestUserId(_this4.userInfo.userId).subscribe(function (data) {
            _this4.toastr.successToastr("".concat(data, " "));
          }); //end of getRequestFromAUser

        };

        this.showUserTodoList = function () {
          console.log('show');

          _this4.appService.showUserTodoList(_this4.userId).subscribe(function (data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                _this4.todolist.push(item);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            console.log(_this4.todolist);
          }, function (err) {
            _this4.toastr.errorToastr('No list to show create one');
          });
        };

        this.createTodoList = function () {
          if (!_this4.listName) {
            _this4.toastr.warningToastr("enter Listname");
          } else {
            var data = {
              userId: _this4.userId,
              listName: _this4.listName,
              value: _this4.listName
            };

            _this4.appService.createTodoList(data).subscribe(function (apiResponse) {
              if (apiResponse.error) {
                _this4.toastr.warningToastr(apiResponse.message);
              } else {
                _this4.toastr.successToastr("List Created");

                _this4.todolist.push(apiResponse);
              }
            }, function (error) {
              _this4.toastr.errorToastr('Response not geting', error);
            });
          }
        };

        this.logout = function () {
          console.log("logout called");

          _this4.appService.logout().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              console.log("logout called");
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authToken');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverId');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverName');

              _this4.SocketService.exitSocket();

              _this4.router.navigate(['/']);
            } else {
              _this4.toastr.errorToastr(apiResponse.message);
            } // end condition

          }, function (err) {
            _this4.toastr.errorToastr('some error occured');
          });
        };

        this.UndoAction = function () {
          console.log('undoAction');

          _this4.appService.undoAction(_this4.userId).subscribe(function (data) {
            if (data === null || data === undefined || data === "") {
              console.log('no undo action');
            } else if (data.todo[0].top == true) {
              console.log('no item to delete');
            } else {
              _this4.undo = data;
              console.log(_this4.undo);

              _this4.treetop.anyUndo(_this4.undo);
            }
          }, function (error) {
            console.log('error', error);
          });
        };

        console.log('con');
      }

      _createClass(ListComponent, [{
        key: "sendMessageUsingKeypress",
        value: function sendMessageUsingKeypress(event) {
          console.log(event.keyCode);

          if (event.keyCode === 90 && event.ctrlKey) {
            this.UndoAction();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('nginti');
          this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("receiverId");
          this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken');
          this.userInfo = this.appService.getUserInfoIntoLocalStorage();
          this.showUserTodoList();
          this.checkStatus();
          this.verifyUserConfirmation();
          this.getRequestFromAUser();
        }
      }, {
        key: "goToTodo",
        value: function goToTodo() {
          return this.router.navigate(['/todolist']);
        }
      }, {
        key: "goToOnlineUser",
        value: function goToOnlineUser() {
          return this.router.navigate(['/onlineuser']);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])], ListComponent.prototype, "sendMessageUsingKeypress", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_treetop_treetop_component__WEBPACK_IMPORTED_MODULE_7__["TreetopComponent"], {
      static: false
    })], ListComponent.prototype, "treetop", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/todolist/list/list.component.css")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/todolist/todolist.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/todolist/todolist.module.ts ***!
    \*********************************************/

  /*! exports provided: TodolistModule */

  /***/
  function srcAppTodolistTodolistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodolistModule", function () {
      return TodolistModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/todolist/list/list.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var TodolistModule = function TodolistModule() {
      _classCallCheck(this, TodolistModule);
    };

    TodolistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: 'todolist',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })], TodolistModule);
    /***/
  },

  /***/
  "./src/app/user/friendlist/friendlist.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/user/friendlist/friendlist.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFriendlistFriendlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmllbmRsaXN0L2ZyaWVuZGxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/friendlist/friendlist.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/friendlist/friendlist.component.ts ***!
    \*********************************************************/

  /*! exports provided: FriendlistComponent */

  /***/
  function srcAppUserFriendlistFriendlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendlistComponent", function () {
      return FriendlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");

    var FriendlistComponent =
    /*#__PURE__*/
    function () {
      function FriendlistComponent(appService, SocketService, router, toastr) {
        var _this5 = this;

        _classCallCheck(this, FriendlistComponent);

        this.appService = appService;
        this.SocketService = SocketService;
        this.router = router;
        this.toastr = toastr;
        this.friendList = [];
        this.todolist = [];

        this.checkStatus = function () {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === null) {
            console.log('auth');

            _this5.router.navigate(['/']);

            return false;
          } else {
            return true;
          }
        }; // end checkStatus


        this.verifyUserConfirmation = function () {
          _this5.SocketService.verifUser().subscribe(function (data) {
            _this5.disconnectedSocket = false;
            console.log('verified');

            _this5.SocketService.setUser(_this5.authToken);
          });
        }; //function to get notification for new friend request


        this.getRequestFromAUser = function () {
          _this5.SocketService.getFriendRequestUserId(_this5.userInfo.userId).subscribe(function (data) {
            _this5.toastr.successToastr("".concat(data, " "));
          }); //end of getRequestFromAUser

        }; //function to get users friends


        this.getFriendList = function () {
          console.log('getFriendList');
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _this5.userInfo.friends[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var item = _step2.value;

              _this5.appService.getFriendList(item).subscribe(function (response) {
                _this5.friendList.push(response);
              }, function (error) {
                console.log('error while getting freinds');
              });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          console.log(_this5.friendList);
        }; //end of getFriendList
        //function to select user whose todolist to show


        this.userSelected = function (userId) {
          _this5.todolist = [];
          console.log('userselect', userId);

          _this5.appService.showUserTodoList(userId).subscribe(function (data) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var item = _step3.value;

                _this5.todolist.push(item);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }, function (err) {
            _this5.toastr.errorToastr('No list to show ');
          });
        };

        this.logout = function () {
          _this5.appService.logout().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              console.log("logout called");
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('authToken');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('receiverId');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('receiverName');

              _this5.SocketService.exitSocket();

              _this5.router.navigate(['/']);
            } else {
              _this5.toastr.errorToastr(apiResponse.message);
            } // end condition

          }, function (err) {
            _this5.toastr.errorToastr('some error occured');
          });
        };
      }

      _createClass(FriendlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken');
          this.userInfo = this.appService.getUserInfoIntoLocalStorage();
          this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("receiverId");
          this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('receiverName');
          console.log(this.receiverId, this.receiverName);
          this.checkStatus();
          this.verifyUserConfirmation();
          this.getRequestFromAUser();
          this.getFriendList();
        }
      }]);

      return FriendlistComponent;
    }();

    FriendlistComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
      }];
    };

    FriendlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friendlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friendlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/friendlist/friendlist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friendlist.component.css */
      "./src/app/user/friendlist/friendlist.component.css")).default]
    })], FriendlistComponent);
    /***/
  },

  /***/
  "./src/app/user/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/user/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, appService, toastr) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToSignUp",
        value: function goToSignUp() {
          return this.router.navigate(['/signup']);
        }
      }, {
        key: "goToRecoverPassword",
        value: function goToRecoverPassword() {
          return this.router.navigate(['/recoverpassword']);
        }
      }, {
        key: "signinFunction",
        value: function signinFunction() {
          var _this6 = this;

          var data = {
            email: this.email,
            password: this.password
          };
          this.appService.signinFunction(data).subscribe(function (apiResponse) {
            console.log(apiResponse);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authToken', apiResponse.data.authToken);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);

            _this6.appService.setUserInfoIntoLocalStorage(apiResponse.data.userDetails);

            _this6.router.navigate(['../todolist']);
          }, function (error) {
            _this6.toastr.warningToastr("Incorrect email or password");
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/user/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/user/notfound/notfound.component.css":
  /*!******************************************************!*\
    !*** ./src/app/user/notfound/notfound.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserNotfoundNotfoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/notfound/notfound.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/notfound/notfound.component.ts ***!
    \*****************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function srcAppUserNotfoundNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NotfoundComponent =
    /*#__PURE__*/
    function () {
      function NotfoundComponent(router) {
        _classCallCheck(this, NotfoundComponent);

        this.router = router;
      }

      _createClass(NotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToSignUp",
        value: function goToSignUp() {
          return this.router.navigate(['/signup']);
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.router.navigate(['/']);
        }
      }]);

      return NotfoundComponent;
    }();

    NotfoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/notfound/notfound.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notfound.component.css */
      "./src/app/user/notfound/notfound.component.css")).default]
    })], NotfoundComponent);
    /***/
  },

  /***/
  "./src/app/user/onlineuser/onlineuser.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/user/onlineuser/onlineuser.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserOnlineuserOnlineuserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".online{\r\n\r\n  height: 10px;\r\n  width: 10px;\r\n  background-color:green;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.offline{\r\n\r\n  height: 10px;\r\n  width: 10px;\r\n  background-color:red;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.textCenter {\r\n  text-align: center;\r\n}\r\n\r\n.cursorPointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.floatright{\r\n  float: right;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ubGluZXVzZXIvb25saW5ldXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0M7RUFDQyxZQUFZO0NBQ2IiLCJmaWxlIjoib25saW5ldXNlci9vbmxpbmV1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25saW5le1xyXG5cclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ub2ZmbGluZXtcclxuXHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50ZXh0Q2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmN1cnNvclBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gLmZsb2F0cmlnaHR7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/onlineuser/onlineuser.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/onlineuser/onlineuser.component.ts ***!
    \*********************************************************/

  /*! exports provided: OnlineuserComponent */

  /***/
  function srcAppUserOnlineuserOnlineuserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineuserComponent", function () {
      return OnlineuserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);

    var OnlineuserComponent =
    /*#__PURE__*/
    function () {
      function OnlineuserComponent(router, toastr, appService, SocketService) {
        var _this7 = this;

        _classCallCheck(this, OnlineuserComponent);

        this.router = router;
        this.toastr = toastr;
        this.appService = appService;
        this.SocketService = SocketService;
        this.userList = [];
        this.friendRequest = [];

        this.checkStatus = function () {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken') === null) {
            console.log('auth');

            _this7.router.navigate(['/']);

            return false;
          } else {
            console.log('statuscheck');
            return true;
          }
        }; // end checkStatus


        this.verifyUserConfirmation = function () {
          _this7.SocketService.verifUser().subscribe(function (data) {
            _this7.disconnectedSocket = false;
            console.log('verified');

            _this7.SocketService.setUser(_this7.authToken);
          });
        }; //function to get notification for new friend request


        this.getRequestFromAUser = function () {
          _this7.SocketService.getFriendRequestUserId(_this7.userInfo.userId).subscribe(function (data) {
            _this7.toastr.successToastr(data.msg + data.senderName);

            if (data.msg == "New Friend Request from-") {
              var temp = {
                'userId': data.senderId,
                'name': data.senderName
              };

              _this7.friendRequest.push(temp);
            } else if (data.msg == "friend request accepted by-") {
              _this7.userInfo.friends.push(data.senderId);

              _this7.appService.setUserInfoIntoLocalStorage(_this7.userInfo);
            }
          }); //end of getRequestFromAUser

        }; // end get request from a user


        this.getOnlineUserList = function () {
          console.log('onlineList');

          _this7.SocketService.onlineUserList().subscribe(function (userList) {
            _this7.userList = [];

            for (var x in userList) {
              var temp = {
                'userId': x,
                'name': userList[x]
              };

              _this7.userList.push(temp);
            }

            console.log('list', _this7.userList);
          });
        }; //function to get list of users who sent request 


        this.getRequestList = function () {
          _this7.appService.getRequestList(_this7.userInfo.userId).subscribe(function (data) {
            _this7.friendRequest = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var x = _step4.value;
                var temp = {
                  'userId': x.senderId,
                  'name': x.senderName
                };

                _this7.friendRequest.push(temp);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          });
        }; //end of getRequestList


        this.sendRequest = function (id, name) {
          console.log('sending friend request');

          if (_this7.userInfo.friends.includes(id)) {
            _this7.toastr.warningToastr(name + ' is already your friend');

            return;
          }

          if (id in _this7.friendRequest) {
            _this7.toastr.warningToastr('friend request already sent to -' + name);
          }

          var sendFriendRequest = {
            sendOnDate: Date.now(),
            receiverId: id,
            receiverName: name,
            senderId: _this7.userInfo.userId,
            senderName: _this7.userInfo.firstName + ' ' + _this7.userInfo.lastName,
            msg: 'New Friend Request from-'
          };

          _this7.SocketService.sendFriendRequest(sendFriendRequest);
        };

        this.acceptRequest = function (id, name) {
          console.log('accept friend request');
          var acceptFriendRequest = {
            acceptOnDate: Date.now(),
            receiverId: id,
            receiverName: name,
            senderId: _this7.userInfo.userId,
            senderName: _this7.userInfo.firstName + ' ' + _this7.userInfo.lastName,
            msg: 'friend request accepted by-'
          };

          _this7.SocketService.acceptFriendRequest(acceptFriendRequest);

          _this7.userInfo.friends.push(id);

          _this7.appService.setUserInfoIntoLocalStorage(_this7.userInfo);

          var temp = {
            'userId': id,
            'name': name
          };

          _this7.friendRequest.splice(_this7.friendRequest.indexOf(temp), 1);
        };

        this.logout = function () {
          _this7.appService.logout().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              console.log("logout called");
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authToken');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverId');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverName');

              _this7.SocketService.exitSocket();

              _this7.router.navigate(['/']);
            } else {
              _this7.toastr.errorToastr(apiResponse.message);
            } // end condition

          }, function (err) {
            _this7.toastr.errorToastr('some error occured');
          });
        };
      }

      _createClass(OnlineuserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverId");
          this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken');
          this.userInfo = this.appService.getUserInfoIntoLocalStorage();
          console.log(this.userInfo);
          this.checkStatus();
          this.verifyUserConfirmation();
          this.getOnlineUserList();
          this.getRequestFromAUser();
          this.getRequestList();
        }
      }, {
        key: "goToOnlineUsers",
        value: function goToOnlineUsers() {
          return this.router.navigate(['/onlineuser']);
        }
      }]);

      return OnlineuserComponent;
    }();

    OnlineuserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
      }];
    };

    OnlineuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-onlineuser',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./onlineuser.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/onlineuser/onlineuser.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./onlineuser.component.css */
      "./src/app/user/onlineuser/onlineuser.component.css")).default]
    })], OnlineuserComponent);
    /***/
  },

  /***/
  "./src/app/user/recover-pasword/recover-pasword.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/user/recover-pasword/recover-pasword.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserRecoverPaswordRecoverPaswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLXBhc3dvcmQvcmVjb3Zlci1wYXN3b3JkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/recover-pasword/recover-pasword.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/recover-pasword/recover-pasword.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RecoverPaswordComponent */

  /***/
  function srcAppUserRecoverPaswordRecoverPaswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverPaswordComponent", function () {
      return RecoverPaswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");

    var RecoverPaswordComponent =
    /*#__PURE__*/
    function () {
      function RecoverPaswordComponent(router, appService, toastr) {
        _classCallCheck(this, RecoverPaswordComponent);

        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
      }

      _createClass(RecoverPaswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToSignUp",
        value: function goToSignUp() {
          return this.router.navigate(['/signup']);
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          return this.router.navigate(['/']);
        }
      }, {
        key: "goToSendMail",
        value: function goToSendMail() {
          var _this8 = this;

          if (!this.email) {
            this.toastr.warningToastr("enter email");
          } else {
            this.appService.recoverPasword(this.email).subscribe(function (apiResponse) {
              if (apiResponse.error) {
                _this8.toastr.warningToastr(apiResponse.message);
              } else {
                _this8.toastr.successToastr('your pasword details are sent to your mail');
              }
            }, function (error) {
              _this8.toastr.warningToastr("Incorrect email or password");
            });
          }
        }
      }]);

      return RecoverPaswordComponent;
    }();

    RecoverPaswordComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }];
    };

    RecoverPaswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recover-pasword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recover-pasword.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/recover-pasword/recover-pasword.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recover-pasword.component.css */
      "./src/app/user/recover-pasword/recover-pasword.component.css")).default]
    })], RecoverPaswordComponent);
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/user/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(appService, router, toastr, http) {
        _classCallCheck(this, SignupComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.options = [];
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.getJSON().subscribe(function (data) {
            _this9.options = data;
            console.log(_this9.options);
          });
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.router.navigate(['/']);
        }
      }, {
        key: "getJSON",
        value: function getJSON() {
          return this.http.get("assets/names.json");
        }
      }, {
        key: "signupFunction",
        value: function signupFunction() {
          var _this10 = this;

          if (!this.firstName) {
            this.toastr.warningToastr("enter Firstname");
          } else if (!this.lastName) {
            this.toastr.warningToastr("enter Lastname");
          } else if (!this.email) {
            this.toastr.warningToastr("enter email");
          } else if (!this.mobileNumber) {
            this.toastr.warningToastr("enter mobileNumber");
          } else if (!this.password) {
            this.toastr.warningToastr("enter password");
          } else if (!this.coutryCode) {
            this.toastr.warningToastr("enter coutryCode");
          } else {
            var data = {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              mobileNumber: this.mobileNumber,
              password: this.password,
              coutryCode: this.coutryCode
            };
            this.appService.signupFunction(data).subscribe(function (apiResponse) {
              if (apiResponse.error) {
                _this10.toastr.warningToastr(apiResponse.message);
              } else {
                _this10.toastr.successToastr("signUp successful");

                setTimeout(function () {
                  _this10.goToSignIn();
                }, 2000);
              }
            }, function (error) {
              _this10.toastr.errorToastr('Response not geting', error);
            });
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/user/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _onlineuser_onlineuser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./onlineuser/onlineuser.component */
    "./src/app/user/onlineuser/onlineuser.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _friendlist_friendlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./friendlist/friendlist.component */
    "./src/app/user/friendlist/friendlist.component.ts");
    /* harmony import */


    var _recover_pasword_recover_pasword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recover-pasword/recover-pasword.component */
    "./src/app/user/recover-pasword/recover-pasword.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/user/notfound/notfound.component.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _onlineuser_onlineuser_component__WEBPACK_IMPORTED_MODULE_7__["OnlineuserComponent"], _friendlist_friendlist_component__WEBPACK_IMPORTED_MODULE_9__["FriendlistComponent"], _recover_pasword_recover_pasword_component__WEBPACK_IMPORTED_MODULE_10__["RecoverPaswordComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }, {
        path: 'recoverpassword',
        component: _recover_pasword_recover_pasword_component__WEBPACK_IMPORTED_MODULE_10__["RecoverPaswordComponent"]
      }, {
        path: 'onlineuser',
        component: _onlineuser_onlineuser_component__WEBPACK_IMPORTED_MODULE_7__["OnlineuserComponent"]
      }, {
        path: 'friendlist',
        component: _friendlist_friendlist_component__WEBPACK_IMPORTED_MODULE_9__["FriendlistComponent"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\abhishek\Desktop\edwisor\TODOLIST-frontend\todolist-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map