[mxcad_2d API documentation] (../README. md)/tools

# Module: tools

This module contains exports related to the MXCAD helper tool, and all exported content can be imported directly using the MXCAD package

**`Example`**

```js
import { getJsonFromUrl } from "mxcad"
```

## Table of contents

### Classes

- [MxCanvas2Image](../classes/tools.MxCanvas2Image.md)

### Variables

- [MxTools](tools.md#mxtools)

### Functions

- [IsZero](tools.md#iszero)
- [\_ML\_String](tools.md#_ml_string)
- [b64Decode](tools.md#b64decode)
- [b64Encode](tools.md#b64encode)
- [crateHexString](tools.md#cratehexstring)
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
| `getFileFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\> |
| `getJsonFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\> |
| `postEmscriptenIndexedDBFile` | (`filekey`: `string`, `url`: `string`, `retCall`: (`code`: `number`, `message`: `string`) => `void`, `param?`: `any`) => `void` |
| `postMemoryFile` | (`memoryData`: `any`, `url`: `string`, `filename`: `string`, `retCall`: (`code`: `number`, `message`: `string`) => `void`, `param?`: `any`) => `void` |
| `saveAsFileDialog` | (`__namedParameters`: \{ `blob`: [`Blob`]( https://developer.mozilla.org/docs/Web/API/Blob ) ; `filename?`: `string` ; `types?`: `FileTypes`  }) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| ``false`` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle ) & \{ `createWritable`: () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter )\<`any`\>\>  }\> |

## Functions

### IsZero

▸ **IsZero**(`val`): `boolean`

Check if a value is close to zero

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Val | number | numerical value|

#### Returns

`boolean`

Boolean value

___

### \_ML\_String

▸ **_ML_String**(`strId`, `str`): `string`

Receive input prompt string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|StrId | string | The ID of a string starts with a defined ID name|
|Str | string | prompt string|

#### Returns

`string`

___

### b64Decode

▸ **b64Decode**(`str`): `string`

Decoding Base64 encoded strings into raw data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Str | string | Base64 encoding|

#### Returns

`string`

raw data

___

### b64Encode

▸ **b64Encode**(`str`): `string`

Base64 encoding of data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Str | String | Target Data|

#### Returns

`string`

Base64 encoding

___

### crateHexString

▸ **crateHexString**(`str`): `string`

Convert string to hexadecimal format for editing

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

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

Download a file in the browser

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Blob | any | Blob object, which contains the data of the file to be downloaded|
|Filename | string | The file name of the file to be saved|

#### Returns

`void`

___

### downloadFileFromUrl

▸ **downloadFileFromUrl**(`url`, `filename`): `void`

Download files from the specified URL to the user's computer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Url | string | URL address for downloading files|
|Filename | string | The file name of the file to be saved|

#### Returns

`void`

___

### getFileFromUrl

▸ **getFileFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

Retrieve files from the specified URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|URL address of file 'url' | 'string'|

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

Target file

___

### getJsonFromUrl

▸ **getJsonFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

Retrieve the file JSON string from the specified URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|URL address of file 'url' | 'string'|

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

JSON string

___

### postEmscriptenIndexedDBFile

▸ **postEmscriptenIndexedDBFile**(`filekey`, `url`, `retCall`, `param?`): `void`

Retrieve files from IndexedDB (Indexed Database) and upload them to the specified URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Filekey | string | The key of the file obtained from IndexedDB|
|URL address to which the data will be sent, used for uploading files|
|RetCall | (code: number, message: string)=>void | callback function|
| `param?` | ` Any ` | Optional additional parameters that can be used to pass additional data or configuration information to the upload function|

#### Returns

`void`

___

### postMemoryFile

▸ **postMemoryFile**(`memoryData`, `url`, `filename`, `retCall`, `param?`): `void`

Send data from memory to the specified URL for file upload functionality

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|MemoryData | any | Objects or data structures of data in memory|
|URL address to which the data will be sent | string ||
|Filename | string | The file name of the uploaded file|
|RetCall | (code: number, message: string)=>void | callback function|
| `param?` | ` Any ` | Optional additional parameters that can be used to pass additional data or configuration information to the upload function|

#### Returns

`void`

___

### saveAsFileDialog

▸ **saveAsFileDialog**(`«destructured»`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| ``false`` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle ) & \{ `createWritable`: () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter )\<`any`\>\>  }\>

File download and save (save as only compatible with Chrome 86, Edge 86, and Opera 72) compatible with lower versions of browsers such as iE10

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `blob` | [`Blob`]( https://developer.mozilla.org/docs/Web/API/Blob ) |
| › `filename?` | `string` |
| › `types?` | `FileTypes` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| ``false`` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle ) & \{ `createWritable`: () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter )\<`any`\>\>  }\>
