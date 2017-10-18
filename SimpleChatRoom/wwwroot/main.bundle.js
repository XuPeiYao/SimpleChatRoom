webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messageList {\r\n  height: calc( 100% - 30px );\r\n  overflow-y: scroll;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messageViewer\" class=\"messageList\">\n  <app-message-box *ngFor=\"let message of messages\" [isSelf]=\"message.isSelf\" [message]=\"message.message\"></app-message-box>\n</div>\n<app-message-inputer [(text)]=\"inputText\" (onSend)=\"sendMessage($event)\"></app-message-inputer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatroom_socket_service__ = __webpack_require__("../../../../../src/app/chatroom-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.messages = [];
    }
    AppComponent.prototype.sendMessage = function (message) {
        if (message.trim().length === 0) {
            return;
        }
        this.socket.send(message);
        this.messages.push({
            message: message,
            isSelf: true
        });
        this.inputText = '';
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.messageViewer.scrollTop = this.messageViewer.scrollHeight * 2;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.socket = this.socketService.getSocket();
        this.messageViewer = document.getElementById('messageViewer');
        var THIS = this;
        this.socket.addEventListener('message', function (event) {
            THIS.messages.push({
                message: event.data,
                isSelf: false
            });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chatroom_socket_service__["a" /* ChatroomSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chatroom_socket_service__["a" /* ChatroomSocketService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_box_message_box_component__ = __webpack_require__("../../../../../src/app/message-box/message-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chatroom_socket_service__ = __webpack_require__("../../../../../src/app/chatroom-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_inputer_message_inputer_component__ = __webpack_require__("../../../../../src/app/message-inputer/message-inputer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__message_box_message_box_component__["a" /* MessageBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_6__message_inputer_message_inputer_component__["a" /* MessageInputerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__chatroom_socket_service__["a" /* ChatroomSocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chatroom-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatroomSocketService = (function () {
    function ChatroomSocketService() {
    }
    ChatroomSocketService.prototype.getSocket = function () {
        return new WebSocket("ws://localhost:54395/chatroom");
        // return new WebSocket(`ws://${location.host}/chatroom`);
    };
    return ChatroomSocketService;
}());
ChatroomSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChatroomSocketService);

//# sourceMappingURL=chatroom-socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/message-box/message-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * https://www.minwt.com/webdesign-dev/css/8996.html\r\n */\r\n.mwt_border{\r\n  text-align: left !important;\r\n\twidth: calc( 100% - 80px );\r\n\tmin-height:90px;\r\n\ttext-align:center;\r\n\tbackground:#fff;\r\n\tposition:relative;\r\n\tborder: solid 1px #333;\r\n\tmargin:30px;\r\n  padding:5px;\r\n  border-radius: 10px;\r\n}\r\n/*箭頭右*/\r\n.mwt_border .arrow_r_int{\r\n\twidth:0px;\r\n\theight:0px;\r\n\tborder-width:15px;\r\n\tborder-style:solid;\r\n\tborder-color:transparent transparent transparent #333;\r\n\tposition:absolute;\r\n\ttop:15px;\r\n\tright:-30px;\r\n}\r\n/*箭頭右-邊框*/\r\n.mwt_border .arrow_r_out{\r\n\twidth:0px;\r\n\theight:0px;\r\n\tborder-width:15px;\r\n\tborder-style:solid;\r\n\tborder-color:transparent transparent transparent #fff;\r\n\tposition:absolute;\r\n\ttop:15px;\r\n\tright:-29px;\r\n}\r\n\r\n/*箭頭左*/\r\n.mwt_border .arrow_l_int{\r\n\twidth:0px;\r\n\theight:0px;\r\n\tborder-width:15px;\r\n\tborder-style:solid;\r\n\tborder-color:transparent #333 transparent  transparent ;\r\n\tposition:absolute;\r\n\ttop:15px;\r\n  left:-30px;\r\n}\r\n/*箭頭左-邊框*/\r\n.mwt_border .arrow_l_out{\r\n\twidth:0px;\r\n\theight:0px;\r\n\tborder-width:15px;\r\n\tborder-style:solid;\r\n\tborder-color:transparent #fff transparent transparent ;\r\n\tposition:absolute;\r\n\ttop:15px;\r\n  left:-29px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-box/message-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mwt_border\">\n    <span class=\"arrow_l_int arrow_r_int\" [class.arrow_l_int]=\"!isSelf\"></span>\n    <span class=\"arrow_l_out arrow_r_out\" [class.arrow_l_out]=\"!isSelf\"></span>\n    {{message}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message-box/message-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageBoxComponent = (function () {
    function MessageBoxComponent() {
        /**
         * 是否為目前使用者自身送出的訊息，如果是則對話框箭頭在右
         */
        this.isSelf = true;
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
    };
    return MessageBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MessageBoxComponent.prototype, "isSelf", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MessageBoxComponent.prototype, "message", void 0);
MessageBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-message-box',
        template: __webpack_require__("../../../../../src/app/message-box/message-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-box/message-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessageBoxComponent);

//# sourceMappingURL=message-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-inputer/message-inputer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inputer {\r\n  margin: 0;\r\n  height: 30px;\r\n  background-color: gray;\r\n}\r\n\r\n.inputer > input {\r\n  margin-top: 1px;\r\n  height: calc(30px - 3px);\r\n  border: 1px;\r\n  width: calc(100% - 62px);\r\n}\r\n\r\n.inputer > button {\r\n  width: 60px;\r\n  height: 100%;\r\n  border: 1px;\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-inputer/message-inputer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inputer\">\n  <input [(ngModel)]=\"text\"  (keyup.enter)=\"enter()\" />\n  <button (click)=\"enter()\">送出</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message-inputer/message-inputer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageInputerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageInputerComponent = (function () {
    function MessageInputerComponent() {
        this.textChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(MessageInputerComponent.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (str) {
            this._text = str;
            this.textChange.emit(str);
        },
        enumerable: true,
        configurable: true
    });
    MessageInputerComponent.prototype.ngOnInit = function () {
    };
    MessageInputerComponent.prototype.enter = function () {
        this.onSend.emit(this.text);
    };
    return MessageInputerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MessageInputerComponent.prototype, "text", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], MessageInputerComponent.prototype, "textChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], MessageInputerComponent.prototype, "onSend", void 0);
MessageInputerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-message-inputer',
        template: __webpack_require__("../../../../../src/app/message-inputer/message-inputer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-inputer/message-inputer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessageInputerComponent);

var _a;
//# sourceMappingURL=message-inputer.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map