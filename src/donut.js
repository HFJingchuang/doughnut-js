var _getCallbackId = function () {
    var ramdom = parseInt(Math.random() * 100000);
    return 'iCallback_' + new Date().getTime() + ramdom;
}


var _sendTpRequest = function (methodName, params, callback) {
    // if Android
    if (window.JsNativeBridge) {
        window.JsNativeBridge.callMessage(methodName, params, callback);
    }

    // if iOS
    if (window.webkit) {
        window.webkit.messageHandlers[methodName].postMessage({
            body: {
                'params': params,
                'callback': callback
            }
        });
    }
}

var donut = {
    isConnected: function () {
        return !!(window.JsNativeBridge || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.getDeviceId));
    },
    getAppInfo: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getAppInfo', '', callbackId);

        });
    },
    getDeviceId: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    if (res.device_id) {
                        res.data = res.device_id;
                    }
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getDeviceId', '', callbackId);

        });

    },
    getWallets: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);

                    if (res.data && res.data.length) {
                        for (var i = 0; i < res.data.length; i++) {
                            res.data[i].blockchain = BLOCKCHAIN_ID_MAP[res.data[i].blockchain_id + ''] || res.data[i].blockchain_id;
                        }
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getWallets', '', callbackId);

        });
    },
    getCurrentWallet: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    if (res.rawTransaction) {
                        res.data = res.rawTransaction;
                    }

                    if (res.data && res.data.blockchain_id) {
                        res.data.blockchain = BLOCKCHAIN_ID_MAP[res.data.blockchain_id + ''] || res.data.blockchain_id;
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getCurrentWallet', '', callbackId);
        });
    },
    sign: function (params) {

        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('sign', JSON.stringify(params), callbackId);
        });
    },
    invokeQRScanner: function () {
        return new Promise(function (resolve, reject) {
            var callbackId = _getCallbackId();

            window[callbackId] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    var data = res.qrResult || '';
                    resolve(data);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('invokeQRScanner', '', callbackId);

        });
    },
    back: function () {
        _sendTpRequest('back', '', '');
    },
    fullScreen: function (params) {
        _sendTpRequest('fullScreen', JSON.stringify(params), '');
    },
    close: function () {
        _sendTpRequest('close', '', '');
    }
};


module.exports = donut;