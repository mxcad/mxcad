[mxcad_2d API documentation] (../README. md)/mapbox

# Module: mapbox

This module contains exports related to the integration of GIS and CAD, and all exported content can be directly used by importing through the MXCAD package

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

Load Google Cloud Layer map layer, Mars coordinate system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Map | any | map object|
|Types | string [] | Types of Google Maps Layers|
| `urls?` | ` String ` [] | URL of Google Maps layer|

#### Returns

`void`

___

### MxMapAddRasterTileLayer

▸ **MxMapAddRasterTileLayer**(`map`, `layerList`, `key?`, `providers?`): `void`

Load map layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Map | any | map object|
|LayerList | any [] | Layer List|
| `key?` | ` String | API key or token for accessing tile layers|
| `providers?` | ` Any | Specify the provider information for the tile layer|

#### Returns

`void`

___

### mx\_gcj02\_To\_gps84

▸ **mx_gcj02_To_gps84**(`lng`, `lat`): `Object`

Convert the coordinates of the National Bureau of Surveying and Mapping (GCJ-02 coordinate system) to GPS coordinates (WGS 84 coordinate system)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Lng | any | longitude|
|Lat | any | latitude|

#### Returns

`Object`

Converted latitude and longitude

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

___

### mx\_gps84\_To\_gcj02

▸ **mx_gps84_To_gcj02**(`lng`, `lat`): `Object`

Convert GPS coordinates (WGS 84 coordinate system) to National Bureau of Surveying and Mapping coordinates (GCJ-02 coordinate system)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Lng | any | longitude|
|Lat | any | latitude|

#### Returns

`Object`

Converted latitude and longitude

| Name | Type |
| :------ | :------ |
| `lat` | `any` |
| `lng` | `any` |
