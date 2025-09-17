[mxcad_2d API 文档](../README.md) / tools

# Module: tools

该模块包含用于mxcad帮助工具相关的导出, 所有导出的内容都可以通过mxcad包导入直接使用

**`Example`**

```js
import { getJsonFromUrl } from "mxcad"
```

## Table of contents

### Variables

- [MxTools](tools.md#mxtools)

### Functions

- [IsZero](tools.md#iszero)
- [\_ML\_String](tools.md#_ml_string)
- [b64Decode](tools.md#b64decode)
- [b64Encode](tools.md#b64encode)
- [createCursor](tools.md#createcursor)
- [downloadFile](tools.md#downloadfile)
- [downloadFileFromUrl](tools.md#downloadfilefromurl)
- [getFileFromUrl](tools.md#getfilefromurl)
- [getJsonFromUrl](tools.md#getjsonfromurl)
- [postEmscriptenIndexedDBFile](tools.md#postemscriptenindexeddbfile)
- [postMemoryFile](tools.md#postmemoryfile)
- [saveAsFileDialog](tools.md#saveasfiledialog)

## Variables

### MxTools

• `Const` **MxTools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IsZero` | (`val`: `number`) => `boolean` |
| `_ML_String` | (`strId`: `string`, `str`: `string`) => `string` |
| `b64Decode` | (`str`: `string`) => `string` |
| `b64Encode` | (`str`: `string`) => `string` |
| `createCursor` | (`cursorSize`: `number`, `targetFrameSize`: `number`, `color`: `string`) => `any` |
| `downloadFile` | (`blob`: `any`, `filename`: `string`) => `void` |
| `downloadFileFromUrl` | (`url`: `string`, `filename`: `string`) => `void` |
| `getFileFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`Response`]( https://developer.mozilla.org/en-US/docs/Web/API/Response )\> |
| `getJsonFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\> |
| `postEmscriptenIndexedDBFile` | (`filekey`: `string`, `url`: `string`, `retCall`: (`code`: `number`, `message`: `string`) => `void`, `param?`: `any`) => `void` |
| `postMemoryFile` | (`memoryData`: `any`, `url`: `string`, `filename`: `string`, `retCall`: (`code`: `number`, `message`: `string`) => `void`, `param?`: `any`) => `void` |
| `saveAsFileDialog` | (`__namedParameters`: { `blob`: [`Blob`]( https://developer.mozilla.org/en-US/docs/Web/API/Blob ) ; `filename?`: `string` ; `types?`: `FileTypes`  }) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle ) & { `createWritable`: () => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter )<`any`\>\>  }\> |

## Functions

### IsZero

▸ **IsZero**(`val`): `boolean`

检查一个数值是否接近于零的

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 数值 |

#### Returns

`boolean`

布尔值

___

### \_ML\_String

▸ **_ML_String**(`strId`, `str`): `string`

接收输入的提示字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strId` | `string` | 字符串的ID 起一个符合定义的ID名称 |
| `str` | `string` | 提示字符串 |

#### Returns

`string`

___

### b64Decode

▸ **b64Decode**(`str`): `string`

将 Base64 编码的字符串解码为原始数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | Base64 编码 |

#### Returns

`string`

原始数据

___

### b64Encode

▸ **b64Encode**(`str`): `string`

将数据进行 Base64 编码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 目标数据 |

#### Returns

`string`

Base64 编码

___

### createCursor

▸ **createCursor**(`cursorSize?`, `targetFrameSize?`, `color?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cursorSize` | `number` | `128` |
| `targetFrameSize` | `number` | `10` |
| `color` | `string` | `"#ffffff"` |

#### Returns

`any`

___

### downloadFile

▸ **downloadFile**(`blob`, `filename`): `void`

在浏览器中下载一个文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `any` | Blob 对象，它包含了要下载的文件的数据 |
| `filename` | `string` | 将要保存的文件的文件名 |

#### Returns

`void`

___

### downloadFileFromUrl

▸ **downloadFileFromUrl**(`url`, `filename`): `void`

从指定的 URL 下载文件到用户的计算机中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 下载文件的 URL 地址 |
| `filename` | `string` | 将要保存的文件的文件名 |

#### Returns

`void`

___

### getFileFromUrl

▸ **getFileFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`Response`]( https://developer.mozilla.org/en-US/docs/Web/API/Response )\>

从指定URL中获取文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件的 URL 地址 |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`Response`]( https://developer.mozilla.org/en-US/docs/Web/API/Response )\>

目标文件

___

### getJsonFromUrl

▸ **getJsonFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

从指定URL中获取文件json字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件的 URL 地址 |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

json字符串

___

### postEmscriptenIndexedDBFile

▸ **postEmscriptenIndexedDBFile**(`filekey`, `url`, `retCall`, `param?`): `void`

从 IndexedDB（Indexed Database，索引数据库）中获取文件，并将其上传到指定的 URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filekey` | `string` | 从 IndexedDB 中获取的文件的键（key） |
| `url` | `string` | 数据将要发送到的目标 URL 地址，用于上传文件 |
| `retCall` | (`code`: `number`, `message`: `string`) => `void` | 回调函数 |
| `param?` | `any` | 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数 |

#### Returns

`void`

___

### postMemoryFile

▸ **postMemoryFile**(`memoryData`, `url`, `filename`, `retCall`, `param?`): `void`

将内存中的数据发送到指定的 URL，以实现文件上传功能

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `memoryData` | `any` | 内存中数据的对象或者数据结构 |
| `url` | `string` | 数据将要发送到的目标 URL 地址 |
| `filename` | `string` | 上传的文件的文件名 |
| `retCall` | (`code`: `number`, `message`: `string`) => `void` | 回调函数 |
| `param?` | `any` | 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数 |

#### Returns

`void`

___

### saveAsFileDialog

▸ **saveAsFileDialog**(`«destructured»`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle ) & { `createWritable`: () => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter )<`any`\>\>  }\>

文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `blob` | [`Blob`]( https://developer.mozilla.org/en-US/docs/Web/API/Blob ) |
| › `filename?` | `string` |
| › `types?` | `FileTypes` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle ) & { `createWritable`: () => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter )<`any`\>\>  }\>
