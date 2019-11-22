# doughnut-js
Doughnut API for DAPP.

## Javascript SDK for Doughnut Dapp.

## <a name='Installation'></a>Installation

```bash
npm install doughnut-js
```

## <a name='Usage'></a>Usage

Npm
```javascript
var donut = require('doughnut-js')
console.log(donut.isConnected());
```

Browser
```html
<script src="./dist/donut.min.js"></script>
<script>
    console.log(donut.isConnected());
</script>
```


## <a name='Contents'></a>Contents

<!-- vscode-markdown-toc -->
* [1. API](#API)
    * [1.1 donut.isConnected](#donut.isConnected)
    * [1.2 donut.getAppInfo](#donut.getAppInfo)
    * [1.3 donut.getDeviceId](#donut.getDeviceId)
    * [1.4 donut.getCurrentWallet](#donut.getCurrentWallet)
    * [1.5 donut.getWallets](#donut.getWallets)
    * [1.6 donut.sign](#donut.sign)
    * [1.7 donut.transfer](#donut.transfer)
    * [1.8 donut.invokeQRScanner](#donut.invokeQRScanner)
    * [1.9 donut.back](#donut.back)
    * [1.10 donut.close](#donut.close)
    * [1.11 donut.fullScreen](#donut.fullScreen)
    * [1.12 donut.shareToSNS](#donut.shareToSNS)
    
<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

### <a name='API'></a>1. API

#### <a name='donut.isConnected'></a>1.1 donut.isConnected


```javascript
donut.isConnected()
```

#### <a name='donut.getAppInfo'></a>1.2 donut.getAppInfo


```javascript
donut.getAppInfo()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `system`: `String`
    - `version`: `String`
    - `sys_version`: `String`
- `msg`: `String`

##### Example

```javascript
donut.getAppInfo().then(console.log)

> {
    result: true,
    data: {
        name: 'Doughnut',
        system: 'android',
        version: '1.1.0',
        sys_version: '24'
    },
    msg: 'success'
}
```

#### <a name='donut.getDeviceId'></a>1.3 donut.getDeviceId

```javascript
donut.getDeviceId()
```

##### Returns

`String`

##### Example

```javascript
donut.getDeviceId().then(console.log)

> "76a4651d-41a2-4580-859a-5ede75d8c75c"
```

#### <a name='donut.getCurrentWallet'></a>1.4 donut.getCurrentWallet

获取用户当前钱包信息

```javascript
donut.getCurrentWallet()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `address`: `String`
- `msg`: `String`

##### Example

```javascript
donut.getCurrentWallet().then(console.log)

> {
    result: true,
    data: {
        name: 'test',
        address: 'jBvrdYc6G437hipoCiEpTwrWSRBS2ahXN6',
    },
    msg: 'success'
}
```

#### <a name='donut.getWallets'></a>1.5 donut.getWallets

获取用户钱包列表

```javascript
donut.getWallets()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Array`
    - `address`: `String`
    - `name`: `String`
- `msg`: `String`

##### Example

```javascript
donut.getWallets().then(console.log)

> {
    result: true,
    data: [
        {
            name: 'test',
            address: 'jBvrdYc6G437hipoCiEpTwrWSRBS2ahXN6',
        },
        {
            name: 'ceshi',
            address: 'jGqcZ3Zgy9EPaFs89zSv44K8hh7qLsNtBw',
        }
    ],
    msg: 'success'
}
```

#### <a name='donut.sign'></a>1.6 donut.sign

```javascript
donut.sign(params)
```

##### Parameters

`params`- `Object`: tx object
- `to`: `String`
- `currency`: `Float` 
- `issuer`: `String|Object`
- `value`: `String|Object`
- `gas`: `String`
- `memo`: `Number`

##### Returns

`Object`:
- `result`: `Boolean`
- `signedTx`: `Stirng`
- `msg`: `String`

##### Example

```javascript
var tx = {
        "to": "jKBCwv4EcyvYtD4PafP17PLpnnZ16szQsC",
        "currency": "swt",
        "issuer": "",
        "value": "0.001",
        "memo": "test for sign",
        "gas": "0.0001"
      }
donut.sign(tx).then(console.log)

> {
    result: true,
    signedTx: "12000022800000002...E68EA5E58FA3E1F1",
    msg: 'success'
}
```

#### <a name='donut.transfer'></a>1.7 donut.transfer

```javascript
donut.transfer(params)
```

##### Parameters

`params`- `Object`: tx object
- `to`: `String`
- `currency`: `Float` 
- `issuer`: `String|Object`
- `value`: `String|Object`
- `gas`: `String`
- `memo`: `Number`

##### Returns

`Object`:
- `result`: `Boolean`
- `txHash`: `Stirng`
- `msg`: `String`

##### Example

```javascript
var tx = {
        "to": "jKBCwv4EcyvYtD4PafP17PLpnnZ16szQsC",
        "currency": "swt",
        "issuer": "",
        "value": "0.001",
        "memo": "test for transfer",
        "gas": "0.0001"
      }
donut.transfer(tx).then(console.log)

> {
    result: true,
    txHash: "092DD86EF938CFBE344BC26AAA0F36DAE3632535B5439B9CB5BDBD5693691B69",
    msg: 'success'
}
```

#### <a name='donut.invokeQRScanner'></a>1.8 donut.invokeQRScanner

扫码

```javascript
donut.invokeQRScanner()
```

##### Returns

`String`

##### Example

```javascript
donut.invokeQRScanner().then(console.log)

> "jKBCwv4EcyvYtD4PafP17PLpnnZ16szQsC"
```

#### <a name='donut.back'></a>1.9 donut.back

```javascript
donut.back()
```

##### Example

```javascript
donut.back()

```

#### <a name='donut.close'></a>1.10 donut.close

```javascript
donut.close()
```

##### Example

```javascript
donut.close()

```


#### <a name='donut.fullScreen'></a>1.11 donut.fullScreen

```javascript
donut.fullScreen(params)
```

##### Parameters

`params`:
`String` 1 - fullScreen,  0 - cancel


##### Example

```javascript
donut.fullScreen(1)
```


#### <a name='donut.shareToSNS'></a>1.12 donut.shareToSNS

```javascript
donut.shareToSNS(params)
```

##### Parameters

`params`- `Object`: object
- `title`: `String`
- `url`: `Float` 
- `text`: `String|Object`
- `imgUrl`: `String|Object`

##### Example

```javascript
var params = {
	"title": "js分享",
	"url": "https://github.com/HFJingchuang/doughnut-js",
	"text": "js分享测试",
	"imgUrl": "http://www.someserver.com/测试图片网络地址.jpg"
}
donut.shareToSNS(params)
```
