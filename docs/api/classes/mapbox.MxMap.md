[mxcad_2d API 文档](../README.md) / [mapbox](../modules/mapbox.md) / MxMap

# Class: MxMap

[mapbox](../modules/mapbox.md).MxMap

cad地图对象

**`Example`**

```ts
import { MxMap } from 'mxcad';
let mx_map = new MxMap;
```

## Table of contents

### Constructors

- [constructor](mapbox.MxMap.md#constructor)

### Properties

- [mxcad](mapbox.MxMap.md#mxcad)

### Methods

- [cadLongToMercatorCoord](mapbox.MxMap.md#cadlongtomercatorcoord)
- [cadToMercatorCoord](mapbox.MxMap.md#cadtomercatorcoord)
- [cadTolnglat](mapbox.MxMap.md#cadtolnglat)
- [create](mapbox.MxMap.md#create)
- [getMapbox](mapbox.MxMap.md#getmapbox)
- [getMxDrawObject](mapbox.MxMap.md#getmxdrawobject)
- [initMapbox](mapbox.MxMap.md#initmapbox)
- [lnglatToCAD](mapbox.MxMap.md#lnglattocad)
- [lnglat\_to\_mercator](mapbox.MxMap.md#lnglat_to_mercator)
- [map\_lnglat\_to\_meters](mapbox.MxMap.md#map_lnglat_to_meters)
- [map\_meters\_to\_lnglat](mapbox.MxMap.md#map_meters_to_lnglat)
- [mercatorCoord2CAD](mapbox.MxMap.md#mercatorcoord2cad)
- [mercatorCoordToCAD](mapbox.MxMap.md#mercatorcoordtocad)
- [mercator\_to\_lnglat](mapbox.MxMap.md#mercator_to_lnglat)
- [outOfChina](mapbox.MxMap.md#outofchina)
- [setCoordinatePointAlignment](mapbox.MxMap.md#setcoordinatepointalignment)
- [setLoadOldEditionMethod](mapbox.MxMap.md#setloadoldeditionmethod)

## Constructors

### constructor

• **new MxMap**()

## Properties

### mxcad

• **mxcad**: [`McObject`](2d.McObject.md)

mxcad对象

## Methods

### cadLongToMercatorCoord

▸ **cadLongToMercatorCoord**(`len`): `number`

将经度坐标转换为墨卡托投影下的坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | 经度 |

#### Returns

`number`

墨卡托投影下的坐标

___

### cadToMercatorCoord

▸ **cadToMercatorCoord**(`pt`): `Vector3`

cad到mapbox的墨卡托坐标系

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | `Vector3` | 三维点对象 |

#### Returns

`Vector3`

三维点对象

___

### cadTolnglat

▸ **cadTolnglat**(`pt`): `number`[]

cad坐标转换为经度和纬度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | `Vector3` | 三维点对象 |

#### Returns

`number`[]

经纬度

___

### create

▸ **create**(`map`, `config`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

创建地图

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `any` | map对象 |
| `config` | `any` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### getMapbox

▸ **getMapbox**(): `any`

获取mapbox的map对象

#### Returns

`any`

map对象

___

### getMxDrawObject

▸ **getMxDrawObject**(): `MxDrawObject`

获取当前mxdraw对象

#### Returns

`MxDrawObject`

mxdraw对象

___

### initMapbox

▸ **initMapbox**(`map`): `void`

初始化mapbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `any` | map对象 |

#### Returns

`void`

___

### lnglatToCAD

▸ **lnglatToCAD**(`lng`, `lat`): `Vector3`

经纬度到cad坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lng` | `number` | 经度 |
| `lat` | `number` | 纬度 |

#### Returns

`Vector3`

三维点对象

___

### lnglat\_to\_mercator

▸ **lnglat_to_mercator**(`lng`, `lat`): `Vector3`

经纬度到mapbox的墨卡托坐标系坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lng` | `number` | 经度 |
| `lat` | `number` | 维度 |

#### Returns

`Vector3`

三维点对象

___

### map\_lnglat\_to\_meters

▸ **map_lnglat_to_meters**(`lng`, `lat`): `number`[]

将地理坐标系下的坐标（经度和纬度）转换为平面坐标系下的坐标（米）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lng` | `number` | 经度 |
| `lat` | `number` | 维度 |

#### Returns

`number`[]

平面坐标

___

### map\_meters\_to\_lnglat

▸ **map_meters_to_lnglat**(`x`, `y`): `number`[]

地图墨卡托坐标系到经纬度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X轴坐标 |
| `y` | `number` | Y轴坐标 |

#### Returns

`number`[]

经纬度

___

### mercatorCoord2CAD

▸ **mercatorCoord2CAD**(`x`, `y`): `Vector3`

mapbox的墨卡托坐标系到cad

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X轴坐标 |
| `y` | `number` | Y轴坐标 |

#### Returns

`Vector3`

三维点对象

___

### mercatorCoordToCAD

▸ **mercatorCoordToCAD**(`x`, `y`): `Vector3`

mapbox的墨卡托坐标系到cad

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X轴坐标 |
| `y` | `number` | Y轴坐标 |

#### Returns

`Vector3`

三维点对象

___

### mercator\_to\_lnglat

▸ **mercator_to_lnglat**(`x`, `y`, `z`): `number`[]

mapbox的墨卡托坐标系到经纬度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X轴坐标 |
| `y` | `number` | Y轴坐标 |
| `z` | `number` | Z轴坐标 |

#### Returns

`number`[]

经纬度

___

### outOfChina

▸ **outOfChina**(`lng`, `lat`): `boolean`

是否超出中国范围

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lng` | `number` | 经度 |
| `lat` | `number` | 维度 |

#### Returns

`boolean`

布尔值

___

### setCoordinatePointAlignment

▸ **setCoordinatePointAlignment**(`originLngLatLike`, `originCAD`, `meterInCADUnits`): `void`

设置坐标点的对齐方式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originLngLatLike` | `number`[] | 经度和纬度的原点坐标 |
| `originCAD` | `number`[] | 绘图坐标系下的起始点，即AutoCAD 中的原点坐标。 |
| `meterInCADUnits` | `number` | 地理坐标系和 AutoCAD 绘图使用的坐标单位转换 |

#### Returns

`void`

___

### setLoadOldEditionMethod

▸ **setLoadOldEditionMethod**(): `void`

用于设置加载旧版本地图

#### Returns

`void`
