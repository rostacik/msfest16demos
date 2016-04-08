"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var demoModule;
(function (demoModule) {
    "use strict";
    /**
     * async version of confirm dialog in the browser
     */

    function getConfirmAsync(message) {
        var promise = new Promise(function (resolve, reject) {
            var res = confirm(message);
            resolve(res);
        });
        return promise;
    }
    demoModule.getConfirmAsync = getConfirmAsync;
    /**
     * consume getConfirmAsync
     */
    function consumeGetConfirmAsync() {
        return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return getConfirmAsync("please pick yes/no");

                        case 2:
                            res = _context.sent;

                            console.log(res);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    }
    demoModule.consumeGetConfirmAsync = consumeGetConfirmAsync;
})(demoModule || (demoModule = {}));
//# sourceMappingURL=demoModule.js.map
