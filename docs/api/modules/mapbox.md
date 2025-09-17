[mxcad_2d API 文档](../README.md) / mapbox

# Module: mapbox

该模块包含用于GIS与CAD结合相关的导出, 所有导出的内容都可以通过mxcad包导入直接使用

**`Example`**

```js
import { MxMapAddRasterTileLayer } from "mxcad"
```

## Table of contents

### Classes

- [MxMap](../classes/mapbox.MxMap.md)

### Functions

- [MxMapAddGoogleCnLayer](mapbox.md#mxmapaddgooglecnlayer)
- [MxMapAddRasterTileLayer](mapbox.md#mxmapaddrastertilelayer)
- [mx\_gcj02\_To\_gps84](mapbox.md#mx_gcj02_to_gps84)
- [mx\_gps84\_To\_gcj02](mapbox.md#mx_gps84_to_gcj02)

## Functions

### MxMapAddGoogleCnLayer

▸ **MxMapAddGoogleCnLayer**(`map`, `types`, `urls?`): `void`

加载GoogleCnLayer地图图层,火星坐标系

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `any` | map对象 |
| `types` | `string`[] | 谷歌地图图层的类型 |
| `urls?` | `string`[] | 谷歌地图图层的URL |

#### Returns

`void`

___

### MxMapAddRasterTileLayer

▸ **MxMapAddRasterTileLayer**(`map`, `layerList`, `key?`, `providers?`): `void`

加载地图图层

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `any` | map对象 |
| `layerList` | `any`[] | 图层列表 |
| `key?` | `string` | 访问瓦片图层的 API 密钥或者令牌 |
| `providers?` | `any` | 指定瓦片图层的提供者信息 |

#### Returns

`void`

___

### mx\_gcj02\_To\_gps84

▸ **mx_gcj02_To_gps84**(`lng`, `lat`): `Object`

国测局坐标（GCJ-02 坐标系）转换为GPS 坐标（WGS 84 坐标系）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lng` | `any` | 经度 |
| `lat` | `any` | 纬度 |

#### Returns

`Object`

转换后的经纬度

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

___

### mx\_gps84\_To\_gcj02

▸ **mx_gps84_To_gcj02**(`lng`, `lat`): `Object`

GPS 坐标（WGS 84 坐标系）转换为国测局坐标（GCJ-02 坐标系）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lng` | `any` | 经度 |
| `lat` | `any` | 纬度 |

#### Returns

`Object`

转换后的经纬度

| Name | Type |
| :------ | :------ |
| `lat` | `any` |
| `lng` | `any` |
