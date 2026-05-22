[mxcad_2d API documentation] (../README. md)/[mapbox] (../modules/mapbox. md)/MxMap

# Class: MxMap

[mapbox](../modules/mapbox.md).MxMap

CAD map object

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

• **new MxMap**(`inMxcad?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inMxcad?` | [`McObject`](2d.McObject.md) |

## Properties

### mxcad

• **mxcad**: [`McObject`](2d.McObject.md)

MXCAD object

## Methods

### cadLongToMercatorCoord

▸ **cadLongToMercatorCoord**(`len`): `number`

Convert longitude coordinates to coordinates under Mercator projection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Len | number | longitude|

#### Returns

`number`

Coordinates under Mercator projection

___

### cadToMercatorCoord

▸ **cadToMercatorCoord**(`pt`): `Vector3`

CAD to Mapbox Mercator Coordinate System

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Pt | Vector3 | 3D point object|

#### Returns

`Vector3`

3D point object

___

### cadTolnglat

▸ **cadTolnglat**(`pt`): `number`[]

Convert CAD coordinates to longitude and latitude

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Pt | Vector3 | 3D point object|

#### Returns

`number`[]

Latitude and longitude

___

### create

▸ **create**(`map`, `config`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Create a map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Map | any | map object|
| `config` | `any` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

___

### getMapbox

▸ **getMapbox**(): `any`

Get the map object of mapbox

#### Returns

`any`

Map object

___

### getMxDrawObject

▸ **getMxDrawObject**(): `MxDrawObject`

Retrieve the current mxdraw object

#### Returns

`MxDrawObject`

Mxdraw object

___

### initMapbox

▸ **initMapbox**(`map`): `void`

Initialize mapbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Map | any | map object|

#### Returns

`void`

___

### lnglatToCAD

▸ **lnglatToCAD**(`lng`, `lat`): `Vector3`

From latitude and longitude to CAD coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Lng | number | longitude|
|Lat | number | latitude|

#### Returns

`Vector3`

3D point object

___

### lnglat\_to\_mercator

▸ **lnglat_to_mercator**(`lng`, `lat`): `Vector3`

Coordinate from latitude and longitude to the Mercator coordinate system of Mapbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Lng | number | longitude|
|Lat | number | dimension|

#### Returns

`Vector3`

3D point object

___

### map\_lnglat\_to\_meters

▸ **map_lnglat_to_meters**(`lng`, `lat`): `number`[]

Convert the coordinates (longitude and latitude) in the geographic coordinate system to the coordinates (meters) in the planar coordinate system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Lng | number | longitude|
|Lat | number | dimension|

#### Returns

`number`[]

Plane coordinates

___

### map\_meters\_to\_lnglat

▸ **map_meters_to_lnglat**(`x`, `y`): `number`[]

Map Mercator coordinate system to latitude and longitude

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X | number | X-axis coordinate|
|Y | number | Y-axis coordinate|

#### Returns

`number`[]

Latitude and longitude

___

### mercatorCoord2CAD

▸ **mercatorCoord2CAD**(`x`, `y`): `Vector3`

MAPBOX's Mercator Coordinate System to CAD

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X | number | X-axis coordinate|
|Y | number | Y-axis coordinate|

#### Returns

`Vector3`

3D point object

___

### mercatorCoordToCAD

▸ **mercatorCoordToCAD**(`x`, `y`): `Vector3`

MAPBOX's Mercator Coordinate System to CAD

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X | number | X-axis coordinate|
|Y | number | Y-axis coordinate|

#### Returns

`Vector3`

3D point object

___

### mercator\_to\_lnglat

▸ **mercator_to_lnglat**(`x`, `y`, `z`): `number`[]

Mapbox's Mercator coordinate system to latitude and longitude

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X | number | X-axis coordinate|
|Y | number | Y-axis coordinate|
|Z | number | Z-axis coordinate|

#### Returns

`number`[]

Latitude and longitude

___

### outOfChina

▸ **outOfChina**(`lng`, `lat`): `boolean`

Is it beyond the scope of China

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Lng | number | longitude|
|Lat | number | dimension|

#### Returns

`boolean`

Boolean value

___

### setCoordinatePointAlignment

▸ **setCoordinatePointAlignment**(`originLngLatLike`, `originCAD`, `meterInCADUnits`): `void`

Set the alignment method of coordinate points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|OriginLngLatLike | number [] | Origin coordinates of longitude and latitude|
|OriginCAD | number [] | The starting point in the drawing coordinate system, which is the origin coordinate in AutoCAD|
|MeterInCADUnits | Number | Conversion between Geographic Coordinate Systems and Coordinate Units Used in AutoCAD Drawing|

#### Returns

`void`

___

### setLoadOldEditionMethod

▸ **setLoadOldEditionMethod**(): `void`

Used to set up loading of old version maps

#### Returns

`void`
