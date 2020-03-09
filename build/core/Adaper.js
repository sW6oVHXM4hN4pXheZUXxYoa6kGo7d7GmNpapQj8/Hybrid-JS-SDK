"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NativeInterface_1 = __importDefault(require("./NativeInterface"));
var util_1 = require("../util");
var Adapter = (function () {
    function Adapter(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    Adapter.prototype.postMessage = function (dispatchMessage) {
        var _a, _b, _c, _d;
        var postMessage = (_c = (_b = (_a = global === null || global === void 0 ? void 0 : global.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.nativeApp) === null || _c === void 0 ? void 0 : _c.postMessage;
        var sendToNative = (_d = global === null || global === void 0 ? void 0 : global.nativeApp) === null || _d === void 0 ? void 0 : _d.sendToNative;
        if (util_1.isFunction(postMessage)) {
            global.webkit.messageHandlers.nativeApp.postMessage(dispatchMessage);
        }
        else if (util_1.isFunction(sendToNative)) {
            global.nativeApp.sendToNative(JSON.stringify(dispatchMessage));
        }
        else {
            throw Error("Adapter postMessage error");
        }
    };
    Adapter.prototype.connect = function () {
        global.webApp = new NativeInterface_1.default(this.eventEmitter);
    };
    Adapter.prototype.disconnect = function () {
    };
    return Adapter;
}());
exports.default = Adapter;
