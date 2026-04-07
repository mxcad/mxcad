import {
  A,
  R
} from "./chunk-ZSBWHPK2.js";
import "./chunk-MGKBEPMD.js";
import {
  __require
} from "./chunk-5FUTL2UF.js";

// node_modules/vitepress-demo-editor/dist/index.64626887.js
var Um = (s3) => s3.replace(/\<template.*?\>(.*)\<\/template.*?\>/s, (e, t) => `<template><div style='height:100%;width: 100%;'>${t}</div></template>`);
function Re(s3, e) {
  const t = /* @__PURE__ */ Object.create(null), r = s3.split(",");
  for (let i = 0; i < r.length; i++)
    t[r[i]] = true;
  return e ? (i) => !!t[i.toLowerCase()] : (i) => !!t[i];
}
var Lt = {
  [1]: "TEXT",
  [2]: "CLASS",
  [4]: "STYLE",
  [8]: "PROPS",
  [16]: "FULL_PROPS",
  [32]: "HYDRATE_EVENTS",
  [64]: "STABLE_FRAGMENT",
  [128]: "KEYED_FRAGMENT",
  [256]: "UNKEYED_FRAGMENT",
  [512]: "NEED_PATCH",
  [1024]: "DYNAMIC_SLOTS",
  [2048]: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
};
var jm = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
var qm = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
var Dh = Re(qm);
var rc = 2;
function Ks(s3, e = 0, t = s3.length) {
  let r = s3.split(/(\r?\n)/);
  const i = r.filter((o, l) => l % 2 === 1);
  r = r.filter((o, l) => l % 2 === 0);
  let n = 0;
  const a = [];
  for (let o = 0; o < r.length; o++)
    if (n += r[o].length + (i[o] && i[o].length || 0), n >= e) {
      for (let l = o - rc; l <= o + rc || t > n; l++) {
        if (l < 0 || l >= r.length)
          continue;
        const u = l + 1;
        a.push(`${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${r[l]}`);
        const c = r[l].length, h = i[l] && i[l].length || 0;
        if (l === o) {
          const p = e - (n - (c + h)), f = Math.max(1, t > n ? c - p : t - e);
          a.push("   |  " + " ".repeat(p) + "^".repeat(f));
        } else if (l > o) {
          if (t > n) {
            const p = Math.max(Math.min(t - n, c), 1);
            a.push("   |  " + "^".repeat(p));
          }
          n += c + h;
        }
      }
      break;
    }
  return a.join(`
`);
}
var Vm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var zm = Re(Vm + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
var Gm = /[>/="'\u0009\u000a\u000c\u0020]/;
var qa = {};
function Wm(s3) {
  if (qa.hasOwnProperty(s3))
    return qa[s3];
  const e = Gm.test(s3);
  return e && console.error(`unsafe attribute name: ${s3}`), qa[s3] = !e;
}
var Hm = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
var Km = Re("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width");
var Ym = Re("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
var Jm = Re("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
function Rh(s3) {
  if (rt(s3)) {
    const e = {};
    for (let t = 0; t < s3.length; t++) {
      const r = s3[t], i = be(r) ? Fh(r) : Rh(r);
      if (i)
        for (const n in i)
          e[n] = i[n];
    }
    return e;
  } else {
    if (be(s3))
      return s3;
    if (er(s3))
      return s3;
  }
}
var Qm = /;(?![^(]*\))/g;
var Xm = /:(.+)/;
function Fh(s3) {
  const e = {};
  return s3.split(Qm).forEach((t) => {
    if (t) {
      const r = t.split(Xm);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Zm(s3) {
  let e = "";
  if (!s3 || be(s3))
    return e;
  for (const t in s3) {
    const r = s3[t], i = t.startsWith("--") ? t : Wh(t);
    (be(r) || typeof r == "number" && Km(i)) && (e += `${i}:${r};`);
  }
  return e;
}
function Bh(s3) {
  let e = "";
  if (be(s3))
    e = s3;
  else if (rt(s3))
    for (let t = 0; t < s3.length; t++) {
      const r = Bh(s3[t]);
      r && (e += r + " ");
    }
  else if (er(s3))
    for (const t in s3)
      s3[t] && (e += t + " ");
  return e.trim();
}
var eg = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
var tg = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
var rg = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
var sg = Re(eg);
var ig = Re(tg);
var $h = Re(rg);
var ng = /["'&<>]/;
function Nt(s3) {
  const e = "" + s3, t = ng.exec(e);
  if (!t)
    return e;
  let r = "", i, n, a = 0;
  for (n = t.index; n < e.length; n++) {
    switch (e.charCodeAt(n)) {
      case 34:
        i = "&quot;";
        break;
      case 38:
        i = "&amp;";
        break;
      case 39:
        i = "&#39;";
        break;
      case 60:
        i = "&lt;";
        break;
      case 62:
        i = "&gt;";
        break;
      default:
        continue;
    }
    a !== n && (r += e.slice(a, n)), a = n + 1, r += i;
  }
  return a !== n ? r + e.slice(a, n) : r;
}
var fl = (s3) => be(s3) ? s3 : s3 == null ? "" : rt(s3) || er(s3) && (s3.toString === zh || !Vh(s3.toString)) ? JSON.stringify(s3, Uh, 2) : String(s3);
var Uh = (s3, e) => e && e.__v_isRef ? Uh(s3, e.value) : ug(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((t, [r, i]) => (t[`${r} =>`] = i, t), {})
} : cg(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : er(e) && !rt(e) && !hg(e) ? String(e) : e;
var ag = Object.freeze({});
Object.freeze([]);
var sc = () => {
};
var rn = () => false;
var og = /^on[^a-z]/;
var jh = (s3) => og.test(s3);
var Ht = Object.assign;
var lg = Object.prototype.hasOwnProperty;
var qh = (s3, e) => lg.call(s3, e);
var rt = Array.isArray;
var ug = (s3) => dl(s3) === "[object Map]";
var cg = (s3) => dl(s3) === "[object Set]";
var Vh = (s3) => typeof s3 == "function";
var be = (s3) => typeof s3 == "string";
var bs = (s3) => typeof s3 == "symbol";
var er = (s3) => s3 !== null && typeof s3 == "object";
var zh = Object.prototype.toString;
var dl = (s3) => zh.call(s3);
var hg = (s3) => dl(s3) === "[object Object]";
var ic = Re(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var Gh = Re("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
var Hn = (s3) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = s3(t));
};
var pg = /-(\w)/g;
var Mt = Hn((s3) => s3.replace(pg, (e, t) => t ? t.toUpperCase() : ""));
var fg = /\B([A-Z])/g;
var Wh = Hn((s3) => s3.replace(fg, "-$1").toLowerCase());
var Dr = Hn((s3) => s3.charAt(0).toUpperCase() + s3.slice(1));
var dg = Hn((s3) => s3 ? `on${Dr(s3)}` : "");
var mg = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function vn(s3) {
  return mg.test(s3) ? `__props.${s3}` : `__props[${JSON.stringify(s3)}]`;
}
function ml(s3) {
  throw s3;
}
function Hh(s3) {
  console.warn(`[Vue warn] ${s3.message}`);
}
function Te(s3, e, t, r) {
  const i = (t || gg)[s3] + (r || ""), n = new SyntaxError(String(i));
  return n.code = s3, n.loc = e, n;
}
var gg = {
  [0]: "Illegal comment.",
  [1]: "CDATA section is allowed only in XML context.",
  [2]: "Duplicate attribute.",
  [3]: "End tag cannot have attributes.",
  [4]: "Illegal '/' in tags.",
  [5]: "Unexpected EOF in tag.",
  [6]: "Unexpected EOF in CDATA section.",
  [7]: "Unexpected EOF in comment.",
  [8]: "Unexpected EOF in script.",
  [9]: "Unexpected EOF in tag.",
  [10]: "Incorrectly closed comment.",
  [11]: "Incorrectly opened comment.",
  [12]: "Illegal tag name. Use '&lt;' to print '<'.",
  [13]: "Attribute value was expected.",
  [14]: "End tag name was expected.",
  [15]: "Whitespace was expected.",
  [16]: "Unexpected '<!--' in comment.",
  [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  [19]: "Attribute name cannot start with '='.",
  [21]: "'<?' is allowed only in XML context.",
  [20]: "Unexpected null character.",
  [22]: "Illegal '/' in tags.",
  [23]: "Invalid end tag.",
  [24]: "Element is missing end tag.",
  [25]: "Interpolation end sign was not found.",
  [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  [26]: "Legal directive name was expected.",
  [28]: "v-if/v-else-if is missing expression.",
  [29]: "v-if/else branches must use unique keys.",
  [30]: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  [31]: "v-for is missing expression.",
  [32]: "v-for has invalid expression.",
  [33]: "<template v-for> key should be placed on the <template> tag.",
  [34]: "v-bind is missing expression.",
  [35]: "v-on is missing expression.",
  [36]: "Unexpected custom directive on <slot> outlet.",
  [37]: "Mixed v-slot usage on both the component and nested <template>.When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  [38]: "Duplicate slot names found. ",
  [39]: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  [40]: "v-slot can only be used on components or <template> tags.",
  [41]: "v-model is missing expression.",
  [42]: "v-model value must be a valid JavaScript member expression.",
  [43]: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  [44]: "Error parsing JavaScript expression: ",
  [45]: "<KeepAlive> expects exactly one child component.",
  [46]: '"prefixIdentifiers" option is not supported in this build of compiler.',
  [47]: "ES module mode is not supported in this build of compiler.",
  [48]: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  [49]: '"scopeId" option is only supported in module mode.',
  [50]: ""
};
var ns = Symbol("Fragment");
var Ir = Symbol("Teleport");
var Ss = Symbol("Suspense");
var ai = Symbol("KeepAlive");
var gl = Symbol("BaseTransition");
var ur = Symbol("openBlock");
var yl = Symbol("createBlock");
var vl = Symbol("createElementBlock");
var ki = Symbol("createVNode");
var Kn = Symbol("createElementVNode");
var ws = Symbol("createCommentVNode");
var Yn = Symbol("createTextVNode");
var Jn = Symbol("createStaticVNode");
var oi = Symbol("resolveComponent");
var as = Symbol("resolveDynamicComponent");
var Qn = Symbol("resolveDirective");
var Kh = Symbol("resolveFilter");
var Xn = Symbol("withDirectives");
var Zn = Symbol("renderList");
var bl = Symbol("renderSlot");
var Sl = Symbol("createSlots");
var Ni = Symbol("toDisplayString");
var Rr = Symbol("mergeProps");
var ea = Symbol("normalizeClass");
var ta = Symbol("normalizeStyle");
var os = Symbol("normalizeProps");
var Es = Symbol("guardReactiveProps");
var ra = Symbol("toHandlers");
var bn = Symbol("camelize");
var Yh = Symbol("capitalize");
var Sn = Symbol("toHandlerKey");
var li = Symbol("setBlockTracking");
var sa = Symbol("pushScopeId");
var ia = Symbol("popScopeId");
var na = Symbol("withCtx");
var ls = Symbol("unref");
var ui = Symbol("isRef");
var aa = Symbol("withMemo");
var wl = Symbol("isMemoSame");
var nt = {
  [ns]: "Fragment",
  [Ir]: "Teleport",
  [Ss]: "Suspense",
  [ai]: "KeepAlive",
  [gl]: "BaseTransition",
  [ur]: "openBlock",
  [yl]: "createBlock",
  [vl]: "createElementBlock",
  [ki]: "createVNode",
  [Kn]: "createElementVNode",
  [ws]: "createCommentVNode",
  [Yn]: "createTextVNode",
  [Jn]: "createStaticVNode",
  [oi]: "resolveComponent",
  [as]: "resolveDynamicComponent",
  [Qn]: "resolveDirective",
  [Kh]: "resolveFilter",
  [Xn]: "withDirectives",
  [Zn]: "renderList",
  [bl]: "renderSlot",
  [Sl]: "createSlots",
  [Ni]: "toDisplayString",
  [Rr]: "mergeProps",
  [ea]: "normalizeClass",
  [ta]: "normalizeStyle",
  [os]: "normalizeProps",
  [Es]: "guardReactiveProps",
  [ra]: "toHandlers",
  [bn]: "camelize",
  [Yh]: "capitalize",
  [Sn]: "toHandlerKey",
  [li]: "setBlockTracking",
  [sa]: "pushScopeId",
  [ia]: "popScopeId",
  [na]: "withCtx",
  [ls]: "unref",
  [ui]: "isRef",
  [aa]: "withMemo",
  [wl]: "isMemoSame"
};
function El(s3) {
  Object.getOwnPropertySymbols(s3).forEach((e) => {
    nt[e] = s3[e];
  });
}
var Le = {
  source: "",
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function xs(s3, e = Le) {
  return {
    type: 0,
    children: s3,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc: e
  };
}
function us(s3, e, t, r, i, n, a, o = false, l = false, u = false, c = Le) {
  return s3 && (o ? (s3.helper(ur), s3.helper($r(s3.inSSR, u))) : s3.helper(Br(s3.inSSR, u)), a && s3.helper(Xn)), {
    type: 13,
    tag: e,
    props: t,
    children: r,
    patchFlag: i,
    dynamicProps: n,
    directives: a,
    isBlock: o,
    disableTracking: l,
    isComponent: u,
    loc: c
  };
}
function Ur(s3, e = Le) {
  return {
    type: 17,
    loc: e,
    elements: s3
  };
}
function at(s3, e = Le) {
  return {
    type: 15,
    loc: e,
    properties: s3
  };
}
function Pe(s3, e) {
  return {
    type: 16,
    loc: Le,
    key: be(s3) ? G(s3, true) : s3,
    value: e
  };
}
function G(s3, e = false, t = Le, r = 0) {
  return {
    type: 4,
    loc: t,
    content: s3,
    isStatic: e,
    constType: e ? 3 : r
  };
}
function wn(s3, e) {
  return {
    type: 5,
    loc: e,
    content: be(s3) ? G(s3, false, e) : s3
  };
}
function je(s3, e = Le) {
  return {
    type: 8,
    loc: e,
    children: s3
  };
}
function ae(s3, e = [], t = Le) {
  return {
    type: 14,
    loc: t,
    callee: s3,
    arguments: e
  };
}
function dt(s3, e = void 0, t = false, r = false, i = Le) {
  return {
    type: 18,
    params: s3,
    returns: e,
    newline: t,
    isSlot: r,
    loc: i
  };
}
function cr(s3, e, t, r = true) {
  return {
    type: 19,
    test: s3,
    consequent: e,
    alternate: t,
    newline: r,
    loc: Le
  };
}
function Jh(s3, e, t = false) {
  return {
    type: 20,
    index: s3,
    value: e,
    isVNode: t,
    loc: Le
  };
}
function Oi(s3) {
  return {
    type: 21,
    body: s3,
    loc: Le
  };
}
function xl(s3) {
  return {
    type: 22,
    elements: s3,
    loc: Le
  };
}
function En(s3, e, t) {
  return {
    type: 23,
    test: s3,
    consequent: e,
    alternate: t,
    loc: Le
  };
}
function bo(s3, e) {
  return {
    type: 24,
    left: s3,
    right: e,
    loc: Le
  };
}
function Qh(s3) {
  return {
    type: 25,
    expressions: s3,
    loc: Le
  };
}
function Xh(s3) {
  return {
    type: 26,
    returns: s3,
    loc: Le
  };
}
var Tl = /\r\n?|[\n\u2028\u2029]/;
var Tr = new RegExp(Tl.source, "g");
function xr(s3) {
  switch (s3) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;
    default:
      return false;
  }
}
var Va = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var yg = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y;
var nc = new RegExp("(?=(" + yg.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
function vg(s3) {
  switch (s3) {
    case 9:
    case 11:
    case 12:
    case 32:
    case 160:
    case 5760:
    case 8192:
    case 8193:
    case 8194:
    case 8195:
    case 8196:
    case 8197:
    case 8198:
    case 8199:
    case 8200:
    case 8201:
    case 8202:
    case 8239:
    case 8287:
    case 12288:
    case 65279:
      return true;
    default:
      return false;
  }
}
var ci = class {
  constructor(e, t) {
    this.line = void 0, this.column = void 0, this.line = e, this.column = t;
  }
};
var xn = class {
  constructor(e, t) {
    this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = e, this.end = t;
  }
};
function bg(s3, e) {
  let t = 1, r = 0, i;
  for (Tr.lastIndex = 0; (i = Tr.exec(s3)) && i.index < e; )
    t++, r = Tr.lastIndex;
  return new ci(t, e - r);
}
var Sg = class {
  constructor() {
    this.sawUnambiguousESM = false, this.ambiguousScriptDifferentAst = false;
  }
  hasPlugin(e) {
    return this.plugins.has(e);
  }
  getPluginOption(e, t) {
    if (this.hasPlugin(e))
      return this.plugins.get(e)[t];
  }
};
function Zh(s3, e) {
  s3.trailingComments === void 0 ? s3.trailingComments = e : s3.trailingComments.unshift(...e);
}
function wg(s3, e) {
  s3.leadingComments === void 0 ? s3.leadingComments = e : s3.leadingComments.unshift(...e);
}
function hi(s3, e) {
  s3.innerComments === void 0 ? s3.innerComments = e : s3.innerComments.unshift(...e);
}
function Fs(s3, e, t) {
  let r = null, i = e.length;
  for (; r === null && i > 0; )
    r = e[--i];
  r === null || r.start > t.start ? hi(s3, t.comments) : Zh(r, t.comments);
}
var Eg = class extends Sg {
  addComment(e) {
    this.filename && (e.loc.filename = this.filename), this.state.comments.push(e);
  }
  processComment(e) {
    const {
      commentStack: t
    } = this.state, r = t.length;
    if (r === 0)
      return;
    let i = r - 1;
    const n = t[i];
    n.start === e.end && (n.leadingNode = e, i--);
    const {
      start: a
    } = e;
    for (; i >= 0; i--) {
      const o = t[i], l = o.end;
      if (l > a)
        o.containingNode = e, this.finalizeComment(o), t.splice(i, 1);
      else {
        l === a && (o.trailingNode = e);
        break;
      }
    }
  }
  finalizeComment(e) {
    const {
      comments: t
    } = e;
    if (e.leadingNode !== null || e.trailingNode !== null)
      e.leadingNode !== null && Zh(e.leadingNode, t), e.trailingNode !== null && wg(e.trailingNode, t);
    else {
      const {
        containingNode: r,
        start: i
      } = e;
      if (this.input.charCodeAt(i - 1) === 44)
        switch (r.type) {
          case "ObjectExpression":
          case "ObjectPattern":
          case "RecordExpression":
            Fs(r, r.properties, e);
            break;
          case "CallExpression":
          case "OptionalCallExpression":
            Fs(r, r.arguments, e);
            break;
          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ObjectMethod":
          case "ClassMethod":
          case "ClassPrivateMethod":
            Fs(r, r.params, e);
            break;
          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            Fs(r, r.elements, e);
            break;
          case "ExportNamedDeclaration":
          case "ImportDeclaration":
            Fs(r, r.specifiers, e);
            break;
          default:
            hi(r, t);
        }
      else
        hi(r, t);
    }
  }
  finalizeRemainingComments() {
    const {
      commentStack: e
    } = this.state;
    for (let t = e.length - 1; t >= 0; t--)
      this.finalizeComment(e[t]);
    this.state.commentStack = [];
  }
  resetPreviousNodeTrailingComments(e) {
    const {
      commentStack: t
    } = this.state, {
      length: r
    } = t;
    if (r === 0)
      return;
    const i = t[r - 1];
    i.leadingNode === e && (i.leadingNode = null);
  }
  takeSurroundingComments(e, t, r) {
    const {
      commentStack: i
    } = this.state, n = i.length;
    if (n === 0)
      return;
    let a = n - 1;
    for (; a >= 0; a--) {
      const o = i[a], l = o.end;
      if (o.start === r)
        o.leadingNode = e;
      else if (l === t)
        o.trailingNode = e;
      else if (l < t)
        break;
    }
  }
};
var Kt = Object.freeze({
  SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
  SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
});
var I = Ts({
  AccessorIsGenerator: "A %0ter cannot be a generator.",
  ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
  AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
  AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
  AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
  AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
  AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
  AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
  BadGetterArity: "A 'get' accesor must not have any formal parameters.",
  BadSetterArity: "A 'set' accesor must have exactly one formal parameter.",
  BadSetterRestParameter: "A 'set' accesor function argument must not be a rest parameter.",
  ConstructorClassField: "Classes may not have a field named 'constructor'.",
  ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
  ConstructorIsAccessor: "Class constructor may not be an accessor.",
  ConstructorIsAsync: "Constructor can't be an async function.",
  ConstructorIsGenerator: "Constructor can't be a generator.",
  DeclarationMissingInitializer: "'%0' require an initialization value.",
  DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax.",
  DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
  DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
  DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
  DecoratorStaticBlock: "Decorators can't be used with a static block.",
  DeletePrivateField: "Deleting a private field is not allowed.",
  DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
  DuplicateConstructor: "Duplicate constructor in the same class.",
  DuplicateDefaultExport: "Only one default export allowed per module.",
  DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.",
  DuplicateProto: "Redefinition of __proto__ property.",
  DuplicateRegExpFlags: "Duplicate regular expression flag.",
  ElementAfterRest: "Rest element must be last element.",
  EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
  ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?",
  ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
  ForInOfLoopInitializer: "'%0' loop variable declaration may not have an initializer.",
  ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
  ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
  GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
  IllegalBreakContinue: "Unsyntactic %0.",
  IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
  IllegalReturn: "'return' outside of function.",
  ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
  ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.",
  ImportCallArity: "`import()` requires exactly %0.",
  ImportCallNotNewExpression: "Cannot use new with import(...).",
  ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
  InvalidBigIntLiteral: "Invalid BigIntLiteral.",
  InvalidCodePoint: "Code point out of bounds.",
  InvalidDecimal: "Invalid decimal.",
  InvalidDigit: "Expected number in radix %0.",
  InvalidEscapeSequence: "Bad character escape sequence.",
  InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
  InvalidEscapedReservedWord: "Escape sequence in keyword %0.",
  InvalidIdentifier: "Invalid identifier %0.",
  InvalidLhs: "Invalid left-hand side in %0.",
  InvalidLhsBinding: "Binding invalid left-hand side in %0.",
  InvalidNumber: "Invalid number.",
  InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
  InvalidOrUnexpectedToken: "Unexpected character '%0'.",
  InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
  InvalidPrivateFieldResolution: "Private name #%0 is not defined.",
  InvalidPropertyBindingPattern: "Binding member expression.",
  InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
  InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
  LabelRedeclaration: "Label '%0' is already declared.",
  LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
  LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
  MalformedRegExpFlags: "Invalid regular expression flag.",
  MissingClassName: "A class name is required.",
  MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
  MissingSemicolon: "Missing semicolon.",
  MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
  MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
  ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
  ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
  ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes.',
  ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'.",
  ModuleExportUndefined: "Export '%0' is not defined.",
  MultipleDefaultsInSwitch: "Multiple default clauses.",
  NewlineAfterThrow: "Illegal newline after throw.",
  NoCatchOrFinally: "Missing catch or finally clause.",
  NumberIdentifier: "Identifier directly after number.",
  NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
  ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
  OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
  OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
  OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
  ParamDupe: "Argument name clash.",
  PatternHasAccessor: "Object pattern can't contain getter or setter.",
  PatternHasMethod: "Object pattern can't contain methods.",
  PipeBodyIsTighter: "Unexpected %0 after pipeline body; any %0 expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
  PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
  PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
  PipeTopicUnconfiguredToken: 'Invalid topic token %0. In order to use %0 as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "%0" }.',
  PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
  PipeUnparenthesizedBody: "Hack-style pipe body cannot be an unparenthesized %0 expression; please wrap it in parentheses.",
  PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
  PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
  PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
  PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
  PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
  PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
  PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`).",
  PrivateNameRedeclaration: "Duplicate private name #%0.",
  RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  RecordNoProto: "'__proto__' is not allowed in Record expressions.",
  RestTrailingComma: "Unexpected trailing comma after rest element.",
  SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
  StaticPrototype: "Classes may not have static property named prototype.",
  StrictDelete: "Deleting local variable in strict mode.",
  StrictEvalArguments: "Assigning to '%0' in strict mode.",
  StrictEvalArgumentsBinding: "Binding '%0' in strict mode.",
  StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
  StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
  StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
  StrictWith: "'with' in strict mode.",
  SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
  SuperPrivateField: "Private fields can't be accessed on super.",
  TrailingDecorator: "Decorators must be attached to a class element.",
  TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
  UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
  UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
  UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
  UnexpectedKeyword: "Unexpected keyword '%0'.",
  UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
  UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
  UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
  UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
  UnexpectedPrivateField: `Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )
 or a property of member expression (i.e. this.#p).`,
  UnexpectedReservedWord: "Unexpected reserved word '%0'.",
  UnexpectedSuper: "'super' is only allowed in object methods and classes.",
  UnexpectedToken: "Unexpected token '%0'.",
  UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
  UnsupportedBind: "Binding should be performed on object property.",
  UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
  UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
  UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
  UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1.",
  UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
  UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
  UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
  UnterminatedComment: "Unterminated comment.",
  UnterminatedRegExp: "Unterminated regular expression.",
  UnterminatedString: "Unterminated string constant.",
  UnterminatedTemplate: "Unterminated template.",
  VarRedeclaration: "Identifier '%0' has already been declared.",
  YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
  YieldInParameter: "Yield expression is not allowed in formal parameters.",
  ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
}, Kt.SyntaxError);
var ep = Ts({
  ImportMetaOutsideModule: `import.meta may appear only with 'sourceType: "module"'`,
  ImportOutsideModule: `'import' and 'export' may appear only with 'sourceType: "module"'`
}, Kt.SourceTypeModuleError);
function xg(s3, e) {
  return e === "flow" && s3 === "PatternIsOptional" ? "OptionalBindingPattern" : s3;
}
function Ts(s3, e, t) {
  const r = {};
  return Object.keys(s3).forEach((i) => {
    r[i] = Object.freeze({
      code: e,
      reasonCode: xg(i, t),
      template: s3[i]
    });
  }), Object.freeze(r);
}
var Tg = class extends Eg {
  getLocationForPosition(e) {
    let t;
    return e === this.state.start ? t = this.state.startLoc : e === this.state.lastTokStart ? t = this.state.lastTokStartLoc : e === this.state.end ? t = this.state.endLoc : e === this.state.lastTokEnd ? t = this.state.lastTokEndLoc : t = bg(this.input, e), t;
  }
  raise(e, {
    code: t,
    reasonCode: r,
    template: i
  }, ...n) {
    return this.raiseWithData(e, {
      code: t,
      reasonCode: r
    }, i, ...n);
  }
  raiseOverwrite(e, {
    code: t,
    template: r
  }, ...i) {
    const n = this.getLocationForPosition(e), a = r.replace(/%(\d+)/g, (o, l) => i[l]) + ` (${n.line}:${n.column})`;
    if (this.options.errorRecovery) {
      const o = this.state.errors;
      for (let l = o.length - 1; l >= 0; l--) {
        const u = o[l];
        if (u.pos === e)
          return Object.assign(u, {
            message: a
          });
        if (u.pos < e)
          break;
      }
    }
    return this._raise({
      code: t,
      loc: n,
      pos: e
    }, a);
  }
  raiseWithData(e, t, r, ...i) {
    const n = this.getLocationForPosition(e), a = r.replace(/%(\d+)/g, (o, l) => i[l]) + ` (${n.line}:${n.column})`;
    return this._raise(Object.assign({
      loc: n,
      pos: e
    }, t), a);
  }
  _raise(e, t) {
    const r = new SyntaxError(t);
    if (Object.assign(r, e), this.options.errorRecovery)
      return this.isLookahead || this.state.errors.push(r), r;
    throw r;
  }
};
var Pg = (s3) => class extends s3 {
  parseRegExpLiteral({
    pattern: e,
    flags: t
  }) {
    let r = null;
    try {
      r = new RegExp(e, t);
    } catch {
    }
    const i = this.estreeParseLiteral(r);
    return i.regex = {
      pattern: e,
      flags: t
    }, i;
  }
  parseBigIntLiteral(e) {
    let t;
    try {
      t = BigInt(e);
    } catch {
      t = null;
    }
    const r = this.estreeParseLiteral(t);
    return r.bigint = String(r.value || e), r;
  }
  parseDecimalLiteral(e) {
    const r = this.estreeParseLiteral(null);
    return r.decimal = String(r.value || e), r;
  }
  estreeParseLiteral(e) {
    return this.parseLiteral(e, "Literal");
  }
  parseStringLiteral(e) {
    return this.estreeParseLiteral(e);
  }
  parseNumericLiteral(e) {
    return this.estreeParseLiteral(e);
  }
  parseNullLiteral() {
    return this.estreeParseLiteral(null);
  }
  parseBooleanLiteral(e) {
    return this.estreeParseLiteral(e);
  }
  directiveToStmt(e) {
    const t = e.value, r = this.startNodeAt(e.start, e.loc.start), i = this.startNodeAt(t.start, t.loc.start);
    return i.value = t.extra.expressionValue, i.raw = t.extra.raw, r.expression = this.finishNodeAt(i, "Literal", t.end, t.loc.end), r.directive = t.extra.raw.slice(1, -1), this.finishNodeAt(r, "ExpressionStatement", e.end, e.loc.end);
  }
  initFunction(e, t) {
    super.initFunction(e, t), e.expression = false;
  }
  checkDeclaration(e) {
    e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
  }
  getObjectOrClassMethodParams(e) {
    return e.value.params;
  }
  isValidDirective(e) {
    var t;
    return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((t = e.expression.extra) != null && t.parenthesized);
  }
  parseBlockBody(e, ...t) {
    super.parseBlockBody(e, ...t);
    const r = e.directives.map((i) => this.directiveToStmt(i));
    e.body = r.concat(e.body), delete e.directives;
  }
  pushClassMethod(e, t, r, i, n, a) {
    this.parseMethod(t, r, i, n, a, "ClassMethod", true), t.typeParameters && (t.value.typeParameters = t.typeParameters, delete t.typeParameters), e.body.push(t);
  }
  parsePrivateName() {
    const e = super.parsePrivateName();
    return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
  }
  convertPrivateNameToPrivateIdentifier(e) {
    const t = super.getPrivateNameSV(e);
    return e = e, delete e.id, e.name = t, e.type = "PrivateIdentifier", e;
  }
  isPrivateName(e) {
    return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
  }
  getPrivateNameSV(e) {
    return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
  }
  parseLiteral(e, t) {
    const r = super.parseLiteral(e, t);
    return r.raw = r.extra.raw, delete r.extra, r;
  }
  parseFunctionBody(e, t, r = false) {
    super.parseFunctionBody(e, t, r), e.expression = e.body.type !== "BlockStatement";
  }
  parseMethod(e, t, r, i, n, a, o = false) {
    let l = this.startNode();
    return l.kind = e.kind, l = super.parseMethod(l, t, r, i, n, a, o), l.type = "FunctionExpression", delete l.kind, e.value = l, a === "ClassPrivateMethod" && (e.computed = false), a = "MethodDefinition", this.finishNode(e, a);
  }
  parseClassProperty(...e) {
    const t = super.parseClassProperty(...e);
    return this.getPluginOption("estree", "classFeatures") && (t.type = "PropertyDefinition"), t;
  }
  parseClassPrivateProperty(...e) {
    const t = super.parseClassPrivateProperty(...e);
    return this.getPluginOption("estree", "classFeatures") && (t.type = "PropertyDefinition", t.computed = false), t;
  }
  parseObjectMethod(e, t, r, i, n) {
    const a = super.parseObjectMethod(e, t, r, i, n);
    return a && (a.type = "Property", a.kind === "method" && (a.kind = "init"), a.shorthand = false), a;
  }
  parseObjectProperty(e, t, r, i, n) {
    const a = super.parseObjectProperty(e, t, r, i, n);
    return a && (a.kind = "init", a.type = "Property"), a;
  }
  isAssignable(e, t) {
    return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, t) : super.isAssignable(e, t);
  }
  toAssignable(e, t = false) {
    return e != null && this.isObjectProperty(e) ? (this.toAssignable(e.value, t), e) : super.toAssignable(e, t);
  }
  toAssignableObjectExpressionProp(e, ...t) {
    e.kind === "get" || e.kind === "set" ? this.raise(e.key.start, I.PatternHasAccessor) : e.method ? this.raise(e.key.start, I.PatternHasMethod) : super.toAssignableObjectExpressionProp(e, ...t);
  }
  finishCallExpression(e, t) {
    if (super.finishCallExpression(e, t), e.callee.type === "Import") {
      if (e.type = "ImportExpression", e.source = e.arguments[0], this.hasPlugin("importAssertions")) {
        var r;
        e.attributes = (r = e.arguments[1]) != null ? r : null;
      }
      delete e.arguments, delete e.callee;
    }
    return e;
  }
  toReferencedArguments(e) {
    e.type !== "ImportExpression" && super.toReferencedArguments(e);
  }
  parseExport(e) {
    switch (super.parseExport(e), e.type) {
      case "ExportAllDeclaration":
        e.exported = null;
        break;
      case "ExportNamedDeclaration":
        e.specifiers.length === 1 && e.specifiers[0].type === "ExportNamespaceSpecifier" && (e.type = "ExportAllDeclaration", e.exported = e.specifiers[0].exported, delete e.specifiers);
        break;
    }
    return e;
  }
  parseSubscript(e, t, r, i, n) {
    const a = super.parseSubscript(e, t, r, i, n);
    if (n.optionalChainMember) {
      if ((a.type === "OptionalMemberExpression" || a.type === "OptionalCallExpression") && (a.type = a.type.substring(8)), n.stop) {
        const o = this.startNodeAtNode(a);
        return o.expression = a, this.finishNode(o, "ChainExpression");
      }
    } else
      (a.type === "MemberExpression" || a.type === "CallExpression") && (a.optional = false);
    return a;
  }
  hasPropertyAsPrivateName(e) {
    return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
  }
  isOptionalChain(e) {
    return e.type === "ChainExpression";
  }
  isObjectProperty(e) {
    return e.type === "Property" && e.kind === "init" && !e.method;
  }
  isObjectMethod(e) {
    return e.method || e.kind === "get" || e.kind === "set";
  }
};
var pi = class {
  constructor(e, t) {
    this.token = void 0, this.preserveSpace = void 0, this.token = e, this.preserveSpace = !!t;
  }
};
var _e = {
  brace: new pi("{"),
  template: new pi("`", true)
};
var pe = true;
var H = true;
var za = true;
var Bs = true;
var ir = true;
var Ag = true;
var tp = class {
  constructor(e, t = {}) {
    this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.rightAssociative = !!t.rightAssociative, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop != null ? t.binop : null, this.updateContext = null;
  }
};
var Pl = /* @__PURE__ */ new Map();
function ye(s3, e = {}) {
  e.keyword = s3;
  const t = re(s3, e);
  return Pl.set(s3, t), t;
}
function ct(s3, e) {
  return re(s3, {
    beforeExpr: pe,
    binop: e
  });
}
var Ys = -1;
var Ut = [];
var Al = [];
var Cl = [];
var _l = [];
var Il = [];
var kl = [];
function re(s3, e = {}) {
  var t, r, i, n;
  return ++Ys, Al.push(s3), Cl.push((t = e.binop) != null ? t : -1), _l.push((r = e.beforeExpr) != null ? r : false), Il.push((i = e.startsExpr) != null ? i : false), kl.push((n = e.prefix) != null ? n : false), Ut.push(new tp(s3, e)), Ys;
}
function ve(s3, e = {}) {
  var t, r, i, n;
  return ++Ys, Pl.set(s3, Ys), Al.push(s3), Cl.push((t = e.binop) != null ? t : -1), _l.push((r = e.beforeExpr) != null ? r : false), Il.push((i = e.startsExpr) != null ? i : false), kl.push((n = e.prefix) != null ? n : false), Ut.push(new tp("name", e)), Ys;
}
var Cg = {
  bracketL: re("[", {
    beforeExpr: pe,
    startsExpr: H
  }),
  bracketHashL: re("#[", {
    beforeExpr: pe,
    startsExpr: H
  }),
  bracketBarL: re("[|", {
    beforeExpr: pe,
    startsExpr: H
  }),
  bracketR: re("]"),
  bracketBarR: re("|]"),
  braceL: re("{", {
    beforeExpr: pe,
    startsExpr: H
  }),
  braceBarL: re("{|", {
    beforeExpr: pe,
    startsExpr: H
  }),
  braceHashL: re("#{", {
    beforeExpr: pe,
    startsExpr: H
  }),
  braceR: re("}", {
    beforeExpr: pe
  }),
  braceBarR: re("|}"),
  parenL: re("(", {
    beforeExpr: pe,
    startsExpr: H
  }),
  parenR: re(")"),
  comma: re(",", {
    beforeExpr: pe
  }),
  semi: re(";", {
    beforeExpr: pe
  }),
  colon: re(":", {
    beforeExpr: pe
  }),
  doubleColon: re("::", {
    beforeExpr: pe
  }),
  dot: re("."),
  question: re("?", {
    beforeExpr: pe
  }),
  questionDot: re("?."),
  arrow: re("=>", {
    beforeExpr: pe
  }),
  template: re("template"),
  ellipsis: re("...", {
    beforeExpr: pe
  }),
  backQuote: re("`", {
    startsExpr: H
  }),
  dollarBraceL: re("${", {
    beforeExpr: pe,
    startsExpr: H
  }),
  at: re("@"),
  hash: re("#", {
    startsExpr: H
  }),
  interpreterDirective: re("#!..."),
  eq: re("=", {
    beforeExpr: pe,
    isAssign: Bs
  }),
  assign: re("_=", {
    beforeExpr: pe,
    isAssign: Bs
  }),
  slashAssign: re("_=", {
    beforeExpr: pe,
    isAssign: Bs
  }),
  xorAssign: re("_=", {
    beforeExpr: pe,
    isAssign: Bs
  }),
  moduloAssign: re("_=", {
    beforeExpr: pe,
    isAssign: Bs
  }),
  incDec: re("++/--", {
    prefix: ir,
    postfix: Ag,
    startsExpr: H
  }),
  bang: re("!", {
    beforeExpr: pe,
    prefix: ir,
    startsExpr: H
  }),
  tilde: re("~", {
    beforeExpr: pe,
    prefix: ir,
    startsExpr: H
  }),
  pipeline: ct("|>", 0),
  nullishCoalescing: ct("??", 1),
  logicalOR: ct("||", 1),
  logicalAND: ct("&&", 2),
  bitwiseOR: ct("|", 3),
  bitwiseXOR: ct("^", 4),
  bitwiseAND: ct("&", 5),
  equality: ct("==/!=/===/!==", 6),
  lt: ct("</>/<=/>=", 7),
  gt: ct("</>/<=/>=", 7),
  relational: ct("</>/<=/>=", 7),
  bitShift: ct("<</>>/>>>", 8),
  plusMin: re("+/-", {
    beforeExpr: pe,
    binop: 9,
    prefix: ir,
    startsExpr: H
  }),
  modulo: re("%", {
    binop: 10,
    startsExpr: H
  }),
  star: re("*", {
    binop: 10
  }),
  slash: ct("/", 10),
  exponent: re("**", {
    beforeExpr: pe,
    binop: 11,
    rightAssociative: true
  }),
  _in: ye("in", {
    beforeExpr: pe,
    binop: 7
  }),
  _instanceof: ye("instanceof", {
    beforeExpr: pe,
    binop: 7
  }),
  _break: ye("break"),
  _case: ye("case", {
    beforeExpr: pe
  }),
  _catch: ye("catch"),
  _continue: ye("continue"),
  _debugger: ye("debugger"),
  _default: ye("default", {
    beforeExpr: pe
  }),
  _else: ye("else", {
    beforeExpr: pe
  }),
  _finally: ye("finally"),
  _function: ye("function", {
    startsExpr: H
  }),
  _if: ye("if"),
  _return: ye("return", {
    beforeExpr: pe
  }),
  _switch: ye("switch"),
  _throw: ye("throw", {
    beforeExpr: pe,
    prefix: ir,
    startsExpr: H
  }),
  _try: ye("try"),
  _var: ye("var"),
  _const: ye("const"),
  _with: ye("with"),
  _new: ye("new", {
    beforeExpr: pe,
    startsExpr: H
  }),
  _this: ye("this", {
    startsExpr: H
  }),
  _super: ye("super", {
    startsExpr: H
  }),
  _class: ye("class", {
    startsExpr: H
  }),
  _extends: ye("extends", {
    beforeExpr: pe
  }),
  _export: ye("export"),
  _import: ye("import", {
    startsExpr: H
  }),
  _null: ye("null", {
    startsExpr: H
  }),
  _true: ye("true", {
    startsExpr: H
  }),
  _false: ye("false", {
    startsExpr: H
  }),
  _typeof: ye("typeof", {
    beforeExpr: pe,
    prefix: ir,
    startsExpr: H
  }),
  _void: ye("void", {
    beforeExpr: pe,
    prefix: ir,
    startsExpr: H
  }),
  _delete: ye("delete", {
    beforeExpr: pe,
    prefix: ir,
    startsExpr: H
  }),
  _do: ye("do", {
    isLoop: za,
    beforeExpr: pe
  }),
  _for: ye("for", {
    isLoop: za
  }),
  _while: ye("while", {
    isLoop: za
  }),
  _as: ve("as", {
    startsExpr: H
  }),
  _assert: ve("assert", {
    startsExpr: H
  }),
  _async: ve("async", {
    startsExpr: H
  }),
  _await: ve("await", {
    startsExpr: H
  }),
  _from: ve("from", {
    startsExpr: H
  }),
  _get: ve("get", {
    startsExpr: H
  }),
  _let: ve("let", {
    startsExpr: H
  }),
  _meta: ve("meta", {
    startsExpr: H
  }),
  _of: ve("of", {
    startsExpr: H
  }),
  _sent: ve("sent", {
    startsExpr: H
  }),
  _set: ve("set", {
    startsExpr: H
  }),
  _static: ve("static", {
    startsExpr: H
  }),
  _yield: ve("yield", {
    startsExpr: H
  }),
  _asserts: ve("asserts", {
    startsExpr: H
  }),
  _checks: ve("checks", {
    startsExpr: H
  }),
  _exports: ve("exports", {
    startsExpr: H
  }),
  _global: ve("global", {
    startsExpr: H
  }),
  _implements: ve("implements", {
    startsExpr: H
  }),
  _intrinsic: ve("intrinsic", {
    startsExpr: H
  }),
  _infer: ve("infer", {
    startsExpr: H
  }),
  _is: ve("is", {
    startsExpr: H
  }),
  _mixins: ve("mixins", {
    startsExpr: H
  }),
  _proto: ve("proto", {
    startsExpr: H
  }),
  _require: ve("require", {
    startsExpr: H
  }),
  _keyof: ve("keyof", {
    startsExpr: H
  }),
  _readonly: ve("readonly", {
    startsExpr: H
  }),
  _unique: ve("unique", {
    startsExpr: H
  }),
  _abstract: ve("abstract", {
    startsExpr: H
  }),
  _declare: ve("declare", {
    startsExpr: H
  }),
  _enum: ve("enum", {
    startsExpr: H
  }),
  _module: ve("module", {
    startsExpr: H
  }),
  _namespace: ve("namespace", {
    startsExpr: H
  }),
  _interface: ve("interface", {
    startsExpr: H
  }),
  _type: ve("type", {
    startsExpr: H
  }),
  _opaque: ve("opaque", {
    startsExpr: H
  }),
  name: re("name", {
    startsExpr: H
  }),
  string: re("string", {
    startsExpr: H
  }),
  num: re("num", {
    startsExpr: H
  }),
  bigint: re("bigint", {
    startsExpr: H
  }),
  decimal: re("decimal", {
    startsExpr: H
  }),
  regexp: re("regexp", {
    startsExpr: H
  }),
  privateName: re("#name", {
    startsExpr: H
  }),
  eof: re("eof"),
  jsxName: re("jsxName"),
  jsxText: re("jsxText", {
    beforeExpr: true
  }),
  jsxTagStart: re("jsxTagStart", {
    startsExpr: true
  }),
  jsxTagEnd: re("jsxTagEnd"),
  placeholder: re("%%", {
    startsExpr: true
  })
};
function Se(s3) {
  return s3 >= 87 && s3 <= 122;
}
function _g(s3) {
  return s3 <= 86;
}
function Yt(s3) {
  return s3 >= 52 && s3 <= 122;
}
function rp(s3) {
  return s3 >= 52 && s3 <= 126;
}
function Ig(s3) {
  return _l[s3];
}
function ac(s3) {
  return Il[s3];
}
function kg(s3) {
  return s3 >= 27 && s3 <= 31;
}
function oc(s3) {
  return s3 >= 119 && s3 <= 121;
}
function Ng(s3) {
  return s3 >= 84 && s3 <= 86;
}
function Nl(s3) {
  return s3 >= 52 && s3 <= 86;
}
function Og(s3) {
  return s3 >= 35 && s3 <= 53;
}
function Lg(s3) {
  return s3 === 32;
}
function Mg(s3) {
  return kl[s3];
}
function Dg(s3) {
  return s3 >= 111 && s3 <= 113;
}
function Rg(s3) {
  return s3 >= 114 && s3 <= 120;
}
function hr(s3) {
  return Al[s3];
}
function sn(s3) {
  return Cl[s3];
}
function Fg(s3) {
  return s3 === 51;
}
function nn(s3) {
  return Ut[s3];
}
function Bg(s3) {
  return typeof s3 == "number";
}
Ut[8].updateContext = (s3) => {
  s3.pop();
}, Ut[5].updateContext = Ut[7].updateContext = Ut[23].updateContext = (s3) => {
  s3.push(_e.brace);
}, Ut[22].updateContext = (s3) => {
  s3[s3.length - 1] === _e.template ? s3.pop() : s3.push(_e.template);
}, Ut[132].updateContext = (s3) => {
  s3.push(_e.j_expr, _e.j_oTag);
};
var Ol = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var sp = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";
var $g = new RegExp("[" + Ol + "]");
var Ug = new RegExp("[" + Ol + sp + "]");
Ol = sp = null;
var ip = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var jg = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function So(s3, e) {
  let t = 65536;
  for (let r = 0, i = e.length; r < i; r += 2) {
    if (t += e[r], t > s3)
      return false;
    if (t += e[r + 1], t >= s3)
      return true;
  }
  return false;
}
function lr(s3) {
  return s3 < 65 ? s3 === 36 : s3 <= 90 ? true : s3 < 97 ? s3 === 95 : s3 <= 122 ? true : s3 <= 65535 ? s3 >= 170 && $g.test(String.fromCharCode(s3)) : So(s3, ip);
}
function Zr(s3) {
  return s3 < 48 ? s3 === 36 : s3 < 58 ? true : s3 < 65 ? false : s3 <= 90 ? true : s3 < 97 ? s3 === 95 : s3 <= 122 ? true : s3 <= 65535 ? s3 >= 170 && Ug.test(String.fromCharCode(s3)) : So(s3, ip) || So(s3, jg);
}
var Ll = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
var qg = new Set(Ll.keyword);
var Vg = new Set(Ll.strict);
var zg = new Set(Ll.strictBind);
function np(s3, e) {
  return e && s3 === "await" || s3 === "enum";
}
function ap(s3, e) {
  return np(s3, e) || Vg.has(s3);
}
function op(s3) {
  return zg.has(s3);
}
function lp(s3, e) {
  return ap(s3, e) || op(s3);
}
function Gg(s3) {
  return qg.has(s3);
}
function Wg(s3, e) {
  return s3 === 64 && e === 64;
}
var Hg = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
function Kg(s3) {
  return Hg.has(s3);
}
var Jr = 0;
var Js = 1;
var qt = 2;
var Ml = 4;
var up = 8;
var Tn = 16;
var cp = 32;
var Pr = 64;
var hp = 128;
var an = 256;
var ji = Js | qt | an;
var Qt = 1;
var cs = 2;
var pp = 4;
var es = 8;
var on = 16;
var fp = 64;
var Pn = 128;
var wo = 256;
var Eo = 512;
var Dl = 1024;
var xo = 2048;
var dp = Qt | cs | es | Pn;
var gt = Qt | 0 | es | 0;
var An = Qt | 0 | pp | 0;
var mp = Qt | 0 | on | 0;
var Yg = 0 | cs | 0 | Pn;
var Jg = 0 | cs | 0 | 0;
var gp = Qt | cs | es | wo;
var lc = 0 | Dl;
var $s = 0 | fp;
var Qg = Qt | 0 | 0 | fp;
var Xg = gp | Eo;
var Zg = 0 | Dl;
var ey = xo;
var Cn = 4;
var Rl = 2;
var Fl = 1;
var Ga = Rl | Fl;
var ty = Rl | Cn;
var ry = Fl | Cn;
var sy = Rl;
var iy = Fl;
var uc = 0;
var Bl = class {
  constructor(e) {
    this.var = /* @__PURE__ */ new Set(), this.lexical = /* @__PURE__ */ new Set(), this.functions = /* @__PURE__ */ new Set(), this.flags = e;
  }
};
var $l = class {
  constructor(e, t) {
    this.scopeStack = [], this.undefinedExports = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.raise = e, this.inModule = t;
  }
  get inFunction() {
    return (this.currentVarScopeFlags() & qt) > 0;
  }
  get allowSuper() {
    return (this.currentThisScopeFlags() & Tn) > 0;
  }
  get allowDirectSuper() {
    return (this.currentThisScopeFlags() & cp) > 0;
  }
  get inClass() {
    return (this.currentThisScopeFlags() & Pr) > 0;
  }
  get inClassAndNotInNonArrowFunction() {
    const e = this.currentThisScopeFlags();
    return (e & Pr) > 0 && (e & qt) === 0;
  }
  get inStaticBlock() {
    for (let e = this.scopeStack.length - 1; ; e--) {
      const {
        flags: t
      } = this.scopeStack[e];
      if (t & hp)
        return true;
      if (t & (ji | Pr))
        return false;
    }
  }
  get inNonArrowFunction() {
    return (this.currentThisScopeFlags() & qt) > 0;
  }
  get treatFunctionsAsVar() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }
  createScope(e) {
    return new Bl(e);
  }
  enter(e) {
    this.scopeStack.push(this.createScope(e));
  }
  exit() {
    this.scopeStack.pop();
  }
  treatFunctionsAsVarInScope(e) {
    return !!(e.flags & qt || !this.inModule && e.flags & Js);
  }
  declareName(e, t, r) {
    let i = this.currentScope();
    if (t & es || t & on)
      this.checkRedeclarationInScope(i, e, t, r), t & on ? i.functions.add(e) : i.lexical.add(e), t & es && this.maybeExportDefined(i, e);
    else if (t & pp)
      for (let n = this.scopeStack.length - 1; n >= 0 && (i = this.scopeStack[n], this.checkRedeclarationInScope(i, e, t, r), i.var.add(e), this.maybeExportDefined(i, e), !(i.flags & ji)); --n)
        ;
    this.inModule && i.flags & Js && this.undefinedExports.delete(e);
  }
  maybeExportDefined(e, t) {
    this.inModule && e.flags & Js && this.undefinedExports.delete(t);
  }
  checkRedeclarationInScope(e, t, r, i) {
    this.isRedeclaredInScope(e, t, r) && this.raise(i, I.VarRedeclaration, t);
  }
  isRedeclaredInScope(e, t, r) {
    return r & Qt ? r & es ? e.lexical.has(t) || e.functions.has(t) || e.var.has(t) : r & on ? e.lexical.has(t) || !this.treatFunctionsAsVarInScope(e) && e.var.has(t) : e.lexical.has(t) && !(e.flags & up && e.lexical.values().next().value === t) || !this.treatFunctionsAsVarInScope(e) && e.functions.has(t) : false;
  }
  checkLocalExport(e) {
    const {
      name: t
    } = e, r = this.scopeStack[0];
    !r.lexical.has(t) && !r.var.has(t) && !r.functions.has(t) && this.undefinedExports.set(t, e.start);
  }
  currentScope() {
    return this.scopeStack[this.scopeStack.length - 1];
  }
  currentVarScopeFlags() {
    for (let e = this.scopeStack.length - 1; ; e--) {
      const {
        flags: t
      } = this.scopeStack[e];
      if (t & ji)
        return t;
    }
  }
  currentThisScopeFlags() {
    for (let e = this.scopeStack.length - 1; ; e--) {
      const {
        flags: t
      } = this.scopeStack[e];
      if (t & (ji | Pr) && !(t & Ml))
        return t;
    }
  }
};
var ny = class extends Bl {
  constructor(...e) {
    super(...e), this.declareFunctions = /* @__PURE__ */ new Set();
  }
};
var ay = class extends $l {
  createScope(e) {
    return new ny(e);
  }
  declareName(e, t, r) {
    const i = this.currentScope();
    if (t & xo) {
      this.checkRedeclarationInScope(i, e, t, r), this.maybeExportDefined(i, e), i.declareFunctions.add(e);
      return;
    }
    super.declareName(...arguments);
  }
  isRedeclaredInScope(e, t, r) {
    return super.isRedeclaredInScope(...arguments) ? true : r & xo ? !e.declareFunctions.has(t) && (e.lexical.has(t) || e.functions.has(t)) : false;
  }
  checkLocalExport(e) {
    this.scopeStack[0].declareFunctions.has(e.name) || super.checkLocalExport(e);
  }
};
var Ul = class _Ul {
  constructor() {
    this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = false, this.inType = false, this.noAnonFunctionType = false, this.hasFlowComment = false, this.isAmbientContext = false, this.inAbstractClass = false, this.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    }, this.soloAwait = false, this.inFSharpPipelineDirectBody = false, this.labels = [], this.decoratorStack = [[]], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 129, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.lastTokEnd = 0, this.context = [_e.brace], this.canStartJSXElement = true, this.containsEsc = false, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
  }
  init({
    strictMode: e,
    sourceType: t,
    startLine: r,
    startColumn: i
  }) {
    this.strict = e === false ? false : e === true ? true : t === "module", this.curLine = r, this.lineStart = -i, this.startLoc = this.endLoc = new ci(r, i);
  }
  curPosition() {
    return new ci(this.curLine, this.pos - this.lineStart);
  }
  clone(e) {
    const t = new _Ul(), r = Object.keys(this);
    for (let i = 0, n = r.length; i < n; i++) {
      const a = r[i];
      let o = this[a];
      !e && Array.isArray(o) && (o = o.slice()), t[a] = o;
    }
    return t;
  }
};
var oy = function(e) {
  return e >= 48 && e <= 57;
};
var ly = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100]);
var cc = {
  decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
  hex: [46, 88, 95, 120]
};
var St = {};
St.bin = [48, 49];
St.oct = [...St.bin, 50, 51, 52, 53, 54, 55];
St.dec = [...St.oct, 56, 57];
St.hex = [...St.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
var To = class {
  constructor(e) {
    this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, this.loc = new xn(e.startLoc, e.endLoc);
  }
};
var uy = class extends Tg {
  constructor(e, t) {
    super(), this.isLookahead = void 0, this.tokens = [], this.state = new Ul(), this.state.init(e), this.input = t, this.length = t.length, this.isLookahead = false;
  }
  pushToken(e) {
    this.tokens.length = this.state.tokensLength, this.tokens.push(e), ++this.state.tokensLength;
  }
  next() {
    this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new To(this.state)), this.state.lastTokEnd = this.state.end, this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
  }
  eat(e) {
    return this.match(e) ? (this.next(), true) : false;
  }
  match(e) {
    return this.state.type === e;
  }
  createLookaheadState(e) {
    return {
      pos: e.pos,
      value: null,
      type: e.type,
      start: e.start,
      end: e.end,
      lastTokEnd: e.end,
      context: [this.curContext()],
      inType: e.inType
    };
  }
  lookahead() {
    const e = this.state;
    this.state = this.createLookaheadState(e), this.isLookahead = true, this.nextToken(), this.isLookahead = false;
    const t = this.state;
    return this.state = e, t;
  }
  nextTokenStart() {
    return this.nextTokenStartSince(this.state.pos);
  }
  nextTokenStartSince(e) {
    return Va.lastIndex = e, Va.test(this.input) ? Va.lastIndex : e;
  }
  lookaheadCharCode() {
    return this.input.charCodeAt(this.nextTokenStart());
  }
  codePointAtPos(e) {
    let t = this.input.charCodeAt(e);
    if ((t & 64512) === 55296 && ++e < this.input.length) {
      const r = this.input.charCodeAt(e);
      (r & 64512) === 56320 && (t = 65536 + ((t & 1023) << 10) + (r & 1023));
    }
    return t;
  }
  setStrict(e) {
    this.state.strict = e, e && (this.state.strictErrors.forEach((t, r) => this.raise(r, t)), this.state.strictErrors.clear());
  }
  curContext() {
    return this.state.context[this.state.context.length - 1];
  }
  nextToken() {
    const e = this.curContext();
    if (e.preserveSpace || this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
      this.finishToken(129);
      return;
    }
    e === _e.template ? this.readTmplToken() : this.getTokenFromCode(this.codePointAtPos(this.state.pos));
  }
  skipBlockComment() {
    let e;
    this.isLookahead || (e = this.state.curPosition());
    const t = this.state.pos, r = this.input.indexOf("*/", t + 2);
    if (r === -1)
      throw this.raise(t, I.UnterminatedComment);
    for (this.state.pos = r + 2, Tr.lastIndex = t + 2; Tr.test(this.input) && Tr.lastIndex <= r; )
      ++this.state.curLine, this.state.lineStart = Tr.lastIndex;
    if (this.isLookahead)
      return;
    const i = {
      type: "CommentBlock",
      value: this.input.slice(t + 2, r),
      start: t,
      end: r + 2,
      loc: new xn(e, this.state.curPosition())
    };
    return this.options.tokens && this.pushToken(i), i;
  }
  skipLineComment(e) {
    const t = this.state.pos;
    let r;
    this.isLookahead || (r = this.state.curPosition());
    let i = this.input.charCodeAt(this.state.pos += e);
    if (this.state.pos < this.length)
      for (; !xr(i) && ++this.state.pos < this.length; )
        i = this.input.charCodeAt(this.state.pos);
    if (this.isLookahead)
      return;
    const n = this.state.pos, a = this.input.slice(t + e, n), o = {
      type: "CommentLine",
      value: a,
      start: t,
      end: n,
      loc: new xn(r, this.state.curPosition())
    };
    return this.options.tokens && this.pushToken(o), o;
  }
  skipSpace() {
    const e = this.state.pos, t = [];
    e:
      for (; this.state.pos < this.length; ) {
        const r = this.input.charCodeAt(this.state.pos);
        switch (r) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;
          case 13:
            this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42: {
                const i = this.skipBlockComment();
                i !== void 0 && (this.addComment(i), this.options.attachComment && t.push(i));
                break;
              }
              case 47: {
                const i = this.skipLineComment(2);
                i !== void 0 && (this.addComment(i), this.options.attachComment && t.push(i));
                break;
              }
              default:
                break e;
            }
            break;
          default:
            if (vg(r))
              ++this.state.pos;
            else if (r === 45 && !this.inModule) {
              const i = this.state.pos;
              if (this.input.charCodeAt(i + 1) === 45 && this.input.charCodeAt(i + 2) === 62 && (e === 0 || this.state.lineStart > e)) {
                const n = this.skipLineComment(3);
                n !== void 0 && (this.addComment(n), this.options.attachComment && t.push(n));
              } else
                break e;
            } else if (r === 60 && !this.inModule) {
              const i = this.state.pos;
              if (this.input.charCodeAt(i + 1) === 33 && this.input.charCodeAt(i + 2) === 45 && this.input.charCodeAt(i + 3) === 45) {
                const n = this.skipLineComment(4);
                n !== void 0 && (this.addComment(n), this.options.attachComment && t.push(n));
              } else
                break e;
            } else
              break e;
        }
      }
    if (t.length > 0) {
      const r = this.state.pos, i = {
        start: e,
        end: r,
        comments: t,
        leadingNode: null,
        trailingNode: null,
        containingNode: null
      };
      this.state.commentStack.push(i);
    }
  }
  finishToken(e, t) {
    this.state.end = this.state.pos;
    const r = this.state.type;
    this.state.type = e, this.state.value = t, this.isLookahead || (this.state.endLoc = this.state.curPosition(), this.updateContext(r));
  }
  replaceToken(e) {
    this.state.type = e, this.updateContext();
  }
  readToken_numberSign() {
    if (this.state.pos === 0 && this.readToken_interpreter())
      return;
    const e = this.state.pos + 1, t = this.codePointAtPos(e);
    if (t >= 48 && t <= 57)
      throw this.raise(this.state.pos, I.UnexpectedDigitAfterHash);
    if (t === 123 || t === 91 && this.hasPlugin("recordAndTuple")) {
      if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") !== "hash")
        throw this.raise(this.state.pos, t === 123 ? I.RecordExpressionHashIncorrectStartSyntaxType : I.TupleExpressionHashIncorrectStartSyntaxType);
      this.state.pos += 2, t === 123 ? this.finishToken(7) : this.finishToken(1);
    } else
      lr(t) ? (++this.state.pos, this.finishToken(128, this.readWord1(t))) : t === 92 ? (++this.state.pos, this.finishToken(128, this.readWord1())) : this.finishOp(25, 1);
  }
  readToken_dot() {
    const e = this.input.charCodeAt(this.state.pos + 1);
    if (e >= 48 && e <= 57) {
      this.readNumber(true);
      return;
    }
    e === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
  }
  readToken_slash() {
    this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(29, 2) : this.finishOp(50, 1);
  }
  readToken_interpreter() {
    if (this.state.pos !== 0 || this.length < 2)
      return false;
    let e = this.input.charCodeAt(this.state.pos + 1);
    if (e !== 33)
      return false;
    const t = this.state.pos;
    for (this.state.pos += 1; !xr(e) && ++this.state.pos < this.length; )
      e = this.input.charCodeAt(this.state.pos);
    const r = this.input.slice(t + 2, this.state.pos);
    return this.finishToken(26, r), true;
  }
  readToken_mult_modulo(e) {
    let t = e === 42 ? 49 : 48, r = 1, i = this.input.charCodeAt(this.state.pos + 1);
    e === 42 && i === 42 && (r++, i = this.input.charCodeAt(this.state.pos + 2), t = 51), i === 61 && !this.state.inType && (r++, t = e === 37 ? 31 : 28), this.finishOp(t, r);
  }
  readToken_pipe_amp(e) {
    const t = this.input.charCodeAt(this.state.pos + 1);
    if (t === e) {
      this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(28, 3) : this.finishOp(e === 124 ? 37 : 38, 2);
      return;
    }
    if (e === 124) {
      if (t === 62) {
        this.finishOp(35, 2);
        return;
      }
      if (this.hasPlugin("recordAndTuple") && t === 125) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
          throw this.raise(this.state.pos, I.RecordExpressionBarIncorrectEndSyntaxType);
        this.state.pos += 2, this.finishToken(9);
        return;
      }
      if (this.hasPlugin("recordAndTuple") && t === 93) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
          throw this.raise(this.state.pos, I.TupleExpressionBarIncorrectEndSyntaxType);
        this.state.pos += 2, this.finishToken(4);
        return;
      }
    }
    if (t === 61) {
      this.finishOp(28, 2);
      return;
    }
    this.finishOp(e === 124 ? 39 : 41, 1);
  }
  readToken_caret() {
    this.input.charCodeAt(this.state.pos + 1) === 61 && !this.state.inType ? this.finishOp(30, 2) : this.finishOp(40, 1);
  }
  readToken_plus_min(e) {
    const t = this.input.charCodeAt(this.state.pos + 1);
    if (t === e) {
      this.finishOp(32, 2);
      return;
    }
    t === 61 ? this.finishOp(28, 2) : this.finishOp(47, 1);
  }
  readToken_lt() {
    const {
      pos: e
    } = this.state, t = this.input.charCodeAt(e + 1);
    if (t === 60) {
      if (this.input.charCodeAt(e + 2) === 61) {
        this.finishOp(28, 3);
        return;
      }
      this.finishOp(46, 2);
      return;
    }
    if (t === 61) {
      this.finishOp(45, 2);
      return;
    }
    this.finishOp(43, 1);
  }
  readToken_gt() {
    const {
      pos: e
    } = this.state, t = this.input.charCodeAt(e + 1);
    if (t === 62) {
      const r = this.input.charCodeAt(e + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(e + r) === 61) {
        this.finishOp(28, r + 1);
        return;
      }
      this.finishOp(46, r);
      return;
    }
    if (t === 61) {
      this.finishOp(45, 2);
      return;
    }
    this.finishOp(44, 1);
  }
  readToken_eq_excl(e) {
    const t = this.input.charCodeAt(this.state.pos + 1);
    if (t === 61) {
      this.finishOp(42, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
      return;
    }
    if (e === 61 && t === 62) {
      this.state.pos += 2, this.finishToken(19);
      return;
    }
    this.finishOp(e === 61 ? 27 : 33, 1);
  }
  readToken_question() {
    const e = this.input.charCodeAt(this.state.pos + 1), t = this.input.charCodeAt(this.state.pos + 2);
    e === 63 ? t === 61 ? this.finishOp(28, 3) : this.finishOp(36, 2) : e === 46 && !(t >= 48 && t <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
  }
  getTokenFromCode(e) {
    switch (e) {
      case 46:
        this.readToken_dot();
        return;
      case 40:
        ++this.state.pos, this.finishToken(10);
        return;
      case 41:
        ++this.state.pos, this.finishToken(11);
        return;
      case 59:
        ++this.state.pos, this.finishToken(13);
        return;
      case 44:
        ++this.state.pos, this.finishToken(12);
        return;
      case 91:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(this.state.pos, I.TupleExpressionBarIncorrectStartSyntaxType);
          this.state.pos += 2, this.finishToken(2);
        } else
          ++this.state.pos, this.finishToken(0);
        return;
      case 93:
        ++this.state.pos, this.finishToken(3);
        return;
      case 123:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(this.state.pos, I.RecordExpressionBarIncorrectStartSyntaxType);
          this.state.pos += 2, this.finishToken(6);
        } else
          ++this.state.pos, this.finishToken(5);
        return;
      case 125:
        ++this.state.pos, this.finishToken(8);
        return;
      case 58:
        this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
        return;
      case 63:
        this.readToken_question();
        return;
      case 96:
        ++this.state.pos, this.finishToken(22);
        return;
      case 48: {
        const t = this.input.charCodeAt(this.state.pos + 1);
        if (t === 120 || t === 88) {
          this.readRadixNumber(16);
          return;
        }
        if (t === 111 || t === 79) {
          this.readRadixNumber(8);
          return;
        }
        if (t === 98 || t === 66) {
          this.readRadixNumber(2);
          return;
        }
      }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        this.readNumber(false);
        return;
      case 34:
      case 39:
        this.readString(e);
        return;
      case 47:
        this.readToken_slash();
        return;
      case 37:
      case 42:
        this.readToken_mult_modulo(e);
        return;
      case 124:
      case 38:
        this.readToken_pipe_amp(e);
        return;
      case 94:
        this.readToken_caret();
        return;
      case 43:
      case 45:
        this.readToken_plus_min(e);
        return;
      case 60:
        this.readToken_lt();
        return;
      case 62:
        this.readToken_gt();
        return;
      case 61:
      case 33:
        this.readToken_eq_excl(e);
        return;
      case 126:
        this.finishOp(34, 1);
        return;
      case 64:
        ++this.state.pos, this.finishToken(24);
        return;
      case 35:
        this.readToken_numberSign();
        return;
      case 92:
        this.readWord();
        return;
      default:
        if (lr(e)) {
          this.readWord(e);
          return;
        }
    }
    throw this.raise(this.state.pos, I.InvalidOrUnexpectedToken, String.fromCodePoint(e));
  }
  finishOp(e, t) {
    const r = this.input.slice(this.state.pos, this.state.pos + t);
    this.state.pos += t, this.finishToken(e, r);
  }
  readRegexp() {
    const e = this.state.start + 1;
    let t, r, {
      pos: i
    } = this.state;
    for (; ; ++i) {
      if (i >= this.length)
        throw this.raise(e, I.UnterminatedRegExp);
      const o = this.input.charCodeAt(i);
      if (xr(o))
        throw this.raise(e, I.UnterminatedRegExp);
      if (t)
        t = false;
      else {
        if (o === 91)
          r = true;
        else if (o === 93 && r)
          r = false;
        else if (o === 47 && !r)
          break;
        t = o === 92;
      }
    }
    const n = this.input.slice(e, i);
    ++i;
    let a = "";
    for (; i < this.length; ) {
      const o = this.codePointAtPos(i), l = String.fromCharCode(o);
      if (ly.has(o))
        a.includes(l) && this.raise(i + 1, I.DuplicateRegExpFlags);
      else if (Zr(o) || o === 92)
        this.raise(i + 1, I.MalformedRegExpFlags);
      else
        break;
      ++i, a += l;
    }
    this.state.pos = i, this.finishToken(127, {
      pattern: n,
      flags: a
    });
  }
  readInt(e, t, r, i = true) {
    const n = this.state.pos, a = e === 16 ? cc.hex : cc.decBinOct, o = e === 16 ? St.hex : e === 10 ? St.dec : e === 8 ? St.oct : St.bin;
    let l = false, u = 0;
    for (let c = 0, h = t == null ? 1 / 0 : t; c < h; ++c) {
      const p = this.input.charCodeAt(this.state.pos);
      let f;
      if (p === 95) {
        const g = this.input.charCodeAt(this.state.pos - 1), d = this.input.charCodeAt(this.state.pos + 1);
        o.indexOf(d) === -1 ? this.raise(this.state.pos, I.UnexpectedNumericSeparator) : (a.indexOf(g) > -1 || a.indexOf(d) > -1 || Number.isNaN(d)) && this.raise(this.state.pos, I.UnexpectedNumericSeparator), i || this.raise(this.state.pos, I.NumericSeparatorInEscapeSequence), ++this.state.pos;
        continue;
      }
      if (p >= 97 ? f = p - 97 + 10 : p >= 65 ? f = p - 65 + 10 : oy(p) ? f = p - 48 : f = 1 / 0, f >= e)
        if (this.options.errorRecovery && f <= 9)
          f = 0, this.raise(this.state.start + c + 2, I.InvalidDigit, e);
        else if (r)
          f = 0, l = true;
        else
          break;
      ++this.state.pos, u = u * e + f;
    }
    return this.state.pos === n || t != null && this.state.pos - n !== t || l ? null : u;
  }
  readRadixNumber(e) {
    const t = this.state.pos;
    let r = false;
    this.state.pos += 2;
    const i = this.readInt(e);
    i == null && this.raise(this.state.start + 2, I.InvalidDigit, e);
    const n = this.input.charCodeAt(this.state.pos);
    if (n === 110)
      ++this.state.pos, r = true;
    else if (n === 109)
      throw this.raise(t, I.InvalidDecimal);
    if (lr(this.codePointAtPos(this.state.pos)))
      throw this.raise(this.state.pos, I.NumberIdentifier);
    if (r) {
      const a = this.input.slice(t, this.state.pos).replace(/[_n]/g, "");
      this.finishToken(125, a);
      return;
    }
    this.finishToken(124, i);
  }
  readNumber(e) {
    const t = this.state.pos;
    let r = false, i = false, n = false, a = false, o = false;
    !e && this.readInt(10) === null && this.raise(t, I.InvalidNumber);
    const l = this.state.pos - t >= 2 && this.input.charCodeAt(t) === 48;
    if (l) {
      const p = this.input.slice(t, this.state.pos);
      if (this.recordStrictModeErrors(t, I.StrictOctalLiteral), !this.state.strict) {
        const f = p.indexOf("_");
        f > 0 && this.raise(f + t, I.ZeroDigitNumericSeparator);
      }
      o = l && !/[89]/.test(p);
    }
    let u = this.input.charCodeAt(this.state.pos);
    if (u === 46 && !o && (++this.state.pos, this.readInt(10), r = true, u = this.input.charCodeAt(this.state.pos)), (u === 69 || u === 101) && !o && (u = this.input.charCodeAt(++this.state.pos), (u === 43 || u === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(t, I.InvalidOrMissingExponent), r = true, a = true, u = this.input.charCodeAt(this.state.pos)), u === 110 && ((r || l) && this.raise(t, I.InvalidBigIntLiteral), ++this.state.pos, i = true), u === 109 && (this.expectPlugin("decimal", this.state.pos), (a || l) && this.raise(t, I.InvalidDecimal), ++this.state.pos, n = true), lr(this.codePointAtPos(this.state.pos)))
      throw this.raise(this.state.pos, I.NumberIdentifier);
    const c = this.input.slice(t, this.state.pos).replace(/[_mn]/g, "");
    if (i) {
      this.finishToken(125, c);
      return;
    }
    if (n) {
      this.finishToken(126, c);
      return;
    }
    const h = o ? parseInt(c, 8) : parseFloat(c);
    this.finishToken(124, h);
  }
  readCodePoint(e) {
    const t = this.input.charCodeAt(this.state.pos);
    let r;
    if (t === 123) {
      const i = ++this.state.pos;
      if (r = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, e), ++this.state.pos, r !== null && r > 1114111)
        if (e)
          this.raise(i, I.InvalidCodePoint);
        else
          return null;
    } else
      r = this.readHexChar(4, false, e);
    return r;
  }
  readString(e) {
    let t = "", r = ++this.state.pos;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, I.UnterminatedString);
      const i = this.input.charCodeAt(this.state.pos);
      if (i === e)
        break;
      if (i === 92)
        t += this.input.slice(r, this.state.pos), t += this.readEscapedChar(false), r = this.state.pos;
      else if (i === 8232 || i === 8233)
        ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
      else {
        if (xr(i))
          throw this.raise(this.state.start, I.UnterminatedString);
        ++this.state.pos;
      }
    }
    t += this.input.slice(r, this.state.pos++), this.finishToken(123, t);
  }
  readTmplToken() {
    let e = "", t = this.state.pos, r = false;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, I.UnterminatedTemplate);
      const i = this.input.charCodeAt(this.state.pos);
      if (i === 96 || i === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
        if (this.state.pos === this.state.start && this.match(20))
          if (i === 36) {
            this.state.pos += 2, this.finishToken(23);
            return;
          } else {
            ++this.state.pos, this.finishToken(22);
            return;
          }
        e += this.input.slice(t, this.state.pos), this.finishToken(20, r ? null : e);
        return;
      }
      if (i === 92) {
        e += this.input.slice(t, this.state.pos);
        const n = this.readEscapedChar(true);
        n === null ? r = true : e += n, t = this.state.pos;
      } else if (xr(i)) {
        switch (e += this.input.slice(t, this.state.pos), ++this.state.pos, i) {
          case 13:
            this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;
          case 10:
            e += `
`;
            break;
          default:
            e += String.fromCharCode(i);
            break;
        }
        ++this.state.curLine, this.state.lineStart = this.state.pos, t = this.state.pos;
      } else
        ++this.state.pos;
    }
  }
  recordStrictModeErrors(e, t) {
    this.state.strict && !this.state.strictErrors.has(e) ? this.raise(e, t) : this.state.strictErrors.set(e, t);
  }
  readEscapedChar(e) {
    const t = !e, r = this.input.charCodeAt(++this.state.pos);
    switch (++this.state.pos, r) {
      case 110:
        return `
`;
      case 114:
        return "\r";
      case 120: {
        const i = this.readHexChar(2, false, t);
        return i === null ? null : String.fromCharCode(i);
      }
      case 117: {
        const i = this.readCodePoint(t);
        return i === null ? null : String.fromCodePoint(i);
      }
      case 116:
        return "	";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;
      case 10:
        this.state.lineStart = this.state.pos, ++this.state.curLine;
      case 8232:
      case 8233:
        return "";
      case 56:
      case 57:
        if (e)
          return null;
        this.recordStrictModeErrors(this.state.pos - 1, I.StrictNumericEscape);
      default:
        if (r >= 48 && r <= 55) {
          const i = this.state.pos - 1;
          let a = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0], o = parseInt(a, 8);
          o > 255 && (a = a.slice(0, -1), o = parseInt(a, 8)), this.state.pos += a.length - 1;
          const l = this.input.charCodeAt(this.state.pos);
          if (a !== "0" || l === 56 || l === 57) {
            if (e)
              return null;
            this.recordStrictModeErrors(i, I.StrictNumericEscape);
          }
          return String.fromCharCode(o);
        }
        return String.fromCharCode(r);
    }
  }
  readHexChar(e, t, r) {
    const i = this.state.pos, n = this.readInt(16, e, t, false);
    return n === null && (r ? this.raise(i, I.InvalidEscapeSequence) : this.state.pos = i - 1), n;
  }
  readWord1(e) {
    this.state.containsEsc = false;
    let t = "";
    const r = this.state.pos;
    let i = this.state.pos;
    for (e !== void 0 && (this.state.pos += e <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
      const n = this.codePointAtPos(this.state.pos);
      if (Zr(n))
        this.state.pos += n <= 65535 ? 1 : 2;
      else if (n === 92) {
        this.state.containsEsc = true, t += this.input.slice(i, this.state.pos);
        const a = this.state.pos, o = this.state.pos === r ? lr : Zr;
        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          this.raise(this.state.pos, I.MissingUnicodeEscape), i = this.state.pos - 1;
          continue;
        }
        ++this.state.pos;
        const l = this.readCodePoint(true);
        l !== null && (o(l) || this.raise(a, I.EscapedCharNotAnIdentifier), t += String.fromCodePoint(l)), i = this.state.pos;
      } else
        break;
    }
    return t + this.input.slice(i, this.state.pos);
  }
  readWord(e) {
    const t = this.readWord1(e), r = Pl.get(t);
    r !== void 0 ? this.finishToken(r, hr(r)) : this.finishToken(122, t);
  }
  checkKeywordEscapes() {
    const {
      type: e
    } = this.state;
    Nl(e) && this.state.containsEsc && this.raise(this.state.start, I.InvalidEscapedReservedWord, hr(e));
  }
  updateContext(e) {
    const {
      context: t,
      type: r
    } = this.state;
    switch (r) {
      case 8:
        t.pop();
        break;
      case 5:
      case 7:
      case 23:
        t.push(_e.brace);
        break;
      case 22:
        t[t.length - 1] === _e.template ? t.pop() : t.push(_e.template);
        break;
    }
  }
};
var cy = class {
  constructor() {
    this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
  }
};
var hy = class {
  constructor(e) {
    this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.raise = e;
  }
  current() {
    return this.stack[this.stack.length - 1];
  }
  enter() {
    this.stack.push(new cy());
  }
  exit() {
    const e = this.stack.pop(), t = this.current();
    for (const [r, i] of Array.from(e.undefinedPrivateNames))
      t ? t.undefinedPrivateNames.has(r) || t.undefinedPrivateNames.set(r, i) : this.raise(i, I.InvalidPrivateFieldResolution, r);
  }
  declarePrivateName(e, t, r) {
    const i = this.current();
    let n = i.privateNames.has(e);
    if (t & Ga) {
      const a = n && i.loneAccessors.get(e);
      if (a) {
        const o = a & Cn, l = t & Cn, u = a & Ga, c = t & Ga;
        n = u === c || o !== l, n || i.loneAccessors.delete(e);
      } else
        n || i.loneAccessors.set(e, t);
    }
    n && this.raise(r, I.PrivateNameRedeclaration, e), i.privateNames.add(e), i.undefinedPrivateNames.delete(e);
  }
  usePrivateName(e, t) {
    let r;
    for (r of this.stack)
      if (r.privateNames.has(e))
        return;
    r ? r.undefinedPrivateNames.set(e, t) : this.raise(t, I.InvalidPrivateFieldResolution, e);
  }
};
var py = 0;
var yp = 1;
var jl = 2;
var vp = 3;
var oa = class {
  constructor(e = py) {
    this.type = void 0, this.type = e;
  }
  canBeArrowParameterDeclaration() {
    return this.type === jl || this.type === yp;
  }
  isCertainlyParameterDeclaration() {
    return this.type === vp;
  }
};
var bp = class extends oa {
  constructor(e) {
    super(e), this.errors = /* @__PURE__ */ new Map();
  }
  recordDeclarationError(e, t) {
    this.errors.set(e, t);
  }
  clearDeclarationError(e) {
    this.errors.delete(e);
  }
  iterateErrors(e) {
    this.errors.forEach(e);
  }
};
var fy = class {
  constructor(e) {
    this.stack = [new oa()], this.raise = e;
  }
  enter(e) {
    this.stack.push(e);
  }
  exit() {
    this.stack.pop();
  }
  recordParameterInitializerError(e, t) {
    const {
      stack: r
    } = this;
    let i = r.length - 1, n = r[i];
    for (; !n.isCertainlyParameterDeclaration(); ) {
      if (n.canBeArrowParameterDeclaration())
        n.recordDeclarationError(e, t);
      else
        return;
      n = r[--i];
    }
    this.raise(e, t);
  }
  recordParenthesizedIdentifierError(e, t) {
    const {
      stack: r
    } = this, i = r[r.length - 1];
    if (i.isCertainlyParameterDeclaration())
      this.raise(e, t);
    else if (i.canBeArrowParameterDeclaration())
      i.recordDeclarationError(e, t);
    else
      return;
  }
  recordAsyncArrowParametersError(e, t) {
    const {
      stack: r
    } = this;
    let i = r.length - 1, n = r[i];
    for (; n.canBeArrowParameterDeclaration(); )
      n.type === jl && n.recordDeclarationError(e, t), n = r[--i];
  }
  validateAsPattern() {
    const {
      stack: e
    } = this, t = e[e.length - 1];
    !t.canBeArrowParameterDeclaration() || t.iterateErrors((r, i) => {
      this.raise(i, r);
      let n = e.length - 2, a = e[n];
      for (; a.canBeArrowParameterDeclaration(); )
        a.clearDeclarationError(i), a = e[--n];
    });
  }
};
function dy() {
  return new oa(vp);
}
function my() {
  return new bp(yp);
}
function gy() {
  return new bp(jl);
}
function Sp() {
  return new oa();
}
var ts = 0;
var wp = 1;
var la = 2;
var Ep = 4;
var Gr = 8;
var yy = class {
  constructor() {
    this.stacks = [];
  }
  enter(e) {
    this.stacks.push(e);
  }
  exit() {
    this.stacks.pop();
  }
  currentFlags() {
    return this.stacks[this.stacks.length - 1];
  }
  get hasAwait() {
    return (this.currentFlags() & la) > 0;
  }
  get hasYield() {
    return (this.currentFlags() & wp) > 0;
  }
  get hasReturn() {
    return (this.currentFlags() & Ep) > 0;
  }
  get hasIn() {
    return (this.currentFlags() & Gr) > 0;
  }
};
function ln(s3, e) {
  return (s3 ? la : 0) | (e ? wp : 0);
}
var vy = class extends uy {
  addExtra(e, t, r) {
    if (!e)
      return;
    const i = e.extra = e.extra || {};
    i[t] = r;
  }
  isContextual(e) {
    return this.state.type === e && !this.state.containsEsc;
  }
  isUnparsedContextual(e, t) {
    const r = e + t.length;
    if (this.input.slice(e, r) === t) {
      const i = this.input.charCodeAt(r);
      return !(Zr(i) || (i & 64512) === 55296);
    }
    return false;
  }
  isLookaheadContextual(e) {
    const t = this.nextTokenStart();
    return this.isUnparsedContextual(t, e);
  }
  eatContextual(e) {
    return this.isContextual(e) ? (this.next(), true) : false;
  }
  expectContextual(e, t) {
    this.eatContextual(e) || this.unexpected(null, t);
  }
  canInsertSemicolon() {
    return this.match(129) || this.match(8) || this.hasPrecedingLineBreak();
  }
  hasPrecedingLineBreak() {
    return Tl.test(this.input.slice(this.state.lastTokEnd, this.state.start));
  }
  hasFollowingLineBreak() {
    return nc.lastIndex = this.state.end, nc.test(this.input);
  }
  isLineTerminator() {
    return this.eat(13) || this.canInsertSemicolon();
  }
  semicolon(e = true) {
    (e ? this.isLineTerminator() : this.eat(13)) || this.raise(this.state.lastTokEnd, I.MissingSemicolon);
  }
  expect(e, t) {
    this.eat(e) || this.unexpected(t, e);
  }
  assertNoSpace(e = "Unexpected space.") {
    this.state.start > this.state.lastTokEnd && this.raise(this.state.lastTokEnd, {
      code: Kt.SyntaxError,
      reasonCode: "UnexpectedSpace",
      template: e
    });
  }
  unexpected(e, t = {
    code: Kt.SyntaxError,
    reasonCode: "UnexpectedToken",
    template: "Unexpected token"
  }) {
    throw Bg(t) && (t = {
      code: Kt.SyntaxError,
      reasonCode: "UnexpectedToken",
      template: `Unexpected token, expected "${hr(t)}"`
    }), this.raise(e != null ? e : this.state.start, t);
  }
  expectPlugin(e, t) {
    if (!this.hasPlugin(e))
      throw this.raiseWithData(t != null ? t : this.state.start, {
        missingPlugin: [e]
      }, `This experimental syntax requires enabling the parser plugin: '${e}'`);
    return true;
  }
  expectOnePlugin(e, t) {
    if (!e.some((r) => this.hasPlugin(r)))
      throw this.raiseWithData(t != null ? t : this.state.start, {
        missingPlugin: e
      }, `This experimental syntax requires enabling one of the following parser plugin(s): '${e.join(", ")}'`);
  }
  tryParse(e, t = this.state.clone()) {
    const r = {
      node: null
    };
    try {
      const i = e((n = null) => {
        throw r.node = n, r;
      });
      if (this.state.errors.length > t.errors.length) {
        const n = this.state;
        return this.state = t, this.state.tokensLength = n.tokensLength, {
          node: i,
          error: n.errors[t.errors.length],
          thrown: false,
          aborted: false,
          failState: n
        };
      }
      return {
        node: i,
        error: null,
        thrown: false,
        aborted: false,
        failState: null
      };
    } catch (i) {
      const n = this.state;
      if (this.state = t, i instanceof SyntaxError)
        return {
          node: null,
          error: i,
          thrown: true,
          aborted: false,
          failState: n
        };
      if (i === r)
        return {
          node: r.node,
          error: null,
          thrown: false,
          aborted: true,
          failState: n
        };
      throw i;
    }
  }
  checkExpressionErrors(e, t) {
    if (!e)
      return false;
    const {
      shorthandAssign: r,
      doubleProto: i,
      optionalParameters: n
    } = e, a = r + i + n > -3;
    if (t)
      a && (r >= 0 && this.unexpected(r), i >= 0 && this.raise(i, I.DuplicateProto), n >= 0 && this.unexpected(n));
    else
      return a;
  }
  isLiteralPropertyName() {
    return rp(this.state.type);
  }
  isPrivateName(e) {
    return e.type === "PrivateName";
  }
  getPrivateNameSV(e) {
    return e.id.name;
  }
  hasPropertyAsPrivateName(e) {
    return (e.type === "MemberExpression" || e.type === "OptionalMemberExpression") && this.isPrivateName(e.property);
  }
  isOptionalChain(e) {
    return e.type === "OptionalMemberExpression" || e.type === "OptionalCallExpression";
  }
  isObjectProperty(e) {
    return e.type === "ObjectProperty";
  }
  isObjectMethod(e) {
    return e.type === "ObjectMethod";
  }
  initializeScopes(e = this.options.sourceType === "module") {
    const t = this.state.labels;
    this.state.labels = [];
    const r = this.exportedIdentifiers;
    this.exportedIdentifiers = /* @__PURE__ */ new Set();
    const i = this.inModule;
    this.inModule = e;
    const n = this.scope, a = this.getScopeHandler();
    this.scope = new a(this.raise.bind(this), this.inModule);
    const o = this.prodParam;
    this.prodParam = new yy();
    const l = this.classScope;
    this.classScope = new hy(this.raise.bind(this));
    const u = this.expressionScope;
    return this.expressionScope = new fy(this.raise.bind(this)), () => {
      this.state.labels = t, this.exportedIdentifiers = r, this.inModule = i, this.scope = n, this.prodParam = o, this.classScope = l, this.expressionScope = u;
    };
  }
  enterInitialScopes() {
    let e = ts;
    this.inModule && (e |= la), this.scope.enter(Js), this.prodParam.enter(e);
  }
};
var un = class {
  constructor() {
    this.shorthandAssign = -1, this.doubleProto = -1, this.optionalParameters = -1;
  }
};
var _n = class {
  constructor(e, t, r) {
    this.type = "", this.start = t, this.end = 0, this.loc = new xn(r), e != null && e.options.ranges && (this.range = [t, 0]), e != null && e.filename && (this.loc.filename = e.filename);
  }
};
var ql = _n.prototype;
ql.__clone = function() {
  const s3 = new _n(), e = Object.keys(this);
  for (let t = 0, r = e.length; t < r; t++) {
    const i = e[t];
    i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (s3[i] = this[i]);
  }
  return s3;
};
function by(s3) {
  return Jt(s3);
}
function Jt(s3) {
  const {
    type: e,
    start: t,
    end: r,
    loc: i,
    range: n,
    extra: a,
    name: o
  } = s3, l = Object.create(ql);
  return l.type = e, l.start = t, l.end = r, l.loc = i, l.range = n, l.extra = a, l.name = o, e === "Placeholder" && (l.expectedNode = s3.expectedNode), l;
}
function Sy(s3) {
  const {
    type: e,
    start: t,
    end: r,
    loc: i,
    range: n,
    extra: a
  } = s3;
  if (e === "Placeholder")
    return by(s3);
  const o = Object.create(ql);
  return o.type = "StringLiteral", o.start = t, o.end = r, o.loc = i, o.range = n, o.extra = a, o.value = s3.value, o;
}
var wy = class extends vy {
  startNode() {
    return new _n(this, this.state.start, this.state.startLoc);
  }
  startNodeAt(e, t) {
    return new _n(this, e, t);
  }
  startNodeAtNode(e) {
    return this.startNodeAt(e.start, e.loc.start);
  }
  finishNode(e, t) {
    return this.finishNodeAt(e, t, this.state.lastTokEnd, this.state.lastTokEndLoc);
  }
  finishNodeAt(e, t, r, i) {
    return e.type = t, e.end = r, e.loc.end = i, this.options.ranges && (e.range[1] = r), this.options.attachComment && this.processComment(e), e;
  }
  resetStartLocation(e, t, r) {
    e.start = t, e.loc.start = r, this.options.ranges && (e.range[0] = t);
  }
  resetEndLocation(e, t = this.state.lastTokEnd, r = this.state.lastTokEndLoc) {
    e.end = t, e.loc.end = r, this.options.ranges && (e.range[1] = t);
  }
  resetStartLocationFromNode(e, t) {
    this.resetStartLocation(e, t.start, t.loc.start);
  }
};
var Ey = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
var te = Ts({
  AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
  AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
  AssignReservedType: "Cannot overwrite reserved type %0.",
  DeclareClassElement: "The `declare` modifier can only appear on class fields.",
  DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
  DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
  EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
  EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
  EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
  EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
  EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
  EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
  EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
  EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
  EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
  GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
  ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
  InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
  InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
  InexactVariance: "Explicit inexact syntax cannot have variance.",
  InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
  MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
  NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
  NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
  SpreadVariance: "Spread properties cannot have variance.",
  ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
  ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
  ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
  ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
  ThisParamNoDefault: "The `this` parameter may not have a default value.",
  TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
  UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
  UnexpectedReservedType: "Unexpected reserved type %0.",
  UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
  UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
  UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
  UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
  UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
  UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
  UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead.",
  UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
  UnterminatedFlowComment: "Unterminated flow-comment."
}, Kt.SyntaxError, "flow");
function xy(s3) {
  return s3.type === "DeclareExportAllDeclaration" || s3.type === "DeclareExportDeclaration" && (!s3.declaration || s3.declaration.type !== "TypeAlias" && s3.declaration.type !== "InterfaceDeclaration");
}
function Wa(s3) {
  return s3.importKind === "type" || s3.importKind === "typeof";
}
function hc(s3) {
  return Yt(s3) && s3 !== 91;
}
var Ty = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};
function Py(s3, e) {
  const t = [], r = [];
  for (let i = 0; i < s3.length; i++)
    (e(s3[i], i, s3) ? t : r).push(s3[i]);
  return [t, r];
}
var Ay = /\*?\s*@((?:no)?flow)\b/;
var Cy = (s3) => class extends s3 {
  constructor(...e) {
    super(...e), this.flowPragma = void 0;
  }
  getScopeHandler() {
    return ay;
  }
  shouldParseTypes() {
    return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
  }
  shouldParseEnums() {
    return !!this.getPluginOption("flow", "enums");
  }
  finishToken(e, t) {
    return e !== 123 && e !== 13 && e !== 26 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, t);
  }
  addComment(e) {
    if (this.flowPragma === void 0) {
      const t = Ay.exec(e.value);
      if (t)
        if (t[1] === "flow")
          this.flowPragma = "flow";
        else if (t[1] === "noflow")
          this.flowPragma = "noflow";
        else
          throw new Error("Unexpected flow pragma");
    }
    return super.addComment(e);
  }
  flowParseTypeInitialiser(e) {
    const t = this.state.inType;
    this.state.inType = true, this.expect(e || 14);
    const r = this.flowParseType();
    return this.state.inType = t, r;
  }
  flowParsePredicate() {
    const e = this.startNode(), t = this.state.start;
    return this.next(), this.expectContextual(101), this.state.lastTokStart > t + 1 && this.raise(t, te.UnexpectedSpaceBetweenModuloChecks), this.eat(10) ? (e.value = this.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
  }
  flowParseTypeAndPredicateInitialiser() {
    const e = this.state.inType;
    this.state.inType = true, this.expect(14);
    let t = null, r = null;
    return this.match(48) ? (this.state.inType = e, r = this.flowParsePredicate()) : (t = this.flowParseType(), this.state.inType = e, this.match(48) && (r = this.flowParsePredicate())), [t, r];
  }
  flowParseDeclareClass(e) {
    return this.next(), this.flowParseInterfaceish(e, true), this.finishNode(e, "DeclareClass");
  }
  flowParseDeclareFunction(e) {
    this.next();
    const t = e.id = this.parseIdentifier(), r = this.startNode(), i = this.startNode();
    this.match(43) ? r.typeParameters = this.flowParseTypeParameterDeclaration() : r.typeParameters = null, this.expect(10);
    const n = this.flowParseFunctionTypeParams();
    return r.params = n.params, r.rest = n.rest, r.this = n._this, this.expect(11), [r.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), i.typeAnnotation = this.finishNode(r, "FunctionTypeAnnotation"), t.typeAnnotation = this.finishNode(i, "TypeAnnotation"), this.resetEndLocation(t), this.semicolon(), this.scope.declareName(e.id.name, ey, e.id.start), this.finishNode(e, "DeclareFunction");
  }
  flowParseDeclare(e, t) {
    if (this.match(74))
      return this.flowParseDeclareClass(e);
    if (this.match(62))
      return this.flowParseDeclareFunction(e);
    if (this.match(68))
      return this.flowParseDeclareVariable(e);
    if (this.eatContextual(117))
      return this.match(16) ? this.flowParseDeclareModuleExports(e) : (t && this.raise(this.state.lastTokStart, te.NestedDeclareModule), this.flowParseDeclareModule(e));
    if (this.isContextual(120))
      return this.flowParseDeclareTypeAlias(e);
    if (this.isContextual(121))
      return this.flowParseDeclareOpaqueType(e);
    if (this.isContextual(119))
      return this.flowParseDeclareInterface(e);
    if (this.match(76))
      return this.flowParseDeclareExportDeclaration(e, t);
    throw this.unexpected();
  }
  flowParseDeclareVariable(e) {
    return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(true), this.scope.declareName(e.id.name, An, e.id.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
  }
  flowParseDeclareModule(e) {
    this.scope.enter(Jr), this.match(123) ? e.id = this.parseExprAtom() : e.id = this.parseIdentifier();
    const t = e.body = this.startNode(), r = t.body = [];
    for (this.expect(5); !this.match(8); ) {
      let a = this.startNode();
      this.match(77) ? (this.next(), !this.isContextual(120) && !this.match(81) && this.raise(this.state.lastTokStart, te.InvalidNonTypeImportInDeclareModule), this.parseImport(a)) : (this.expectContextual(115, te.UnsupportedStatementInDeclareModule), a = this.flowParseDeclare(a, true)), r.push(a);
    }
    this.scope.exit(), this.expect(8), this.finishNode(t, "BlockStatement");
    let i = null, n = false;
    return r.forEach((a) => {
      xy(a) ? (i === "CommonJS" && this.raise(a.start, te.AmbiguousDeclareModuleKind), i = "ES") : a.type === "DeclareModuleExports" && (n && this.raise(a.start, te.DuplicateDeclareModuleExports), i === "ES" && this.raise(a.start, te.AmbiguousDeclareModuleKind), i = "CommonJS", n = true);
    }), e.kind = i || "CommonJS", this.finishNode(e, "DeclareModule");
  }
  flowParseDeclareExportDeclaration(e, t) {
    if (this.expect(76), this.eat(59))
      return this.match(62) || this.match(74) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = true, this.finishNode(e, "DeclareExportDeclaration");
    if (this.match(69) || this.isLet() || (this.isContextual(120) || this.isContextual(119)) && !t) {
      const r = this.state.value, i = Ty[r];
      throw this.raise(this.state.start, te.UnsupportedDeclareExportKind, r, i);
    }
    if (this.match(68) || this.match(62) || this.match(74) || this.isContextual(121))
      return e.declaration = this.flowParseDeclare(this.startNode()), e.default = false, this.finishNode(e, "DeclareExportDeclaration");
    if (this.match(49) || this.match(5) || this.isContextual(119) || this.isContextual(120) || this.isContextual(121))
      return e = this.parseExport(e), e.type === "ExportNamedDeclaration" && (e.type = "ExportDeclaration", e.default = false, delete e.exportKind), e.type = "Declare" + e.type, e;
    throw this.unexpected();
  }
  flowParseDeclareModuleExports(e) {
    return this.next(), this.expectContextual(102), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
  }
  flowParseDeclareTypeAlias(e) {
    return this.next(), this.flowParseTypeAlias(e), e.type = "DeclareTypeAlias", e;
  }
  flowParseDeclareOpaqueType(e) {
    return this.next(), this.flowParseOpaqueType(e, true), e.type = "DeclareOpaqueType", e;
  }
  flowParseDeclareInterface(e) {
    return this.next(), this.flowParseInterfaceish(e), this.finishNode(e, "DeclareInterface");
  }
  flowParseInterfaceish(e, t = false) {
    if (e.id = this.flowParseRestrictedIdentifier(!t, true), this.scope.declareName(e.id.name, t ? mp : gt, e.id.start), this.match(43) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], e.implements = [], e.mixins = [], this.eat(75))
      do
        e.extends.push(this.flowParseInterfaceExtends());
      while (!t && this.eat(12));
    if (this.isContextual(108)) {
      this.next();
      do
        e.mixins.push(this.flowParseInterfaceExtends());
      while (this.eat(12));
    }
    if (this.isContextual(104)) {
      this.next();
      do
        e.implements.push(this.flowParseInterfaceExtends());
      while (this.eat(12));
    }
    e.body = this.flowParseObjectType({
      allowStatic: t,
      allowExact: false,
      allowSpread: false,
      allowProto: t,
      allowInexact: false
    });
  }
  flowParseInterfaceExtends() {
    const e = this.startNode();
    return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(43) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
  }
  flowParseInterface(e) {
    return this.flowParseInterfaceish(e), this.finishNode(e, "InterfaceDeclaration");
  }
  checkNotUnderscore(e) {
    e === "_" && this.raise(this.state.start, te.UnexpectedReservedUnderscore);
  }
  checkReservedType(e, t, r) {
    !Ey.has(e) || this.raise(t, r ? te.AssignReservedType : te.UnexpectedReservedType, e);
  }
  flowParseRestrictedIdentifier(e, t) {
    return this.checkReservedType(this.state.value, this.state.start, t), this.parseIdentifier(e);
  }
  flowParseTypeAlias(e) {
    return e.id = this.flowParseRestrictedIdentifier(false, true), this.scope.declareName(e.id.name, gt, e.id.start), this.match(43) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(27), this.semicolon(), this.finishNode(e, "TypeAlias");
  }
  flowParseOpaqueType(e, t) {
    return this.expectContextual(120), e.id = this.flowParseRestrictedIdentifier(true, true), this.scope.declareName(e.id.name, gt, e.id.start), this.match(43) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, t || (e.impltype = this.flowParseTypeInitialiser(27)), this.semicolon(), this.finishNode(e, "OpaqueType");
  }
  flowParseTypeParameter(e = false) {
    const t = this.state.start, r = this.startNode(), i = this.flowParseVariance(), n = this.flowParseTypeAnnotatableIdentifier();
    return r.name = n.name, r.variance = i, r.bound = n.typeAnnotation, this.match(27) ? (this.eat(27), r.default = this.flowParseType()) : e && this.raise(t, te.MissingTypeParamDefault), this.finishNode(r, "TypeParameter");
  }
  flowParseTypeParameterDeclaration() {
    const e = this.state.inType, t = this.startNode();
    t.params = [], this.state.inType = true, this.match(43) || this.match(132) ? this.next() : this.unexpected();
    let r = false;
    do {
      const i = this.flowParseTypeParameter(r);
      t.params.push(i), i.default && (r = true), this.match(44) || this.expect(12);
    } while (!this.match(44));
    return this.expect(44), this.state.inType = e, this.finishNode(t, "TypeParameterDeclaration");
  }
  flowParseTypeParameterInstantiation() {
    const e = this.startNode(), t = this.state.inType;
    e.params = [], this.state.inType = true, this.expect(43);
    const r = this.state.noAnonFunctionType;
    for (this.state.noAnonFunctionType = false; !this.match(44); )
      e.params.push(this.flowParseType()), this.match(44) || this.expect(12);
    return this.state.noAnonFunctionType = r, this.expect(44), this.state.inType = t, this.finishNode(e, "TypeParameterInstantiation");
  }
  flowParseTypeParameterInstantiationCallOrNew() {
    const e = this.startNode(), t = this.state.inType;
    for (e.params = [], this.state.inType = true, this.expect(43); !this.match(44); )
      e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(44) || this.expect(12);
    return this.expect(44), this.state.inType = t, this.finishNode(e, "TypeParameterInstantiation");
  }
  flowParseInterfaceType() {
    const e = this.startNode();
    if (this.expectContextual(119), e.extends = [], this.eat(75))
      do
        e.extends.push(this.flowParseInterfaceExtends());
      while (this.eat(12));
    return e.body = this.flowParseObjectType({
      allowStatic: false,
      allowExact: false,
      allowSpread: false,
      allowProto: false,
      allowInexact: false
    }), this.finishNode(e, "InterfaceTypeAnnotation");
  }
  flowParseObjectPropertyKey() {
    return this.match(124) || this.match(123) ? this.parseExprAtom() : this.parseIdentifier(true);
  }
  flowParseObjectTypeIndexer(e, t, r) {
    return e.static = t, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = r, this.finishNode(e, "ObjectTypeIndexer");
  }
  flowParseObjectTypeInternalSlot(e, t) {
    return e.static = t, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(43) || this.match(10) ? (e.method = true, e.optional = false, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start))) : (e.method = false, this.eat(17) && (e.optional = true), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
  }
  flowParseObjectTypeMethodish(e) {
    for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(43) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(72) && (e.this = this.flowParseFunctionTypeParam(true), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
      e.params.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
    return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(false)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
  }
  flowParseObjectTypeCallProperty(e, t) {
    const r = this.startNode();
    return e.static = t, e.value = this.flowParseObjectTypeMethodish(r), this.finishNode(e, "ObjectTypeCallProperty");
  }
  flowParseObjectType({
    allowStatic: e,
    allowExact: t,
    allowSpread: r,
    allowProto: i,
    allowInexact: n
  }) {
    const a = this.state.inType;
    this.state.inType = true;
    const o = this.startNode();
    o.callProperties = [], o.properties = [], o.indexers = [], o.internalSlots = [];
    let l, u, c = false;
    for (t && this.match(6) ? (this.expect(6), l = 9, u = true) : (this.expect(5), l = 8, u = false), o.exact = u; !this.match(l); ) {
      let p = false, f = null, g = null;
      const d = this.startNode();
      if (i && this.isContextual(109)) {
        const y = this.lookahead();
        y.type !== 14 && y.type !== 17 && (this.next(), f = this.state.start, e = false);
      }
      if (e && this.isContextual(98)) {
        const y = this.lookahead();
        y.type !== 14 && y.type !== 17 && (this.next(), p = true);
      }
      const m = this.flowParseVariance();
      if (this.eat(0))
        f != null && this.unexpected(f), this.eat(0) ? (m && this.unexpected(m.start), o.internalSlots.push(this.flowParseObjectTypeInternalSlot(d, p))) : o.indexers.push(this.flowParseObjectTypeIndexer(d, p, m));
      else if (this.match(10) || this.match(43))
        f != null && this.unexpected(f), m && this.unexpected(m.start), o.callProperties.push(this.flowParseObjectTypeCallProperty(d, p));
      else {
        let y = "init";
        if (this.isContextual(92) || this.isContextual(97)) {
          const E = this.lookahead();
          rp(E.type) && (y = this.state.value, this.next());
        }
        const x = this.flowParseObjectTypeProperty(d, p, f, m, y, r, n != null ? n : !u);
        x === null ? (c = true, g = this.state.lastTokStart) : o.properties.push(x);
      }
      this.flowObjectTypeSemicolon(), g && !this.match(8) && !this.match(9) && this.raise(g, te.UnexpectedExplicitInexactInObject);
    }
    this.expect(l), r && (o.inexact = c);
    const h = this.finishNode(o, "ObjectTypeAnnotation");
    return this.state.inType = a, h;
  }
  flowParseObjectTypeProperty(e, t, r, i, n, a, o) {
    if (this.eat(21))
      return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (a ? o || this.raise(this.state.lastTokStart, te.InexactInsideExact) : this.raise(this.state.lastTokStart, te.InexactInsideNonObject), i && this.raise(i.start, te.InexactVariance), null) : (a || this.raise(this.state.lastTokStart, te.UnexpectedSpreadType), r != null && this.unexpected(r), i && this.raise(i.start, te.SpreadVariance), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
    {
      e.key = this.flowParseObjectPropertyKey(), e.static = t, e.proto = r != null, e.kind = n;
      let l = false;
      return this.match(43) || this.match(10) ? (e.method = true, r != null && this.unexpected(r), i && this.unexpected(i.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !a && e.key.name === "constructor" && e.value.this && this.raise(e.value.this.start, te.ThisParamBannedInConstructor)) : (n !== "init" && this.unexpected(), e.method = false, this.eat(17) && (l = true), e.value = this.flowParseTypeInitialiser(), e.variance = i), e.optional = l, this.finishNode(e, "ObjectTypeProperty");
    }
  }
  flowCheckGetterSetterParams(e) {
    const t = e.kind === "get" ? 0 : 1, r = e.start, i = e.value.params.length + (e.value.rest ? 1 : 0);
    e.value.this && this.raise(e.value.this.start, e.kind === "get" ? te.GetterMayNotHaveThisParam : te.SetterMayNotHaveThisParam), i !== t && (e.kind === "get" ? this.raise(r, I.BadGetterArity) : this.raise(r, I.BadSetterArity)), e.kind === "set" && e.value.rest && this.raise(r, I.BadSetterRestParameter);
  }
  flowObjectTypeSemicolon() {
    !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
  }
  flowParseQualifiedTypeIdentifier(e, t, r) {
    e = e || this.state.start, t = t || this.state.startLoc;
    let i = r || this.flowParseRestrictedIdentifier(true);
    for (; this.eat(16); ) {
      const n = this.startNodeAt(e, t);
      n.qualification = i, n.id = this.flowParseRestrictedIdentifier(true), i = this.finishNode(n, "QualifiedTypeIdentifier");
    }
    return i;
  }
  flowParseGenericType(e, t, r) {
    const i = this.startNodeAt(e, t);
    return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, t, r), this.match(43) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
  }
  flowParseTypeofType() {
    const e = this.startNode();
    return this.expect(81), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
  }
  flowParseTupleType() {
    const e = this.startNode();
    for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
      this.expect(12);
    return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
  }
  flowParseFunctionTypeParam(e) {
    let t = null, r = false, i = null;
    const n = this.startNode(), a = this.lookahead(), o = this.state.type === 72;
    return a.type === 14 || a.type === 17 ? (o && !e && this.raise(n.start, te.ThisParamMustBeFirst), t = this.parseIdentifier(o), this.eat(17) && (r = true, o && this.raise(n.start, te.ThisParamMayNotBeOptional)), i = this.flowParseTypeInitialiser()) : i = this.flowParseType(), n.name = t, n.optional = r, n.typeAnnotation = i, this.finishNode(n, "FunctionTypeParam");
  }
  reinterpretTypeAsFunctionTypeParam(e) {
    const t = this.startNodeAt(e.start, e.loc.start);
    return t.name = null, t.optional = false, t.typeAnnotation = e, this.finishNode(t, "FunctionTypeParam");
  }
  flowParseFunctionTypeParams(e = []) {
    let t = null, r = null;
    for (this.match(72) && (r = this.flowParseFunctionTypeParam(true), r.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
      e.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
    return this.eat(21) && (t = this.flowParseFunctionTypeParam(false)), {
      params: e,
      rest: t,
      _this: r
    };
  }
  flowIdentToTypeAnnotation(e, t, r, i) {
    switch (i.name) {
      case "any":
        return this.finishNode(r, "AnyTypeAnnotation");
      case "bool":
      case "boolean":
        return this.finishNode(r, "BooleanTypeAnnotation");
      case "mixed":
        return this.finishNode(r, "MixedTypeAnnotation");
      case "empty":
        return this.finishNode(r, "EmptyTypeAnnotation");
      case "number":
        return this.finishNode(r, "NumberTypeAnnotation");
      case "string":
        return this.finishNode(r, "StringTypeAnnotation");
      case "symbol":
        return this.finishNode(r, "SymbolTypeAnnotation");
      default:
        return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, t, i);
    }
  }
  flowParsePrimaryType() {
    const e = this.state.start, t = this.state.startLoc, r = this.startNode();
    let i, n, a = false;
    const o = this.state.noAnonFunctionType;
    switch (this.state.type) {
      case 5:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: true,
          allowProto: false,
          allowInexact: true
        });
      case 6:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: true,
          allowSpread: true,
          allowProto: false,
          allowInexact: false
        });
      case 0:
        return this.state.noAnonFunctionType = false, n = this.flowParseTupleType(), this.state.noAnonFunctionType = o, n;
      case 43:
        return r.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), r.params = i.params, r.rest = i.rest, r.this = i._this, this.expect(11), this.expect(19), r.returnType = this.flowParseType(), this.finishNode(r, "FunctionTypeAnnotation");
      case 10:
        if (this.next(), !this.match(11) && !this.match(21))
          if (Se(this.state.type) || this.match(72)) {
            const l = this.lookahead().type;
            a = l !== 17 && l !== 14;
          } else
            a = true;
        if (a) {
          if (this.state.noAnonFunctionType = false, n = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
            return this.expect(11), n;
          this.eat(12);
        }
        return n ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(n)]) : i = this.flowParseFunctionTypeParams(), r.params = i.params, r.rest = i.rest, r.this = i._this, this.expect(11), this.expect(19), r.returnType = this.flowParseType(), r.typeParameters = null, this.finishNode(r, "FunctionTypeAnnotation");
      case 123:
        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
      case 79:
      case 80:
        return r.value = this.match(79), this.next(), this.finishNode(r, "BooleanLiteralTypeAnnotation");
      case 47:
        if (this.state.value === "-") {
          if (this.next(), this.match(124))
            return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", r);
          if (this.match(125))
            return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", r);
          throw this.raise(this.state.start, te.UnexpectedSubtractionOperand);
        }
        throw this.unexpected();
      case 124:
        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
      case 125:
        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
      case 82:
        return this.next(), this.finishNode(r, "VoidTypeAnnotation");
      case 78:
        return this.next(), this.finishNode(r, "NullLiteralTypeAnnotation");
      case 72:
        return this.next(), this.finishNode(r, "ThisTypeAnnotation");
      case 49:
        return this.next(), this.finishNode(r, "ExistsTypeAnnotation");
      case 81:
        return this.flowParseTypeofType();
      default:
        if (Nl(this.state.type)) {
          const l = hr(this.state.type);
          return this.next(), super.createIdentifier(r, l);
        } else if (Se(this.state.type))
          return this.isContextual(119) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, t, r, this.parseIdentifier());
    }
    throw this.unexpected();
  }
  flowParsePostfixType() {
    const e = this.state.start, t = this.state.startLoc;
    let r = this.flowParsePrimaryType(), i = false;
    for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
      const n = this.startNodeAt(e, t), a = this.eat(18);
      i = i || a, this.expect(0), !a && this.match(3) ? (n.elementType = r, this.next(), r = this.finishNode(n, "ArrayTypeAnnotation")) : (n.objectType = r, n.indexType = this.flowParseType(), this.expect(3), i ? (n.optional = a, r = this.finishNode(n, "OptionalIndexedAccessType")) : r = this.finishNode(n, "IndexedAccessType"));
    }
    return r;
  }
  flowParsePrefixType() {
    const e = this.startNode();
    return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
  }
  flowParseAnonFunctionWithoutParens() {
    const e = this.flowParsePrefixType();
    if (!this.state.noAnonFunctionType && this.eat(19)) {
      const t = this.startNodeAt(e.start, e.loc.start);
      return t.params = [this.reinterpretTypeAsFunctionTypeParam(e)], t.rest = null, t.this = null, t.returnType = this.flowParseType(), t.typeParameters = null, this.finishNode(t, "FunctionTypeAnnotation");
    }
    return e;
  }
  flowParseIntersectionType() {
    const e = this.startNode();
    this.eat(41);
    const t = this.flowParseAnonFunctionWithoutParens();
    for (e.types = [t]; this.eat(41); )
      e.types.push(this.flowParseAnonFunctionWithoutParens());
    return e.types.length === 1 ? t : this.finishNode(e, "IntersectionTypeAnnotation");
  }
  flowParseUnionType() {
    const e = this.startNode();
    this.eat(39);
    const t = this.flowParseIntersectionType();
    for (e.types = [t]; this.eat(39); )
      e.types.push(this.flowParseIntersectionType());
    return e.types.length === 1 ? t : this.finishNode(e, "UnionTypeAnnotation");
  }
  flowParseType() {
    const e = this.state.inType;
    this.state.inType = true;
    const t = this.flowParseUnionType();
    return this.state.inType = e, t;
  }
  flowParseTypeOrImplicitInstantiation() {
    if (this.state.type === 122 && this.state.value === "_") {
      const e = this.state.start, t = this.state.startLoc, r = this.parseIdentifier();
      return this.flowParseGenericType(e, t, r);
    } else
      return this.flowParseType();
  }
  flowParseTypeAnnotation() {
    const e = this.startNode();
    return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
  }
  flowParseTypeAnnotatableIdentifier(e) {
    const t = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
    return this.match(14) && (t.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(t)), t;
  }
  typeCastToParameter(e) {
    return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.end, e.typeAnnotation.loc.end), e.expression;
  }
  flowParseVariance() {
    let e = null;
    return this.match(47) && (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")), e;
  }
  parseFunctionBody(e, t, r = false) {
    return t ? this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, true, r)) : super.parseFunctionBody(e, false, r);
  }
  parseFunctionBodyAndFinish(e, t, r = false) {
    if (this.match(14)) {
      const i = this.startNode();
      [i.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = i.typeAnnotation ? this.finishNode(i, "TypeAnnotation") : null;
    }
    super.parseFunctionBodyAndFinish(e, t, r);
  }
  parseStatement(e, t) {
    if (this.state.strict && this.isContextual(119)) {
      const i = this.lookahead();
      if (Yt(i.type)) {
        const n = this.startNode();
        return this.next(), this.flowParseInterface(n);
      }
    } else if (this.shouldParseEnums() && this.isContextual(116)) {
      const i = this.startNode();
      return this.next(), this.flowParseEnumDeclaration(i);
    }
    const r = super.parseStatement(e, t);
    return this.flowPragma === void 0 && !this.isValidDirective(r) && (this.flowPragma = null), r;
  }
  parseExpressionStatement(e, t) {
    if (t.type === "Identifier") {
      if (t.name === "declare") {
        if (this.match(74) || Se(this.state.type) || this.match(62) || this.match(68) || this.match(76))
          return this.flowParseDeclare(e);
      } else if (Se(this.state.type)) {
        if (t.name === "interface")
          return this.flowParseInterface(e);
        if (t.name === "type")
          return this.flowParseTypeAlias(e);
        if (t.name === "opaque")
          return this.flowParseOpaqueType(e, false);
      }
    }
    return super.parseExpressionStatement(e, t);
  }
  shouldParseExportDeclaration() {
    const {
      type: e
    } = this.state;
    return oc(e) || this.shouldParseEnums() && e === 116 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
  }
  isExportDefaultSpecifier() {
    const {
      type: e
    } = this.state;
    return oc(e) || this.shouldParseEnums() && e === 116 ? this.state.containsEsc : super.isExportDefaultSpecifier();
  }
  parseExportDefaultExpression() {
    if (this.shouldParseEnums() && this.isContextual(116)) {
      const e = this.startNode();
      return this.next(), this.flowParseEnumDeclaration(e);
    }
    return super.parseExportDefaultExpression();
  }
  parseConditional(e, t, r, i) {
    if (!this.match(17))
      return e;
    if (this.state.maybeInArrowParameters) {
      const p = this.lookaheadCharCode();
      if (p === 44 || p === 61 || p === 58 || p === 41)
        return this.setOptionalParametersError(i), e;
    }
    this.expect(17);
    const n = this.state.clone(), a = this.state.noArrowAt, o = this.startNodeAt(t, r);
    let {
      consequent: l,
      failed: u
    } = this.tryParseConditionalConsequent(), [c, h] = this.getArrowLikeExpressions(l);
    if (u || h.length > 0) {
      const p = [...a];
      if (h.length > 0) {
        this.state = n, this.state.noArrowAt = p;
        for (let f = 0; f < h.length; f++)
          p.push(h[f].start);
        ({
          consequent: l,
          failed: u
        } = this.tryParseConditionalConsequent()), [c, h] = this.getArrowLikeExpressions(l);
      }
      u && c.length > 1 && this.raise(n.start, te.AmbiguousConditionalArrow), u && c.length === 1 && (this.state = n, p.push(c[0].start), this.state.noArrowAt = p, {
        consequent: l,
        failed: u
      } = this.tryParseConditionalConsequent());
    }
    return this.getArrowLikeExpressions(l, true), this.state.noArrowAt = a, this.expect(14), o.test = e, o.consequent = l, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
  }
  tryParseConditionalConsequent() {
    this.state.noArrowParamsConversionAt.push(this.state.start);
    const e = this.parseMaybeAssignAllowIn(), t = !this.match(14);
    return this.state.noArrowParamsConversionAt.pop(), {
      consequent: e,
      failed: t
    };
  }
  getArrowLikeExpressions(e, t) {
    const r = [e], i = [];
    for (; r.length !== 0; ) {
      const n = r.pop();
      n.type === "ArrowFunctionExpression" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : i.push(n), r.push(n.body)) : n.type === "ConditionalExpression" && (r.push(n.consequent), r.push(n.alternate));
    }
    return t ? (i.forEach((n) => this.finishArrowValidation(n)), [i, []]) : Py(i, (n) => n.params.every((a) => this.isAssignable(a, true)));
  }
  finishArrowValidation(e) {
    var t;
    this.toAssignableList(e.params, (t = e.extra) == null ? void 0 : t.trailingComma, false), this.scope.enter(qt | Ml), super.checkParams(e, false, true), this.scope.exit();
  }
  forwardNoArrowParamsConversionAt(e, t) {
    let r;
    return this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), r = t(), this.state.noArrowParamsConversionAt.pop()) : r = t(), r;
  }
  parseParenItem(e, t, r) {
    if (e = super.parseParenItem(e, t, r), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
      const i = this.startNodeAt(t, r);
      return i.expression = e, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression");
    }
    return e;
  }
  assertModuleNodeAllowed(e) {
    e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
  }
  parseExport(e) {
    const t = super.parseExport(e);
    return (t.type === "ExportNamedDeclaration" || t.type === "ExportAllDeclaration") && (t.exportKind = t.exportKind || "value"), t;
  }
  parseExportDeclaration(e) {
    if (this.isContextual(120)) {
      e.exportKind = "type";
      const t = this.startNode();
      return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(true), this.parseExportFrom(e), null) : this.flowParseTypeAlias(t);
    } else if (this.isContextual(121)) {
      e.exportKind = "type";
      const t = this.startNode();
      return this.next(), this.flowParseOpaqueType(t, false);
    } else if (this.isContextual(119)) {
      e.exportKind = "type";
      const t = this.startNode();
      return this.next(), this.flowParseInterface(t);
    } else if (this.shouldParseEnums() && this.isContextual(116)) {
      e.exportKind = "value";
      const t = this.startNode();
      return this.next(), this.flowParseEnumDeclaration(t);
    } else
      return super.parseExportDeclaration(e);
  }
  eatExportStar(e) {
    return super.eatExportStar(...arguments) ? true : this.isContextual(120) && this.lookahead().type === 49 ? (e.exportKind = "type", this.next(), this.next(), true) : false;
  }
  maybeParseExportNamespaceSpecifier(e) {
    const t = this.state.start, r = super.maybeParseExportNamespaceSpecifier(e);
    return r && e.exportKind === "type" && this.unexpected(t), r;
  }
  parseClassId(e, t, r) {
    super.parseClassId(e, t, r), this.match(43) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
  }
  parseClassMember(e, t, r) {
    const i = this.state.start;
    if (this.isContextual(115)) {
      if (this.parseClassMemberFromModifier(e, t))
        return;
      t.declare = true;
    }
    super.parseClassMember(e, t, r), t.declare && (t.type !== "ClassProperty" && t.type !== "ClassPrivateProperty" && t.type !== "PropertyDefinition" ? this.raise(i, te.DeclareClassElement) : t.value && this.raise(t.value.start, te.DeclareClassFieldInitializer));
  }
  isIterator(e) {
    return e === "iterator" || e === "asyncIterator";
  }
  readIterator() {
    const e = super.readWord1(), t = "@@" + e;
    (!this.isIterator(e) || !this.state.inType) && this.raise(this.state.pos, I.InvalidIdentifier, t), this.finishToken(122, t);
  }
  getTokenFromCode(e) {
    const t = this.input.charCodeAt(this.state.pos + 1);
    return e === 123 && t === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 44 : 43, 1) : this.state.inType && e === 63 ? t === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : Wg(e, t) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
  }
  isAssignable(e, t) {
    return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, t) : super.isAssignable(e, t);
  }
  toAssignable(e, t = false) {
    return e.type === "TypeCastExpression" ? super.toAssignable(this.typeCastToParameter(e), t) : super.toAssignable(e, t);
  }
  toAssignableList(e, t, r) {
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      (n == null ? void 0 : n.type) === "TypeCastExpression" && (e[i] = this.typeCastToParameter(n));
    }
    return super.toAssignableList(e, t, r);
  }
  toReferencedList(e, t) {
    for (let i = 0; i < e.length; i++) {
      var r;
      const n = e[i];
      n && n.type === "TypeCastExpression" && !((r = n.extra) != null && r.parenthesized) && (e.length > 1 || !t) && this.raise(n.typeAnnotation.start, te.TypeCastInPattern);
    }
    return e;
  }
  parseArrayLike(e, t, r, i) {
    const n = super.parseArrayLike(e, t, r, i);
    return t && !this.state.maybeInArrowParameters && this.toReferencedList(n.elements), n;
  }
  checkLVal(e, ...t) {
    if (e.type !== "TypeCastExpression")
      return super.checkLVal(e, ...t);
  }
  parseClassProperty(e) {
    return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
  }
  parseClassPrivateProperty(e) {
    return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
  }
  isClassMethod() {
    return this.match(43) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(14) || super.isClassProperty();
  }
  isNonstaticConstructor(e) {
    return !this.match(14) && super.isNonstaticConstructor(e);
  }
  pushClassMethod(e, t, r, i, n, a) {
    if (t.variance && this.unexpected(t.variance.start), delete t.variance, this.match(43) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, t, r, i, n, a), t.params && n) {
      const o = t.params;
      o.length > 0 && this.isThisParam(o[0]) && this.raise(t.start, te.ThisParamBannedInConstructor);
    } else if (t.type === "MethodDefinition" && n && t.value.params) {
      const o = t.value.params;
      o.length > 0 && this.isThisParam(o[0]) && this.raise(t.start, te.ThisParamBannedInConstructor);
    }
  }
  pushClassPrivateMethod(e, t, r, i) {
    t.variance && this.unexpected(t.variance.start), delete t.variance, this.match(43) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, t, r, i);
  }
  parseClassSuper(e) {
    if (super.parseClassSuper(e), e.superClass && this.match(43) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(104)) {
      this.next();
      const t = e.implements = [];
      do {
        const r = this.startNode();
        r.id = this.flowParseRestrictedIdentifier(true), this.match(43) ? r.typeParameters = this.flowParseTypeParameterInstantiation() : r.typeParameters = null, t.push(this.finishNode(r, "ClassImplements"));
      } while (this.eat(12));
    }
  }
  checkGetterSetterParams(e) {
    super.checkGetterSetterParams(e);
    const t = this.getObjectOrClassMethodParams(e);
    if (t.length > 0) {
      const r = t[0];
      this.isThisParam(r) && e.kind === "get" ? this.raise(r.start, te.GetterMayNotHaveThisParam) : this.isThisParam(r) && this.raise(r.start, te.SetterMayNotHaveThisParam);
    }
  }
  parsePropertyNamePrefixOperator(e) {
    e.variance = this.flowParseVariance();
  }
  parseObjPropValue(e, t, r, i, n, a, o, l) {
    e.variance && this.unexpected(e.variance.start), delete e.variance;
    let u;
    this.match(43) && !o && (u = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected()), super.parseObjPropValue(e, t, r, i, n, a, o, l), u && ((e.value || e).typeParameters = u);
  }
  parseAssignableListItemTypes(e) {
    return this.eat(17) && (e.type !== "Identifier" && this.raise(e.start, te.PatternIsOptional), this.isThisParam(e) && this.raise(e.start, te.ThisParamMayNotBeOptional), e.optional = true), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(e.start, te.ThisParamAnnotationRequired), this.match(27) && this.isThisParam(e) && this.raise(e.start, te.ThisParamNoDefault), this.resetEndLocation(e), e;
  }
  parseMaybeDefault(e, t, r) {
    const i = super.parseMaybeDefault(e, t, r);
    return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(i.typeAnnotation.start, te.TypeBeforeInitializer), i;
  }
  shouldParseDefaultImport(e) {
    return Wa(e) ? hc(this.state.type) : super.shouldParseDefaultImport(e);
  }
  parseImportSpecifierLocal(e, t, r, i) {
    t.local = Wa(e) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier(), this.checkLVal(t.local, i, gt), e.specifiers.push(this.finishNode(t, r));
  }
  maybeParseDefaultImportSpecifier(e) {
    e.importKind = "value";
    let t = null;
    if (this.match(81) ? t = "typeof" : this.isContextual(120) && (t = "type"), t) {
      const r = this.lookahead(), {
        type: i
      } = r;
      t === "type" && i === 49 && this.unexpected(r.start), (hc(i) || i === 5 || i === 49) && (this.next(), e.importKind = t);
    }
    return super.maybeParseDefaultImportSpecifier(e);
  }
  parseImportSpecifier(e, t, r, i) {
    const n = e.imported;
    let a = null;
    n.type === "Identifier" && (n.name === "type" ? a = "type" : n.name === "typeof" && (a = "typeof"));
    let o = false;
    if (this.isContextual(87) && !this.isLookaheadContextual("as")) {
      const u = this.parseIdentifier(true);
      a !== null && !Yt(this.state.type) ? (e.imported = u, e.importKind = a, e.local = Jt(u)) : (e.imported = n, e.importKind = null, e.local = this.parseIdentifier());
    } else {
      if (a !== null && Yt(this.state.type))
        e.imported = this.parseIdentifier(true), e.importKind = a;
      else {
        if (t)
          throw this.raise(e.start, I.ImportBindingIsString, n.value);
        e.imported = n, e.importKind = null;
      }
      this.eatContextual(87) ? e.local = this.parseIdentifier() : (o = true, e.local = Jt(e.imported));
    }
    const l = Wa(e);
    return r && l && this.raise(e.start, te.ImportTypeShorthandOnlyInPureImport), (r || l) && this.checkReservedType(e.local.name, e.local.start, true), o && !r && !l && this.checkReservedWord(e.local.name, e.start, true, true), this.checkLVal(e.local, "import specifier", gt), this.finishNode(e, "ImportSpecifier");
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 72:
        return this.parseIdentifier(true);
      default:
        return super.parseBindingAtom();
    }
  }
  parseFunctionParams(e, t) {
    const r = e.kind;
    r !== "get" && r !== "set" && this.match(43) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, t);
  }
  parseVarId(e, t) {
    super.parseVarId(e, t), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
  }
  parseAsyncArrowFromCallExpression(e, t) {
    if (this.match(14)) {
      const r = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = true, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = r;
    }
    return super.parseAsyncArrowFromCallExpression(e, t);
  }
  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }
  parseMaybeAssign(e, t) {
    var r;
    let i = null, n;
    if (this.hasPlugin("jsx") && (this.match(132) || this.match(43))) {
      if (i = this.state.clone(), n = this.tryParse(() => super.parseMaybeAssign(e, t), i), !n.error)
        return n.node;
      const {
        context: l
      } = this.state, u = l[l.length - 1];
      u === _e.j_oTag ? l.length -= 2 : u === _e.j_expr && (l.length -= 1);
    }
    if ((r = n) != null && r.error || this.match(43)) {
      var a, o;
      i = i || this.state.clone();
      let l;
      const u = this.tryParse((h) => {
        var p;
        l = this.flowParseTypeParameterDeclaration();
        const f = this.forwardNoArrowParamsConversionAt(l, () => {
          const d = super.parseMaybeAssign(e, t);
          return this.resetStartLocationFromNode(d, l), d;
        });
        (p = f.extra) != null && p.parenthesized && h();
        const g = this.maybeUnwrapTypeCastExpression(f);
        return g.type !== "ArrowFunctionExpression" && h(), g.typeParameters = l, this.resetStartLocationFromNode(g, l), f;
      }, i);
      let c = null;
      if (u.node && this.maybeUnwrapTypeCastExpression(u.node).type === "ArrowFunctionExpression") {
        if (!u.error && !u.aborted)
          return u.node.async && this.raise(l.start, te.UnexpectedTypeParameterBeforeAsyncArrowFunction), u.node;
        c = u.node;
      }
      if ((a = n) != null && a.node)
        return this.state = n.failState, n.node;
      if (c)
        return this.state = u.failState, c;
      throw (o = n) != null && o.thrown ? n.error : u.thrown ? u.error : this.raise(l.start, te.UnexpectedTokenAfterTypeParameter);
    }
    return super.parseMaybeAssign(e, t);
  }
  parseArrow(e) {
    if (this.match(14)) {
      const t = this.tryParse(() => {
        const r = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        const i = this.startNode();
        return [i.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = r, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), i;
      });
      if (t.thrown)
        return null;
      t.error && (this.state = t.failState), e.returnType = t.node.typeAnnotation ? this.finishNode(t.node, "TypeAnnotation") : null;
    }
    return super.parseArrow(e);
  }
  shouldParseArrow(e) {
    return this.match(14) || super.shouldParseArrow(e);
  }
  setArrowFunctionParameters(e, t) {
    this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? e.params = t : super.setArrowFunctionParameters(e, t);
  }
  checkParams(e, t, r) {
    if (!(r && this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1)) {
      for (let i = 0; i < e.params.length; i++)
        this.isThisParam(e.params[i]) && i > 0 && this.raise(e.params[i].start, te.ThisParamMustBeFirst);
      return super.checkParams(...arguments);
    }
  }
  parseParenAndDistinguishExpression(e) {
    return super.parseParenAndDistinguishExpression(e && this.state.noArrowAt.indexOf(this.state.start) === -1);
  }
  parseSubscripts(e, t, r, i) {
    if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.indexOf(t) !== -1) {
      this.next();
      const n = this.startNodeAt(t, r);
      n.callee = e, n.arguments = this.parseCallExpressionArguments(11, false), e = this.finishNode(n, "CallExpression");
    } else if (e.type === "Identifier" && e.name === "async" && this.match(43)) {
      const n = this.state.clone(), a = this.tryParse((l) => this.parseAsyncArrowWithTypeParameters(t, r) || l(), n);
      if (!a.error && !a.aborted)
        return a.node;
      const o = this.tryParse(() => super.parseSubscripts(e, t, r, i), n);
      if (o.node && !o.error)
        return o.node;
      if (a.node)
        return this.state = a.failState, a.node;
      if (o.node)
        return this.state = o.failState, o.node;
      throw a.error || o.error;
    }
    return super.parseSubscripts(e, t, r, i);
  }
  parseSubscript(e, t, r, i, n) {
    if (this.match(18) && this.isLookaheadToken_lt()) {
      if (n.optionalChainMember = true, i)
        return n.stop = true, e;
      this.next();
      const a = this.startNodeAt(t, r);
      return a.callee = e, a.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), a.arguments = this.parseCallExpressionArguments(11, false), a.optional = true, this.finishCallExpression(a, true);
    } else if (!i && this.shouldParseTypes() && this.match(43)) {
      const a = this.startNodeAt(t, r);
      a.callee = e;
      const o = this.tryParse(() => (a.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), a.arguments = this.parseCallExpressionArguments(11, false), n.optionalChainMember && (a.optional = false), this.finishCallExpression(a, n.optionalChainMember)));
      if (o.node)
        return o.error && (this.state = o.failState), o.node;
    }
    return super.parseSubscript(e, t, r, i, n);
  }
  parseNewArguments(e) {
    let t = null;
    this.shouldParseTypes() && this.match(43) && (t = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = t, super.parseNewArguments(e);
  }
  parseAsyncArrowWithTypeParameters(e, t) {
    const r = this.startNodeAt(e, t);
    if (this.parseFunctionParams(r), !!this.parseArrow(r))
      return this.parseArrowExpression(r, void 0, true);
  }
  readToken_mult_modulo(e) {
    const t = this.input.charCodeAt(this.state.pos + 1);
    if (e === 42 && t === 47 && this.state.hasFlowComment) {
      this.state.hasFlowComment = false, this.state.pos += 2, this.nextToken();
      return;
    }
    super.readToken_mult_modulo(e);
  }
  readToken_pipe_amp(e) {
    const t = this.input.charCodeAt(this.state.pos + 1);
    if (e === 124 && t === 125) {
      this.finishOp(9, 2);
      return;
    }
    super.readToken_pipe_amp(e);
  }
  parseTopLevel(e, t) {
    const r = super.parseTopLevel(e, t);
    return this.state.hasFlowComment && this.raise(this.state.pos, te.UnterminatedFlowComment), r;
  }
  skipBlockComment() {
    if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
      this.state.hasFlowComment && this.unexpected(null, te.NestedFlowComment), this.hasFlowCommentCompletion(), this.state.pos += this.skipFlowComment(), this.state.hasFlowComment = true;
      return;
    }
    if (this.state.hasFlowComment) {
      const e = this.input.indexOf("*-/", this.state.pos += 2);
      if (e === -1)
        throw this.raise(this.state.pos - 2, I.UnterminatedComment);
      this.state.pos = e + 3;
      return;
    }
    return super.skipBlockComment();
  }
  skipFlowComment() {
    const {
      pos: e
    } = this.state;
    let t = 2;
    for (; [32, 9].includes(this.input.charCodeAt(e + t)); )
      t++;
    const r = this.input.charCodeAt(t + e), i = this.input.charCodeAt(t + e + 1);
    return r === 58 && i === 58 ? t + 2 : this.input.slice(t + e, t + e + 12) === "flow-include" ? t + 12 : r === 58 && i !== 58 ? t : false;
  }
  hasFlowCommentCompletion() {
    if (this.input.indexOf("*/", this.state.pos) === -1)
      throw this.raise(this.state.pos, I.UnterminatedComment);
  }
  flowEnumErrorBooleanMemberNotInitialized(e, {
    enumName: t,
    memberName: r
  }) {
    this.raise(e, te.EnumBooleanMemberNotInitialized, r, t);
  }
  flowEnumErrorInvalidMemberName(e, {
    enumName: t,
    memberName: r
  }) {
    const i = r[0].toUpperCase() + r.slice(1);
    this.raise(e, te.EnumInvalidMemberName, r, i, t);
  }
  flowEnumErrorDuplicateMemberName(e, {
    enumName: t,
    memberName: r
  }) {
    this.raise(e, te.EnumDuplicateMemberName, r, t);
  }
  flowEnumErrorInconsistentMemberValues(e, {
    enumName: t
  }) {
    this.raise(e, te.EnumInconsistentMemberValues, t);
  }
  flowEnumErrorInvalidExplicitType(e, {
    enumName: t,
    suppliedType: r
  }) {
    return this.raise(e, r === null ? te.EnumInvalidExplicitTypeUnknownSupplied : te.EnumInvalidExplicitType, t, r);
  }
  flowEnumErrorInvalidMemberInitializer(e, {
    enumName: t,
    explicitType: r,
    memberName: i
  }) {
    let n = null;
    switch (r) {
      case "boolean":
      case "number":
      case "string":
        n = te.EnumInvalidMemberInitializerPrimaryType;
        break;
      case "symbol":
        n = te.EnumInvalidMemberInitializerSymbolType;
        break;
      default:
        n = te.EnumInvalidMemberInitializerUnknownType;
    }
    return this.raise(e, n, t, i, r);
  }
  flowEnumErrorNumberMemberNotInitialized(e, {
    enumName: t,
    memberName: r
  }) {
    this.raise(e, te.EnumNumberMemberNotInitialized, t, r);
  }
  flowEnumErrorStringMemberInconsistentlyInitailized(e, {
    enumName: t
  }) {
    this.raise(e, te.EnumStringMemberInconsistentlyInitailized, t);
  }
  flowEnumMemberInit() {
    const e = this.state.start, t = () => this.match(12) || this.match(8);
    switch (this.state.type) {
      case 124: {
        const r = this.parseNumericLiteral(this.state.value);
        return t() ? {
          type: "number",
          pos: r.start,
          value: r
        } : {
          type: "invalid",
          pos: e
        };
      }
      case 123: {
        const r = this.parseStringLiteral(this.state.value);
        return t() ? {
          type: "string",
          pos: r.start,
          value: r
        } : {
          type: "invalid",
          pos: e
        };
      }
      case 79:
      case 80: {
        const r = this.parseBooleanLiteral(this.match(79));
        return t() ? {
          type: "boolean",
          pos: r.start,
          value: r
        } : {
          type: "invalid",
          pos: e
        };
      }
      default:
        return {
          type: "invalid",
          pos: e
        };
    }
  }
  flowEnumMemberRaw() {
    const e = this.state.start, t = this.parseIdentifier(true), r = this.eat(27) ? this.flowEnumMemberInit() : {
      type: "none",
      pos: e
    };
    return {
      id: t,
      init: r
    };
  }
  flowEnumCheckExplicitTypeMismatch(e, t, r) {
    const {
      explicitType: i
    } = t;
    i !== null && i !== r && this.flowEnumErrorInvalidMemberInitializer(e, t);
  }
  flowEnumMembers({
    enumName: e,
    explicitType: t
  }) {
    const r = /* @__PURE__ */ new Set(), i = {
      booleanMembers: [],
      numberMembers: [],
      stringMembers: [],
      defaultedMembers: []
    };
    let n = false;
    for (; !this.match(8); ) {
      if (this.eat(21)) {
        n = true;
        break;
      }
      const a = this.startNode(), {
        id: o,
        init: l
      } = this.flowEnumMemberRaw(), u = o.name;
      if (u === "")
        continue;
      /^[a-z]/.test(u) && this.flowEnumErrorInvalidMemberName(o.start, {
        enumName: e,
        memberName: u
      }), r.has(u) && this.flowEnumErrorDuplicateMemberName(o.start, {
        enumName: e,
        memberName: u
      }), r.add(u);
      const c = {
        enumName: e,
        explicitType: t,
        memberName: u
      };
      switch (a.id = o, l.type) {
        case "boolean": {
          this.flowEnumCheckExplicitTypeMismatch(l.pos, c, "boolean"), a.init = l.value, i.booleanMembers.push(this.finishNode(a, "EnumBooleanMember"));
          break;
        }
        case "number": {
          this.flowEnumCheckExplicitTypeMismatch(l.pos, c, "number"), a.init = l.value, i.numberMembers.push(this.finishNode(a, "EnumNumberMember"));
          break;
        }
        case "string": {
          this.flowEnumCheckExplicitTypeMismatch(l.pos, c, "string"), a.init = l.value, i.stringMembers.push(this.finishNode(a, "EnumStringMember"));
          break;
        }
        case "invalid":
          throw this.flowEnumErrorInvalidMemberInitializer(l.pos, c);
        case "none":
          switch (t) {
            case "boolean":
              this.flowEnumErrorBooleanMemberNotInitialized(l.pos, c);
              break;
            case "number":
              this.flowEnumErrorNumberMemberNotInitialized(l.pos, c);
              break;
            default:
              i.defaultedMembers.push(this.finishNode(a, "EnumDefaultedMember"));
          }
      }
      this.match(8) || this.expect(12);
    }
    return {
      members: i,
      hasUnknownMembers: n
    };
  }
  flowEnumStringMembers(e, t, {
    enumName: r
  }) {
    if (e.length === 0)
      return t;
    if (t.length === 0)
      return e;
    if (t.length > e.length) {
      for (const i of e)
        this.flowEnumErrorStringMemberInconsistentlyInitailized(i.start, {
          enumName: r
        });
      return t;
    } else {
      for (const i of t)
        this.flowEnumErrorStringMemberInconsistentlyInitailized(i.start, {
          enumName: r
        });
      return e;
    }
  }
  flowEnumParseExplicitType({
    enumName: e
  }) {
    if (this.eatContextual(95)) {
      if (!Se(this.state.type))
        throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
          enumName: e,
          suppliedType: null
        });
      const {
        value: t
      } = this.state;
      return this.next(), t !== "boolean" && t !== "number" && t !== "string" && t !== "symbol" && this.flowEnumErrorInvalidExplicitType(this.state.start, {
        enumName: e,
        suppliedType: t
      }), t;
    }
    return null;
  }
  flowEnumBody(e, {
    enumName: t,
    nameLoc: r
  }) {
    const i = this.flowEnumParseExplicitType({
      enumName: t
    });
    this.expect(5);
    const {
      members: n,
      hasUnknownMembers: a
    } = this.flowEnumMembers({
      enumName: t,
      explicitType: i
    });
    switch (e.hasUnknownMembers = a, i) {
      case "boolean":
        return e.explicitType = true, e.members = n.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
      case "number":
        return e.explicitType = true, e.members = n.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
      case "string":
        return e.explicitType = true, e.members = this.flowEnumStringMembers(n.stringMembers, n.defaultedMembers, {
          enumName: t
        }), this.expect(8), this.finishNode(e, "EnumStringBody");
      case "symbol":
        return e.members = n.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
      default: {
        const o = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
        e.explicitType = false;
        const l = n.booleanMembers.length, u = n.numberMembers.length, c = n.stringMembers.length, h = n.defaultedMembers.length;
        if (!l && !u && !c && !h)
          return o();
        if (!l && !u)
          return e.members = this.flowEnumStringMembers(n.stringMembers, n.defaultedMembers, {
            enumName: t
          }), this.expect(8), this.finishNode(e, "EnumStringBody");
        if (!u && !c && l >= h) {
          for (const p of n.defaultedMembers)
            this.flowEnumErrorBooleanMemberNotInitialized(p.start, {
              enumName: t,
              memberName: p.id.name
            });
          return e.members = n.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
        } else if (!l && !c && u >= h) {
          for (const p of n.defaultedMembers)
            this.flowEnumErrorNumberMemberNotInitialized(p.start, {
              enumName: t,
              memberName: p.id.name
            });
          return e.members = n.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
        } else
          return this.flowEnumErrorInconsistentMemberValues(r, {
            enumName: t
          }), o();
      }
    }
  }
  flowParseEnumDeclaration(e) {
    const t = this.parseIdentifier();
    return e.id = t, e.body = this.flowEnumBody(this.startNode(), {
      enumName: t.name,
      nameLoc: t.start
    }), this.finishNode(e, "EnumDeclaration");
  }
  isLookaheadToken_lt() {
    const e = this.nextTokenStart();
    if (this.input.charCodeAt(e) === 60) {
      const t = this.input.charCodeAt(e + 1);
      return t !== 60 && t !== 61;
    }
    return false;
  }
  maybeUnwrapTypeCastExpression(e) {
    return e.type === "TypeCastExpression" ? e.expression : e;
  }
};
var _y = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  frasl: "⁄",
  euro: "€",
  image: "ℑ",
  weierp: "℘",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};
var Iy = /^[\da-fA-F]+$/;
var ky = /^\d+$/;
var Sr = Ts({
  AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
  MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>.",
  MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
  UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
  UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
  UnterminatedJsxContent: "Unterminated JSX contents.",
  UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
}, Kt.SyntaxError, "jsx");
_e.j_oTag = new pi("<tag");
_e.j_cTag = new pi("</tag");
_e.j_expr = new pi("<tag>...</tag>", true);
function nr(s3) {
  return s3 ? s3.type === "JSXOpeningFragment" || s3.type === "JSXClosingFragment" : false;
}
function Qr(s3) {
  if (s3.type === "JSXIdentifier")
    return s3.name;
  if (s3.type === "JSXNamespacedName")
    return s3.namespace.name + ":" + s3.name.name;
  if (s3.type === "JSXMemberExpression")
    return Qr(s3.object) + "." + Qr(s3.property);
  throw new Error("Node had unexpected type: " + s3.type);
}
var Ny = (s3) => class extends s3 {
  jsxReadToken() {
    let e = "", t = this.state.pos;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, Sr.UnterminatedJsxContent);
      const r = this.input.charCodeAt(this.state.pos);
      switch (r) {
        case 60:
        case 123:
          return this.state.pos === this.state.start ? r === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(132)) : super.getTokenFromCode(r) : (e += this.input.slice(t, this.state.pos), this.finishToken(131, e));
        case 38:
          e += this.input.slice(t, this.state.pos), e += this.jsxReadEntity(), t = this.state.pos;
          break;
        case 62:
        case 125:
        default:
          xr(r) ? (e += this.input.slice(t, this.state.pos), e += this.jsxReadNewLine(true), t = this.state.pos) : ++this.state.pos;
      }
    }
  }
  jsxReadNewLine(e) {
    const t = this.input.charCodeAt(this.state.pos);
    let r;
    return ++this.state.pos, t === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, r = e ? `
` : `\r
`) : r = String.fromCharCode(t), ++this.state.curLine, this.state.lineStart = this.state.pos, r;
  }
  jsxReadString(e) {
    let t = "", r = ++this.state.pos;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, I.UnterminatedString);
      const i = this.input.charCodeAt(this.state.pos);
      if (i === e)
        break;
      i === 38 ? (t += this.input.slice(r, this.state.pos), t += this.jsxReadEntity(), r = this.state.pos) : xr(i) ? (t += this.input.slice(r, this.state.pos), t += this.jsxReadNewLine(false), r = this.state.pos) : ++this.state.pos;
    }
    return t += this.input.slice(r, this.state.pos++), this.finishToken(123, t);
  }
  jsxReadEntity() {
    let e = "", t = 0, r, i = this.input[this.state.pos];
    const n = ++this.state.pos;
    for (; this.state.pos < this.length && t++ < 10; ) {
      if (i = this.input[this.state.pos++], i === ";") {
        e[0] === "#" ? e[1] === "x" ? (e = e.substr(2), Iy.test(e) && (r = String.fromCodePoint(parseInt(e, 16)))) : (e = e.substr(1), ky.test(e) && (r = String.fromCodePoint(parseInt(e, 10)))) : r = _y[e];
        break;
      }
      e += i;
    }
    return r || (this.state.pos = n, "&");
  }
  jsxReadWord() {
    let e;
    const t = this.state.pos;
    do
      e = this.input.charCodeAt(++this.state.pos);
    while (Zr(e) || e === 45);
    return this.finishToken(130, this.input.slice(t, this.state.pos));
  }
  jsxParseIdentifier() {
    const e = this.startNode();
    return this.match(130) ? e.name = this.state.value : Nl(this.state.type) ? e.name = hr(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
  }
  jsxParseNamespacedName() {
    const e = this.state.start, t = this.state.startLoc, r = this.jsxParseIdentifier();
    if (!this.eat(14))
      return r;
    const i = this.startNodeAt(e, t);
    return i.namespace = r, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
  }
  jsxParseElementName() {
    const e = this.state.start, t = this.state.startLoc;
    let r = this.jsxParseNamespacedName();
    if (r.type === "JSXNamespacedName")
      return r;
    for (; this.eat(16); ) {
      const i = this.startNodeAt(e, t);
      i.object = r, i.property = this.jsxParseIdentifier(), r = this.finishNode(i, "JSXMemberExpression");
    }
    return r;
  }
  jsxParseAttributeValue() {
    let e;
    switch (this.state.type) {
      case 5:
        return e = this.startNode(), this.next(), e = this.jsxParseExpressionContainer(e), e.expression.type === "JSXEmptyExpression" && this.raise(e.start, Sr.AttributeIsEmpty), e;
      case 132:
      case 123:
        return this.parseExprAtom();
      default:
        throw this.raise(this.state.start, Sr.UnsupportedJsxValue);
    }
  }
  jsxParseEmptyExpression() {
    const e = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
    return this.finishNodeAt(e, "JSXEmptyExpression", this.state.start, this.state.startLoc);
  }
  jsxParseSpreadChild(e) {
    return this.next(), e.expression = this.parseExpression(), this.expect(8), this.finishNode(e, "JSXSpreadChild");
  }
  jsxParseExpressionContainer(e) {
    if (this.match(8))
      e.expression = this.jsxParseEmptyExpression();
    else {
      const t = this.parseExpression();
      e.expression = t;
    }
    return this.expect(8), this.finishNode(e, "JSXExpressionContainer");
  }
  jsxParseAttribute() {
    const e = this.startNode();
    return this.eat(5) ? (this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(27) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
  }
  jsxParseOpeningElementAt(e, t) {
    const r = this.startNodeAt(e, t);
    return this.match(133) ? (this.expect(133), this.finishNode(r, "JSXOpeningFragment")) : (r.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(r));
  }
  jsxParseOpeningElementAfterName(e) {
    const t = [];
    for (; !this.match(50) && !this.match(133); )
      t.push(this.jsxParseAttribute());
    return e.attributes = t, e.selfClosing = this.eat(50), this.expect(133), this.finishNode(e, "JSXOpeningElement");
  }
  jsxParseClosingElementAt(e, t) {
    const r = this.startNodeAt(e, t);
    return this.match(133) ? (this.expect(133), this.finishNode(r, "JSXClosingFragment")) : (r.name = this.jsxParseElementName(), this.expect(133), this.finishNode(r, "JSXClosingElement"));
  }
  jsxParseElementAt(e, t) {
    const r = this.startNodeAt(e, t), i = [], n = this.jsxParseOpeningElementAt(e, t);
    let a = null;
    if (!n.selfClosing) {
      e:
        for (; ; )
          switch (this.state.type) {
            case 132:
              if (e = this.state.start, t = this.state.startLoc, this.next(), this.eat(50)) {
                a = this.jsxParseClosingElementAt(e, t);
                break e;
              }
              i.push(this.jsxParseElementAt(e, t));
              break;
            case 131:
              i.push(this.parseExprAtom());
              break;
            case 5: {
              const o = this.startNode();
              this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o));
              break;
            }
            default:
              throw this.unexpected();
          }
      nr(n) && !nr(a) ? this.raise(a.start, Sr.MissingClosingTagFragment) : !nr(n) && nr(a) ? this.raise(a.start, Sr.MissingClosingTagElement, Qr(n.name)) : !nr(n) && !nr(a) && Qr(a.name) !== Qr(n.name) && this.raise(a.start, Sr.MissingClosingTagElement, Qr(n.name));
    }
    if (nr(n) ? (r.openingFragment = n, r.closingFragment = a) : (r.openingElement = n, r.closingElement = a), r.children = i, this.match(43))
      throw this.raise(this.state.start, Sr.UnwrappedAdjacentJSXElements);
    return nr(n) ? this.finishNode(r, "JSXFragment") : this.finishNode(r, "JSXElement");
  }
  jsxParseElement() {
    const e = this.state.start, t = this.state.startLoc;
    return this.next(), this.jsxParseElementAt(e, t);
  }
  parseExprAtom(e) {
    return this.match(131) ? this.parseLiteral(this.state.value, "JSXText") : this.match(132) ? this.jsxParseElement() : this.match(43) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(132), this.jsxParseElement()) : super.parseExprAtom(e);
  }
  getTokenFromCode(e) {
    const t = this.curContext();
    if (t === _e.j_expr)
      return this.jsxReadToken();
    if (t === _e.j_oTag || t === _e.j_cTag) {
      if (lr(e))
        return this.jsxReadWord();
      if (e === 62)
        return ++this.state.pos, this.finishToken(133);
      if ((e === 34 || e === 39) && t === _e.j_oTag)
        return this.jsxReadString(e);
    }
    return e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33 ? (++this.state.pos, this.finishToken(132)) : super.getTokenFromCode(e);
  }
  updateContext(e) {
    super.updateContext(e);
    const {
      context: t,
      type: r
    } = this.state;
    if (r === 50 && e === 132)
      t.splice(-2, 2, _e.j_cTag), this.state.canStartJSXElement = false;
    else if (r === 132)
      t.push(_e.j_expr, _e.j_oTag);
    else if (r === 133) {
      const i = t.pop();
      i === _e.j_oTag && e === 50 || i === _e.j_cTag ? (t.pop(), this.state.canStartJSXElement = t[t.length - 1] === _e.j_expr) : this.state.canStartJSXElement = true;
    } else
      this.state.canStartJSXElement = Ig(r);
  }
};
var Oy = class extends Bl {
  constructor(...e) {
    super(...e), this.types = /* @__PURE__ */ new Set(), this.enums = /* @__PURE__ */ new Set(), this.constEnums = /* @__PURE__ */ new Set(), this.classes = /* @__PURE__ */ new Set(), this.exportOnlyBindings = /* @__PURE__ */ new Set();
  }
};
var Ly = class extends $l {
  createScope(e) {
    return new Oy(e);
  }
  declareName(e, t, r) {
    const i = this.currentScope();
    if (t & Dl) {
      this.maybeExportDefined(i, e), i.exportOnlyBindings.add(e);
      return;
    }
    super.declareName(...arguments), t & cs && (t & Qt || (this.checkRedeclarationInScope(i, e, t, r), this.maybeExportDefined(i, e)), i.types.add(e)), t & wo && i.enums.add(e), t & Eo && i.constEnums.add(e), t & Pn && i.classes.add(e);
  }
  isRedeclaredInScope(e, t, r) {
    if (e.enums.has(t)) {
      if (r & wo) {
        const i = !!(r & Eo), n = e.constEnums.has(t);
        return i !== n;
      }
      return true;
    }
    return r & Pn && e.classes.has(t) ? e.lexical.has(t) ? !!(r & Qt) : false : r & cs && e.types.has(t) ? true : super.isRedeclaredInScope(...arguments);
  }
  checkLocalExport(e) {
    const t = this.scopeStack[0], {
      name: r
    } = e;
    !t.types.has(r) && !t.exportOnlyBindings.has(r) && super.checkLocalExport(e);
  }
};
function My(s3) {
  if (s3 == null)
    throw new Error(`Unexpected ${s3} value.`);
  return s3;
}
function pc(s3) {
  if (!s3)
    throw new Error("Assert fail");
}
var ie = Ts({
  AbstractMethodHasImplementation: "Method '%0' cannot have an implementation because it is marked abstract.",
  AbstractPropertyHasInitializer: "Property '%0' cannot have an initializer because it is marked abstract.",
  AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
  AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
  ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
  DeclareAccessor: "'declare' is not allowed in %0ters.",
  DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
  DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
  DuplicateAccessibilityModifier: "Accessibility modifier already seen.",
  DuplicateModifier: "Duplicate modifier: '%0'.",
  EmptyHeritageClauseType: "'%0' list cannot be empty.",
  EmptyTypeArguments: "Type argument list cannot be empty.",
  EmptyTypeParameters: "Type parameter list cannot be empty.",
  ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
  ImportAliasHasImportType: "An import alias can not use 'import type'.",
  IncompatibleModifiers: "'%0' modifier cannot be used with '%1' modifier.",
  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
  IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0').",
  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
  IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
  InvalidModifierOnTypeMember: "'%0' modifier cannot appear on a type member.",
  InvalidModifiersOrder: "'%0' modifier must precede '%1' modifier.",
  InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
  MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
  MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
  NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
  NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
  OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
  OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
  PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0').",
  ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
  ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
  ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
  SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
  SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
  SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
  StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
  TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
  TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
  TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
  UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
  UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
  UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
  UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
  UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
  UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0."
}, Kt.SyntaxError, "typescript");
function Dy(s3) {
  switch (s3) {
    case "any":
      return "TSAnyKeyword";
    case "boolean":
      return "TSBooleanKeyword";
    case "bigint":
      return "TSBigIntKeyword";
    case "never":
      return "TSNeverKeyword";
    case "number":
      return "TSNumberKeyword";
    case "object":
      return "TSObjectKeyword";
    case "string":
      return "TSStringKeyword";
    case "symbol":
      return "TSSymbolKeyword";
    case "undefined":
      return "TSUndefinedKeyword";
    case "unknown":
      return "TSUnknownKeyword";
    default:
      return;
  }
}
function fc(s3) {
  return s3 === "private" || s3 === "public" || s3 === "protected";
}
var Ry = (s3) => class extends s3 {
  getScopeHandler() {
    return Ly;
  }
  tsIsIdentifier() {
    return Se(this.state.type);
  }
  tsTokenCanFollowModifier() {
    return (this.match(0) || this.match(5) || this.match(49) || this.match(21) || this.match(128) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
  }
  tsNextTokenCanFollowModifier() {
    return this.next(), this.tsTokenCanFollowModifier();
  }
  tsParseModifier(e, t) {
    if (!Se(this.state.type))
      return;
    const r = this.state.value;
    if (e.indexOf(r) !== -1) {
      if (t && this.tsIsStartOfStaticBlocks())
        return;
      if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
        return r;
    }
  }
  tsParseModifiers(e, t, r, i, n) {
    const a = (l, u, c, h) => {
      u === c && e[h] && this.raise(l, ie.InvalidModifiersOrder, c, h);
    }, o = (l, u, c, h) => {
      (e[c] && u === h || e[h] && u === c) && this.raise(l, ie.IncompatibleModifiers, c, h);
    };
    for (; ; ) {
      const l = this.state.start, u = this.tsParseModifier(t.concat(r != null ? r : []), n);
      if (!u)
        break;
      fc(u) ? e.accessibility ? this.raise(l, ie.DuplicateAccessibilityModifier) : (a(l, u, u, "override"), a(l, u, u, "static"), a(l, u, u, "readonly"), e.accessibility = u) : (Object.hasOwnProperty.call(e, u) ? this.raise(l, ie.DuplicateModifier, u) : (a(l, u, "static", "readonly"), a(l, u, "static", "override"), a(l, u, "override", "readonly"), a(l, u, "abstract", "override"), o(l, u, "declare", "override"), o(l, u, "static", "abstract")), e[u] = true), r != null && r.includes(u) && this.raise(l, i, u);
    }
  }
  tsIsListTerminator(e) {
    switch (e) {
      case "EnumMembers":
      case "TypeMembers":
        return this.match(8);
      case "HeritageClauseElement":
        return this.match(5);
      case "TupleElementTypes":
        return this.match(3);
      case "TypeParametersOrArguments":
        return this.match(44);
    }
    throw new Error("Unreachable");
  }
  tsParseList(e, t) {
    const r = [];
    for (; !this.tsIsListTerminator(e); )
      r.push(t());
    return r;
  }
  tsParseDelimitedList(e, t, r) {
    return My(this.tsParseDelimitedListWorker(e, t, true, r));
  }
  tsParseDelimitedListWorker(e, t, r, i) {
    const n = [];
    let a = -1;
    for (; !this.tsIsListTerminator(e); ) {
      a = -1;
      const o = t();
      if (o == null)
        return;
      if (n.push(o), this.eat(12)) {
        a = this.state.lastTokStart;
        continue;
      }
      if (this.tsIsListTerminator(e))
        break;
      r && this.expect(12);
      return;
    }
    return i && (i.value = a), n;
  }
  tsParseBracketedList(e, t, r, i, n) {
    i || (r ? this.expect(0) : this.expect(43));
    const a = this.tsParseDelimitedList(e, t, n);
    return r ? this.expect(3) : this.expect(44), a;
  }
  tsParseImportType() {
    const e = this.startNode();
    return this.expect(77), this.expect(10), this.match(123) || this.raise(this.state.start, ie.UnsupportedImportTypeArgument), e.argument = this.parseExprAtom(), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName(true)), this.match(43) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
  }
  tsParseEntityName(e) {
    let t = this.parseIdentifier();
    for (; this.eat(16); ) {
      const r = this.startNodeAtNode(t);
      r.left = t, r.right = this.parseIdentifier(e), t = this.finishNode(r, "TSQualifiedName");
    }
    return t;
  }
  tsParseTypeReference() {
    const e = this.startNode();
    return e.typeName = this.tsParseEntityName(false), !this.hasPrecedingLineBreak() && this.match(43) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
  }
  tsParseThisTypePredicate(e) {
    this.next();
    const t = this.startNodeAtNode(e);
    return t.parameterName = e, t.typeAnnotation = this.tsParseTypeAnnotation(false), t.asserts = false, this.finishNode(t, "TSTypePredicate");
  }
  tsParseThisTypeNode() {
    const e = this.startNode();
    return this.next(), this.finishNode(e, "TSThisType");
  }
  tsParseTypeQuery() {
    const e = this.startNode();
    return this.expect(81), this.match(77) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(true), this.finishNode(e, "TSTypeQuery");
  }
  tsParseTypeParameter() {
    const e = this.startNode();
    return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsEatThenParseType(75), e.default = this.tsEatThenParseType(27), this.finishNode(e, "TSTypeParameter");
  }
  tsTryParseTypeParameters() {
    if (this.match(43))
      return this.tsParseTypeParameters();
  }
  tsParseTypeParameters() {
    const e = this.startNode();
    this.match(43) || this.match(132) ? this.next() : this.unexpected();
    const t = {
      value: -1
    };
    return e.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true, t), e.params.length === 0 && this.raise(e.start, ie.EmptyTypeParameters), t.value !== -1 && this.addExtra(e, "trailingComma", t.value), this.finishNode(e, "TSTypeParameterDeclaration");
  }
  tsTryNextParseConstantContext() {
    return this.lookahead().type === 69 ? (this.next(), this.tsParseTypeReference()) : null;
  }
  tsFillSignature(e, t) {
    const r = e === 19;
    t.typeParameters = this.tsTryParseTypeParameters(), this.expect(10), t.parameters = this.tsParseBindingListForSignature(), r ? t.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (t.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(e));
  }
  tsParseBindingListForSignature() {
    return this.parseBindingList(11, 41).map((e) => (e.type !== "Identifier" && e.type !== "RestElement" && e.type !== "ObjectPattern" && e.type !== "ArrayPattern" && this.raise(e.start, ie.UnsupportedSignatureParameterKind, e.type), e));
  }
  tsParseTypeMemberSemicolon() {
    !this.eat(12) && !this.isLineTerminator() && this.expect(13);
  }
  tsParseSignatureMember(e, t) {
    return this.tsFillSignature(14, t), this.tsParseTypeMemberSemicolon(), this.finishNode(t, e);
  }
  tsIsUnambiguouslyIndexSignature() {
    return this.next(), Se(this.state.type) ? (this.next(), this.match(14)) : false;
  }
  tsTryParseIndexSignature(e) {
    if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
      return;
    this.expect(0);
    const t = this.parseIdentifier();
    t.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(t), this.expect(3), e.parameters = [t];
    const r = this.tsTryParseTypeAnnotation();
    return r && (e.typeAnnotation = r), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
  }
  tsParsePropertyOrMethodSignature(e, t) {
    this.eat(17) && (e.optional = true);
    const r = e;
    if (this.match(10) || this.match(43)) {
      t && this.raise(e.start, ie.ReadonlyForMethodSignature);
      const i = r;
      if (i.kind && this.match(43) && this.raise(this.state.pos, ie.AccesorCannotHaveTypeParameters), this.tsFillSignature(14, i), this.tsParseTypeMemberSemicolon(), i.kind === "get")
        i.parameters.length > 0 && (this.raise(this.state.pos, I.BadGetterArity), this.isThisParam(i.parameters[0]) && this.raise(this.state.pos, ie.AccesorCannotDeclareThisParameter));
      else if (i.kind === "set") {
        if (i.parameters.length !== 1)
          this.raise(this.state.pos, I.BadSetterArity);
        else {
          const n = i.parameters[0];
          this.isThisParam(n) && this.raise(this.state.pos, ie.AccesorCannotDeclareThisParameter), n.type === "Identifier" && n.optional && this.raise(this.state.pos, ie.SetAccesorCannotHaveOptionalParameter), n.type === "RestElement" && this.raise(this.state.pos, ie.SetAccesorCannotHaveRestParameter);
        }
        i.typeAnnotation && this.raise(i.typeAnnotation.start, ie.SetAccesorCannotHaveReturnType);
      } else
        i.kind = "method";
      return this.finishNode(i, "TSMethodSignature");
    } else {
      const i = r;
      t && (i.readonly = true);
      const n = this.tsTryParseTypeAnnotation();
      return n && (i.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSPropertySignature");
    }
  }
  tsParseTypeMember() {
    const e = this.startNode();
    if (this.match(10) || this.match(43))
      return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
    if (this.match(71)) {
      const r = this.startNode();
      return this.next(), this.match(10) || this.match(43) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(r, "new"), this.tsParsePropertyOrMethodSignature(e, false));
    }
    this.tsParseModifiers(e, ["readonly"], ["declare", "abstract", "private", "protected", "public", "static", "override"], ie.InvalidModifierOnTypeMember);
    const t = this.tsTryParseIndexSignature(e);
    return t || (this.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, this.parsePropertyName(e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
  }
  tsParseTypeLiteral() {
    const e = this.startNode();
    return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
  }
  tsParseObjectTypeMembers() {
    this.expect(5);
    const e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
    return this.expect(8), e;
  }
  tsIsStartOfMappedType() {
    return this.next(), this.eat(47) ? this.isContextual(112) : (this.isContextual(112) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? false : (this.next(), this.match(52)));
  }
  tsParseMappedTypeParameter() {
    const e = this.startNode();
    return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(52), this.finishNode(e, "TSTypeParameter");
  }
  tsParseMappedType() {
    const e = this.startNode();
    return this.expect(5), this.match(47) ? (e.readonly = this.state.value, this.next(), this.expectContextual(112)) : this.eatContextual(112) && (e.readonly = true), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(87) ? this.tsParseType() : null, this.expect(3), this.match(47) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = true), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
  }
  tsParseTupleType() {
    const e = this.startNode();
    e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
    let t = false, r = null;
    return e.elementTypes.forEach((i) => {
      var n;
      let {
        type: a
      } = i;
      t && a !== "TSRestType" && a !== "TSOptionalType" && !(a === "TSNamedTupleMember" && i.optional) && this.raise(i.start, ie.OptionalTypeBeforeRequired), t = t || a === "TSNamedTupleMember" && i.optional || a === "TSOptionalType", a === "TSRestType" && (i = i.typeAnnotation, a = i.type);
      const o = a === "TSNamedTupleMember";
      r = (n = r) != null ? n : o, r !== o && this.raise(i.start, ie.MixedLabeledAndUnlabeledElements);
    }), this.finishNode(e, "TSTupleType");
  }
  tsParseTupleElementType() {
    const {
      start: e,
      startLoc: t
    } = this.state, r = this.eat(21);
    let i = this.tsParseType();
    const n = this.eat(17);
    if (this.eat(14)) {
      const o = this.startNodeAtNode(i);
      o.optional = n, i.type === "TSTypeReference" && !i.typeParameters && i.typeName.type === "Identifier" ? o.label = i.typeName : (this.raise(i.start, ie.InvalidTupleMemberLabel), o.label = i), o.elementType = this.tsParseType(), i = this.finishNode(o, "TSNamedTupleMember");
    } else if (n) {
      const o = this.startNodeAtNode(i);
      o.typeAnnotation = i, i = this.finishNode(o, "TSOptionalType");
    }
    if (r) {
      const o = this.startNodeAt(e, t);
      o.typeAnnotation = i, i = this.finishNode(o, "TSRestType");
    }
    return i;
  }
  tsParseParenthesizedType() {
    const e = this.startNode();
    return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
  }
  tsParseFunctionOrConstructorType(e, t) {
    const r = this.startNode();
    return e === "TSConstructorType" && (r.abstract = !!t, t && this.next(), this.next()), this.tsFillSignature(19, r), this.finishNode(r, e);
  }
  tsParseLiteralTypeNode() {
    const e = this.startNode();
    return e.literal = (() => {
      switch (this.state.type) {
        case 124:
        case 125:
        case 123:
        case 79:
        case 80:
          return this.parseExprAtom();
        default:
          throw this.unexpected();
      }
    })(), this.finishNode(e, "TSLiteralType");
  }
  tsParseTemplateLiteralType() {
    const e = this.startNode();
    return e.literal = this.parseTemplate(false), this.finishNode(e, "TSLiteralType");
  }
  parseTemplateSubstitution() {
    return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
  }
  tsParseThisTypeOrThisTypePredicate() {
    const e = this.tsParseThisTypeNode();
    return this.isContextual(107) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
  }
  tsParseNonArrayType() {
    switch (this.state.type) {
      case 123:
      case 124:
      case 125:
      case 79:
      case 80:
        return this.tsParseLiteralTypeNode();
      case 47:
        if (this.state.value === "-") {
          const e = this.startNode(), t = this.lookahead();
          if (t.type !== 124 && t.type !== 125)
            throw this.unexpected();
          return e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
        }
        break;
      case 72:
        return this.tsParseThisTypeOrThisTypePredicate();
      case 81:
        return this.tsParseTypeQuery();
      case 77:
        return this.tsParseImportType();
      case 5:
        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
      case 0:
        return this.tsParseTupleType();
      case 10:
        return this.tsParseParenthesizedType();
      case 22:
        return this.tsParseTemplateLiteralType();
      default: {
        const {
          type: e
        } = this.state;
        if (Se(e) || e === 82 || e === 78) {
          const t = e === 82 ? "TSVoidKeyword" : e === 78 ? "TSNullKeyword" : Dy(this.state.value);
          if (t !== void 0 && this.lookaheadCharCode() !== 46) {
            const r = this.startNode();
            return this.next(), this.finishNode(r, t);
          }
          return this.tsParseTypeReference();
        }
      }
    }
    throw this.unexpected();
  }
  tsParseArrayTypeOrHigher() {
    let e = this.tsParseNonArrayType();
    for (; !this.hasPrecedingLineBreak() && this.eat(0); )
      if (this.match(3)) {
        const t = this.startNodeAtNode(e);
        t.elementType = e, this.expect(3), e = this.finishNode(t, "TSArrayType");
      } else {
        const t = this.startNodeAtNode(e);
        t.objectType = e, t.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(t, "TSIndexedAccessType");
      }
    return e;
  }
  tsParseTypeOperator() {
    const e = this.startNode(), t = this.state.value;
    return this.next(), e.operator = t, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), t === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
  }
  tsCheckTypeAnnotationForReadOnly(e) {
    switch (e.typeAnnotation.type) {
      case "TSTupleType":
      case "TSArrayType":
        return;
      default:
        this.raise(e.start, ie.UnexpectedReadonly);
    }
  }
  tsParseInferType() {
    const e = this.startNode();
    this.expectContextual(106);
    const t = this.startNode();
    return t.name = this.tsParseTypeParameterName(), e.typeParameter = this.finishNode(t, "TSTypeParameter"), this.finishNode(e, "TSInferType");
  }
  tsParseTypeOperatorOrHigher() {
    return Dg(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(106) ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
  }
  tsParseUnionOrIntersectionType(e, t, r) {
    const i = this.startNode(), n = this.eat(r), a = [];
    do
      a.push(t());
    while (this.eat(r));
    return a.length === 1 && !n ? a[0] : (i.types = a, this.finishNode(i, e));
  }
  tsParseIntersectionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 41);
  }
  tsParseUnionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 39);
  }
  tsIsStartOfFunctionType() {
    return this.match(43) ? true : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
  }
  tsSkipParameterStart() {
    if (Se(this.state.type) || this.match(72))
      return this.next(), true;
    if (this.match(5)) {
      let e = 1;
      for (this.next(); e > 0; )
        this.match(5) ? ++e : this.match(8) && --e, this.next();
      return true;
    }
    if (this.match(0)) {
      let e = 1;
      for (this.next(); e > 0; )
        this.match(0) ? ++e : this.match(3) && --e, this.next();
      return true;
    }
    return false;
  }
  tsIsUnambiguouslyStartOfFunctionType() {
    return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(27) || this.match(11) && (this.next(), this.match(19))));
  }
  tsParseTypeOrTypePredicateAnnotation(e) {
    return this.tsInType(() => {
      const t = this.startNode();
      this.expect(e);
      const r = this.startNode(), i = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
      if (i && this.match(72)) {
        let o = this.tsParseThisTypeOrThisTypePredicate();
        return o.type === "TSThisType" ? (r.parameterName = o, r.asserts = true, r.typeAnnotation = null, o = this.finishNode(r, "TSTypePredicate")) : (this.resetStartLocationFromNode(o, r), o.asserts = true), t.typeAnnotation = o, this.finishNode(t, "TSTypeAnnotation");
      }
      const n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
      if (!n)
        return i ? (r.parameterName = this.parseIdentifier(), r.asserts = i, r.typeAnnotation = null, t.typeAnnotation = this.finishNode(r, "TSTypePredicate"), this.finishNode(t, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(false, t);
      const a = this.tsParseTypeAnnotation(false);
      return r.parameterName = n, r.typeAnnotation = a, r.asserts = i, t.typeAnnotation = this.finishNode(r, "TSTypePredicate"), this.finishNode(t, "TSTypeAnnotation");
    });
  }
  tsTryParseTypeOrTypePredicateAnnotation() {
    return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
  }
  tsTryParseTypeAnnotation() {
    return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
  }
  tsTryParseType() {
    return this.tsEatThenParseType(14);
  }
  tsParseTypePredicatePrefix() {
    const e = this.parseIdentifier();
    if (this.isContextual(107) && !this.hasPrecedingLineBreak())
      return this.next(), e;
  }
  tsParseTypePredicateAsserts() {
    if (this.state.type !== 100)
      return false;
    const e = this.state.containsEsc;
    return this.next(), !Se(this.state.type) && !this.match(72) ? false : (e && this.raise(this.state.lastTokStart, I.InvalidEscapedReservedWord, "asserts"), true);
  }
  tsParseTypeAnnotation(e = true, t = this.startNode()) {
    return this.tsInType(() => {
      e && this.expect(14), t.typeAnnotation = this.tsParseType();
    }), this.finishNode(t, "TSTypeAnnotation");
  }
  tsParseType() {
    pc(this.state.inType);
    const e = this.tsParseNonConditionalType();
    if (this.hasPrecedingLineBreak() || !this.eat(75))
      return e;
    const t = this.startNodeAtNode(e);
    return t.checkType = e, t.extendsType = this.tsParseNonConditionalType(), this.expect(17), t.trueType = this.tsParseType(), this.expect(14), t.falseType = this.tsParseType(), this.finishNode(t, "TSConditionalType");
  }
  isAbstractConstructorSignature() {
    return this.isContextual(114) && this.lookahead().type === 71;
  }
  tsParseNonConditionalType() {
    return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(71) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", true) : this.tsParseUnionTypeOrHigher();
  }
  tsParseTypeAssertion() {
    this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(this.state.start, ie.ReservedTypeAssertion);
    const e = this.startNode(), t = this.tsTryNextParseConstantContext();
    return e.typeAnnotation = t || this.tsNextThenParseType(), this.expect(44), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
  }
  tsParseHeritageClause(e) {
    const t = this.state.start, r = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
    return r.length || this.raise(t, ie.EmptyHeritageClauseType, e), r;
  }
  tsParseExpressionWithTypeArguments() {
    const e = this.startNode();
    return e.expression = this.tsParseEntityName(false), this.match(43) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSExpressionWithTypeArguments");
  }
  tsParseInterfaceDeclaration(e) {
    Se(this.state.type) ? (e.id = this.parseIdentifier(), this.checkLVal(e.id, "typescript interface declaration", Yg)) : (e.id = null, this.raise(this.state.start, ie.MissingInterfaceName)), e.typeParameters = this.tsTryParseTypeParameters(), this.eat(75) && (e.extends = this.tsParseHeritageClause("extends"));
    const t = this.startNode();
    return t.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(t, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
  }
  tsParseTypeAliasDeclaration(e) {
    return e.id = this.parseIdentifier(), this.checkLVal(e.id, "typescript type alias", Jg), e.typeParameters = this.tsTryParseTypeParameters(), e.typeAnnotation = this.tsInType(() => {
      if (this.expect(27), this.isContextual(105) && this.lookahead().type !== 16) {
        const t = this.startNode();
        return this.next(), this.finishNode(t, "TSIntrinsicKeyword");
      }
      return this.tsParseType();
    }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
  }
  tsInNoContext(e) {
    const t = this.state.context;
    this.state.context = [t[0]];
    try {
      return e();
    } finally {
      this.state.context = t;
    }
  }
  tsInType(e) {
    const t = this.state.inType;
    this.state.inType = true;
    try {
      return e();
    } finally {
      this.state.inType = t;
    }
  }
  tsEatThenParseType(e) {
    return this.match(e) ? this.tsNextThenParseType() : void 0;
  }
  tsExpectThenParseType(e) {
    return this.tsDoThenParseType(() => this.expect(e));
  }
  tsNextThenParseType() {
    return this.tsDoThenParseType(() => this.next());
  }
  tsDoThenParseType(e) {
    return this.tsInType(() => (e(), this.tsParseType()));
  }
  tsParseEnumMember() {
    const e = this.startNode();
    return e.id = this.match(123) ? this.parseExprAtom() : this.parseIdentifier(true), this.eat(27) && (e.initializer = this.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
  }
  tsParseEnumDeclaration(e, t) {
    return t && (e.const = true), e.id = this.parseIdentifier(), this.checkLVal(e.id, "typescript enum declaration", t ? Xg : gp), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
  }
  tsParseModuleBlock() {
    const e = this.startNode();
    return this.scope.enter(Jr), this.expect(5), this.parseBlockOrModuleBlockBody(e.body = [], void 0, true, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
  }
  tsParseModuleOrNamespaceDeclaration(e, t = false) {
    if (e.id = this.parseIdentifier(), t || this.checkLVal(e.id, "module or namespace declaration", Zg), this.eat(16)) {
      const r = this.startNode();
      this.tsParseModuleOrNamespaceDeclaration(r, true), e.body = r;
    } else
      this.scope.enter(an), this.prodParam.enter(ts), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
    return this.finishNode(e, "TSModuleDeclaration");
  }
  tsParseAmbientExternalModuleDeclaration(e) {
    return this.isContextual(103) ? (e.global = true, e.id = this.parseIdentifier()) : this.match(123) ? e.id = this.parseExprAtom() : this.unexpected(), this.match(5) ? (this.scope.enter(an), this.prodParam.enter(ts), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
  }
  tsParseImportEqualsDeclaration(e, t) {
    e.isExport = t || false, e.id = this.parseIdentifier(), this.checkLVal(e.id, "import equals declaration", gt), this.expect(27);
    const r = this.tsParseModuleReference();
    return e.importKind === "type" && r.type !== "TSExternalModuleReference" && this.raise(r.start, ie.ImportAliasHasImportType), e.moduleReference = r, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
  }
  tsIsExternalModuleReference() {
    return this.isContextual(110) && this.lookaheadCharCode() === 40;
  }
  tsParseModuleReference() {
    return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
  }
  tsParseExternalModuleReference() {
    const e = this.startNode();
    if (this.expectContextual(110), this.expect(10), !this.match(123))
      throw this.unexpected();
    return e.expression = this.parseExprAtom(), this.expect(11), this.finishNode(e, "TSExternalModuleReference");
  }
  tsLookAhead(e) {
    const t = this.state.clone(), r = e();
    return this.state = t, r;
  }
  tsTryParseAndCatch(e) {
    const t = this.tryParse((r) => e() || r());
    if (!(t.aborted || !t.node))
      return t.error && (this.state = t.failState), t.node;
  }
  tsTryParse(e) {
    const t = this.state.clone(), r = e();
    if (r !== void 0 && r !== false)
      return r;
    this.state = t;
  }
  tsTryParseDeclare(e) {
    if (this.isLineTerminator())
      return;
    let t = this.state.type, r;
    return this.isContextual(93) && (t = 68, r = "let"), this.tsInAmbientContext(() => {
      switch (t) {
        case 62:
          return e.declare = true, this.parseFunctionStatement(e, false, true);
        case 74:
          return e.declare = true, this.parseClass(e, true, false);
        case 69:
          if (this.match(69) && this.isLookaheadContextual("enum"))
            return this.expect(69), this.expectContextual(116), this.tsParseEnumDeclaration(e, true);
        case 68:
          return r = r || this.state.value, this.parseVarStatement(e, r);
        case 103:
          return this.tsParseAmbientExternalModuleDeclaration(e);
        default:
          if (Se(t))
            return this.tsParseDeclaration(e, this.state.value, true);
      }
    });
  }
  tsTryParseExportDeclaration() {
    return this.tsParseDeclaration(this.startNode(), this.state.value, true);
  }
  tsParseExpressionStatement(e, t) {
    switch (t.name) {
      case "declare": {
        const r = this.tsTryParseDeclare(e);
        if (r)
          return r.declare = true, r;
        break;
      }
      case "global":
        if (this.match(5)) {
          this.scope.enter(an), this.prodParam.enter(ts);
          const r = e;
          return r.global = true, r.id = t, r.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(r, "TSModuleDeclaration");
        }
        break;
      default:
        return this.tsParseDeclaration(e, t.name, false);
    }
  }
  tsParseDeclaration(e, t, r) {
    switch (t) {
      case "abstract":
        if (this.tsCheckLineTerminator(r) && (this.match(74) || Se(this.state.type)))
          return this.tsParseAbstractDeclaration(e);
        break;
      case "enum":
        if (r || Se(this.state.type))
          return r && this.next(), this.tsParseEnumDeclaration(e, false);
        break;
      case "interface":
        if (this.tsCheckLineTerminator(r) && Se(this.state.type))
          return this.tsParseInterfaceDeclaration(e);
        break;
      case "module":
        if (this.tsCheckLineTerminator(r)) {
          if (this.match(123))
            return this.tsParseAmbientExternalModuleDeclaration(e);
          if (Se(this.state.type))
            return this.tsParseModuleOrNamespaceDeclaration(e);
        }
        break;
      case "namespace":
        if (this.tsCheckLineTerminator(r) && Se(this.state.type))
          return this.tsParseModuleOrNamespaceDeclaration(e);
        break;
      case "type":
        if (this.tsCheckLineTerminator(r) && Se(this.state.type))
          return this.tsParseTypeAliasDeclaration(e);
        break;
    }
  }
  tsCheckLineTerminator(e) {
    return e ? this.hasFollowingLineBreak() ? false : (this.next(), true) : !this.isLineTerminator();
  }
  tsTryParseGenericAsyncArrowFunction(e, t) {
    if (!this.match(43))
      return;
    const r = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = true;
    const i = this.tsTryParseAndCatch(() => {
      const n = this.startNodeAt(e, t);
      return n.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(n), n.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), n;
    });
    if (this.state.maybeInArrowParameters = r, !!i)
      return this.parseArrowExpression(i, null, true);
  }
  tsParseTypeArguments() {
    const e = this.startNode();
    return e.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(43), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 && this.raise(e.start, ie.EmptyTypeArguments), this.expect(44), this.finishNode(e, "TSTypeParameterInstantiation");
  }
  tsIsDeclarationStart() {
    return Rg(this.state.type);
  }
  isExportDefaultSpecifier() {
    return this.tsIsDeclarationStart() ? false : super.isExportDefaultSpecifier();
  }
  parseAssignableListItem(e, t) {
    const r = this.state.start, i = this.state.startLoc;
    let n, a = false, o = false;
    if (e !== void 0) {
      const c = {};
      this.tsParseModifiers(c, ["public", "private", "protected", "override", "readonly"]), n = c.accessibility, o = c.override, a = c.readonly, e === false && (n || a || o) && this.raise(r, ie.UnexpectedParameterModifier);
    }
    const l = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(l);
    const u = this.parseMaybeDefault(l.start, l.loc.start, l);
    if (n || a || o) {
      const c = this.startNodeAt(r, i);
      return t.length && (c.decorators = t), n && (c.accessibility = n), a && (c.readonly = a), o && (c.override = o), u.type !== "Identifier" && u.type !== "AssignmentPattern" && this.raise(c.start, ie.UnsupportedParameterPropertyKind), c.parameter = u, this.finishNode(c, "TSParameterProperty");
    }
    return t.length && (l.decorators = t), u;
  }
  parseFunctionBodyAndFinish(e, t, r = false) {
    this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
    const i = t === "FunctionDeclaration" ? "TSDeclareFunction" : t === "ClassMethod" || t === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
    if (i && !this.match(5) && this.isLineTerminator()) {
      this.finishNode(e, i);
      return;
    }
    if (i === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(e.start, ie.DeclareFunctionHasImplementation), e.declare)) {
      super.parseFunctionBodyAndFinish(e, i, r);
      return;
    }
    super.parseFunctionBodyAndFinish(e, t, r);
  }
  registerFunctionStatementId(e) {
    !e.body && e.id ? this.checkLVal(e.id, "function name", lc) : super.registerFunctionStatementId(...arguments);
  }
  tsCheckForInvalidTypeCasts(e) {
    e.forEach((t) => {
      (t == null ? void 0 : t.type) === "TSTypeCastExpression" && this.raise(t.typeAnnotation.start, ie.UnexpectedTypeAnnotation);
    });
  }
  toReferencedList(e, t) {
    return this.tsCheckForInvalidTypeCasts(e), e;
  }
  parseArrayLike(...e) {
    const t = super.parseArrayLike(...e);
    return t.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(t.elements), t;
  }
  parseSubscript(e, t, r, i, n) {
    if (!this.hasPrecedingLineBreak() && this.match(33)) {
      this.state.canStartJSXElement = false, this.next();
      const o = this.startNodeAt(t, r);
      return o.expression = e, this.finishNode(o, "TSNonNullExpression");
    }
    let a = false;
    if (this.match(18) && this.lookaheadCharCode() === 60) {
      if (i)
        return n.stop = true, e;
      n.optionalChainMember = a = true, this.next();
    }
    if (this.match(43)) {
      let o;
      const l = this.tsTryParseAndCatch(() => {
        if (!i && this.atPossibleAsyncArrow(e)) {
          const h = this.tsTryParseGenericAsyncArrowFunction(t, r);
          if (h)
            return h;
        }
        const u = this.startNodeAt(t, r);
        u.callee = e;
        const c = this.tsParseTypeArguments();
        if (c) {
          if (a && !this.match(10) && (o = this.state.pos, this.unexpected()), !i && this.eat(10))
            return u.arguments = this.parseCallExpressionArguments(11, false), this.tsCheckForInvalidTypeCasts(u.arguments), u.typeParameters = c, n.optionalChainMember && (u.optional = a), this.finishCallExpression(u, n.optionalChainMember);
          if (this.match(22)) {
            const h = this.parseTaggedTemplateExpression(e, t, r, n);
            return h.typeParameters = c, h;
          }
        }
        this.unexpected();
      });
      if (o && this.unexpected(o, 10), l)
        return l;
    }
    return super.parseSubscript(e, t, r, i, n);
  }
  parseNewArguments(e) {
    if (this.match(43)) {
      const t = this.tsTryParseAndCatch(() => {
        const r = this.tsParseTypeArguments();
        return this.match(10) || this.unexpected(), r;
      });
      t && (e.typeParameters = t);
    }
    super.parseNewArguments(e);
  }
  parseExprOp(e, t, r, i) {
    if (sn(52) > i && !this.hasPrecedingLineBreak() && this.isContextual(87)) {
      const n = this.startNodeAt(t, r);
      n.expression = e;
      const a = this.tsTryNextParseConstantContext();
      return a ? n.typeAnnotation = a : n.typeAnnotation = this.tsNextThenParseType(), this.finishNode(n, "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, t, r, i);
    }
    return super.parseExprOp(e, t, r, i);
  }
  checkReservedWord(e, t, r, i) {
  }
  checkDuplicateExports() {
  }
  parseImport(e) {
    if (e.importKind = "value", Se(this.state.type) || this.match(49) || this.match(5)) {
      let r = this.lookahead();
      if (this.isContextual(120) && r.type !== 12 && r.type !== 91 && r.type !== 27 && (e.importKind = "type", this.next(), r = this.lookahead()), Se(this.state.type) && r.type === 27)
        return this.tsParseImportEqualsDeclaration(e);
    }
    const t = super.parseImport(e);
    return t.importKind === "type" && t.specifiers.length > 1 && t.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(t.start, ie.TypeImportCannotSpecifyDefaultAndNamed), t;
  }
  parseExport(e) {
    if (this.match(77))
      return this.next(), this.isContextual(120) && this.lookaheadCharCode() !== 61 ? (e.importKind = "type", this.next()) : e.importKind = "value", this.tsParseImportEqualsDeclaration(e, true);
    if (this.eat(27)) {
      const t = e;
      return t.expression = this.parseExpression(), this.semicolon(), this.finishNode(t, "TSExportAssignment");
    } else if (this.eatContextual(87)) {
      const t = e;
      return this.expectContextual(118), t.id = this.parseIdentifier(), this.semicolon(), this.finishNode(t, "TSNamespaceExportDeclaration");
    } else
      return this.isContextual(120) && this.lookahead().type === 5 ? (this.next(), e.exportKind = "type") : e.exportKind = "value", super.parseExport(e);
  }
  isAbstractClass() {
    return this.isContextual(114) && this.lookahead().type === 74;
  }
  parseExportDefaultExpression() {
    if (this.isAbstractClass()) {
      const e = this.startNode();
      return this.next(), e.abstract = true, this.parseClass(e, true, true), e;
    }
    if (this.match(119)) {
      const e = this.startNode();
      this.next();
      const t = this.tsParseInterfaceDeclaration(e);
      if (t)
        return t;
    }
    return super.parseExportDefaultExpression();
  }
  parseStatementContent(e, t) {
    if (this.state.type === 69 && this.lookahead().type === 116) {
      const i = this.startNode();
      return this.next(), this.expectContextual(116), this.tsParseEnumDeclaration(i, true);
    }
    return super.parseStatementContent(e, t);
  }
  parseAccessModifier() {
    return this.tsParseModifier(["public", "protected", "private"]);
  }
  tsHasSomeModifiers(e, t) {
    return t.some((r) => fc(r) ? e.accessibility === r : !!e[r]);
  }
  tsIsStartOfStaticBlocks() {
    return this.isContextual(98) && this.lookaheadCharCode() === 123;
  }
  parseClassMember(e, t, r) {
    const i = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
    this.tsParseModifiers(t, i, void 0, void 0, true);
    const n = () => {
      this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(t, i) && this.raise(this.state.pos, ie.StaticBlockCannotHaveModifier), this.parseClassStaticBlock(e, t)) : this.parseClassMemberWithIsStatic(e, t, r, !!t.static);
    };
    t.declare ? this.tsInAmbientContext(n) : n();
  }
  parseClassMemberWithIsStatic(e, t, r, i) {
    const n = this.tsTryParseIndexSignature(t);
    if (n) {
      e.body.push(n), t.abstract && this.raise(t.start, ie.IndexSignatureHasAbstract), t.accessibility && this.raise(t.start, ie.IndexSignatureHasAccessibility, t.accessibility), t.declare && this.raise(t.start, ie.IndexSignatureHasDeclare), t.override && this.raise(t.start, ie.IndexSignatureHasOverride);
      return;
    }
    !this.state.inAbstractClass && t.abstract && this.raise(t.start, ie.NonAbstractClassHasAbstractMethod), t.override && (r.hadSuperClass || this.raise(t.start, ie.OverrideNotInSubClass)), super.parseClassMemberWithIsStatic(e, t, r, i);
  }
  parsePostMemberNameModifiers(e) {
    this.eat(17) && (e.optional = true), e.readonly && this.match(10) && this.raise(e.start, ie.ClassMethodHasReadonly), e.declare && this.match(10) && this.raise(e.start, ie.ClassMethodHasDeclare);
  }
  parseExpressionStatement(e, t) {
    return (t.type === "Identifier" ? this.tsParseExpressionStatement(e, t) : void 0) || super.parseExpressionStatement(e, t);
  }
  shouldParseExportDeclaration() {
    return this.tsIsDeclarationStart() ? true : super.shouldParseExportDeclaration();
  }
  parseConditional(e, t, r, i) {
    if (!this.state.maybeInArrowParameters || !this.match(17))
      return super.parseConditional(e, t, r, i);
    const n = this.tryParse(() => super.parseConditional(e, t, r));
    return n.node ? (n.error && (this.state = n.failState), n.node) : (n.error && super.setOptionalParametersError(i, n.error), e);
  }
  parseParenItem(e, t, r) {
    if (e = super.parseParenItem(e, t, r), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
      const i = this.startNodeAt(t, r);
      return i.expression = e, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression");
    }
    return e;
  }
  parseExportDeclaration(e) {
    const t = this.state.start, r = this.state.startLoc, i = this.eatContextual(115);
    if (i && (this.isContextual(115) || !this.shouldParseExportDeclaration()))
      throw this.raise(this.state.start, ie.ExpectedAmbientAfterExportDeclare);
    let n;
    return Se(this.state.type) && (n = this.tsTryParseExportDeclaration()), n || (n = super.parseExportDeclaration(e)), n && (n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), n && i && (this.resetStartLocation(n, t, r), n.declare = true), n;
  }
  parseClassId(e, t, r) {
    if ((!t || r) && this.isContextual(104))
      return;
    super.parseClassId(e, t, r, e.declare ? lc : dp);
    const i = this.tsTryParseTypeParameters();
    i && (e.typeParameters = i);
  }
  parseClassPropertyAnnotation(e) {
    !e.optional && this.eat(33) && (e.definite = true);
    const t = this.tsTryParseTypeAnnotation();
    t && (e.typeAnnotation = t);
  }
  parseClassProperty(e) {
    if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && this.match(27) && this.raise(this.state.start, ie.DeclareClassFieldHasInitializer), e.abstract && this.match(27)) {
      const {
        key: t
      } = e;
      this.raise(this.state.start, ie.AbstractPropertyHasInitializer, t.type === "Identifier" && !e.computed ? t.name : `[${this.input.slice(t.start, t.end)}]`);
    }
    return super.parseClassProperty(e);
  }
  parseClassPrivateProperty(e) {
    return e.abstract && this.raise(e.start, ie.PrivateElementHasAbstract), e.accessibility && this.raise(e.start, ie.PrivateElementHasAccessibility, e.accessibility), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
  }
  pushClassMethod(e, t, r, i, n, a) {
    const o = this.tsTryParseTypeParameters();
    o && n && this.raise(o.start, ie.ConstructorHasTypeParameters), t.declare && (t.kind === "get" || t.kind === "set") && this.raise(t.start, ie.DeclareAccessor, t.kind), o && (t.typeParameters = o), super.pushClassMethod(e, t, r, i, n, a);
  }
  pushClassPrivateMethod(e, t, r, i) {
    const n = this.tsTryParseTypeParameters();
    n && (t.typeParameters = n), super.pushClassPrivateMethod(e, t, r, i);
  }
  declareClassPrivateMethodInScope(e, t) {
    e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && !e.value.body || super.declareClassPrivateMethodInScope(e, t));
  }
  parseClassSuper(e) {
    super.parseClassSuper(e), e.superClass && this.match(43) && (e.superTypeParameters = this.tsParseTypeArguments()), this.eatContextual(104) && (e.implements = this.tsParseHeritageClause("implements"));
  }
  parseObjPropValue(e, ...t) {
    const r = this.tsTryParseTypeParameters();
    r && (e.typeParameters = r), super.parseObjPropValue(e, ...t);
  }
  parseFunctionParams(e, t) {
    const r = this.tsTryParseTypeParameters();
    r && (e.typeParameters = r), super.parseFunctionParams(e, t);
  }
  parseVarId(e, t) {
    super.parseVarId(e, t), e.id.type === "Identifier" && this.eat(33) && (e.definite = true);
    const r = this.tsTryParseTypeAnnotation();
    r && (e.id.typeAnnotation = r, this.resetEndLocation(e.id));
  }
  parseAsyncArrowFromCallExpression(e, t) {
    return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, t);
  }
  parseMaybeAssign(...e) {
    var t, r, i, n, a, o, l;
    let u, c, h;
    if (this.hasPlugin("jsx") && (this.match(132) || this.match(43))) {
      if (u = this.state.clone(), c = this.tryParse(() => super.parseMaybeAssign(...e), u), !c.error)
        return c.node;
      const {
        context: g
      } = this.state;
      g[g.length - 1] === _e.j_oTag ? g.length -= 2 : g[g.length - 1] === _e.j_expr && (g.length -= 1);
    }
    if (!((t = c) != null && t.error) && !this.match(43))
      return super.parseMaybeAssign(...e);
    let p;
    u = u || this.state.clone();
    const f = this.tryParse((g) => {
      var d, m;
      p = this.tsParseTypeParameters();
      const y = super.parseMaybeAssign(...e);
      return (y.type !== "ArrowFunctionExpression" || (d = y.extra) != null && d.parenthesized) && g(), ((m = p) == null ? void 0 : m.params.length) !== 0 && this.resetStartLocationFromNode(y, p), y.typeParameters = p, y;
    }, u);
    if (!f.error && !f.aborted)
      return p && this.reportReservedArrowTypeParam(p), f.node;
    if (!c && (pc(!this.hasPlugin("jsx")), h = this.tryParse(() => super.parseMaybeAssign(...e), u), !h.error))
      return h.node;
    if ((r = c) != null && r.node)
      return this.state = c.failState, c.node;
    if (f.node)
      return this.state = f.failState, p && this.reportReservedArrowTypeParam(p), f.node;
    if ((i = h) != null && i.node)
      return this.state = h.failState, h.node;
    throw (n = c) != null && n.thrown ? c.error : f.thrown ? f.error : (a = h) != null && a.thrown ? h.error : ((o = c) == null ? void 0 : o.error) || f.error || ((l = h) == null ? void 0 : l.error);
  }
  reportReservedArrowTypeParam(e) {
    var t;
    e.params.length === 1 && !((t = e.extra) != null && t.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(e.start, ie.ReservedArrowTypeParam);
  }
  parseMaybeUnary(e) {
    return !this.hasPlugin("jsx") && this.match(43) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e);
  }
  parseArrow(e) {
    if (this.match(14)) {
      const t = this.tryParse((r) => {
        const i = this.tsParseTypeOrTypePredicateAnnotation(14);
        return (this.canInsertSemicolon() || !this.match(19)) && r(), i;
      });
      if (t.aborted)
        return;
      t.thrown || (t.error && (this.state = t.failState), e.returnType = t.node);
    }
    return super.parseArrow(e);
  }
  parseAssignableListItemTypes(e) {
    this.eat(17) && (e.type !== "Identifier" && !this.state.isAmbientContext && !this.state.inType && this.raise(e.start, ie.PatternIsOptional), e.optional = true);
    const t = this.tsTryParseTypeAnnotation();
    return t && (e.typeAnnotation = t), this.resetEndLocation(e), e;
  }
  isAssignable(e, t) {
    switch (e.type) {
      case "TSTypeCastExpression":
        return this.isAssignable(e.expression, t);
      case "TSParameterProperty":
        return true;
      default:
        return super.isAssignable(e, t);
    }
  }
  toAssignable(e, t = false) {
    switch (e.type) {
      case "TSTypeCastExpression":
        return super.toAssignable(this.typeCastToParameter(e), t);
      case "TSParameterProperty":
        return super.toAssignable(e, t);
      case "ParenthesizedExpression":
        return this.toAssignableParenthesizedExpression(e, t);
      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        return e.expression = this.toAssignable(e.expression, t), e;
      default:
        return super.toAssignable(e, t);
    }
  }
  toAssignableParenthesizedExpression(e, t) {
    switch (e.expression.type) {
      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
      case "ParenthesizedExpression":
        return e.expression = this.toAssignable(e.expression, t), e;
      default:
        return super.toAssignable(e, t);
    }
  }
  checkLVal(e, t, ...r) {
    var i;
    switch (e.type) {
      case "TSTypeCastExpression":
        return;
      case "TSParameterProperty":
        this.checkLVal(e.parameter, "parameter property", ...r);
        return;
      case "TSAsExpression":
      case "TSTypeAssertion":
        if (!r[0] && t !== "parenthesized expression" && !((i = e.extra) != null && i.parenthesized)) {
          this.raise(e.start, I.InvalidLhs, t);
          break;
        }
        this.checkLVal(e.expression, "parenthesized expression", ...r);
        return;
      case "TSNonNullExpression":
        this.checkLVal(e.expression, t, ...r);
        return;
      default:
        super.checkLVal(e, t, ...r);
        return;
    }
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 72:
        return this.parseIdentifier(true);
      default:
        return super.parseBindingAtom();
    }
  }
  parseMaybeDecoratorArguments(e) {
    if (this.match(43)) {
      const t = this.tsParseTypeArguments();
      if (this.match(10)) {
        const r = super.parseMaybeDecoratorArguments(e);
        return r.typeParameters = t, r;
      }
      this.unexpected(this.state.start, 10);
    }
    return super.parseMaybeDecoratorArguments(e);
  }
  checkCommaAfterRest(e) {
    this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? this.next() : super.checkCommaAfterRest(e);
  }
  isClassMethod() {
    return this.match(43) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(33) || this.match(14) || super.isClassProperty();
  }
  parseMaybeDefault(...e) {
    const t = super.parseMaybeDefault(...e);
    return t.type === "AssignmentPattern" && t.typeAnnotation && t.right.start < t.typeAnnotation.start && this.raise(t.typeAnnotation.start, ie.TypeAnnotationAfterAssign), t;
  }
  getTokenFromCode(e) {
    if (this.state.inType) {
      if (e === 62)
        return this.finishOp(44, 1);
      if (e === 60)
        return this.finishOp(43, 1);
    }
    return super.getTokenFromCode(e);
  }
  reScan_lt_gt() {
    const {
      type: e
    } = this.state;
    e === 43 ? (this.state.pos -= 1, this.readToken_lt()) : e === 44 && (this.state.pos -= 1, this.readToken_gt());
  }
  toAssignableList(e) {
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (!!r)
        switch (r.type) {
          case "TSTypeCastExpression":
            e[t] = this.typeCastToParameter(r);
            break;
          case "TSAsExpression":
          case "TSTypeAssertion":
            this.state.maybeInArrowParameters ? this.raise(r.start, ie.UnexpectedTypeCastInParameter) : e[t] = this.typeCastToParameter(r);
            break;
        }
    }
    return super.toAssignableList(...arguments);
  }
  typeCastToParameter(e) {
    return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.end, e.typeAnnotation.loc.end), e.expression;
  }
  shouldParseArrow(e) {
    return this.match(14) ? e.every((t) => this.isAssignable(t, true)) : super.shouldParseArrow(e);
  }
  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }
  canHaveLeadingDecorator() {
    return super.canHaveLeadingDecorator() || this.isAbstractClass();
  }
  jsxParseOpeningElementAfterName(e) {
    if (this.match(43)) {
      const t = this.tsTryParseAndCatch(() => this.tsParseTypeArguments());
      t && (e.typeParameters = t);
    }
    return super.jsxParseOpeningElementAfterName(e);
  }
  getGetterSetterExpectedParamCount(e) {
    const t = super.getGetterSetterExpectedParamCount(e), i = this.getObjectOrClassMethodParams(e)[0];
    return i && this.isThisParam(i) ? t + 1 : t;
  }
  parseCatchClauseParam() {
    const e = super.parseCatchClauseParam(), t = this.tsTryParseTypeAnnotation();
    return t && (e.typeAnnotation = t, this.resetEndLocation(e)), e;
  }
  tsInAmbientContext(e) {
    const t = this.state.isAmbientContext;
    this.state.isAmbientContext = true;
    try {
      return e();
    } finally {
      this.state.isAmbientContext = t;
    }
  }
  parseClass(e, ...t) {
    const r = this.state.inAbstractClass;
    this.state.inAbstractClass = !!e.abstract;
    try {
      return super.parseClass(e, ...t);
    } finally {
      this.state.inAbstractClass = r;
    }
  }
  tsParseAbstractDeclaration(e) {
    if (this.match(74))
      return e.abstract = true, this.parseClass(e, true, false);
    if (this.isContextual(119)) {
      if (!this.hasFollowingLineBreak())
        return e.abstract = true, this.raise(e.start, ie.NonClassMethodPropertyHasAbstractModifer), this.next(), this.tsParseInterfaceDeclaration(e);
    } else
      this.unexpected(null, 74);
  }
  parseMethod(...e) {
    const t = super.parseMethod(...e);
    if (t.abstract && (this.hasPlugin("estree") ? !!t.value.body : !!t.body)) {
      const {
        key: i
      } = t;
      this.raise(t.start, ie.AbstractMethodHasImplementation, i.type === "Identifier" && !t.computed ? i.name : `[${this.input.slice(i.start, i.end)}]`);
    }
    return t;
  }
  tsParseTypeParameterName() {
    return this.parseIdentifier().name;
  }
  shouldParseAsAmbientContext() {
    return !!this.getPluginOption("typescript", "dts");
  }
  parse() {
    return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.parse();
  }
  getExpression() {
    return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.getExpression();
  }
  parseExportSpecifier(e, t, r, i) {
    return !t && i ? (this.parseTypeOnlyImportExportSpecifier(e, false, r), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, t, r, i));
  }
  parseImportSpecifier(e, t, r, i) {
    return !t && i ? (this.parseTypeOnlyImportExportSpecifier(e, true, r), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, t, r, i));
  }
  parseTypeOnlyImportExportSpecifier(e, t, r) {
    const i = t ? "imported" : "local", n = t ? "local" : "exported";
    let a = e[i], o, l = false, u = true;
    const c = a.start;
    if (this.isContextual(87)) {
      const p = this.parseIdentifier();
      if (this.isContextual(87)) {
        const f = this.parseIdentifier();
        Yt(this.state.type) ? (l = true, a = p, o = this.parseIdentifier(), u = false) : (o = f, u = false);
      } else
        Yt(this.state.type) ? (u = false, o = this.parseIdentifier()) : (l = true, a = p);
    } else
      Yt(this.state.type) && (l = true, a = this.parseIdentifier());
    l && r && this.raise(c, t ? ie.TypeModifierIsUsedInTypeImports : ie.TypeModifierIsUsedInTypeExports), e[i] = a, e[n] = o;
    const h = t ? "importKind" : "exportKind";
    e[h] = l ? "type" : "value", u && this.eatContextual(87) && (e[n] = t ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = Jt(e[i])), t && this.checkLVal(e[n], "import specifier", gt);
  }
};
var Fy = Ts({
  ClassNameIsRequired: "A class name is required."
}, Kt.SyntaxError);
var By = (s3) => class extends s3 {
  parsePlaceholder(e) {
    if (this.match(134)) {
      const t = this.startNode();
      return this.next(), this.assertNoSpace("Unexpected space in placeholder."), t.name = super.parseIdentifier(true), this.assertNoSpace("Unexpected space in placeholder."), this.expect(134), this.finishPlaceholder(t, e);
    }
  }
  finishPlaceholder(e, t) {
    const r = !!(e.expectedNode && e.type === "Placeholder");
    return e.expectedNode = t, r ? e : this.finishNode(e, "Placeholder");
  }
  getTokenFromCode(e) {
    return e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(134, 2) : super.getTokenFromCode(...arguments);
  }
  parseExprAtom() {
    return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
  }
  parseIdentifier() {
    return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
  }
  checkReservedWord(e) {
    e !== void 0 && super.checkReservedWord(...arguments);
  }
  parseBindingAtom() {
    return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
  }
  checkLVal(e) {
    e.type !== "Placeholder" && super.checkLVal(...arguments);
  }
  toAssignable(e) {
    return e && e.type === "Placeholder" && e.expectedNode === "Expression" ? (e.expectedNode = "Pattern", e) : super.toAssignable(...arguments);
  }
  isLet(e) {
    return super.isLet(e) ? true : !this.isContextual(93) || e ? false : this.lookahead().type === 134;
  }
  verifyBreakContinue(e) {
    e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(...arguments);
  }
  parseExpressionStatement(e, t) {
    if (t.type !== "Placeholder" || t.extra && t.extra.parenthesized)
      return super.parseExpressionStatement(...arguments);
    if (this.match(14)) {
      const r = e;
      return r.label = this.finishPlaceholder(t, "Identifier"), this.next(), r.body = this.parseStatement("label"), this.finishNode(r, "LabeledStatement");
    }
    return this.semicolon(), e.name = t.name, this.finishPlaceholder(e, "Statement");
  }
  parseBlock() {
    return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
  }
  parseFunctionId() {
    return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
  }
  parseClass(e, t, r) {
    const i = t ? "ClassDeclaration" : "ClassExpression";
    this.next(), this.takeDecorators(e);
    const n = this.state.strict, a = this.parsePlaceholder("Identifier");
    if (a)
      if (this.match(75) || this.match(134) || this.match(5))
        e.id = a;
      else {
        if (r || !t)
          return e.id = null, e.body = this.finishPlaceholder(a, "ClassBody"), this.finishNode(e, i);
        this.unexpected(null, Fy.ClassNameIsRequired);
      }
    else
      this.parseClassId(e, t, r);
    return this.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!e.superClass, n), this.finishNode(e, i);
  }
  parseExport(e) {
    const t = this.parsePlaceholder("Identifier");
    if (!t)
      return super.parseExport(...arguments);
    if (!this.isContextual(91) && !this.match(12))
      return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(t, "Declaration"), this.finishNode(e, "ExportNamedDeclaration");
    this.expectPlugin("exportDefaultFrom");
    const r = this.startNode();
    return r.exported = t, e.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")], super.parseExport(e);
  }
  isExportDefaultSpecifier() {
    if (this.match(59)) {
      const e = this.nextTokenStart();
      if (this.isUnparsedContextual(e, "from") && this.input.startsWith(hr(134), this.nextTokenStartSince(e + 4)))
        return true;
    }
    return super.isExportDefaultSpecifier();
  }
  maybeParseExportDefaultSpecifier(e) {
    return e.specifiers && e.specifiers.length > 0 ? true : super.maybeParseExportDefaultSpecifier(...arguments);
  }
  checkExport(e) {
    const {
      specifiers: t
    } = e;
    t != null && t.length && (e.specifiers = t.filter((r) => r.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = t;
  }
  parseImport(e) {
    const t = this.parsePlaceholder("Identifier");
    if (!t)
      return super.parseImport(...arguments);
    if (e.specifiers = [], !this.isContextual(91) && !this.match(12))
      return e.source = this.finishPlaceholder(t, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
    const r = this.startNodeAtNode(t);
    return r.local = t, this.finishNode(r, "ImportDefaultSpecifier"), e.specifiers.push(r), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(91), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
  }
  parseImportSource() {
    return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
  }
};
var $y = (s3) => class extends s3 {
  parseV8Intrinsic() {
    if (this.match(48)) {
      const e = this.state.start, t = this.startNode();
      if (this.next(), Se(this.state.type)) {
        const r = this.parseIdentifierName(this.state.start), i = this.createIdentifier(t, r);
        if (i.type = "V8IntrinsicIdentifier", this.match(10))
          return i;
      }
      this.unexpected(e);
    }
  }
  parseExprAtom() {
    return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
  }
};
function Ke(s3, e) {
  return s3.some((t) => Array.isArray(t) ? t[0] === e : t === e);
}
function zr(s3, e, t) {
  const r = s3.find((i) => Array.isArray(i) ? i[0] === e : i === e);
  return r && Array.isArray(r) ? r[1][t] : null;
}
var dc = ["minimal", "fsharp", "hack", "smart"];
var mc = ["^", "%", "#"];
var gc = ["hash", "bar"];
function Uy(s3) {
  if (Ke(s3, "decorators")) {
    if (Ke(s3, "decorators-legacy"))
      throw new Error("Cannot use the decorators and decorators-legacy plugin together");
    const e = zr(s3, "decorators", "decoratorsBeforeExport");
    if (e == null)
      throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
    if (typeof e != "boolean")
      throw new Error("'decoratorsBeforeExport' must be a boolean.");
  }
  if (Ke(s3, "flow") && Ke(s3, "typescript"))
    throw new Error("Cannot combine flow and typescript plugins.");
  if (Ke(s3, "placeholders") && Ke(s3, "v8intrinsic"))
    throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
  if (Ke(s3, "pipelineOperator")) {
    const e = zr(s3, "pipelineOperator", "proposal");
    if (!dc.includes(e)) {
      const r = dc.map((i) => `"${i}"`).join(", ");
      throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${r}.`);
    }
    const t = Ke(s3, "recordAndTuple") && zr(s3, "recordAndTuple", "syntaxType") === "hash";
    if (e === "hack") {
      if (Ke(s3, "placeholders"))
        throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
      if (Ke(s3, "v8intrinsic"))
        throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
      const r = zr(s3, "pipelineOperator", "topicToken");
      if (!mc.includes(r)) {
        const i = mc.map((n) => `"${n}"`).join(", ");
        throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`);
      }
      if (r === "#" && t)
        throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
    } else if (e === "smart" && t)
      throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
  }
  if (Ke(s3, "moduleAttributes")) {
    if (Ke(s3, "importAssertions"))
      throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
    if (zr(s3, "moduleAttributes", "version") !== "may-2020")
      throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
  }
  if (Ke(s3, "recordAndTuple") && !gc.includes(zr(s3, "recordAndTuple", "syntaxType")))
    throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + gc.map((e) => `'${e}'`).join(", "));
  if (Ke(s3, "asyncDoExpressions") && !Ke(s3, "doExpressions")) {
    const e = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
    throw e.missingPlugins = "doExpressions", e;
  }
}
var xp = {
  estree: Pg,
  jsx: Ny,
  flow: Cy,
  typescript: Ry,
  v8intrinsic: $y,
  placeholders: By
};
var jy = Object.keys(xp);
var yc = {
  sourceType: "script",
  sourceFilename: void 0,
  startColumn: 0,
  startLine: 1,
  allowAwaitOutsideFunction: false,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowSuperOutsideMethod: false,
  allowUndeclaredExports: false,
  plugins: [],
  strictMode: null,
  ranges: false,
  tokens: false,
  createParenthesizedExpressions: false,
  errorRecovery: false,
  attachComment: true
};
function qy(s3) {
  const e = {};
  for (const t of Object.keys(yc))
    e[t] = s3 && s3[t] != null ? s3[t] : yc[t];
  return e;
}
var Po = (s3) => s3.type === "ParenthesizedExpression" ? Po(s3.expression) : s3;
var Vy = class extends wy {
  toAssignable(e, t = false) {
    var r, i;
    let n;
    switch ((e.type === "ParenthesizedExpression" || (r = e.extra) != null && r.parenthesized) && (n = Po(e), t ? n.type === "Identifier" ? this.expressionScope.recordParenthesizedIdentifierError(e.start, I.InvalidParenthesizedAssignment) : n.type !== "MemberExpression" && this.raise(e.start, I.InvalidParenthesizedAssignment) : this.raise(e.start, I.InvalidParenthesizedAssignment)), e.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern";
        for (let o = 0, l = e.properties.length, u = l - 1; o < l; o++) {
          var a;
          const c = e.properties[o], h = o === u;
          this.toAssignableObjectExpressionProp(c, h, t), h && c.type === "RestElement" && (a = e.extra) != null && a.trailingComma && this.raiseRestNotLast(e.extra.trailingComma);
        }
        break;
      case "ObjectProperty":
        this.toAssignable(e.value, t);
        break;
      case "SpreadElement": {
        this.checkToRestConversion(e), e.type = "RestElement";
        const o = e.argument;
        this.toAssignable(o, t);
        break;
      }
      case "ArrayExpression":
        e.type = "ArrayPattern", this.toAssignableList(e.elements, (i = e.extra) == null ? void 0 : i.trailingComma, t);
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, I.MissingEqInAssignment), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(n, t);
        break;
    }
    return e;
  }
  toAssignableObjectExpressionProp(e, t, r) {
    if (e.type === "ObjectMethod") {
      const i = e.kind === "get" || e.kind === "set" ? I.PatternHasAccessor : I.PatternHasMethod;
      this.raise(e.key.start, i);
    } else
      e.type === "SpreadElement" && !t ? this.raiseRestNotLast(e.start) : this.toAssignable(e, r);
  }
  toAssignableList(e, t, r) {
    let i = e.length;
    if (i) {
      const n = e[i - 1];
      if ((n == null ? void 0 : n.type) === "RestElement")
        --i;
      else if ((n == null ? void 0 : n.type) === "SpreadElement") {
        n.type = "RestElement";
        let a = n.argument;
        this.toAssignable(a, r), a = Po(a), a.type !== "Identifier" && a.type !== "MemberExpression" && a.type !== "ArrayPattern" && a.type !== "ObjectPattern" && this.unexpected(a.start), t && this.raiseTrailingCommaAfterRest(t), --i;
      }
    }
    for (let n = 0; n < i; n++) {
      const a = e[n];
      a && (this.toAssignable(a, r), a.type === "RestElement" && this.raiseRestNotLast(a.start));
    }
    return e;
  }
  isAssignable(e, t) {
    switch (e.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        return true;
      case "ObjectExpression": {
        const r = e.properties.length - 1;
        return e.properties.every((i, n) => i.type !== "ObjectMethod" && (n === r || i.type !== "SpreadElement") && this.isAssignable(i));
      }
      case "ObjectProperty":
        return this.isAssignable(e.value);
      case "SpreadElement":
        return this.isAssignable(e.argument);
      case "ArrayExpression":
        return e.elements.every((r) => r === null || this.isAssignable(r));
      case "AssignmentExpression":
        return e.operator === "=";
      case "ParenthesizedExpression":
        return this.isAssignable(e.expression);
      case "MemberExpression":
      case "OptionalMemberExpression":
        return !t;
      default:
        return false;
    }
  }
  toReferencedList(e, t) {
    return e;
  }
  toReferencedListDeep(e, t) {
    this.toReferencedList(e, t);
    for (const r of e)
      (r == null ? void 0 : r.type) === "ArrayExpression" && this.toReferencedListDeep(r.elements);
  }
  parseSpread(e, t) {
    const r = this.startNode();
    return this.next(), r.argument = this.parseMaybeAssignAllowIn(e, void 0, t), this.finishNode(r, "SpreadElement");
  }
  parseRestBinding() {
    const e = this.startNode();
    return this.next(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 0: {
        const e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(3, 93, true), this.finishNode(e, "ArrayPattern");
      }
      case 5:
        return this.parseObjectLike(8, true);
    }
    return this.parseIdentifier();
  }
  parseBindingList(e, t, r, i) {
    const n = [];
    let a = true;
    for (; !this.eat(e); )
      if (a ? a = false : this.expect(12), r && this.match(12))
        n.push(null);
      else {
        if (this.eat(e))
          break;
        if (this.match(21)) {
          n.push(this.parseAssignableListItemTypes(this.parseRestBinding())), this.checkCommaAfterRest(t), this.expect(e);
          break;
        } else {
          const o = [];
          for (this.match(24) && this.hasPlugin("decorators") && this.raise(this.state.start, I.UnsupportedParameterDecorator); this.match(24); )
            o.push(this.parseDecorator());
          n.push(this.parseAssignableListItem(i, o));
        }
      }
    return n;
  }
  parseBindingRestProperty(e) {
    return this.next(), e.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(e, "RestElement");
  }
  parseBindingProperty() {
    const e = this.startNode(), {
      type: t,
      start: r,
      startLoc: i
    } = this.state;
    return t === 21 ? this.parseBindingRestProperty(e) : (this.parsePropertyName(e), e.method = false, this.parseObjPropValue(e, r, i, false, false, true, false), e);
  }
  parseAssignableListItem(e, t) {
    const r = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(r);
    const i = this.parseMaybeDefault(r.start, r.loc.start, r);
    return t.length && (r.decorators = t), i;
  }
  parseAssignableListItemTypes(e) {
    return e;
  }
  parseMaybeDefault(e, t, r) {
    var i, n, a;
    if (t = (i = t) != null ? i : this.state.startLoc, e = (n = e) != null ? n : this.state.start, r = (a = r) != null ? a : this.parseBindingAtom(), !this.eat(27))
      return r;
    const o = this.startNodeAt(e, t);
    return o.left = r, o.right = this.parseMaybeAssignAllowIn(), this.finishNode(o, "AssignmentPattern");
  }
  checkLVal(e, t, r = $s, i, n, a = false) {
    switch (e.type) {
      case "Identifier": {
        const {
          name: o
        } = e;
        this.state.strict && (a ? lp(o, this.inModule) : op(o)) && this.raise(e.start, r === $s ? I.StrictEvalArguments : I.StrictEvalArgumentsBinding, o), i && (i.has(o) ? this.raise(e.start, I.ParamDupe) : i.add(o)), n && o === "let" && this.raise(e.start, I.LetInLexicalBinding), r & $s || this.scope.declareName(o, r, e.start);
        break;
      }
      case "MemberExpression":
        r !== $s && this.raise(e.start, I.InvalidPropertyBindingPattern);
        break;
      case "ObjectPattern":
        for (let o of e.properties) {
          if (this.isObjectProperty(o))
            o = o.value;
          else if (this.isObjectMethod(o))
            continue;
          this.checkLVal(o, "object destructuring pattern", r, i, n);
        }
        break;
      case "ArrayPattern":
        for (const o of e.elements)
          o && this.checkLVal(o, "array destructuring pattern", r, i, n);
        break;
      case "AssignmentPattern":
        this.checkLVal(e.left, "assignment pattern", r, i);
        break;
      case "RestElement":
        this.checkLVal(e.argument, "rest element", r, i);
        break;
      case "ParenthesizedExpression":
        this.checkLVal(e.expression, "parenthesized expression", r, i);
        break;
      default:
        this.raise(e.start, r === $s ? I.InvalidLhs : I.InvalidLhsBinding, t);
    }
  }
  checkToRestConversion(e) {
    e.argument.type !== "Identifier" && e.argument.type !== "MemberExpression" && this.raise(e.argument.start, I.InvalidRestAssignmentPattern);
  }
  checkCommaAfterRest(e) {
    this.match(12) && (this.lookaheadCharCode() === e ? this.raiseTrailingCommaAfterRest(this.state.start) : this.raiseRestNotLast(this.state.start));
  }
  raiseRestNotLast(e) {
    throw this.raise(e, I.ElementAfterRest);
  }
  raiseTrailingCommaAfterRest(e) {
    this.raise(e, I.RestTrailingComma);
  }
};
var vc = /* @__PURE__ */ new Map([["ArrowFunctionExpression", "arrow function"], ["AssignmentExpression", "assignment"], ["ConditionalExpression", "conditional"], ["YieldExpression", "yield"]]);
var zy = class extends Vy {
  checkProto(e, t, r, i) {
    if (e.type === "SpreadElement" || this.isObjectMethod(e) || e.computed || e.shorthand)
      return;
    const n = e.key;
    if ((n.type === "Identifier" ? n.name : n.value) === "__proto__") {
      if (t) {
        this.raise(n.start, I.RecordNoProto);
        return;
      }
      r.used && (i ? i.doubleProto === -1 && (i.doubleProto = n.start) : this.raise(n.start, I.DuplicateProto)), r.used = true;
    }
  }
  shouldExitDescending(e, t) {
    return e.type === "ArrowFunctionExpression" && e.start === t;
  }
  getExpression() {
    this.enterInitialScopes(), this.nextToken();
    const e = this.parseExpression();
    return this.match(129) || this.unexpected(), this.finalizeRemainingComments(), e.comments = this.state.comments, e.errors = this.state.errors, this.options.tokens && (e.tokens = this.tokens), e;
  }
  parseExpression(e, t) {
    return e ? this.disallowInAnd(() => this.parseExpressionBase(t)) : this.allowInAnd(() => this.parseExpressionBase(t));
  }
  parseExpressionBase(e) {
    const t = this.state.start, r = this.state.startLoc, i = this.parseMaybeAssign(e);
    if (this.match(12)) {
      const n = this.startNodeAt(t, r);
      for (n.expressions = [i]; this.eat(12); )
        n.expressions.push(this.parseMaybeAssign(e));
      return this.toReferencedList(n.expressions), this.finishNode(n, "SequenceExpression");
    }
    return i;
  }
  parseMaybeAssignDisallowIn(e, t) {
    return this.disallowInAnd(() => this.parseMaybeAssign(e, t));
  }
  parseMaybeAssignAllowIn(e, t) {
    return this.allowInAnd(() => this.parseMaybeAssign(e, t));
  }
  setOptionalParametersError(e, t) {
    var r;
    e.optionalParameters = (r = t == null ? void 0 : t.pos) != null ? r : this.state.start;
  }
  parseMaybeAssign(e, t) {
    const r = this.state.start, i = this.state.startLoc;
    if (this.isContextual(99) && this.prodParam.hasYield) {
      let l = this.parseYield();
      return t && (l = t.call(this, l, r, i)), l;
    }
    let n;
    e ? n = false : (e = new un(), n = true);
    const {
      type: a
    } = this.state;
    (a === 10 || Se(a)) && (this.state.potentialArrowAt = this.state.start);
    let o = this.parseMaybeConditional(e);
    if (t && (o = t.call(this, o, r, i)), kg(this.state.type)) {
      const l = this.startNodeAt(r, i), u = this.state.value;
      return l.operator = u, this.match(27) ? (l.left = this.toAssignable(o, true), e.doubleProto >= r && (e.doubleProto = -1), e.shorthandAssign >= r && (e.shorthandAssign = -1)) : l.left = o, this.checkLVal(o, "assignment expression"), this.next(), l.right = this.parseMaybeAssign(), this.finishNode(l, "AssignmentExpression");
    } else
      n && this.checkExpressionErrors(e, true);
    return o;
  }
  parseMaybeConditional(e) {
    const t = this.state.start, r = this.state.startLoc, i = this.state.potentialArrowAt, n = this.parseExprOps(e);
    return this.shouldExitDescending(n, i) ? n : this.parseConditional(n, t, r, e);
  }
  parseConditional(e, t, r, i) {
    if (this.eat(17)) {
      const n = this.startNodeAt(t, r);
      return n.test = e, n.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), n.alternate = this.parseMaybeAssign(), this.finishNode(n, "ConditionalExpression");
    }
    return e;
  }
  parseMaybeUnaryOrPrivate(e) {
    return this.match(128) ? this.parsePrivateName() : this.parseMaybeUnary(e);
  }
  parseExprOps(e) {
    const t = this.state.start, r = this.state.startLoc, i = this.state.potentialArrowAt, n = this.parseMaybeUnaryOrPrivate(e);
    return this.shouldExitDescending(n, i) ? n : this.parseExprOp(n, t, r, -1);
  }
  parseExprOp(e, t, r, i) {
    if (this.isPrivateName(e)) {
      const a = this.getPrivateNameSV(e), {
        start: o
      } = e;
      (i >= sn(52) || !this.prodParam.hasIn || !this.match(52)) && this.raise(o, I.PrivateInExpectedIn, a), this.classScope.usePrivateName(a, o);
    }
    const n = this.state.type;
    if (Og(n) && (this.prodParam.hasIn || !this.match(52))) {
      let a = sn(n);
      if (a > i) {
        if (n === 35) {
          if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
            return e;
          this.checkPipelineAtInfixOperator(e, t);
        }
        const o = this.startNodeAt(t, r);
        o.left = e, o.operator = this.state.value;
        const l = n === 37 || n === 38, u = n === 36;
        if (u && (a = sn(38)), this.next(), n === 35 && this.getPluginOption("pipelineOperator", "proposal") === "minimal" && this.state.type === 90 && this.prodParam.hasAwait)
          throw this.raise(this.state.start, I.UnexpectedAwaitAfterPipelineBody);
        o.right = this.parseExprOpRightExpr(n, a), this.finishNode(o, l || u ? "LogicalExpression" : "BinaryExpression");
        const c = this.state.type;
        if (u && (c === 37 || c === 38) || l && c === 36)
          throw this.raise(this.state.start, I.MixingCoalesceWithLogical);
        return this.parseExprOp(o, t, r, i);
      }
    }
    return e;
  }
  parseExprOpRightExpr(e, t) {
    const r = this.state.start, i = this.state.startLoc;
    switch (e) {
      case 35:
        switch (this.getPluginOption("pipelineOperator", "proposal")) {
          case "hack":
            return this.withTopicBindingContext(() => this.parseHackPipeBody());
          case "smart":
            return this.withTopicBindingContext(() => {
              if (this.prodParam.hasYield && this.isContextual(99))
                throw this.raise(this.state.start, I.PipeBodyIsTighter, this.state.value);
              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(e, t), r, i);
            });
          case "fsharp":
            return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(t));
        }
      default:
        return this.parseExprOpBaseRightExpr(e, t);
    }
  }
  parseExprOpBaseRightExpr(e, t) {
    const r = this.state.start, i = this.state.startLoc;
    return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), r, i, Fg(e) ? t - 1 : t);
  }
  parseHackPipeBody() {
    var e;
    const {
      start: t
    } = this.state, r = this.parseMaybeAssign();
    return vc.has(r.type) && !((e = r.extra) != null && e.parenthesized) && this.raise(t, I.PipeUnparenthesizedBody, vc.get(r.type)), this.topicReferenceWasUsedInCurrentContext() || this.raise(t, I.PipeTopicUnused), r;
  }
  checkExponentialAfterUnary(e) {
    this.match(51) && this.raise(e.argument.start, I.UnexpectedTokenUnaryExponentiation);
  }
  parseMaybeUnary(e, t) {
    const r = this.state.start, i = this.state.startLoc, n = this.isContextual(90);
    if (n && this.isAwaitAllowed()) {
      this.next();
      const u = this.parseAwait(r, i);
      return t || this.checkExponentialAfterUnary(u), u;
    }
    const a = this.match(32), o = this.startNode();
    if (Mg(this.state.type)) {
      o.operator = this.state.value, o.prefix = true, this.match(66) && this.expectPlugin("throwExpressions");
      const u = this.match(83);
      if (this.next(), o.argument = this.parseMaybeUnary(null, true), this.checkExpressionErrors(e, true), this.state.strict && u) {
        const c = o.argument;
        c.type === "Identifier" ? this.raise(o.start, I.StrictDelete) : this.hasPropertyAsPrivateName(c) && this.raise(o.start, I.DeletePrivateField);
      }
      if (!a)
        return t || this.checkExponentialAfterUnary(o), this.finishNode(o, "UnaryExpression");
    }
    const l = this.parseUpdate(o, a, e);
    if (n) {
      const {
        type: u
      } = this.state;
      if ((this.hasPlugin("v8intrinsic") ? ac(u) : ac(u) && !this.match(48)) && !this.isAmbiguousAwait())
        return this.raiseOverwrite(r, I.AwaitNotInAsyncContext), this.parseAwait(r, i);
    }
    return l;
  }
  parseUpdate(e, t, r) {
    if (t)
      return this.checkLVal(e.argument, "prefix operation"), this.finishNode(e, "UpdateExpression");
    const i = this.state.start, n = this.state.startLoc;
    let a = this.parseExprSubscripts(r);
    if (this.checkExpressionErrors(r, false))
      return a;
    for (; Lg(this.state.type) && !this.canInsertSemicolon(); ) {
      const o = this.startNodeAt(i, n);
      o.operator = this.state.value, o.prefix = false, o.argument = a, this.checkLVal(a, "postfix operation"), this.next(), a = this.finishNode(o, "UpdateExpression");
    }
    return a;
  }
  parseExprSubscripts(e) {
    const t = this.state.start, r = this.state.startLoc, i = this.state.potentialArrowAt, n = this.parseExprAtom(e);
    return this.shouldExitDescending(n, i) ? n : this.parseSubscripts(n, t, r);
  }
  parseSubscripts(e, t, r, i) {
    const n = {
      optionalChainMember: false,
      maybeAsyncArrow: this.atPossibleAsyncArrow(e),
      stop: false
    };
    do
      e = this.parseSubscript(e, t, r, i, n), n.maybeAsyncArrow = false;
    while (!n.stop);
    return e;
  }
  parseSubscript(e, t, r, i, n) {
    if (!i && this.eat(15))
      return this.parseBind(e, t, r, i, n);
    if (this.match(22))
      return this.parseTaggedTemplateExpression(e, t, r, n);
    let a = false;
    if (this.match(18)) {
      if (i && this.lookaheadCharCode() === 40)
        return n.stop = true, e;
      n.optionalChainMember = a = true, this.next();
    }
    if (!i && this.match(10))
      return this.parseCoverCallAndAsyncArrowHead(e, t, r, n, a);
    {
      const o = this.eat(0);
      return o || a || this.eat(16) ? this.parseMember(e, t, r, n, o, a) : (n.stop = true, e);
    }
  }
  parseMember(e, t, r, i, n, a) {
    const o = this.startNodeAt(t, r);
    o.object = e, o.computed = n;
    const l = !n && this.match(128) && this.state.value, u = n ? this.parseExpression() : l ? this.parsePrivateName() : this.parseIdentifier(true);
    return l !== false && (o.object.type === "Super" && this.raise(t, I.SuperPrivateField), this.classScope.usePrivateName(l, u.start)), o.property = u, n && this.expect(3), i.optionalChainMember ? (o.optional = a, this.finishNode(o, "OptionalMemberExpression")) : this.finishNode(o, "MemberExpression");
  }
  parseBind(e, t, r, i, n) {
    const a = this.startNodeAt(t, r);
    return a.object = e, a.callee = this.parseNoCallExpr(), n.stop = true, this.parseSubscripts(this.finishNode(a, "BindExpression"), t, r, i);
  }
  parseCoverCallAndAsyncArrowHead(e, t, r, i, n) {
    const a = this.state.maybeInArrowParameters;
    let o = null;
    this.state.maybeInArrowParameters = true, this.next();
    let l = this.startNodeAt(t, r);
    return l.callee = e, i.maybeAsyncArrow && (this.expressionScope.enter(gy()), o = new un()), i.optionalChainMember && (l.optional = n), n ? l.arguments = this.parseCallExpressionArguments(11) : l.arguments = this.parseCallExpressionArguments(11, e.type === "Import", e.type !== "Super", l, o), this.finishCallExpression(l, i.optionalChainMember), i.maybeAsyncArrow && this.shouldParseAsyncArrow() && !n ? (i.stop = true, this.expressionScope.validateAsPattern(), this.expressionScope.exit(), l = this.parseAsyncArrowFromCallExpression(this.startNodeAt(t, r), l)) : (i.maybeAsyncArrow && (this.checkExpressionErrors(o, true), this.expressionScope.exit()), this.toReferencedArguments(l)), this.state.maybeInArrowParameters = a, l;
  }
  toReferencedArguments(e, t) {
    this.toReferencedListDeep(e.arguments, t);
  }
  parseTaggedTemplateExpression(e, t, r, i) {
    const n = this.startNodeAt(t, r);
    return n.tag = e, n.quasi = this.parseTemplate(true), i.optionalChainMember && this.raise(t, I.OptionalChainingNoTemplate), this.finishNode(n, "TaggedTemplateExpression");
  }
  atPossibleAsyncArrow(e) {
    return e.type === "Identifier" && e.name === "async" && this.state.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && e.start === this.state.potentialArrowAt;
  }
  finishCallExpression(e, t) {
    if (e.callee.type === "Import")
      if (e.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), e.arguments.length === 0 || e.arguments.length > 2)
        this.raise(e.start, I.ImportCallArity, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
      else
        for (const r of e.arguments)
          r.type === "SpreadElement" && this.raise(r.start, I.ImportCallSpreadArgument);
    return this.finishNode(e, t ? "OptionalCallExpression" : "CallExpression");
  }
  parseCallExpressionArguments(e, t, r, i, n) {
    const a = [];
    let o = true;
    const l = this.state.inFSharpPipelineDirectBody;
    for (this.state.inFSharpPipelineDirectBody = false; !this.eat(e); ) {
      if (o)
        o = false;
      else if (this.expect(12), this.match(e)) {
        t && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(this.state.lastTokStart, I.ImportCallArgumentTrailingComma), i && this.addExtra(i, "trailingComma", this.state.lastTokStart), this.next();
        break;
      }
      a.push(this.parseExprListItem(false, n, r));
    }
    return this.state.inFSharpPipelineDirectBody = l, a;
  }
  shouldParseAsyncArrow() {
    return this.match(19) && !this.canInsertSemicolon();
  }
  parseAsyncArrowFromCallExpression(e, t) {
    var r;
    return this.resetPreviousNodeTrailingComments(t), this.expect(19), this.parseArrowExpression(e, t.arguments, true, (r = t.extra) == null ? void 0 : r.trailingComma), t.innerComments && hi(e, t.innerComments), t.callee.trailingComments && hi(e, t.callee.trailingComments), e;
  }
  parseNoCallExpr() {
    const e = this.state.start, t = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), e, t, true);
  }
  parseExprAtom(e) {
    let t;
    const {
      type: r
    } = this.state;
    switch (r) {
      case 73:
        return this.parseSuper();
      case 77:
        return t = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(t) : (this.match(10) || this.raise(this.state.lastTokStart, I.UnsupportedImport), this.finishNode(t, "Import"));
      case 72:
        return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");
      case 84:
        return this.parseDo(this.startNode(), false);
      case 50:
      case 29:
        return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
      case 124:
        return this.parseNumericLiteral(this.state.value);
      case 125:
        return this.parseBigIntLiteral(this.state.value);
      case 126:
        return this.parseDecimalLiteral(this.state.value);
      case 123:
        return this.parseStringLiteral(this.state.value);
      case 78:
        return this.parseNullLiteral();
      case 79:
        return this.parseBooleanLiteral(true);
      case 80:
        return this.parseBooleanLiteral(false);
      case 10: {
        const i = this.state.potentialArrowAt === this.state.start;
        return this.parseParenAndDistinguishExpression(i);
      }
      case 2:
      case 1:
        return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
      case 0:
        return this.parseArrayLike(3, true, false, e);
      case 6:
      case 7:
        return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
      case 5:
        return this.parseObjectLike(8, false, false, e);
      case 62:
        return this.parseFunctionOrFunctionSent();
      case 24:
        this.parseDecorators();
      case 74:
        return t = this.startNode(), this.takeDecorators(t), this.parseClass(t, false);
      case 71:
        return this.parseNewOrNewTarget();
      case 22:
        return this.parseTemplate(false);
      case 15: {
        t = this.startNode(), this.next(), t.object = null;
        const i = t.callee = this.parseNoCallExpr();
        if (i.type === "MemberExpression")
          return this.finishNode(t, "BindExpression");
        throw this.raise(i.start, I.UnsupportedBind);
      }
      case 128:
        return this.raise(this.state.start, I.PrivateInExpectedIn, this.state.value), this.parsePrivateName();
      case 31:
        return this.parseTopicReferenceThenEqualsSign(48, "%");
      case 30:
        return this.parseTopicReferenceThenEqualsSign(40, "^");
      case 40:
      case 48:
      case 25: {
        const i = this.getPluginOption("pipelineOperator", "proposal");
        if (i)
          return this.parseTopicReference(i);
        throw this.unexpected();
      }
      case 43: {
        const i = this.input.codePointAt(this.nextTokenStart());
        if (lr(i) || i === 62) {
          this.expectOnePlugin(["jsx", "flow", "typescript"]);
          break;
        } else
          throw this.unexpected();
      }
      default:
        if (Se(r)) {
          if (this.isContextual(117) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak())
            return this.parseModuleExpression();
          const i = this.state.potentialArrowAt === this.state.start, n = this.state.containsEsc, a = this.parseIdentifier();
          if (!n && a.name === "async" && !this.canInsertSemicolon()) {
            const {
              type: o
            } = this.state;
            if (o === 62)
              return this.resetPreviousNodeTrailingComments(a), this.next(), this.parseFunction(this.startNodeAtNode(a), void 0, true);
            if (Se(o))
              return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(a)) : a;
            if (o === 84)
              return this.resetPreviousNodeTrailingComments(a), this.parseDo(this.startNodeAtNode(a), true);
          }
          return i && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(a), [a], false)) : a;
        } else
          throw this.unexpected();
    }
  }
  parseTopicReferenceThenEqualsSign(e, t) {
    const r = this.getPluginOption("pipelineOperator", "proposal");
    if (r)
      return this.state.type = e, this.state.value = t, this.state.pos--, this.state.end--, this.state.endLoc.column--, this.parseTopicReference(r);
    throw this.unexpected();
  }
  parseTopicReference(e) {
    const t = this.startNode(), r = this.state.start, i = this.state.type;
    return this.next(), this.finishTopicReference(t, r, e, i);
  }
  finishTopicReference(e, t, r, i) {
    if (this.testTopicReferenceConfiguration(r, t, i)) {
      let n;
      return r === "smart" ? n = "PipelinePrimaryTopicReference" : n = "TopicReference", this.topicReferenceIsAllowedInCurrentContext() || (r === "smart" ? this.raise(t, I.PrimaryTopicNotAllowed) : this.raise(t, I.PipeTopicUnbound)), this.registerTopicReference(), this.finishNode(e, n);
    } else
      throw this.raise(t, I.PipeTopicUnconfiguredToken, hr(i));
  }
  testTopicReferenceConfiguration(e, t, r) {
    switch (e) {
      case "hack": {
        const i = this.getPluginOption("pipelineOperator", "topicToken");
        return hr(r) === i;
      }
      case "smart":
        return r === 25;
      default:
        throw this.raise(t, I.PipeTopicRequiresHackPipes);
    }
  }
  parseAsyncArrowUnaryFunction(e) {
    this.prodParam.enter(ln(true, this.prodParam.hasYield));
    const t = [this.parseIdentifier()];
    return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(this.state.pos, I.LineTerminatorBeforeArrow), this.expect(19), this.parseArrowExpression(e, t, true), e;
  }
  parseDo(e, t) {
    this.expectPlugin("doExpressions"), t && this.expectPlugin("asyncDoExpressions"), e.async = t, this.next();
    const r = this.state.labels;
    return this.state.labels = [], t ? (this.prodParam.enter(la), e.body = this.parseBlock(), this.prodParam.exit()) : e.body = this.parseBlock(), this.state.labels = r, this.finishNode(e, "DoExpression");
  }
  parseSuper() {
    const e = this.startNode();
    return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(e.start, I.SuperNotAllowed) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(e.start, I.UnexpectedSuper), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(e.start, I.UnsupportedSuper), this.finishNode(e, "Super");
  }
  parsePrivateName() {
    const e = this.startNode(), t = this.startNodeAt(this.state.start + 1, new ci(this.state.curLine, this.state.start + 1 - this.state.lineStart)), r = this.state.value;
    return this.next(), e.id = this.createIdentifier(t, r), this.finishNode(e, "PrivateName");
  }
  parseFunctionOrFunctionSent() {
    const e = this.startNode();
    if (this.next(), this.prodParam.hasYield && this.match(16)) {
      const t = this.createIdentifier(this.startNodeAtNode(e), "function");
      return this.next(), this.match(96) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(e, t, "sent");
    }
    return this.parseFunction(e);
  }
  parseMetaProperty(e, t, r) {
    e.meta = t;
    const i = this.state.containsEsc;
    return e.property = this.parseIdentifier(true), (e.property.name !== r || i) && this.raise(e.property.start, I.UnsupportedMetaProperty, t.name, r), this.finishNode(e, "MetaProperty");
  }
  parseImportMetaProperty(e) {
    const t = this.createIdentifier(this.startNodeAtNode(e), "import");
    return this.next(), this.isContextual(94) && (this.inModule || this.raise(t.start, ep.ImportMetaOutsideModule), this.sawUnambiguousESM = true), this.parseMetaProperty(e, t, "meta");
  }
  parseLiteralAtNode(e, t, r) {
    return this.addExtra(r, "rawValue", e), this.addExtra(r, "raw", this.input.slice(r.start, this.state.end)), r.value = e, this.next(), this.finishNode(r, t);
  }
  parseLiteral(e, t) {
    const r = this.startNode();
    return this.parseLiteralAtNode(e, t, r);
  }
  parseStringLiteral(e) {
    return this.parseLiteral(e, "StringLiteral");
  }
  parseNumericLiteral(e) {
    return this.parseLiteral(e, "NumericLiteral");
  }
  parseBigIntLiteral(e) {
    return this.parseLiteral(e, "BigIntLiteral");
  }
  parseDecimalLiteral(e) {
    return this.parseLiteral(e, "DecimalLiteral");
  }
  parseRegExpLiteral(e) {
    const t = this.parseLiteral(e.value, "RegExpLiteral");
    return t.pattern = e.pattern, t.flags = e.flags, t;
  }
  parseBooleanLiteral(e) {
    const t = this.startNode();
    return t.value = e, this.next(), this.finishNode(t, "BooleanLiteral");
  }
  parseNullLiteral() {
    const e = this.startNode();
    return this.next(), this.finishNode(e, "NullLiteral");
  }
  parseParenAndDistinguishExpression(e) {
    const t = this.state.start, r = this.state.startLoc;
    let i;
    this.next(), this.expressionScope.enter(my());
    const n = this.state.maybeInArrowParameters, a = this.state.inFSharpPipelineDirectBody;
    this.state.maybeInArrowParameters = true, this.state.inFSharpPipelineDirectBody = false;
    const o = this.state.start, l = this.state.startLoc, u = [], c = new un();
    let h = true, p, f;
    for (; !this.match(11); ) {
      if (h)
        h = false;
      else if (this.expect(12, c.optionalParameters === -1 ? null : c.optionalParameters), this.match(11)) {
        f = this.state.start;
        break;
      }
      if (this.match(21)) {
        const x = this.state.start, E = this.state.startLoc;
        p = this.state.start, u.push(this.parseParenItem(this.parseRestBinding(), x, E)), this.checkCommaAfterRest(41);
        break;
      } else
        u.push(this.parseMaybeAssignAllowIn(c, this.parseParenItem));
    }
    const g = this.state.lastTokEnd, d = this.state.lastTokEndLoc;
    this.expect(11), this.state.maybeInArrowParameters = n, this.state.inFSharpPipelineDirectBody = a;
    let m = this.startNodeAt(t, r);
    if (e && this.shouldParseArrow(u) && (m = this.parseArrow(m)))
      return this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(m, u, false), m;
    if (this.expressionScope.exit(), u.length || this.unexpected(this.state.lastTokStart), f && this.unexpected(f), p && this.unexpected(p), this.checkExpressionErrors(c, true), this.toReferencedListDeep(u, true), u.length > 1 ? (i = this.startNodeAt(o, l), i.expressions = u, this.finishNode(i, "SequenceExpression"), this.resetEndLocation(i, g, d)) : i = u[0], !this.options.createParenthesizedExpressions)
      return this.addExtra(i, "parenthesized", true), this.addExtra(i, "parenStart", t), this.takeSurroundingComments(i, t, this.state.lastTokEnd), i;
    const y = this.startNodeAt(t, r);
    return y.expression = i, this.finishNode(y, "ParenthesizedExpression"), y;
  }
  shouldParseArrow(e) {
    return !this.canInsertSemicolon();
  }
  parseArrow(e) {
    if (this.eat(19))
      return e;
  }
  parseParenItem(e, t, r) {
    return e;
  }
  parseNewOrNewTarget() {
    const e = this.startNode();
    if (this.next(), this.match(16)) {
      const t = this.createIdentifier(this.startNodeAtNode(e), "new");
      this.next();
      const r = this.parseMetaProperty(e, t, "target");
      return !this.scope.inNonArrowFunction && !this.scope.inClass && this.raise(r.start, I.UnexpectedNewTarget), r;
    }
    return this.parseNew(e);
  }
  parseNew(e) {
    return e.callee = this.parseNoCallExpr(), e.callee.type === "Import" ? this.raise(e.callee.start, I.ImportCallNotNewExpression) : this.isOptionalChain(e.callee) ? this.raise(this.state.lastTokEnd, I.OptionalChainingNoNew) : this.eat(18) && this.raise(this.state.start, I.OptionalChainingNoNew), this.parseNewArguments(e), this.finishNode(e, "NewExpression");
  }
  parseNewArguments(e) {
    if (this.eat(10)) {
      const t = this.parseExprList(11);
      this.toReferencedList(t), e.arguments = t;
    } else
      e.arguments = [];
  }
  parseTemplateElement(e) {
    const t = this.startNode();
    return this.state.value === null && (e || this.raise(this.state.start + 1, I.InvalidEscapeSequenceTemplate)), t.value = {
      raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, `
`),
      cooked: this.state.value
    }, this.next(), t.tail = this.match(22), this.finishNode(t, "TemplateElement");
  }
  parseTemplate(e) {
    const t = this.startNode();
    this.next(), t.expressions = [];
    let r = this.parseTemplateElement(e);
    for (t.quasis = [r]; !r.tail; )
      this.expect(23), t.expressions.push(this.parseTemplateSubstitution()), this.expect(8), t.quasis.push(r = this.parseTemplateElement(e));
    return this.next(), this.finishNode(t, "TemplateLiteral");
  }
  parseTemplateSubstitution() {
    return this.parseExpression();
  }
  parseObjectLike(e, t, r, i) {
    r && this.expectPlugin("recordAndTuple");
    const n = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const a = /* @__PURE__ */ Object.create(null);
    let o = true;
    const l = this.startNode();
    for (l.properties = [], this.next(); !this.match(e); ) {
      if (o)
        o = false;
      else if (this.expect(12), this.match(e)) {
        this.addExtra(l, "trailingComma", this.state.lastTokStart);
        break;
      }
      let c;
      t ? c = this.parseBindingProperty() : (c = this.parsePropertyDefinition(i), this.checkProto(c, r, a, i)), r && !this.isObjectProperty(c) && c.type !== "SpreadElement" && this.raise(c.start, I.InvalidRecordProperty), c.shorthand && this.addExtra(c, "shorthand", true), l.properties.push(c);
    }
    this.next(), this.state.inFSharpPipelineDirectBody = n;
    let u = "ObjectExpression";
    return t ? u = "ObjectPattern" : r && (u = "RecordExpression"), this.finishNode(l, u);
  }
  maybeAsyncOrAccessorProp(e) {
    return !e.computed && e.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(49));
  }
  parsePropertyDefinition(e) {
    let t = [];
    if (this.match(24))
      for (this.hasPlugin("decorators") && this.raise(this.state.start, I.UnsupportedPropertyDecorator); this.match(24); )
        t.push(this.parseDecorator());
    const r = this.startNode();
    let i = false, n = false, a, o;
    if (this.match(21))
      return t.length && this.unexpected(), this.parseSpread();
    t.length && (r.decorators = t, t = []), r.method = false, e && (a = this.state.start, o = this.state.startLoc);
    let l = this.eat(49);
    this.parsePropertyNamePrefixOperator(r);
    const u = this.state.containsEsc, c = this.parsePropertyName(r);
    if (!l && !u && this.maybeAsyncOrAccessorProp(r)) {
      const h = c.name;
      h === "async" && !this.hasPrecedingLineBreak() && (i = true, this.resetPreviousNodeTrailingComments(c), l = this.eat(49), this.parsePropertyName(r)), (h === "get" || h === "set") && (n = true, this.resetPreviousNodeTrailingComments(c), r.kind = h, this.match(49) && (l = true, this.raise(this.state.pos, I.AccessorIsGenerator, h), this.next()), this.parsePropertyName(r));
    }
    return this.parseObjPropValue(r, a, o, l, i, false, n, e), r;
  }
  getGetterSetterExpectedParamCount(e) {
    return e.kind === "get" ? 0 : 1;
  }
  getObjectOrClassMethodParams(e) {
    return e.params;
  }
  checkGetterSetterParams(e) {
    var t;
    const r = this.getGetterSetterExpectedParamCount(e), i = this.getObjectOrClassMethodParams(e), n = e.start;
    i.length !== r && (e.kind === "get" ? this.raise(n, I.BadGetterArity) : this.raise(n, I.BadSetterArity)), e.kind === "set" && ((t = i[i.length - 1]) == null ? void 0 : t.type) === "RestElement" && this.raise(n, I.BadSetterRestParameter);
  }
  parseObjectMethod(e, t, r, i, n) {
    if (n)
      return this.parseMethod(e, t, false, false, false, "ObjectMethod"), this.checkGetterSetterParams(e), e;
    if (r || t || this.match(10))
      return i && this.unexpected(), e.kind = "method", e.method = true, this.parseMethod(e, t, r, false, false, "ObjectMethod");
  }
  parseObjectProperty(e, t, r, i, n) {
    if (e.shorthand = false, this.eat(14))
      return e.value = i ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(n), this.finishNode(e, "ObjectProperty");
    if (!e.computed && e.key.type === "Identifier")
      return this.checkReservedWord(e.key.name, e.key.start, true, false), i ? e.value = this.parseMaybeDefault(t, r, Jt(e.key)) : this.match(27) && n ? (n.shorthandAssign === -1 && (n.shorthandAssign = this.state.start), e.value = this.parseMaybeDefault(t, r, Jt(e.key))) : e.value = Jt(e.key), e.shorthand = true, this.finishNode(e, "ObjectProperty");
  }
  parseObjPropValue(e, t, r, i, n, a, o, l) {
    const u = this.parseObjectMethod(e, i, n, a, o) || this.parseObjectProperty(e, t, r, a, l);
    return u || this.unexpected(), u;
  }
  parsePropertyName(e) {
    if (this.eat(0))
      e.computed = true, e.key = this.parseMaybeAssignAllowIn(), this.expect(3);
    else {
      const {
        type: t,
        value: r
      } = this.state;
      let i;
      if (Yt(t))
        i = this.parseIdentifier(true);
      else
        switch (t) {
          case 124:
            i = this.parseNumericLiteral(r);
            break;
          case 123:
            i = this.parseStringLiteral(r);
            break;
          case 125:
            i = this.parseBigIntLiteral(r);
            break;
          case 126:
            i = this.parseDecimalLiteral(r);
            break;
          case 128: {
            const n = this.state.start + 1;
            this.raise(n, I.UnexpectedPrivateField), i = this.parsePrivateName();
            break;
          }
          default:
            throw this.unexpected();
        }
      e.key = i, t !== 128 && (e.computed = false);
    }
    return e.key;
  }
  initFunction(e, t) {
    e.id = null, e.generator = false, e.async = !!t;
  }
  parseMethod(e, t, r, i, n, a, o = false) {
    this.initFunction(e, r), e.generator = !!t;
    const l = i;
    return this.scope.enter(qt | Tn | (o ? Pr : 0) | (n ? cp : 0)), this.prodParam.enter(ln(r, e.generator)), this.parseFunctionParams(e, l), this.parseFunctionBodyAndFinish(e, a, true), this.prodParam.exit(), this.scope.exit(), e;
  }
  parseArrayLike(e, t, r, i) {
    r && this.expectPlugin("recordAndTuple");
    const n = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const a = this.startNode();
    return this.next(), a.elements = this.parseExprList(e, !r, i, a), this.state.inFSharpPipelineDirectBody = n, this.finishNode(a, r ? "TupleExpression" : "ArrayExpression");
  }
  parseArrowExpression(e, t, r, i) {
    this.scope.enter(qt | Ml);
    let n = ln(r, false);
    !this.match(0) && this.prodParam.hasIn && (n |= Gr), this.prodParam.enter(n), this.initFunction(e, r);
    const a = this.state.maybeInArrowParameters;
    return t && (this.state.maybeInArrowParameters = true, this.setArrowFunctionParameters(e, t, i)), this.state.maybeInArrowParameters = false, this.parseFunctionBody(e, true), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = a, this.finishNode(e, "ArrowFunctionExpression");
  }
  setArrowFunctionParameters(e, t, r) {
    e.params = this.toAssignableList(t, r, false);
  }
  parseFunctionBodyAndFinish(e, t, r = false) {
    this.parseFunctionBody(e, false, r), this.finishNode(e, t);
  }
  parseFunctionBody(e, t, r = false) {
    const i = t && !this.match(5);
    if (this.expressionScope.enter(Sp()), i)
      e.body = this.parseMaybeAssign(), this.checkParams(e, false, t, false);
    else {
      const n = this.state.strict, a = this.state.labels;
      this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | Ep), e.body = this.parseBlock(true, false, (o) => {
        const l = !this.isSimpleParamList(e.params);
        if (o && l) {
          const c = (e.kind === "method" || e.kind === "constructor") && !!e.key ? e.key.end : e.start;
          this.raise(c, I.IllegalLanguageModeDirective);
        }
        const u = !n && this.state.strict;
        this.checkParams(e, !this.state.strict && !t && !r && !l, t, u), this.state.strict && e.id && this.checkLVal(e.id, "function name", Qg, void 0, void 0, u);
      }), this.prodParam.exit(), this.state.labels = a;
    }
    this.expressionScope.exit();
  }
  isSimpleParamList(e) {
    for (let t = 0, r = e.length; t < r; t++)
      if (e[t].type !== "Identifier")
        return false;
    return true;
  }
  checkParams(e, t, r, i = true) {
    const n = /* @__PURE__ */ new Set();
    for (const a of e.params)
      this.checkLVal(a, "function parameter list", An, t ? null : n, void 0, i);
  }
  parseExprList(e, t, r, i) {
    const n = [];
    let a = true;
    for (; !this.eat(e); ) {
      if (a)
        a = false;
      else if (this.expect(12), this.match(e)) {
        i && this.addExtra(i, "trailingComma", this.state.lastTokStart), this.next();
        break;
      }
      n.push(this.parseExprListItem(t, r));
    }
    return n;
  }
  parseExprListItem(e, t, r) {
    let i;
    if (this.match(12))
      e || this.raise(this.state.pos, I.UnexpectedToken, ","), i = null;
    else if (this.match(21)) {
      const n = this.state.start, a = this.state.startLoc;
      i = this.parseParenItem(this.parseSpread(t), n, a);
    } else if (this.match(17)) {
      this.expectPlugin("partialApplication"), r || this.raise(this.state.start, I.UnexpectedArgumentPlaceholder);
      const n = this.startNode();
      this.next(), i = this.finishNode(n, "ArgumentPlaceholder");
    } else
      i = this.parseMaybeAssignAllowIn(t, this.parseParenItem);
    return i;
  }
  parseIdentifier(e) {
    const t = this.startNode(), r = this.parseIdentifierName(t.start, e);
    return this.createIdentifier(t, r);
  }
  createIdentifier(e, t) {
    return e.name = t, e.loc.identifierName = t, this.finishNode(e, "Identifier");
  }
  parseIdentifierName(e, t) {
    let r;
    const {
      start: i,
      type: n
    } = this.state;
    if (Yt(n))
      r = this.state.value;
    else
      throw this.unexpected();
    const a = _g(n);
    return t ? a && this.replaceToken(122) : this.checkReservedWord(r, i, a, false), this.next(), r;
  }
  checkReservedWord(e, t, r, i) {
    if (e.length > 10 || !Kg(e))
      return;
    if (e === "yield") {
      if (this.prodParam.hasYield) {
        this.raise(t, I.YieldBindingIdentifier);
        return;
      }
    } else if (e === "await")
      if (this.prodParam.hasAwait) {
        this.raise(t, I.AwaitBindingIdentifier);
        return;
      } else if (this.scope.inStaticBlock) {
        this.raise(t, I.AwaitBindingIdentifierInStaticBlock);
        return;
      } else
        this.expressionScope.recordAsyncArrowParametersError(t, I.AwaitBindingIdentifier);
    else if (e === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
      this.raise(t, I.ArgumentsInClass);
      return;
    }
    if (r && Gg(e)) {
      this.raise(t, I.UnexpectedKeyword, e);
      return;
    }
    (this.state.strict ? i ? lp : ap : np)(e, this.inModule) && this.raise(t, I.UnexpectedReservedWord, e);
  }
  isAwaitAllowed() {
    return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
  }
  parseAwait(e, t) {
    const r = this.startNodeAt(e, t);
    return this.expressionScope.recordParameterInitializerError(r.start, I.AwaitExpressionFormalParameter), this.eat(49) && this.raise(r.start, I.ObsoleteAwaitStar), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = true : this.sawUnambiguousESM = true), this.state.soloAwait || (r.argument = this.parseMaybeUnary(null, true)), this.finishNode(r, "AwaitExpression");
  }
  isAmbiguousAwait() {
    return this.hasPrecedingLineBreak() || this.match(47) || this.match(10) || this.match(0) || this.match(22) || this.match(127) || this.match(50) || this.hasPlugin("v8intrinsic") && this.match(48);
  }
  parseYield() {
    const e = this.startNode();
    this.expressionScope.recordParameterInitializerError(e.start, I.YieldInParameter), this.next();
    let t = false, r = null;
    if (!this.hasPrecedingLineBreak())
      switch (t = this.eat(49), this.state.type) {
        case 13:
        case 129:
        case 8:
        case 11:
        case 3:
        case 9:
        case 14:
        case 12:
          if (!t)
            break;
        default:
          r = this.parseMaybeAssign();
      }
    return e.delegate = t, e.argument = r, this.finishNode(e, "YieldExpression");
  }
  checkPipelineAtInfixOperator(e, t) {
    this.getPluginOption("pipelineOperator", "proposal") === "smart" && e.type === "SequenceExpression" && this.raise(t, I.PipelineHeadSequenceExpression);
  }
  checkHackPipeBodyEarlyErrors(e) {
    this.topicReferenceWasUsedInCurrentContext() || this.raise(e, I.PipeTopicUnused);
  }
  parseSmartPipelineBodyInStyle(e, t, r) {
    const i = this.startNodeAt(t, r);
    return this.isSimpleReference(e) ? (i.callee = e, this.finishNode(i, "PipelineBareFunction")) : (this.checkSmartPipeTopicBodyEarlyErrors(t), i.expression = e, this.finishNode(i, "PipelineTopicExpression"));
  }
  isSimpleReference(e) {
    switch (e.type) {
      case "MemberExpression":
        return !e.computed && this.isSimpleReference(e.object);
      case "Identifier":
        return true;
      default:
        return false;
    }
  }
  checkSmartPipeTopicBodyEarlyErrors(e) {
    if (this.match(19))
      throw this.raise(this.state.start, I.PipelineBodyNoArrow);
    this.topicReferenceWasUsedInCurrentContext() || this.raise(e, I.PipelineTopicUnused);
  }
  withTopicBindingContext(e) {
    const t = this.state.topicContext;
    this.state.topicContext = {
      maxNumOfResolvableTopics: 1,
      maxTopicIndex: null
    };
    try {
      return e();
    } finally {
      this.state.topicContext = t;
    }
  }
  withSmartMixTopicForbiddingContext(e) {
    if (this.getPluginOption("pipelineOperator", "proposal") === "smart") {
      const r = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };
      try {
        return e();
      } finally {
        this.state.topicContext = r;
      }
    } else
      return e();
  }
  withSoloAwaitPermittingContext(e) {
    const t = this.state.soloAwait;
    this.state.soloAwait = true;
    try {
      return e();
    } finally {
      this.state.soloAwait = t;
    }
  }
  allowInAnd(e) {
    const t = this.prodParam.currentFlags();
    if (Gr & ~t) {
      this.prodParam.enter(t | Gr);
      try {
        return e();
      } finally {
        this.prodParam.exit();
      }
    }
    return e();
  }
  disallowInAnd(e) {
    const t = this.prodParam.currentFlags();
    if (Gr & t) {
      this.prodParam.enter(t & ~Gr);
      try {
        return e();
      } finally {
        this.prodParam.exit();
      }
    }
    return e();
  }
  registerTopicReference() {
    this.state.topicContext.maxTopicIndex = 0;
  }
  topicReferenceIsAllowedInCurrentContext() {
    return this.state.topicContext.maxNumOfResolvableTopics >= 1;
  }
  topicReferenceWasUsedInCurrentContext() {
    return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
  }
  parseFSharpPipelineBody(e) {
    const t = this.state.start, r = this.state.startLoc;
    this.state.potentialArrowAt = this.state.start;
    const i = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = true;
    const n = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), t, r, e);
    return this.state.inFSharpPipelineDirectBody = i, n;
  }
  parseModuleExpression() {
    this.expectPlugin("moduleBlocks");
    const e = this.startNode();
    this.next(), this.eat(5);
    const t = this.initializeScopes(true);
    this.enterInitialScopes();
    const r = this.startNode();
    try {
      e.body = this.parseProgram(r, 8, "module");
    } finally {
      t();
    }
    return this.eat(8), this.finishNode(e, "ModuleExpression");
  }
  parsePropertyNamePrefixOperator(e) {
  }
};
var Ha = {
  kind: "loop"
};
var Gy = {
  kind: "switch"
};
var Wy = 0;
var Ka = 1;
var bc = 2;
var Sc = 4;
var Hy = /[\uD800-\uDFFF]/u;
var Ya = /in(?:stanceof)?/y;
function Ky(s3) {
  for (let e = 0; e < s3.length; e++) {
    const t = s3[e], {
      type: r
    } = t;
    if (r === 128) {
      const {
        loc: i,
        start: n,
        value: a,
        end: o
      } = t, l = n + 1, u = new ci(i.start.line, i.start.column + 1);
      s3.splice(e, 1, new To({
        type: nn(25),
        value: "#",
        start: n,
        end: l,
        startLoc: i.start,
        endLoc: u
      }), new To({
        type: nn(122),
        value: a,
        start: l,
        end: o,
        startLoc: u,
        endLoc: i.end
      })), e++;
      continue;
    }
    typeof r == "number" && (t.type = nn(r));
  }
  return s3;
}
var Yy = class extends zy {
  parseTopLevel(e, t) {
    return e.program = this.parseProgram(t), e.comments = this.state.comments, this.options.tokens && (e.tokens = Ky(this.tokens)), this.finishNode(e, "File");
  }
  parseProgram(e, t = 129, r = this.options.sourceType) {
    if (e.sourceType = r, e.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(e, true, true, t), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
      for (const [i] of Array.from(this.scope.undefinedExports)) {
        const n = this.scope.undefinedExports.get(i);
        this.raise(n, I.ModuleExportUndefined, i);
      }
    return this.finishNode(e, "Program");
  }
  stmtToDirective(e) {
    const t = e;
    t.type = "Directive", t.value = t.expression, delete t.expression;
    const r = t.value, i = r.value, n = this.input.slice(r.start, r.end), a = r.value = n.slice(1, -1);
    return this.addExtra(r, "raw", n), this.addExtra(r, "rawValue", a), this.addExtra(r, "expressionValue", i), r.type = "DirectiveLiteral", t;
  }
  parseInterpreterDirective() {
    if (!this.match(26))
      return null;
    const e = this.startNode();
    return e.value = this.state.value, this.next(), this.finishNode(e, "InterpreterDirective");
  }
  isLet(e) {
    return this.isContextual(93) ? this.isLetKeyword(e) : false;
  }
  isLetKeyword(e) {
    const t = this.nextTokenStart(), r = this.codePointAtPos(t);
    if (r === 92 || r === 91)
      return true;
    if (e)
      return false;
    if (r === 123)
      return true;
    if (lr(r)) {
      if (Ya.lastIndex = t, Ya.test(this.input)) {
        const i = this.codePointAtPos(Ya.lastIndex);
        if (!Zr(i) && i !== 92)
          return false;
      }
      return true;
    }
    return false;
  }
  parseStatement(e, t) {
    return this.match(24) && this.parseDecorators(true), this.parseStatementContent(e, t);
  }
  parseStatementContent(e, t) {
    let r = this.state.type;
    const i = this.startNode();
    let n;
    switch (this.isLet(e) && (r = 68, n = "let"), r) {
      case 54:
        return this.parseBreakContinueStatement(i, true);
      case 57:
        return this.parseBreakContinueStatement(i, false);
      case 58:
        return this.parseDebuggerStatement(i);
      case 84:
        return this.parseDoStatement(i);
      case 85:
        return this.parseForStatement(i);
      case 62:
        if (this.lookaheadCharCode() === 46)
          break;
        return e && (this.state.strict ? this.raise(this.state.start, I.StrictFunction) : e !== "if" && e !== "label" && this.raise(this.state.start, I.SloppyFunction)), this.parseFunctionStatement(i, false, !e);
      case 74:
        return e && this.unexpected(), this.parseClass(i, true);
      case 63:
        return this.parseIfStatement(i);
      case 64:
        return this.parseReturnStatement(i);
      case 65:
        return this.parseSwitchStatement(i);
      case 66:
        return this.parseThrowStatement(i);
      case 67:
        return this.parseTryStatement(i);
      case 69:
      case 68:
        return n = n || this.state.value, e && n !== "var" && this.raise(this.state.start, I.UnexpectedLexicalDeclaration), this.parseVarStatement(i, n);
      case 86:
        return this.parseWhileStatement(i);
      case 70:
        return this.parseWithStatement(i);
      case 5:
        return this.parseBlock();
      case 13:
        return this.parseEmptyStatement(i);
      case 77: {
        const l = this.lookaheadCharCode();
        if (l === 40 || l === 46)
          break;
      }
      case 76: {
        !this.options.allowImportExportEverywhere && !t && this.raise(this.state.start, I.UnexpectedImportExport), this.next();
        let l;
        return r === 77 ? (l = this.parseImport(i), l.type === "ImportDeclaration" && (!l.importKind || l.importKind === "value") && (this.sawUnambiguousESM = true)) : (l = this.parseExport(i), (l.type === "ExportNamedDeclaration" && (!l.exportKind || l.exportKind === "value") || l.type === "ExportAllDeclaration" && (!l.exportKind || l.exportKind === "value") || l.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = true)), this.assertModuleNodeAllowed(i), l;
      }
      default:
        if (this.isAsyncFunction())
          return e && this.raise(this.state.start, I.AsyncFunctionInSingleStatementContext), this.next(), this.parseFunctionStatement(i, true, !e);
    }
    const a = this.state.value, o = this.parseExpression();
    return Se(r) && o.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, a, o, e) : this.parseExpressionStatement(i, o);
  }
  assertModuleNodeAllowed(e) {
    !this.options.allowImportExportEverywhere && !this.inModule && this.raise(e.start, ep.ImportOutsideModule);
  }
  takeDecorators(e) {
    const t = this.state.decoratorStack[this.state.decoratorStack.length - 1];
    t.length && (e.decorators = t, this.resetStartLocationFromNode(e, t[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = []);
  }
  canHaveLeadingDecorator() {
    return this.match(74);
  }
  parseDecorators(e) {
    const t = this.state.decoratorStack[this.state.decoratorStack.length - 1];
    for (; this.match(24); ) {
      const r = this.parseDecorator();
      t.push(r);
    }
    if (this.match(76))
      e || this.unexpected(), this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(this.state.start, I.DecoratorExportClass);
    else if (!this.canHaveLeadingDecorator())
      throw this.raise(this.state.start, I.UnexpectedLeadingDecorator);
  }
  parseDecorator() {
    this.expectOnePlugin(["decorators-legacy", "decorators"]);
    const e = this.startNode();
    if (this.next(), this.hasPlugin("decorators")) {
      this.state.decoratorStack.push([]);
      const t = this.state.start, r = this.state.startLoc;
      let i;
      if (this.eat(10))
        i = this.parseExpression(), this.expect(11);
      else
        for (i = this.parseIdentifier(false); this.eat(16); ) {
          const n = this.startNodeAt(t, r);
          n.object = i, n.property = this.parseIdentifier(true), n.computed = false, i = this.finishNode(n, "MemberExpression");
        }
      e.expression = this.parseMaybeDecoratorArguments(i), this.state.decoratorStack.pop();
    } else
      e.expression = this.parseExprSubscripts();
    return this.finishNode(e, "Decorator");
  }
  parseMaybeDecoratorArguments(e) {
    if (this.eat(10)) {
      const t = this.startNodeAtNode(e);
      return t.callee = e, t.arguments = this.parseCallExpressionArguments(11, false), this.toReferencedList(t.arguments), this.finishNode(t, "CallExpression");
    }
    return e;
  }
  parseBreakContinueStatement(e, t) {
    return this.next(), this.isLineTerminator() ? e.label = null : (e.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(e, t), this.finishNode(e, t ? "BreakStatement" : "ContinueStatement");
  }
  verifyBreakContinue(e, t) {
    let r;
    for (r = 0; r < this.state.labels.length; ++r) {
      const i = this.state.labels[r];
      if ((e.label == null || i.name === e.label.name) && (i.kind != null && (t || i.kind === "loop") || e.label && t))
        break;
    }
    r === this.state.labels.length && this.raise(e.start, I.IllegalBreakContinue, t ? "break" : "continue");
  }
  parseDebuggerStatement(e) {
    return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
  }
  parseHeaderExpression() {
    this.expect(10);
    const e = this.parseExpression();
    return this.expect(11), e;
  }
  parseDoStatement(e) {
    return this.next(), this.state.labels.push(Ha), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("do")), this.state.labels.pop(), this.expect(86), e.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(e, "DoWhileStatement");
  }
  parseForStatement(e) {
    this.next(), this.state.labels.push(Ha);
    let t = -1;
    if (this.isAwaitAllowed() && this.eatContextual(90) && (t = this.state.lastTokStart), this.scope.enter(Jr), this.expect(10), this.match(13))
      return t > -1 && this.unexpected(t), this.parseFor(e, null);
    const r = this.isContextual(93), i = r && this.isLetKeyword();
    if (this.match(68) || this.match(69) || i) {
      const u = this.startNode(), c = i ? "let" : this.state.value;
      return this.next(), this.parseVar(u, true, c), this.finishNode(u, "VariableDeclaration"), (this.match(52) || this.isContextual(95)) && u.declarations.length === 1 ? this.parseForIn(e, u, t) : (t > -1 && this.unexpected(t), this.parseFor(e, u));
    }
    const n = this.isContextual(89), a = new un(), o = this.parseExpression(true, a), l = this.isContextual(95);
    if (l && (r ? this.raise(o.start, I.ForOfLet) : t === -1 && n && o.type === "Identifier" && this.raise(o.start, I.ForOfAsync)), l || this.match(52)) {
      this.toAssignable(o, true);
      const u = l ? "for-of statement" : "for-in statement";
      return this.checkLVal(o, u), this.parseForIn(e, o, t);
    } else
      this.checkExpressionErrors(a, true);
    return t > -1 && this.unexpected(t), this.parseFor(e, o);
  }
  parseFunctionStatement(e, t, r) {
    return this.next(), this.parseFunction(e, Ka | (r ? 0 : bc), t);
  }
  parseIfStatement(e) {
    return this.next(), e.test = this.parseHeaderExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(60) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
  }
  parseReturnStatement(e) {
    return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(this.state.start, I.IllegalReturn), this.next(), this.isLineTerminator() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
  }
  parseSwitchStatement(e) {
    this.next(), e.discriminant = this.parseHeaderExpression();
    const t = e.cases = [];
    this.expect(5), this.state.labels.push(Gy), this.scope.enter(Jr);
    let r;
    for (let i; !this.match(8); )
      if (this.match(55) || this.match(59)) {
        const n = this.match(55);
        r && this.finishNode(r, "SwitchCase"), t.push(r = this.startNode()), r.consequent = [], this.next(), n ? r.test = this.parseExpression() : (i && this.raise(this.state.lastTokStart, I.MultipleDefaultsInSwitch), i = true, r.test = null), this.expect(14);
      } else
        r ? r.consequent.push(this.parseStatement(null)) : this.unexpected();
    return this.scope.exit(), r && this.finishNode(r, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(e, "SwitchStatement");
  }
  parseThrowStatement(e) {
    return this.next(), this.hasPrecedingLineBreak() && this.raise(this.state.lastTokEnd, I.NewlineAfterThrow), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
  }
  parseCatchClauseParam() {
    const e = this.parseBindingAtom(), t = e.type === "Identifier";
    return this.scope.enter(t ? up : 0), this.checkLVal(e, "catch clause", gt), e;
  }
  parseTryStatement(e) {
    if (this.next(), e.block = this.parseBlock(), e.handler = null, this.match(56)) {
      const t = this.startNode();
      this.next(), this.match(10) ? (this.expect(10), t.param = this.parseCatchClauseParam(), this.expect(11)) : (t.param = null, this.scope.enter(Jr)), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false)), this.scope.exit(), e.handler = this.finishNode(t, "CatchClause");
    }
    return e.finalizer = this.eat(61) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, I.NoCatchOrFinally), this.finishNode(e, "TryStatement");
  }
  parseVarStatement(e, t) {
    return this.next(), this.parseVar(e, false, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
  }
  parseWhileStatement(e) {
    return this.next(), e.test = this.parseHeaderExpression(), this.state.labels.push(Ha), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("while")), this.state.labels.pop(), this.finishNode(e, "WhileStatement");
  }
  parseWithStatement(e) {
    return this.state.strict && this.raise(this.state.start, I.StrictWith), this.next(), e.object = this.parseHeaderExpression(), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("with")), this.finishNode(e, "WithStatement");
  }
  parseEmptyStatement(e) {
    return this.next(), this.finishNode(e, "EmptyStatement");
  }
  parseLabeledStatement(e, t, r, i) {
    for (const a of this.state.labels)
      a.name === t && this.raise(r.start, I.LabelRedeclaration, t);
    const n = Ng(this.state.type) ? "loop" : this.match(65) ? "switch" : null;
    for (let a = this.state.labels.length - 1; a >= 0; a--) {
      const o = this.state.labels[a];
      if (o.statementStart === e.start)
        o.statementStart = this.state.start, o.kind = n;
      else
        break;
    }
    return this.state.labels.push({
      name: t,
      kind: n,
      statementStart: this.state.start
    }), e.body = this.parseStatement(i ? i.indexOf("label") === -1 ? i + "label" : i : "label"), this.state.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement");
  }
  parseExpressionStatement(e, t) {
    return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
  }
  parseBlock(e = false, t = true, r) {
    const i = this.startNode();
    return e && this.state.strictErrors.clear(), this.expect(5), t && this.scope.enter(Jr), this.parseBlockBody(i, e, false, 8, r), t && this.scope.exit(), this.finishNode(i, "BlockStatement");
  }
  isValidDirective(e) {
    return e.type === "ExpressionStatement" && e.expression.type === "StringLiteral" && !e.expression.extra.parenthesized;
  }
  parseBlockBody(e, t, r, i, n) {
    const a = e.body = [], o = e.directives = [];
    this.parseBlockOrModuleBlockBody(a, t ? o : void 0, r, i, n);
  }
  parseBlockOrModuleBlockBody(e, t, r, i, n) {
    const a = this.state.strict;
    let o = false, l = false;
    for (; !this.match(i); ) {
      const u = this.parseStatement(null, r);
      if (t && !l) {
        if (this.isValidDirective(u)) {
          const c = this.stmtToDirective(u);
          t.push(c), !o && c.value.value === "use strict" && (o = true, this.setStrict(true));
          continue;
        }
        l = true, this.state.strictErrors.clear();
      }
      e.push(u);
    }
    n && n.call(this, o), a || this.setStrict(false), this.next();
  }
  parseFor(e, t) {
    return e.init = t, this.semicolon(false), e.test = this.match(13) ? null : this.parseExpression(), this.semicolon(false), e.update = this.match(11) ? null : this.parseExpression(), this.expect(11), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, "ForStatement");
  }
  parseForIn(e, t, r) {
    const i = this.match(52);
    return this.next(), i ? r > -1 && this.unexpected(r) : e.await = r > -1, t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.state.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") ? this.raise(t.start, I.ForInOfLoopInitializer, i ? "for-in" : "for-of") : t.type === "AssignmentPattern" && this.raise(t.start, I.InvalidLhs, "for-loop"), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
  }
  parseVar(e, t, r) {
    const i = e.declarations = [], n = this.hasPlugin("typescript");
    for (e.kind = r; ; ) {
      const a = this.startNode();
      if (this.parseVarId(a, r), this.eat(27) ? a.init = t ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : (r === "const" && !(this.match(52) || this.isContextual(95)) ? n || this.raise(this.state.lastTokEnd, I.DeclarationMissingInitializer, "Const declarations") : a.id.type !== "Identifier" && !(t && (this.match(52) || this.isContextual(95))) && this.raise(this.state.lastTokEnd, I.DeclarationMissingInitializer, "Complex binding patterns"), a.init = null), i.push(this.finishNode(a, "VariableDeclarator")), !this.eat(12))
        break;
    }
    return e;
  }
  parseVarId(e, t) {
    e.id = this.parseBindingAtom(), this.checkLVal(e.id, "variable declaration", t === "var" ? An : gt, void 0, t !== "var");
  }
  parseFunction(e, t = Wy, r = false) {
    const i = t & Ka, n = t & bc, a = !!i && !(t & Sc);
    this.initFunction(e, r), this.match(49) && n && this.raise(this.state.start, I.GeneratorInSingleStatementContext), e.generator = this.eat(49), i && (e.id = this.parseFunctionId(a));
    const o = this.state.maybeInArrowParameters;
    return this.state.maybeInArrowParameters = false, this.scope.enter(qt), this.prodParam.enter(ln(r, e.generator)), i || (e.id = this.parseFunctionId()), this.parseFunctionParams(e, false), this.withSmartMixTopicForbiddingContext(() => {
      this.parseFunctionBodyAndFinish(e, i ? "FunctionDeclaration" : "FunctionExpression");
    }), this.prodParam.exit(), this.scope.exit(), i && !n && this.registerFunctionStatementId(e), this.state.maybeInArrowParameters = o, e;
  }
  parseFunctionId(e) {
    return e || Se(this.state.type) ? this.parseIdentifier() : null;
  }
  parseFunctionParams(e, t) {
    this.expect(10), this.expressionScope.enter(dy()), e.params = this.parseBindingList(11, 41, false, t), this.expressionScope.exit();
  }
  registerFunctionStatementId(e) {
    !e.id || this.scope.declareName(e.id.name, this.state.strict || e.generator || e.async ? this.scope.treatFunctionsAsVar ? An : gt : mp, e.id.start);
  }
  parseClass(e, t, r) {
    this.next(), this.takeDecorators(e);
    const i = this.state.strict;
    return this.state.strict = true, this.parseClassId(e, t, r), this.parseClassSuper(e), e.body = this.parseClassBody(!!e.superClass, i), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
  }
  isClassProperty() {
    return this.match(27) || this.match(13) || this.match(8);
  }
  isClassMethod() {
    return this.match(10);
  }
  isNonstaticConstructor(e) {
    return !e.computed && !e.static && (e.key.name === "constructor" || e.key.value === "constructor");
  }
  parseClassBody(e, t) {
    this.classScope.enter();
    const r = {
      hadConstructor: false,
      hadSuperClass: e
    };
    let i = [];
    const n = this.startNode();
    if (n.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
      for (; !this.match(8); ) {
        if (this.eat(13)) {
          if (i.length > 0)
            throw this.raise(this.state.lastTokEnd, I.DecoratorSemicolon);
          continue;
        }
        if (this.match(24)) {
          i.push(this.parseDecorator());
          continue;
        }
        const a = this.startNode();
        i.length && (a.decorators = i, this.resetStartLocationFromNode(a, i[0]), i = []), this.parseClassMember(n, a, r), a.kind === "constructor" && a.decorators && a.decorators.length > 0 && this.raise(a.start, I.DecoratorConstructor);
      }
    }), this.state.strict = t, this.next(), i.length)
      throw this.raise(this.state.start, I.TrailingDecorator);
    return this.classScope.exit(), this.finishNode(n, "ClassBody");
  }
  parseClassMemberFromModifier(e, t) {
    const r = this.parseIdentifier(true);
    if (this.isClassMethod()) {
      const i = t;
      return i.kind = "method", i.computed = false, i.key = r, i.static = false, this.pushClassMethod(e, i, false, false, false, false), true;
    } else if (this.isClassProperty()) {
      const i = t;
      return i.computed = false, i.key = r, i.static = false, e.body.push(this.parseClassProperty(i)), true;
    }
    return this.resetPreviousNodeTrailingComments(r), false;
  }
  parseClassMember(e, t, r) {
    const i = this.isContextual(98);
    if (i) {
      if (this.parseClassMemberFromModifier(e, t))
        return;
      if (this.eat(5)) {
        this.parseClassStaticBlock(e, t);
        return;
      }
    }
    this.parseClassMemberWithIsStatic(e, t, r, i);
  }
  parseClassMemberWithIsStatic(e, t, r, i) {
    const n = t, a = t, o = t, l = t, u = n, c = n;
    if (t.static = i, this.parsePropertyNamePrefixOperator(t), this.eat(49)) {
      u.kind = "method";
      const d = this.match(128);
      if (this.parseClassElementName(u), d) {
        this.pushClassPrivateMethod(e, a, true, false);
        return;
      }
      this.isNonstaticConstructor(n) && this.raise(n.key.start, I.ConstructorIsGenerator), this.pushClassMethod(e, n, true, false, false, false);
      return;
    }
    const h = Se(this.state.type) && !this.state.containsEsc, p = this.match(128), f = this.parseClassElementName(t), g = this.state.start;
    if (this.parsePostMemberNameModifiers(c), this.isClassMethod()) {
      if (u.kind = "method", p) {
        this.pushClassPrivateMethod(e, a, false, false);
        return;
      }
      const d = this.isNonstaticConstructor(n);
      let m = false;
      d && (n.kind = "constructor", r.hadConstructor && !this.hasPlugin("typescript") && this.raise(f.start, I.DuplicateConstructor), d && this.hasPlugin("typescript") && t.override && this.raise(f.start, I.OverrideOnConstructor), r.hadConstructor = true, m = r.hadSuperClass), this.pushClassMethod(e, n, false, false, d, m);
    } else if (this.isClassProperty())
      p ? this.pushClassPrivateProperty(e, l) : this.pushClassProperty(e, o);
    else if (h && f.name === "async" && !this.isLineTerminator()) {
      this.resetPreviousNodeTrailingComments(f);
      const d = this.eat(49);
      c.optional && this.unexpected(g), u.kind = "method";
      const m = this.match(128);
      this.parseClassElementName(u), this.parsePostMemberNameModifiers(c), m ? this.pushClassPrivateMethod(e, a, d, true) : (this.isNonstaticConstructor(n) && this.raise(n.key.start, I.ConstructorIsAsync), this.pushClassMethod(e, n, d, true, false, false));
    } else if (h && (f.name === "get" || f.name === "set") && !(this.match(49) && this.isLineTerminator())) {
      this.resetPreviousNodeTrailingComments(f), u.kind = f.name;
      const d = this.match(128);
      this.parseClassElementName(n), d ? this.pushClassPrivateMethod(e, a, false, false) : (this.isNonstaticConstructor(n) && this.raise(n.key.start, I.ConstructorIsAccessor), this.pushClassMethod(e, n, false, false, false, false)), this.checkGetterSetterParams(n);
    } else
      this.isLineTerminator() ? p ? this.pushClassPrivateProperty(e, l) : this.pushClassProperty(e, o) : this.unexpected();
  }
  parseClassElementName(e) {
    const {
      type: t,
      value: r,
      start: i
    } = this.state;
    if ((t === 122 || t === 123) && e.static && r === "prototype" && this.raise(i, I.StaticPrototype), t === 128) {
      r === "constructor" && this.raise(i, I.ConstructorClassPrivateField);
      const n = this.parsePrivateName();
      return e.key = n, n;
    }
    return this.parsePropertyName(e);
  }
  parseClassStaticBlock(e, t) {
    var r;
    this.scope.enter(Pr | hp | Tn);
    const i = this.state.labels;
    this.state.labels = [], this.prodParam.enter(ts);
    const n = t.body = [];
    this.parseBlockOrModuleBlockBody(n, void 0, false, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, e.body.push(this.finishNode(t, "StaticBlock")), (r = t.decorators) != null && r.length && this.raise(t.start, I.DecoratorStaticBlock);
  }
  pushClassProperty(e, t) {
    !t.computed && (t.key.name === "constructor" || t.key.value === "constructor") && this.raise(t.key.start, I.ConstructorClassField), e.body.push(this.parseClassProperty(t));
  }
  pushClassPrivateProperty(e, t) {
    const r = this.parseClassPrivateProperty(t);
    e.body.push(r), this.classScope.declarePrivateName(this.getPrivateNameSV(r.key), uc, r.key.start);
  }
  pushClassMethod(e, t, r, i, n, a) {
    e.body.push(this.parseMethod(t, r, i, n, a, "ClassMethod", true));
  }
  pushClassPrivateMethod(e, t, r, i) {
    const n = this.parseMethod(t, r, i, false, false, "ClassPrivateMethod", true);
    e.body.push(n);
    const a = n.kind === "get" ? n.static ? ty : sy : n.kind === "set" ? n.static ? ry : iy : uc;
    this.declareClassPrivateMethodInScope(n, a);
  }
  declareClassPrivateMethodInScope(e, t) {
    this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), t, e.key.start);
  }
  parsePostMemberNameModifiers(e) {
  }
  parseClassPrivateProperty(e) {
    return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassPrivateProperty");
  }
  parseClassProperty(e) {
    return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassProperty");
  }
  parseInitializer(e) {
    this.scope.enter(Pr | Tn), this.expressionScope.enter(Sp()), this.prodParam.enter(ts), e.value = this.eat(27) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
  }
  parseClassId(e, t, r, i = dp) {
    Se(this.state.type) ? (e.id = this.parseIdentifier(), t && this.checkLVal(e.id, "class name", i)) : r || !t ? e.id = null : this.unexpected(null, I.MissingClassName);
  }
  parseClassSuper(e) {
    e.superClass = this.eat(75) ? this.parseExprSubscripts() : null;
  }
  parseExport(e) {
    const t = this.maybeParseExportDefaultSpecifier(e), r = !t || this.eat(12), i = r && this.eatExportStar(e), n = i && this.maybeParseExportNamespaceSpecifier(e), a = r && (!n || this.eat(12)), o = t || i;
    if (i && !n)
      return t && this.unexpected(), this.parseExportFrom(e, true), this.finishNode(e, "ExportAllDeclaration");
    const l = this.maybeParseExportNamedSpecifiers(e);
    if (t && r && !i && !l || n && a && !l)
      throw this.unexpected(null, 5);
    let u;
    if (o || l ? (u = false, this.parseExportFrom(e, o)) : u = this.maybeParseExportDeclaration(e), o || l || u)
      return this.checkExport(e, true, false, !!e.source), this.finishNode(e, "ExportNamedDeclaration");
    if (this.eat(59))
      return e.declaration = this.parseExportDefaultExpression(), this.checkExport(e, true, true), this.finishNode(e, "ExportDefaultDeclaration");
    throw this.unexpected(null, 5);
  }
  eatExportStar(e) {
    return this.eat(49);
  }
  maybeParseExportDefaultSpecifier(e) {
    if (this.isExportDefaultSpecifier()) {
      this.expectPlugin("exportDefaultFrom");
      const t = this.startNode();
      return t.exported = this.parseIdentifier(true), e.specifiers = [this.finishNode(t, "ExportDefaultSpecifier")], true;
    }
    return false;
  }
  maybeParseExportNamespaceSpecifier(e) {
    if (this.isContextual(87)) {
      e.specifiers || (e.specifiers = []);
      const t = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
      return this.next(), t.exported = this.parseModuleExportName(), e.specifiers.push(this.finishNode(t, "ExportNamespaceSpecifier")), true;
    }
    return false;
  }
  maybeParseExportNamedSpecifiers(e) {
    if (this.match(5)) {
      e.specifiers || (e.specifiers = []);
      const t = e.exportKind === "type";
      return e.specifiers.push(...this.parseExportSpecifiers(t)), e.source = null, e.declaration = null, this.hasPlugin("importAssertions") && (e.assertions = []), true;
    }
    return false;
  }
  maybeParseExportDeclaration(e) {
    return this.shouldParseExportDeclaration() ? (e.specifiers = [], e.source = null, this.hasPlugin("importAssertions") && (e.assertions = []), e.declaration = this.parseExportDeclaration(e), true) : false;
  }
  isAsyncFunction() {
    if (!this.isContextual(89))
      return false;
    const e = this.nextTokenStart();
    return !Tl.test(this.input.slice(this.state.pos, e)) && this.isUnparsedContextual(e, "function");
  }
  parseExportDefaultExpression() {
    const e = this.startNode(), t = this.isAsyncFunction();
    if (this.match(62) || t)
      return this.next(), t && this.next(), this.parseFunction(e, Ka | Sc, t);
    if (this.match(74))
      return this.parseClass(e, true, true);
    if (this.match(24))
      return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(this.state.start, I.DecoratorBeforeExport), this.parseDecorators(false), this.parseClass(e, true, true);
    if (this.match(69) || this.match(68) || this.isLet())
      throw this.raise(this.state.start, I.UnsupportedDefaultExport);
    {
      const r = this.parseMaybeAssignAllowIn();
      return this.semicolon(), r;
    }
  }
  parseExportDeclaration(e) {
    return this.parseStatement(null);
  }
  isExportDefaultSpecifier() {
    const {
      type: e
    } = this.state;
    if (Se(e)) {
      if (e === 89 && !this.state.containsEsc || e === 93)
        return false;
      if ((e === 120 || e === 119) && !this.state.containsEsc) {
        const {
          type: i
        } = this.lookahead();
        if (Se(i) && i !== 91 || i === 5)
          return this.expectOnePlugin(["flow", "typescript"]), false;
      }
    } else if (!this.match(59))
      return false;
    const t = this.nextTokenStart(), r = this.isUnparsedContextual(t, "from");
    if (this.input.charCodeAt(t) === 44 || Se(this.state.type) && r)
      return true;
    if (this.match(59) && r) {
      const i = this.input.charCodeAt(this.nextTokenStartSince(t + 4));
      return i === 34 || i === 39;
    }
    return false;
  }
  parseExportFrom(e, t) {
    if (this.eatContextual(91)) {
      e.source = this.parseImportSource(), this.checkExport(e);
      const r = this.maybeParseImportAssertions();
      r && (e.assertions = r);
    } else
      t && this.unexpected();
    this.semicolon();
  }
  shouldParseExportDeclaration() {
    const {
      type: e
    } = this.state;
    if (e === 24 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")))
      if (this.getPluginOption("decorators", "decoratorsBeforeExport"))
        this.unexpected(this.state.start, I.DecoratorBeforeExport);
      else
        return true;
    return e === 68 || e === 69 || e === 62 || e === 74 || this.isLet() || this.isAsyncFunction();
  }
  checkExport(e, t, r, i) {
    if (t) {
      if (r) {
        if (this.checkDuplicateExports(e, "default"), this.hasPlugin("exportDefaultFrom")) {
          var n;
          const o = e.declaration;
          o.type === "Identifier" && o.name === "from" && o.end - o.start === 4 && !((n = o.extra) != null && n.parenthesized) && this.raise(o.start, I.ExportDefaultFromAsIdentifier);
        }
      } else if (e.specifiers && e.specifiers.length)
        for (const o of e.specifiers) {
          const {
            exported: l
          } = o, u = l.type === "Identifier" ? l.name : l.value;
          if (this.checkDuplicateExports(o, u), !i && o.local) {
            const {
              local: c
            } = o;
            c.type !== "Identifier" ? this.raise(o.start, I.ExportBindingIsString, c.value, u) : (this.checkReservedWord(c.name, c.start, true, false), this.scope.checkLocalExport(c));
          }
        }
      else if (e.declaration) {
        if (e.declaration.type === "FunctionDeclaration" || e.declaration.type === "ClassDeclaration") {
          const o = e.declaration.id;
          if (!o)
            throw new Error("Assertion failure");
          this.checkDuplicateExports(e, o.name);
        } else if (e.declaration.type === "VariableDeclaration")
          for (const o of e.declaration.declarations)
            this.checkDeclaration(o.id);
      }
    }
    if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length)
      throw this.raise(e.start, I.UnsupportedDecoratorExport);
  }
  checkDeclaration(e) {
    if (e.type === "Identifier")
      this.checkDuplicateExports(e, e.name);
    else if (e.type === "ObjectPattern")
      for (const t of e.properties)
        this.checkDeclaration(t);
    else if (e.type === "ArrayPattern")
      for (const t of e.elements)
        t && this.checkDeclaration(t);
    else
      e.type === "ObjectProperty" ? this.checkDeclaration(e.value) : e.type === "RestElement" ? this.checkDeclaration(e.argument) : e.type === "AssignmentPattern" && this.checkDeclaration(e.left);
  }
  checkDuplicateExports(e, t) {
    this.exportedIdentifiers.has(t) && this.raise(e.start, t === "default" ? I.DuplicateDefaultExport : I.DuplicateExport, t), this.exportedIdentifiers.add(t);
  }
  parseExportSpecifiers(e) {
    const t = [];
    let r = true;
    for (this.expect(5); !this.eat(8); ) {
      if (r)
        r = false;
      else if (this.expect(12), this.eat(8))
        break;
      const i = this.isContextual(120), n = this.match(123), a = this.startNode();
      a.local = this.parseModuleExportName(), t.push(this.parseExportSpecifier(a, n, e, i));
    }
    return t;
  }
  parseExportSpecifier(e, t, r, i) {
    return this.eatContextual(87) ? e.exported = this.parseModuleExportName() : t ? e.exported = Sy(e.local) : e.exported || (e.exported = Jt(e.local)), this.finishNode(e, "ExportSpecifier");
  }
  parseModuleExportName() {
    if (this.match(123)) {
      const e = this.parseStringLiteral(this.state.value), t = e.value.match(Hy);
      return t && this.raise(e.start, I.ModuleExportNameHasLoneSurrogate, t[0].charCodeAt(0).toString(16)), e;
    }
    return this.parseIdentifier(true);
  }
  parseImport(e) {
    if (e.specifiers = [], !this.match(123)) {
      const i = !this.maybeParseDefaultImportSpecifier(e) || this.eat(12), n = i && this.maybeParseStarImportSpecifier(e);
      i && !n && this.parseNamedImportSpecifiers(e), this.expectContextual(91);
    }
    e.source = this.parseImportSource();
    const t = this.maybeParseImportAssertions();
    if (t)
      e.assertions = t;
    else {
      const r = this.maybeParseModuleAttributes();
      r && (e.attributes = r);
    }
    return this.semicolon(), this.finishNode(e, "ImportDeclaration");
  }
  parseImportSource() {
    return this.match(123) || this.unexpected(), this.parseExprAtom();
  }
  shouldParseDefaultImport(e) {
    return Se(this.state.type);
  }
  parseImportSpecifierLocal(e, t, r, i) {
    t.local = this.parseIdentifier(), this.checkLVal(t.local, i, gt), e.specifiers.push(this.finishNode(t, r));
  }
  parseAssertEntries() {
    const e = [], t = /* @__PURE__ */ new Set();
    do {
      if (this.match(8))
        break;
      const r = this.startNode(), i = this.state.value;
      if (t.has(i) && this.raise(this.state.start, I.ModuleAttributesWithDuplicateKeys, i), t.add(i), this.match(123) ? r.key = this.parseStringLiteral(i) : r.key = this.parseIdentifier(true), this.expect(14), !this.match(123))
        throw this.unexpected(this.state.start, I.ModuleAttributeInvalidValue);
      r.value = this.parseStringLiteral(this.state.value), this.finishNode(r, "ImportAttribute"), e.push(r);
    } while (this.eat(12));
    return e;
  }
  maybeParseModuleAttributes() {
    if (this.match(70) && !this.hasPrecedingLineBreak())
      this.expectPlugin("moduleAttributes"), this.next();
    else
      return this.hasPlugin("moduleAttributes") ? [] : null;
    const e = [], t = /* @__PURE__ */ new Set();
    do {
      const r = this.startNode();
      if (r.key = this.parseIdentifier(true), r.key.name !== "type" && this.raise(r.key.start, I.ModuleAttributeDifferentFromType, r.key.name), t.has(r.key.name) && this.raise(r.key.start, I.ModuleAttributesWithDuplicateKeys, r.key.name), t.add(r.key.name), this.expect(14), !this.match(123))
        throw this.unexpected(this.state.start, I.ModuleAttributeInvalidValue);
      r.value = this.parseStringLiteral(this.state.value), this.finishNode(r, "ImportAttribute"), e.push(r);
    } while (this.eat(12));
    return e;
  }
  maybeParseImportAssertions() {
    if (this.isContextual(88) && !this.hasPrecedingLineBreak())
      this.expectPlugin("importAssertions"), this.next();
    else
      return this.hasPlugin("importAssertions") ? [] : null;
    this.eat(5);
    const e = this.parseAssertEntries();
    return this.eat(8), e;
  }
  maybeParseDefaultImportSpecifier(e) {
    return this.shouldParseDefaultImport(e) ? (this.parseImportSpecifierLocal(e, this.startNode(), "ImportDefaultSpecifier", "default import specifier"), true) : false;
  }
  maybeParseStarImportSpecifier(e) {
    if (this.match(49)) {
      const t = this.startNode();
      return this.next(), this.expectContextual(87), this.parseImportSpecifierLocal(e, t, "ImportNamespaceSpecifier", "import namespace specifier"), true;
    }
    return false;
  }
  parseNamedImportSpecifiers(e) {
    let t = true;
    for (this.expect(5); !this.eat(8); ) {
      if (t)
        t = false;
      else {
        if (this.eat(14))
          throw this.raise(this.state.start, I.DestructureNamedImport);
        if (this.expect(12), this.eat(8))
          break;
      }
      const r = this.startNode(), i = this.match(123), n = this.isContextual(120);
      r.imported = this.parseModuleExportName();
      const a = this.parseImportSpecifier(r, i, e.importKind === "type" || e.importKind === "typeof", n);
      e.specifiers.push(a);
    }
  }
  parseImportSpecifier(e, t, r, i) {
    if (this.eatContextual(87))
      e.local = this.parseIdentifier();
    else {
      const {
        imported: n
      } = e;
      if (t)
        throw this.raise(e.start, I.ImportBindingIsString, n.value);
      this.checkReservedWord(n.name, e.start, true, true), e.local || (e.local = Jt(n));
    }
    return this.checkLVal(e.local, "import specifier", gt), this.finishNode(e, "ImportSpecifier");
  }
  isThisParam(e) {
    return e.type === "Identifier" && e.name === "this";
  }
};
var Tp = class extends Yy {
  constructor(e, t) {
    e = qy(e), super(e, t), this.options = e, this.initializeScopes(), this.plugins = Jy(this.options.plugins), this.filename = e.sourceFilename;
  }
  getScopeHandler() {
    return $l;
  }
  parse() {
    this.enterInitialScopes();
    const e = this.startNode(), t = this.startNode();
    return this.nextToken(), e.errors = null, this.parseTopLevel(e, t), e.errors = this.state.errors, e;
  }
};
function Jy(s3) {
  const e = /* @__PURE__ */ new Map();
  for (const t of s3) {
    const [r, i] = Array.isArray(t) ? t : [t, {}];
    e.has(r) || e.set(r, i || {});
  }
  return e;
}
function Qy(s3, e) {
  var t;
  if (((t = e) == null ? void 0 : t.sourceType) === "unambiguous") {
    e = Object.assign({}, e);
    try {
      e.sourceType = "module";
      const r = Hs(e, s3), i = r.parse();
      if (r.sawUnambiguousESM)
        return i;
      if (r.ambiguousScriptDifferentAst)
        try {
          return e.sourceType = "script", Hs(e, s3).parse();
        } catch {
        }
      else
        i.program.sourceType = "script";
      return i;
    } catch (r) {
      try {
        return e.sourceType = "script", Hs(e, s3).parse();
      } catch {
      }
      throw r;
    }
  } else
    return Hs(e, s3).parse();
}
function Xy(s3, e) {
  const t = Hs(e, s3);
  return t.options.strictMode && (t.state.strict = true), t.getExpression();
}
function Zy(s3) {
  const e = {};
  for (const t of Object.keys(s3))
    e[t] = nn(s3[t]);
  return e;
}
Zy(Cg);
function Hs(s3, e) {
  let t = Tp;
  return s3 != null && s3.plugins && (Uy(s3.plugins), t = e0(s3.plugins)), new t(s3, e);
}
var wc = {};
function e0(s3) {
  const e = jy.filter((i) => Ke(s3, i)), t = e.join("/");
  let r = wc[t];
  if (!r) {
    r = Tp;
    for (const i of e)
      r = xp[i](r);
    wc[t] = r;
  }
  return r;
}
var In = Qy;
var Pp = Xy;
var Qe = (s3) => s3.type === 4 && s3.isStatic;
var wt = (s3, e) => s3 === e || s3 === Wh(e);
function Vl(s3) {
  if (wt(s3, "Teleport"))
    return Ir;
  if (wt(s3, "Suspense"))
    return Ss;
  if (wt(s3, "KeepAlive"))
    return ai;
  if (wt(s3, "BaseTransition"))
    return gl;
}
var t0 = /^\d|[^\$\w]/;
var pr = (s3) => !t0.test(s3);
var r0 = /[A-Za-z_$\xA0-\uFFFF]/;
var s0 = /[\.\?\w$\xA0-\uFFFF]/;
var i0 = /\s+[.[]\s*|\s*[.[]\s+/g;
var n0 = (s3) => {
  s3 = s3.trim().replace(i0, (a) => a.trim());
  let e = 0, t = [], r = 0, i = 0, n = null;
  for (let a = 0; a < s3.length; a++) {
    const o = s3.charAt(a);
    switch (e) {
      case 0:
        if (o === "[")
          t.push(e), e = 1, r++;
        else if (o === "(")
          t.push(e), e = 2, i++;
        else if (!(a === 0 ? r0 : s0).test(o))
          return false;
        break;
      case 1:
        o === "'" || o === '"' || o === "`" ? (t.push(e), e = 3, n = o) : o === "[" ? r++ : o === "]" && (--r || (e = t.pop()));
        break;
      case 2:
        if (o === "'" || o === '"' || o === "`")
          t.push(e), e = 3, n = o;
        else if (o === "(")
          i++;
        else if (o === ")") {
          if (a === s3.length - 1)
            return false;
          --i || (e = t.pop());
        }
        break;
      case 3:
        o === n && (e = t.pop(), n = null);
        break;
    }
  }
  return !r && !i;
};
var Ap = (s3, e) => {
  try {
    let t = Pp(s3, {
      plugins: e.expressionPlugins
    });
    return (t.type === "TSAsExpression" || t.type === "TSTypeAssertion") && (t = t.expression), t.type === "MemberExpression" || t.type === "OptionalMemberExpression" || t.type === "Identifier";
  } catch {
    return false;
  }
};
var zl = Ap;
function Gl(s3, e, t) {
  const i = {
    source: s3.source.slice(e, e + t),
    start: Fr(s3.start, s3.source, e),
    end: s3.end
  };
  return t != null && (i.end = Fr(s3.start, s3.source, e + t)), i;
}
function Fr(s3, e, t = e.length) {
  return hs(Ht({}, s3), e, t);
}
function hs(s3, e, t = e.length) {
  let r = 0, i = -1;
  for (let n = 0; n < t; n++)
    e.charCodeAt(n) === 10 && (r++, i = n);
  return s3.offset += t, s3.line += r, s3.column = i === -1 ? s3.column + t : t - i, s3;
}
function Ao(s3, e) {
  if (!s3)
    throw new Error(e || "unexpected compiler condition");
}
function Be(s3, e, t = false) {
  for (let r = 0; r < s3.props.length; r++) {
    const i = s3.props[r];
    if (i.type === 7 && (t || i.exp) && (be(e) ? i.name === e : e.test(i.name)))
      return i;
  }
}
function lt(s3, e, t = false, r = false) {
  for (let i = 0; i < s3.props.length; i++) {
    const n = s3.props[i];
    if (n.type === 6) {
      if (t)
        continue;
      if (n.name === e && (n.value || r))
        return n;
    } else if (n.name === "bind" && (n.exp || r) && Vt(n.arg, e))
      return n;
  }
}
function Vt(s3, e) {
  return !!(s3 && Qe(s3) && s3.content === e);
}
function ua(s3) {
  return s3.props.some((e) => e.type === 7 && e.name === "bind" && (!e.arg || e.arg.type !== 4 || !e.arg.isStatic));
}
function Qs(s3) {
  return s3.type === 5 || s3.type === 2;
}
function Wl(s3) {
  return s3.type === 7 && s3.name === "slot";
}
function ps(s3) {
  return s3.type === 1 && s3.tagType === 3;
}
function fs(s3) {
  return s3.type === 1 && s3.tagType === 2;
}
function Br(s3, e) {
  return s3 || e ? ki : Kn;
}
function $r(s3, e) {
  return s3 || e ? yl : vl;
}
var a0 = /* @__PURE__ */ new Set([os, Es]);
function Cp(s3, e = []) {
  if (s3 && !be(s3) && s3.type === 14) {
    const t = s3.callee;
    if (!be(t) && a0.has(t))
      return Cp(s3.arguments[0], e.concat(s3));
  }
  return [s3, e];
}
function fi(s3, e, t) {
  let r, i = s3.type === 13 ? s3.props : s3.arguments[2], n = [], a;
  if (i && !be(i) && i.type === 14) {
    const o = Cp(i);
    i = o[0], n = o[1], a = n[n.length - 1];
  }
  if (i == null || be(i))
    r = at([e]);
  else if (i.type === 14) {
    const o = i.arguments[0];
    !be(o) && o.type === 15 ? o.properties.unshift(e) : i.callee === ra ? r = ae(t.helper(Rr), [
      at([e]),
      i
    ]) : i.arguments.unshift(at([e])), !r && (r = i);
  } else if (i.type === 15) {
    let o = false;
    if (e.key.type === 4) {
      const l = e.key.content;
      o = i.properties.some((u) => u.key.type === 4 && u.key.content === l);
    }
    o || i.properties.unshift(e), r = i;
  } else
    r = ae(t.helper(Rr), [
      at([e]),
      i
    ]), a && a.callee === Es && (a = n[n.length - 2]);
  s3.type === 13 ? a ? a.arguments[0] = r : s3.props = r : a ? a.arguments[0] = r : s3.arguments[2] = r;
}
function di(s3, e) {
  return `_${e}_${s3.replace(/[^\w]/g, (t, r) => t === "-" ? "_" : s3.charCodeAt(r).toString())}`;
}
function it(s3, e) {
  if (!s3 || Object.keys(e).length === 0)
    return false;
  switch (s3.type) {
    case 1:
      for (let t = 0; t < s3.props.length; t++) {
        const r = s3.props[t];
        if (r.type === 7 && (it(r.arg, e) || it(r.exp, e)))
          return true;
      }
      return s3.children.some((t) => it(t, e));
    case 11:
      return it(s3.source, e) ? true : s3.children.some((t) => it(t, e));
    case 9:
      return s3.branches.some((t) => it(t, e));
    case 10:
      return it(s3.condition, e) ? true : s3.children.some((t) => it(t, e));
    case 4:
      return !s3.isStatic && pr(s3.content) && !!e[s3.content];
    case 8:
      return s3.children.some((t) => er(t) && it(t, e));
    case 5:
    case 12:
      return it(s3.content, e);
    case 2:
    case 3:
      return false;
    default:
      return false;
  }
}
function _p(s3) {
  return s3.type === 14 && s3.callee === aa ? s3.arguments[1].returns : s3;
}
function ca(s3, { helper: e, removeHelper: t, inSSR: r }) {
  s3.isBlock || (s3.isBlock = true, t(Br(r, s3.isComponent)), e(ur), e($r(r, s3.isComponent)));
}
var o0 = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (s3) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${s3}.sync\` should be changed to \`v-model:${s3}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_PROP: {
    message: ".prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate."
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTER: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function Co(s3, e) {
  const t = e.options ? e.options.compatConfig : e.compatConfig, r = t && t[s3];
  return s3 === "MODE" ? r || 3 : r;
}
function l0(s3, e) {
  const t = Co("MODE", e), r = Co(s3, e);
  return t === 3 ? r === true : r !== false;
}
function u0(s3, e, t, ...r) {
  const i = l0(s3, e);
  return i && Ip(s3, e, t, ...r), i;
}
function Ip(s3, e, t, ...r) {
  if (Co(s3, e) === "suppress-warning")
    return;
  const { message: n, link: a } = o0[s3], o = `(deprecation ${s3}) ${typeof n == "function" ? n(...r) : n}${a ? `
  Details: ${a}` : ""}`, l = new SyntaxError(o);
  l.code = s3, t && (l.loc = t), e.onWarn(l);
}
var c0 = /&(gt|lt|amp|apos|quot);/g;
var h0 = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: '"'
};
var Ec = {
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  getTextMode: () => 0,
  isVoidTag: rn,
  isPreTag: rn,
  isCustomElement: rn,
  decodeEntities: (s3) => s3.replace(c0, (e, t) => h0[t]),
  onError: ml,
  onWarn: Hh,
  comments: true
};
function ha(s3, e = {}) {
  const t = p0(s3, e), r = ht(t);
  return xs(Hl(t, 0, []), xt(t, r));
}
function p0(s3, e) {
  const t = Ht({}, Ec);
  let r;
  for (r in e)
    t[r] = e[r] === void 0 ? Ec[r] : e[r];
  return {
    options: t,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: s3,
    source: s3,
    inPre: false,
    inVPre: false,
    onWarn: t.onWarn
  };
}
function Hl(s3, e, t) {
  const r = pa(t), i = r ? r.ns : 0, n = [];
  for (; !E0(s3, e, t); ) {
    const o = s3.source;
    let l;
    if (e === 0 || e === 1) {
      if (!s3.inVPre && Ye(o, s3.options.delimiters[0]))
        l = S0(s3, e);
      else if (e === 0 && o[0] === "<")
        if (o.length === 1)
          xe(s3, 5, 1);
        else if (o[1] === "!")
          Ye(o, "<!--") ? l = d0(s3) : Ye(o, "<!DOCTYPE") ? l = Us(s3) : Ye(o, "<![CDATA[") ? i !== 0 ? l = f0(s3, t) : (xe(s3, 1), l = Us(s3)) : (xe(s3, 11), l = Us(s3));
        else if (o[1] === "/")
          if (o.length === 2)
            xe(s3, 5, 2);
          else if (o[2] === ">") {
            xe(s3, 14, 2), De(s3, 3);
            continue;
          } else if (/[a-z]/i.test(o[2])) {
            xe(s3, 23), _o(s3, 1, r);
            continue;
          } else
            xe(s3, 12, 2), l = Us(s3);
        else
          /[a-z]/i.test(o[1]) ? l = m0(s3, t) : o[1] === "?" ? (xe(s3, 21, 1), l = Us(s3)) : xe(s3, 12, 1);
    }
    if (l || (l = w0(s3, e)), rt(l))
      for (let u = 0; u < l.length; u++)
        xc(n, l[u]);
    else
      xc(n, l);
  }
  let a = false;
  if (e !== 2 && e !== 1) {
    const o = s3.options.whitespace !== "preserve";
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      if (!s3.inPre && u.type === 2)
        if (/[^\t\r\n\f ]/.test(u.content))
          o && (u.content = u.content.replace(/[\t\r\n\f ]+/g, " "));
        else {
          const c = n[l - 1], h = n[l + 1];
          !c || !h || o && (c.type === 3 || h.type === 3 || c.type === 1 && h.type === 1 && /[\r\n]/.test(u.content)) ? (a = true, n[l] = null) : u.content = " ";
        }
      else
        u.type === 3 && !s3.options.comments && (a = true, n[l] = null);
    }
    if (s3.inPre && r && s3.options.isPreTag(r.tag)) {
      const l = n[0];
      l && l.type === 2 && (l.content = l.content.replace(/^\r?\n/, ""));
    }
  }
  return a ? n.filter(Boolean) : n;
}
function xc(s3, e) {
  if (e.type === 2) {
    const t = pa(s3);
    if (t && t.type === 2 && t.loc.end.offset === e.loc.start.offset) {
      t.content += e.content, t.loc.end = e.loc.end, t.loc.source += e.loc.source;
      return;
    }
  }
  s3.push(e);
}
function f0(s3, e) {
  De(s3, 9);
  const t = Hl(s3, 3, e);
  return s3.source.length === 0 ? xe(s3, 6) : De(s3, 3), t;
}
function d0(s3) {
  const e = ht(s3);
  let t;
  const r = /--(\!)?>/.exec(s3.source);
  if (!r)
    t = s3.source.slice(4), De(s3, s3.source.length), xe(s3, 7);
  else {
    r.index <= 3 && xe(s3, 0), r[1] && xe(s3, 10), t = s3.source.slice(4, r.index);
    const i = s3.source.slice(0, r.index);
    let n = 1, a = 0;
    for (; (a = i.indexOf("<!--", n)) !== -1; )
      De(s3, a - n + 1), a + 4 < i.length && xe(s3, 16), n = a + 1;
    De(s3, r.index + r[0].length - n + 1);
  }
  return {
    type: 3,
    content: t,
    loc: xt(s3, e)
  };
}
function Us(s3) {
  const e = ht(s3), t = s3.source[1] === "?" ? 1 : 2;
  let r;
  const i = s3.source.indexOf(">");
  return i === -1 ? (r = s3.source.slice(t), De(s3, s3.source.length)) : (r = s3.source.slice(t, i), De(s3, i + 1)), {
    type: 3,
    content: r,
    loc: xt(s3, e)
  };
}
function m0(s3, e) {
  const t = s3.inPre, r = s3.inVPre, i = pa(e), n = _o(s3, 0, i), a = s3.inPre && !t, o = s3.inVPre && !r;
  if (n.isSelfClosing || s3.options.isVoidTag(n.tag))
    return a && (s3.inPre = false), o && (s3.inVPre = false), n;
  e.push(n);
  const l = s3.options.getTextMode(n, i), u = Hl(s3, l, e);
  if (e.pop(), n.children = u, Io(s3.source, n.tag))
    _o(s3, 1, i);
  else if (xe(s3, 24, 0, n.loc.start), s3.source.length === 0 && n.tag.toLowerCase() === "script") {
    const c = u[0];
    c && Ye(c.loc.source, "<!--") && xe(s3, 8);
  }
  return n.loc = xt(s3, n.loc.start), a && (s3.inPre = false), o && (s3.inVPre = false), n;
}
var g0 = Re("if,else,else-if,for,slot");
function _o(s3, e, t) {
  const r = ht(s3), i = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(s3.source), n = i[1], a = s3.options.getNamespace(n, t);
  De(s3, i[0].length), mi(s3);
  const o = ht(s3), l = s3.source;
  s3.options.isPreTag(n) && (s3.inPre = true);
  let u = Tc(s3, e);
  e === 0 && !s3.inVPre && u.some((p) => p.type === 7 && p.name === "pre") && (s3.inVPre = true, Ht(s3, o), s3.source = l, u = Tc(s3, e).filter((p) => p.name !== "v-pre"));
  let c = false;
  if (s3.source.length === 0 ? xe(s3, 9) : (c = Ye(s3.source, "/>"), e === 1 && c && xe(s3, 4), De(s3, c ? 2 : 1)), e === 1)
    return;
  let h = 0;
  return s3.inVPre || (n === "slot" ? h = 2 : n === "template" ? u.some((p) => p.type === 7 && g0(p.name)) && (h = 3) : y0(n, u, s3) && (h = 1)), {
    type: 1,
    ns: a,
    tag: n,
    tagType: h,
    props: u,
    isSelfClosing: c,
    children: [],
    loc: xt(s3, r),
    codegenNode: void 0
  };
}
function y0(s3, e, t) {
  const r = t.options;
  if (r.isCustomElement(s3))
    return false;
  if (s3 === "component" || /^[A-Z]/.test(s3) || Vl(s3) || r.isBuiltInComponent && r.isBuiltInComponent(s3) || r.isNativeTag && !r.isNativeTag(s3))
    return true;
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    if (n.type === 6) {
      if (n.name === "is" && n.value && n.value.content.startsWith("vue:"))
        return true;
    } else {
      if (n.name === "is")
        return true;
      n.name === "bind" && Vt(n.arg, "is");
    }
  }
}
function Tc(s3, e) {
  const t = [], r = /* @__PURE__ */ new Set();
  for (; s3.source.length > 0 && !Ye(s3.source, ">") && !Ye(s3.source, "/>"); ) {
    if (Ye(s3.source, "/")) {
      xe(s3, 22), De(s3, 1), mi(s3);
      continue;
    }
    e === 1 && xe(s3, 3);
    const i = v0(s3, r);
    i.type === 6 && i.value && i.name === "class" && (i.value.content = i.value.content.replace(/\s+/g, " ").trim()), e === 0 && t.push(i), /^[^\t\r\n\f />]/.test(s3.source) && xe(s3, 15), mi(s3);
  }
  return t;
}
function v0(s3, e) {
  const t = ht(s3), i = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(s3.source)[0];
  e.has(i) && xe(s3, 2), e.add(i), i[0] === "=" && xe(s3, 19);
  {
    const o = /["'<]/g;
    let l;
    for (; l = o.exec(i); )
      xe(s3, 17, l.index);
  }
  De(s3, i.length);
  let n;
  /^[\t\r\n\f ]*=/.test(s3.source) && (mi(s3), De(s3, 1), mi(s3), n = b0(s3), n || xe(s3, 13));
  const a = xt(s3, t);
  if (!s3.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(i)) {
    const o = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(i);
    let l = Ye(i, "."), u = o[1] || (l || Ye(i, ":") ? "bind" : Ye(i, "@") ? "on" : "slot"), c;
    if (o[2]) {
      const p = u === "slot", f = i.lastIndexOf(o[2]), g = xt(s3, Pc(s3, t, f), Pc(s3, t, f + o[2].length + (p && o[3] || "").length));
      let d = o[2], m = true;
      d.startsWith("[") ? (m = false, d.endsWith("]") ? d = d.slice(1, d.length - 1) : (xe(s3, 27), d = d.slice(1))) : p && (d += o[3] || ""), c = {
        type: 4,
        content: d,
        isStatic: m,
        constType: m ? 3 : 0,
        loc: g
      };
    }
    if (n && n.isQuoted) {
      const p = n.loc;
      p.start.offset++, p.start.column++, p.end = Fr(p.start, n.content), p.source = p.source.slice(1, -1);
    }
    const h = o[3] ? o[3].slice(1).split(".") : [];
    return l && h.push("prop"), {
      type: 7,
      name: u,
      exp: n && {
        type: 4,
        content: n.content,
        isStatic: false,
        constType: 0,
        loc: n.loc
      },
      arg: c,
      modifiers: h,
      loc: a
    };
  }
  return !s3.inVPre && Ye(i, "v-") && xe(s3, 26), {
    type: 6,
    name: i,
    value: n && {
      type: 2,
      content: n.content,
      loc: n.loc
    },
    loc: a
  };
}
function b0(s3) {
  const e = ht(s3);
  let t;
  const r = s3.source[0], i = r === '"' || r === "'";
  if (i) {
    De(s3, 1);
    const n = s3.source.indexOf(r);
    n === -1 ? t = Xs(s3, s3.source.length, 4) : (t = Xs(s3, n, 4), De(s3, 1));
  } else {
    const n = /^[^\t\r\n\f >]+/.exec(s3.source);
    if (!n)
      return;
    const a = /["'<=`]/g;
    let o;
    for (; o = a.exec(n[0]); )
      xe(s3, 18, o.index);
    t = Xs(s3, n[0].length, 4);
  }
  return { content: t, isQuoted: i, loc: xt(s3, e) };
}
function S0(s3, e) {
  const [t, r] = s3.options.delimiters, i = s3.source.indexOf(r, t.length);
  if (i === -1) {
    xe(s3, 25);
    return;
  }
  const n = ht(s3);
  De(s3, t.length);
  const a = ht(s3), o = ht(s3), l = i - t.length, u = s3.source.slice(0, l), c = Xs(s3, l, e), h = c.trim(), p = c.indexOf(h);
  p > 0 && hs(a, u, p);
  const f = l - (c.length - h.length - p);
  return hs(o, u, f), De(s3, r.length), {
    type: 5,
    content: {
      type: 4,
      isStatic: false,
      constType: 0,
      content: h,
      loc: xt(s3, a, o)
    },
    loc: xt(s3, n)
  };
}
function w0(s3, e) {
  const t = e === 3 ? ["]]>"] : ["<", s3.options.delimiters[0]];
  let r = s3.source.length;
  for (let a = 0; a < t.length; a++) {
    const o = s3.source.indexOf(t[a], 1);
    o !== -1 && r > o && (r = o);
  }
  const i = ht(s3), n = Xs(s3, r, e);
  return {
    type: 2,
    content: n,
    loc: xt(s3, i)
  };
}
function Xs(s3, e, t) {
  const r = s3.source.slice(0, e);
  return De(s3, e), t === 2 || t === 3 || !r.includes("&") ? r : s3.options.decodeEntities(r, t === 4);
}
function ht(s3) {
  const { column: e, line: t, offset: r } = s3;
  return { column: e, line: t, offset: r };
}
function xt(s3, e, t) {
  return t = t || ht(s3), {
    start: e,
    end: t,
    source: s3.originalSource.slice(e.offset, t.offset)
  };
}
function pa(s3) {
  return s3[s3.length - 1];
}
function Ye(s3, e) {
  return s3.startsWith(e);
}
function De(s3, e) {
  const { source: t } = s3;
  hs(s3, t, e), s3.source = t.slice(e);
}
function mi(s3) {
  const e = /^[\t\r\n\f ]+/.exec(s3.source);
  e && De(s3, e[0].length);
}
function Pc(s3, e, t) {
  return Fr(e, s3.originalSource.slice(e.offset, t), t);
}
function xe(s3, e, t, r = ht(s3)) {
  t && (r.offset += t, r.column += t), s3.options.onError(Te(e, {
    start: r,
    end: r,
    source: ""
  }));
}
function E0(s3, e, t) {
  const r = s3.source;
  switch (e) {
    case 0:
      if (Ye(r, "</")) {
        for (let i = t.length - 1; i >= 0; --i)
          if (Io(r, t[i].tag))
            return true;
      }
      break;
    case 1:
    case 2: {
      const i = pa(t);
      if (i && Io(r, i.tag))
        return true;
      break;
    }
    case 3:
      if (Ye(r, "]]>"))
        return true;
      break;
  }
  return !r;
}
function Io(s3, e) {
  return Ye(s3, "</") && s3.slice(2, 2 + e.length).toLowerCase() === e.toLowerCase() && /[\t\r\n\f />]/.test(s3[2 + e.length] || ">");
}
function x0(s3, e) {
  cn(s3, e, kp(s3, s3.children[0]));
}
function kp(s3, e) {
  const { children: t } = s3;
  return t.length === 1 && e.type === 1 && !fs(e);
}
function cn(s3, e, t = false) {
  const { children: r } = s3, i = r.length;
  let n = 0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (o.type === 1 && o.tagType === 0) {
      const l = t ? 0 : ot(o, e);
      if (l > 0) {
        if (l >= 2) {
          o.codegenNode.patchFlag = "-1 /* HOISTED */", o.codegenNode = e.hoist(o.codegenNode), n++;
          continue;
        }
      } else {
        const u = o.codegenNode;
        if (u.type === 13) {
          const c = Mp(u);
          if ((!c || c === 512 || c === 1) && Op(o, e) >= 2) {
            const h = Lp(o);
            h && (u.props = e.hoist(h));
          }
          u.dynamicProps && (u.dynamicProps = e.hoist(u.dynamicProps));
        }
      }
    } else
      o.type === 12 && ot(o.content, e) >= 2 && (o.codegenNode = e.hoist(o.codegenNode), n++);
    if (o.type === 1) {
      const l = o.tagType === 1;
      l && e.scopes.vSlot++, cn(o, e), l && e.scopes.vSlot--;
    } else if (o.type === 11)
      cn(o, e, o.children.length === 1);
    else if (o.type === 9)
      for (let l = 0; l < o.branches.length; l++)
        cn(o.branches[l], e, o.branches[l].children.length === 1);
  }
  n && e.transformHoist && e.transformHoist(r, e, s3), n && n === i && s3.type === 1 && s3.tagType === 0 && s3.codegenNode && s3.codegenNode.type === 13 && rt(s3.codegenNode.children) && (s3.codegenNode.children = e.hoist(Ur(s3.codegenNode.children)));
}
function ot(s3, e) {
  const { constantCache: t } = e;
  switch (s3.type) {
    case 1:
      if (s3.tagType !== 0)
        return 0;
      const r = t.get(s3);
      if (r !== void 0)
        return r;
      const i = s3.codegenNode;
      if (i.type !== 13 || i.isBlock && s3.tag !== "svg" && s3.tag !== "foreignObject")
        return 0;
      if (Mp(i))
        return t.set(s3, 0), 0;
      {
        let o = 3;
        const l = Op(s3, e);
        if (l === 0)
          return t.set(s3, 0), 0;
        l < o && (o = l);
        for (let u = 0; u < s3.children.length; u++) {
          const c = ot(s3.children[u], e);
          if (c === 0)
            return t.set(s3, 0), 0;
          c < o && (o = c);
        }
        if (o > 1)
          for (let u = 0; u < s3.props.length; u++) {
            const c = s3.props[u];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const h = ot(c.exp, e);
              if (h === 0)
                return t.set(s3, 0), 0;
              h < o && (o = h);
            }
          }
        if (i.isBlock) {
          for (let u = 0; u < s3.props.length; u++)
            if (s3.props[u].type === 7)
              return t.set(s3, 0), 0;
          e.removeHelper(ur), e.removeHelper($r(e.inSSR, i.isComponent)), i.isBlock = false, e.helper(Br(e.inSSR, i.isComponent));
        }
        return t.set(s3, o), o;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return ot(s3.content, e);
    case 4:
      return s3.constType;
    case 8:
      let a = 3;
      for (let o = 0; o < s3.children.length; o++) {
        const l = s3.children[o];
        if (be(l) || bs(l))
          continue;
        const u = ot(l, e);
        if (u === 0)
          return 0;
        u < a && (a = u);
      }
      return a;
    default:
      return 0;
  }
}
var T0 = /* @__PURE__ */ new Set([
  ea,
  ta,
  os,
  Es
]);
function Np(s3, e) {
  if (s3.type === 14 && !be(s3.callee) && T0.has(s3.callee)) {
    const t = s3.arguments[0];
    if (t.type === 4)
      return ot(t, e);
    if (t.type === 14)
      return Np(t, e);
  }
  return 0;
}
function Op(s3, e) {
  let t = 3;
  const r = Lp(s3);
  if (r && r.type === 15) {
    const { properties: i } = r;
    for (let n = 0; n < i.length; n++) {
      const { key: a, value: o } = i[n], l = ot(a, e);
      if (l === 0)
        return l;
      l < t && (t = l);
      let u;
      if (o.type === 4 ? u = ot(o, e) : o.type === 14 ? u = Np(o, e) : u = 0, u === 0)
        return u;
      u < t && (t = u);
    }
  }
  return t;
}
function Lp(s3) {
  const e = s3.codegenNode;
  if (e.type === 13)
    return e.props;
}
function Mp(s3) {
  const e = s3.patchFlag;
  return e ? parseInt(e, 10) : void 0;
}
function Li(s3, { filename: e = "", prefixIdentifiers: t = false, hoistStatic: r = false, cacheHandlers: i = false, nodeTransforms: n = [], directiveTransforms: a = {}, transformHoist: o = null, isBuiltInComponent: l = sc, isCustomElement: u = sc, expressionPlugins: c = [], scopeId: h = null, slotted: p = true, ssr: f = false, inSSR: g = false, ssrCssVars: d = "", bindingMetadata: m = ag, inline: y = false, isTS: x = false, onError: E = ml, onWarn: C = Hh, compatConfig: v }) {
  const w = e.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), T = {
    selfName: w && Dr(Mt(w[1])),
    prefixIdentifiers: t,
    hoistStatic: r,
    cacheHandlers: i,
    nodeTransforms: n,
    directiveTransforms: a,
    transformHoist: o,
    isBuiltInComponent: l,
    isCustomElement: u,
    expressionPlugins: c,
    scopeId: h,
    slotted: p,
    ssr: f,
    inSSR: g,
    ssrCssVars: d,
    bindingMetadata: m,
    inline: y,
    isTS: x,
    onError: E,
    onWarn: C,
    compatConfig: v,
    root: s3,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new Map(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: s3,
    childIndex: 0,
    inVOnce: false,
    helper(S) {
      const k = T.helpers.get(S) || 0;
      return T.helpers.set(S, k + 1), S;
    },
    removeHelper(S) {
      const k = T.helpers.get(S);
      if (k) {
        const _ = k - 1;
        _ ? T.helpers.set(S, _) : T.helpers.delete(S);
      }
    },
    helperString(S) {
      return `_${nt[T.helper(S)]}`;
    },
    replaceNode(S) {
      {
        if (!T.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!T.parent)
          throw new Error("Cannot replace root node.");
      }
      T.parent.children[T.childIndex] = T.currentNode = S;
    },
    removeNode(S) {
      if (!T.parent)
        throw new Error("Cannot remove root node.");
      const k = T.parent.children, _ = S ? k.indexOf(S) : T.currentNode ? T.childIndex : -1;
      if (_ < 0)
        throw new Error("node being removed is not a child of current parent");
      !S || S === T.currentNode ? (T.currentNode = null, T.onNodeRemoved()) : T.childIndex > _ && (T.childIndex--, T.onNodeRemoved()), T.parent.children.splice(_, 1);
    },
    onNodeRemoved: () => {
    },
    addIdentifiers(S) {
      be(S) ? P(S) : S.identifiers ? S.identifiers.forEach(P) : S.type === 4 && P(S.content);
    },
    removeIdentifiers(S) {
      be(S) ? b(S) : S.identifiers ? S.identifiers.forEach(b) : S.type === 4 && b(S.content);
    },
    hoist(S) {
      be(S) && (S = G(S)), T.hoists.push(S);
      const k = G(`_hoisted_${T.hoists.length}`, false, S.loc, 2);
      return k.hoisted = S, k;
    },
    cache(S, k = false) {
      return Jh(T.cached++, S, k);
    }
  };
  function P(S) {
    const { identifiers: k } = T;
    k[S] === void 0 && (k[S] = 0), k[S]++;
  }
  function b(S) {
    T.identifiers[S]--;
  }
  return T;
}
function fa(s3, e) {
  const t = Li(s3, e);
  Ps(s3, t), e.hoistStatic && x0(s3, t), e.ssr || P0(s3, t), s3.helpers = [...t.helpers.keys()], s3.components = [...t.components], s3.directives = [...t.directives], s3.imports = t.imports, s3.hoists = t.hoists, s3.temps = t.temps, s3.cached = t.cached;
}
function P0(s3, e) {
  const { helper: t } = e, { children: r } = s3;
  if (r.length === 1) {
    const i = r[0];
    if (kp(s3, i) && i.codegenNode) {
      const n = i.codegenNode;
      n.type === 13 && ca(n, e), s3.codegenNode = n;
    } else
      s3.codegenNode = i;
  } else if (r.length > 1) {
    let i = 64, n = Lt[64];
    r.filter((a) => a.type !== 3).length === 1 && (i |= 2048, n += `, ${Lt[2048]}`), s3.codegenNode = us(e, t(ns), void 0, s3.children, i + ` /* ${n} */`, void 0, void 0, true, void 0, false);
  }
}
function A0(s3, e) {
  let t = 0;
  const r = () => {
    t--;
  };
  for (; t < s3.children.length; t++) {
    const i = s3.children[t];
    be(i) || (e.parent = s3, e.childIndex = t, e.onNodeRemoved = r, Ps(i, e));
  }
}
function Ps(s3, e) {
  e.currentNode = s3;
  const { nodeTransforms: t } = e, r = [];
  for (let n = 0; n < t.length; n++) {
    const a = t[n](s3, e);
    if (a && (rt(a) ? r.push(...a) : r.push(a)), e.currentNode)
      s3 = e.currentNode;
    else
      return;
  }
  switch (s3.type) {
    case 3:
      e.ssr || e.helper(ws);
      break;
    case 5:
      e.ssr || e.helper(Ni);
      break;
    case 9:
      for (let n = 0; n < s3.branches.length; n++)
        Ps(s3.branches[n], e);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      A0(s3, e);
      break;
  }
  e.currentNode = s3;
  let i = r.length;
  for (; i--; )
    r[i]();
}
function Mi(s3, e) {
  const t = be(s3) ? (r) => r === s3 : (r) => s3.test(r);
  return (r, i) => {
    if (r.type === 1) {
      const { props: n } = r;
      if (r.tagType === 3 && n.some(Wl))
        return;
      const a = [];
      for (let o = 0; o < n.length; o++) {
        const l = n[o];
        if (l.type === 7 && t(l.name)) {
          n.splice(o, 1), o--;
          const u = e(r, l, i);
          u && a.push(u);
        }
      }
      return a;
    }
  };
}
var Ac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
var C0 = function(s3) {
  if (0 <= s3 && s3 < Ac.length)
    return Ac[s3];
  throw new TypeError("Must be between 0 and 63: " + s3);
};
var _0 = function(s3) {
  var e = 65, t = 90, r = 97, i = 122, n = 48, a = 57, o = 43, l = 47, u = 26, c = 52;
  return e <= s3 && s3 <= t ? s3 - e : r <= s3 && s3 <= i ? s3 - r + u : n <= s3 && s3 <= a ? s3 - n + c : s3 == o ? 62 : s3 == l ? 63 : -1;
};
var Dp = {
  encode: C0,
  decode: _0
};
var Kl = 5;
var Rp = 1 << Kl;
var Fp = Rp - 1;
var Bp = Rp;
function I0(s3) {
  return s3 < 0 ? (-s3 << 1) + 1 : (s3 << 1) + 0;
}
function k0(s3) {
  var e = (s3 & 1) === 1, t = s3 >> 1;
  return e ? -t : t;
}
var N0 = function(e) {
  var t = "", r, i = I0(e);
  do
    r = i & Fp, i >>>= Kl, i > 0 && (r |= Bp), t += Dp.encode(r);
  while (i > 0);
  return t;
};
var O0 = function(e, t, r) {
  var i = e.length, n = 0, a = 0, o, l;
  do {
    if (t >= i)
      throw new Error("Expected more digits in base 64 VLQ value.");
    if (l = Dp.decode(e.charCodeAt(t++)), l === -1)
      throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
    o = !!(l & Bp), l &= Fp, n = n + (l << a), a += Kl;
  } while (o);
  r.value = k0(n), r.rest = t;
};
var Wr = {
  encode: N0,
  decode: O0
};
function L0(s3) {
  return s3 && s3.__esModule && Object.prototype.hasOwnProperty.call(s3, "default") ? s3.default : s3;
}
function Di(s3) {
  if (s3.__esModule)
    return s3;
  var e = Object.defineProperty({}, "__esModule", { value: true });
  return Object.keys(s3).forEach(function(t) {
    var r = Object.getOwnPropertyDescriptor(s3, t);
    Object.defineProperty(e, t, r.get ? r : {
      enumerable: true,
      get: function() {
        return s3[t];
      }
    });
  }), e;
}
function we(s3) {
  var e = { exports: {} };
  return s3(e, e.exports), e.exports;
}
var U = we(function(s3, e) {
  function t(v, w, T) {
    if (w in v)
      return v[w];
    if (arguments.length === 3)
      return T;
    throw new Error('"' + w + '" is a required argument.');
  }
  e.getArg = t;
  var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
  function n(v) {
    var w = v.match(r);
    return w ? {
      scheme: w[1],
      auth: w[2],
      host: w[3],
      port: w[4],
      path: w[5]
    } : null;
  }
  e.urlParse = n;
  function a(v) {
    var w = "";
    return v.scheme && (w += v.scheme + ":"), w += "//", v.auth && (w += v.auth + "@"), v.host && (w += v.host), v.port && (w += ":" + v.port), v.path && (w += v.path), w;
  }
  e.urlGenerate = a;
  function o(v) {
    var w = v, T = n(v);
    if (T) {
      if (!T.path)
        return v;
      w = T.path;
    }
    for (var P = e.isAbsolute(w), b = w.split(/\/+/), S, k = 0, _ = b.length - 1; _ >= 0; _--)
      S = b[_], S === "." ? b.splice(_, 1) : S === ".." ? k++ : k > 0 && (S === "" ? (b.splice(_ + 1, k), k = 0) : (b.splice(_, 2), k--));
    return w = b.join("/"), w === "" && (w = P ? "/" : "."), T ? (T.path = w, a(T)) : w;
  }
  e.normalize = o;
  function l(v, w) {
    v === "" && (v = "."), w === "" && (w = ".");
    var T = n(w), P = n(v);
    if (P && (v = P.path || "/"), T && !T.scheme)
      return P && (T.scheme = P.scheme), a(T);
    if (T || w.match(i))
      return w;
    if (P && !P.host && !P.path)
      return P.host = w, a(P);
    var b = w.charAt(0) === "/" ? w : o(v.replace(/\/+$/, "") + "/" + w);
    return P ? (P.path = b, a(P)) : b;
  }
  e.join = l, e.isAbsolute = function(v) {
    return v.charAt(0) === "/" || r.test(v);
  };
  function u(v, w) {
    v === "" && (v = "."), v = v.replace(/\/$/, "");
    for (var T = 0; w.indexOf(v + "/") !== 0; ) {
      var P = v.lastIndexOf("/");
      if (P < 0 || (v = v.slice(0, P), v.match(/^([^\/]+:\/)?\/*$/)))
        return w;
      ++T;
    }
    return Array(T + 1).join("../") + w.substr(v.length + 1);
  }
  e.relative = u;
  var c = function() {
    var v = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in v);
  }();
  function h(v) {
    return v;
  }
  function p(v) {
    return g(v) ? "$" + v : v;
  }
  e.toSetString = c ? h : p;
  function f(v) {
    return g(v) ? v.slice(1) : v;
  }
  e.fromSetString = c ? h : f;
  function g(v) {
    if (!v)
      return false;
    var w = v.length;
    if (w < 9 || v.charCodeAt(w - 1) !== 95 || v.charCodeAt(w - 2) !== 95 || v.charCodeAt(w - 3) !== 111 || v.charCodeAt(w - 4) !== 116 || v.charCodeAt(w - 5) !== 111 || v.charCodeAt(w - 6) !== 114 || v.charCodeAt(w - 7) !== 112 || v.charCodeAt(w - 8) !== 95 || v.charCodeAt(w - 9) !== 95)
      return false;
    for (var T = w - 10; T >= 0; T--)
      if (v.charCodeAt(T) !== 36)
        return false;
    return true;
  }
  function d(v, w, T) {
    var P = y(v.source, w.source);
    return P !== 0 || (P = v.originalLine - w.originalLine, P !== 0) || (P = v.originalColumn - w.originalColumn, P !== 0 || T) || (P = v.generatedColumn - w.generatedColumn, P !== 0) || (P = v.generatedLine - w.generatedLine, P !== 0) ? P : y(v.name, w.name);
  }
  e.compareByOriginalPositions = d;
  function m(v, w, T) {
    var P = v.generatedLine - w.generatedLine;
    return P !== 0 || (P = v.generatedColumn - w.generatedColumn, P !== 0 || T) || (P = y(v.source, w.source), P !== 0) || (P = v.originalLine - w.originalLine, P !== 0) || (P = v.originalColumn - w.originalColumn, P !== 0) ? P : y(v.name, w.name);
  }
  e.compareByGeneratedPositionsDeflated = m;
  function y(v, w) {
    return v === w ? 0 : v === null ? 1 : w === null ? -1 : v > w ? 1 : -1;
  }
  function x(v, w) {
    var T = v.generatedLine - w.generatedLine;
    return T !== 0 || (T = v.generatedColumn - w.generatedColumn, T !== 0) || (T = y(v.source, w.source), T !== 0) || (T = v.originalLine - w.originalLine, T !== 0) || (T = v.originalColumn - w.originalColumn, T !== 0) ? T : y(v.name, w.name);
  }
  e.compareByGeneratedPositionsInflated = x;
  function E(v) {
    return JSON.parse(v.replace(/^\)]}'[^\n]*\n/, ""));
  }
  e.parseSourceMapInput = E;
  function C(v, w, T) {
    if (w = w || "", v && (v[v.length - 1] !== "/" && w[0] !== "/" && (v += "/"), w = v + w), T) {
      var P = n(T);
      if (!P)
        throw new Error("sourceMapURL could not be parsed");
      if (P.path) {
        var b = P.path.lastIndexOf("/");
        b >= 0 && (P.path = P.path.substring(0, b + 1));
      }
      w = l(a(P), w);
    }
    return o(w);
  }
  e.computeSourceURL = C;
});
var Yl = Object.prototype.hasOwnProperty;
var kr = typeof Map < "u";
function Xt() {
  this._array = [], this._set = kr ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
Xt.fromArray = function(e, t) {
  for (var r = new Xt(), i = 0, n = e.length; i < n; i++)
    r.add(e[i], t);
  return r;
};
Xt.prototype.size = function() {
  return kr ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
Xt.prototype.add = function(e, t) {
  var r = kr ? e : U.toSetString(e), i = kr ? this.has(e) : Yl.call(this._set, r), n = this._array.length;
  (!i || t) && this._array.push(e), i || (kr ? this._set.set(e, n) : this._set[r] = n);
};
Xt.prototype.has = function(e) {
  if (kr)
    return this._set.has(e);
  var t = U.toSetString(e);
  return Yl.call(this._set, t);
};
Xt.prototype.indexOf = function(e) {
  if (kr) {
    var t = this._set.get(e);
    if (t >= 0)
      return t;
  } else {
    var r = U.toSetString(e);
    if (Yl.call(this._set, r))
      return this._set[r];
  }
  throw new Error('"' + e + '" is not in the set.');
};
Xt.prototype.at = function(e) {
  if (e >= 0 && e < this._array.length)
    return this._array[e];
  throw new Error("No element indexed by " + e);
};
Xt.prototype.toArray = function() {
  return this._array.slice();
};
var M0 = Xt;
var $p = {
  ArraySet: M0
};
function D0(s3, e) {
  var t = s3.generatedLine, r = e.generatedLine, i = s3.generatedColumn, n = e.generatedColumn;
  return r > t || r == t && n >= i || U.compareByGeneratedPositionsInflated(s3, e) <= 0;
}
function da() {
  this._array = [], this._sorted = true, this._last = { generatedLine: -1, generatedColumn: 0 };
}
da.prototype.unsortedForEach = function(e, t) {
  this._array.forEach(e, t);
};
da.prototype.add = function(e) {
  D0(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = false, this._array.push(e));
};
da.prototype.toArray = function() {
  return this._sorted || (this._array.sort(U.compareByGeneratedPositionsInflated), this._sorted = true), this._array;
};
var R0 = da;
var F0 = {
  MappingList: R0
};
var kn = $p.ArraySet;
var B0 = F0.MappingList;
function yt(s3) {
  s3 || (s3 = {}), this._file = U.getArg(s3, "file", null), this._sourceRoot = U.getArg(s3, "sourceRoot", null), this._skipValidation = U.getArg(s3, "skipValidation", false), this._sources = new kn(), this._names = new kn(), this._mappings = new B0(), this._sourcesContents = null;
}
yt.prototype._version = 3;
yt.fromSourceMap = function(e) {
  var t = e.sourceRoot, r = new yt({
    file: e.file,
    sourceRoot: t
  });
  return e.eachMapping(function(i) {
    var n = {
      generated: {
        line: i.generatedLine,
        column: i.generatedColumn
      }
    };
    i.source != null && (n.source = i.source, t != null && (n.source = U.relative(t, n.source)), n.original = {
      line: i.originalLine,
      column: i.originalColumn
    }, i.name != null && (n.name = i.name)), r.addMapping(n);
  }), e.sources.forEach(function(i) {
    var n = i;
    t !== null && (n = U.relative(t, i)), r._sources.has(n) || r._sources.add(n);
    var a = e.sourceContentFor(i);
    a != null && r.setSourceContent(i, a);
  }), r;
};
yt.prototype.addMapping = function(e) {
  var t = U.getArg(e, "generated"), r = U.getArg(e, "original", null), i = U.getArg(e, "source", null), n = U.getArg(e, "name", null);
  this._skipValidation || this._validateMapping(t, r, i, n), i != null && (i = String(i), this._sources.has(i) || this._sources.add(i)), n != null && (n = String(n), this._names.has(n) || this._names.add(n)), this._mappings.add({
    generatedLine: t.line,
    generatedColumn: t.column,
    originalLine: r != null && r.line,
    originalColumn: r != null && r.column,
    source: i,
    name: n
  });
};
yt.prototype.setSourceContent = function(e, t) {
  var r = e;
  this._sourceRoot != null && (r = U.relative(this._sourceRoot, r)), t != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[U.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[U.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
};
yt.prototype.applySourceMap = function(e, t, r) {
  var i = t;
  if (t == null) {
    if (e.file == null)
      throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
    i = e.file;
  }
  var n = this._sourceRoot;
  n != null && (i = U.relative(n, i));
  var a = new kn(), o = new kn();
  this._mappings.unsortedForEach(function(l) {
    if (l.source === i && l.originalLine != null) {
      var u = e.originalPositionFor({
        line: l.originalLine,
        column: l.originalColumn
      });
      u.source != null && (l.source = u.source, r != null && (l.source = U.join(r, l.source)), n != null && (l.source = U.relative(n, l.source)), l.originalLine = u.line, l.originalColumn = u.column, u.name != null && (l.name = u.name));
    }
    var c = l.source;
    c != null && !a.has(c) && a.add(c);
    var h = l.name;
    h != null && !o.has(h) && o.add(h);
  }, this), this._sources = a, this._names = o, e.sources.forEach(function(l) {
    var u = e.sourceContentFor(l);
    u != null && (r != null && (l = U.join(r, l)), n != null && (l = U.relative(n, l)), this.setSourceContent(l, u));
  }, this);
};
yt.prototype._validateMapping = function(e, t, r, i) {
  if (t && typeof t.line != "number" && typeof t.column != "number")
    throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
  if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !t && !r && !i)) {
    if (e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)
      return;
    throw new Error("Invalid mapping: " + JSON.stringify({
      generated: e,
      source: r,
      original: t,
      name: i
    }));
  }
};
yt.prototype._serializeMappings = function() {
  for (var e = 0, t = 1, r = 0, i = 0, n = 0, a = 0, o = "", l, u, c, h, p = this._mappings.toArray(), f = 0, g = p.length; f < g; f++) {
    if (u = p[f], l = "", u.generatedLine !== t)
      for (e = 0; u.generatedLine !== t; )
        l += ";", t++;
    else if (f > 0) {
      if (!U.compareByGeneratedPositionsInflated(u, p[f - 1]))
        continue;
      l += ",";
    }
    l += Wr.encode(u.generatedColumn - e), e = u.generatedColumn, u.source != null && (h = this._sources.indexOf(u.source), l += Wr.encode(h - a), a = h, l += Wr.encode(u.originalLine - 1 - i), i = u.originalLine - 1, l += Wr.encode(u.originalColumn - r), r = u.originalColumn, u.name != null && (c = this._names.indexOf(u.name), l += Wr.encode(c - n), n = c)), o += l;
  }
  return o;
};
yt.prototype._generateSourcesContent = function(e, t) {
  return e.map(function(r) {
    if (!this._sourcesContents)
      return null;
    t != null && (r = U.relative(t, r));
    var i = U.toSetString(r);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, i) ? this._sourcesContents[i] : null;
  }, this);
};
yt.prototype.toJSON = function() {
  var e = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
};
yt.prototype.toString = function() {
  return JSON.stringify(this.toJSON());
};
var $0 = yt;
var Up = {
  SourceMapGenerator: $0
};
var Jl = we(function(s3, e) {
  e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
  function t(r, i, n, a, o, l) {
    var u = Math.floor((i - r) / 2) + r, c = o(n, a[u], true);
    return c === 0 ? u : c > 0 ? i - u > 1 ? t(u, i, n, a, o, l) : l == e.LEAST_UPPER_BOUND ? i < a.length ? i : -1 : u : u - r > 1 ? t(r, u, n, a, o, l) : l == e.LEAST_UPPER_BOUND ? u : r < 0 ? -1 : r;
  }
  e.search = function(i, n, a, o) {
    if (n.length === 0)
      return -1;
    var l = t(-1, n.length, i, n, a, o || e.GREATEST_LOWER_BOUND);
    if (l < 0)
      return -1;
    for (; l - 1 >= 0 && a(n[l], n[l - 1], true) === 0; )
      --l;
    return l;
  };
});
function Ja(s3, e, t) {
  var r = s3[e];
  s3[e] = s3[t], s3[t] = r;
}
function U0(s3, e) {
  return Math.round(s3 + Math.random() * (e - s3));
}
function ko(s3, e, t, r) {
  if (t < r) {
    var i = U0(t, r), n = t - 1;
    Ja(s3, i, r);
    for (var a = s3[r], o = t; o < r; o++)
      e(s3[o], a) <= 0 && (n += 1, Ja(s3, n, o));
    Ja(s3, n + 1, o);
    var l = n + 1;
    ko(s3, e, t, l - 1), ko(s3, e, l + 1, r);
  }
}
var j0 = function(s3, e) {
  ko(s3, e, 0, s3.length - 1);
};
var q0 = {
  quickSort: j0
};
var ds = $p.ArraySet;
var gi = q0.quickSort;
function Ie(s3, e) {
  var t = s3;
  return typeof s3 == "string" && (t = U.parseSourceMapInput(s3)), t.sections != null ? new Tt(t, e) : new qe(t, e);
}
Ie.fromSourceMap = function(s3, e) {
  return qe.fromSourceMap(s3, e);
};
Ie.prototype._version = 3;
Ie.prototype.__generatedMappings = null;
Object.defineProperty(Ie.prototype, "_generatedMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
  }
});
Ie.prototype.__originalMappings = null;
Object.defineProperty(Ie.prototype, "_originalMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
  }
});
Ie.prototype._charIsMappingSeparator = function(e, t) {
  var r = e.charAt(t);
  return r === ";" || r === ",";
};
Ie.prototype._parseMappings = function(e, t) {
  throw new Error("Subclasses must implement _parseMappings");
};
Ie.GENERATED_ORDER = 1;
Ie.ORIGINAL_ORDER = 2;
Ie.GREATEST_LOWER_BOUND = 1;
Ie.LEAST_UPPER_BOUND = 2;
Ie.prototype.eachMapping = function(e, t, r) {
  var i = t || null, n = r || Ie.GENERATED_ORDER, a;
  switch (n) {
    case Ie.GENERATED_ORDER:
      a = this._generatedMappings;
      break;
    case Ie.ORIGINAL_ORDER:
      a = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var o = this.sourceRoot;
  a.map(function(l) {
    var u = l.source === null ? null : this._sources.at(l.source);
    return u = U.computeSourceURL(o, u, this._sourceMapURL), {
      source: u,
      generatedLine: l.generatedLine,
      generatedColumn: l.generatedColumn,
      originalLine: l.originalLine,
      originalColumn: l.originalColumn,
      name: l.name === null ? null : this._names.at(l.name)
    };
  }, this).forEach(e, i);
};
Ie.prototype.allGeneratedPositionsFor = function(e) {
  var t = U.getArg(e, "line"), r = {
    source: U.getArg(e, "source"),
    originalLine: t,
    originalColumn: U.getArg(e, "column", 0)
  };
  if (r.source = this._findSourceIndex(r.source), r.source < 0)
    return [];
  var i = [], n = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", U.compareByOriginalPositions, Jl.LEAST_UPPER_BOUND);
  if (n >= 0) {
    var a = this._originalMappings[n];
    if (e.column === void 0)
      for (var o = a.originalLine; a && a.originalLine === o; )
        i.push({
          line: U.getArg(a, "generatedLine", null),
          column: U.getArg(a, "generatedColumn", null),
          lastColumn: U.getArg(a, "lastGeneratedColumn", null)
        }), a = this._originalMappings[++n];
    else
      for (var l = a.originalColumn; a && a.originalLine === t && a.originalColumn == l; )
        i.push({
          line: U.getArg(a, "generatedLine", null),
          column: U.getArg(a, "generatedColumn", null),
          lastColumn: U.getArg(a, "lastGeneratedColumn", null)
        }), a = this._originalMappings[++n];
  }
  return i;
};
var V0 = Ie;
function qe(s3, e) {
  var t = s3;
  typeof s3 == "string" && (t = U.parseSourceMapInput(s3));
  var r = U.getArg(t, "version"), i = U.getArg(t, "sources"), n = U.getArg(t, "names", []), a = U.getArg(t, "sourceRoot", null), o = U.getArg(t, "sourcesContent", null), l = U.getArg(t, "mappings"), u = U.getArg(t, "file", null);
  if (r != this._version)
    throw new Error("Unsupported version: " + r);
  a && (a = U.normalize(a)), i = i.map(String).map(U.normalize).map(function(c) {
    return a && U.isAbsolute(a) && U.isAbsolute(c) ? U.relative(a, c) : c;
  }), this._names = ds.fromArray(n.map(String), true), this._sources = ds.fromArray(i, true), this._absoluteSources = this._sources.toArray().map(function(c) {
    return U.computeSourceURL(a, c, e);
  }), this.sourceRoot = a, this.sourcesContent = o, this._mappings = l, this._sourceMapURL = e, this.file = u;
}
qe.prototype = Object.create(Ie.prototype);
qe.prototype.consumer = Ie;
qe.prototype._findSourceIndex = function(s3) {
  var e = s3;
  if (this.sourceRoot != null && (e = U.relative(this.sourceRoot, e)), this._sources.has(e))
    return this._sources.indexOf(e);
  var t;
  for (t = 0; t < this._absoluteSources.length; ++t)
    if (this._absoluteSources[t] == s3)
      return t;
  return -1;
};
qe.fromSourceMap = function(e, t) {
  var r = Object.create(qe.prototype), i = r._names = ds.fromArray(e._names.toArray(), true), n = r._sources = ds.fromArray(e._sources.toArray(), true);
  r.sourceRoot = e._sourceRoot, r.sourcesContent = e._generateSourcesContent(r._sources.toArray(), r.sourceRoot), r.file = e._file, r._sourceMapURL = t, r._absoluteSources = r._sources.toArray().map(function(f) {
    return U.computeSourceURL(r.sourceRoot, f, t);
  });
  for (var a = e._mappings.toArray().slice(), o = r.__generatedMappings = [], l = r.__originalMappings = [], u = 0, c = a.length; u < c; u++) {
    var h = a[u], p = new jp();
    p.generatedLine = h.generatedLine, p.generatedColumn = h.generatedColumn, h.source && (p.source = n.indexOf(h.source), p.originalLine = h.originalLine, p.originalColumn = h.originalColumn, h.name && (p.name = i.indexOf(h.name)), l.push(p)), o.push(p);
  }
  return gi(r.__originalMappings, U.compareByOriginalPositions), r;
};
qe.prototype._version = 3;
Object.defineProperty(qe.prototype, "sources", {
  get: function() {
    return this._absoluteSources.slice();
  }
});
function jp() {
  this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
}
qe.prototype._parseMappings = function(e, t) {
  for (var r = 1, i = 0, n = 0, a = 0, o = 0, l = 0, u = e.length, c = 0, h = {}, p = {}, f = [], g = [], d, m, y, x, E; c < u; )
    if (e.charAt(c) === ";")
      r++, c++, i = 0;
    else if (e.charAt(c) === ",")
      c++;
    else {
      for (d = new jp(), d.generatedLine = r, x = c; x < u && !this._charIsMappingSeparator(e, x); x++)
        ;
      if (m = e.slice(c, x), y = h[m], y)
        c += m.length;
      else {
        for (y = []; c < x; )
          Wr.decode(e, c, p), E = p.value, c = p.rest, y.push(E);
        if (y.length === 2)
          throw new Error("Found a source, but no line and column");
        if (y.length === 3)
          throw new Error("Found a source and line, but no column");
        h[m] = y;
      }
      d.generatedColumn = i + y[0], i = d.generatedColumn, y.length > 1 && (d.source = o + y[1], o += y[1], d.originalLine = n + y[2], n = d.originalLine, d.originalLine += 1, d.originalColumn = a + y[3], a = d.originalColumn, y.length > 4 && (d.name = l + y[4], l += y[4])), g.push(d), typeof d.originalLine == "number" && f.push(d);
    }
  gi(g, U.compareByGeneratedPositionsDeflated), this.__generatedMappings = g, gi(f, U.compareByOriginalPositions), this.__originalMappings = f;
};
qe.prototype._findMapping = function(e, t, r, i, n, a) {
  if (e[r] <= 0)
    throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
  if (e[i] < 0)
    throw new TypeError("Column must be greater than or equal to 0, got " + e[i]);
  return Jl.search(e, t, n, a);
};
qe.prototype.computeColumnSpans = function() {
  for (var e = 0; e < this._generatedMappings.length; ++e) {
    var t = this._generatedMappings[e];
    if (e + 1 < this._generatedMappings.length) {
      var r = this._generatedMappings[e + 1];
      if (t.generatedLine === r.generatedLine) {
        t.lastGeneratedColumn = r.generatedColumn - 1;
        continue;
      }
    }
    t.lastGeneratedColumn = 1 / 0;
  }
};
qe.prototype.originalPositionFor = function(e) {
  var t = {
    generatedLine: U.getArg(e, "line"),
    generatedColumn: U.getArg(e, "column")
  }, r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", U.compareByGeneratedPositionsDeflated, U.getArg(e, "bias", Ie.GREATEST_LOWER_BOUND));
  if (r >= 0) {
    var i = this._generatedMappings[r];
    if (i.generatedLine === t.generatedLine) {
      var n = U.getArg(i, "source", null);
      n !== null && (n = this._sources.at(n), n = U.computeSourceURL(this.sourceRoot, n, this._sourceMapURL));
      var a = U.getArg(i, "name", null);
      return a !== null && (a = this._names.at(a)), {
        source: n,
        line: U.getArg(i, "originalLine", null),
        column: U.getArg(i, "originalColumn", null),
        name: a
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
qe.prototype.hasContentsOfAllSources = function() {
  return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
    return e == null;
  }) : false;
};
qe.prototype.sourceContentFor = function(e, t) {
  if (!this.sourcesContent)
    return null;
  var r = this._findSourceIndex(e);
  if (r >= 0)
    return this.sourcesContent[r];
  var i = e;
  this.sourceRoot != null && (i = U.relative(this.sourceRoot, i));
  var n;
  if (this.sourceRoot != null && (n = U.urlParse(this.sourceRoot))) {
    var a = i.replace(/^file:\/\//, "");
    if (n.scheme == "file" && this._sources.has(a))
      return this.sourcesContent[this._sources.indexOf(a)];
    if ((!n.path || n.path == "/") && this._sources.has("/" + i))
      return this.sourcesContent[this._sources.indexOf("/" + i)];
  }
  if (t)
    return null;
  throw new Error('"' + i + '" is not in the SourceMap.');
};
qe.prototype.generatedPositionFor = function(e) {
  var t = U.getArg(e, "source");
  if (t = this._findSourceIndex(t), t < 0)
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  var r = {
    source: t,
    originalLine: U.getArg(e, "line"),
    originalColumn: U.getArg(e, "column")
  }, i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", U.compareByOriginalPositions, U.getArg(e, "bias", Ie.GREATEST_LOWER_BOUND));
  if (i >= 0) {
    var n = this._originalMappings[i];
    if (n.source === r.source)
      return {
        line: U.getArg(n, "generatedLine", null),
        column: U.getArg(n, "generatedColumn", null),
        lastColumn: U.getArg(n, "lastGeneratedColumn", null)
      };
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
var z0 = qe;
function Tt(s3, e) {
  var t = s3;
  typeof s3 == "string" && (t = U.parseSourceMapInput(s3));
  var r = U.getArg(t, "version"), i = U.getArg(t, "sections");
  if (r != this._version)
    throw new Error("Unsupported version: " + r);
  this._sources = new ds(), this._names = new ds();
  var n = {
    line: -1,
    column: 0
  };
  this._sections = i.map(function(a) {
    if (a.url)
      throw new Error("Support for url field in sections not implemented.");
    var o = U.getArg(a, "offset"), l = U.getArg(o, "line"), u = U.getArg(o, "column");
    if (l < n.line || l === n.line && u < n.column)
      throw new Error("Section offsets must be ordered and non-overlapping.");
    return n = o, {
      generatedOffset: {
        generatedLine: l + 1,
        generatedColumn: u + 1
      },
      consumer: new Ie(U.getArg(a, "map"), e)
    };
  });
}
Tt.prototype = Object.create(Ie.prototype);
Tt.prototype.constructor = Ie;
Tt.prototype._version = 3;
Object.defineProperty(Tt.prototype, "sources", {
  get: function() {
    for (var s3 = [], e = 0; e < this._sections.length; e++)
      for (var t = 0; t < this._sections[e].consumer.sources.length; t++)
        s3.push(this._sections[e].consumer.sources[t]);
    return s3;
  }
});
Tt.prototype.originalPositionFor = function(e) {
  var t = {
    generatedLine: U.getArg(e, "line"),
    generatedColumn: U.getArg(e, "column")
  }, r = Jl.search(t, this._sections, function(n, a) {
    var o = n.generatedLine - a.generatedOffset.generatedLine;
    return o || n.generatedColumn - a.generatedOffset.generatedColumn;
  }), i = this._sections[r];
  return i ? i.consumer.originalPositionFor({
    line: t.generatedLine - (i.generatedOffset.generatedLine - 1),
    column: t.generatedColumn - (i.generatedOffset.generatedLine === t.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
    bias: e.bias
  }) : {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
Tt.prototype.hasContentsOfAllSources = function() {
  return this._sections.every(function(e) {
    return e.consumer.hasContentsOfAllSources();
  });
};
Tt.prototype.sourceContentFor = function(e, t) {
  for (var r = 0; r < this._sections.length; r++) {
    var i = this._sections[r], n = i.consumer.sourceContentFor(e, true);
    if (n)
      return n;
  }
  if (t)
    return null;
  throw new Error('"' + e + '" is not in the SourceMap.');
};
Tt.prototype.generatedPositionFor = function(e) {
  for (var t = 0; t < this._sections.length; t++) {
    var r = this._sections[t];
    if (r.consumer._findSourceIndex(U.getArg(e, "source")) !== -1) {
      var i = r.consumer.generatedPositionFor(e);
      if (i) {
        var n = {
          line: i.line + (r.generatedOffset.generatedLine - 1),
          column: i.column + (r.generatedOffset.generatedLine === i.line ? r.generatedOffset.generatedColumn - 1 : 0)
        };
        return n;
      }
    }
  }
  return {
    line: null,
    column: null
  };
};
Tt.prototype._parseMappings = function(e, t) {
  this.__generatedMappings = [], this.__originalMappings = [];
  for (var r = 0; r < this._sections.length; r++)
    for (var i = this._sections[r], n = i.consumer._generatedMappings, a = 0; a < n.length; a++) {
      var o = n[a], l = i.consumer._sources.at(o.source);
      l = U.computeSourceURL(i.consumer.sourceRoot, l, this._sourceMapURL), this._sources.add(l), l = this._sources.indexOf(l);
      var u = null;
      o.name && (u = i.consumer._names.at(o.name), this._names.add(u), u = this._names.indexOf(u));
      var c = {
        source: l,
        generatedLine: o.generatedLine + (i.generatedOffset.generatedLine - 1),
        generatedColumn: o.generatedColumn + (i.generatedOffset.generatedLine === o.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
        originalLine: o.originalLine,
        originalColumn: o.originalColumn,
        name: u
      };
      this.__generatedMappings.push(c), typeof c.originalLine == "number" && this.__originalMappings.push(c);
    }
  gi(this.__generatedMappings, U.compareByGeneratedPositionsDeflated), gi(this.__originalMappings, U.compareByOriginalPositions);
};
var G0 = Tt;
var W0 = {
  SourceMapConsumer: V0,
  BasicSourceMapConsumer: z0,
  IndexedSourceMapConsumer: G0
};
var H0 = Up.SourceMapGenerator;
var K0 = /(\r?\n)/;
var Y0 = 10;
var As = "$$$isSourceNode$$$";
function pt(s3, e, t, r, i) {
  this.children = [], this.sourceContents = {}, this.line = s3 == null ? null : s3, this.column = e == null ? null : e, this.source = t == null ? null : t, this.name = i == null ? null : i, this[As] = true, r != null && this.add(r);
}
pt.fromStringWithSourceMap = function(e, t, r) {
  var i = new pt(), n = e.split(K0), a = 0, o = function() {
    var p = g(), f = g() || "";
    return p + f;
    function g() {
      return a < n.length ? n[a++] : void 0;
    }
  }, l = 1, u = 0, c = null;
  return t.eachMapping(function(p) {
    if (c !== null)
      if (l < p.generatedLine)
        h(c, o()), l++, u = 0;
      else {
        var f = n[a] || "", g = f.substr(0, p.generatedColumn - u);
        n[a] = f.substr(p.generatedColumn - u), u = p.generatedColumn, h(c, g), c = p;
        return;
      }
    for (; l < p.generatedLine; )
      i.add(o()), l++;
    if (u < p.generatedColumn) {
      var f = n[a] || "";
      i.add(f.substr(0, p.generatedColumn)), n[a] = f.substr(p.generatedColumn), u = p.generatedColumn;
    }
    c = p;
  }, this), a < n.length && (c && h(c, o()), i.add(n.splice(a).join(""))), t.sources.forEach(function(p) {
    var f = t.sourceContentFor(p);
    f != null && (r != null && (p = U.join(r, p)), i.setSourceContent(p, f));
  }), i;
  function h(p, f) {
    if (p === null || p.source === void 0)
      i.add(f);
    else {
      var g = r ? U.join(r, p.source) : p.source;
      i.add(new pt(p.originalLine, p.originalColumn, g, f, p.name));
    }
  }
};
pt.prototype.add = function(e) {
  if (Array.isArray(e))
    e.forEach(function(t) {
      this.add(t);
    }, this);
  else if (e[As] || typeof e == "string")
    e && this.children.push(e);
  else
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
  return this;
};
pt.prototype.prepend = function(e) {
  if (Array.isArray(e))
    for (var t = e.length - 1; t >= 0; t--)
      this.prepend(e[t]);
  else if (e[As] || typeof e == "string")
    this.children.unshift(e);
  else
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
  return this;
};
pt.prototype.walk = function(e) {
  for (var t, r = 0, i = this.children.length; r < i; r++)
    t = this.children[r], t[As] ? t.walk(e) : t !== "" && e(t, {
      source: this.source,
      line: this.line,
      column: this.column,
      name: this.name
    });
};
pt.prototype.join = function(e) {
  var t, r, i = this.children.length;
  if (i > 0) {
    for (t = [], r = 0; r < i - 1; r++)
      t.push(this.children[r]), t.push(e);
    t.push(this.children[r]), this.children = t;
  }
  return this;
};
pt.prototype.replaceRight = function(e, t) {
  var r = this.children[this.children.length - 1];
  return r[As] ? r.replaceRight(e, t) : typeof r == "string" ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this;
};
pt.prototype.setSourceContent = function(e, t) {
  this.sourceContents[U.toSetString(e)] = t;
};
pt.prototype.walkSourceContents = function(e) {
  for (var t = 0, r = this.children.length; t < r; t++)
    this.children[t][As] && this.children[t].walkSourceContents(e);
  for (var i = Object.keys(this.sourceContents), t = 0, r = i.length; t < r; t++)
    e(U.fromSetString(i[t]), this.sourceContents[i[t]]);
};
pt.prototype.toString = function() {
  var e = "";
  return this.walk(function(t) {
    e += t;
  }), e;
};
pt.prototype.toStringWithSourceMap = function(e) {
  var t = {
    code: "",
    line: 1,
    column: 0
  }, r = new H0(e), i = false, n = null, a = null, o = null, l = null;
  return this.walk(function(u, c) {
    t.code += u, c.source !== null && c.line !== null && c.column !== null ? ((n !== c.source || a !== c.line || o !== c.column || l !== c.name) && r.addMapping({
      source: c.source,
      original: {
        line: c.line,
        column: c.column
      },
      generated: {
        line: t.line,
        column: t.column
      },
      name: c.name
    }), n = c.source, a = c.line, o = c.column, l = c.name, i = true) : i && (r.addMapping({
      generated: {
        line: t.line,
        column: t.column
      }
    }), n = null, i = false);
    for (var h = 0, p = u.length; h < p; h++)
      u.charCodeAt(h) === Y0 ? (t.line++, t.column = 0, h + 1 === p ? (n = null, i = false) : i && r.addMapping({
        source: c.source,
        original: {
          line: c.line,
          column: c.column
        },
        generated: {
          line: t.line,
          column: t.column
        },
        name: c.name
      })) : t.column++;
  }), this.walkSourceContents(function(u, c) {
    r.setSourceContent(u, c);
  }), { code: t.code, map: r };
};
var J0 = pt;
var Q0 = {
  SourceNode: J0
};
var ma = Up.SourceMapGenerator;
var No = W0.SourceMapConsumer;
var X0 = Q0.SourceNode;
var qp = {
  SourceMapGenerator: ma,
  SourceMapConsumer: No,
  SourceNode: X0
};
var Ri = "/*#__PURE__*/";
var hn = (s3) => `${nt[s3]}: _${nt[s3]}`;
function Cc(s3, { mode: e = "function", prefixIdentifiers: t = e === "module", sourceMap: r = false, filename: i = "template.vue.html", scopeId: n = null, optimizeImports: a = false, runtimeGlobalName: o = "Vue", runtimeModuleName: l = "vue", ssrRuntimeModuleName: u = "vue/server-renderer", ssr: c = false, isTS: h = false, inSSR: p = false }) {
  const f = {
    mode: e,
    prefixIdentifiers: t,
    sourceMap: r,
    filename: i,
    scopeId: n,
    optimizeImports: a,
    runtimeGlobalName: o,
    runtimeModuleName: l,
    ssrRuntimeModuleName: u,
    ssr: c,
    isTS: h,
    inSSR: p,
    source: s3.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(m) {
      return `_${nt[m]}`;
    },
    push(m, y) {
      if (f.code += m, f.map) {
        if (y) {
          let x;
          if (y.type === 4 && !y.isStatic) {
            const E = y.content.replace(/^_ctx\./, "");
            E !== y.content && pr(E) && (x = E);
          }
          d(y.loc.start, x);
        }
        hs(f, m), y && y.loc !== Le && d(y.loc.end);
      }
    },
    indent() {
      g(++f.indentLevel);
    },
    deindent(m = false) {
      m ? --f.indentLevel : g(--f.indentLevel);
    },
    newline() {
      g(f.indentLevel);
    }
  };
  function g(m) {
    f.push(`
` + "  ".repeat(m));
  }
  function d(m, y) {
    f.map.addMapping({
      name: y,
      source: f.filename,
      original: {
        line: m.line,
        column: m.column - 1
      },
      generated: {
        line: f.line,
        column: f.column - 1
      }
    });
  }
  return r && (f.map = new ma(), f.map.setSourceContent(i, f.source)), f;
}
function Ql(s3, e = {}) {
  const t = Cc(s3, e);
  e.onContextCreated && e.onContextCreated(t);
  const { mode: r, push: i, prefixIdentifiers: n, indent: a, deindent: o, newline: l, scopeId: u, ssr: c } = t, h = s3.helpers.length > 0, p = !n && r !== "module", f = u != null && r === "module", g = !!e.inline, d = g ? Cc(s3, e) : t;
  r === "module" ? ev(s3, d, f, g) : Z0(s3, d);
  const m = c ? "ssrRender" : "render", y = c ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  e.bindingMetadata && !e.inline && y.push("$props", "$setup", "$data", "$options");
  const x = e.isTS ? y.map((E) => `${E}: any`).join(",") : y.join(", ");
  if (i(g ? `(${x}) => {` : `function ${m}(${x}) {`), a(), p && (i("with (_ctx) {"), a(), h && (i(`const { ${s3.helpers.map(hn).join(", ")} } = _Vue`), i(`
`), l())), s3.components.length && (_c(s3.components, "component", t), (s3.directives.length || s3.temps > 0) && l()), s3.directives.length && (_c(s3.directives, "directive", t), s3.temps > 0 && l()), s3.temps > 0) {
    i("let ");
    for (let E = 0; E < s3.temps; E++)
      i(`${E > 0 ? ", " : ""}_temp${E}`);
  }
  return (s3.components.length || s3.directives.length || s3.temps) && (i(`
`), l()), c || i("return "), s3.codegenNode ? Oe(s3.codegenNode, t) : i("null"), p && (o(), i("}")), o(), i("}"), {
    ast: s3,
    code: t.code,
    preamble: g ? d.code : "",
    map: t.map ? t.map.toJSON() : void 0
  };
}
function Z0(s3, e) {
  const { ssr: t, prefixIdentifiers: r, push: i, newline: n, runtimeModuleName: a, runtimeGlobalName: o, ssrRuntimeModuleName: l } = e, u = t ? `require(${JSON.stringify(a)})` : o;
  if (s3.helpers.length > 0) {
    if (r)
      i(`const { ${s3.helpers.map(hn).join(", ")} } = ${u}
`);
    else if (i(`const _Vue = ${u}
`), s3.hoists.length) {
      const c = [
        ki,
        Kn,
        ws,
        Yn,
        Jn
      ].filter((h) => s3.helpers.includes(h)).map(hn).join(", ");
      i(`const { ${c} } = _Vue
`);
    }
  }
  s3.ssrHelpers && s3.ssrHelpers.length && i(`const { ${s3.ssrHelpers.map(hn).join(", ")} } = require("${l}")
`), Vp(s3.hoists, e), n(), i("return ");
}
function ev(s3, e, t, r) {
  const { push: i, newline: n, optimizeImports: a, runtimeModuleName: o, ssrRuntimeModuleName: l } = e;
  t && s3.hoists.length && s3.helpers.push(sa, ia), s3.helpers.length && (a ? (i(`import { ${s3.helpers.map((u) => nt[u]).join(", ")} } from ${JSON.stringify(o)}
`), i(`
// Binding optimization for webpack code-split
const ${s3.helpers.map((u) => `_${nt[u]} = ${nt[u]}`).join(", ")}
`)) : i(`import { ${s3.helpers.map((u) => `${nt[u]} as _${nt[u]}`).join(", ")} } from ${JSON.stringify(o)}
`)), s3.ssrHelpers && s3.ssrHelpers.length && i(`import { ${s3.ssrHelpers.map((u) => `${nt[u]} as _${nt[u]}`).join(", ")} } from "${l}"
`), s3.imports.length && (tv(s3.imports, e), n()), Vp(s3.hoists, e), n(), r || i("export ");
}
function _c(s3, e, { helper: t, push: r, newline: i, isTS: n }) {
  const a = t(e === "component" ? oi : Qn);
  for (let o = 0; o < s3.length; o++) {
    let l = s3[o];
    const u = l.endsWith("__self");
    u && (l = l.slice(0, -6)), r(`const ${di(l, e)} = ${a}(${JSON.stringify(l)}${u ? ", true" : ""})${n ? "!" : ""}`), o < s3.length - 1 && i();
  }
}
function Vp(s3, e) {
  if (!s3.length)
    return;
  e.pure = true;
  const { push: t, newline: r, helper: i, scopeId: n, mode: a } = e, o = n != null && a !== "function";
  r(), o && (t(`const _withScopeId = n => (${i(sa)}("${n}"),n=n(),${i(ia)}(),n)`), r());
  for (let l = 0; l < s3.length; l++) {
    const u = s3[l];
    if (u) {
      const c = o && u.type === 13;
      t(`const _hoisted_${l + 1} = ${c ? `${Ri} _withScopeId(() => ` : ""}`), Oe(u, e), c && t(")"), r();
    }
  }
  e.pure = false;
}
function tv(s3, e) {
  !s3.length || s3.forEach((t) => {
    e.push("import "), Oe(t.exp, e), e.push(` from '${t.path}'`), e.newline();
  });
}
function rv(s3) {
  return be(s3) || s3.type === 4 || s3.type === 2 || s3.type === 5 || s3.type === 8;
}
function ga(s3, e) {
  const t = s3.length > 3 || s3.some((r) => rt(r) || !rv(r));
  e.push("["), t && e.indent(), Cs(s3, e, t), t && e.deindent(), e.push("]");
}
function Cs(s3, e, t = false, r = true) {
  const { push: i, newline: n } = e;
  for (let a = 0; a < s3.length; a++) {
    const o = s3[a];
    be(o) ? i(o) : rt(o) ? ga(o, e) : Oe(o, e), a < s3.length - 1 && (t ? (r && i(","), n()) : r && i(", "));
  }
}
function Oe(s3, e) {
  if (be(s3)) {
    e.push(s3);
    return;
  }
  if (bs(s3)) {
    e.push(e.helper(s3));
    return;
  }
  switch (s3.type) {
    case 1:
    case 9:
    case 11:
      Ao(s3.codegenNode != null, "Codegen node is missing for element/if/for node. Apply appropriate transforms first."), Oe(s3.codegenNode, e);
      break;
    case 2:
      sv(s3, e);
      break;
    case 4:
      zp(s3, e);
      break;
    case 5:
      iv(s3, e);
      break;
    case 12:
      Oe(s3.codegenNode, e);
      break;
    case 8:
      Gp(s3, e);
      break;
    case 3:
      av(s3, e);
      break;
    case 13:
      ov(s3, e);
      break;
    case 14:
      uv(s3, e);
      break;
    case 15:
      cv(s3, e);
      break;
    case 17:
      hv(s3, e);
      break;
    case 18:
      pv(s3, e);
      break;
    case 19:
      fv(s3, e);
      break;
    case 20:
      dv(s3, e);
      break;
    case 21:
      Cs(s3.body, e, true, false);
      break;
    case 22:
      mv(s3, e);
      break;
    case 23:
      Wp(s3, e);
      break;
    case 24:
      gv(s3, e);
      break;
    case 25:
      yv(s3, e);
      break;
    case 26:
      vv(s3, e);
      break;
    case 10:
      break;
    default:
      return Ao(false, `unhandled codegen node type: ${s3.type}`), s3;
  }
}
function sv(s3, e) {
  e.push(JSON.stringify(s3.content), s3);
}
function zp(s3, e) {
  const { content: t, isStatic: r } = s3;
  e.push(r ? JSON.stringify(t) : t, s3);
}
function iv(s3, e) {
  const { push: t, helper: r, pure: i } = e;
  i && t(Ri), t(`${r(Ni)}(`), Oe(s3.content, e), t(")");
}
function Gp(s3, e) {
  for (let t = 0; t < s3.children.length; t++) {
    const r = s3.children[t];
    be(r) ? e.push(r) : Oe(r, e);
  }
}
function nv(s3, e) {
  const { push: t } = e;
  if (s3.type === 8)
    t("["), Gp(s3, e), t("]");
  else if (s3.isStatic) {
    const r = pr(s3.content) ? s3.content : JSON.stringify(s3.content);
    t(r, s3);
  } else
    t(`[${s3.content}]`, s3);
}
function av(s3, e) {
  const { push: t, helper: r, pure: i } = e;
  i && t(Ri), t(`${r(ws)}(${JSON.stringify(s3.content)})`, s3);
}
function ov(s3, e) {
  const { push: t, helper: r, pure: i } = e, { tag: n, props: a, children: o, patchFlag: l, dynamicProps: u, directives: c, isBlock: h, disableTracking: p, isComponent: f } = s3;
  c && t(r(Xn) + "("), h && t(`(${r(ur)}(${p ? "true" : ""}), `), i && t(Ri);
  const g = h ? $r(e.inSSR, f) : Br(e.inSSR, f);
  t(r(g) + "(", s3), Cs(lv([n, a, o, l, u]), e), t(")"), h && t(")"), c && (t(", "), Oe(c, e), t(")"));
}
function lv(s3) {
  let e = s3.length;
  for (; e-- && s3[e] == null; )
    ;
  return s3.slice(0, e + 1).map((t) => t || "null");
}
function uv(s3, e) {
  const { push: t, helper: r, pure: i } = e, n = be(s3.callee) ? s3.callee : r(s3.callee);
  i && t(Ri), t(n + "(", s3), Cs(s3.arguments, e), t(")");
}
function cv(s3, e) {
  const { push: t, indent: r, deindent: i, newline: n } = e, { properties: a } = s3;
  if (!a.length) {
    t("{}", s3);
    return;
  }
  const o = a.length > 1 || a.some((l) => l.value.type !== 4);
  t(o ? "{" : "{ "), o && r();
  for (let l = 0; l < a.length; l++) {
    const { key: u, value: c } = a[l];
    nv(u, e), t(": "), Oe(c, e), l < a.length - 1 && (t(","), n());
  }
  o && i(), t(o ? "}" : " }");
}
function hv(s3, e) {
  ga(s3.elements, e);
}
function pv(s3, e) {
  const { push: t, indent: r, deindent: i } = e, { params: n, returns: a, body: o, newline: l, isSlot: u } = s3;
  u && t(`_${nt[na]}(`), t("(", s3), rt(n) ? Cs(n, e) : n && Oe(n, e), t(") => "), (l || o) && (t("{"), r()), a ? (l && t("return "), rt(a) ? ga(a, e) : Oe(a, e)) : o && Oe(o, e), (l || o) && (i(), t("}")), u && t(")");
}
function fv(s3, e) {
  const { test: t, consequent: r, alternate: i, newline: n } = s3, { push: a, indent: o, deindent: l, newline: u } = e;
  if (t.type === 4) {
    const h = !pr(t.content);
    h && a("("), zp(t, e), h && a(")");
  } else
    a("("), Oe(t, e), a(")");
  n && o(), e.indentLevel++, n || a(" "), a("? "), Oe(r, e), e.indentLevel--, n && u(), n || a(" "), a(": ");
  const c = i.type === 19;
  c || e.indentLevel++, Oe(i, e), c || e.indentLevel--, n && l(true);
}
function dv(s3, e) {
  const { push: t, helper: r, indent: i, deindent: n, newline: a } = e;
  t(`_cache[${s3.index}] || (`), s3.isVNode && (i(), t(`${r(li)}(-1),`), a()), t(`_cache[${s3.index}] = `), Oe(s3.value, e), s3.isVNode && (t(","), a(), t(`${r(li)}(1),`), a(), t(`_cache[${s3.index}]`), n()), t(")");
}
function mv(s3, e) {
  const { push: t, indent: r, deindent: i } = e;
  t("`");
  const n = s3.elements.length, a = n > 3;
  for (let o = 0; o < n; o++) {
    const l = s3.elements[o];
    be(l) ? t(l.replace(/(`|\$|\\)/g, "\\$1")) : (t("${"), a && r(), Oe(l, e), a && i(), t("}"));
  }
  t("`");
}
function Wp(s3, e) {
  const { push: t, indent: r, deindent: i } = e, { test: n, consequent: a, alternate: o } = s3;
  t("if ("), Oe(n, e), t(") {"), r(), Oe(a, e), i(), t("}"), o && (t(" else "), o.type === 23 ? Wp(o, e) : (t("{"), r(), Oe(o, e), i(), t("}")));
}
function gv(s3, e) {
  Oe(s3.left, e), e.push(" = "), Oe(s3.right, e);
}
function yv(s3, e) {
  e.push("("), Cs(s3.expressions, e), e.push(")");
}
function vv({ returns: s3 }, e) {
  e.push("return "), rt(s3) ? ga(s3, e) : Oe(s3, e);
}
var bv = class {
  constructor() {
    this.should_skip = false, this.should_remove = false, this.replacement = null, this.context = {
      skip: () => this.should_skip = true,
      remove: () => this.should_remove = true,
      replace: (e) => this.replacement = e
    };
  }
  replace(e, t, r, i) {
    e && (r !== null ? e[t][r] = i : e[t] = i);
  }
  remove(e, t, r) {
    e && (r !== null ? e[t].splice(r, 1) : delete e[t]);
  }
};
var Sv = class extends bv {
  constructor(e, t) {
    super(), this.enter = e, this.leave = t;
  }
  visit(e, t, r, i) {
    if (e) {
      if (this.enter) {
        const n = this.should_skip, a = this.should_remove, o = this.replacement;
        this.should_skip = false, this.should_remove = false, this.replacement = null, this.enter.call(this.context, e, t, r, i), this.replacement && (e = this.replacement, this.replace(t, r, i, e)), this.should_remove && this.remove(t, r, i);
        const l = this.should_skip, u = this.should_remove;
        if (this.should_skip = n, this.should_remove = a, this.replacement = o, l)
          return e;
        if (u)
          return null;
      }
      for (const n in e) {
        const a = e[n];
        if (typeof a == "object")
          if (Array.isArray(a))
            for (let o = 0; o < a.length; o += 1)
              a[o] !== null && typeof a[o].type == "string" && (this.visit(a[o], e, n, o) || o--);
          else
            a !== null && typeof a.type == "string" && this.visit(a, e, n, null);
      }
      if (this.leave) {
        const n = this.replacement, a = this.should_remove;
        this.replacement = null, this.should_remove = false, this.leave.call(this.context, e, t, r, i), this.replacement && (e = this.replacement, this.replace(t, r, i, e)), this.should_remove && this.remove(t, r, i);
        const o = this.should_remove;
        if (this.replacement = n, this.should_remove = a, o)
          return null;
      }
    }
    return e;
  }
};
function Xl(s3, { enter: e, leave: t }) {
  return new Sv(e, t).visit(s3, null);
}
function ya(s3, e, t = false, r = [], i = /* @__PURE__ */ Object.create(null)) {
  const n = s3.type === "Program" && s3.body[0].type === "ExpressionStatement" && s3.body[0].expression;
  Xl(s3, {
    enter(a, o) {
      if (o && r.push(o), o && o.type.startsWith("TS") && o.type !== "TSAsExpression" && o.type !== "TSNonNullExpression" && o.type !== "TSTypeAssertion")
        return this.skip();
      if (a.type === "Identifier") {
        const l = !!i[a.name], u = Zl(a, o, r);
        (t || u && !l) && e(a, o, r, u, l);
      } else
        a.type === "ObjectProperty" && o.type === "ObjectPattern" ? a.inPattern = true : Ar(a) ? eu(a, (l) => Ic(a, l, i)) : a.type === "BlockStatement" && Hp(a, (l) => Ic(a, l, i));
    },
    leave(a, o) {
      if (o && r.pop(), a !== n && a.scopeIds)
        for (const l of a.scopeIds)
          i[l]--, i[l] === 0 && delete i[l];
    }
  });
}
function Zl(s3, e, t) {
  if (!e)
    return true;
  if (s3.name === "arguments")
    return false;
  if (wv(s3, e))
    return true;
  switch (e.type) {
    case "AssignmentExpression":
    case "AssignmentPattern":
      return true;
    case "ObjectPattern":
    case "ArrayPattern":
      return va(e, t);
  }
  return false;
}
function va(s3, e) {
  if (s3 && (s3.type === "ObjectProperty" || s3.type === "ArrayPattern")) {
    let t = e.length;
    for (; t--; ) {
      const r = e[t];
      if (r.type === "AssignmentExpression")
        return true;
      if (r.type !== "ObjectProperty" && !r.type.endsWith("Pattern"))
        break;
    }
  }
  return false;
}
function eu(s3, e) {
  for (const t of s3.params)
    for (const r of jt(t))
      e(r);
}
function Hp(s3, e) {
  for (const t of s3.body)
    if (t.type === "VariableDeclaration") {
      if (t.declare)
        continue;
      for (const r of t.declarations)
        for (const i of jt(r.id))
          e(i);
    } else if (t.type === "FunctionDeclaration" || t.type === "ClassDeclaration") {
      if (t.declare || !t.id)
        continue;
      e(t.id);
    }
}
function jt(s3, e = []) {
  switch (s3.type) {
    case "Identifier":
      e.push(s3);
      break;
    case "MemberExpression":
      let t = s3;
      for (; t.type === "MemberExpression"; )
        t = t.object;
      e.push(t);
      break;
    case "ObjectPattern":
      for (const r of s3.properties)
        r.type === "RestElement" ? jt(r.argument, e) : jt(r.value, e);
      break;
    case "ArrayPattern":
      s3.elements.forEach((r) => {
        r && jt(r, e);
      });
      break;
    case "RestElement":
      jt(s3.argument, e);
      break;
    case "AssignmentPattern":
      jt(s3.left, e);
      break;
  }
  return e;
}
function Ic(s3, e, t) {
  const { name: r } = e;
  s3.scopeIds && s3.scopeIds.has(r) || (r in t ? t[r]++ : t[r] = 1, (s3.scopeIds || (s3.scopeIds = /* @__PURE__ */ new Set())).add(r));
}
var Ar = (s3) => /Function(?:Expression|Declaration)$|Method$/.test(s3.type);
var ba = (s3) => s3 && (s3.type === "ObjectProperty" || s3.type === "ObjectMethod") && !s3.computed;
var Kp = (s3, e) => ba(e) && e.key === s3;
function wv(s3, e, t) {
  switch (e.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      return e.property === s3 ? !!e.computed : e.object === s3;
    case "JSXMemberExpression":
      return e.object === s3;
    case "VariableDeclarator":
      return e.init === s3;
    case "ArrowFunctionExpression":
      return e.body === s3;
    case "PrivateName":
      return false;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      return e.key === s3 ? !!e.computed : false;
    case "ObjectProperty":
      return e.key === s3 ? !!e.computed : !t || t.type !== "ObjectPattern";
    case "ClassProperty":
      return e.key === s3 ? !!e.computed : true;
    case "ClassPrivateProperty":
      return e.key !== s3;
    case "ClassDeclaration":
    case "ClassExpression":
      return e.superClass === s3;
    case "AssignmentExpression":
      return e.right === s3;
    case "AssignmentPattern":
      return e.right === s3;
    case "LabeledStatement":
      return false;
    case "CatchClause":
      return false;
    case "RestElement":
      return false;
    case "BreakStatement":
    case "ContinueStatement":
      return false;
    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;
    case "ExportSpecifier":
      return t != null && t.source ? false : e.local === s3;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;
    case "ImportAttribute":
      return false;
    case "JSXAttribute":
      return false;
    case "ObjectPattern":
    case "ArrayPattern":
      return false;
    case "MetaProperty":
      return false;
    case "ObjectTypeProperty":
      return e.key !== s3;
    case "TSEnumMember":
      return e.id !== s3;
    case "TSPropertySignature":
      return e.key === s3 ? !!e.computed : true;
  }
  return true;
}
var Ev = Re("true,false,null,this");
var tu = (s3, e) => {
  if (s3.type === 5)
    s3.content = tt(s3.content, e);
  else if (s3.type === 1)
    for (let t = 0; t < s3.props.length; t++) {
      const r = s3.props[t];
      if (r.type === 7 && r.name !== "for") {
        const i = r.exp, n = r.arg;
        i && i.type === 4 && !(r.name === "on" && n) && (r.exp = tt(i, e, r.name === "slot")), n && n.type === 4 && !n.isStatic && (r.arg = tt(n, e));
      }
    }
};
function tt(s3, e, t = false, r = false, i = Object.create(e.identifiers)) {
  if (!e.prefixIdentifiers || !s3.content.trim())
    return s3;
  const { inline: n, bindingMetadata: a } = e, o = (y, x, E) => {
    const C = qh(a, y) && a[y];
    if (n) {
      const v = x && x.type === "AssignmentExpression" && x.left === E, w = x && x.type === "UpdateExpression" && x.argument === E, T = x && va(x, f);
      if (C === "setup-const" || C === "setup-reactive-const" || i[y])
        return y;
      if (C === "setup-ref")
        return `${y}.value`;
      if (C === "setup-maybe-ref")
        return v || w || T ? `${y}.value` : `${e.helperString(ls)}(${y})`;
      if (C === "setup-let")
        if (v) {
          const { right: P, operator: b } = x, S = l.slice(P.start - 1, P.end - 1), k = Yp(tt(G(S, false), e, false, false, g));
          return `${e.helperString(ui)}(${y})${e.isTS ? ` //@ts-ignore
` : ""} ? ${y}.value ${b} ${k} : ${y}`;
        } else if (w) {
          E.start = x.start, E.end = x.end;
          const { prefix: P, operator: b } = x, S = P ? b : "", k = P ? "" : b;
          return `${e.helperString(ui)}(${y})${e.isTS ? ` //@ts-ignore
` : ""} ? ${S}${y}.value${k} : ${S}${y}${k}`;
        } else
          return T ? y : `${e.helperString(ls)}(${y})`;
      else {
        if (C === "props")
          return vn(y);
        if (C === "props-aliased")
          return vn(a.__propsAliases[y]);
      }
    } else {
      if (C && C.startsWith("setup"))
        return `$setup.${y}`;
      if (C === "props-aliased")
        return `$props['${a.__propsAliases[y]}']`;
      if (C)
        return `$${C}.${y}`;
    }
    return `_ctx.${y}`;
  }, l = s3.content, u = l.indexOf("(") > -1 || l.indexOf(".") > 0;
  if (pr(l)) {
    const y = e.identifiers[l], x = Dh(l), E = Ev(l);
    return !t && !y && !x && !E ? (a[s3.content] === "setup-const" && (s3.constType = 1), s3.content = o(l)) : y || (E ? s3.constType = 3 : s3.constType = 2), s3;
  }
  let c;
  const h = r ? ` ${l} ` : `(${l})${t ? "=>{}" : ""}`;
  try {
    c = In(h, {
      plugins: e.expressionPlugins
    }).program;
  } catch (y) {
    return e.onError(Te(44, s3.loc, void 0, y.message)), s3;
  }
  const p = [], f = [], g = Object.create(e.identifiers);
  ya(c, (y, x, E, C, v) => {
    if (Kp(y, x))
      return;
    const w = C && xv(y);
    w && !v ? (ba(x) && x.shorthand && (y.prefix = `${y.name}: `), y.name = o(y.name, x, y), p.push(y)) : (!(w && v) && !u && (y.isConstant = true), p.push(y));
  }, true, f, g);
  const d = [];
  p.sort((y, x) => y.start - x.start), p.forEach((y, x) => {
    const E = y.start - 1, C = y.end - 1, v = p[x - 1], w = l.slice(v ? v.end - 1 : 0, E);
    (w.length || y.prefix) && d.push(w + (y.prefix || ""));
    const T = l.slice(E, C);
    d.push(G(y.name, false, {
      source: T,
      start: Fr(s3.loc.start, T, E),
      end: Fr(s3.loc.start, T, C)
    }, y.isConstant ? 3 : 0)), x === p.length - 1 && C < l.length && d.push(l.slice(C));
  });
  let m;
  return d.length ? m = je(d, s3.loc) : (m = s3, m.constType = u ? 0 : 3), m.identifiers = Object.keys(g), m;
}
function xv(s3) {
  return !(Dh(s3.name) || s3.name === "require");
}
function Yp(s3) {
  return be(s3) ? s3 : s3.type === 4 ? s3.content : s3.children.map(Yp).join("");
}
var Tv = Mi(/^(if|else|else-if)$/, (s3, e, t) => ru(s3, e, t, (r, i, n) => {
  const a = t.parent.children;
  let o = a.indexOf(r), l = 0;
  for (; o-- >= 0; ) {
    const u = a[o];
    u && u.type === 9 && (l += u.branches.length);
  }
  return () => {
    if (n)
      r.codegenNode = Nc(i, l, t);
    else {
      const u = Av(r.codegenNode);
      u.alternate = Nc(i, l + r.branches.length - 1, t);
    }
  };
}));
function ru(s3, e, t, r) {
  if (e.name !== "else" && (!e.exp || !e.exp.content.trim())) {
    const i = e.exp ? e.exp.loc : s3.loc;
    t.onError(Te(28, e.loc)), e.exp = G("true", false, i);
  }
  if (t.prefixIdentifiers && e.exp && (e.exp = tt(e.exp, t)), e.name === "if") {
    const i = kc(s3, e), n = {
      type: 9,
      loc: s3.loc,
      branches: [i]
    };
    if (t.replaceNode(n), r)
      return r(n, i, true);
  } else {
    const i = t.parent.children, n = [];
    let a = i.indexOf(s3);
    for (; a-- >= -1; ) {
      const o = i[a];
      if (o && o.type === 3) {
        t.removeNode(o), n.unshift(o);
        continue;
      }
      if (o && o.type === 2 && !o.content.trim().length) {
        t.removeNode(o);
        continue;
      }
      if (o && o.type === 9) {
        e.name === "else-if" && o.branches[o.branches.length - 1].condition === void 0 && t.onError(Te(30, s3.loc)), t.removeNode();
        const l = kc(s3, e);
        n.length && !(t.parent && t.parent.type === 1 && wt(t.parent.tag, "transition")) && (l.children = [...n, ...l.children]);
        {
          const c = l.userKey;
          c && o.branches.forEach(({ userKey: h }) => {
            Pv(h, c) && t.onError(Te(29, l.userKey.loc));
          });
        }
        o.branches.push(l);
        const u = r && r(o, l, false);
        Ps(l, t), u && u(), t.currentNode = null;
      } else
        t.onError(Te(30, s3.loc));
      break;
    }
  }
}
function kc(s3, e) {
  const t = s3.tagType === 3;
  return {
    type: 10,
    loc: s3.loc,
    condition: e.name === "else" ? void 0 : e.exp,
    children: t && !Be(s3, "for") ? s3.children : [s3],
    userKey: lt(s3, "key"),
    isTemplateIf: t
  };
}
function Nc(s3, e, t) {
  return s3.condition ? cr(s3.condition, Oc(s3, e, t), ae(t.helper(ws), [
    '"v-if"',
    "true"
  ])) : Oc(s3, e, t);
}
function Oc(s3, e, t) {
  const { helper: r } = t, i = Pe("key", G(`${e}`, false, Le, 2)), { children: n } = s3, a = n[0];
  if (n.length !== 1 || a.type !== 1)
    if (n.length === 1 && a.type === 11) {
      const l = a.codegenNode;
      return fi(l, i, t), l;
    } else {
      let l = 64, u = Lt[64];
      return !s3.isTemplateIf && n.filter((c) => c.type !== 3).length === 1 && (l |= 2048, u += `, ${Lt[2048]}`), us(t, r(ns), at([i]), n, l + ` /* ${u} */`, void 0, void 0, true, false, false, s3.loc);
    }
  else {
    const l = a.codegenNode, u = _p(l);
    return u.type === 13 && ca(u, t), fi(u, i, t), l;
  }
}
function Pv(s3, e) {
  if (!s3 || s3.type !== e.type)
    return false;
  if (s3.type === 6) {
    if (s3.value.content !== e.value.content)
      return false;
  } else {
    const t = s3.exp, r = e.exp;
    if (t.type !== r.type || t.type !== 4 || t.isStatic !== r.isStatic || t.content !== r.content)
      return false;
  }
  return true;
}
function Av(s3) {
  for (; ; )
    if (s3.type === 19)
      if (s3.alternate.type === 19)
        s3 = s3.alternate;
      else
        return s3;
    else
      s3.type === 20 && (s3 = s3.value);
}
var Cv = Mi("for", (s3, e, t) => {
  const { helper: r, removeHelper: i } = t;
  return su(s3, e, t, (n) => {
    const a = ae(r(Zn), [
      n.source
    ]), o = ps(s3), l = Be(s3, "memo"), u = lt(s3, "key"), c = u && (u.type === 6 ? G(u.value.content, true) : u.exp), h = u ? Pe("key", c) : null;
    o && (l && (l.exp = tt(l.exp, t)), h && u.type !== 6 && (h.value = tt(h.value, t)));
    const p = n.source.type === 4 && n.source.constType > 0, f = p ? 64 : u ? 128 : 256;
    return n.codegenNode = us(t, r(ns), void 0, a, f + ` /* ${Lt[f]} */`, void 0, void 0, true, !p, false, s3.loc), () => {
      let g;
      const { children: d } = n;
      o && s3.children.some((x) => {
        if (x.type === 1) {
          const E = lt(x, "key");
          if (E)
            return t.onError(Te(33, E.loc)), true;
        }
      });
      const m = d.length !== 1 || d[0].type !== 1, y = fs(s3) ? s3 : o && s3.children.length === 1 && fs(s3.children[0]) ? s3.children[0] : null;
      if (y ? (g = y.codegenNode, o && h && fi(g, h, t)) : m ? g = us(t, r(ns), h ? at([h]) : void 0, s3.children, `64 /* ${Lt[64]} */`, void 0, void 0, true, void 0, false) : (g = d[0].codegenNode, o && h && fi(g, h, t), g.isBlock !== !p && (g.isBlock ? (i(ur), i($r(t.inSSR, g.isComponent))) : i(Br(t.inSSR, g.isComponent))), g.isBlock = !p, g.isBlock ? (r(ur), r($r(t.inSSR, g.isComponent))) : r(Br(t.inSSR, g.isComponent))), l) {
        const x = dt(yi(n.parseResult, [
          G("_cached")
        ]));
        x.body = Oi([
          je(["const _memo = (", l.exp, ")"]),
          je([
            "if (_cached",
            ...c ? [" && _cached.key === ", c] : [],
            ` && ${t.helperString(wl)}(_cached, _memo)) return _cached`
          ]),
          je(["const _item = ", g]),
          G("_item.memo = _memo"),
          G("return _item")
        ]), a.arguments.push(x, G("_cache"), G(String(t.cached++)));
      } else
        a.arguments.push(dt(yi(n.parseResult), g, true));
    };
  });
});
function su(s3, e, t, r) {
  if (!e.exp) {
    t.onError(Te(31, e.loc));
    return;
  }
  const i = iu(e.exp, t);
  if (!i) {
    t.onError(Te(32, e.loc));
    return;
  }
  const { addIdentifiers: n, removeIdentifiers: a, scopes: o } = t, { source: l, value: u, key: c, index: h } = i, p = {
    type: 11,
    loc: e.loc,
    source: l,
    valueAlias: u,
    keyAlias: c,
    objectIndexAlias: h,
    parseResult: i,
    children: ps(s3) ? s3.children : [s3]
  };
  t.replaceNode(p), o.vFor++, t.prefixIdentifiers && (u && n(u), c && n(c), h && n(h));
  const f = r && r(p);
  return () => {
    o.vFor--, t.prefixIdentifiers && (u && a(u), c && a(c), h && a(h)), f && f();
  };
}
var _v = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var Lc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var Iv = /^\(|\)$/g;
function iu(s3, e) {
  const t = s3.loc, r = s3.content, i = r.match(_v);
  if (!i)
    return;
  const [, n, a] = i, o = {
    source: qi(t, a.trim(), r.indexOf(a, n.length)),
    value: void 0,
    key: void 0,
    index: void 0
  };
  e.prefixIdentifiers && (o.source = tt(o.source, e));
  let l = n.trim().replace(Iv, "").trim();
  const u = n.indexOf(l), c = l.match(Lc);
  if (c) {
    l = l.replace(Lc, "").trim();
    const h = c[1].trim();
    let p;
    if (h && (p = r.indexOf(h, u + l.length), o.key = qi(t, h, p), e.prefixIdentifiers && (o.key = tt(o.key, e, true))), c[2]) {
      const f = c[2].trim();
      f && (o.index = qi(t, f, r.indexOf(f, o.key ? p + h.length : u + l.length)), e.prefixIdentifiers && (o.index = tt(o.index, e, true)));
    }
  }
  return l && (o.value = qi(t, l, u), e.prefixIdentifiers && (o.value = tt(o.value, e, true))), o;
}
function qi(s3, e, t) {
  return G(e, false, Gl(s3, t, e.length));
}
function yi({ value: s3, key: e, index: t }, r = []) {
  return kv([s3, e, t, ...r]);
}
function kv(s3) {
  let e = s3.length;
  for (; e-- && !s3[e]; )
    ;
  return s3.slice(0, e + 1).map((t, r) => t || G("_".repeat(r + 1), false));
}
var Mc = G("undefined", false);
var nu = (s3, e) => {
  if (s3.type === 1 && (s3.tagType === 1 || s3.tagType === 3)) {
    const t = Be(s3, "slot");
    if (t) {
      const r = t.exp;
      return e.prefixIdentifiers && r && e.addIdentifiers(r), e.scopes.vSlot++, () => {
        e.prefixIdentifiers && r && e.removeIdentifiers(r), e.scopes.vSlot--;
      };
    }
  }
};
var au = (s3, e) => {
  let t;
  if (ps(s3) && s3.props.some(Wl) && (t = Be(s3, "for"))) {
    const r = t.parseResult = iu(t.exp, e);
    if (r) {
      const { value: i, key: n, index: a } = r, { addIdentifiers: o, removeIdentifiers: l } = e;
      return i && o(i), n && o(n), a && o(a), () => {
        i && l(i), n && l(n), a && l(a);
      };
    }
  }
};
var Nv = (s3, e, t) => dt(s3, e, false, true, e.length ? e[0].loc : t);
function vi(s3, e, t = Nv) {
  e.helper(na);
  const { children: r, loc: i } = s3, n = [], a = [];
  let o = e.scopes.vSlot > 0 || e.scopes.vFor > 0;
  !e.ssr && e.prefixIdentifiers && (o = it(s3, e.identifiers));
  const l = Be(s3, "slot", true);
  if (l) {
    const { arg: d, exp: m } = l;
    d && !Qe(d) && (o = true), n.push(Pe(d || G("default", true), t(m, r, i)));
  }
  let u = false, c = false;
  const h = [], p = /* @__PURE__ */ new Set();
  for (let d = 0; d < r.length; d++) {
    const m = r[d];
    let y;
    if (!ps(m) || !(y = Be(m, "slot", true))) {
      m.type !== 3 && h.push(m);
      continue;
    }
    if (l) {
      e.onError(Te(37, y.loc));
      break;
    }
    u = true;
    const { children: x, loc: E } = m, { arg: C = G("default", true), exp: v, loc: w } = y;
    let T;
    Qe(C) ? T = C ? C.content : "default" : o = true;
    const P = t(v, x, E);
    let b, S, k;
    if (b = Be(m, "if"))
      o = true, a.push(cr(b.exp, Vi(C, P), Mc));
    else if (S = Be(m, /^else(-if)?$/, true)) {
      let _ = d, Q;
      for (; _-- && (Q = r[_], Q.type === 3); )
        ;
      if (Q && ps(Q) && Be(Q, "if")) {
        r.splice(d, 1), d--;
        let K = a[a.length - 1];
        for (; K.alternate.type === 19; )
          K = K.alternate;
        K.alternate = S.exp ? cr(S.exp, Vi(C, P), Mc) : Vi(C, P);
      } else
        e.onError(Te(30, S.loc));
    } else if (k = Be(m, "for")) {
      o = true;
      const _ = k.parseResult || iu(k.exp, e);
      _ ? a.push(ae(e.helper(Zn), [
        _.source,
        dt(yi(_), Vi(C, P), true)
      ])) : e.onError(Te(32, k.loc));
    } else {
      if (T) {
        if (p.has(T)) {
          e.onError(Te(38, w));
          continue;
        }
        p.add(T), T === "default" && (c = true);
      }
      n.push(Pe(C, P));
    }
  }
  if (!l) {
    const d = (m, y) => {
      const x = t(m, y, i);
      return Pe("default", x);
    };
    u ? h.length && h.some((m) => Jp(m)) && (c ? e.onError(Te(39, h[0].loc)) : n.push(d(void 0, h))) : n.push(d(void 0, r));
  }
  const f = o ? 2 : pn(s3.children) ? 3 : 1;
  let g = at(n.concat(Pe("_", G(f + ` /* ${jm[f]} */`, false))), i);
  return a.length && (g = ae(e.helper(Sl), [
    g,
    Ur(a)
  ])), {
    slots: g,
    hasDynamicSlots: o
  };
}
function Vi(s3, e) {
  return at([
    Pe("name", s3),
    Pe("fn", e)
  ]);
}
function pn(s3) {
  for (let e = 0; e < s3.length; e++) {
    const t = s3[e];
    switch (t.type) {
      case 1:
        if (t.tagType === 2 || pn(t.children))
          return true;
        break;
      case 9:
        if (pn(t.branches))
          return true;
        break;
      case 10:
      case 11:
        if (pn(t.children))
          return true;
        break;
    }
  }
  return false;
}
function Jp(s3) {
  return s3.type !== 2 && s3.type !== 12 ? true : s3.type === 2 ? !!s3.content.trim() : Jp(s3.content);
}
var Qp = /* @__PURE__ */ new WeakMap();
var Xp = (s3, e) => function() {
  if (s3 = e.currentNode, !(s3.type === 1 && (s3.tagType === 0 || s3.tagType === 1)))
    return;
  const { tag: r, props: i } = s3, n = s3.tagType === 1;
  let a = n ? Sa(s3, e) : `"${r}"`;
  const o = er(a) && a.callee === as;
  let l, u, c, h = 0, p, f, g, d = o || a === Ir || a === Ss || !n && (r === "svg" || r === "foreignObject");
  if (i.length > 0) {
    const m = _s(s3, e, void 0, n, o);
    l = m.props, h = m.patchFlag, f = m.dynamicPropNames;
    const y = m.directives;
    g = y && y.length ? Ur(y.map((x) => ou(x, e))) : void 0, m.shouldUseBlock && (d = true);
  }
  if (s3.children.length > 0)
    if (a === ai && (d = true, h |= 1024, s3.children.length > 1 && e.onError(Te(45, {
      start: s3.children[0].loc.start,
      end: s3.children[s3.children.length - 1].loc.end,
      source: ""
    }))), n && a !== Ir && a !== ai) {
      const { slots: y, hasDynamicSlots: x } = vi(s3, e);
      u = y, x && (h |= 1024);
    } else if (s3.children.length === 1 && a !== Ir) {
      const y = s3.children[0], x = y.type, E = x === 5 || x === 8;
      E && ot(y, e) === 0 && (h |= 1), E || x === 2 ? u = y : u = s3.children;
    } else
      u = s3.children;
  if (h !== 0) {
    if (h < 0)
      c = h + ` /* ${Lt[h]} */`;
    else {
      const m = Object.keys(Lt).map(Number).filter((y) => y > 0 && h & y).map((y) => Lt[y]).join(", ");
      c = h + ` /* ${m} */`;
    }
    f && f.length && (p = Lv(f));
  }
  s3.codegenNode = us(e, a, l, u, c, p, g, !!d, false, n, s3.loc);
};
function Sa(s3, e, t = false) {
  let { tag: r } = s3;
  const i = Lo(r), n = lt(s3, "is");
  if (n)
    if (i) {
      const l = n.type === 6 ? n.value && G(n.value.content, true) : n.exp;
      if (l)
        return ae(e.helper(as), [
          l
        ]);
    } else
      n.type === 6 && n.value.content.startsWith("vue:") && (r = n.value.content.slice(4));
  const a = !i && Be(s3, "is");
  if (a && a.exp)
    return ae(e.helper(as), [
      a.exp
    ]);
  const o = Vl(r) || e.isBuiltInComponent(r);
  if (o)
    return t || e.helper(o), o;
  {
    const l = Oo(r, e);
    if (l)
      return l;
    const u = r.indexOf(".");
    if (u > 0) {
      const c = Oo(r.slice(0, u), e);
      if (c)
        return c + r.slice(u);
    }
  }
  return e.selfName && Dr(Mt(r)) === e.selfName ? (e.helper(oi), e.components.add(r + "__self"), di(r, "component")) : (e.helper(oi), e.components.add(r), di(r, "component"));
}
function Oo(s3, e) {
  const t = e.bindingMetadata;
  if (!t || t.__isScriptSetup === false)
    return;
  const r = Mt(s3), i = Dr(r), n = (l) => {
    if (t[s3] === l)
      return s3;
    if (t[r] === l)
      return r;
    if (t[i] === l)
      return i;
  }, a = n("setup-const") || n("setup-reactive-const");
  if (a)
    return e.inline ? a : `$setup[${JSON.stringify(a)}]`;
  const o = n("setup-let") || n("setup-ref") || n("setup-maybe-ref");
  if (o)
    return e.inline ? `${e.helperString(ls)}(${o})` : `$setup[${JSON.stringify(o)}]`;
}
function _s(s3, e, t = s3.props, r, i, n = false) {
  const { tag: a, loc: o, children: l } = s3;
  let u = [];
  const c = [], h = [], p = l.length > 0;
  let f = false, g = 0, d = false, m = false, y = false, x = false, E = false, C = false;
  const v = [], w = ({ key: P, value: b }) => {
    if (Qe(P)) {
      const S = P.content, k = jh(S);
      if (k && (!r || i) && S.toLowerCase() !== "onclick" && S !== "onUpdate:modelValue" && !ic(S) && (x = true), k && ic(S) && (C = true), b.type === 20 || (b.type === 4 || b.type === 8) && ot(b, e) > 0)
        return;
      S === "ref" ? d = true : S === "class" ? m = true : S === "style" ? y = true : S !== "key" && !v.includes(S) && v.push(S), r && (S === "class" || S === "style") && !v.includes(S) && v.push(S);
    } else
      E = true;
  };
  for (let P = 0; P < t.length; P++) {
    const b = t[P];
    if (b.type === 6) {
      const { loc: S, name: k, value: _ } = b;
      let Q = true;
      if (k === "ref" && (d = true, e.scopes.vFor > 0 && u.push(Pe(G("ref_for", true), G("true"))), _ && e.inline && e.bindingMetadata[_.content] && (Q = false, u.push(Pe(G("ref_key", true), G(_.content, true, _.loc))))), k === "is" && (Lo(a) || _ && _.content.startsWith("vue:") || false))
        continue;
      u.push(Pe(G(k, true, Gl(S, 0, k.length)), G(_ ? _.content : "", Q, _ ? _.loc : S)));
    } else {
      const { name: S, arg: k, exp: _, loc: Q } = b, K = S === "bind", ue = S === "on";
      if (S === "slot") {
        r || e.onError(Te(40, Q));
        continue;
      }
      if (S === "once" || S === "memo" || S === "is" || K && Vt(k, "is") && (Lo(a) || false) || ue && n)
        continue;
      if ((K && Vt(k, "key") || ue && p && Vt(k, "vue:before-update")) && (f = true), K && Vt(k, "ref") && e.scopes.vFor > 0 && u.push(Pe(G("ref_for", true), G("true"))), !k && (K || ue)) {
        E = true, _ ? (u.length && (c.push(at(Qa(u), o)), u = []), K ? c.push(_) : c.push({
          type: 14,
          loc: Q,
          callee: e.helper(ra),
          arguments: [_]
        })) : e.onError(Te(K ? 34 : 35, Q));
        continue;
      }
      const oe = e.directiveTransforms[S];
      if (oe) {
        const { props: N, needRuntime: R2 } = oe(b, s3, e);
        !n && N.forEach(w), u.push(...N), R2 && (h.push(b), bs(R2) && Qp.set(b, R2));
      } else
        Gh(S) || (h.push(b), p && (f = true));
    }
  }
  let T;
  if (c.length ? (u.length && c.push(at(Qa(u), o)), c.length > 1 ? T = ae(e.helper(Rr), c, o) : T = c[0]) : u.length && (T = at(Qa(u), o)), E ? g |= 16 : (m && !r && (g |= 2), y && !r && (g |= 4), v.length && (g |= 8), x && (g |= 32)), !f && (g === 0 || g === 32) && (d || C || h.length > 0) && (g |= 512), !e.inSSR && T)
    switch (T.type) {
      case 15:
        let P = -1, b = -1, S = false;
        for (let Q = 0; Q < T.properties.length; Q++) {
          const K = T.properties[Q].key;
          Qe(K) ? K.content === "class" ? P = Q : K.content === "style" && (b = Q) : K.isHandlerKey || (S = true);
        }
        const k = T.properties[P], _ = T.properties[b];
        S ? T = ae(e.helper(os), [T]) : (k && !Qe(k.value) && (k.value = ae(e.helper(ea), [k.value])), _ && (y || _.value.type === 4 && _.value.content.trim()[0] === "[" || _.value.type === 17) && (_.value = ae(e.helper(ta), [_.value])));
        break;
      case 14:
        break;
      default:
        T = ae(e.helper(os), [
          ae(e.helper(Es), [
            T
          ])
        ]);
        break;
    }
  return {
    props: T,
    directives: h,
    patchFlag: g,
    dynamicPropNames: v,
    shouldUseBlock: f
  };
}
function Qa(s3) {
  const e = /* @__PURE__ */ new Map(), t = [];
  for (let r = 0; r < s3.length; r++) {
    const i = s3[r];
    if (i.key.type === 8 || !i.key.isStatic) {
      t.push(i);
      continue;
    }
    const n = i.key.content, a = e.get(n);
    a ? (n === "style" || n === "class" || jh(n)) && Ov(a, i) : (e.set(n, i), t.push(i));
  }
  return t;
}
function Ov(s3, e) {
  s3.value.type === 17 ? s3.value.elements.push(e.value) : s3.value = Ur([s3.value, e.value], s3.loc);
}
function ou(s3, e) {
  const t = [], r = Qp.get(s3);
  if (r)
    t.push(e.helperString(r));
  else {
    const n = Oo("v-" + s3.name, e);
    n ? t.push(n) : (e.helper(Qn), e.directives.add(s3.name), t.push(di(s3.name, "directive")));
  }
  const { loc: i } = s3;
  if (s3.exp && t.push(s3.exp), s3.arg && (s3.exp || t.push("void 0"), t.push(s3.arg)), Object.keys(s3.modifiers).length) {
    s3.arg || (s3.exp || t.push("void 0"), t.push("void 0"));
    const n = G("true", false, i);
    t.push(at(s3.modifiers.map((a) => Pe(a, n)), i));
  }
  return Ur(t, s3.loc);
}
function Lv(s3) {
  let e = "[";
  for (let t = 0, r = s3.length; t < r; t++)
    e += JSON.stringify(s3[t]), t < r - 1 && (e += ", ");
  return e + "]";
}
function Lo(s3) {
  return s3 === "component" || s3 === "Component";
}
var Mv = (s3, e) => {
  if (fs(s3)) {
    const { children: t, loc: r } = s3, { slotName: i, slotProps: n } = lu(s3, e), a = [
      e.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      i,
      "{}",
      "undefined",
      "true"
    ];
    let o = 2;
    n && (a[2] = n, o = 3), t.length && (a[3] = dt([], t, false, false, r), o = 4), e.scopeId && !e.slotted && (o = 5), a.splice(o), s3.codegenNode = ae(e.helper(bl), a, r);
  }
};
function lu(s3, e) {
  let t = '"default"', r;
  const i = [];
  for (let n = 0; n < s3.props.length; n++) {
    const a = s3.props[n];
    a.type === 6 ? a.value && (a.name === "name" ? t = JSON.stringify(a.value.content) : (a.name = Mt(a.name), i.push(a))) : a.name === "bind" && Vt(a.arg, "name") ? a.exp && (t = a.exp) : (a.name === "bind" && a.arg && Qe(a.arg) && (a.arg.content = Mt(a.arg.content)), i.push(a));
  }
  if (i.length > 0) {
    const { props: n, directives: a } = _s(s3, e, i, false, false);
    r = n, a.length && e.onError(Te(36, a[0].loc));
  }
  return {
    slotName: t,
    slotProps: r
  };
}
var Dv = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
var wa = (s3, e, t, r) => {
  const { loc: i, modifiers: n, arg: a } = s3;
  !s3.exp && !n.length && t.onError(Te(35, i));
  let o;
  if (a.type === 4)
    if (a.isStatic) {
      let h = a.content;
      h.startsWith("vue:") && (h = `vnode-${h.slice(4)}`), o = G(dg(Mt(h)), true, a.loc);
    } else
      o = je([
        `${t.helperString(Sn)}(`,
        a,
        ")"
      ]);
  else
    o = a, o.children.unshift(`${t.helperString(Sn)}(`), o.children.push(")");
  let l = s3.exp;
  l && !l.content.trim() && (l = void 0);
  let u = t.cacheHandlers && !l && !t.inVOnce;
  if (l) {
    const h = zl(l.content, t), p = !(h || Dv.test(l.content)), f = l.content.includes(";");
    t.prefixIdentifiers && (p && t.addIdentifiers("$event"), l = s3.exp = tt(l, t, false, f), p && t.removeIdentifiers("$event"), u = t.cacheHandlers && !t.inVOnce && !(l.type === 4 && l.constType > 0) && !(h && e.tagType === 1) && !it(l, t.identifiers), u && h && (l.type === 4 ? l.content = `${l.content} && ${l.content}(...args)` : l.children = [...l.children, " && ", ...l.children, "(...args)"])), (p || u && h) && (l = je([
      `${p ? t.isTS ? "($event: any)" : "$event" : `${t.isTS ? `
//@ts-ignore
` : ""}(...args)`} => ${f ? "{" : "("}`,
      l,
      f ? "}" : ")"
    ]));
  }
  let c = {
    props: [
      Pe(o, l || G("() => {}", false, i))
    ]
  };
  return r && (c = r(c)), u && (c.props[0].value = t.cache(c.props[0].value)), c.props.forEach((h) => h.key.isHandlerKey = true), c;
};
var uu = (s3, e, t) => {
  const { exp: r, modifiers: i, loc: n } = s3, a = s3.arg;
  return a.type !== 4 ? (a.children.unshift("("), a.children.push(') || ""')) : a.isStatic || (a.content = `${a.content} || ""`), i.includes("camel") && (a.type === 4 ? a.isStatic ? a.content = Mt(a.content) : a.content = `${t.helperString(bn)}(${a.content})` : (a.children.unshift(`${t.helperString(bn)}(`), a.children.push(")"))), t.inSSR || (i.includes("prop") && Dc(a, "."), i.includes("attr") && Dc(a, "^")), !r || r.type === 4 && !r.content.trim() ? (t.onError(Te(34, n)), {
    props: [Pe(a, G("", true, n))]
  }) : {
    props: [Pe(a, r)]
  };
};
var Dc = (s3, e) => {
  s3.type === 4 ? s3.isStatic ? s3.content = e + s3.content : s3.content = `\`${e}\${${s3.content}}\`` : (s3.children.unshift(`'${e}' + (`), s3.children.push(")"));
};
var Rv = (s3, e) => {
  if (s3.type === 0 || s3.type === 1 || s3.type === 11 || s3.type === 10)
    return () => {
      const t = s3.children;
      let r, i = false;
      for (let n = 0; n < t.length; n++) {
        const a = t[n];
        if (Qs(a)) {
          i = true;
          for (let o = n + 1; o < t.length; o++) {
            const l = t[o];
            if (Qs(l))
              r || (r = t[n] = je([a], a.loc)), r.children.push(" + ", l), t.splice(o, 1), o--;
            else {
              r = void 0;
              break;
            }
          }
        }
      }
      if (!(!i || t.length === 1 && (s3.type === 0 || s3.type === 1 && s3.tagType === 0 && !s3.props.find((n) => n.type === 7 && !e.directiveTransforms[n.name]) && true)))
        for (let n = 0; n < t.length; n++) {
          const a = t[n];
          if (Qs(a) || a.type === 8) {
            const o = [];
            (a.type !== 2 || a.content !== " ") && o.push(a), !e.ssr && ot(a, e) === 0 && o.push(`1 /* ${Lt[1]} */`), t[n] = {
              type: 12,
              content: a,
              loc: a.loc,
              codegenNode: ae(e.helper(Yn), o)
            };
          }
        }
    };
};
var Rc = /* @__PURE__ */ new WeakSet();
var Fv = (s3, e) => {
  if (s3.type === 1 && Be(s3, "once", true))
    return Rc.has(s3) || e.inVOnce ? void 0 : (Rc.add(s3), e.inVOnce = true, e.helper(li), () => {
      e.inVOnce = false;
      const t = e.currentNode;
      t.codegenNode && (t.codegenNode = e.cache(t.codegenNode, true));
    });
};
var Ea = (s3, e, t) => {
  const { exp: r, arg: i } = s3;
  if (!r)
    return t.onError(Te(41, s3.loc)), zi();
  const n = r.loc.source, a = r.type === 4 ? r.content : n, o = t.bindingMetadata[n], l = t.inline && o && o !== "setup-const";
  if (!a.trim() || !zl(a, t) && !l)
    return t.onError(Te(42, r.loc)), zi();
  if (t.prefixIdentifiers && pr(a) && t.identifiers[a])
    return t.onError(Te(43, r.loc)), zi();
  const u = i || G("modelValue", true), c = i ? Qe(i) ? `onUpdate:${i.content}` : je(['"onUpdate:" + ', i]) : "onUpdate:modelValue";
  let h;
  const p = t.isTS ? "($event: any)" : "$event";
  if (l)
    if (o === "setup-ref")
      h = je([
        `${p} => ((`,
        G(n, false, r.loc),
        ").value = $event)"
      ]);
    else {
      const g = o === "setup-let" ? `${n} = $event` : "null";
      h = je([
        `${p} => (${t.helperString(ui)}(${n}) ? (`,
        G(n, false, r.loc),
        `).value = $event : ${g})`
      ]);
    }
  else
    h = je([
      `${p} => ((`,
      r,
      ") = $event)"
    ]);
  const f = [
    Pe(u, s3.exp),
    Pe(c, h)
  ];
  if (t.prefixIdentifiers && !t.inVOnce && t.cacheHandlers && !it(r, t.identifiers) && (f[1].value = t.cache(f[1].value)), s3.modifiers.length && e.tagType === 1) {
    const g = s3.modifiers.map((m) => (pr(m) ? m : JSON.stringify(m)) + ": true").join(", "), d = i ? Qe(i) ? `${i.content}Modifiers` : je([i, ' + "Modifiers"']) : "modelModifiers";
    f.push(Pe(d, G(`{ ${g} }`, false, s3.loc, 2)));
  }
  return zi(f);
};
function zi(s3 = []) {
  return { props: s3 };
}
var Fc = /* @__PURE__ */ new WeakSet();
var Bv = (s3, e) => {
  if (s3.type === 1) {
    const t = Be(s3, "memo");
    return !t || Fc.has(s3) ? void 0 : (Fc.add(s3), () => {
      const r = s3.codegenNode || e.currentNode.codegenNode;
      r && r.type === 13 && (s3.tagType !== 1 && ca(r, e), s3.codegenNode = ae(e.helper(aa), [
        t.exp,
        dt(void 0, r),
        "_cache",
        String(e.cached++)
      ]));
    });
  }
};
function cu(s3) {
  return [
    [
      Fv,
      Tv,
      Bv,
      Cv,
      ...s3 ? [
        au,
        tu
      ] : [],
      Mv,
      Xp,
      nu,
      Rv
    ],
    {
      on: wa,
      bind: uu,
      model: Ea
    }
  ];
}
function Zp(s3, e = {}) {
  const t = e.onError || ml, r = e.mode === "module", i = e.prefixIdentifiers === true || r;
  !i && e.cacheHandlers && t(Te(48)), e.scopeId && !r && t(Te(49));
  const n = be(s3) ? ha(s3, e) : s3, [a, o] = cu(i);
  if (e.isTS) {
    const { expressionPlugins: l } = e;
    (!l || !l.includes("typescript")) && (e.expressionPlugins = [...l || [], "typescript"]);
  }
  return fa(n, Ht({}, e, {
    prefixIdentifiers: i,
    nodeTransforms: [
      ...a,
      ...e.nodeTransforms || []
    ],
    directiveTransforms: Ht({}, o, e.directiveTransforms || {})
  })), Ql(n, Ht({}, e, {
    prefixIdentifiers: i
  }));
}
var Zs = () => ({ props: [] });
var hu = Symbol("vModelRadio");
var pu = Symbol("vModelCheckbox");
var fu = Symbol("vModelText");
var du = Symbol("vModelSelect");
var Nn = Symbol("vModelDynamic");
var mu = Symbol("vOnModifiersGuard");
var gu = Symbol("vOnKeysGuard");
var yu = Symbol("vShow");
var Is = Symbol("Transition");
var Fi = Symbol("TransitionGroup");
El({
  [hu]: "vModelRadio",
  [pu]: "vModelCheckbox",
  [fu]: "vModelText",
  [du]: "vModelSelect",
  [Nn]: "vModelDynamic",
  [mu]: "withModifiers",
  [gu]: "withKeys",
  [yu]: "vShow",
  [Is]: "Transition",
  [Fi]: "TransitionGroup"
});
var Bc = {
  GT: ">",
  gt: ">",
  LT: "<",
  lt: "<",
  "ac;": "∾",
  "af;": "⁡",
  AMP: "&",
  amp: "&",
  "ap;": "≈",
  "DD;": "ⅅ",
  "dd;": "ⅆ",
  deg: "°",
  "ee;": "ⅇ",
  "eg;": "⪚",
  "el;": "⪙",
  ETH: "Ð",
  eth: "ð",
  "gE;": "≧",
  "ge;": "≥",
  "Gg;": "⋙",
  "gg;": "≫",
  "gl;": "≷",
  "GT;": ">",
  "Gt;": "≫",
  "gt;": ">",
  "ic;": "⁣",
  "ii;": "ⅈ",
  "Im;": "ℑ",
  "in;": "∈",
  "it;": "⁢",
  "lE;": "≦",
  "le;": "≤",
  "lg;": "≶",
  "Ll;": "⋘",
  "ll;": "≪",
  "LT;": "<",
  "Lt;": "≪",
  "lt;": "<",
  "mp;": "∓",
  "Mu;": "Μ",
  "mu;": "μ",
  "ne;": "≠",
  "ni;": "∋",
  not: "¬",
  "Nu;": "Ν",
  "nu;": "ν",
  "Or;": "⩔",
  "or;": "∨",
  "oS;": "Ⓢ",
  "Pi;": "Π",
  "pi;": "π",
  "pm;": "±",
  "Pr;": "⪻",
  "pr;": "≺",
  "Re;": "ℜ",
  REG: "®",
  reg: "®",
  "rx;": "℞",
  "Sc;": "⪼",
  "sc;": "≻",
  shy: "­",
  uml: "¨",
  "wp;": "℘",
  "wr;": "≀",
  "Xi;": "Ξ",
  "xi;": "ξ",
  yen: "¥",
  "acd;": "∿",
  "acE;": "∾̳",
  "Acy;": "А",
  "acy;": "а",
  "Afr;": "𝔄",
  "afr;": "𝔞",
  "AMP;": "&",
  "amp;": "&",
  "And;": "⩓",
  "and;": "∧",
  "ang;": "∠",
  "apE;": "⩰",
  "ape;": "≊",
  "ast;": "*",
  Auml: "Ä",
  auml: "ä",
  "Bcy;": "Б",
  "bcy;": "б",
  "Bfr;": "𝔅",
  "bfr;": "𝔟",
  "bne;": "=⃥",
  "bot;": "⊥",
  "Cap;": "⋒",
  "cap;": "∩",
  cent: "¢",
  "Cfr;": "ℭ",
  "cfr;": "𝔠",
  "Chi;": "Χ",
  "chi;": "χ",
  "cir;": "○",
  COPY: "©",
  copy: "©",
  "Cup;": "⋓",
  "cup;": "∪",
  "Dcy;": "Д",
  "dcy;": "д",
  "deg;": "°",
  "Del;": "∇",
  "Dfr;": "𝔇",
  "dfr;": "𝔡",
  "die;": "¨",
  "div;": "÷",
  "Dot;": "¨",
  "dot;": "˙",
  "Ecy;": "Э",
  "ecy;": "э",
  "Efr;": "𝔈",
  "efr;": "𝔢",
  "egs;": "⪖",
  "ell;": "ℓ",
  "els;": "⪕",
  "ENG;": "Ŋ",
  "eng;": "ŋ",
  "Eta;": "Η",
  "eta;": "η",
  "ETH;": "Ð",
  "eth;": "ð",
  Euml: "Ë",
  euml: "ë",
  "Fcy;": "Ф",
  "fcy;": "ф",
  "Ffr;": "𝔉",
  "ffr;": "𝔣",
  "gap;": "⪆",
  "Gcy;": "Г",
  "gcy;": "г",
  "gEl;": "⪌",
  "gel;": "⋛",
  "geq;": "≥",
  "ges;": "⩾",
  "Gfr;": "𝔊",
  "gfr;": "𝔤",
  "ggg;": "⋙",
  "gla;": "⪥",
  "glE;": "⪒",
  "glj;": "⪤",
  "gnE;": "≩",
  "gne;": "⪈",
  "Hat;": "^",
  "Hfr;": "ℌ",
  "hfr;": "𝔥",
  "Icy;": "И",
  "icy;": "и",
  "iff;": "⇔",
  "Ifr;": "ℑ",
  "ifr;": "𝔦",
  "Int;": "∬",
  "int;": "∫",
  Iuml: "Ï",
  iuml: "ï",
  "Jcy;": "Й",
  "jcy;": "й",
  "Jfr;": "𝔍",
  "jfr;": "𝔧",
  "Kcy;": "К",
  "kcy;": "к",
  "Kfr;": "𝔎",
  "kfr;": "𝔨",
  "lap;": "⪅",
  "lat;": "⪫",
  "Lcy;": "Л",
  "lcy;": "л",
  "lEg;": "⪋",
  "leg;": "⋚",
  "leq;": "≤",
  "les;": "⩽",
  "Lfr;": "𝔏",
  "lfr;": "𝔩",
  "lgE;": "⪑",
  "lnE;": "≨",
  "lne;": "⪇",
  "loz;": "◊",
  "lrm;": "‎",
  "Lsh;": "↰",
  "lsh;": "↰",
  macr: "¯",
  "Map;": "⤅",
  "map;": "↦",
  "Mcy;": "М",
  "mcy;": "м",
  "Mfr;": "𝔐",
  "mfr;": "𝔪",
  "mho;": "℧",
  "mid;": "∣",
  "nap;": "≉",
  nbsp: " ",
  "Ncy;": "Н",
  "ncy;": "н",
  "Nfr;": "𝔑",
  "nfr;": "𝔫",
  "ngE;": "≧̸",
  "nge;": "≱",
  "nGg;": "⋙̸",
  "nGt;": "≫⃒",
  "ngt;": "≯",
  "nis;": "⋼",
  "niv;": "∋",
  "nlE;": "≦̸",
  "nle;": "≰",
  "nLl;": "⋘̸",
  "nLt;": "≪⃒",
  "nlt;": "≮",
  "Not;": "⫬",
  "not;": "¬",
  "npr;": "⊀",
  "nsc;": "⊁",
  "num;": "#",
  "Ocy;": "О",
  "ocy;": "о",
  "Ofr;": "𝔒",
  "ofr;": "𝔬",
  "ogt;": "⧁",
  "ohm;": "Ω",
  "olt;": "⧀",
  "ord;": "⩝",
  ordf: "ª",
  ordm: "º",
  "orv;": "⩛",
  Ouml: "Ö",
  ouml: "ö",
  "par;": "∥",
  para: "¶",
  "Pcy;": "П",
  "pcy;": "п",
  "Pfr;": "𝔓",
  "pfr;": "𝔭",
  "Phi;": "Φ",
  "phi;": "φ",
  "piv;": "ϖ",
  "prE;": "⪳",
  "pre;": "⪯",
  "Psi;": "Ψ",
  "psi;": "ψ",
  "Qfr;": "𝔔",
  "qfr;": "𝔮",
  QUOT: '"',
  quot: '"',
  "Rcy;": "Р",
  "rcy;": "р",
  "REG;": "®",
  "reg;": "®",
  "Rfr;": "ℜ",
  "rfr;": "𝔯",
  "Rho;": "Ρ",
  "rho;": "ρ",
  "rlm;": "‏",
  "Rsh;": "↱",
  "rsh;": "↱",
  "scE;": "⪴",
  "sce;": "⪰",
  "Scy;": "С",
  "scy;": "с",
  sect: "§",
  "Sfr;": "𝔖",
  "sfr;": "𝔰",
  "shy;": "­",
  "sim;": "∼",
  "smt;": "⪪",
  "sol;": "/",
  "squ;": "□",
  "Sub;": "⋐",
  "sub;": "⊂",
  "Sum;": "∑",
  "sum;": "∑",
  "Sup;": "⋑",
  "sup;": "⊃",
  sup1: "¹",
  sup2: "²",
  sup3: "³",
  "Tab;": "	",
  "Tau;": "Τ",
  "tau;": "τ",
  "Tcy;": "Т",
  "tcy;": "т",
  "Tfr;": "𝔗",
  "tfr;": "𝔱",
  "top;": "⊤",
  "Ucy;": "У",
  "ucy;": "у",
  "Ufr;": "𝔘",
  "ufr;": "𝔲",
  "uml;": "¨",
  Uuml: "Ü",
  uuml: "ü",
  "Vcy;": "В",
  "vcy;": "в",
  "Vee;": "⋁",
  "vee;": "∨",
  "Vfr;": "𝔙",
  "vfr;": "𝔳",
  "Wfr;": "𝔚",
  "wfr;": "𝔴",
  "Xfr;": "𝔛",
  "xfr;": "𝔵",
  "Ycy;": "Ы",
  "ycy;": "ы",
  "yen;": "¥",
  "Yfr;": "𝔜",
  "yfr;": "𝔶",
  yuml: "ÿ",
  "Zcy;": "З",
  "zcy;": "з",
  "Zfr;": "ℨ",
  "zfr;": "𝔷",
  "zwj;": "‍",
  Acirc: "Â",
  acirc: "â",
  acute: "´",
  AElig: "Æ",
  aelig: "æ",
  "andd;": "⩜",
  "andv;": "⩚",
  "ange;": "⦤",
  "Aopf;": "𝔸",
  "aopf;": "𝕒",
  "apid;": "≋",
  "apos;": "'",
  Aring: "Å",
  aring: "å",
  "Ascr;": "𝒜",
  "ascr;": "𝒶",
  "Auml;": "Ä",
  "auml;": "ä",
  "Barv;": "⫧",
  "bbrk;": "⎵",
  "Beta;": "Β",
  "beta;": "β",
  "beth;": "ℶ",
  "bNot;": "⫭",
  "bnot;": "⌐",
  "Bopf;": "𝔹",
  "bopf;": "𝕓",
  "boxH;": "═",
  "boxh;": "─",
  "boxV;": "║",
  "boxv;": "│",
  "Bscr;": "ℬ",
  "bscr;": "𝒷",
  "bsim;": "∽",
  "bsol;": "\\",
  "bull;": "•",
  "bump;": "≎",
  "caps;": "∩︀",
  "Cdot;": "Ċ",
  "cdot;": "ċ",
  cedil: "¸",
  "cent;": "¢",
  "CHcy;": "Ч",
  "chcy;": "ч",
  "circ;": "ˆ",
  "cirE;": "⧃",
  "cire;": "≗",
  "comp;": "∁",
  "cong;": "≅",
  "Copf;": "ℂ",
  "copf;": "𝕔",
  "COPY;": "©",
  "copy;": "©",
  "Cscr;": "𝒞",
  "cscr;": "𝒸",
  "csub;": "⫏",
  "csup;": "⫐",
  "cups;": "∪︀",
  "Darr;": "↡",
  "dArr;": "⇓",
  "darr;": "↓",
  "dash;": "‐",
  "dHar;": "⥥",
  "diam;": "⋄",
  "DJcy;": "Ђ",
  "djcy;": "ђ",
  "Dopf;": "𝔻",
  "dopf;": "𝕕",
  "Dscr;": "𝒟",
  "dscr;": "𝒹",
  "DScy;": "Ѕ",
  "dscy;": "ѕ",
  "dsol;": "⧶",
  "dtri;": "▿",
  "DZcy;": "Џ",
  "dzcy;": "џ",
  "ecir;": "≖",
  Ecirc: "Ê",
  ecirc: "ê",
  "Edot;": "Ė",
  "eDot;": "≑",
  "edot;": "ė",
  "emsp;": " ",
  "ensp;": " ",
  "Eopf;": "𝔼",
  "eopf;": "𝕖",
  "epar;": "⋕",
  "epsi;": "ε",
  "Escr;": "ℰ",
  "escr;": "ℯ",
  "Esim;": "⩳",
  "esim;": "≂",
  "Euml;": "Ë",
  "euml;": "ë",
  "euro;": "€",
  "excl;": "!",
  "flat;": "♭",
  "fnof;": "ƒ",
  "Fopf;": "𝔽",
  "fopf;": "𝕗",
  "fork;": "⋔",
  "Fscr;": "ℱ",
  "fscr;": "𝒻",
  "Gdot;": "Ġ",
  "gdot;": "ġ",
  "geqq;": "≧",
  "gesl;": "⋛︀",
  "GJcy;": "Ѓ",
  "gjcy;": "ѓ",
  "gnap;": "⪊",
  "gneq;": "⪈",
  "Gopf;": "𝔾",
  "gopf;": "𝕘",
  "Gscr;": "𝒢",
  "gscr;": "ℊ",
  "gsim;": "≳",
  "gtcc;": "⪧",
  "gvnE;": "≩︀",
  "half;": "½",
  "hArr;": "⇔",
  "harr;": "↔",
  "hbar;": "ℏ",
  "Hopf;": "ℍ",
  "hopf;": "𝕙",
  "Hscr;": "ℋ",
  "hscr;": "𝒽",
  Icirc: "Î",
  icirc: "î",
  "Idot;": "İ",
  "IEcy;": "Е",
  "iecy;": "е",
  iexcl: "¡",
  "imof;": "⊷",
  "IOcy;": "Ё",
  "iocy;": "ё",
  "Iopf;": "𝕀",
  "iopf;": "𝕚",
  "Iota;": "Ι",
  "iota;": "ι",
  "Iscr;": "ℐ",
  "iscr;": "𝒾",
  "isin;": "∈",
  "Iuml;": "Ï",
  "iuml;": "ï",
  "Jopf;": "𝕁",
  "jopf;": "𝕛",
  "Jscr;": "𝒥",
  "jscr;": "𝒿",
  "KHcy;": "Х",
  "khcy;": "х",
  "KJcy;": "Ќ",
  "kjcy;": "ќ",
  "Kopf;": "𝕂",
  "kopf;": "𝕜",
  "Kscr;": "𝒦",
  "kscr;": "𝓀",
  "Lang;": "⟪",
  "lang;": "⟨",
  laquo: "«",
  "Larr;": "↞",
  "lArr;": "⇐",
  "larr;": "←",
  "late;": "⪭",
  "lcub;": "{",
  "ldca;": "⤶",
  "ldsh;": "↲",
  "leqq;": "≦",
  "lesg;": "⋚︀",
  "lHar;": "⥢",
  "LJcy;": "Љ",
  "ljcy;": "љ",
  "lnap;": "⪉",
  "lneq;": "⪇",
  "Lopf;": "𝕃",
  "lopf;": "𝕝",
  "lozf;": "⧫",
  "lpar;": "(",
  "Lscr;": "ℒ",
  "lscr;": "𝓁",
  "lsim;": "≲",
  "lsqb;": "[",
  "ltcc;": "⪦",
  "ltri;": "◃",
  "lvnE;": "≨︀",
  "macr;": "¯",
  "male;": "♂",
  "malt;": "✠",
  micro: "µ",
  "mlcp;": "⫛",
  "mldr;": "…",
  "Mopf;": "𝕄",
  "mopf;": "𝕞",
  "Mscr;": "ℳ",
  "mscr;": "𝓂",
  "nang;": "∠⃒",
  "napE;": "⩰̸",
  "nbsp;": " ",
  "ncap;": "⩃",
  "ncup;": "⩂",
  "ngeq;": "≱",
  "nges;": "⩾̸",
  "ngtr;": "≯",
  "nGtv;": "≫̸",
  "nisd;": "⋺",
  "NJcy;": "Њ",
  "njcy;": "њ",
  "nldr;": "‥",
  "nleq;": "≰",
  "nles;": "⩽̸",
  "nLtv;": "≪̸",
  "nmid;": "∤",
  "Nopf;": "ℕ",
  "nopf;": "𝕟",
  "npar;": "∦",
  "npre;": "⪯̸",
  "nsce;": "⪰̸",
  "Nscr;": "𝒩",
  "nscr;": "𝓃",
  "nsim;": "≁",
  "nsub;": "⊄",
  "nsup;": "⊅",
  "ntgl;": "≹",
  "ntlg;": "≸",
  "nvap;": "≍⃒",
  "nvge;": "≥⃒",
  "nvgt;": ">⃒",
  "nvle;": "≤⃒",
  "nvlt;": "<⃒",
  "oast;": "⊛",
  "ocir;": "⊚",
  Ocirc: "Ô",
  ocirc: "ô",
  "odiv;": "⨸",
  "odot;": "⊙",
  "ogon;": "˛",
  "oint;": "∮",
  "omid;": "⦶",
  "Oopf;": "𝕆",
  "oopf;": "𝕠",
  "opar;": "⦷",
  "ordf;": "ª",
  "ordm;": "º",
  "oror;": "⩖",
  "Oscr;": "𝒪",
  "oscr;": "ℴ",
  "osol;": "⊘",
  "Ouml;": "Ö",
  "ouml;": "ö",
  "para;": "¶",
  "part;": "∂",
  "perp;": "⊥",
  "phiv;": "ϕ",
  "plus;": "+",
  "Popf;": "ℙ",
  "popf;": "𝕡",
  pound: "£",
  "prap;": "⪷",
  "prec;": "≺",
  "prnE;": "⪵",
  "prod;": "∏",
  "prop;": "∝",
  "Pscr;": "𝒫",
  "pscr;": "𝓅",
  "qint;": "⨌",
  "Qopf;": "ℚ",
  "qopf;": "𝕢",
  "Qscr;": "𝒬",
  "qscr;": "𝓆",
  "QUOT;": '"',
  "quot;": '"',
  "race;": "∽̱",
  "Rang;": "⟫",
  "rang;": "⟩",
  raquo: "»",
  "Rarr;": "↠",
  "rArr;": "⇒",
  "rarr;": "→",
  "rcub;": "}",
  "rdca;": "⤷",
  "rdsh;": "↳",
  "real;": "ℜ",
  "rect;": "▭",
  "rHar;": "⥤",
  "rhov;": "ϱ",
  "ring;": "˚",
  "Ropf;": "ℝ",
  "ropf;": "𝕣",
  "rpar;": ")",
  "Rscr;": "ℛ",
  "rscr;": "𝓇",
  "rsqb;": "]",
  "rtri;": "▹",
  "scap;": "⪸",
  "scnE;": "⪶",
  "sdot;": "⋅",
  "sect;": "§",
  "semi;": ";",
  "sext;": "✶",
  "SHcy;": "Ш",
  "shcy;": "ш",
  "sime;": "≃",
  "simg;": "⪞",
  "siml;": "⪝",
  "smid;": "∣",
  "smte;": "⪬",
  "solb;": "⧄",
  "Sopf;": "𝕊",
  "sopf;": "𝕤",
  "spar;": "∥",
  "Sqrt;": "√",
  "squf;": "▪",
  "Sscr;": "𝒮",
  "sscr;": "𝓈",
  "Star;": "⋆",
  "star;": "☆",
  "subE;": "⫅",
  "sube;": "⊆",
  "succ;": "≻",
  "sung;": "♪",
  "sup1;": "¹",
  "sup2;": "²",
  "sup3;": "³",
  "supE;": "⫆",
  "supe;": "⊇",
  szlig: "ß",
  "tbrk;": "⎴",
  "tdot;": "⃛",
  THORN: "Þ",
  thorn: "þ",
  times: "×",
  "tint;": "∭",
  "toea;": "⤨",
  "Topf;": "𝕋",
  "topf;": "𝕥",
  "tosa;": "⤩",
  "trie;": "≜",
  "Tscr;": "𝒯",
  "tscr;": "𝓉",
  "TScy;": "Ц",
  "tscy;": "ц",
  "Uarr;": "↟",
  "uArr;": "⇑",
  "uarr;": "↑",
  Ucirc: "Û",
  ucirc: "û",
  "uHar;": "⥣",
  "Uopf;": "𝕌",
  "uopf;": "𝕦",
  "Upsi;": "ϒ",
  "upsi;": "υ",
  "Uscr;": "𝒰",
  "uscr;": "𝓊",
  "utri;": "▵",
  "Uuml;": "Ü",
  "uuml;": "ü",
  "vArr;": "⇕",
  "varr;": "↕",
  "Vbar;": "⫫",
  "vBar;": "⫨",
  "Vert;": "‖",
  "vert;": "|",
  "Vopf;": "𝕍",
  "vopf;": "𝕧",
  "Vscr;": "𝒱",
  "vscr;": "𝓋",
  "Wopf;": "𝕎",
  "wopf;": "𝕨",
  "Wscr;": "𝒲",
  "wscr;": "𝓌",
  "xcap;": "⋂",
  "xcup;": "⋃",
  "xmap;": "⟼",
  "xnis;": "⋻",
  "Xopf;": "𝕏",
  "xopf;": "𝕩",
  "Xscr;": "𝒳",
  "xscr;": "𝓍",
  "xvee;": "⋁",
  "YAcy;": "Я",
  "yacy;": "я",
  "YIcy;": "Ї",
  "yicy;": "ї",
  "Yopf;": "𝕐",
  "yopf;": "𝕪",
  "Yscr;": "𝒴",
  "yscr;": "𝓎",
  "YUcy;": "Ю",
  "yucy;": "ю",
  "Yuml;": "Ÿ",
  "yuml;": "ÿ",
  "Zdot;": "Ż",
  "zdot;": "ż",
  "Zeta;": "Ζ",
  "zeta;": "ζ",
  "ZHcy;": "Ж",
  "zhcy;": "ж",
  "Zopf;": "ℤ",
  "zopf;": "𝕫",
  "Zscr;": "𝒵",
  "zscr;": "𝓏",
  "zwnj;": "‌",
  Aacute: "Á",
  aacute: "á",
  "Acirc;": "Â",
  "acirc;": "â",
  "acute;": "´",
  "AElig;": "Æ",
  "aelig;": "æ",
  Agrave: "À",
  agrave: "à",
  "aleph;": "ℵ",
  "Alpha;": "Α",
  "alpha;": "α",
  "Amacr;": "Ā",
  "amacr;": "ā",
  "amalg;": "⨿",
  "angle;": "∠",
  "angrt;": "∟",
  "angst;": "Å",
  "Aogon;": "Ą",
  "aogon;": "ą",
  "Aring;": "Å",
  "aring;": "å",
  "asymp;": "≈",
  Atilde: "Ã",
  atilde: "ã",
  "awint;": "⨑",
  "bcong;": "≌",
  "bdquo;": "„",
  "bepsi;": "϶",
  "blank;": "␣",
  "blk12;": "▒",
  "blk14;": "░",
  "blk34;": "▓",
  "block;": "█",
  "boxDL;": "╗",
  "boxDl;": "╖",
  "boxdL;": "╕",
  "boxdl;": "┐",
  "boxDR;": "╔",
  "boxDr;": "╓",
  "boxdR;": "╒",
  "boxdr;": "┌",
  "boxHD;": "╦",
  "boxHd;": "╤",
  "boxhD;": "╥",
  "boxhd;": "┬",
  "boxHU;": "╩",
  "boxHu;": "╧",
  "boxhU;": "╨",
  "boxhu;": "┴",
  "boxUL;": "╝",
  "boxUl;": "╜",
  "boxuL;": "╛",
  "boxul;": "┘",
  "boxUR;": "╚",
  "boxUr;": "╙",
  "boxuR;": "╘",
  "boxur;": "└",
  "boxVH;": "╬",
  "boxVh;": "╫",
  "boxvH;": "╪",
  "boxvh;": "┼",
  "boxVL;": "╣",
  "boxVl;": "╢",
  "boxvL;": "╡",
  "boxvl;": "┤",
  "boxVR;": "╠",
  "boxVr;": "╟",
  "boxvR;": "╞",
  "boxvr;": "├",
  "Breve;": "˘",
  "breve;": "˘",
  brvbar: "¦",
  "bsemi;": "⁏",
  "bsime;": "⋍",
  "bsolb;": "⧅",
  "bumpE;": "⪮",
  "bumpe;": "≏",
  "caret;": "⁁",
  "caron;": "ˇ",
  "ccaps;": "⩍",
  Ccedil: "Ç",
  ccedil: "ç",
  "Ccirc;": "Ĉ",
  "ccirc;": "ĉ",
  "ccups;": "⩌",
  "cedil;": "¸",
  "check;": "✓",
  "clubs;": "♣",
  "Colon;": "∷",
  "colon;": ":",
  "comma;": ",",
  "crarr;": "↵",
  "Cross;": "⨯",
  "cross;": "✗",
  "csube;": "⫑",
  "csupe;": "⫒",
  "ctdot;": "⋯",
  "cuepr;": "⋞",
  "cuesc;": "⋟",
  "cupor;": "⩅",
  curren: "¤",
  "cuvee;": "⋎",
  "cuwed;": "⋏",
  "cwint;": "∱",
  "Dashv;": "⫤",
  "dashv;": "⊣",
  "dblac;": "˝",
  "ddarr;": "⇊",
  "Delta;": "Δ",
  "delta;": "δ",
  "dharl;": "⇃",
  "dharr;": "⇂",
  "diams;": "♦",
  "disin;": "⋲",
  divide: "÷",
  "doteq;": "≐",
  "dtdot;": "⋱",
  "dtrif;": "▾",
  "duarr;": "⇵",
  "duhar;": "⥯",
  Eacute: "É",
  eacute: "é",
  "Ecirc;": "Ê",
  "ecirc;": "ê",
  "eDDot;": "⩷",
  "efDot;": "≒",
  Egrave: "È",
  egrave: "è",
  "Emacr;": "Ē",
  "emacr;": "ē",
  "empty;": "∅",
  "Eogon;": "Ę",
  "eogon;": "ę",
  "eplus;": "⩱",
  "epsiv;": "ϵ",
  "eqsim;": "≂",
  "Equal;": "⩵",
  "equiv;": "≡",
  "erarr;": "⥱",
  "erDot;": "≓",
  "esdot;": "≐",
  "exist;": "∃",
  "fflig;": "ﬀ",
  "filig;": "ﬁ",
  "fjlig;": "fj",
  "fllig;": "ﬂ",
  "fltns;": "▱",
  "forkv;": "⫙",
  frac12: "½",
  frac14: "¼",
  frac34: "¾",
  "frasl;": "⁄",
  "frown;": "⌢",
  "Gamma;": "Γ",
  "gamma;": "γ",
  "Gcirc;": "Ĝ",
  "gcirc;": "ĝ",
  "gescc;": "⪩",
  "gimel;": "ℷ",
  "gneqq;": "≩",
  "gnsim;": "⋧",
  "grave;": "`",
  "gsime;": "⪎",
  "gsiml;": "⪐",
  "gtcir;": "⩺",
  "gtdot;": "⋗",
  "Hacek;": "ˇ",
  "harrw;": "↭",
  "Hcirc;": "Ĥ",
  "hcirc;": "ĥ",
  "hoarr;": "⇿",
  Iacute: "Í",
  iacute: "í",
  "Icirc;": "Î",
  "icirc;": "î",
  "iexcl;": "¡",
  Igrave: "Ì",
  igrave: "ì",
  "iiint;": "∭",
  "iiota;": "℩",
  "IJlig;": "Ĳ",
  "ijlig;": "ĳ",
  "Imacr;": "Ī",
  "imacr;": "ī",
  "image;": "ℑ",
  "imath;": "ı",
  "imped;": "Ƶ",
  "infin;": "∞",
  "Iogon;": "Į",
  "iogon;": "į",
  "iprod;": "⨼",
  iquest: "¿",
  "isinE;": "⋹",
  "isins;": "⋴",
  "isinv;": "∈",
  "Iukcy;": "І",
  "iukcy;": "і",
  "Jcirc;": "Ĵ",
  "jcirc;": "ĵ",
  "jmath;": "ȷ",
  "Jukcy;": "Є",
  "jukcy;": "є",
  "Kappa;": "Κ",
  "kappa;": "κ",
  "lAarr;": "⇚",
  "langd;": "⦑",
  "laquo;": "«",
  "larrb;": "⇤",
  "lates;": "⪭︀",
  "lBarr;": "⤎",
  "lbarr;": "⤌",
  "lbbrk;": "❲",
  "lbrke;": "⦋",
  "lceil;": "⌈",
  "ldquo;": "“",
  "lescc;": "⪨",
  "lhard;": "↽",
  "lharu;": "↼",
  "lhblk;": "▄",
  "llarr;": "⇇",
  "lltri;": "◺",
  "lneqq;": "≨",
  "lnsim;": "⋦",
  "loang;": "⟬",
  "loarr;": "⇽",
  "lobrk;": "⟦",
  "lopar;": "⦅",
  "lrarr;": "⇆",
  "lrhar;": "⇋",
  "lrtri;": "⊿",
  "lsime;": "⪍",
  "lsimg;": "⪏",
  "lsquo;": "‘",
  "ltcir;": "⩹",
  "ltdot;": "⋖",
  "ltrie;": "⊴",
  "ltrif;": "◂",
  "mdash;": "—",
  "mDDot;": "∺",
  "micro;": "µ",
  middot: "·",
  "minus;": "−",
  "mumap;": "⊸",
  "nabla;": "∇",
  "napid;": "≋̸",
  "napos;": "ŉ",
  "natur;": "♮",
  "nbump;": "≎̸",
  "ncong;": "≇",
  "ndash;": "–",
  "neArr;": "⇗",
  "nearr;": "↗",
  "nedot;": "≐̸",
  "nesim;": "≂̸",
  "ngeqq;": "≧̸",
  "ngsim;": "≵",
  "nhArr;": "⇎",
  "nharr;": "↮",
  "nhpar;": "⫲",
  "nlArr;": "⇍",
  "nlarr;": "↚",
  "nleqq;": "≦̸",
  "nless;": "≮",
  "nlsim;": "≴",
  "nltri;": "⋪",
  "notin;": "∉",
  "notni;": "∌",
  "npart;": "∂̸",
  "nprec;": "⊀",
  "nrArr;": "⇏",
  "nrarr;": "↛",
  "nrtri;": "⋫",
  "nsime;": "≄",
  "nsmid;": "∤",
  "nspar;": "∦",
  "nsubE;": "⫅̸",
  "nsube;": "⊈",
  "nsucc;": "⊁",
  "nsupE;": "⫆̸",
  "nsupe;": "⊉",
  Ntilde: "Ñ",
  ntilde: "ñ",
  "numsp;": " ",
  "nvsim;": "∼⃒",
  "nwArr;": "⇖",
  "nwarr;": "↖",
  Oacute: "Ó",
  oacute: "ó",
  "Ocirc;": "Ô",
  "ocirc;": "ô",
  "odash;": "⊝",
  "OElig;": "Œ",
  "oelig;": "œ",
  "ofcir;": "⦿",
  Ograve: "Ò",
  ograve: "ò",
  "ohbar;": "⦵",
  "olarr;": "↺",
  "olcir;": "⦾",
  "oline;": "‾",
  "Omacr;": "Ō",
  "omacr;": "ō",
  "Omega;": "Ω",
  "omega;": "ω",
  "operp;": "⦹",
  "oplus;": "⊕",
  "orarr;": "↻",
  "order;": "ℴ",
  Oslash: "Ø",
  oslash: "ø",
  Otilde: "Õ",
  otilde: "õ",
  "ovbar;": "⌽",
  "parsl;": "⫽",
  "phone;": "☎",
  "plusb;": "⊞",
  "pluse;": "⩲",
  plusmn: "±",
  "pound;": "£",
  "prcue;": "≼",
  "Prime;": "″",
  "prime;": "′",
  "prnap;": "⪹",
  "prsim;": "≾",
  "quest;": "?",
  "rAarr;": "⇛",
  "radic;": "√",
  "rangd;": "⦒",
  "range;": "⦥",
  "raquo;": "»",
  "rarrb;": "⇥",
  "rarrc;": "⤳",
  "rarrw;": "↝",
  "ratio;": "∶",
  "RBarr;": "⤐",
  "rBarr;": "⤏",
  "rbarr;": "⤍",
  "rbbrk;": "❳",
  "rbrke;": "⦌",
  "rceil;": "⌉",
  "rdquo;": "”",
  "reals;": "ℝ",
  "rhard;": "⇁",
  "rharu;": "⇀",
  "rlarr;": "⇄",
  "rlhar;": "⇌",
  "rnmid;": "⫮",
  "roang;": "⟭",
  "roarr;": "⇾",
  "robrk;": "⟧",
  "ropar;": "⦆",
  "rrarr;": "⇉",
  "rsquo;": "’",
  "rtrie;": "⊵",
  "rtrif;": "▸",
  "sbquo;": "‚",
  "sccue;": "≽",
  "Scirc;": "Ŝ",
  "scirc;": "ŝ",
  "scnap;": "⪺",
  "scsim;": "≿",
  "sdotb;": "⊡",
  "sdote;": "⩦",
  "seArr;": "⇘",
  "searr;": "↘",
  "setmn;": "∖",
  "sharp;": "♯",
  "Sigma;": "Σ",
  "sigma;": "σ",
  "simeq;": "≃",
  "simgE;": "⪠",
  "simlE;": "⪟",
  "simne;": "≆",
  "slarr;": "←",
  "smile;": "⌣",
  "smtes;": "⪬︀",
  "sqcap;": "⊓",
  "sqcup;": "⊔",
  "sqsub;": "⊏",
  "sqsup;": "⊐",
  "srarr;": "→",
  "starf;": "★",
  "strns;": "¯",
  "subnE;": "⫋",
  "subne;": "⊊",
  "supnE;": "⫌",
  "supne;": "⊋",
  "swArr;": "⇙",
  "swarr;": "↙",
  "szlig;": "ß",
  "Theta;": "Θ",
  "theta;": "θ",
  "thkap;": "≈",
  "THORN;": "Þ",
  "thorn;": "þ",
  "Tilde;": "∼",
  "tilde;": "˜",
  "times;": "×",
  "TRADE;": "™",
  "trade;": "™",
  "trisb;": "⧍",
  "TSHcy;": "Ћ",
  "tshcy;": "ћ",
  "twixt;": "≬",
  Uacute: "Ú",
  uacute: "ú",
  "Ubrcy;": "Ў",
  "ubrcy;": "ў",
  "Ucirc;": "Û",
  "ucirc;": "û",
  "udarr;": "⇅",
  "udhar;": "⥮",
  Ugrave: "Ù",
  ugrave: "ù",
  "uharl;": "↿",
  "uharr;": "↾",
  "uhblk;": "▀",
  "ultri;": "◸",
  "Umacr;": "Ū",
  "umacr;": "ū",
  "Union;": "⋃",
  "Uogon;": "Ų",
  "uogon;": "ų",
  "uplus;": "⊎",
  "upsih;": "ϒ",
  "UpTee;": "⊥",
  "Uring;": "Ů",
  "uring;": "ů",
  "urtri;": "◹",
  "utdot;": "⋰",
  "utrif;": "▴",
  "uuarr;": "⇈",
  "varpi;": "ϖ",
  "vBarv;": "⫩",
  "VDash;": "⊫",
  "Vdash;": "⊩",
  "vDash;": "⊨",
  "vdash;": "⊢",
  "veeeq;": "≚",
  "vltri;": "⊲",
  "vnsub;": "⊂⃒",
  "vnsup;": "⊃⃒",
  "vprop;": "∝",
  "vrtri;": "⊳",
  "Wcirc;": "Ŵ",
  "wcirc;": "ŵ",
  "Wedge;": "⋀",
  "wedge;": "∧",
  "xcirc;": "◯",
  "xdtri;": "▽",
  "xhArr;": "⟺",
  "xharr;": "⟷",
  "xlArr;": "⟸",
  "xlarr;": "⟵",
  "xodot;": "⨀",
  "xrArr;": "⟹",
  "xrarr;": "⟶",
  "xutri;": "△",
  Yacute: "Ý",
  yacute: "ý",
  "Ycirc;": "Ŷ",
  "ycirc;": "ŷ",
  "Aacute;": "Á",
  "aacute;": "á",
  "Abreve;": "Ă",
  "abreve;": "ă",
  "Agrave;": "À",
  "agrave;": "à",
  "andand;": "⩕",
  "angmsd;": "∡",
  "angsph;": "∢",
  "apacir;": "⩯",
  "approx;": "≈",
  "Assign;": "≔",
  "Atilde;": "Ã",
  "atilde;": "ã",
  "barvee;": "⊽",
  "Barwed;": "⌆",
  "barwed;": "⌅",
  "becaus;": "∵",
  "bernou;": "ℬ",
  "bigcap;": "⋂",
  "bigcup;": "⋃",
  "bigvee;": "⋁",
  "bkarow;": "⤍",
  "bottom;": "⊥",
  "bowtie;": "⋈",
  "boxbox;": "⧉",
  "bprime;": "‵",
  "brvbar;": "¦",
  "bullet;": "•",
  "Bumpeq;": "≎",
  "bumpeq;": "≏",
  "Cacute;": "Ć",
  "cacute;": "ć",
  "capand;": "⩄",
  "capcap;": "⩋",
  "capcup;": "⩇",
  "capdot;": "⩀",
  "Ccaron;": "Č",
  "ccaron;": "č",
  "Ccedil;": "Ç",
  "ccedil;": "ç",
  "circeq;": "≗",
  "cirmid;": "⫯",
  "Colone;": "⩴",
  "colone;": "≔",
  "commat;": "@",
  "compfn;": "∘",
  "Conint;": "∯",
  "conint;": "∮",
  "coprod;": "∐",
  "copysr;": "℗",
  "cularr;": "↶",
  "CupCap;": "≍",
  "cupcap;": "⩆",
  "cupcup;": "⩊",
  "cupdot;": "⊍",
  "curarr;": "↷",
  "curren;": "¤",
  "cylcty;": "⌭",
  "Dagger;": "‡",
  "dagger;": "†",
  "daleth;": "ℸ",
  "Dcaron;": "Ď",
  "dcaron;": "ď",
  "dfisht;": "⥿",
  "divide;": "÷",
  "divonx;": "⋇",
  "dlcorn;": "⌞",
  "dlcrop;": "⌍",
  "dollar;": "$",
  "DotDot;": "⃜",
  "drcorn;": "⌟",
  "drcrop;": "⌌",
  "Dstrok;": "Đ",
  "dstrok;": "đ",
  "Eacute;": "É",
  "eacute;": "é",
  "easter;": "⩮",
  "Ecaron;": "Ě",
  "ecaron;": "ě",
  "ecolon;": "≕",
  "Egrave;": "È",
  "egrave;": "è",
  "egsdot;": "⪘",
  "elsdot;": "⪗",
  "emptyv;": "∅",
  "emsp13;": " ",
  "emsp14;": " ",
  "eparsl;": "⧣",
  "eqcirc;": "≖",
  "equals;": "=",
  "equest;": "≟",
  "Exists;": "∃",
  "female;": "♀",
  "ffilig;": "ﬃ",
  "ffllig;": "ﬄ",
  "ForAll;": "∀",
  "forall;": "∀",
  "frac12;": "½",
  "frac13;": "⅓",
  "frac14;": "¼",
  "frac15;": "⅕",
  "frac16;": "⅙",
  "frac18;": "⅛",
  "frac23;": "⅔",
  "frac25;": "⅖",
  "frac34;": "¾",
  "frac35;": "⅗",
  "frac38;": "⅜",
  "frac45;": "⅘",
  "frac56;": "⅚",
  "frac58;": "⅝",
  "frac78;": "⅞",
  "gacute;": "ǵ",
  "Gammad;": "Ϝ",
  "gammad;": "ϝ",
  "Gbreve;": "Ğ",
  "gbreve;": "ğ",
  "Gcedil;": "Ģ",
  "gesdot;": "⪀",
  "gesles;": "⪔",
  "gtlPar;": "⦕",
  "gtrarr;": "⥸",
  "gtrdot;": "⋗",
  "gtrsim;": "≳",
  "hairsp;": " ",
  "hamilt;": "ℋ",
  "HARDcy;": "Ъ",
  "hardcy;": "ъ",
  "hearts;": "♥",
  "hellip;": "…",
  "hercon;": "⊹",
  "homtht;": "∻",
  "horbar;": "―",
  "hslash;": "ℏ",
  "Hstrok;": "Ħ",
  "hstrok;": "ħ",
  "hybull;": "⁃",
  "hyphen;": "‐",
  "Iacute;": "Í",
  "iacute;": "í",
  "Igrave;": "Ì",
  "igrave;": "ì",
  "iiiint;": "⨌",
  "iinfin;": "⧜",
  "incare;": "℅",
  "inodot;": "ı",
  "intcal;": "⊺",
  "iquest;": "¿",
  "isinsv;": "⋳",
  "Itilde;": "Ĩ",
  "itilde;": "ĩ",
  "Jsercy;": "Ј",
  "jsercy;": "ј",
  "kappav;": "ϰ",
  "Kcedil;": "Ķ",
  "kcedil;": "ķ",
  "kgreen;": "ĸ",
  "Lacute;": "Ĺ",
  "lacute;": "ĺ",
  "lagran;": "ℒ",
  "Lambda;": "Λ",
  "lambda;": "λ",
  "langle;": "⟨",
  "larrfs;": "⤝",
  "larrhk;": "↩",
  "larrlp;": "↫",
  "larrpl;": "⤹",
  "larrtl;": "↢",
  "lAtail;": "⤛",
  "latail;": "⤙",
  "lbrace;": "{",
  "lbrack;": "[",
  "Lcaron;": "Ľ",
  "lcaron;": "ľ",
  "Lcedil;": "Ļ",
  "lcedil;": "ļ",
  "ldquor;": "„",
  "lesdot;": "⩿",
  "lesges;": "⪓",
  "lfisht;": "⥼",
  "lfloor;": "⌊",
  "lharul;": "⥪",
  "llhard;": "⥫",
  "Lmidot;": "Ŀ",
  "lmidot;": "ŀ",
  "lmoust;": "⎰",
  "loplus;": "⨭",
  "lowast;": "∗",
  "lowbar;": "_",
  "lparlt;": "⦓",
  "lrhard;": "⥭",
  "lsaquo;": "‹",
  "lsquor;": "‚",
  "Lstrok;": "Ł",
  "lstrok;": "ł",
  "lthree;": "⋋",
  "ltimes;": "⋉",
  "ltlarr;": "⥶",
  "ltrPar;": "⦖",
  "mapsto;": "↦",
  "marker;": "▮",
  "mcomma;": "⨩",
  "midast;": "*",
  "midcir;": "⫰",
  "middot;": "·",
  "minusb;": "⊟",
  "minusd;": "∸",
  "mnplus;": "∓",
  "models;": "⊧",
  "mstpos;": "∾",
  "Nacute;": "Ń",
  "nacute;": "ń",
  "nbumpe;": "≏̸",
  "Ncaron;": "Ň",
  "ncaron;": "ň",
  "Ncedil;": "Ņ",
  "ncedil;": "ņ",
  "nearhk;": "⤤",
  "nequiv;": "≢",
  "nesear;": "⤨",
  "nexist;": "∄",
  "nltrie;": "⋬",
  "notinE;": "⋹̸",
  "nparsl;": "⫽⃥",
  "nprcue;": "⋠",
  "nrarrc;": "⤳̸",
  "nrarrw;": "↝̸",
  "nrtrie;": "⋭",
  "nsccue;": "⋡",
  "nsimeq;": "≄",
  "Ntilde;": "Ñ",
  "ntilde;": "ñ",
  "numero;": "№",
  "nVDash;": "⊯",
  "nVdash;": "⊮",
  "nvDash;": "⊭",
  "nvdash;": "⊬",
  "nvHarr;": "⤄",
  "nvlArr;": "⤂",
  "nvrArr;": "⤃",
  "nwarhk;": "⤣",
  "nwnear;": "⤧",
  "Oacute;": "Ó",
  "oacute;": "ó",
  "Odblac;": "Ő",
  "odblac;": "ő",
  "odsold;": "⦼",
  "Ograve;": "Ò",
  "ograve;": "ò",
  "ominus;": "⊖",
  "origof;": "⊶",
  "Oslash;": "Ø",
  "oslash;": "ø",
  "Otilde;": "Õ",
  "otilde;": "õ",
  "Otimes;": "⨷",
  "otimes;": "⊗",
  "parsim;": "⫳",
  "percnt;": "%",
  "period;": ".",
  "permil;": "‰",
  "phmmat;": "ℳ",
  "planck;": "ℏ",
  "plankv;": "ℏ",
  "plusdo;": "∔",
  "plusdu;": "⨥",
  "plusmn;": "±",
  "preceq;": "⪯",
  "primes;": "ℙ",
  "prnsim;": "⋨",
  "propto;": "∝",
  "prurel;": "⊰",
  "puncsp;": " ",
  "qprime;": "⁗",
  "Racute;": "Ŕ",
  "racute;": "ŕ",
  "rangle;": "⟩",
  "rarrap;": "⥵",
  "rarrfs;": "⤞",
  "rarrhk;": "↪",
  "rarrlp;": "↬",
  "rarrpl;": "⥅",
  "Rarrtl;": "⤖",
  "rarrtl;": "↣",
  "rAtail;": "⤜",
  "ratail;": "⤚",
  "rbrace;": "}",
  "rbrack;": "]",
  "Rcaron;": "Ř",
  "rcaron;": "ř",
  "Rcedil;": "Ŗ",
  "rcedil;": "ŗ",
  "rdquor;": "”",
  "rfisht;": "⥽",
  "rfloor;": "⌋",
  "rharul;": "⥬",
  "rmoust;": "⎱",
  "roplus;": "⨮",
  "rpargt;": "⦔",
  "rsaquo;": "›",
  "rsquor;": "’",
  "rthree;": "⋌",
  "rtimes;": "⋊",
  "Sacute;": "Ś",
  "sacute;": "ś",
  "Scaron;": "Š",
  "scaron;": "š",
  "Scedil;": "Ş",
  "scedil;": "ş",
  "scnsim;": "⋩",
  "searhk;": "⤥",
  "seswar;": "⤩",
  "sfrown;": "⌢",
  "SHCHcy;": "Щ",
  "shchcy;": "щ",
  "sigmaf;": "ς",
  "sigmav;": "ς",
  "simdot;": "⩪",
  "smashp;": "⨳",
  "SOFTcy;": "Ь",
  "softcy;": "ь",
  "solbar;": "⌿",
  "spades;": "♠",
  "sqcaps;": "⊓︀",
  "sqcups;": "⊔︀",
  "sqsube;": "⊑",
  "sqsupe;": "⊒",
  "Square;": "□",
  "square;": "□",
  "squarf;": "▪",
  "ssetmn;": "∖",
  "ssmile;": "⌣",
  "sstarf;": "⋆",
  "subdot;": "⪽",
  "Subset;": "⋐",
  "subset;": "⊂",
  "subsim;": "⫇",
  "subsub;": "⫕",
  "subsup;": "⫓",
  "succeq;": "⪰",
  "supdot;": "⪾",
  "Supset;": "⋑",
  "supset;": "⊃",
  "supsim;": "⫈",
  "supsub;": "⫔",
  "supsup;": "⫖",
  "swarhk;": "⤦",
  "swnwar;": "⤪",
  "target;": "⌖",
  "Tcaron;": "Ť",
  "tcaron;": "ť",
  "Tcedil;": "Ţ",
  "tcedil;": "ţ",
  "telrec;": "⌕",
  "there4;": "∴",
  "thetav;": "ϑ",
  "thinsp;": " ",
  "thksim;": "∼",
  "timesb;": "⊠",
  "timesd;": "⨰",
  "topbot;": "⌶",
  "topcir;": "⫱",
  "tprime;": "‴",
  "tridot;": "◬",
  "Tstrok;": "Ŧ",
  "tstrok;": "ŧ",
  "Uacute;": "Ú",
  "uacute;": "ú",
  "Ubreve;": "Ŭ",
  "ubreve;": "ŭ",
  "Udblac;": "Ű",
  "udblac;": "ű",
  "ufisht;": "⥾",
  "Ugrave;": "Ù",
  "ugrave;": "ù",
  "ulcorn;": "⌜",
  "ulcrop;": "⌏",
  "urcorn;": "⌝",
  "urcrop;": "⌎",
  "Utilde;": "Ũ",
  "utilde;": "ũ",
  "vangrt;": "⦜",
  "varphi;": "ϕ",
  "varrho;": "ϱ",
  "Vdashl;": "⫦",
  "veebar;": "⊻",
  "vellip;": "⋮",
  "Verbar;": "‖",
  "verbar;": "|",
  "vsubnE;": "⫋︀",
  "vsubne;": "⊊︀",
  "vsupnE;": "⫌︀",
  "vsupne;": "⊋︀",
  "Vvdash;": "⊪",
  "wedbar;": "⩟",
  "wedgeq;": "≙",
  "weierp;": "℘",
  "wreath;": "≀",
  "xoplus;": "⨁",
  "xotime;": "⨂",
  "xsqcup;": "⨆",
  "xuplus;": "⨄",
  "xwedge;": "⋀",
  "Yacute;": "Ý",
  "yacute;": "ý",
  "Zacute;": "Ź",
  "zacute;": "ź",
  "Zcaron;": "Ž",
  "zcaron;": "ž",
  "zeetrf;": "ℨ",
  "alefsym;": "ℵ",
  "angrtvb;": "⊾",
  "angzarr;": "⍼",
  "asympeq;": "≍",
  "backsim;": "∽",
  "Because;": "∵",
  "because;": "∵",
  "bemptyv;": "⦰",
  "between;": "≬",
  "bigcirc;": "◯",
  "bigodot;": "⨀",
  "bigstar;": "★",
  "bnequiv;": "≡⃥",
  "boxplus;": "⊞",
  "Cayleys;": "ℭ",
  "Cconint;": "∰",
  "ccupssm;": "⩐",
  "Cedilla;": "¸",
  "cemptyv;": "⦲",
  "cirscir;": "⧂",
  "coloneq;": "≔",
  "congdot;": "⩭",
  "cudarrl;": "⤸",
  "cudarrr;": "⤵",
  "cularrp;": "⤽",
  "curarrm;": "⤼",
  "dbkarow;": "⤏",
  "ddagger;": "‡",
  "ddotseq;": "⩷",
  "demptyv;": "⦱",
  "Diamond;": "⋄",
  "diamond;": "⋄",
  "digamma;": "ϝ",
  "dotplus;": "∔",
  "DownTee;": "⊤",
  "dwangle;": "⦦",
  "Element;": "∈",
  "Epsilon;": "Ε",
  "epsilon;": "ε",
  "eqcolon;": "≕",
  "equivDD;": "⩸",
  "gesdoto;": "⪂",
  "gtquest;": "⩼",
  "gtrless;": "≷",
  "harrcir;": "⥈",
  "Implies;": "⇒",
  "intprod;": "⨼",
  "isindot;": "⋵",
  "larrbfs;": "⤟",
  "larrsim;": "⥳",
  "lbrksld;": "⦏",
  "lbrkslu;": "⦍",
  "ldrdhar;": "⥧",
  "LeftTee;": "⊣",
  "lesdoto;": "⪁",
  "lessdot;": "⋖",
  "lessgtr;": "≶",
  "lesssim;": "≲",
  "lotimes;": "⨴",
  "lozenge;": "◊",
  "ltquest;": "⩻",
  "luruhar;": "⥦",
  "maltese;": "✠",
  "minusdu;": "⨪",
  "napprox;": "≉",
  "natural;": "♮",
  "nearrow;": "↗",
  "NewLine;": `
`,
  "nexists;": "∄",
  "NoBreak;": "⁠",
  "notinva;": "∉",
  "notinvb;": "⋷",
  "notinvc;": "⋶",
  "NotLess;": "≮",
  "notniva;": "∌",
  "notnivb;": "⋾",
  "notnivc;": "⋽",
  "npolint;": "⨔",
  "npreceq;": "⪯̸",
  "nsqsube;": "⋢",
  "nsqsupe;": "⋣",
  "nsubset;": "⊂⃒",
  "nsucceq;": "⪰̸",
  "nsupset;": "⊃⃒",
  "nvinfin;": "⧞",
  "nvltrie;": "⊴⃒",
  "nvrtrie;": "⊵⃒",
  "nwarrow;": "↖",
  "olcross;": "⦻",
  "Omicron;": "Ο",
  "omicron;": "ο",
  "orderof;": "ℴ",
  "orslope;": "⩗",
  "OverBar;": "‾",
  "pertenk;": "‱",
  "planckh;": "ℎ",
  "pluscir;": "⨢",
  "plussim;": "⨦",
  "plustwo;": "⨧",
  "precsim;": "≾",
  "Product;": "∏",
  "quatint;": "⨖",
  "questeq;": "≟",
  "rarrbfs;": "⤠",
  "rarrsim;": "⥴",
  "rbrksld;": "⦎",
  "rbrkslu;": "⦐",
  "rdldhar;": "⥩",
  "realine;": "ℛ",
  "rotimes;": "⨵",
  "ruluhar;": "⥨",
  "searrow;": "↘",
  "simplus;": "⨤",
  "simrarr;": "⥲",
  "subedot;": "⫃",
  "submult;": "⫁",
  "subplus;": "⪿",
  "subrarr;": "⥹",
  "succsim;": "≿",
  "supdsub;": "⫘",
  "supedot;": "⫄",
  "suphsol;": "⟉",
  "suphsub;": "⫗",
  "suplarr;": "⥻",
  "supmult;": "⫂",
  "supplus;": "⫀",
  "swarrow;": "↙",
  "topfork;": "⫚",
  "triplus;": "⨹",
  "tritime;": "⨻",
  "UpArrow;": "↑",
  "Uparrow;": "⇑",
  "uparrow;": "↑",
  "Upsilon;": "Υ",
  "upsilon;": "υ",
  "uwangle;": "⦧",
  "vzigzag;": "⦚",
  "zigrarr;": "⇝",
  "andslope;": "⩘",
  "angmsdaa;": "⦨",
  "angmsdab;": "⦩",
  "angmsdac;": "⦪",
  "angmsdad;": "⦫",
  "angmsdae;": "⦬",
  "angmsdaf;": "⦭",
  "angmsdag;": "⦮",
  "angmsdah;": "⦯",
  "angrtvbd;": "⦝",
  "approxeq;": "≊",
  "awconint;": "∳",
  "backcong;": "≌",
  "barwedge;": "⌅",
  "bbrktbrk;": "⎶",
  "bigoplus;": "⨁",
  "bigsqcup;": "⨆",
  "biguplus;": "⨄",
  "bigwedge;": "⋀",
  "boxminus;": "⊟",
  "boxtimes;": "⊠",
  "bsolhsub;": "⟈",
  "capbrcup;": "⩉",
  "circledR;": "®",
  "circledS;": "Ⓢ",
  "cirfnint;": "⨐",
  "clubsuit;": "♣",
  "cupbrcap;": "⩈",
  "curlyvee;": "⋎",
  "cwconint;": "∲",
  "DDotrahd;": "⤑",
  "doteqdot;": "≑",
  "DotEqual;": "≐",
  "dotminus;": "∸",
  "drbkarow;": "⤐",
  "dzigrarr;": "⟿",
  "elinters;": "⏧",
  "emptyset;": "∅",
  "eqvparsl;": "⧥",
  "fpartint;": "⨍",
  "geqslant;": "⩾",
  "gesdotol;": "⪄",
  "gnapprox;": "⪊",
  "hksearow;": "⤥",
  "hkswarow;": "⤦",
  "imagline;": "ℐ",
  "imagpart;": "ℑ",
  "infintie;": "⧝",
  "integers;": "ℤ",
  "Integral;": "∫",
  "intercal;": "⊺",
  "intlarhk;": "⨗",
  "laemptyv;": "⦴",
  "ldrushar;": "⥋",
  "leqslant;": "⩽",
  "lesdotor;": "⪃",
  "LessLess;": "⪡",
  "llcorner;": "⌞",
  "lnapprox;": "⪉",
  "lrcorner;": "⌟",
  "lurdshar;": "⥊",
  "mapstoup;": "↥",
  "multimap;": "⊸",
  "naturals;": "ℕ",
  "ncongdot;": "⩭̸",
  "NotEqual;": "≠",
  "notindot;": "⋵̸",
  "NotTilde;": "≁",
  "otimesas;": "⨶",
  "parallel;": "∥",
  "PartialD;": "∂",
  "plusacir;": "⨣",
  "pointint;": "⨕",
  "Precedes;": "≺",
  "precneqq;": "⪵",
  "precnsim;": "⋨",
  "profalar;": "⌮",
  "profline;": "⌒",
  "profsurf;": "⌓",
  "raemptyv;": "⦳",
  "realpart;": "ℜ",
  "RightTee;": "⊢",
  "rppolint;": "⨒",
  "rtriltri;": "⧎",
  "scpolint;": "⨓",
  "setminus;": "∖",
  "shortmid;": "∣",
  "smeparsl;": "⧤",
  "sqsubset;": "⊏",
  "sqsupset;": "⊐",
  "subseteq;": "⊆",
  "Succeeds;": "≻",
  "succneqq;": "⪶",
  "succnsim;": "⋩",
  "SuchThat;": "∋",
  "Superset;": "⊃",
  "supseteq;": "⊇",
  "thetasym;": "ϑ",
  "thicksim;": "∼",
  "timesbar;": "⨱",
  "triangle;": "▵",
  "triminus;": "⨺",
  "trpezium;": "⏢",
  "Uarrocir;": "⥉",
  "ulcorner;": "⌜",
  "UnderBar;": "_",
  "urcorner;": "⌝",
  "varkappa;": "ϰ",
  "varsigma;": "ς",
  "vartheta;": "ϑ",
  "backprime;": "‵",
  "backsimeq;": "⋍",
  "Backslash;": "∖",
  "bigotimes;": "⨂",
  "CenterDot;": "·",
  "centerdot;": "·",
  "checkmark;": "✓",
  "CircleDot;": "⊙",
  "complexes;": "ℂ",
  "Congruent;": "≡",
  "Coproduct;": "∐",
  "dotsquare;": "⊡",
  "DoubleDot;": "¨",
  "DownArrow;": "↓",
  "Downarrow;": "⇓",
  "downarrow;": "↓",
  "DownBreve;": "̑",
  "gtrapprox;": "⪆",
  "gtreqless;": "⋛",
  "gvertneqq;": "≩︀",
  "heartsuit;": "♥",
  "HumpEqual;": "≏",
  "LeftArrow;": "←",
  "Leftarrow;": "⇐",
  "leftarrow;": "←",
  "LeftFloor;": "⌊",
  "lesseqgtr;": "⋚",
  "LessTilde;": "≲",
  "lvertneqq;": "≨︀",
  "Mellintrf;": "ℳ",
  "MinusPlus;": "∓",
  "ngeqslant;": "⩾̸",
  "nleqslant;": "⩽̸",
  "NotCupCap;": "≭",
  "NotExists;": "∄",
  "NotSubset;": "⊂⃒",
  "nparallel;": "∦",
  "nshortmid;": "∤",
  "nsubseteq;": "⊈",
  "nsupseteq;": "⊉",
  "OverBrace;": "⏞",
  "pitchfork;": "⋔",
  "PlusMinus;": "±",
  "rationals;": "ℚ",
  "spadesuit;": "♠",
  "subseteqq;": "⫅",
  "subsetneq;": "⊊",
  "supseteqq;": "⫆",
  "supsetneq;": "⊋",
  "Therefore;": "∴",
  "therefore;": "∴",
  "ThinSpace;": " ",
  "triangleq;": "≜",
  "TripleDot;": "⃛",
  "UnionPlus;": "⊎",
  "varpropto;": "∝",
  "Bernoullis;": "ℬ",
  "circledast;": "⊛",
  "CirclePlus;": "⊕",
  "complement;": "∁",
  "curlywedge;": "⋏",
  "eqslantgtr;": "⪖",
  "EqualTilde;": "≂",
  "Fouriertrf;": "ℱ",
  "gtreqqless;": "⪌",
  "ImaginaryI;": "ⅈ",
  "Laplacetrf;": "ℒ",
  "LeftVector;": "↼",
  "lessapprox;": "⪅",
  "lesseqqgtr;": "⪋",
  "Lleftarrow;": "⇚",
  "lmoustache;": "⎰",
  "longmapsto;": "⟼",
  "mapstodown;": "↧",
  "mapstoleft;": "↤",
  "nLeftarrow;": "⇍",
  "nleftarrow;": "↚",
  "NotElement;": "∉",
  "NotGreater;": "≯",
  "nsubseteqq;": "⫅̸",
  "nsupseteqq;": "⫆̸",
  "precapprox;": "⪷",
  "Proportion;": "∷",
  "RightArrow;": "→",
  "Rightarrow;": "⇒",
  "rightarrow;": "→",
  "RightFloor;": "⌋",
  "rmoustache;": "⎱",
  "sqsubseteq;": "⊑",
  "sqsupseteq;": "⊒",
  "subsetneqq;": "⫋",
  "succapprox;": "⪸",
  "supsetneqq;": "⫌",
  "ThickSpace;": "  ",
  "TildeEqual;": "≃",
  "TildeTilde;": "≈",
  "UnderBrace;": "⏟",
  "UpArrowBar;": "⤒",
  "UpTeeArrow;": "↥",
  "upuparrows;": "⇈",
  "varepsilon;": "ϵ",
  "varnothing;": "∅",
  "backepsilon;": "϶",
  "blacksquare;": "▪",
  "circledcirc;": "⊚",
  "circleddash;": "⊝",
  "CircleMinus;": "⊖",
  "CircleTimes;": "⊗",
  "curlyeqprec;": "⋞",
  "curlyeqsucc;": "⋟",
  "diamondsuit;": "♦",
  "eqslantless;": "⪕",
  "Equilibrium;": "⇌",
  "expectation;": "ℰ",
  "GreaterLess;": "≷",
  "LeftCeiling;": "⌈",
  "LessGreater;": "≶",
  "MediumSpace;": " ",
  "NotLessLess;": "≪̸",
  "NotPrecedes;": "⊀",
  "NotSucceeds;": "⊁",
  "NotSuperset;": "⊃⃒",
  "nRightarrow;": "⇏",
  "nrightarrow;": "↛",
  "OverBracket;": "⎴",
  "preccurlyeq;": "≼",
  "precnapprox;": "⪹",
  "quaternions;": "ℍ",
  "RightVector;": "⇀",
  "Rrightarrow;": "⇛",
  "RuleDelayed;": "⧴",
  "SmallCircle;": "∘",
  "SquareUnion;": "⊔",
  "straightphi;": "ϕ",
  "SubsetEqual;": "⊆",
  "succcurlyeq;": "≽",
  "succnapprox;": "⪺",
  "thickapprox;": "≈",
  "UpDownArrow;": "↕",
  "Updownarrow;": "⇕",
  "updownarrow;": "↕",
  "VerticalBar;": "∣",
  "blacklozenge;": "⧫",
  "DownArrowBar;": "⤓",
  "DownTeeArrow;": "↧",
  "ExponentialE;": "ⅇ",
  "exponentiale;": "ⅇ",
  "GreaterEqual;": "≥",
  "GreaterTilde;": "≳",
  "HilbertSpace;": "ℋ",
  "HumpDownHump;": "≎",
  "Intersection;": "⋂",
  "LeftArrowBar;": "⇤",
  "LeftTeeArrow;": "↤",
  "LeftTriangle;": "⊲",
  "LeftUpVector;": "↿",
  "NotCongruent;": "≢",
  "NotHumpEqual;": "≏̸",
  "NotLessEqual;": "≰",
  "NotLessTilde;": "≴",
  "Proportional;": "∝",
  "RightCeiling;": "⌉",
  "risingdotseq;": "≓",
  "RoundImplies;": "⥰",
  "ShortUpArrow;": "↑",
  "SquareSubset;": "⊏",
  "triangledown;": "▿",
  "triangleleft;": "◃",
  "UnderBracket;": "⎵",
  "varsubsetneq;": "⊊︀",
  "varsupsetneq;": "⊋︀",
  "VerticalLine;": "|",
  "ApplyFunction;": "⁡",
  "bigtriangleup;": "△",
  "blacktriangle;": "▴",
  "DifferentialD;": "ⅆ",
  "divideontimes;": "⋇",
  "DoubleLeftTee;": "⫤",
  "DoubleUpArrow;": "⇑",
  "fallingdotseq;": "≒",
  "hookleftarrow;": "↩",
  "leftarrowtail;": "↢",
  "leftharpoonup;": "↼",
  "LeftTeeVector;": "⥚",
  "LeftVectorBar;": "⥒",
  "LessFullEqual;": "≦",
  "LongLeftArrow;": "⟵",
  "Longleftarrow;": "⟸",
  "longleftarrow;": "⟵",
  "looparrowleft;": "↫",
  "measuredangle;": "∡",
  "NotEqualTilde;": "≂̸",
  "NotTildeEqual;": "≄",
  "NotTildeTilde;": "≉",
  "ntriangleleft;": "⋪",
  "Poincareplane;": "ℌ",
  "PrecedesEqual;": "⪯",
  "PrecedesTilde;": "≾",
  "RightArrowBar;": "⇥",
  "RightTeeArrow;": "↦",
  "RightTriangle;": "⊳",
  "RightUpVector;": "↾",
  "shortparallel;": "∥",
  "smallsetminus;": "∖",
  "SucceedsEqual;": "⪰",
  "SucceedsTilde;": "≿",
  "SupersetEqual;": "⊇",
  "triangleright;": "▹",
  "UpEquilibrium;": "⥮",
  "upharpoonleft;": "↿",
  "varsubsetneqq;": "⫋︀",
  "varsupsetneqq;": "⫌︀",
  "VerticalTilde;": "≀",
  "VeryThinSpace;": " ",
  "curvearrowleft;": "↶",
  "DiacriticalDot;": "˙",
  "doublebarwedge;": "⌆",
  "DoubleRightTee;": "⊨",
  "downdownarrows;": "⇊",
  "DownLeftVector;": "↽",
  "GreaterGreater;": "⪢",
  "hookrightarrow;": "↪",
  "HorizontalLine;": "─",
  "InvisibleComma;": "⁣",
  "InvisibleTimes;": "⁢",
  "LeftDownVector;": "⇃",
  "leftleftarrows;": "⇇",
  "LeftRightArrow;": "↔",
  "Leftrightarrow;": "⇔",
  "leftrightarrow;": "↔",
  "leftthreetimes;": "⋋",
  "LessSlantEqual;": "⩽",
  "LongRightArrow;": "⟶",
  "Longrightarrow;": "⟹",
  "longrightarrow;": "⟶",
  "looparrowright;": "↬",
  "LowerLeftArrow;": "↙",
  "NestedLessLess;": "≪",
  "NotGreaterLess;": "≹",
  "NotLessGreater;": "≸",
  "NotSubsetEqual;": "⊈",
  "NotVerticalBar;": "∤",
  "nshortparallel;": "∦",
  "ntriangleright;": "⋫",
  "OpenCurlyQuote;": "‘",
  "ReverseElement;": "∋",
  "rightarrowtail;": "↣",
  "rightharpoonup;": "⇀",
  "RightTeeVector;": "⥛",
  "RightVectorBar;": "⥓",
  "ShortDownArrow;": "↓",
  "ShortLeftArrow;": "←",
  "SquareSuperset;": "⊐",
  "TildeFullEqual;": "≅",
  "trianglelefteq;": "⊴",
  "upharpoonright;": "↾",
  "UpperLeftArrow;": "↖",
  "ZeroWidthSpace;": "​",
  "bigtriangledown;": "▽",
  "circlearrowleft;": "↺",
  "CloseCurlyQuote;": "’",
  "ContourIntegral;": "∮",
  "curvearrowright;": "↷",
  "DoubleDownArrow;": "⇓",
  "DoubleLeftArrow;": "⇐",
  "downharpoonleft;": "⇃",
  "DownRightVector;": "⇁",
  "leftharpoondown;": "↽",
  "leftrightarrows;": "⇆",
  "LeftRightVector;": "⥎",
  "LeftTriangleBar;": "⧏",
  "LeftUpTeeVector;": "⥠",
  "LeftUpVectorBar;": "⥘",
  "LowerRightArrow;": "↘",
  "nLeftrightarrow;": "⇎",
  "nleftrightarrow;": "↮",
  "NotGreaterEqual;": "≱",
  "NotGreaterTilde;": "≵",
  "NotHumpDownHump;": "≎̸",
  "NotLeftTriangle;": "⋪",
  "NotSquareSubset;": "⊏̸",
  "ntrianglelefteq;": "⋬",
  "OverParenthesis;": "⏜",
  "RightDownVector;": "⇂",
  "rightleftarrows;": "⇄",
  "rightsquigarrow;": "↝",
  "rightthreetimes;": "⋌",
  "ShortRightArrow;": "→",
  "straightepsilon;": "ϵ",
  "trianglerighteq;": "⊵",
  "UpperRightArrow;": "↗",
  "vartriangleleft;": "⊲",
  "circlearrowright;": "↻",
  "DiacriticalAcute;": "´",
  "DiacriticalGrave;": "`",
  "DiacriticalTilde;": "˜",
  "DoubleRightArrow;": "⇒",
  "DownArrowUpArrow;": "⇵",
  "downharpoonright;": "⇂",
  "EmptySmallSquare;": "◻",
  "GreaterEqualLess;": "⋛",
  "GreaterFullEqual;": "≧",
  "LeftAngleBracket;": "⟨",
  "LeftUpDownVector;": "⥑",
  "LessEqualGreater;": "⋚",
  "NonBreakingSpace;": " ",
  "NotPrecedesEqual;": "⪯̸",
  "NotRightTriangle;": "⋫",
  "NotSucceedsEqual;": "⪰̸",
  "NotSucceedsTilde;": "≿̸",
  "NotSupersetEqual;": "⊉",
  "ntrianglerighteq;": "⋭",
  "rightharpoondown;": "⇁",
  "rightrightarrows;": "⇉",
  "RightTriangleBar;": "⧐",
  "RightUpTeeVector;": "⥜",
  "RightUpVectorBar;": "⥔",
  "twoheadleftarrow;": "↞",
  "UnderParenthesis;": "⏝",
  "UpArrowDownArrow;": "⇅",
  "vartriangleright;": "⊳",
  "blacktriangledown;": "▾",
  "blacktriangleleft;": "◂",
  "DoubleUpDownArrow;": "⇕",
  "DoubleVerticalBar;": "∥",
  "DownLeftTeeVector;": "⥞",
  "DownLeftVectorBar;": "⥖",
  "FilledSmallSquare;": "◼",
  "GreaterSlantEqual;": "⩾",
  "LeftDoubleBracket;": "⟦",
  "LeftDownTeeVector;": "⥡",
  "LeftDownVectorBar;": "⥙",
  "leftrightharpoons;": "⇋",
  "LeftTriangleEqual;": "⊴",
  "NegativeThinSpace;": "​",
  "NotGreaterGreater;": "≫̸",
  "NotLessSlantEqual;": "⩽̸",
  "NotNestedLessLess;": "⪡̸",
  "NotReverseElement;": "∌",
  "NotSquareSuperset;": "⊐̸",
  "NotTildeFullEqual;": "≇",
  "RightAngleBracket;": "⟩",
  "rightleftharpoons;": "⇌",
  "RightUpDownVector;": "⥏",
  "SquareSubsetEqual;": "⊑",
  "twoheadrightarrow;": "↠",
  "VerticalSeparator;": "❘",
  "blacktriangleright;": "▸",
  "DownRightTeeVector;": "⥟",
  "DownRightVectorBar;": "⥗",
  "LongLeftRightArrow;": "⟷",
  "Longleftrightarrow;": "⟺",
  "longleftrightarrow;": "⟷",
  "NegativeThickSpace;": "​",
  "NotLeftTriangleBar;": "⧏̸",
  "PrecedesSlantEqual;": "≼",
  "ReverseEquilibrium;": "⇋",
  "RightDoubleBracket;": "⟧",
  "RightDownTeeVector;": "⥝",
  "RightDownVectorBar;": "⥕",
  "RightTriangleEqual;": "⊵",
  "SquareIntersection;": "⊓",
  "SucceedsSlantEqual;": "≽",
  "DoubleLongLeftArrow;": "⟸",
  "DownLeftRightVector;": "⥐",
  "LeftArrowRightArrow;": "⇆",
  "leftrightsquigarrow;": "↭",
  "NegativeMediumSpace;": "​",
  "NotGreaterFullEqual;": "≧̸",
  "NotRightTriangleBar;": "⧐̸",
  "RightArrowLeftArrow;": "⇄",
  "SquareSupersetEqual;": "⊒",
  "CapitalDifferentialD;": "ⅅ",
  "DoubleLeftRightArrow;": "⇔",
  "DoubleLongRightArrow;": "⟹",
  "EmptyVerySmallSquare;": "▫",
  "NestedGreaterGreater;": "≫",
  "NotDoubleVerticalBar;": "∦",
  "NotGreaterSlantEqual;": "⩾̸",
  "NotLeftTriangleEqual;": "⋬",
  "NotSquareSubsetEqual;": "⋢",
  "OpenCurlyDoubleQuote;": "“",
  "ReverseUpEquilibrium;": "⥯",
  "CloseCurlyDoubleQuote;": "”",
  "DoubleContourIntegral;": "∯",
  "FilledVerySmallSquare;": "▪",
  "NegativeVeryThinSpace;": "​",
  "NotPrecedesSlantEqual;": "⋠",
  "NotRightTriangleEqual;": "⋭",
  "NotSucceedsSlantEqual;": "⋡",
  "DiacriticalDoubleAcute;": "˝",
  "NotSquareSupersetEqual;": "⋣",
  "NotNestedGreaterGreater;": "⪢̸",
  "ClockwiseContourIntegral;": "∲",
  "DoubleLongLeftRightArrow;": "⟺",
  "CounterClockwiseContourIntegral;": "∳"
};
var Xa;
var $v = (s3, e) => {
  let t = 0;
  const r = s3.length;
  let i = "";
  function n(a) {
    t += a, s3 = s3.slice(a);
  }
  for (; t < r; ) {
    const a = /&(?:#x?)?/i.exec(s3);
    if (!a || t + a.index >= r) {
      const o = r - t;
      i += s3.slice(0, o), n(o);
      break;
    }
    if (i += s3.slice(0, a.index), n(a.index), a[0] === "&") {
      let o = "", l;
      if (/[0-9a-z]/i.test(s3[1])) {
        Xa || (Xa = Object.keys(Bc).reduce((u, c) => Math.max(u, c.length), 0));
        for (let u = Xa; !l && u > 0; --u)
          o = s3.slice(1, 1 + u), l = Bc[o];
        if (l) {
          const u = o.endsWith(";");
          e && !u && /[=a-z0-9]/i.test(s3[o.length + 1] || "") ? (i += "&" + o, n(1 + o.length)) : (i += l, n(1 + o.length));
        } else
          i += "&" + o, n(1 + o.length);
      } else
        i += "&", n(1);
    } else {
      const o = a[0] === "&#x", u = (o ? /^&#x([0-9a-f]+);?/i : /^&#([0-9]+);?/).exec(s3);
      if (!u)
        i += a[0], n(a[0].length);
      else {
        let c = Number.parseInt(u[1], o ? 16 : 10);
        c === 0 || c > 1114111 || c >= 55296 && c <= 57343 ? c = 65533 : c >= 64976 && c <= 65007 || (c & 65534) === 65534 || (c >= 1 && c <= 8 || c === 11 || c >= 13 && c <= 31 || c >= 127 && c <= 159) && (c = Uv[c] || c), i += String.fromCodePoint(c), n(u[0].length);
      }
    }
  }
  return i;
};
var Uv = {
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var jv = Re("style,iframe,script,noscript", true);
var ms = {
  isVoidTag: $h,
  isNativeTag: (s3) => sg(s3) || ig(s3),
  isPreTag: (s3) => s3 === "pre",
  decodeEntities: $v,
  isBuiltInComponent: (s3) => {
    if (wt(s3, "Transition"))
      return Is;
    if (wt(s3, "TransitionGroup"))
      return Fi;
  },
  getNamespace(s3, e) {
    let t = e ? e.ns : 0;
    if (e && t === 2)
      if (e.tag === "annotation-xml") {
        if (s3 === "svg")
          return 1;
        e.props.some((r) => r.type === 6 && r.name === "encoding" && r.value != null && (r.value.content === "text/html" || r.value.content === "application/xhtml+xml")) && (t = 0);
      } else
        /^m(?:[ions]|text)$/.test(e.tag) && s3 !== "mglyph" && s3 !== "malignmark" && (t = 0);
    else
      e && t === 1 && (e.tag === "foreignObject" || e.tag === "desc" || e.tag === "title") && (t = 0);
    if (t === 0) {
      if (s3 === "svg")
        return 1;
      if (s3 === "math")
        return 2;
    }
    return t;
  },
  getTextMode({ tag: s3, ns: e }) {
    if (e === 0) {
      if (s3 === "textarea" || s3 === "title")
        return 1;
      if (jv(s3))
        return 2;
    }
    return 0;
  }
};
var vu = (s3) => {
  s3.type === 1 && s3.props.forEach((e, t) => {
    e.type === 6 && e.name === "style" && e.value && (s3.props[t] = {
      type: 7,
      name: "bind",
      arg: G("style", true, e.loc),
      exp: qv(e.value.content, e.loc),
      modifiers: [],
      loc: e.loc
    });
  });
};
var qv = (s3, e) => {
  const t = Fh(s3);
  return G(JSON.stringify(t), false, e, 3);
};
function Je(s3, e) {
  return Te(s3, e, Vv);
}
var Vv = {
  [50]: "v-html is missing expression.",
  [51]: "v-html will override element children.",
  [52]: "v-text is missing expression.",
  [53]: "v-text will override element children.",
  [54]: "v-model can only be used on <input>, <textarea> and <select> elements.",
  [55]: "v-model argument is not supported on plain elements.",
  [56]: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  [57]: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  [58]: "v-show is missing expression.",
  [59]: "<Transition> expects exactly one child element or component.",
  [60]: "Tags with side effect (<script> and <style>) are ignored in client component templates."
};
var zv = (s3, e, t) => {
  const { exp: r, loc: i } = s3;
  return r || t.onError(Je(50, i)), e.children.length && (t.onError(Je(51, i)), e.children.length = 0), {
    props: [
      Pe(G("innerHTML", true, i), r || G("", true))
    ]
  };
};
var Gv = (s3, e, t) => {
  const { exp: r, loc: i } = s3;
  return r || t.onError(Je(52, i)), e.children.length && (t.onError(Je(53, i)), e.children.length = 0), {
    props: [
      Pe(G("textContent", true), r ? ot(r, t) > 0 ? r : ae(t.helperString(Ni), [r], i) : G("", true))
    ]
  };
};
var Wv = (s3, e, t) => {
  const r = Ea(s3, e, t);
  if (!r.props.length || e.tagType === 1)
    return r;
  s3.arg && t.onError(Je(55, s3.arg.loc));
  function i() {
    const o = lt(e, "value");
    o && t.onError(Je(57, o.loc));
  }
  const { tag: n } = e, a = t.isCustomElement(n);
  if (n === "input" || n === "textarea" || n === "select" || a) {
    let o = fu, l = false;
    if (n === "input" || a) {
      const u = lt(e, "type");
      if (u) {
        if (u.type === 7)
          o = Nn;
        else if (u.value)
          switch (u.value.content) {
            case "radio":
              o = hu;
              break;
            case "checkbox":
              o = pu;
              break;
            case "file":
              l = true, t.onError(Je(56, s3.loc));
              break;
            default:
              i();
              break;
          }
      } else
        ua(e) ? o = Nn : i();
    } else
      n === "select" ? o = du : i();
    l || (r.needRuntime = t.helper(o));
  } else
    t.onError(Je(54, s3.loc));
  return r.props = r.props.filter((o) => !(o.key.type === 4 && o.key.content === "modelValue")), r;
};
var Hv = Re("passive,once,capture");
var Kv = Re("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
var Yv = Re("left,right");
var ef = Re("onkeyup,onkeydown,onkeypress", true);
var Jv = (s3, e, t, r) => {
  const i = [], n = [], a = [];
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    Hv(l) ? a.push(l) : Yv(l) ? Qe(s3) ? ef(s3.content) ? i.push(l) : n.push(l) : (i.push(l), n.push(l)) : Kv(l) ? n.push(l) : i.push(l);
  }
  return {
    keyModifiers: i,
    nonKeyModifiers: n,
    eventOptionModifiers: a
  };
};
var $c = (s3, e) => Qe(s3) && s3.content.toLowerCase() === "onclick" ? G(e, true) : s3.type !== 4 ? je([
  "(",
  s3,
  `) === "onClick" ? "${e}" : (`,
  s3,
  ")"
]) : s3;
var Qv = (s3, e, t) => wa(s3, e, t, (r) => {
  const { modifiers: i } = s3;
  if (!i.length)
    return r;
  let { key: n, value: a } = r.props[0];
  const { keyModifiers: o, nonKeyModifiers: l, eventOptionModifiers: u } = Jv(n, i, t, s3.loc);
  if (l.includes("right") && (n = $c(n, "onContextmenu")), l.includes("middle") && (n = $c(n, "onMouseup")), l.length && (a = ae(t.helper(mu), [
    a,
    JSON.stringify(l)
  ])), o.length && (!Qe(n) || ef(n.content)) && (a = ae(t.helper(gu), [
    a,
    JSON.stringify(o)
  ])), u.length) {
    const c = u.map(Dr).join("");
    n = Qe(n) ? G(`${n.content}${c}`, true) : je(["(", n, `) + "${c}"`]);
  }
  return {
    props: [Pe(n, a)]
  };
});
var Xv = (s3, e, t) => {
  const { exp: r, loc: i } = s3;
  return r || t.onError(Je(58, i)), {
    props: [],
    needRuntime: t.helper(yu)
  };
};
var Zv = (s3, e) => {
  if (s3.type === 1 && s3.tagType === 1 && e.isBuiltInComponent(s3.tag) === Is)
    return () => {
      if (!s3.children.length)
        return;
      tf(s3) && e.onError(Je(59, {
        start: s3.children[0].loc.start,
        end: s3.children[s3.children.length - 1].loc.end,
        source: ""
      }));
      const r = s3.children[0];
      if (r.type === 1)
        for (const i of r.props)
          i.type === 7 && i.name === "show" && s3.props.push({
            type: 6,
            name: "persisted",
            value: void 0,
            loc: s3.loc
          });
    };
};
function tf(s3) {
  const e = s3.children = s3.children.filter((r) => r.type !== 3 && !(r.type === 2 && !r.content.trim())), t = e[0];
  return e.length !== 1 || t.type === 11 || t.type === 9 && t.branches.some(tf);
}
var eb = /__VUE_EXP_START__(.*?)__VUE_EXP_END__/g;
var tb = (s3, e, t) => {
  if (e.scopes.vSlot > 0)
    return;
  let r = 0, i = 0;
  const n = [], a = (l) => {
    if (r >= 20 || i >= 5) {
      const u = ae(e.helper(Jn), [
        JSON.stringify(n.map((c) => bu(c, e)).join("")).replace(eb, '" + $1 + "'),
        String(n.length)
      ]);
      if (jc(n[0], u, e), n.length > 1) {
        for (let h = 1; h < n.length; h++)
          jc(n[h], null, e);
        const c = n.length - 1;
        return s3.splice(l - n.length + 1, c), c;
      }
    }
    return 0;
  };
  let o = 0;
  for (; o < s3.length; o++) {
    const l = s3[o];
    if (rb(l)) {
      const c = l, h = nb(c);
      if (h) {
        r += h[0], i += h[1], n.push(c);
        continue;
      }
    }
    o -= a(o), r = 0, i = 0, n.length = 0;
  }
  a(o);
};
var rb = (s3) => (s3.type === 1 && s3.tagType === 0 || s3.type == 12) && s3.codegenNode && s3.codegenNode.type === 4 && s3.codegenNode.hoisted;
var sb = /^(data|aria)-/;
var Uc = (s3, e) => (e === 0 ? Ym(s3) : e === 1 ? Jm(s3) : false) || sb.test(s3);
var jc = (s3, e, t) => {
  const r = s3.codegenNode.hoisted;
  t.hoists[t.hoists.indexOf(r)] = e;
};
var ib = Re("caption,thead,tr,th,tbody,td,tfoot,colgroup,col");
function nb(s3) {
  if (s3.type === 1 && ib(s3.tag))
    return false;
  if (s3.type === 12)
    return [1, 0];
  let e = 1, t = s3.props.length > 0 ? 1 : 0, r = false;
  const i = () => (r = true, false);
  function n(a) {
    for (let o = 0; o < a.props.length; o++) {
      const l = a.props[o];
      if (l.type === 6 && !Uc(l.name, a.ns) || l.type === 7 && l.name === "bind" && (l.arg && (l.arg.type === 8 || l.arg.isStatic && !Uc(l.arg.content, a.ns)) || l.exp && (l.exp.type === 8 || l.exp.constType < 3)))
        return i();
    }
    for (let o = 0; o < a.children.length; o++) {
      e++;
      const l = a.children[o];
      if (l.type === 1 && (l.props.length > 0 && t++, n(l), r))
        return false;
    }
    return true;
  }
  return n(s3) ? [e, t] : false;
}
function bu(s3, e) {
  if (be(s3))
    return s3;
  if (bs(s3))
    return "";
  switch (s3.type) {
    case 1:
      return ab(s3, e);
    case 2:
      return Nt(s3.content);
    case 3:
      return `<!--${Nt(s3.content)}-->`;
    case 5:
      return Nt(fl(Nr(s3.content)));
    case 8:
      return Nt(Nr(s3));
    case 12:
      return bu(s3.content, e);
    default:
      return "";
  }
}
function ab(s3, e) {
  let t = `<${s3.tag}`, r = "";
  for (let i = 0; i < s3.props.length; i++) {
    const n = s3.props[i];
    if (n.type === 6)
      t += ` ${n.name}`, n.value && (t += `="${Nt(n.value.content)}"`);
    else if (n.type === 7)
      if (n.name === "bind") {
        const a = n.exp;
        if (a.content[0] === "_") {
          t += ` ${n.arg.content}="__VUE_EXP_START__${a.content}__VUE_EXP_END__"`;
          continue;
        }
        let o = Nr(a);
        if (o != null) {
          const l = n.arg && n.arg.content;
          l === "class" ? o = Bh(o) : l === "style" && (o = Zm(Rh(o))), t += ` ${n.arg.content}="${Nt(o)}"`;
        }
      } else
        n.name === "html" ? r = Nr(n.exp) : n.name === "text" && (r = Nt(fl(Nr(n.exp))));
  }
  if (e.scopeId && (t += ` ${e.scopeId}`), t += ">", r)
    t += r;
  else
    for (let i = 0; i < s3.children.length; i++)
      t += bu(s3.children[i], e);
  return $h(s3.tag) || (t += `</${s3.tag}>`), t;
}
function Nr(s3) {
  if (s3.type === 4)
    return new Function(`return ${s3.content}`)();
  {
    let e = "";
    return s3.children.forEach((t) => {
      be(t) || bs(t) || (t.type === 2 ? e += t.content : t.type === 5 ? e += fl(Nr(t.content)) : e += Nr(t));
    }), e;
  }
}
var ob = (s3, e) => {
  s3.type === 1 && s3.tagType === 0 && (s3.tag === "script" || s3.tag === "style") && (e.onError(Je(60, s3.loc)), e.removeNode());
};
var Su = [
  vu,
  Zv
];
var wu = {
  cloak: Zs,
  html: zv,
  text: Gv,
  model: Wv,
  on: Qv,
  show: Xv
};
function lb(s3, e = {}) {
  return Zp(s3, Ht({}, ms, e, {
    nodeTransforms: [
      ob,
      ...Su,
      ...e.nodeTransforms || []
    ],
    directiveTransforms: Ht({}, wu, e.directiveTransforms || {}),
    transformHoist: tb
  }));
}
function ub(s3, e = {}) {
  return ha(s3, Ht({}, ms, e));
}
var rf = Object.freeze({
  __proto__: null,
  parserOptions: ms,
  DOMNodeTransforms: Su,
  DOMDirectiveTransforms: wu,
  compile: lb,
  parse: ub,
  transformStyle: vu,
  createDOMCompilerError: Je,
  V_MODEL_RADIO: hu,
  V_MODEL_CHECKBOX: pu,
  V_MODEL_TEXT: fu,
  V_MODEL_SELECT: du,
  V_MODEL_DYNAMIC: Nn,
  V_ON_WITH_MODIFIERS: mu,
  V_ON_WITH_KEYS: gu,
  V_SHOW: yu,
  TRANSITION: Is,
  TRANSITION_GROUP: Fi,
  baseCompile: Zp,
  baseParse: ha,
  transform: fa,
  createTransformContext: Li,
  traverseNode: Ps,
  createStructuralDirectiveTransform: Mi,
  generate: Ql,
  createCompilerError: Te,
  getBaseTransformPreset: cu,
  transformModel: Ea,
  transformOn: wa,
  transformBind: uu,
  noopDirectiveTransform: Zs,
  processIf: ru,
  processFor: su,
  createForLoopParams: yi,
  transformExpression: tu,
  processExpression: tt,
  buildSlots: vi,
  trackVForSlotScopes: au,
  trackSlotScopes: nu,
  transformElement: Xp,
  resolveComponentType: Sa,
  buildProps: _s,
  buildDirectiveArgs: ou,
  processSlotOutlet: lu,
  getConstantType: ot,
  generateCodeFrame: Ks,
  checkCompatEnabled: u0,
  warnDeprecation: Ip,
  locStub: Le,
  createRoot: xs,
  createVNodeCall: us,
  createArrayExpression: Ur,
  createObjectExpression: at,
  createObjectProperty: Pe,
  createSimpleExpression: G,
  createInterpolation: wn,
  createCompoundExpression: je,
  createCallExpression: ae,
  createFunctionExpression: dt,
  createConditionalExpression: cr,
  createCacheExpression: Jh,
  createBlockStatement: Oi,
  createTemplateLiteral: xl,
  createIfStatement: En,
  createAssignmentExpression: bo,
  createSequenceExpression: Qh,
  createReturnStatement: Xh,
  isStaticExp: Qe,
  isBuiltInType: wt,
  isCoreComponent: Vl,
  isSimpleIdentifier: pr,
  isMemberExpressionBrowser: n0,
  isMemberExpressionNode: Ap,
  isMemberExpression: zl,
  getInnerRange: Gl,
  advancePositionWithClone: Fr,
  advancePositionWithMutation: hs,
  assert: Ao,
  findDir: Be,
  findProp: lt,
  isStaticArgOf: Vt,
  hasDynamicKeyVBind: ua,
  isText: Qs,
  isVSlot: Wl,
  isTemplateNode: ps,
  isSlotOutlet: fs,
  getVNodeHelper: Br,
  getVNodeBlockHelper: $r,
  injectProp: fi,
  toValidAssetId: di,
  hasScopeRef: it,
  getMemoedVNodeCall: _p,
  makeBlock: ca,
  walkIdentifiers: ya,
  isReferencedIdentifier: Zl,
  isInDestructureAssignment: va,
  walkFunctionParams: eu,
  walkBlockDeclarations: Hp,
  extractIdentifiers: jt,
  isFunctionType: Ar,
  isStaticProperty: ba,
  isStaticPropertyKey: Kp,
  FRAGMENT: ns,
  TELEPORT: Ir,
  SUSPENSE: Ss,
  KEEP_ALIVE: ai,
  BASE_TRANSITION: gl,
  OPEN_BLOCK: ur,
  CREATE_BLOCK: yl,
  CREATE_ELEMENT_BLOCK: vl,
  CREATE_VNODE: ki,
  CREATE_ELEMENT_VNODE: Kn,
  CREATE_COMMENT: ws,
  CREATE_TEXT: Yn,
  CREATE_STATIC: Jn,
  RESOLVE_COMPONENT: oi,
  RESOLVE_DYNAMIC_COMPONENT: as,
  RESOLVE_DIRECTIVE: Qn,
  RESOLVE_FILTER: Kh,
  WITH_DIRECTIVES: Xn,
  RENDER_LIST: Zn,
  RENDER_SLOT: bl,
  CREATE_SLOTS: Sl,
  TO_DISPLAY_STRING: Ni,
  MERGE_PROPS: Rr,
  NORMALIZE_CLASS: ea,
  NORMALIZE_STYLE: ta,
  NORMALIZE_PROPS: os,
  GUARD_REACTIVE_PROPS: Es,
  TO_HANDLERS: ra,
  CAMELIZE: bn,
  CAPITALIZE: Yh,
  TO_HANDLER_KEY: Sn,
  SET_BLOCK_TRACKING: li,
  PUSH_SCOPE_ID: sa,
  POP_SCOPE_ID: ia,
  WITH_CTX: na,
  UNREF: ls,
  IS_REF: ui,
  WITH_MEMO: aa,
  IS_MEMO_SAME: wl,
  helperNameMap: nt,
  registerRuntimeHelpers: El
});
function cb(s3, e) {
  for (; s3.length < e; )
    s3 = "0" + s3;
  return s3;
}
function $t(s3, e) {
  var t, r, i;
  if (e.length === 0)
    return s3;
  for (t = 0, i = e.length; t < i; t++)
    r = e.charCodeAt(t), s3 = (s3 << 5) - s3 + r, s3 |= 0;
  return s3 < 0 ? s3 * -2 : s3;
}
function hb(s3, e, t) {
  return Object.keys(e).sort().reduce(r, s3);
  function r(i, n) {
    return sf(i, e[n], n, t);
  }
}
function sf(s3, e, t, r) {
  var i = $t($t($t(s3, t), pb(e)), typeof e);
  if (e === null)
    return $t(i, "null");
  if (e === void 0)
    return $t(i, "undefined");
  if (typeof e == "object" || typeof e == "function") {
    if (r.indexOf(e) !== -1)
      return $t(i, "[Circular]" + t);
    r.push(e);
    var n = hb(i, e, r);
    if (!("valueOf" in e) || typeof e.valueOf != "function")
      return n;
    try {
      return $t(n, String(e.valueOf()));
    } catch (a) {
      return $t(n, "[valueOf exception]" + (a.stack || a.message));
    }
  }
  return $t(i, e.toString());
}
function pb(s3) {
  return Object.prototype.toString.call(s3);
}
function fb(s3) {
  return cb(sf(0, s3, "", []).toString(16), 8);
}
var db = fb;
var On = "useCssVars";
function nf(s3, e, t, r = false) {
  return `{
  ${s3.map((i) => `"${r ? "--" : ""}${af(e, i, t)}": (${i})`).join(`,
  `)}
}`;
}
function af(s3, e, t) {
  return t ? db(s3 + e) : `${s3}-${e.replace(/([^\w-])/g, "_")}`;
}
function of(s3) {
  return s3 = s3.trim(), s3[0] === "'" && s3[s3.length - 1] === "'" || s3[0] === '"' && s3[s3.length - 1] === '"' ? s3.slice(1, -1) : s3;
}
var fn = /v-bind\s*\(/g;
function mb(s3) {
  const e = [];
  return s3.styles.forEach((t) => {
    let r;
    const i = t.content.replace(/\/\*([\s\S]*?)\*\//g, "");
    for (; r = fn.exec(i); ) {
      const n = r.index + r[0].length, a = lf(i, n);
      if (a !== null) {
        const o = of(i.slice(n, a));
        e.includes(o) || e.push(o);
      }
    }
  }), e;
}
function lf(s3, e) {
  let t = 0, r = 0;
  for (let i = e; i < s3.length; i++) {
    const n = s3.charAt(i);
    switch (t) {
      case 0:
        if (n === "'")
          t = 1;
        else if (n === '"')
          t = 2;
        else if (n === "(")
          r++;
        else if (n === ")")
          if (r > 0)
            r--;
          else
            return i;
        break;
      case 1:
        n === "'" && (t = 0);
        break;
      case 2:
        n === '"' && (t = 0);
        break;
    }
  }
  return null;
}
var uf = (s3) => {
  const { id: e, isProd: t } = s3;
  return {
    postcssPlugin: "vue-sfc-vars",
    Declaration(r) {
      const i = r.value;
      if (fn.test(i)) {
        fn.lastIndex = 0;
        let n = "", a = 0, o;
        for (; o = fn.exec(i); ) {
          const l = o.index + o[0].length, u = lf(i, l);
          if (u !== null) {
            const c = of(i.slice(l, u));
            n += i.slice(a, o.index) + `var(--${af(e, c, t)})`, a = u + 1;
          }
        }
        r.value = n + i.slice(a);
      }
    }
  };
};
uf.postcss = true;
function cf(s3, e, t, r) {
  const i = nf(s3, t, r), n = G(i, false), a = Li(xs([]), {
    prefixIdentifiers: true,
    inline: true,
    bindingMetadata: e.__isScriptSetup === false ? void 0 : e
  }), o = tt(n, a), l = o.type === 4 ? o.content : o.children.map((u) => typeof u == "string" ? u : u.content).join("");
  return `_${On}(_ctx => (${l}))`;
}
function gb(s3, e, t, r) {
  return `
import { ${On} as _${On} } from 'vue'
const __injectCSSVars__ = () => {
${cf(s3, e, t, r)}}
const __setup__ = __default__.setup
__default__.setup = __setup__
  ? (props, ctx) => { __injectCSSVars__();return __setup__(props, ctx) }
  : __injectCSSVars__
`;
}
function hf(s3 = 500) {
  return /* @__PURE__ */ new Map();
}
var fr = typeof fr < "u" ? fr : typeof self < "u" ? self : typeof window < "u" ? window : {};
var It = [];
var mt = [];
var yb = typeof Uint8Array < "u" ? Uint8Array : Array;
var Eu = false;
function pf() {
  Eu = true;
  for (var s3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, t = s3.length; e < t; ++e)
    It[e] = s3[e], mt[s3.charCodeAt(e)] = e;
  mt["-".charCodeAt(0)] = 62, mt["_".charCodeAt(0)] = 63;
}
function vb(s3) {
  Eu || pf();
  var e, t, r, i, n, a, o = s3.length;
  if (o % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  n = s3[o - 2] === "=" ? 2 : s3[o - 1] === "=" ? 1 : 0, a = new yb(o * 3 / 4 - n), r = n > 0 ? o - 4 : o;
  var l = 0;
  for (e = 0, t = 0; e < r; e += 4, t += 3)
    i = mt[s3.charCodeAt(e)] << 18 | mt[s3.charCodeAt(e + 1)] << 12 | mt[s3.charCodeAt(e + 2)] << 6 | mt[s3.charCodeAt(e + 3)], a[l++] = i >> 16 & 255, a[l++] = i >> 8 & 255, a[l++] = i & 255;
  return n === 2 ? (i = mt[s3.charCodeAt(e)] << 2 | mt[s3.charCodeAt(e + 1)] >> 4, a[l++] = i & 255) : n === 1 && (i = mt[s3.charCodeAt(e)] << 10 | mt[s3.charCodeAt(e + 1)] << 4 | mt[s3.charCodeAt(e + 2)] >> 2, a[l++] = i >> 8 & 255, a[l++] = i & 255), a;
}
function bb(s3) {
  return It[s3 >> 18 & 63] + It[s3 >> 12 & 63] + It[s3 >> 6 & 63] + It[s3 & 63];
}
function Sb(s3, e, t) {
  for (var r, i = [], n = e; n < t; n += 3)
    r = (s3[n] << 16) + (s3[n + 1] << 8) + s3[n + 2], i.push(bb(r));
  return i.join("");
}
function qc(s3) {
  Eu || pf();
  for (var e, t = s3.length, r = t % 3, i = "", n = [], a = 16383, o = 0, l = t - r; o < l; o += a)
    n.push(Sb(s3, o, o + a > l ? l : o + a));
  return r === 1 ? (e = s3[t - 1], i += It[e >> 2], i += It[e << 4 & 63], i += "==") : r === 2 && (e = (s3[t - 2] << 8) + s3[t - 1], i += It[e >> 10], i += It[e >> 4 & 63], i += It[e << 2 & 63], i += "="), n.push(i), n.join("");
}
function xa(s3, e, t, r, i) {
  var n, a, o = i * 8 - r - 1, l = (1 << o) - 1, u = l >> 1, c = -7, h = t ? i - 1 : 0, p = t ? -1 : 1, f = s3[e + h];
  for (h += p, n = f & (1 << -c) - 1, f >>= -c, c += o; c > 0; n = n * 256 + s3[e + h], h += p, c -= 8)
    ;
  for (a = n & (1 << -c) - 1, n >>= -c, c += r; c > 0; a = a * 256 + s3[e + h], h += p, c -= 8)
    ;
  if (n === 0)
    n = 1 - u;
  else {
    if (n === l)
      return a ? NaN : (f ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, r), n = n - u;
  }
  return (f ? -1 : 1) * a * Math.pow(2, n - r);
}
function ff(s3, e, t, r, i, n) {
  var a, o, l, u = n * 8 - i - 1, c = (1 << u) - 1, h = c >> 1, p = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : n - 1, g = r ? 1 : -1, d = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, a = c) : (a = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + h >= 1 ? e += p / l : e += p * Math.pow(2, 1 - h), e * l >= 2 && (a++, l /= 2), a + h >= c ? (o = 0, a = c) : a + h >= 1 ? (o = (e * l - 1) * Math.pow(2, i), a = a + h) : (o = e * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; s3[t + f] = o & 255, f += g, o /= 256, i -= 8)
    ;
  for (a = a << i | o, u += i; u > 0; s3[t + f] = a & 255, f += g, a /= 256, u -= 8)
    ;
  s3[t + f - g] |= d * 128;
}
var wb = {}.toString;
var df = Array.isArray || function(s3) {
  return wb.call(s3) == "[object Array]";
};
var Eb = 50;
D.TYPED_ARRAY_SUPPORT = fr.TYPED_ARRAY_SUPPORT !== void 0 ? fr.TYPED_ARRAY_SUPPORT : true;
function Mo() {
  return D.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function zt(s3, e) {
  if (Mo() < e)
    throw new RangeError("Invalid typed array length");
  return D.TYPED_ARRAY_SUPPORT ? (s3 = new Uint8Array(e), s3.__proto__ = D.prototype) : (s3 === null && (s3 = new D(e)), s3.length = e), s3;
}
function D(s3, e, t) {
  if (!D.TYPED_ARRAY_SUPPORT && !(this instanceof D))
    return new D(s3, e, t);
  if (typeof s3 == "number") {
    if (typeof e == "string")
      throw new Error("If encoding is specified then the first argument must be a string");
    return xu(this, s3);
  }
  return mf(this, s3, e, t);
}
D.poolSize = 8192;
D._augment = function(s3) {
  return s3.__proto__ = D.prototype, s3;
};
function mf(s3, e, t, r) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? Pb(s3, e, t, r) : typeof e == "string" ? Tb(s3, e, t) : Ab(s3, e);
}
D.from = function(s3, e, t) {
  return mf(null, s3, e, t);
};
D.TYPED_ARRAY_SUPPORT && (D.prototype.__proto__ = Uint8Array.prototype, D.__proto__ = Uint8Array);
function gf(s3) {
  if (typeof s3 != "number")
    throw new TypeError('"size" argument must be a number');
  if (s3 < 0)
    throw new RangeError('"size" argument must not be negative');
}
function xb(s3, e, t, r) {
  return gf(e), e <= 0 ? zt(s3, e) : t !== void 0 ? typeof r == "string" ? zt(s3, e).fill(t, r) : zt(s3, e).fill(t) : zt(s3, e);
}
D.alloc = function(s3, e, t) {
  return xb(null, s3, e, t);
};
function xu(s3, e) {
  if (gf(e), s3 = zt(s3, e < 0 ? 0 : Tu(e) | 0), !D.TYPED_ARRAY_SUPPORT)
    for (var t = 0; t < e; ++t)
      s3[t] = 0;
  return s3;
}
D.allocUnsafe = function(s3) {
  return xu(null, s3);
};
D.allocUnsafeSlow = function(s3) {
  return xu(null, s3);
};
function Tb(s3, e, t) {
  if ((typeof t != "string" || t === "") && (t = "utf8"), !D.isEncoding(t))
    throw new TypeError('"encoding" must be a valid string encoding');
  var r = yf(e, t) | 0;
  s3 = zt(s3, r);
  var i = s3.write(e, t);
  return i !== r && (s3 = s3.slice(0, i)), s3;
}
function Do(s3, e) {
  var t = e.length < 0 ? 0 : Tu(e.length) | 0;
  s3 = zt(s3, t);
  for (var r = 0; r < t; r += 1)
    s3[r] = e[r] & 255;
  return s3;
}
function Pb(s3, e, t, r) {
  if (e.byteLength, t < 0 || e.byteLength < t)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < t + (r || 0))
    throw new RangeError("'length' is out of bounds");
  return t === void 0 && r === void 0 ? e = new Uint8Array(e) : r === void 0 ? e = new Uint8Array(e, t) : e = new Uint8Array(e, t, r), D.TYPED_ARRAY_SUPPORT ? (s3 = e, s3.__proto__ = D.prototype) : s3 = Do(s3, e), s3;
}
function Ab(s3, e) {
  if (Rt(e)) {
    var t = Tu(e.length) | 0;
    return s3 = zt(s3, t), s3.length === 0 || e.copy(s3, 0, 0, t), s3;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || Gb(e.length) ? zt(s3, 0) : Do(s3, e);
    if (e.type === "Buffer" && df(e.data))
      return Do(s3, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Tu(s3) {
  if (s3 >= Mo())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Mo().toString(16) + " bytes");
  return s3 | 0;
}
D.isBuffer = Wb;
function Rt(s3) {
  return !!(s3 != null && s3._isBuffer);
}
D.compare = function(e, t) {
  if (!Rt(e) || !Rt(t))
    throw new TypeError("Arguments must be Buffers");
  if (e === t)
    return 0;
  for (var r = e.length, i = t.length, n = 0, a = Math.min(r, i); n < a; ++n)
    if (e[n] !== t[n]) {
      r = e[n], i = t[n];
      break;
    }
  return r < i ? -1 : i < r ? 1 : 0;
};
D.isEncoding = function(e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
D.concat = function(e, t) {
  if (!df(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return D.alloc(0);
  var r;
  if (t === void 0)
    for (t = 0, r = 0; r < e.length; ++r)
      t += e[r].length;
  var i = D.allocUnsafe(t), n = 0;
  for (r = 0; r < e.length; ++r) {
    var a = e[r];
    if (!Rt(a))
      throw new TypeError('"list" argument must be an Array of Buffers');
    a.copy(i, n), n += a.length;
  }
  return i;
};
function yf(s3, e) {
  if (Rt(s3))
    return s3.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(s3) || s3 instanceof ArrayBuffer))
    return s3.byteLength;
  typeof s3 != "string" && (s3 = "" + s3);
  var t = s3.length;
  if (t === 0)
    return 0;
  for (var r = false; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return Ln(s3).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return Tf(s3).length;
      default:
        if (r)
          return Ln(s3).length;
        e = ("" + e).toLowerCase(), r = true;
    }
}
D.byteLength = yf;
function Cb(s3, e, t) {
  var r = false;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
    return "";
  for (s3 || (s3 = "utf8"); ; )
    switch (s3) {
      case "hex":
        return Fb(this, e, t);
      case "utf8":
      case "utf-8":
        return Sf(this, e, t);
      case "ascii":
        return Db(this, e, t);
      case "latin1":
      case "binary":
        return Rb(this, e, t);
      case "base64":
        return Lb(this, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Bb(this, e, t);
      default:
        if (r)
          throw new TypeError("Unknown encoding: " + s3);
        s3 = (s3 + "").toLowerCase(), r = true;
    }
}
D.prototype._isBuffer = true;
function Cr(s3, e, t) {
  var r = s3[e];
  s3[e] = s3[t], s3[t] = r;
}
D.prototype.swap16 = function() {
  var e = this.length;
  if (e % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var t = 0; t < e; t += 2)
    Cr(this, t, t + 1);
  return this;
};
D.prototype.swap32 = function() {
  var e = this.length;
  if (e % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var t = 0; t < e; t += 4)
    Cr(this, t, t + 3), Cr(this, t + 1, t + 2);
  return this;
};
D.prototype.swap64 = function() {
  var e = this.length;
  if (e % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var t = 0; t < e; t += 8)
    Cr(this, t, t + 7), Cr(this, t + 1, t + 6), Cr(this, t + 2, t + 5), Cr(this, t + 3, t + 4);
  return this;
};
D.prototype.toString = function() {
  var e = this.length | 0;
  return e === 0 ? "" : arguments.length === 0 ? Sf(this, 0, e) : Cb.apply(this, arguments);
};
D.prototype.equals = function(e) {
  if (!Rt(e))
    throw new TypeError("Argument must be a Buffer");
  return this === e ? true : D.compare(this, e) === 0;
};
D.prototype.inspect = function() {
  var e = "", t = Eb;
  return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
};
D.prototype.compare = function(e, t, r, i, n) {
  if (!Rt(e))
    throw new TypeError("Argument must be a Buffer");
  if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), i === void 0 && (i = 0), n === void 0 && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length)
    throw new RangeError("out of range index");
  if (i >= n && t >= r)
    return 0;
  if (i >= n)
    return -1;
  if (t >= r)
    return 1;
  if (t >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, this === e)
    return 0;
  for (var a = n - i, o = r - t, l = Math.min(a, o), u = this.slice(i, n), c = e.slice(t, r), h = 0; h < l; ++h)
    if (u[h] !== c[h]) {
      a = u[h], o = c[h];
      break;
    }
  return a < o ? -1 : o < a ? 1 : 0;
};
function vf(s3, e, t, r, i) {
  if (s3.length === 0)
    return -1;
  if (typeof t == "string" ? (r = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = i ? 0 : s3.length - 1), t < 0 && (t = s3.length + t), t >= s3.length) {
    if (i)
      return -1;
    t = s3.length - 1;
  } else if (t < 0)
    if (i)
      t = 0;
    else
      return -1;
  if (typeof e == "string" && (e = D.from(e, r)), Rt(e))
    return e.length === 0 ? -1 : Vc(s3, e, t, r, i);
  if (typeof e == "number")
    return e = e & 255, D.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(s3, e, t) : Uint8Array.prototype.lastIndexOf.call(s3, e, t) : Vc(s3, [e], t, r, i);
  throw new TypeError("val must be string, number or Buffer");
}
function Vc(s3, e, t, r, i) {
  var n = 1, a = s3.length, o = e.length;
  if (r !== void 0 && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
    if (s3.length < 2 || e.length < 2)
      return -1;
    n = 2, a /= 2, o /= 2, t /= 2;
  }
  function l(f, g) {
    return n === 1 ? f[g] : f.readUInt16BE(g * n);
  }
  var u;
  if (i) {
    var c = -1;
    for (u = t; u < a; u++)
      if (l(s3, u) === l(e, c === -1 ? 0 : u - c)) {
        if (c === -1 && (c = u), u - c + 1 === o)
          return c * n;
      } else
        c !== -1 && (u -= u - c), c = -1;
  } else
    for (t + o > a && (t = a - o), u = t; u >= 0; u--) {
      for (var h = true, p = 0; p < o; p++)
        if (l(s3, u + p) !== l(e, p)) {
          h = false;
          break;
        }
      if (h)
        return u;
    }
  return -1;
}
D.prototype.includes = function(e, t, r) {
  return this.indexOf(e, t, r) !== -1;
};
D.prototype.indexOf = function(e, t, r) {
  return vf(this, e, t, r, true);
};
D.prototype.lastIndexOf = function(e, t, r) {
  return vf(this, e, t, r, false);
};
function _b(s3, e, t, r) {
  t = Number(t) || 0;
  var i = s3.length - t;
  r ? (r = Number(r), r > i && (r = i)) : r = i;
  var n = e.length;
  if (n % 2 !== 0)
    throw new TypeError("Invalid hex string");
  r > n / 2 && (r = n / 2);
  for (var a = 0; a < r; ++a) {
    var o = parseInt(e.substr(a * 2, 2), 16);
    if (isNaN(o))
      return a;
    s3[t + a] = o;
  }
  return a;
}
function Ib(s3, e, t, r) {
  return Aa(Ln(e, s3.length - t), s3, t, r);
}
function bf(s3, e, t, r) {
  return Aa(Vb(e), s3, t, r);
}
function kb(s3, e, t, r) {
  return bf(s3, e, t, r);
}
function Nb(s3, e, t, r) {
  return Aa(Tf(e), s3, t, r);
}
function Ob(s3, e, t, r) {
  return Aa(zb(e, s3.length - t), s3, t, r);
}
D.prototype.write = function(e, t, r, i) {
  if (t === void 0)
    i = "utf8", r = this.length, t = 0;
  else if (r === void 0 && typeof t == "string")
    i = t, r = this.length, t = 0;
  else if (isFinite(t))
    t = t | 0, isFinite(r) ? (r = r | 0, i === void 0 && (i = "utf8")) : (i = r, r = void 0);
  else
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  var n = this.length - t;
  if ((r === void 0 || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  i || (i = "utf8");
  for (var a = false; ; )
    switch (i) {
      case "hex":
        return _b(this, e, t, r);
      case "utf8":
      case "utf-8":
        return Ib(this, e, t, r);
      case "ascii":
        return bf(this, e, t, r);
      case "latin1":
      case "binary":
        return kb(this, e, t, r);
      case "base64":
        return Nb(this, e, t, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Ob(this, e, t, r);
      default:
        if (a)
          throw new TypeError("Unknown encoding: " + i);
        i = ("" + i).toLowerCase(), a = true;
    }
};
D.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function Lb(s3, e, t) {
  return e === 0 && t === s3.length ? qc(s3) : qc(s3.slice(e, t));
}
function Sf(s3, e, t) {
  t = Math.min(s3.length, t);
  for (var r = [], i = e; i < t; ) {
    var n = s3[i], a = null, o = n > 239 ? 4 : n > 223 ? 3 : n > 191 ? 2 : 1;
    if (i + o <= t) {
      var l, u, c, h;
      switch (o) {
        case 1:
          n < 128 && (a = n);
          break;
        case 2:
          l = s3[i + 1], (l & 192) === 128 && (h = (n & 31) << 6 | l & 63, h > 127 && (a = h));
          break;
        case 3:
          l = s3[i + 1], u = s3[i + 2], (l & 192) === 128 && (u & 192) === 128 && (h = (n & 15) << 12 | (l & 63) << 6 | u & 63, h > 2047 && (h < 55296 || h > 57343) && (a = h));
          break;
        case 4:
          l = s3[i + 1], u = s3[i + 2], c = s3[i + 3], (l & 192) === 128 && (u & 192) === 128 && (c & 192) === 128 && (h = (n & 15) << 18 | (l & 63) << 12 | (u & 63) << 6 | c & 63, h > 65535 && h < 1114112 && (a = h));
      }
    }
    a === null ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a), i += o;
  }
  return Mb(r);
}
var zc = 4096;
function Mb(s3) {
  var e = s3.length;
  if (e <= zc)
    return String.fromCharCode.apply(String, s3);
  for (var t = "", r = 0; r < e; )
    t += String.fromCharCode.apply(String, s3.slice(r, r += zc));
  return t;
}
function Db(s3, e, t) {
  var r = "";
  t = Math.min(s3.length, t);
  for (var i = e; i < t; ++i)
    r += String.fromCharCode(s3[i] & 127);
  return r;
}
function Rb(s3, e, t) {
  var r = "";
  t = Math.min(s3.length, t);
  for (var i = e; i < t; ++i)
    r += String.fromCharCode(s3[i]);
  return r;
}
function Fb(s3, e, t) {
  var r = s3.length;
  (!e || e < 0) && (e = 0), (!t || t < 0 || t > r) && (t = r);
  for (var i = "", n = e; n < t; ++n)
    i += qb(s3[n]);
  return i;
}
function Bb(s3, e, t) {
  for (var r = s3.slice(e, t), i = "", n = 0; n < r.length; n += 2)
    i += String.fromCharCode(r[n] + r[n + 1] * 256);
  return i;
}
D.prototype.slice = function(e, t) {
  var r = this.length;
  e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
  var i;
  if (D.TYPED_ARRAY_SUPPORT)
    i = this.subarray(e, t), i.__proto__ = D.prototype;
  else {
    var n = t - e;
    i = new D(n, void 0);
    for (var a = 0; a < n; ++a)
      i[a] = this[a + e];
  }
  return i;
};
function $e(s3, e, t) {
  if (s3 % 1 !== 0 || s3 < 0)
    throw new RangeError("offset is not uint");
  if (s3 + e > t)
    throw new RangeError("Trying to access beyond buffer length");
}
D.prototype.readUIntLE = function(e, t, r) {
  e = e | 0, t = t | 0, r || $e(e, t, this.length);
  for (var i = this[e], n = 1, a = 0; ++a < t && (n *= 256); )
    i += this[e + a] * n;
  return i;
};
D.prototype.readUIntBE = function(e, t, r) {
  e = e | 0, t = t | 0, r || $e(e, t, this.length);
  for (var i = this[e + --t], n = 1; t > 0 && (n *= 256); )
    i += this[e + --t] * n;
  return i;
};
D.prototype.readUInt8 = function(e, t) {
  return t || $e(e, 1, this.length), this[e];
};
D.prototype.readUInt16LE = function(e, t) {
  return t || $e(e, 2, this.length), this[e] | this[e + 1] << 8;
};
D.prototype.readUInt16BE = function(e, t) {
  return t || $e(e, 2, this.length), this[e] << 8 | this[e + 1];
};
D.prototype.readUInt32LE = function(e, t) {
  return t || $e(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
D.prototype.readUInt32BE = function(e, t) {
  return t || $e(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
D.prototype.readIntLE = function(e, t, r) {
  e = e | 0, t = t | 0, r || $e(e, t, this.length);
  for (var i = this[e], n = 1, a = 0; ++a < t && (n *= 256); )
    i += this[e + a] * n;
  return n *= 128, i >= n && (i -= Math.pow(2, 8 * t)), i;
};
D.prototype.readIntBE = function(e, t, r) {
  e = e | 0, t = t | 0, r || $e(e, t, this.length);
  for (var i = t, n = 1, a = this[e + --i]; i > 0 && (n *= 256); )
    a += this[e + --i] * n;
  return n *= 128, a >= n && (a -= Math.pow(2, 8 * t)), a;
};
D.prototype.readInt8 = function(e, t) {
  return t || $e(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
};
D.prototype.readInt16LE = function(e, t) {
  t || $e(e, 2, this.length);
  var r = this[e] | this[e + 1] << 8;
  return r & 32768 ? r | 4294901760 : r;
};
D.prototype.readInt16BE = function(e, t) {
  t || $e(e, 2, this.length);
  var r = this[e + 1] | this[e] << 8;
  return r & 32768 ? r | 4294901760 : r;
};
D.prototype.readInt32LE = function(e, t) {
  return t || $e(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
D.prototype.readInt32BE = function(e, t) {
  return t || $e(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
D.prototype.readFloatLE = function(e, t) {
  return t || $e(e, 4, this.length), xa(this, e, true, 23, 4);
};
D.prototype.readFloatBE = function(e, t) {
  return t || $e(e, 4, this.length), xa(this, e, false, 23, 4);
};
D.prototype.readDoubleLE = function(e, t) {
  return t || $e(e, 8, this.length), xa(this, e, true, 52, 8);
};
D.prototype.readDoubleBE = function(e, t) {
  return t || $e(e, 8, this.length), xa(this, e, false, 52, 8);
};
function ut(s3, e, t, r, i, n) {
  if (!Rt(s3))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > i || e < n)
    throw new RangeError('"value" argument is out of bounds');
  if (t + r > s3.length)
    throw new RangeError("Index out of range");
}
D.prototype.writeUIntLE = function(e, t, r, i) {
  if (e = +e, t = t | 0, r = r | 0, !i) {
    var n = Math.pow(2, 8 * r) - 1;
    ut(this, e, t, r, n, 0);
  }
  var a = 1, o = 0;
  for (this[t] = e & 255; ++o < r && (a *= 256); )
    this[t + o] = e / a & 255;
  return t + r;
};
D.prototype.writeUIntBE = function(e, t, r, i) {
  if (e = +e, t = t | 0, r = r | 0, !i) {
    var n = Math.pow(2, 8 * r) - 1;
    ut(this, e, t, r, n, 0);
  }
  var a = r - 1, o = 1;
  for (this[t + a] = e & 255; --a >= 0 && (o *= 256); )
    this[t + a] = e / o & 255;
  return t + r;
};
D.prototype.writeUInt8 = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 1, 255, 0), D.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = e & 255, t + 1;
};
function Ta(s3, e, t, r) {
  e < 0 && (e = 65535 + e + 1);
  for (var i = 0, n = Math.min(s3.length - t, 2); i < n; ++i)
    s3[t + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> (r ? i : 1 - i) * 8;
}
D.prototype.writeUInt16LE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 2, 65535, 0), D.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : Ta(this, e, t, true), t + 2;
};
D.prototype.writeUInt16BE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 2, 65535, 0), D.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : Ta(this, e, t, false), t + 2;
};
function Pa(s3, e, t, r) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var i = 0, n = Math.min(s3.length - t, 4); i < n; ++i)
    s3[t + i] = e >>> (r ? i : 3 - i) * 8 & 255;
}
D.prototype.writeUInt32LE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 4, 4294967295, 0), D.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255) : Pa(this, e, t, true), t + 4;
};
D.prototype.writeUInt32BE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 4, 4294967295, 0), D.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : Pa(this, e, t, false), t + 4;
};
D.prototype.writeIntLE = function(e, t, r, i) {
  if (e = +e, t = t | 0, !i) {
    var n = Math.pow(2, 8 * r - 1);
    ut(this, e, t, r, n - 1, -n);
  }
  var a = 0, o = 1, l = 0;
  for (this[t] = e & 255; ++a < r && (o *= 256); )
    e < 0 && l === 0 && this[t + a - 1] !== 0 && (l = 1), this[t + a] = (e / o >> 0) - l & 255;
  return t + r;
};
D.prototype.writeIntBE = function(e, t, r, i) {
  if (e = +e, t = t | 0, !i) {
    var n = Math.pow(2, 8 * r - 1);
    ut(this, e, t, r, n - 1, -n);
  }
  var a = r - 1, o = 1, l = 0;
  for (this[t + a] = e & 255; --a >= 0 && (o *= 256); )
    e < 0 && l === 0 && this[t + a + 1] !== 0 && (l = 1), this[t + a] = (e / o >> 0) - l & 255;
  return t + r;
};
D.prototype.writeInt8 = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 1, 127, -128), D.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
};
D.prototype.writeInt16LE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 2, 32767, -32768), D.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : Ta(this, e, t, true), t + 2;
};
D.prototype.writeInt16BE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 2, 32767, -32768), D.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : Ta(this, e, t, false), t + 2;
};
D.prototype.writeInt32LE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 4, 2147483647, -2147483648), D.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Pa(this, e, t, true), t + 4;
};
D.prototype.writeInt32BE = function(e, t, r) {
  return e = +e, t = t | 0, r || ut(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), D.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : Pa(this, e, t, false), t + 4;
};
function wf(s3, e, t, r, i, n) {
  if (t + r > s3.length)
    throw new RangeError("Index out of range");
  if (t < 0)
    throw new RangeError("Index out of range");
}
function Ef(s3, e, t, r, i) {
  return i || wf(s3, e, t, 4), ff(s3, e, t, r, 23, 4), t + 4;
}
D.prototype.writeFloatLE = function(e, t, r) {
  return Ef(this, e, t, true, r);
};
D.prototype.writeFloatBE = function(e, t, r) {
  return Ef(this, e, t, false, r);
};
function xf(s3, e, t, r, i) {
  return i || wf(s3, e, t, 8), ff(s3, e, t, r, 52, 8), t + 8;
}
D.prototype.writeDoubleLE = function(e, t, r) {
  return xf(this, e, t, true, r);
};
D.prototype.writeDoubleBE = function(e, t, r) {
  return xf(this, e, t, false, r);
};
D.prototype.copy = function(e, t, r, i) {
  if (r || (r = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r || e.length === 0 || this.length === 0)
    return 0;
  if (t < 0)
    throw new RangeError("targetStart out of bounds");
  if (r < 0 || r >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (i < 0)
    throw new RangeError("sourceEnd out of bounds");
  i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
  var n = i - r, a;
  if (this === e && r < t && t < i)
    for (a = n - 1; a >= 0; --a)
      e[a + t] = this[a + r];
  else if (n < 1e3 || !D.TYPED_ARRAY_SUPPORT)
    for (a = 0; a < n; ++a)
      e[a + t] = this[a + r];
  else
    Uint8Array.prototype.set.call(e, this.subarray(r, r + n), t);
  return n;
};
D.prototype.fill = function(e, t, r, i) {
  if (typeof e == "string") {
    if (typeof t == "string" ? (i = t, t = 0, r = this.length) : typeof r == "string" && (i = r, r = this.length), e.length === 1) {
      var n = e.charCodeAt(0);
      n < 256 && (e = n);
    }
    if (i !== void 0 && typeof i != "string")
      throw new TypeError("encoding must be a string");
    if (typeof i == "string" && !D.isEncoding(i))
      throw new TypeError("Unknown encoding: " + i);
  } else
    typeof e == "number" && (e = e & 255);
  if (t < 0 || this.length < t || this.length < r)
    throw new RangeError("Out of range index");
  if (r <= t)
    return this;
  t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
  var a;
  if (typeof e == "number")
    for (a = t; a < r; ++a)
      this[a] = e;
  else {
    var o = Rt(e) ? e : Ln(new D(e, i).toString()), l = o.length;
    for (a = 0; a < r - t; ++a)
      this[a + t] = o[a % l];
  }
  return this;
};
var $b = /[^+\/0-9A-Za-z-_]/g;
function Ub(s3) {
  if (s3 = jb(s3).replace($b, ""), s3.length < 2)
    return "";
  for (; s3.length % 4 !== 0; )
    s3 = s3 + "=";
  return s3;
}
function jb(s3) {
  return s3.trim ? s3.trim() : s3.replace(/^\s+|\s+$/g, "");
}
function qb(s3) {
  return s3 < 16 ? "0" + s3.toString(16) : s3.toString(16);
}
function Ln(s3, e) {
  e = e || 1 / 0;
  for (var t, r = s3.length, i = null, n = [], a = 0; a < r; ++a) {
    if (t = s3.charCodeAt(a), t > 55295 && t < 57344) {
      if (!i) {
        if (t > 56319) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        } else if (a + 1 === r) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        }
        i = t;
        continue;
      }
      if (t < 56320) {
        (e -= 3) > -1 && n.push(239, 191, 189), i = t;
        continue;
      }
      t = (i - 55296 << 10 | t - 56320) + 65536;
    } else
      i && (e -= 3) > -1 && n.push(239, 191, 189);
    if (i = null, t < 128) {
      if ((e -= 1) < 0)
        break;
      n.push(t);
    } else if (t < 2048) {
      if ((e -= 2) < 0)
        break;
      n.push(t >> 6 | 192, t & 63 | 128);
    } else if (t < 65536) {
      if ((e -= 3) < 0)
        break;
      n.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
    } else if (t < 1114112) {
      if ((e -= 4) < 0)
        break;
      n.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
    } else
      throw new Error("Invalid code point");
  }
  return n;
}
function Vb(s3) {
  for (var e = [], t = 0; t < s3.length; ++t)
    e.push(s3.charCodeAt(t) & 255);
  return e;
}
function zb(s3, e) {
  for (var t, r, i, n = [], a = 0; a < s3.length && !((e -= 2) < 0); ++a)
    t = s3.charCodeAt(a), r = t >> 8, i = t % 256, n.push(i), n.push(r);
  return n;
}
function Tf(s3) {
  return vb(Ub(s3));
}
function Aa(s3, e, t, r) {
  for (var i = 0; i < r && !(i + t >= e.length || i >= s3.length); ++i)
    e[i + t] = s3[i];
  return i;
}
function Gb(s3) {
  return s3 !== s3;
}
function Wb(s3) {
  return s3 != null && (!!s3._isBuffer || Pf(s3) || Hb(s3));
}
function Pf(s3) {
  return !!s3.constructor && typeof s3.constructor.isBuffer == "function" && s3.constructor.isBuffer(s3);
}
function Hb(s3) {
  return typeof s3.readFloatLE == "function" && typeof s3.slice == "function" && Pf(s3.slice(0, 0));
}
var Kb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Yb(s3) {
  for (var e = 0, t = 0, r = 0, i = 0, n = "", a = 0; a < s3.length; a++) {
    var o = s3[a];
    if (a > 0 && (n += ";"), o.length !== 0) {
      for (var l = 0, u = [], c = 0, h = o; c < h.length; c++) {
        var p = h[c], f = js(p[0] - l);
        l = p[0], p.length > 1 && (f += js(p[1] - e) + js(p[2] - t) + js(p[3] - r), e = p[1], t = p[2], r = p[3]), p.length === 5 && (f += js(p[4] - i), i = p[4]), u.push(f);
      }
      n += u.join(",");
    }
  }
  return n;
}
function js(s3) {
  var e = "";
  s3 = s3 < 0 ? -s3 << 1 | 1 : s3 << 1;
  do {
    var t = s3 & 31;
    s3 >>>= 5, s3 > 0 && (t |= 32), e += Kb[t];
  } while (s3 > 0);
  return e;
}
var Ca = function s(e) {
  this.bits = e instanceof s ? e.bits.slice() : [];
};
Ca.prototype.add = function(e) {
  this.bits[e >> 5] |= 1 << (e & 31);
};
Ca.prototype.has = function(e) {
  return !!(this.bits[e >> 5] & 1 << (e & 31));
};
var Ve = function(e, t, r) {
  this.start = e, this.end = t, this.original = r, this.intro = "", this.outro = "", this.content = r, this.storeName = false, this.edited = false, Object.defineProperties(this, {
    previous: { writable: true, value: null },
    next: { writable: true, value: null }
  });
};
Ve.prototype.appendLeft = function(e) {
  this.outro += e;
};
Ve.prototype.appendRight = function(e) {
  this.intro = this.intro + e;
};
Ve.prototype.clone = function() {
  var e = new Ve(this.start, this.end, this.original);
  return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
};
Ve.prototype.contains = function(e) {
  return this.start < e && e < this.end;
};
Ve.prototype.eachNext = function(e) {
  for (var t = this; t; )
    e(t), t = t.next;
};
Ve.prototype.eachPrevious = function(e) {
  for (var t = this; t; )
    e(t), t = t.previous;
};
Ve.prototype.edit = function(e, t, r) {
  return this.content = e, r || (this.intro = "", this.outro = ""), this.storeName = t, this.edited = true, this;
};
Ve.prototype.prependLeft = function(e) {
  this.outro = e + this.outro;
};
Ve.prototype.prependRight = function(e) {
  this.intro = e + this.intro;
};
Ve.prototype.split = function(e) {
  var t = e - this.start, r = this.original.slice(0, t), i = this.original.slice(t);
  this.original = r;
  var n = new Ve(e, this.end, i);
  return n.outro = this.outro, this.outro = "", this.end = e, this.edited ? (n.edit("", false), this.content = "") : this.content = r, n.next = this.next, n.next && (n.next.previous = n), n.previous = this, this.next = n, n;
};
Ve.prototype.toString = function() {
  return this.intro + this.content + this.outro;
};
Ve.prototype.trimEnd = function(e) {
  if (this.outro = this.outro.replace(e, ""), this.outro.length)
    return true;
  var t = this.content.replace(e, "");
  if (t.length)
    return t !== this.content && this.split(this.start + t.length).edit("", void 0, true), true;
  if (this.edit("", void 0, true), this.intro = this.intro.replace(e, ""), this.intro.length)
    return true;
};
Ve.prototype.trimStart = function(e) {
  if (this.intro = this.intro.replace(e, ""), this.intro.length)
    return true;
  var t = this.content.replace(e, "");
  if (t.length)
    return t !== this.content && (this.split(this.end - t.length), this.edit("", void 0, true)), true;
  if (this.edit("", void 0, true), this.outro = this.outro.replace(e, ""), this.outro.length)
    return true;
};
var Ro = function() {
  throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
};
typeof window < "u" && typeof window.btoa == "function" ? Ro = function(s3) {
  return window.btoa(unescape(encodeURIComponent(s3)));
} : typeof D == "function" && (Ro = function(s3) {
  return D.from(s3, "utf-8").toString("base64");
});
var Pu = function(e) {
  this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = Yb(e.mappings);
};
Pu.prototype.toString = function() {
  return JSON.stringify(this);
};
Pu.prototype.toUrl = function() {
  return "data:application/json;charset=utf-8;base64," + Ro(this.toString());
};
function Jb(s3) {
  var e = s3.split(`
`), t = e.filter(function(n) {
    return /^\t+/.test(n);
  }), r = e.filter(function(n) {
    return /^ {2,}/.test(n);
  });
  if (t.length === 0 && r.length === 0)
    return null;
  if (t.length >= r.length)
    return "	";
  var i = r.reduce(function(n, a) {
    var o = /^ +/.exec(a)[0].length;
    return Math.min(o, n);
  }, 1 / 0);
  return new Array(i + 1).join(" ");
}
function Qb(s3, e) {
  var t = s3.split(/[/\\]/), r = e.split(/[/\\]/);
  for (t.pop(); t[0] === r[0]; )
    t.shift(), r.shift();
  if (t.length)
    for (var i = t.length; i--; )
      t[i] = "..";
  return t.concat(r).join("/");
}
var Xb = Object.prototype.toString;
function Zb(s3) {
  return Xb.call(s3) === "[object Object]";
}
function Af(s3) {
  for (var e = s3.split(`
`), t = [], r = 0, i = 0; r < e.length; r++)
    t.push(i), i += e[r].length + 1;
  return function(a) {
    for (var o = 0, l = t.length; o < l; ) {
      var u = o + l >> 1;
      a < t[u] ? l = u : o = u + 1;
    }
    var c = o - 1, h = a - t[c];
    return { line: c, column: h };
  };
}
var _a = function(e) {
  this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
};
_a.prototype.addEdit = function(e, t, r, i) {
  if (t.length) {
    var n = [this.generatedCodeColumn, e, r.line, r.column];
    i >= 0 && n.push(i), this.rawSegments.push(n);
  } else
    this.pending && this.rawSegments.push(this.pending);
  this.advance(t), this.pending = null;
};
_a.prototype.addUneditedChunk = function(e, t, r, i, n) {
  for (var a = t.start, o = true; a < t.end; )
    (this.hires || o || n.has(a)) && this.rawSegments.push([this.generatedCodeColumn, e, i.line, i.column]), r[a] === `
` ? (i.line += 1, i.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, o = true) : (i.column += 1, this.generatedCodeColumn += 1, o = false), a += 1;
  this.pending = null;
};
_a.prototype.advance = function(e) {
  if (!!e) {
    var t = e.split(`
`);
    if (t.length > 1) {
      for (var r = 0; r < t.length - 1; r++)
        this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += t[t.length - 1].length;
  }
};
var qs = `
`;
var gs = {
  insertLeft: false,
  insertRight: false,
  storeName: false
};
var fe = function(e, t) {
  t === void 0 && (t = {});
  var r = new Ve(0, e.length, e);
  Object.defineProperties(this, {
    original: { writable: true, value: e },
    outro: { writable: true, value: "" },
    intro: { writable: true, value: "" },
    firstChunk: { writable: true, value: r },
    lastChunk: { writable: true, value: r },
    lastSearchedChunk: { writable: true, value: r },
    byStart: { writable: true, value: {} },
    byEnd: { writable: true, value: {} },
    filename: { writable: true, value: t.filename },
    indentExclusionRanges: { writable: true, value: t.indentExclusionRanges },
    sourcemapLocations: { writable: true, value: new Ca() },
    storedNames: { writable: true, value: {} },
    indentStr: { writable: true, value: Jb(e) }
  }), this.byStart[0] = r, this.byEnd[e.length] = r;
};
fe.prototype.addSourcemapLocation = function(e) {
  this.sourcemapLocations.add(e);
};
fe.prototype.append = function(e) {
  if (typeof e != "string")
    throw new TypeError("outro content must be a string");
  return this.outro += e, this;
};
fe.prototype.appendLeft = function(e, t) {
  if (typeof t != "string")
    throw new TypeError("inserted content must be a string");
  this._split(e);
  var r = this.byEnd[e];
  return r ? r.appendLeft(t) : this.intro += t, this;
};
fe.prototype.appendRight = function(e, t) {
  if (typeof t != "string")
    throw new TypeError("inserted content must be a string");
  this._split(e);
  var r = this.byStart[e];
  return r ? r.appendRight(t) : this.outro += t, this;
};
fe.prototype.clone = function() {
  for (var e = new fe(this.original, { filename: this.filename }), t = this.firstChunk, r = e.firstChunk = e.lastSearchedChunk = t.clone(); t; ) {
    e.byStart[r.start] = r, e.byEnd[r.end] = r;
    var i = t.next, n = i && i.clone();
    n && (r.next = n, n.previous = r, r = n), t = i;
  }
  return e.lastChunk = r, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new Ca(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
};
fe.prototype.generateDecodedMap = function(e) {
  var t = this;
  e = e || {};
  var r = 0, i = Object.keys(this.storedNames), n = new _a(e.hires), a = Af(this.original);
  return this.intro && n.advance(this.intro), this.firstChunk.eachNext(function(o) {
    var l = a(o.start);
    o.intro.length && n.advance(o.intro), o.edited ? n.addEdit(r, o.content, l, o.storeName ? i.indexOf(o.original) : -1) : n.addUneditedChunk(r, o, t.original, l, t.sourcemapLocations), o.outro.length && n.advance(o.outro);
  }), {
    file: e.file ? e.file.split(/[/\\]/).pop() : null,
    sources: [e.source ? Qb(e.file || "", e.source) : null],
    sourcesContent: e.includeContent ? [this.original] : [null],
    names: i,
    mappings: n.raw
  };
};
fe.prototype.generateMap = function(e) {
  return new Pu(this.generateDecodedMap(e));
};
fe.prototype.getIndentString = function() {
  return this.indentStr === null ? "	" : this.indentStr;
};
fe.prototype.indent = function(e, t) {
  var r = /^[^\r\n]/gm;
  if (Zb(e) && (t = e, e = void 0), e = e !== void 0 ? e : this.indentStr || "	", e === "")
    return this;
  t = t || {};
  var i = {};
  if (t.exclude) {
    var n = typeof t.exclude[0] == "number" ? [t.exclude] : t.exclude;
    n.forEach(function(p) {
      for (var f = p[0]; f < p[1]; f += 1)
        i[f] = true;
    });
  }
  var a = t.indentStart !== false, o = function(p) {
    return a ? "" + e + p : (a = true, p);
  };
  this.intro = this.intro.replace(r, o);
  for (var l = 0, u = this.firstChunk; u; ) {
    var c = u.end;
    if (u.edited)
      i[l] || (u.content = u.content.replace(r, o), u.content.length && (a = u.content[u.content.length - 1] === `
`));
    else
      for (l = u.start; l < c; ) {
        if (!i[l]) {
          var h = this.original[l];
          h === `
` ? a = true : h !== "\r" && a && (a = false, l === u.start || (this._splitChunk(u, l), u = u.next), u.prependRight(e));
        }
        l += 1;
      }
    l = u.end, u = u.next;
  }
  return this.outro = this.outro.replace(r, o), this;
};
fe.prototype.insert = function() {
  throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
};
fe.prototype.insertLeft = function(e, t) {
  return gs.insertLeft || (console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"), gs.insertLeft = true), this.appendLeft(e, t);
};
fe.prototype.insertRight = function(e, t) {
  return gs.insertRight || (console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"), gs.insertRight = true), this.prependRight(e, t);
};
fe.prototype.move = function(e, t, r) {
  if (r >= e && r <= t)
    throw new Error("Cannot move a selection inside itself");
  this._split(e), this._split(t), this._split(r);
  var i = this.byStart[e], n = this.byEnd[t], a = i.previous, o = n.next, l = this.byStart[r];
  if (!l && n === this.lastChunk)
    return this;
  var u = l ? l.previous : this.lastChunk;
  return a && (a.next = o), o && (o.previous = a), u && (u.next = i), l && (l.previous = n), i.previous || (this.firstChunk = n.next), n.next || (this.lastChunk = i.previous, this.lastChunk.next = null), i.previous = u, n.next = l || null, u || (this.firstChunk = i), l || (this.lastChunk = n), this;
};
fe.prototype.overwrite = function(e, t, r, i) {
  if (typeof r != "string")
    throw new TypeError("replacement content must be a string");
  for (; e < 0; )
    e += this.original.length;
  for (; t < 0; )
    t += this.original.length;
  if (t > this.original.length)
    throw new Error("end is out of bounds");
  if (e === t)
    throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");
  this._split(e), this._split(t), i === true && (gs.storeName || (console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"), gs.storeName = true), i = { storeName: true });
  var n = i !== void 0 ? i.storeName : false, a = i !== void 0 ? i.contentOnly : false;
  if (n) {
    var o = this.original.slice(e, t);
    this.storedNames[o] = true;
  }
  var l = this.byStart[e], u = this.byEnd[t];
  if (l) {
    if (t > l.end && l.next !== this.byStart[l.end])
      throw new Error("Cannot overwrite across a split point");
    if (l.edit(r, n, a), l !== u) {
      for (var c = l.next; c !== u; )
        c.edit("", false), c = c.next;
      c.edit("", false);
    }
  } else {
    var h = new Ve(e, t, "").edit(r, n);
    u.next = h, h.previous = u;
  }
  return this;
};
fe.prototype.prepend = function(e) {
  if (typeof e != "string")
    throw new TypeError("outro content must be a string");
  return this.intro = e + this.intro, this;
};
fe.prototype.prependLeft = function(e, t) {
  if (typeof t != "string")
    throw new TypeError("inserted content must be a string");
  this._split(e);
  var r = this.byEnd[e];
  return r ? r.prependLeft(t) : this.intro = t + this.intro, this;
};
fe.prototype.prependRight = function(e, t) {
  if (typeof t != "string")
    throw new TypeError("inserted content must be a string");
  this._split(e);
  var r = this.byStart[e];
  return r ? r.prependRight(t) : this.outro = t + this.outro, this;
};
fe.prototype.remove = function(e, t) {
  for (; e < 0; )
    e += this.original.length;
  for (; t < 0; )
    t += this.original.length;
  if (e === t)
    return this;
  if (e < 0 || t > this.original.length)
    throw new Error("Character is out of bounds");
  if (e > t)
    throw new Error("end must be greater than start");
  this._split(e), this._split(t);
  for (var r = this.byStart[e]; r; )
    r.intro = "", r.outro = "", r.edit(""), r = t > r.end ? this.byStart[r.end] : null;
  return this;
};
fe.prototype.lastChar = function() {
  if (this.outro.length)
    return this.outro[this.outro.length - 1];
  var e = this.lastChunk;
  do {
    if (e.outro.length)
      return e.outro[e.outro.length - 1];
    if (e.content.length)
      return e.content[e.content.length - 1];
    if (e.intro.length)
      return e.intro[e.intro.length - 1];
  } while (e = e.previous);
  return this.intro.length ? this.intro[this.intro.length - 1] : "";
};
fe.prototype.lastLine = function() {
  var e = this.outro.lastIndexOf(qs);
  if (e !== -1)
    return this.outro.substr(e + 1);
  var t = this.outro, r = this.lastChunk;
  do {
    if (r.outro.length > 0) {
      if (e = r.outro.lastIndexOf(qs), e !== -1)
        return r.outro.substr(e + 1) + t;
      t = r.outro + t;
    }
    if (r.content.length > 0) {
      if (e = r.content.lastIndexOf(qs), e !== -1)
        return r.content.substr(e + 1) + t;
      t = r.content + t;
    }
    if (r.intro.length > 0) {
      if (e = r.intro.lastIndexOf(qs), e !== -1)
        return r.intro.substr(e + 1) + t;
      t = r.intro + t;
    }
  } while (r = r.previous);
  return e = this.intro.lastIndexOf(qs), e !== -1 ? this.intro.substr(e + 1) + t : this.intro + t;
};
fe.prototype.slice = function(e, t) {
  for (e === void 0 && (e = 0), t === void 0 && (t = this.original.length); e < 0; )
    e += this.original.length;
  for (; t < 0; )
    t += this.original.length;
  for (var r = "", i = this.firstChunk; i && (i.start > e || i.end <= e); ) {
    if (i.start < t && i.end >= t)
      return r;
    i = i.next;
  }
  if (i && i.edited && i.start !== e)
    throw new Error("Cannot use replaced character " + e + " as slice start anchor.");
  for (var n = i; i; ) {
    i.intro && (n !== i || i.start === e) && (r += i.intro);
    var a = i.start < t && i.end >= t;
    if (a && i.edited && i.end !== t)
      throw new Error("Cannot use replaced character " + t + " as slice end anchor.");
    var o = n === i ? e - i.start : 0, l = a ? i.content.length + t - i.end : i.content.length;
    if (r += i.content.slice(o, l), i.outro && (!a || i.end === t) && (r += i.outro), a)
      break;
    i = i.next;
  }
  return r;
};
fe.prototype.snip = function(e, t) {
  var r = this.clone();
  return r.remove(0, e), r.remove(t, r.original.length), r;
};
fe.prototype._split = function(e) {
  if (!(this.byStart[e] || this.byEnd[e]))
    for (var t = this.lastSearchedChunk, r = e > t.end; t; ) {
      if (t.contains(e))
        return this._splitChunk(t, e);
      t = r ? this.byStart[t.end] : this.byEnd[t.start];
    }
};
fe.prototype._splitChunk = function(e, t) {
  if (e.edited && e.content.length) {
    var r = Af(this.original)(t);
    throw new Error("Cannot split a chunk that has already been edited (" + r.line + ":" + r.column + ' – "' + e.original + '")');
  }
  var i = e.split(t);
  return this.byEnd[t] = e, this.byStart[t] = i, this.byEnd[i.end] = i, e === this.lastChunk && (this.lastChunk = i), this.lastSearchedChunk = e, true;
};
fe.prototype.toString = function() {
  for (var e = this.intro, t = this.firstChunk; t; )
    e += t.toString(), t = t.next;
  return e + this.outro;
};
fe.prototype.isEmpty = function() {
  var e = this.firstChunk;
  do
    if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim())
      return false;
  while (e = e.next);
  return true;
};
fe.prototype.length = function() {
  var e = this.firstChunk, t = 0;
  do
    t += e.intro.length + e.content.length + e.outro.length;
  while (e = e.next);
  return t;
};
fe.prototype.trimLines = function() {
  return this.trim("[\\r\\n]");
};
fe.prototype.trim = function(e) {
  return this.trimStart(e).trimEnd(e);
};
fe.prototype.trimEndAborted = function(e) {
  var t = new RegExp((e || "\\s") + "+$");
  if (this.outro = this.outro.replace(t, ""), this.outro.length)
    return true;
  var r = this.lastChunk;
  do {
    var i = r.end, n = r.trimEnd(t);
    if (r.end !== i && (this.lastChunk === r && (this.lastChunk = r.next), this.byEnd[r.end] = r, this.byStart[r.next.start] = r.next, this.byEnd[r.next.end] = r.next), n)
      return true;
    r = r.previous;
  } while (r);
  return false;
};
fe.prototype.trimEnd = function(e) {
  return this.trimEndAborted(e), this;
};
fe.prototype.trimStartAborted = function(e) {
  var t = new RegExp("^" + (e || "\\s") + "+");
  if (this.intro = this.intro.replace(t, ""), this.intro.length)
    return true;
  var r = this.firstChunk;
  do {
    var i = r.end, n = r.trimStart(t);
    if (r.end !== i && (r === this.lastChunk && (this.lastChunk = r.next), this.byEnd[r.end] = r, this.byStart[r.next.start] = r.next, this.byEnd[r.next.end] = r.next), n)
      return true;
    r = r.next;
  } while (r);
  return false;
};
fe.prototype.trimStart = function(e) {
  return this.trimStartAborted(e), this;
};
function Cf(s3, e) {
  for (var t = 0, r = s3.length - 1; r >= 0; r--) {
    var i = s3[r];
    i === "." ? s3.splice(r, 1) : i === ".." ? (s3.splice(r, 1), t++) : t && (s3.splice(r, 1), t--);
  }
  if (e)
    for (; t--; t)
      s3.unshift("..");
  return s3;
}
var eS = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var Au = function(s3) {
  return eS.exec(s3).slice(1);
};
function Mn() {
  for (var s3 = "", e = false, t = arguments.length - 1; t >= -1 && !e; t--) {
    var r = t >= 0 ? arguments[t] : "/";
    if (typeof r != "string")
      throw new TypeError("Arguments to path.resolve must be strings");
    if (!r)
      continue;
    s3 = r + "/" + s3, e = r.charAt(0) === "/";
  }
  return s3 = Cf(Iu(s3.split("/"), function(i) {
    return !!i;
  }), !e).join("/"), (e ? "/" : "") + s3 || ".";
}
function Cu(s3) {
  var e = _u(s3), t = tS(s3, -1) === "/";
  return s3 = Cf(Iu(s3.split("/"), function(r) {
    return !!r;
  }), !e).join("/"), !s3 && !e && (s3 = "."), s3 && t && (s3 += "/"), (e ? "/" : "") + s3;
}
function _u(s3) {
  return s3.charAt(0) === "/";
}
function _f() {
  var s3 = Array.prototype.slice.call(arguments, 0);
  return Cu(Iu(s3, function(e, t) {
    if (typeof e != "string")
      throw new TypeError("Arguments to path.join must be strings");
    return e;
  }).join("/"));
}
function If(s3, e) {
  s3 = Mn(s3).substr(1), e = Mn(e).substr(1);
  function t(u) {
    for (var c = 0; c < u.length && u[c] === ""; c++)
      ;
    for (var h = u.length - 1; h >= 0 && u[h] === ""; h--)
      ;
    return c > h ? [] : u.slice(c, h - c + 1);
  }
  for (var r = t(s3.split("/")), i = t(e.split("/")), n = Math.min(r.length, i.length), a = n, o = 0; o < n; o++)
    if (r[o] !== i[o]) {
      a = o;
      break;
    }
  for (var l = [], o = a; o < r.length; o++)
    l.push("..");
  return l = l.concat(i.slice(a)), l.join("/");
}
var kf = "/";
var Nf = ":";
function Of(s3) {
  var e = Au(s3), t = e[0], r = e[1];
  return !t && !r ? "." : (r && (r = r.substr(0, r.length - 1)), t + r);
}
function Lf(s3, e) {
  var t = Au(s3)[2];
  return e && t.substr(-1 * e.length) === e && (t = t.substr(0, t.length - e.length)), t;
}
function Mf(s3) {
  return Au(s3)[3];
}
var bi = {
  extname: Mf,
  basename: Lf,
  dirname: Of,
  sep: kf,
  delimiter: Nf,
  relative: If,
  join: _f,
  isAbsolute: _u,
  normalize: Cu,
  resolve: Mn
};
function Iu(s3, e) {
  if (s3.filter)
    return s3.filter(e);
  for (var t = [], r = 0; r < s3.length; r++)
    e(s3[r], r, s3) && t.push(s3[r]);
  return t;
}
var tS = "ab".substr(-1) === "b" ? function(s3, e, t) {
  return s3.substr(e, t);
} : function(s3, e, t) {
  return e < 0 && (e = s3.length + e), s3.substr(e, t);
};
var rS = Object.freeze({
  __proto__: null,
  resolve: Mn,
  normalize: Cu,
  isAbsolute: _u,
  join: _f,
  relative: If,
  sep: kf,
  delimiter: Nf,
  dirname: Of,
  basename: Lf,
  extname: Mf,
  default: bi
});
var Za = 2147483647;
var ei = 36;
var Df = 1;
var Fo = 26;
var sS = 38;
var iS = 700;
var nS = 72;
var aS = 128;
var oS = "-";
var lS = /[^\x20-\x7E]/;
var uS = /[\x2E\u3002\uFF0E\uFF61]/g;
var cS = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
var eo = ei - Df;
var Xr = Math.floor;
var to = String.fromCharCode;
function Gc(s3) {
  throw new RangeError(cS[s3]);
}
function hS(s3, e) {
  for (var t = s3.length, r = []; t--; )
    r[t] = e(s3[t]);
  return r;
}
function pS(s3, e) {
  var t = s3.split("@"), r = "";
  t.length > 1 && (r = t[0] + "@", s3 = t[1]), s3 = s3.replace(uS, ".");
  var i = s3.split("."), n = hS(i, e).join(".");
  return r + n;
}
function fS(s3) {
  for (var e = [], t = 0, r = s3.length, i, n; t < r; )
    i = s3.charCodeAt(t++), i >= 55296 && i <= 56319 && t < r ? (n = s3.charCodeAt(t++), (n & 64512) == 56320 ? e.push(((i & 1023) << 10) + (n & 1023) + 65536) : (e.push(i), t--)) : e.push(i);
  return e;
}
function Wc(s3, e) {
  return s3 + 22 + 75 * (s3 < 26) - ((e != 0) << 5);
}
function dS(s3, e, t) {
  var r = 0;
  for (s3 = t ? Xr(s3 / iS) : s3 >> 1, s3 += Xr(s3 / e); s3 > eo * Fo >> 1; r += ei)
    s3 = Xr(s3 / eo);
  return Xr(r + (eo + 1) * s3 / (s3 + sS));
}
function mS(s3) {
  var e, t, r, i, n, a, o, l, u, c, h, p = [], f, g, d, m;
  for (s3 = fS(s3), f = s3.length, e = aS, t = 0, n = nS, a = 0; a < f; ++a)
    h = s3[a], h < 128 && p.push(to(h));
  for (r = i = p.length, i && p.push(oS); r < f; ) {
    for (o = Za, a = 0; a < f; ++a)
      h = s3[a], h >= e && h < o && (o = h);
    for (g = r + 1, o - e > Xr((Za - t) / g) && Gc("overflow"), t += (o - e) * g, e = o, a = 0; a < f; ++a)
      if (h = s3[a], h < e && ++t > Za && Gc("overflow"), h == e) {
        for (l = t, u = ei; c = u <= n ? Df : u >= n + Fo ? Fo : u - n, !(l < c); u += ei)
          m = l - c, d = ei - c, p.push(to(Wc(c + m % d, 0))), l = Xr(m / d);
        p.push(to(Wc(l, 0))), n = dS(t, g, r == i), t = 0, ++r;
      }
    ++t, ++e;
  }
  return p.join("");
}
function gS(s3) {
  return pS(s3, function(e) {
    return lS.test(e) ? "xn--" + mS(e) : e;
  });
}
function Rf() {
  throw new Error("setTimeout has not been defined");
}
function Ff() {
  throw new Error("clearTimeout has not been defined");
}
var ar = Rf;
var or = Ff;
typeof fr.setTimeout == "function" && (ar = setTimeout);
typeof fr.clearTimeout == "function" && (or = clearTimeout);
function Bf(s3) {
  if (ar === setTimeout)
    return setTimeout(s3, 0);
  if ((ar === Rf || !ar) && setTimeout)
    return ar = setTimeout, setTimeout(s3, 0);
  try {
    return ar(s3, 0);
  } catch {
    try {
      return ar.call(null, s3, 0);
    } catch {
      return ar.call(this, s3, 0);
    }
  }
}
function yS(s3) {
  if (or === clearTimeout)
    return clearTimeout(s3);
  if ((or === Ff || !or) && clearTimeout)
    return or = clearTimeout, clearTimeout(s3);
  try {
    return or(s3);
  } catch {
    try {
      return or.call(null, s3);
    } catch {
      return or.call(this, s3);
    }
  }
}
var Gt = [];
var rs = false;
var _r;
var dn = -1;
function vS() {
  !rs || !_r || (rs = false, _r.length ? Gt = _r.concat(Gt) : dn = -1, Gt.length && $f());
}
function $f() {
  if (!rs) {
    var s3 = Bf(vS);
    rs = true;
    for (var e = Gt.length; e; ) {
      for (_r = Gt, Gt = []; ++dn < e; )
        _r && _r[dn].run();
      dn = -1, e = Gt.length;
    }
    _r = null, rs = false, yS(s3);
  }
}
function bS(s3) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var t = 1; t < arguments.length; t++)
      e[t - 1] = arguments[t];
  Gt.push(new Uf(s3, e)), Gt.length === 1 && !rs && Bf($f);
}
function Uf(s3, e) {
  this.fun = s3, this.array = e;
}
Uf.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var SS = "browser";
var wS = "browser";
var ES = true;
var xS = {};
var TS = [];
var PS = "";
var AS = {};
var CS = {};
var _S = {};
function jr() {
}
var IS = jr;
var kS = jr;
var NS = jr;
var OS = jr;
var LS = jr;
var MS = jr;
var DS = jr;
function RS(s3) {
  throw new Error("process.binding is not supported");
}
function FS() {
  return "/";
}
function BS(s3) {
  throw new Error("process.chdir is not supported");
}
function $S() {
  return 0;
}
var Hr = fr.performance || {};
var US = Hr.now || Hr.mozNow || Hr.msNow || Hr.oNow || Hr.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function jS(s3) {
  var e = US.call(Hr) * 1e-3, t = Math.floor(e), r = Math.floor(e % 1 * 1e9);
  return s3 && (t = t - s3[0], r = r - s3[1], r < 0 && (t--, r += 1e9)), [t, r];
}
var qS = /* @__PURE__ */ new Date();
function VS() {
  var s3 = /* @__PURE__ */ new Date(), e = s3 - qS;
  return e / 1e3;
}
var ss = {
  nextTick: bS,
  title: SS,
  browser: ES,
  env: xS,
  argv: TS,
  version: PS,
  versions: AS,
  on: IS,
  addListener: kS,
  once: NS,
  off: OS,
  removeListener: LS,
  removeAllListeners: MS,
  emit: DS,
  binding: RS,
  cwd: FS,
  chdir: BS,
  umask: $S,
  hrtime: jS,
  platform: wS,
  release: CS,
  config: _S,
  uptime: VS
};
var Bo;
typeof Object.create == "function" ? Bo = function(e, t) {
  e.super_ = t, e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
} : Bo = function(e, t) {
  e.super_ = t;
  var r = function() {
  };
  r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
};
var jf = Bo;
var zS = /%[sdj%]/g;
function Ia(s3) {
  if (!mr(s3)) {
    for (var e = [], t = 0; t < arguments.length; t++)
      e.push(Dt(arguments[t]));
    return e.join(" ");
  }
  for (var t = 1, r = arguments, i = r.length, n = String(s3).replace(zS, function(o) {
    if (o === "%%")
      return "%";
    if (t >= i)
      return o;
    switch (o) {
      case "%s":
        return String(r[t++]);
      case "%d":
        return Number(r[t++]);
      case "%j":
        try {
          return JSON.stringify(r[t++]);
        } catch {
          return "[Circular]";
        }
      default:
        return o;
    }
  }), a = r[t]; t < i; a = r[++t])
    Wt(a) || !tr(a) ? n += " " + a : n += " " + Dt(a);
  return n;
}
function ku(s3, e) {
  if (Ot(fr.process))
    return function() {
      return ku(s3, e).apply(this, arguments);
    };
  if (ss.noDeprecation === true)
    return s3;
  var t = false;
  function r() {
    if (!t) {
      if (ss.throwDeprecation)
        throw new Error(e);
      ss.traceDeprecation ? console.trace(e) : console.error(e), t = true;
    }
    return s3.apply(this, arguments);
  }
  return r;
}
var Gi = {};
var ro;
function qf(s3) {
  if (Ot(ro) && (ro = ss.env.NODE_DEBUG || ""), s3 = s3.toUpperCase(), !Gi[s3])
    if (new RegExp("\\b" + s3 + "\\b", "i").test(ro)) {
      var e = 0;
      Gi[s3] = function() {
        var t = Ia.apply(null, arguments);
        console.error("%s %d: %s", s3, e, t);
      };
    } else
      Gi[s3] = function() {
      };
  return Gi[s3];
}
function Dt(s3, e) {
  var t = {
    seen: [],
    stylize: WS
  };
  return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), ka(e) ? t.showHidden = e : e && Du(t, e), Ot(t.showHidden) && (t.showHidden = false), Ot(t.depth) && (t.depth = 2), Ot(t.colors) && (t.colors = false), Ot(t.customInspect) && (t.customInspect = true), t.colors && (t.stylize = GS), Dn(t, s3, t.depth);
}
Dt.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
Dt.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
function GS(s3, e) {
  var t = Dt.styles[e];
  return t ? "\x1B[" + Dt.colors[t][0] + "m" + s3 + "\x1B[" + Dt.colors[t][1] + "m" : s3;
}
function WS(s3, e) {
  return s3;
}
function HS(s3) {
  var e = {};
  return s3.forEach(function(t, r) {
    e[t] = true;
  }), e;
}
function Dn(s3, e, t) {
  if (s3.customInspect && e && si(e.inspect) && e.inspect !== Dt && !(e.constructor && e.constructor.prototype === e)) {
    var r = e.inspect(t, s3);
    return mr(r) || (r = Dn(s3, r, t)), r;
  }
  var i = KS(s3, e);
  if (i)
    return i;
  var n = Object.keys(e), a = HS(n);
  if (s3.showHidden && (n = Object.getOwnPropertyNames(e)), ri(e) && (n.indexOf("message") >= 0 || n.indexOf("description") >= 0))
    return so(e);
  if (n.length === 0) {
    if (si(e)) {
      var o = e.name ? ": " + e.name : "";
      return s3.stylize("[Function" + o + "]", "special");
    }
    if (ti(e))
      return s3.stylize(RegExp.prototype.toString.call(e), "regexp");
    if (Rn(e))
      return s3.stylize(Date.prototype.toString.call(e), "date");
    if (ri(e))
      return so(e);
  }
  var l = "", u = false, c = ["{", "}"];
  if (Nu(e) && (u = true, c = ["[", "]"]), si(e)) {
    var h = e.name ? ": " + e.name : "";
    l = " [Function" + h + "]";
  }
  if (ti(e) && (l = " " + RegExp.prototype.toString.call(e)), Rn(e) && (l = " " + Date.prototype.toUTCString.call(e)), ri(e) && (l = " " + so(e)), n.length === 0 && (!u || e.length == 0))
    return c[0] + l + c[1];
  if (t < 0)
    return ti(e) ? s3.stylize(RegExp.prototype.toString.call(e), "regexp") : s3.stylize("[Object]", "special");
  s3.seen.push(e);
  var p;
  return u ? p = YS(s3, e, t, a, n) : p = n.map(function(f) {
    return $o(s3, e, t, a, f, u);
  }), s3.seen.pop(), JS(p, l, c);
}
function KS(s3, e) {
  if (Ot(e))
    return s3.stylize("undefined", "undefined");
  if (mr(e)) {
    var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return s3.stylize(t, "string");
  }
  if (Lu(e))
    return s3.stylize("" + e, "number");
  if (ka(e))
    return s3.stylize("" + e, "boolean");
  if (Wt(e))
    return s3.stylize("null", "null");
}
function so(s3) {
  return "[" + Error.prototype.toString.call(s3) + "]";
}
function YS(s3, e, t, r, i) {
  for (var n = [], a = 0, o = e.length; a < o; ++a)
    Hf(e, String(a)) ? n.push($o(s3, e, t, r, String(a), true)) : n.push("");
  return i.forEach(function(l) {
    l.match(/^\d+$/) || n.push($o(s3, e, t, r, l, true));
  }), n;
}
function $o(s3, e, t, r, i, n) {
  var a, o, l;
  if (l = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }, l.get ? l.set ? o = s3.stylize("[Getter/Setter]", "special") : o = s3.stylize("[Getter]", "special") : l.set && (o = s3.stylize("[Setter]", "special")), Hf(r, i) || (a = "[" + i + "]"), o || (s3.seen.indexOf(l.value) < 0 ? (Wt(t) ? o = Dn(s3, l.value, null) : o = Dn(s3, l.value, t - 1), o.indexOf(`
`) > -1 && (n ? o = o.split(`
`).map(function(u) {
    return "  " + u;
  }).join(`
`).substr(2) : o = `
` + o.split(`
`).map(function(u) {
    return "   " + u;
  }).join(`
`))) : o = s3.stylize("[Circular]", "special")), Ot(a)) {
    if (n && i.match(/^\d+$/))
      return o;
    a = JSON.stringify("" + i), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = s3.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = s3.stylize(a, "string"));
  }
  return a + ": " + o;
}
function JS(s3, e, t) {
  var r = s3.reduce(function(i, n) {
    return n.indexOf(`
`) >= 0, i + n.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  return r > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + s3.join(`,
  `) + " " + t[1] : t[0] + e + " " + s3.join(", ") + " " + t[1];
}
function Nu(s3) {
  return Array.isArray(s3);
}
function ka(s3) {
  return typeof s3 == "boolean";
}
function Wt(s3) {
  return s3 === null;
}
function Ou(s3) {
  return s3 == null;
}
function Lu(s3) {
  return typeof s3 == "number";
}
function mr(s3) {
  return typeof s3 == "string";
}
function Vf(s3) {
  return typeof s3 == "symbol";
}
function Ot(s3) {
  return s3 === void 0;
}
function ti(s3) {
  return tr(s3) && Mu(s3) === "[object RegExp]";
}
function tr(s3) {
  return typeof s3 == "object" && s3 !== null;
}
function Rn(s3) {
  return tr(s3) && Mu(s3) === "[object Date]";
}
function ri(s3) {
  return tr(s3) && (Mu(s3) === "[object Error]" || s3 instanceof Error);
}
function si(s3) {
  return typeof s3 == "function";
}
function zf(s3) {
  return s3 === null || typeof s3 == "boolean" || typeof s3 == "number" || typeof s3 == "string" || typeof s3 == "symbol" || typeof s3 > "u";
}
function Gf(s3) {
  return D.isBuffer(s3);
}
function Mu(s3) {
  return Object.prototype.toString.call(s3);
}
function io(s3) {
  return s3 < 10 ? "0" + s3.toString(10) : s3.toString(10);
}
var QS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function XS() {
  var s3 = /* @__PURE__ */ new Date(), e = [
    io(s3.getHours()),
    io(s3.getMinutes()),
    io(s3.getSeconds())
  ].join(":");
  return [s3.getDate(), QS[s3.getMonth()], e].join(" ");
}
function Wf() {
  console.log("%s - %s", XS(), Ia.apply(null, arguments));
}
function Du(s3, e) {
  if (!e || !tr(e))
    return s3;
  for (var t = Object.keys(e), r = t.length; r--; )
    s3[t[r]] = e[t[r]];
  return s3;
}
function Hf(s3, e) {
  return Object.prototype.hasOwnProperty.call(s3, e);
}
var ZS = {
  inherits: jf,
  _extend: Du,
  log: Wf,
  isBuffer: Gf,
  isPrimitive: zf,
  isFunction: si,
  isError: ri,
  isDate: Rn,
  isObject: tr,
  isRegExp: ti,
  isUndefined: Ot,
  isSymbol: Vf,
  isString: mr,
  isNumber: Lu,
  isNullOrUndefined: Ou,
  isNull: Wt,
  isBoolean: ka,
  isArray: Nu,
  inspect: Dt,
  deprecate: ku,
  format: Ia,
  debuglog: qf
};
var e1 = Object.freeze({
  __proto__: null,
  format: Ia,
  deprecate: ku,
  debuglog: qf,
  inspect: Dt,
  isArray: Nu,
  isBoolean: ka,
  isNull: Wt,
  isNullOrUndefined: Ou,
  isNumber: Lu,
  isString: mr,
  isSymbol: Vf,
  isUndefined: Ot,
  isRegExp: ti,
  isObject: tr,
  isDate: Rn,
  isError: ri,
  isFunction: si,
  isPrimitive: zf,
  isBuffer: Gf,
  log: Wf,
  inherits: jf,
  _extend: Du,
  default: ZS
});
function t1(s3, e) {
  return Object.prototype.hasOwnProperty.call(s3, e);
}
var Kf = Array.isArray || function(s3) {
  return Object.prototype.toString.call(s3) === "[object Array]";
};
function Vs(s3) {
  switch (typeof s3) {
    case "string":
      return s3;
    case "boolean":
      return s3 ? "true" : "false";
    case "number":
      return isFinite(s3) ? s3 : "";
    default:
      return "";
  }
}
function r1(s3, e, t, r) {
  return e = e || "&", t = t || "=", s3 === null && (s3 = void 0), typeof s3 == "object" ? Hc(s1(s3), function(i) {
    var n = encodeURIComponent(Vs(i)) + t;
    return Kf(s3[i]) ? Hc(s3[i], function(a) {
      return n + encodeURIComponent(Vs(a));
    }).join(e) : n + encodeURIComponent(Vs(s3[i]));
  }).join(e) : r ? encodeURIComponent(Vs(r)) + t + encodeURIComponent(Vs(s3)) : "";
}
function Hc(s3, e) {
  if (s3.map)
    return s3.map(e);
  for (var t = [], r = 0; r < s3.length; r++)
    t.push(e(s3[r], r));
  return t;
}
var s1 = Object.keys || function(s3) {
  var e = [];
  for (var t in s3)
    Object.prototype.hasOwnProperty.call(s3, t) && e.push(t);
  return e;
};
function Kc(s3, e, t, r) {
  e = e || "&", t = t || "=";
  var i = {};
  if (typeof s3 != "string" || s3.length === 0)
    return i;
  var n = /\+/g;
  s3 = s3.split(e);
  var a = 1e3;
  r && typeof r.maxKeys == "number" && (a = r.maxKeys);
  var o = s3.length;
  a > 0 && o > a && (o = a);
  for (var l = 0; l < o; ++l) {
    var u = s3[l].replace(n, "%20"), c = u.indexOf(t), h, p, f, g;
    c >= 0 ? (h = u.substr(0, c), p = u.substr(c + 1)) : (h = u, p = ""), f = decodeURIComponent(h), g = decodeURIComponent(p), t1(i, f) ? Kf(i[f]) ? i[f].push(g) : i[f] = [i[f], g] : i[f] = g;
  }
  return i;
}
var i1 = {
  parse: ks,
  resolve: Qf,
  resolveObject: Xf,
  format: Jf,
  Url: Et
};
function Et() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var n1 = /^([a-z0-9.+-]+:)/i;
var a1 = /:[0-9]*$/;
var o1 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
var l1 = ["<", ">", '"', "`", " ", "\r", `
`, "	"];
var u1 = ["{", "}", "|", "\\", "^", "`"].concat(l1);
var Uo = ["'"].concat(u1);
var Yc = ["%", "/", "?", ";", "#"].concat(Uo);
var Jc = ["/", "?", "#"];
var c1 = 255;
var Qc = /^[+a-z0-9A-Z_-]{0,63}$/;
var h1 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var p1 = {
  javascript: true,
  "javascript:": true
};
var jo = {
  javascript: true,
  "javascript:": true
};
var is = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function ks(s3, e, t) {
  if (s3 && tr(s3) && s3 instanceof Et)
    return s3;
  var r = new Et();
  return r.parse(s3, e, t), r;
}
Et.prototype.parse = function(s3, e, t) {
  return Yf(this, s3, e, t);
};
function Yf(s3, e, t, r) {
  if (!mr(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var i = e.indexOf("?"), n = i !== -1 && i < e.indexOf("#") ? "?" : "#", a = e.split(n), o = /\\/g;
  a[0] = a[0].replace(o, "/"), e = a.join(n);
  var l = e;
  if (l = l.trim(), !r && e.split("#").length === 1) {
    var u = o1.exec(l);
    if (u)
      return s3.path = l, s3.href = l, s3.pathname = u[1], u[2] ? (s3.search = u[2], t ? s3.query = Kc(s3.search.substr(1)) : s3.query = s3.search.substr(1)) : t && (s3.search = "", s3.query = {}), s3;
  }
  var c = n1.exec(l);
  if (c) {
    c = c[0];
    var h = c.toLowerCase();
    s3.protocol = h, l = l.substr(c.length);
  }
  if (r || c || l.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var p = l.substr(0, 2) === "//";
    p && !(c && jo[c]) && (l = l.substr(2), s3.slashes = true);
  }
  var f, g, d, m;
  if (!jo[c] && (p || c && !is[c])) {
    var y = -1;
    for (f = 0; f < Jc.length; f++)
      g = l.indexOf(Jc[f]), g !== -1 && (y === -1 || g < y) && (y = g);
    var x, E;
    for (y === -1 ? E = l.lastIndexOf("@") : E = l.lastIndexOf("@", y), E !== -1 && (x = l.slice(0, E), l = l.slice(E + 1), s3.auth = decodeURIComponent(x)), y = -1, f = 0; f < Yc.length; f++)
      g = l.indexOf(Yc[f]), g !== -1 && (y === -1 || g < y) && (y = g);
    y === -1 && (y = l.length), s3.host = l.slice(0, y), l = l.slice(y), Zf(s3), s3.hostname = s3.hostname || "";
    var C = s3.hostname[0] === "[" && s3.hostname[s3.hostname.length - 1] === "]";
    if (!C) {
      var v = s3.hostname.split(/\./);
      for (f = 0, d = v.length; f < d; f++) {
        var w = v[f];
        if (!!w && !w.match(Qc)) {
          for (var T = "", P = 0, b = w.length; P < b; P++)
            w.charCodeAt(P) > 127 ? T += "x" : T += w[P];
          if (!T.match(Qc)) {
            var S = v.slice(0, f), k = v.slice(f + 1), _ = w.match(h1);
            _ && (S.push(_[1]), k.unshift(_[2])), k.length && (l = "/" + k.join(".") + l), s3.hostname = S.join(".");
            break;
          }
        }
      }
    }
    s3.hostname.length > c1 ? s3.hostname = "" : s3.hostname = s3.hostname.toLowerCase(), C || (s3.hostname = gS(s3.hostname)), m = s3.port ? ":" + s3.port : "";
    var Q = s3.hostname || "";
    s3.host = Q + m, s3.href += s3.host, C && (s3.hostname = s3.hostname.substr(1, s3.hostname.length - 2), l[0] !== "/" && (l = "/" + l));
  }
  if (!p1[h])
    for (f = 0, d = Uo.length; f < d; f++) {
      var K = Uo[f];
      if (l.indexOf(K) !== -1) {
        var ue = encodeURIComponent(K);
        ue === K && (ue = escape(K)), l = l.split(K).join(ue);
      }
    }
  var oe = l.indexOf("#");
  oe !== -1 && (s3.hash = l.substr(oe), l = l.slice(0, oe));
  var N = l.indexOf("?");
  if (N !== -1 ? (s3.search = l.substr(N), s3.query = l.substr(N + 1), t && (s3.query = Kc(s3.query)), l = l.slice(0, N)) : t && (s3.search = "", s3.query = {}), l && (s3.pathname = l), is[h] && s3.hostname && !s3.pathname && (s3.pathname = "/"), s3.pathname || s3.search) {
    m = s3.pathname || "";
    var R2 = s3.search || "";
    s3.path = m + R2;
  }
  return s3.href = Ru(s3), s3;
}
function Jf(s3) {
  return mr(s3) && (s3 = Yf({}, s3)), Ru(s3);
}
function Ru(s3) {
  var e = s3.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = s3.protocol || "", r = s3.pathname || "", i = s3.hash || "", n = false, a = "";
  s3.host ? n = e + s3.host : s3.hostname && (n = e + (s3.hostname.indexOf(":") === -1 ? s3.hostname : "[" + this.hostname + "]"), s3.port && (n += ":" + s3.port)), s3.query && tr(s3.query) && Object.keys(s3.query).length && (a = r1(s3.query));
  var o = s3.search || a && "?" + a || "";
  return t && t.substr(-1) !== ":" && (t += ":"), s3.slashes || (!t || is[t]) && n !== false ? (n = "//" + (n || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : n || (n = ""), i && i.charAt(0) !== "#" && (i = "#" + i), o && o.charAt(0) !== "?" && (o = "?" + o), r = r.replace(/[?#]/g, function(l) {
    return encodeURIComponent(l);
  }), o = o.replace("#", "%23"), t + n + r + o + i;
}
Et.prototype.format = function() {
  return Ru(this);
};
function Qf(s3, e) {
  return ks(s3, false, true).resolve(e);
}
Et.prototype.resolve = function(s3) {
  return this.resolveObject(ks(s3, false, true)).format();
};
function Xf(s3, e) {
  return s3 ? ks(s3, false, true).resolveObject(e) : e;
}
Et.prototype.resolveObject = function(s3) {
  if (mr(s3)) {
    var e = new Et();
    e.parse(s3, false, true), s3 = e;
  }
  for (var t = new Et(), r = Object.keys(this), i = 0; i < r.length; i++) {
    var n = r[i];
    t[n] = this[n];
  }
  if (t.hash = s3.hash, s3.href === "")
    return t.href = t.format(), t;
  if (s3.slashes && !s3.protocol) {
    for (var a = Object.keys(s3), o = 0; o < a.length; o++) {
      var l = a[o];
      l !== "protocol" && (t[l] = s3[l]);
    }
    return is[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t;
  }
  var u;
  if (s3.protocol && s3.protocol !== t.protocol) {
    if (!is[s3.protocol]) {
      for (var c = Object.keys(s3), h = 0; h < c.length; h++) {
        var p = c[h];
        t[p] = s3[p];
      }
      return t.href = t.format(), t;
    }
    if (t.protocol = s3.protocol, !s3.host && !jo[s3.protocol]) {
      for (u = (s3.pathname || "").split("/"); u.length && !(s3.host = u.shift()); )
        ;
      s3.host || (s3.host = ""), s3.hostname || (s3.hostname = ""), u[0] !== "" && u.unshift(""), u.length < 2 && u.unshift(""), t.pathname = u.join("/");
    } else
      t.pathname = s3.pathname;
    if (t.search = s3.search, t.query = s3.query, t.host = s3.host || "", t.auth = s3.auth, t.hostname = s3.hostname || s3.host, t.port = s3.port, t.pathname || t.search) {
      var f = t.pathname || "", g = t.search || "";
      t.path = f + g;
    }
    return t.slashes = t.slashes || s3.slashes, t.href = t.format(), t;
  }
  var d = t.pathname && t.pathname.charAt(0) === "/", m = s3.host || s3.pathname && s3.pathname.charAt(0) === "/", y = m || d || t.host && s3.pathname, x = y, E = t.pathname && t.pathname.split("/") || [], C = t.protocol && !is[t.protocol];
  u = s3.pathname && s3.pathname.split("/") || [], C && (t.hostname = "", t.port = null, t.host && (E[0] === "" ? E[0] = t.host : E.unshift(t.host)), t.host = "", s3.protocol && (s3.hostname = null, s3.port = null, s3.host && (u[0] === "" ? u[0] = s3.host : u.unshift(s3.host)), s3.host = null), y = y && (u[0] === "" || E[0] === ""));
  var v;
  if (m)
    t.host = s3.host || s3.host === "" ? s3.host : t.host, t.hostname = s3.hostname || s3.hostname === "" ? s3.hostname : t.hostname, t.search = s3.search, t.query = s3.query, E = u;
  else if (u.length)
    E || (E = []), E.pop(), E = E.concat(u), t.search = s3.search, t.query = s3.query;
  else if (!Ou(s3.search))
    return C && (t.hostname = t.host = E.shift(), v = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : false, v && (t.auth = v.shift(), t.host = t.hostname = v.shift())), t.search = s3.search, t.query = s3.query, (!Wt(t.pathname) || !Wt(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
  if (!E.length)
    return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
  for (var w = E.slice(-1)[0], T = (t.host || s3.host || E.length > 1) && (w === "." || w === "..") || w === "", P = 0, b = E.length; b >= 0; b--)
    w = E[b], w === "." ? E.splice(b, 1) : w === ".." ? (E.splice(b, 1), P++) : P && (E.splice(b, 1), P--);
  if (!y && !x)
    for (; P--; P)
      E.unshift("..");
  y && E[0] !== "" && (!E[0] || E[0].charAt(0) !== "/") && E.unshift(""), T && E.join("/").substr(-1) !== "/" && E.push("");
  var S = E[0] === "" || E[0] && E[0].charAt(0) === "/";
  return C && (t.hostname = t.host = S ? "" : E.length ? E.shift() : "", v = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : false, v && (t.auth = v.shift(), t.host = t.hostname = v.shift())), y = y || t.host && E.length, y && !S && E.unshift(""), E.length ? t.pathname = E.join("/") : (t.pathname = null, t.path = null), (!Wt(t.pathname) || !Wt(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = s3.auth || t.auth, t.slashes = t.slashes || s3.slashes, t.href = t.format(), t;
};
Et.prototype.parseHost = function() {
  return Zf(this);
};
function Zf(s3) {
  var e = s3.host, t = a1.exec(e);
  t && (t = t[0], t !== ":" && (s3.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (s3.hostname = e);
}
var f1 = Object.freeze({
  __proto__: null,
  parse: ks,
  resolve: Qf,
  resolveObject: Xf,
  format: Jf,
  default: i1,
  Url: Et
});
function ed(s3) {
  const e = s3.charAt(0);
  return e === "." || e === "~" || e === "@";
}
var d1 = /^(https?:)?\/\//;
function td(s3) {
  return d1.test(s3);
}
var m1 = /^\s*data:/i;
function qo(s3) {
  return m1.test(s3);
}
function Vo(s3) {
  if (s3.charAt(0) === "~") {
    const t = s3.charAt(1);
    s3 = s3.slice(t === "/" ? 2 : 1);
  }
  return g1(s3);
}
function g1(s3) {
  return ks(be(s3) ? s3 : "", false, true);
}
var Si = {
  base: null,
  includeAbsolute: false,
  tags: {
    video: ["src", "poster"],
    source: ["src"],
    img: ["src"],
    image: ["xlink:href", "href"],
    use: ["xlink:href", "href"]
  }
};
var y1 = (s3) => Object.keys(s3).some((e) => rt(s3[e])) ? Object.assign(Object.assign({}, Si), { tags: s3 }) : Object.assign(Object.assign({}, Si), s3);
var v1 = (s3) => (e, t) => rd(e, t, s3);
var rd = (s3, e, t = Si) => {
  if (s3.type === 1) {
    if (!s3.props.length)
      return;
    const r = t.tags || Si.tags, i = r[s3.tag], n = r["*"];
    if (!i && !n)
      return;
    const a = (i || []).concat(n || []);
    s3.props.forEach((o, l) => {
      if (o.type !== 6 || !a.includes(o.name) || !o.value || td(o.value.content) || qo(o.value.content) || o.value.content[0] === "#" || !t.includeAbsolute && !ed(o.value.content))
        return;
      const u = Vo(o.value.content);
      if (t.base && o.value.content[0] === ".") {
        const h = Vo(t.base), p = h.protocol || "", f = h.host ? p + "//" + h.host : "", g = h.path || "/";
        o.value.content = f + (bi.posix || bi).join(g, u.path + (u.hash || ""));
        return;
      }
      const c = b1(u.path, u.hash, o.loc, e);
      s3.props[l] = {
        type: 7,
        name: "bind",
        arg: G(o.name, true, o.loc),
        exp: c,
        modifiers: [],
        loc: o.loc
      };
    });
  }
};
function b1(s3, e, t, r) {
  if (s3) {
    let i, n;
    const a = r.imports.findIndex((c) => c.path === s3);
    if (a > -1 ? (i = `_imports_${a}`, n = r.imports[a].exp) : (i = `_imports_${r.imports.length}`, n = G(i, false, t, 3), r.imports.push({ exp: n, path: s3 })), !e)
      return n;
    const o = `${i} + '${e}'`, l = G(o, false, t, 3);
    if (!r.hoistStatic)
      return l;
    const u = r.hoists.findIndex((c) => c && c.type === 4 && !c.isStatic && c.content === o);
    return u > -1 ? G(`_hoisted_${u + 1}`, false, t, 3) : r.hoist(l);
  } else
    return G("''", false, t, 3);
}
var S1 = ["img", "source"];
var w1 = /( |\\t|\\n|\\f|\\r)+/g;
var E1 = (s3) => (e, t) => sd(e, t, s3);
var sd = (s3, e, t = Si) => {
  s3.type === 1 && S1.includes(s3.tag) && s3.props.length && s3.props.forEach((r, i) => {
    if (r.name === "srcset" && r.type === 6) {
      if (!r.value)
        return;
      const n = r.value.content;
      if (!n)
        return;
      const a = n.split(",").map((c) => {
        const [h, p] = c.replace(w1, " ").trim().split(" ", 2);
        return { url: h, descriptor: p };
      });
      for (let c = 0; c < a.length; c++) {
        const { url: h } = a[c];
        qo(h) && (a[c + 1].url = h + "," + a[c + 1].url, a.splice(c, 1));
      }
      const o = (c) => !td(c) && !qo(c) && (t.includeAbsolute || ed(c));
      if (!a.some(({ url: c }) => o(c)))
        return;
      if (t.base) {
        const c = t.base, h = [];
        let p = false;
        if (a.forEach((f) => {
          let { url: g, descriptor: d } = f;
          d = d ? ` ${d}` : "", g[0] === "." ? (f.url = (bi.posix || bi).join(c, g), h.push(f.url + d)) : o(g) ? p = true : h.push(g + d);
        }), !p) {
          r.value.content = h.join(", ");
          return;
        }
      }
      const l = je([], r.loc);
      a.forEach(({ url: c, descriptor: h }, p) => {
        if (o(c)) {
          const { path: g } = Vo(c);
          let d;
          if (g) {
            const m = e.imports.findIndex((y) => y.path === g);
            m > -1 ? d = G(`_imports_${m}`, false, r.loc, 3) : (d = G(`_imports_${e.imports.length}`, false, r.loc, 3), e.imports.push({ exp: d, path: g })), l.children.push(d);
          }
        } else {
          const g = G(`"${c}"`, false, r.loc, 3);
          l.children.push(g);
        }
        const f = a.length - 1 > p;
        h && f ? l.children.push(` + ' ${h}, ' + `) : h ? l.children.push(` + ' ${h}'`) : f && l.children.push(" + ', ' + ");
      });
      let u = l;
      e.hoistStatic && (u = e.hoist(l), u.constType = 3), s3.props[i] = {
        type: 7,
        name: "bind",
        arg: G("srcset", true, r.loc),
        exp: u,
        modifiers: [],
        loc: r.loc
      };
    }
  });
};
var Fu = Symbol("ssrInterpolate");
var id = Symbol("ssrRenderVNode");
var nd = Symbol("ssrRenderComponent");
var ad = Symbol("ssrRenderSlot");
var od = Symbol("ssrRenderSlotInner");
var ld = Symbol("ssrRenderClass");
var ud = Symbol("ssrRenderStyle");
var Bu = Symbol("ssrRenderAttrs");
var cd = Symbol("ssrRenderAttr");
var hd = Symbol("ssrRenderDynamicAttr");
var pd = Symbol("ssrRenderList");
var fd = Symbol("ssrIncludeBooleanAttr");
var zo = Symbol("ssrLooseEqual");
var dd = Symbol("ssrLooseContain");
var md = Symbol("ssrRenderDynamicModel");
var gd = Symbol("ssrGetDynamicModelProps");
var yd = Symbol("ssrRenderTeleport");
var vd = Symbol("ssrRenderSuspense");
var bd = Symbol("ssrGetDirectiveProps");
var Go = {
  [Fu]: "ssrInterpolate",
  [id]: "ssrRenderVNode",
  [nd]: "ssrRenderComponent",
  [ad]: "ssrRenderSlot",
  [od]: "ssrRenderSlotInner",
  [ld]: "ssrRenderClass",
  [ud]: "ssrRenderStyle",
  [Bu]: "ssrRenderAttrs",
  [cd]: "ssrRenderAttr",
  [hd]: "ssrRenderDynamicAttr",
  [pd]: "ssrRenderList",
  [fd]: "ssrIncludeBooleanAttr",
  [zo]: "ssrLooseEqual",
  [dd]: "ssrLooseContain",
  [md]: "ssrRenderDynamicModel",
  [gd]: "ssrGetDynamicModelProps",
  [yd]: "ssrRenderTeleport",
  [vd]: "ssrRenderSuspense",
  [bd]: "ssrGetDirectiveProps"
};
El(Go);
var x1 = Mi(/^(if|else|else-if)$/, ru);
function T1(s3, e, t = false) {
  const [r] = s3.branches, i = En(r.condition, Xc(r, e, t));
  e.pushStatement(i);
  let n = i;
  for (let a = 1; a < s3.branches.length; a++) {
    const o = s3.branches[a], l = Xc(o, e, t);
    o.condition ? n = n.alternate = En(o.condition, l) : n.alternate = l;
  }
  n.alternate || (n.alternate = Oi([
    ae("_push", ["`<!---->`"])
  ]));
}
function Xc(s3, e, t = false) {
  const { children: r } = s3, i = !t && (r.length !== 1 || r[0].type !== 1) && !(r.length === 1 && r[0].type === 11);
  return Ns(s3, e, i);
}
var P1 = Mi("for", su);
function A1(s3, e, t = false) {
  const r = !t && (s3.children.length !== 1 || s3.children[0].type !== 1), i = dt(yi(s3.parseResult));
  i.body = Ns(s3, e, r), t || e.pushStringPart("<!--[-->"), e.pushStatement(ae(e.helper(pd), [
    s3.source,
    i
  ])), t || e.pushStringPart("<!--]-->");
}
var C1 = (s3, e) => {
  if (fs(s3)) {
    const { slotName: t, slotProps: r } = lu(s3, e), i = [
      "_ctx.$slots",
      t,
      r || "{}",
      "null",
      "_push",
      "_parent"
    ];
    e.scopeId && e.slotted !== false && i.push(`"${e.scopeId}-s"`);
    let n = ad;
    const a = e.parent;
    a && a.type === 1 && a.tagType === 1 && Sa(a, e, true) === Is && a.children.filter((o) => o.type === 1).length === 1 && (n = od, e.scopeId && e.slotted !== false || i.push("null"), i.push("true")), s3.ssrCodegenNode = ae(e.helper(n), i);
  }
};
function _1(s3, e) {
  const t = s3.ssrCodegenNode;
  if (s3.children.length) {
    const r = dt([]);
    r.body = Ns(s3, e), t.arguments[3] = r;
  }
  if (e.withSlotScopeId) {
    const r = t.arguments[6];
    t.arguments[6] = r ? `${r} + _scopeId` : "_scopeId";
  }
  e.pushStatement(s3.ssrCodegenNode);
}
function wi(s3, e) {
  return Te(s3, e, I1);
}
var I1 = {
  [61]: "Unsafe attribute name for SSR.",
  [62]: "Missing the 'to' prop on teleport element.",
  [63]: "Invalid AST node during SSR transform."
};
function k1(s3, e) {
  const t = lt(s3, "to");
  if (!t) {
    e.onError(wi(62, s3.loc));
    return;
  }
  let r;
  if (t.type === 6 ? r = t.value && G(t.value.content, true) : r = t.exp, !r) {
    e.onError(wi(62, t.loc));
    return;
  }
  const i = lt(s3, "disabled", false, true), n = i ? i.type === 6 ? "true" : i.exp || "false" : "false", a = dt(["_push"], void 0, true, false, s3.loc);
  a.body = Ns(s3, e), e.pushStatement(ae(e.helper(yd), [
    "_push",
    a,
    r,
    n,
    "_parent"
  ]));
}
var Sd = /* @__PURE__ */ new WeakMap();
function N1(s3, e) {
  return () => {
    if (s3.children.length) {
      const t = {
        slotsExp: null,
        wipSlots: []
      };
      Sd.set(s3, t), t.slotsExp = vi(s3, e, (r, i, n) => {
        const a = dt([], void 0, true, false, n);
        return t.wipSlots.push({
          fn: a,
          children: i
        }), a;
      }).slots;
    }
  };
}
function O1(s3, e) {
  const t = Sd.get(s3);
  if (!t)
    return;
  const { slotsExp: r, wipSlots: i } = t;
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    a.fn.body = Ns(a, e);
  }
  e.pushStatement(ae(e.helper(vd), [
    "_push",
    r
  ]));
}
var mn = /* @__PURE__ */ new WeakMap();
var L1 = (s3, e) => {
  if (!(s3.type !== 1 || s3.tagType !== 0))
    return function() {
      const r = [`<${s3.tag}`], i = s3.tag === "textarea" || s3.tag.indexOf("-") > 0, n = ua(s3), a = s3.props.some((h) => h.type === 7 && !Gh(h.name)), o = n || a;
      if (o) {
        const { props: h, directives: p } = _s(s3, e, s3.props, false, false, true);
        if (h || p.length) {
          const f = $u(h, p, e), g = ae(e.helper(Bu), [f]);
          if (s3.tag === "textarea") {
            const d = s3.children[0];
            if (!d || d.type !== 5) {
              const m = `_temp${e.temps++}`;
              g.arguments = [
                bo(G(m, false), f)
              ], mn.set(s3, ae(e.helper(Fu), [
                cr(G(`"value" in ${m}`, false), G(`${m}.value`, false), G(d ? d.content : "", true), false)
              ]));
            }
          } else if (s3.tag === "input") {
            const d = F1(s3);
            if (d) {
              const m = `_temp${e.temps++}`, y = G(m, false);
              g.arguments = [
                Qh([
                  bo(y, f),
                  ae(e.helper(Rr), [
                    y,
                    ae(e.helper(gd), [
                      y,
                      d.exp
                    ])
                  ])
                ])
              ];
            }
          }
          i && g.arguments.push(`"${s3.tag}"`), r.push(g);
        }
      }
      let l, u, c;
      for (let h = 0; h < s3.props.length; h++) {
        const p = s3.props[h];
        if (!(s3.tag === "input" && M1(p))) {
          if (p.type === 7) {
            if (p.name === "html" && p.exp)
              mn.set(s3, p.exp);
            else if (p.name === "text" && p.exp)
              s3.children = [wn(p.exp, p.loc)];
            else if (p.name === "slot")
              e.onError(Te(40, p.loc));
            else if (D1(s3, p) && p.exp)
              o || (s3.children = [wn(p.exp, p.loc)]);
            else if (!o && p.name !== "on") {
              const f = e.directiveTransforms[p.name];
              if (f) {
                const { props: g, ssrTagParts: d } = f(p, s3, e);
                d && r.push(...d);
                for (let m = 0; m < g.length; m++) {
                  const { key: y, value: x } = g[m];
                  if (Qe(y)) {
                    let E = y.content;
                    if (E === "key" || E === "ref")
                      continue;
                    E === "class" ? r.push(' class="', l = ae(e.helper(ld), [x]), '"') : E === "style" ? c ? Zc(c, x) : r.push(' style="', c = ae(e.helper(ud), [x]), '"') : (E = s3.tag.indexOf("-") > 0 ? E : Hm[E] || E.toLowerCase(), zm(E) ? r.push(cr(ae(e.helper(fd), [x]), G(" " + E, true), G("", true), false)) : Wm(E) ? r.push(ae(e.helper(cd), [
                      y,
                      x
                    ])) : e.onError(wi(61, y.loc)));
                  } else {
                    const E = [y, x];
                    i && E.push(`"${s3.tag}"`), r.push(ae(e.helper(hd), E));
                  }
                }
              }
            }
          } else if (s3.tag === "textarea" && p.name === "value" && p.value)
            mn.set(s3, Nt(p.value.content));
          else if (!o) {
            if (p.name === "key" || p.name === "ref")
              continue;
            p.name === "class" && p.value && (u = JSON.stringify(p.value.content)), r.push(` ${p.name}` + (p.value ? `="${Nt(p.value.content)}"` : ""));
          }
        }
      }
      l && u && (Zc(l, u), R1(r, "class")), e.scopeId && r.push(` ${e.scopeId}`), s3.ssrCodegenNode = xl(r);
    };
};
function $u(s3, e, t) {
  let r = [];
  if (s3 && (s3.type === 14 ? r = s3.arguments : r.push(s3)), e.length)
    for (const i of e)
      r.push(ae(t.helper(bd), [
        "_ctx",
        ...ou(i, t).elements
      ]));
  return r.length > 1 ? ae(t.helper(Rr), r) : r[0];
}
function M1(s3) {
  return s3.type === 7 ? s3.name === "bind" && s3.arg && Qe(s3.arg) && (s3.arg.content === "true-value" || s3.arg.content === "false-value") : s3.name === "true-value" || s3.name === "false-value";
}
function D1(s3, e) {
  return !!(s3.tag === "textarea" && e.name === "bind" && Vt(e.arg, "value"));
}
function Zc(s3, e) {
  const t = s3.arguments[0];
  t.type === 17 ? t.elements.push(e) : s3.arguments[0] = Ur([t, e]);
}
function R1(s3, e) {
  const t = new RegExp(`^ ${e}=".+"$`), r = s3.findIndex((i) => typeof i == "string" && t.test(i));
  r > -1 && s3.splice(r, 1);
}
function F1(s3) {
  return s3.props.find((e) => e.type === 7 && e.name === "model" && e.exp);
}
function B1(s3, e) {
  const t = e.options.isVoidTag || rn, r = s3.ssrCodegenNode.elements;
  for (let n = 0; n < r.length; n++)
    e.pushStringPart(r[n]);
  e.withSlotScopeId && e.pushStringPart(G("_scopeId", false)), e.pushStringPart(">");
  const i = mn.get(s3);
  i ? e.pushStringPart(i) : s3.children.length && Or(s3, e), t(s3.tag) || e.pushStringPart(`</${s3.tag}>`);
}
var wd = /* @__PURE__ */ new WeakMap();
function $1(s3, e) {
  return () => {
    const t = lt(s3, "tag");
    if (t) {
      const r = s3.props.filter((o) => o !== t), { props: i, directives: n } = _s(s3, e, r, true, false, true);
      let a = null;
      (i || n.length) && (a = ae(e.helper(Bu), [
        $u(i, n, e)
      ])), wd.set(s3, {
        tag: t,
        propsExp: a
      });
    }
  };
}
function U1(s3, e) {
  const t = wd.get(s3);
  if (t) {
    const { tag: r, propsExp: i } = t;
    r.type === 7 ? (e.pushStringPart("<"), e.pushStringPart(r.exp), i && e.pushStringPart(i), e.pushStringPart(">"), Or(s3, e, false, true), e.pushStringPart("</"), e.pushStringPart(r.exp), e.pushStringPart(">")) : (e.pushStringPart(`<${r.value.content}`), i && e.pushStringPart(i), e.pushStringPart(">"), Or(s3, e, false, true), e.pushStringPart(`</${r.value.content}>`));
  } else
    Or(s3, e, true, true);
}
var Ed = /* @__PURE__ */ new WeakMap();
var xd = Symbol();
var Td = /* @__PURE__ */ new WeakMap();
var j1 = (s3, e) => {
  if (s3.type !== 1 || s3.tagType !== 1)
    return;
  const t = Sa(s3, e, true), r = er(t) && t.callee === as;
  if (Td.set(s3, t), bs(t))
    return t === Ss ? N1(s3, e) : t === Fi ? $1(s3, e) : void 0;
  const i = [], n = Wo(s3);
  return function() {
    n.children.length && vi(n, e, (h, p) => (i.push(H1(h, p, e)), dt(void 0)));
    let o = "null";
    if (s3.props.length) {
      const { props: h, directives: p } = _s(s3, e, void 0, true, r);
      (h || p.length) && (o = $u(h, p, e));
    }
    const l = [];
    Ed.set(s3, l);
    const u = (h, p, f) => {
      const g = dt([h || "_", "_push", "_parent", "_scopeId"], void 0, true, true, f);
      return l.push({
        type: xd,
        fn: g,
        children: p,
        vnodeBranch: i[l.length]
      }), g;
    }, c = s3.children.length ? vi(s3, e, u).slots : "null";
    typeof t != "string" ? s3.ssrCodegenNode = ae(e.helper(id), [
      "_push",
      ae(e.helper(ki), [
        t,
        o,
        c
      ]),
      "_parent"
    ]) : s3.ssrCodegenNode = ae(e.helper(nd), [t, o, c, "_parent"]);
  };
};
function q1(s3, e, t) {
  const r = Td.get(s3);
  if (s3.ssrCodegenNode) {
    const i = Ed.get(s3) || [];
    for (let n = 0; n < i.length; n++) {
      const { fn: a, vnodeBranch: o } = i[n];
      a.body = En(G("_push", false), Ns(i[n], e, false, true), o);
    }
    e.withSlotScopeId && s3.ssrCodegenNode.arguments.push("_scopeId"), typeof r == "string" ? e.pushStatement(ae("_push", [s3.ssrCodegenNode])) : e.pushStatement(s3.ssrCodegenNode);
  } else {
    if (r === Ir)
      return k1(s3, e);
    if (r === Ss)
      return O1(s3, e);
    if (r === Fi)
      return U1(s3, e);
    t.type === xd && e.pushStringPart(""), r === Is && (s3.children = s3.children.filter((i) => i.type !== 3)), Or(s3, e);
  }
}
var Pd = /* @__PURE__ */ new WeakMap();
var [V1, z1] = cu(true);
var G1 = [...V1, ...Su];
var W1 = Object.assign(Object.assign({}, z1), wu);
function H1(s3, e, t) {
  const r = Pd.get(t.root), i = Object.assign(Object.assign({}, r), {
    nodeTransforms: [
      ...G1,
      ...r.nodeTransforms || []
    ],
    directiveTransforms: Object.assign(Object.assign({}, W1), r.directiveTransforms || {})
  });
  return K1({
    type: 1,
    ns: 0,
    tag: "template",
    tagType: 3,
    isSelfClosing: false,
    props: [
      {
        type: 7,
        name: "slot",
        exp: s3,
        arg: void 0,
        modifiers: [],
        loc: Le
      }
    ],
    children: e,
    loc: Le,
    codegenNode: void 0
  }, i, t), Xh(e);
}
function K1(s3, e, t) {
  const r = xs([s3]), i = Li(r, e);
  i.ssr = false, i.scopes = Object.assign({}, t.scopes), i.identifiers = Object.assign({}, t.identifiers), i.imports = t.imports, Ps(r, i), ["helpers", "components", "directives"].forEach((n) => {
    i[n].forEach((a, o) => {
      if (n === "helpers") {
        const l = t.helpers.get(o);
        l === void 0 ? t.helpers.set(o, a) : t.helpers.set(o, a + l);
      } else
        t[n].add(a);
    });
  });
}
function Wo(s3) {
  if (rt(s3))
    return s3.map(Wo);
  if (er(s3)) {
    const e = {};
    for (const t in s3)
      e[t] = Wo(s3[t]);
    return e;
  } else
    return s3;
}
function Y1(s3, e) {
  const t = Ad(s3, e);
  if (e.ssrCssVars) {
    const i = tt(G(e.ssrCssVars, false), Li(xs([]), e));
    t.body.push(je(["const _cssVars = { style: ", i, "}"]));
  }
  const r = s3.children.length > 1 && s3.children.some((i) => !Qs(i));
  Or(s3, t, r), s3.codegenNode = Oi(t.body), s3.ssrHelpers = Array.from(/* @__PURE__ */ new Set([...s3.helpers.filter((i) => i in Go), ...t.helpers])), s3.helpers = s3.helpers.filter((i) => !(i in Go));
}
function Ad(s3, e, t = /* @__PURE__ */ new Set(), r = false) {
  const i = [];
  let n = null;
  return {
    root: s3,
    options: e,
    body: i,
    helpers: t,
    withSlotScopeId: r,
    onError: e.onError || ((a) => {
      throw a;
    }),
    helper(a) {
      return t.add(a), a;
    },
    pushStringPart(a) {
      if (!n) {
        const u = ae("_push");
        i.push(u), n = xl([]), u.arguments.push(n);
      }
      const o = n.elements, l = o[o.length - 1];
      be(a) && be(l) ? o[o.length - 1] += a : o.push(a);
    },
    pushStatement(a) {
      n = null, i.push(a);
    }
  };
}
function J1(s3, e = s3.withSlotScopeId) {
  return Ad(s3.root, s3.options, s3.helpers, e);
}
function Or(s3, e, t = false, r = false) {
  t && e.pushStringPart("<!--[-->");
  const { children: i } = s3;
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    switch (a.type) {
      case 1:
        switch (a.tagType) {
          case 0:
            B1(a, e);
            break;
          case 1:
            q1(a, e, s3);
            break;
          case 2:
            _1(a, e);
            break;
          case 3:
            break;
          default:
            return e.onError(wi(63, a.loc)), a;
        }
        break;
      case 2:
        e.pushStringPart(Nt(a.content));
        break;
      case 3:
        e.pushStringPart(`<!--${a.content}-->`);
        break;
      case 5:
        e.pushStringPart(ae(e.helper(Fu), [a.content]));
        break;
      case 9:
        T1(a, e, r);
        break;
      case 11:
        A1(a, e, r);
        break;
      case 10:
        break;
      case 12:
      case 8:
        break;
      default:
        return e.onError(wi(63, a.loc)), a;
    }
  }
  t && e.pushStringPart("<!--]-->");
}
function Ns(s3, e, t = false, r = e.withSlotScopeId) {
  const i = J1(e, r);
  return Or(s3, i, t), Oi(i.body);
}
var Q1 = (s3, e, t) => {
  const r = s3.exp;
  function i() {
    const n = lt(e, "value");
    n && t.onError(Je(57, n.loc));
  }
  if (e.tagType === 0) {
    const n = { props: [] }, a = [
      Pe("value", r)
    ];
    if (e.tag === "input") {
      const o = lt(e, "type");
      if (o) {
        const l = X1(e);
        if (o.type === 7)
          n.ssrTagParts = [
            ae(t.helper(md), [
              o.exp,
              r,
              l
            ])
          ];
        else if (o.value)
          switch (o.value.content) {
            case "radio":
              n.props = [
                Pe("checked", ae(t.helper(zo), [
                  r,
                  l
                ]))
              ];
              break;
            case "checkbox":
              const u = lt(e, "true-value");
              if (u) {
                const c = u.type === 6 ? JSON.stringify(u.value.content) : u.exp;
                n.props = [
                  Pe("checked", ae(t.helper(zo), [
                    r,
                    c
                  ]))
                ];
              } else
                n.props = [
                  Pe("checked", cr(ae("Array.isArray", [r]), ae(t.helper(dd), [
                    r,
                    l
                  ]), r))
                ];
              break;
            case "file":
              t.onError(Je(56, s3.loc));
              break;
            default:
              i(), n.props = a;
              break;
          }
      } else
        ua(e) || (i(), n.props = a);
    } else
      e.tag === "textarea" ? (i(), e.children = [wn(r, r.loc)]) : e.tag === "select" || t.onError(Je(54, s3.loc));
    return n;
  } else
    return Ea(s3, e, t);
};
function X1(s3) {
  const e = lt(s3, "value");
  return e ? e.type === 7 ? e.exp : G(e.value.content, true) : G("null", false);
}
var Z1 = (s3, e, t) => (s3.exp || t.onError(Je(58)), {
  props: [
    Pe("style", cr(s3.exp, G("null", false), at([
      Pe("display", G("none", true))
    ]), false))
  ]
});
var Ho = (s3) => s3.children.filter((e) => e.type !== 3);
var no = (s3) => Ho(s3).length === 1;
var ew = (s3, e) => {
  if (s3.type === 0 && (e.identifiers._attrs = 1), s3.type === 1 && s3.tagType === 1 && (wt(s3.tag, "Transition") || wt(s3.tag, "KeepAlive"))) {
    const r = Ho(e.root);
    if (r.length === 1 && r[0] === s3) {
      no(s3) && ao(s3.children[0]);
      return;
    }
  }
  const t = e.parent;
  if (!(!t || t.type !== 0))
    if (s3.type === 10 && no(s3)) {
      let r = false;
      for (const i of Ho(t))
        if (i.type === 9 || i.type === 1 && Be(i, "if")) {
          if (r)
            return;
          r = true;
        } else if (!r || !(i.type === 1 && Be(i, /else/, true)))
          return;
      ao(s3.children[0]);
    } else
      no(t) && ao(s3);
};
function ao(s3) {
  s3.type === 1 && (s3.tagType === 0 || s3.tagType === 1) && !Be(s3, "for") && s3.props.push({
    type: 7,
    name: "bind",
    arg: void 0,
    exp: G("_attrs", false),
    modifiers: [],
    loc: Le
  });
}
var tw = (s3, e) => {
  if (!e.ssrCssVars)
    return;
  s3.type === 0 && (e.identifiers._cssVars = 1);
  const t = e.parent;
  if (!(!t || t.type !== 0))
    if (s3.type === 10)
      for (const r of s3.children)
        Fn(r);
    else
      Fn(s3);
};
function Fn(s3) {
  if (s3.type === 1 && (s3.tagType === 0 || s3.tagType === 1) && !Be(s3, "for"))
    if (wt(s3.tag, "Suspense"))
      for (const e of s3.children)
        e.type === 1 && e.tagType === 3 ? e.children.forEach(Fn) : Fn(e);
    else
      s3.props.push({
        type: 7,
        name: "bind",
        arg: void 0,
        exp: G("_cssVars", false),
        modifiers: [],
        loc: Le
      });
}
function rw(s3, e = {}) {
  e = Object.assign(Object.assign(Object.assign({}, e), ms), {
    ssr: true,
    inSSR: true,
    scopeId: e.mode === "function" ? null : e.scopeId,
    prefixIdentifiers: true,
    cacheHandlers: false,
    hoistStatic: false
  });
  const t = ha(s3, e);
  return Pd.set(t, e), fa(t, Object.assign(Object.assign({}, e), { hoistStatic: false, nodeTransforms: [
    x1,
    P1,
    au,
    tu,
    C1,
    ew,
    tw,
    L1,
    j1,
    nu,
    vu,
    ...e.nodeTransforms || []
  ], directiveTransforms: Object.assign({
    bind: uu,
    on: wa,
    model: Q1,
    show: Z1,
    cloak: Zs,
    once: Zs,
    memo: Zs
  }, e.directiveTransforms || {}) })), Y1(t, e), Ql(t, e);
}
var sw = Object.freeze({
  __proto__: null,
  compile: rw
});
var iw = {};
var nw = Object.freeze({
  __proto__: null,
  default: iw
});
var aw = Di(nw);
var Uu = Di(rS);
var ow = Di(e1);
var eh = {};
function ii(s3) {
  !(typeof process < "u" && {}.NODE_ENV === "production") && true && !eh[s3] && (eh[s3] = true, Ko(s3));
}
function Ko(s3) {
  console.warn(`\x1B[1m\x1B[33m[@vue/compiler-sfc]\x1B[0m\x1B[33m ${s3}\x1B[0m
`);
}
function lw({ source: s3, filename: e, preprocessOptions: t }, r) {
  let i = "", n = null;
  if (r.render(s3, Object.assign({ filename: e }, t), (a, o) => {
    a && (n = a), i = o;
  }), n)
    throw n;
  return i;
}
function Cd(s3) {
  const { preprocessLang: e, preprocessCustomRequire: t } = s3;
  if (e && !t)
    throw new Error("[@vue/compiler-sfc] Template preprocessing in the browser build must provide the `preprocessCustomRequire` option to return the in-browser version of the preprocessor in the shape of { render(): string }.");
  const r = e ? t ? t(e) : void 0 : false;
  if (r)
    try {
      return th(Object.assign(Object.assign({}, s3), { source: lw(s3, r) }));
    } catch (i) {
      return {
        code: "export default function render() {}",
        source: s3.source,
        tips: [],
        errors: [i]
      };
    }
  else
    return e ? {
      code: "export default function render() {}",
      source: s3.source,
      tips: [
        `Component ${s3.filename} uses lang ${e} for template. Please install the language preprocessor.`
      ],
      errors: [
        `Component ${s3.filename} uses lang ${e} for template, however it is not installed.`
      ]
    } : th(s3);
}
function th({ filename: s3, id: e, scoped: t, slotted: r, inMap: i, source: n, ssr: a = false, ssrCssVars: o, isProd: l = false, compiler: u = a ? sw : rf, compilerOptions: c = {}, transformAssetUrls: h }) {
  const p = [], f = [];
  let g = [];
  if (er(h)) {
    const w = y1(h);
    g = [
      v1(w),
      E1(w)
    ];
  } else
    h !== false && (g = [rd, sd]);
  a && !o && ii("compileTemplate is called with `ssr: true` but no corresponding `cssVars` option.`."), e || (ii("compileTemplate now requires the `id` option.`."), e = "");
  const d = e.replace(/^data-v-/, ""), m = `data-v-${d}`;
  let { code: y, ast: x, preamble: E, map: C } = u.compile(n, Object.assign(Object.assign({ mode: "module", prefixIdentifiers: true, hoistStatic: true, cacheHandlers: true, ssrCssVars: a && o && o.length ? nf(o, d, l, true) : "", scopeId: t ? m : void 0, slotted: r, sourceMap: true }, c), { nodeTransforms: g.concat(c.nodeTransforms || []), filename: s3, onError: (w) => p.push(w), onWarn: (w) => f.push(w) }));
  i && (C && (C = uw(i, C)), p.length && cw(p, n, i));
  const v = f.map((w) => {
    let T = w.message;
    return w.loc && (T += `
${Ks(n, w.loc.start.offset, w.loc.end.offset)}`), T;
  });
  return { code: y, ast: x, preamble: E, source: n, errors: p, tips: v, map: C };
}
function uw(s3, e) {
  if (!s3)
    return e;
  if (!e)
    return s3;
  const t = new No(s3), r = new No(e), i = new ma();
  r.eachMapping((a) => {
    if (a.originalLine == null)
      return;
    const o = t.originalPositionFor({
      line: a.originalLine,
      column: a.originalColumn
    });
    o.source != null && i.addMapping({
      generated: {
        line: a.generatedLine,
        column: a.generatedColumn
      },
      original: {
        line: o.line,
        column: a.originalColumn
      },
      source: o.source,
      name: o.name
    });
  });
  const n = i;
  return t.sources.forEach((a) => {
    n._sources.add(a);
    const o = t.sourceContentFor(a);
    o != null && i.setSourceContent(a, o);
  }), n._sourceRoot = s3.sourceRoot, n._file = s3.file, n.toJSON();
}
function cw(s3, e, t) {
  const r = t.sourcesContent[0], i = r.indexOf(e), n = r.slice(0, i).split(/\r?\n/).length - 1;
  s3.forEach((a) => {
    a.loc && (a.loc.start.line += n, a.loc.start.offset += i, a.loc.end !== a.loc.start && (a.loc.end.line += n, a.loc.end.offset += i));
  });
}
var _d = /((?:^|\n|;)\s*)export(\s*)default/;
var hw = /((?:^|\n|;)\s*)export(.+)(?:as)?(\s*)default/s;
var rh = /((?:^|\n|;)\s*)export\s+default\s+class\s+([\w$]+)/;
function pw(s3, e, t) {
  if (!sh(s3))
    return s3 + `
const ${e} = {}`;
  let r;
  const i = s3.match(rh);
  if (i ? r = s3.replace(rh, "$1class $2") + `
const ${e} = ${i[2]}` : r = s3.replace(_d, `$1const ${e} =`), !sh(r))
    return r;
  const n = new fe(s3);
  return In(s3, {
    sourceType: "module",
    plugins: t
  }).program.body.forEach((o) => {
    if (o.type === "ExportDefaultDeclaration" && n.overwrite(o.start, o.declaration.start, `const ${e} = `), o.type === "ExportNamedDeclaration") {
      for (const l of o.specifiers)
        if (l.type === "ExportSpecifier" && l.exported.type === "Identifier" && l.exported.name === "default") {
          if (o.source)
            if (l.local.name === "default") {
              const c = oo(s3, l.local.end, o.end);
              n.prepend(`import { default as __VUE_DEFAULT__ } from '${o.source.value}'
`), n.overwrite(l.start, c, ""), n.append(`
const ${e} = __VUE_DEFAULT__`);
              continue;
            } else {
              const c = oo(s3, l.exported.end, o.end);
              n.prepend(`import { ${s3.slice(l.local.start, l.local.end)} } from '${o.source.value}'
`), n.overwrite(l.start, c, ""), n.append(`
const ${e} = ${l.local.name}`);
              continue;
            }
          const u = oo(s3, l.end, o.end);
          n.overwrite(l.start, u, ""), n.append(`
const ${e} = ${l.local.name}`);
        }
    }
  }), n.toString();
}
function sh(s3) {
  return _d.test(s3) || hw.test(s3);
}
function oo(s3, e, t) {
  let r = false, i = e;
  for (; e < t; )
    if (/\s/.test(s3.charAt(e)))
      e++;
    else if (s3.charAt(e) === ",") {
      e++, r = true;
      break;
    } else if (s3.charAt(e) === "}")
      break;
  return r ? e : i;
}
var ih = "$";
var nh = "$$";
var fw = ["ref", "computed", "shallowRef", "toRef", "customRef"];
var dw = /[^\w]\$(?:\$|ref|computed|shallowRef)?\s*(\(|\<)/;
function lo(s3) {
  return dw.test(s3);
}
function uo(s3, e, t = 0, r, i) {
  mw();
  let n = ih, a = nh;
  for (const N of s3.body)
    if (N.type === "ImportDeclaration" && N.source.value === "vue/macros") {
      e.remove(N.start + t, N.end + t);
      for (const R2 of N.specifiers)
        if (R2.type === "ImportSpecifier") {
          const q = R2.imported.name, $ = R2.local.name;
          $ !== q && (q === nh ? a = $ : q === ih ? n = $ : m("macro imports for ref-creating methods do not support aliasing.", R2));
        }
    }
  const o = /* @__PURE__ */ new Set(), l = {}, u = [l];
  let c = l, h;
  const p = /* @__PURE__ */ new WeakSet(), f = [], g = /* @__PURE__ */ Object.create(null);
  if (r)
    for (const N of r)
      l[N] = true;
  if (i)
    for (const N in i) {
      const { local: R2 } = i[N];
      l[R2] = "prop", g[R2] = N;
    }
  function d(N) {
    return N === n ? n : N[0] === "$" && fw.includes(N.slice(1)) ? N : false;
  }
  function m(N, R2) {
    const q = new Error(N);
    throw q.node = R2, q;
  }
  function y(N) {
    return o.add(N), `_${N}`;
  }
  function x(N, R2 = false) {
    p.add(N), c ? c[N.name] = R2 : m("registerBinding called without active scope, something is wrong.", N);
  }
  const E = (N) => x(N, true);
  let C = 0;
  function v() {
    return `__$temp_${++C}`;
  }
  function w(N) {
    return e.original.slice(N.start + t, N.end + t);
  }
  function T(N, R2 = false) {
    for (const q of N.body)
      if (q.type === "VariableDeclaration")
        P(q, R2);
      else if (q.type === "FunctionDeclaration" || q.type === "ClassDeclaration") {
        if (q.declare || !q.id)
          continue;
        x(q.id);
      } else
        (q.type === "ForOfStatement" || q.type === "ForInStatement") && q.left.type === "VariableDeclaration" ? P(q.left) : q.type === "ExportNamedDeclaration" && q.declaration && q.declaration.type === "VariableDeclaration" ? P(q.declaration, R2) : q.type === "LabeledStatement" && q.body.type === "VariableDeclaration" && P(q.body, R2);
  }
  function P(N, R2 = false) {
    if (!N.declare)
      for (const q of N.declarations) {
        let $;
        const L = q.init && q.init.type === "CallExpression" && q.init.callee.type === "Identifier";
        if (L && ($ = d(q.init.callee.name)))
          b($, q.id, q.init);
        else {
          const F = R2 && L && q.init.callee.name === "defineProps";
          for (const O of jt(q.id))
            F ? p.add(O) : x(O);
        }
      }
  }
  function b(N, R2, q) {
    p.add(q.callee), N === n ? (e.remove(q.callee.start + t, q.callee.end + t), R2.type === "Identifier" ? E(R2) : R2.type === "ObjectPattern" ? S(R2, q) : R2.type === "ArrayPattern" && k(R2, q)) : R2.type === "Identifier" ? (E(R2), e.overwrite(q.start + t, q.start + N.length + t, y(N.slice(1)))) : m(`${N}() cannot be used with destructure patterns.`, q);
  }
  function S(N, R2, q, $ = []) {
    q || (q = v(), e.overwrite(N.start + t, N.end + t, q));
    for (const L of N.properties) {
      let F, O, B;
      if (L.type === "ObjectProperty" ? L.key.start === L.value.start ? (F = L.key, L.value.type === "Identifier" ? p.add(L.value) : L.value.type === "AssignmentPattern" && L.value.left.type === "Identifier" && (p.add(L.value.left), B = L.value.right)) : (O = L.computed ? L.key : L.key.name, L.value.type === "Identifier" ? F = L.value : L.value.type === "ObjectPattern" ? S(L.value, R2, q, [...$, O]) : L.value.type === "ArrayPattern" ? k(L.value, R2, q, [...$, O]) : L.value.type === "AssignmentPattern" && (L.value.left.type === "Identifier" ? (F = L.value.left, B = L.value.right) : L.value.left.type === "ObjectPattern" ? S(L.value.left, R2, q, [
        ...$,
        [O, L.value.right]
      ]) : L.value.left.type === "ArrayPattern" && k(L.value.left, R2, q, [
        ...$,
        [O, L.value.right]
      ]))) : m("reactivity destructure does not support rest elements.", L), F) {
        E(F);
        const Z = _(q, $), M = be(O) ? `'${O}'` : O ? w(O) : `'${F.name}'`, le = B ? `, ${w(B)}` : "";
        e.appendLeft(R2.end + t, `,
  ${F.name} = ${y("toRef")}(${Z}, ${M}${le})`);
      }
    }
  }
  function k(N, R2, q, $ = []) {
    q || (q = v(), e.overwrite(N.start + t, N.end + t, q));
    for (let L = 0; L < N.elements.length; L++) {
      const F = N.elements[L];
      if (!F)
        continue;
      let O, B;
      if (F.type === "Identifier" ? O = F : F.type === "AssignmentPattern" ? (O = F.left, B = F.right) : F.type === "RestElement" ? m("reactivity destructure does not support rest elements.", F) : F.type === "ObjectPattern" ? S(F, R2, q, [...$, L]) : F.type === "ArrayPattern" && k(F, R2, q, [...$, L]), O) {
        E(O);
        const Z = _(q, $), M = B ? `, ${w(B)}` : "";
        e.appendLeft(R2.end + t, `,
  ${O.name} = ${y("toRef")}(${Z}, ${L}${M})`);
      }
    }
  }
  function _(N, R2) {
    if (R2.length)
      for (const q of R2)
        rt(q) ? N = `(${N}${Q(q[0])} || ${w(q[1])})` : N += Q(q);
    return N;
  }
  function Q(N) {
    return typeof N == "number" ? `[${N}]` : typeof N == "string" ? `.${N}` : w(N);
  }
  function K(N, R2, q, $) {
    if (qh(N, R2.name)) {
      const L = N[R2.name];
      if (L) {
        const F = L === "prop";
        ba(q) && q.shorthand ? (!q.inPattern || va(q, $)) && (F ? h ? (oe(R2), e.appendLeft(R2.end + t, `: __props_${g[R2.name]}`)) : e.appendLeft(R2.end + t, `: ${vn(g[R2.name])}`) : e.appendLeft(R2.end + t, `: ${R2.name}.value`)) : F ? h ? (oe(R2), e.overwrite(R2.start + t, R2.end + t, `__props_${g[R2.name]}`)) : e.overwrite(R2.start + t, R2.end + t, vn(g[R2.name])) : e.appendLeft(R2.end + t, ".value");
      }
      return true;
    }
    return false;
  }
  const ue = {};
  function oe(N) {
    if (!ue.hasOwnProperty(N.name)) {
      ue[N.name] = true;
      const R2 = g[N.name];
      e.prependRight(t, `const __props_${R2} = ${y("toRef")}(__props, '${R2}')
`);
    }
  }
  return T(s3, true), Xl(s3, {
    enter(N, R2) {
      if (R2 && f.push(R2), Ar(N)) {
        u.push(c = {}), eu(N, x), N.body.type === "BlockStatement" && T(N.body);
        return;
      }
      if (N.type === "CatchClause") {
        u.push(c = {}), N.param && N.param.type === "Identifier" && x(N.param), T(N.body);
        return;
      }
      if (N.type === "BlockStatement" && !Ar(R2)) {
        u.push(c = {}), T(N);
        return;
      }
      if (R2 && R2.type.startsWith("TS") && R2.type !== "TSAsExpression" && R2.type !== "TSNonNullExpression" && R2.type !== "TSTypeAssertion")
        return this.skip();
      if (N.type === "Identifier" && !(h && l[N.name] !== "prop") && Zl(N, R2, f) && !p.has(N)) {
        let q = u.length;
        for (; q--; )
          if (K(u[q], N, R2, f))
            return;
      }
      if (N.type === "CallExpression" && N.callee.type === "Identifier") {
        const q = N.callee.name, $ = d(q);
        if ($ && (!R2 || R2.type !== "VariableDeclarator"))
          return m(`${$} can only be used as the initializer of a variable declaration.`, N);
        q === a && (e.remove(N.callee.start + t, N.callee.end + t), h = N), q === "$raw" && m(`$raw() has been replaced by $$(). See ${Yo} for latest updates.`, N), q === "$fromRef" && m(`$fromRef() has been replaced by $(). See ${Yo} for latest updates.`, N);
      }
    },
    leave(N, R2) {
      R2 && f.pop(), (N.type === "BlockStatement" && !Ar(R2) || Ar(N)) && (u.pop(), c = u[u.length - 1] || null), N === h && (h = void 0);
    }
  }), {
    rootRefs: Object.keys(l).filter((N) => l[N] === true),
    importedHelpers: [...o]
  };
}
var Yo = "https://github.com/vuejs/rfcs/discussions/369";
var ah = {};
function mw() {
  typeof window < "u" || gw(`Reactivity transform is an experimental feature.
Experimental features may change behavior between patch versions.
It is recommended to pin your vue dependencies to exact versions to avoid breakage.
You can follow the proposal's status at ${Yo}.`);
}
function gw(s3) {
  !(typeof process < "u" && {}.NODE_ENV === "production") && true && !ah[s3] && (ah[s3] = true, yw(s3));
}
function yw(s3) {
  console.warn(`\x1B[1m\x1B[33m[@vue/reactivity-transform]\x1B[0m\x1B[33m ${s3}\x1B[0m
`);
}
var Ue = "defineProps";
var Er = "defineEmits";
var co = "defineExpose";
var Kr = "withDefaults";
var wr = "__default__";
var vw = Re("once,memo,if,for,else,else-if,slot,text,html,on,bind,model,show,cloak,is");
function bw(s3, e) {
  var t;
  let { script: r, scriptSetup: i, source: n, filename: a } = s3;
  const o = !!e.reactivityTransform || !!e.refSugar || !!e.refTransform, l = !!e.reactivityTransform || !!e.propsDestructureTransform, u = !!e.isProd, c = e.sourceMap !== false;
  let h;
  e.id || ii("compileScript now requires passing the `id` option.\nUpgrade your vite or vue-loader version for compatibility with the latest experimental proposals.");
  const p = e.id ? e.id.replace(/^data-v-/, "") : "", f = s3.cssVars, g = r && r.lang, d = i && i.lang, m = g === "ts" || g === "tsx" || d === "ts" || d === "tsx", y = [];
  if (!m || g === "tsx" || d === "tsx" ? y.push("jsx") : e.babelParserPlugins && (e.babelParserPlugins = e.babelParserPlugins.filter((A2) => A2 !== "jsx")), e.babelParserPlugins && y.push(...e.babelParserPlugins), m && y.push("typescript", "decorators-legacy"), !i) {
    if (!r)
      throw new Error("[@vue/compiler-sfc] SFC contains no <script> tags.");
    if (g && !m && g !== "jsx")
      return r;
    try {
      let A2 = r.content, V = r.map;
      const z = In(A2, {
        plugins: y,
        sourceType: "module"
      }).program, ee = uh(z.body);
      if (o && lo(A2)) {
        const X = new fe(n), J = r.loc.start.offset, ce = r.loc.end.offset, { importedHelpers: et } = uo(z, X, J);
        et.length && X.prepend(`import { ${et.map((Me) => `${Me} as _${Me}`).join(", ")} } from 'vue'
`), X.remove(0, J), X.remove(ce, n.length), A2 = X.toString(), c && (V = X.generateMap({
          source: a,
          hires: true,
          includeContent: true
        }));
      }
      return f.length && (A2 = pw(A2, wr, y), A2 += gb(f, ee, p, u), A2 += `
export default ${wr}`), Object.assign(Object.assign({}, r), {
        content: A2,
        map: V,
        bindings: ee,
        scriptAst: z.body
      });
    } catch {
      return r;
    }
  }
  if (r && g !== d)
    throw new Error("[@vue/compiler-sfc] <script> and <script setup> must have the same language type.");
  if (d && !m && d !== "jsx")
    return i;
  const x = {}, E = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ Object.create(null), v = /* @__PURE__ */ Object.create(null), w = /* @__PURE__ */ Object.create(null), T = /* @__PURE__ */ Object.create(null);
  let P, b = false, S = false, k = false, _ = false, Q = false, K, ue, oe, N, R2, q, $, L, F, O, B, Z = false, M = false;
  const le = {}, Ee = /* @__PURE__ */ new Set(), de = {}, se = /* @__PURE__ */ Object.create(null), W = new fe(n), Y = i.loc.start.offset, ne = i.loc.end.offset, me = r && r.loc.start.offset, Xe = r && r.loc.end.offset;
  function Ge(A2) {
    return E.add(A2), `_${A2}`;
  }
  function We(A2, V, z) {
    try {
      return In(A2, V).program;
    } catch (ee) {
      throw ee.message = `[@vue/compiler-sfc] ${ee.message}

${s3.filename}
${Ks(n, ee.pos + z, ee.pos + z + 1)}`, ee;
    }
  }
  function ge(A2, V, z = V.end + Y) {
    throw new Error(`[@vue/compiler-sfc] ${A2}

${s3.filename}
${Ks(n, V.start + Y, z)}`);
  }
  function st(A2, V, z, ee, X, J) {
    A2 === "vue" && z && (v[z] = V);
    let ce = J;
    J && m && s3.template && !s3.template.src && !s3.template.lang && (ce = Ld(V, s3)), C[V] = {
      isType: ee,
      imported: z || "default",
      source: A2,
      isFromSetup: X,
      isUsedInTemplate: ce
    };
  }
  function Ze(A2, V) {
    if (!kt(A2, Ue))
      return false;
    if (b && ge(`duplicate ${Ue}() call`, A2), b = true, K = A2.arguments[0], A2.typeParameters && (K && ge(`${Ue}() cannot accept both type and non-type arguments at the same time. Use one or the other.`, A2), q = A2.typeParameters.params[0], R2 = vr(q, (z) => z.type === "TSTypeLiteral"), R2 || ge(`type argument passed to ${Ue}() must be a literal type, or a reference to an interface or literal type.`, q)), V)
      if (l && V.type === "ObjectPattern") {
        oe = V;
        for (const z of V.properties)
          if (z.type === "ObjectProperty") {
            z.computed && ge(`${Ue}() destructure cannot use computed key.`, z.key);
            const ee = z.key.type === "StringLiteral" ? z.key.value : z.key.name;
            if (z.value.type === "AssignmentPattern") {
              const { left: X, right: J } = z.value;
              X.type !== "Identifier" && ge(`${Ue}() destructure does not support nested patterns.`, X), se[ee] = {
                local: X.name,
                default: J
              };
            } else
              z.value.type === "Identifier" ? se[ee] = {
                local: z.value.name
              } : ge(`${Ue}() destructure does not support nested patterns.`, z.value);
          } else
            N = z.argument.name;
      } else
        $ = i.content.slice(V.start, V.end);
    return true;
  }
  function bt(A2, V) {
    return kt(A2, Kr) ? (Ze(A2.arguments[0], V) ? (K && ge(`${Kr} can only be used with type-based ${Ue} declaration.`, A2), oe && ge(`${Kr}() is unnecessary when using destructure with ${Ue}().
Prefer using destructure default values, e.g. const { foo = 1 } = defineProps(...).`, A2.callee), ue = A2.arguments[1], (!ue || ue.type !== "ObjectExpression") && ge(`The 2nd argument of ${Kr} must be an object literal.`, ue || A2)) : ge(`${Kr}' first argument must be a ${Ue} call.`, A2.arguments[0] || A2), true) : false;
  }
  function yr(A2, V) {
    return kt(A2, Er) ? (S && ge(`duplicate ${Er}() call`, A2), S = true, L = A2.arguments[0], A2.typeParameters && (L && ge(`${Er}() cannot accept both type and non-type arguments at the same time. Use one or the other.`, A2), O = A2.typeParameters.params[0], F = vr(O, (z) => z.type === "TSFunctionType" || z.type === "TSTypeLiteral"), F || ge(`type argument passed to ${Er}() must be a function type, a literal type with call signatures, or a reference to the above types.`, O)), V && (B = i.content.slice(V.start, V.end)), true) : false;
  }
  function vr(A2, V) {
    if (V(A2))
      return A2;
    if (A2.type === "TSTypeReference" && A2.typeName.type === "Identifier") {
      const z = A2.typeName.name, ee = (J) => {
        if (J.type === "TSInterfaceDeclaration" && J.id.name === z)
          return J.body;
        if (J.type === "TSTypeAliasDeclaration" && J.id.name === z && V(J.typeAnnotation))
          return J.typeAnnotation;
        if (J.type === "ExportNamedDeclaration" && J.declaration)
          return ee(J.declaration);
      }, X = At ? [...sr.body, ...At.body] : sr.body;
      for (const J of X) {
        const ce = ee(J);
        if (ce)
          return ce;
      }
    }
  }
  function br(A2) {
    return kt(A2, co) ? (k && ge(`duplicate ${co}() call`, A2), k = true, true) : false;
  }
  function qr(A2, V) {
    !A2 || ya(A2, (z) => {
      T[z.name] && ge(`\`${V}()\` in <script setup> cannot reference locally declared variables because it will be hoisted outside of the setup() function. If your component options require initialization in the module scope, use a separate normal <script> to export the options instead.`, z);
    });
  }
  function Fa(A2, V, z) {
    const ee = A2.argument.extra && A2.argument.extra.parenthesized ? A2.argument.extra.parenStart : A2.argument.start, X = n.slice(ee + Y, A2.argument.end + Y), J = /\bawait\b/.test(X);
    W.overwrite(A2.start + Y, ee + Y, `${V ? ";" : ""}(
  ([__temp,__restore] = ${Ge("withAsyncContext")}(${J ? "async " : ""}() => `), W.appendLeft(A2.end + Y, `)),
  ${z ? "" : "__temp = "}await __temp,
  __restore()${z ? "" : `,
  __temp`}
)`);
  }
  function Bi() {
    return ue && ue.type === "ObjectExpression" && ue.properties.every((A2) => A2.type === "ObjectProperty" && !A2.computed || A2.type === "ObjectMethod");
  }
  function Ba(A2) {
    const V = Object.keys(A2);
    if (!V.length)
      return "";
    const z = Bi(), ee = i.content;
    let X = `{
    ${V.map((J) => {
      let ce;
      const et = $i(J);
      if (et)
        ce = `default: ${et}`;
      else if (z) {
        const He = ue.properties.find((Bm) => Bm.key.name === J);
        He && (He.type === "ObjectProperty" ? ce = `default: ${ee.slice(He.value.start, He.value.end)}` : ce = `default() ${ee.slice(He.body.start, He.body.end)}`);
      }
      const { type: Me, required: Ct } = A2[J];
      return u ? Me.some((He) => He === "Boolean" || ce && He === "Function") ? `${J}: { type: ${oh(Me)}${ce ? `, ${ce}` : ""} }` : `${J}: ${ce ? `{ ${ce} }` : "null"}` : `${J}: { type: ${oh(Me)}, required: ${Ct}${ce ? `, ${ce}` : ""} }`;
    }).join(`,
    `)}
  }`;
    return ue && !z && (X = `${Ge("mergeDefaults")}(${X}, ${n.slice(ue.start + Y, ue.end + Y)})`), `
  props: ${X},`;
  }
  function $i(A2) {
    const V = se[A2];
    if (V && V.default) {
      const z = i.content.slice(V.default.start, V.default.end);
      return V.default.type.endsWith("Literal") ? z : `() => (${z})`;
    }
  }
  function $a(A2) {
    const V = i.content;
    if (Bi()) {
      let z = "{ ";
      const ee = A2.type === "TSTypeLiteral" ? A2.members : A2.body;
      for (const X of ee)
        (X.type === "TSPropertySignature" || X.type === "TSMethodSignature") && X.typeAnnotation && X.key.type === "Identifier" && (ue.properties.some((J) => J.key.name === X.key.name) ? z += X.key.name + (X.type === "TSMethodSignature" ? "()" : "") + V.slice(X.typeAnnotation.start, X.typeAnnotation.end) + ", " : z += V.slice(X.start, X.typeAnnotation.end) + ", ");
      return (z.length ? z.slice(0, -2) : z) + " }";
    } else
      return V.slice(A2.start, A2.end);
  }
  let At;
  if (r) {
    At = We(r.content, {
      plugins: y,
      sourceType: "module"
    }, me);
    for (const A2 of At.body)
      if (A2.type === "ImportDeclaration")
        for (const V of A2.specifiers) {
          const z = V.type === "ImportSpecifier" && V.imported.type === "Identifier" && V.imported.name;
          st(A2.source.value, V.local.name, z, A2.importKind === "type" || V.type === "ImportSpecifier" && V.importKind === "type", false, !e.inlineTemplate);
        }
      else if (A2.type === "ExportDefaultDeclaration") {
        P = A2;
        let V;
        if (P.declaration.type === "ObjectExpression" ? V = P.declaration.properties : P.declaration.type === "CallExpression" && P.declaration.arguments[0].type === "ObjectExpression" && (V = P.declaration.arguments[0].properties), V)
          for (const X of V)
            X.type === "ObjectProperty" && X.key.type === "Identifier" && X.key.name === "name" && (_ = true), (X.type === "ObjectMethod" || X.type === "ObjectProperty") && X.key.type === "Identifier" && X.key.name === "render" && (Q = true);
        const z = A2.start + me, ee = A2.declaration.start + me;
        W.overwrite(z, ee, `const ${wr} = `);
      } else if (A2.type === "ExportNamedDeclaration") {
        const V = A2.specifiers.find((z) => z.exported.type === "Identifier" && z.exported.name === "default");
        V && (P = A2, A2.specifiers.length > 1 ? W.remove(V.start + me, V.end + me) : W.remove(A2.start + me, A2.end + me), A2.source ? W.prepend(`import { ${V.local.name} as ${wr} } from '${A2.source.value}'
`) : W.appendLeft(Xe, `
const ${wr} = ${V.local.name}
`)), A2.declaration && ho(A2.declaration, w, v);
      } else
        (A2.type === "VariableDeclaration" || A2.type === "FunctionDeclaration" || A2.type === "ClassDeclaration" || A2.type === "TSEnumDeclaration") && !A2.declare && ho(A2, w, v);
    if (o && lo(r.content)) {
      const { rootRefs: A2, importedHelpers: V } = uo(At, W, me);
      h = A2;
      for (const z of V)
        E.add(z);
    }
    me > Y && (/\n$/.test(r.content.trim()) || W.appendLeft(Xe, `
`), W.move(me, Xe, 0));
  }
  const sr = We(i.content, {
    plugins: [
      ...y,
      "topLevelAwait"
    ],
    sourceType: "module"
  }, Y);
  for (const A2 of sr.body) {
    const V = A2.start + Y;
    let z = A2.end + Y;
    for (A2.trailingComments && A2.trailingComments.length > 0 && (z = A2.trailingComments[A2.trailingComments.length - 1].end + Y); z <= n.length && /\s/.test(n.charAt(z)); )
      z++;
    if (A2.type === "LabeledStatement" && A2.label.name === "ref" && A2.body.type === "ExpressionStatement" && ge("ref sugar using the label syntax was an experimental proposal and has been dropped based on community feedback. Please check out the new proposal at https://github.com/vuejs/rfcs/discussions/369", A2), A2.type === "ImportDeclaration") {
      W.move(V, z, 0);
      let ee = 0;
      const X = (J) => {
        const ce = J > ee;
        ee++;
        const et = A2.specifiers[J], Me = A2.specifiers[J + 1];
        W.remove(ce ? A2.specifiers[J - 1].end + Y : et.start + Y, Me && !ce ? Me.start + Y : et.end + Y);
      };
      for (let J = 0; J < A2.specifiers.length; J++) {
        const ce = A2.specifiers[J], et = ce.local.name;
        let Me = ce.type === "ImportSpecifier" && ce.imported.type === "Identifier" && ce.imported.name;
        ce.type === "ImportNamespaceSpecifier" && (Me = "*");
        const Ct = A2.source.value, He = C[et];
        Ct === "vue" && (Me === Ue || Me === Er || Me === co) ? (ii(`\`${Me}\` is a compiler macro and no longer needs to be imported.`), X(J)) : He ? He.source === Ct && He.imported === Me ? X(J) : ge("different imports aliased to same local name.", ce) : st(Ct, et, Me, A2.importKind === "type" || ce.type === "ImportSpecifier" && ce.importKind === "type", true, !e.inlineTemplate);
      }
      A2.specifiers.length && ee === A2.specifiers.length && W.remove(A2.start + Y, A2.end + Y);
    }
    if (A2.type === "ExpressionStatement") {
      if (Ze(A2.expression) || yr(A2.expression) || bt(A2.expression))
        W.remove(A2.start + Y, A2.end + Y);
      else if (br(A2.expression)) {
        const ee = A2.expression.callee;
        W.overwrite(ee.start + Y, ee.end + Y, "expose");
      }
    }
    if (A2.type === "VariableDeclaration" && !A2.declare) {
      const ee = A2.declarations.length;
      let X = ee;
      for (let J = 0; J < ee; J++) {
        const ce = A2.declarations[J];
        if (ce.init) {
          const et = Ze(ce.init, ce.id) || bt(ce.init, ce.id), Me = yr(ce.init, ce.id);
          if (et || Me)
            if (X === 1)
              W.remove(A2.start + Y, A2.end + Y);
            else {
              let Ct = ce.start + Y, He = ce.end + Y;
              J < ee - 1 ? He = A2.declarations[J + 1].start + Y : Ct = A2.declarations[J - 1].end + Y, W.remove(Ct, He), X--;
            }
        }
      }
    }
    if ((A2.type === "VariableDeclaration" || A2.type === "FunctionDeclaration" || A2.type === "ClassDeclaration") && !A2.declare && ho(A2, T, v), A2.type === "VariableDeclaration" && !A2.declare || A2.type.endsWith("Statement")) {
      const ee = [sr.body];
      Xl(A2, {
        enter(X, J) {
          if (Ar(X) && this.skip(), X.type === "BlockStatement" && ee.push(X.body), X.type === "AwaitExpression") {
            Z = true;
            const et = ee[ee.length - 1].some((Me, Ct) => (ee.length === 1 || Ct > 0) && Me.type === "ExpressionStatement" && Me.start === X.start);
            Fa(X, et, J.type === "ExpressionStatement");
          }
        },
        exit(X) {
          X.type === "BlockStatement" && ee.pop();
        }
      });
    }
    (A2.type === "ExportNamedDeclaration" && A2.exportKind !== "type" || A2.type === "ExportAllDeclaration" || A2.type === "ExportDefaultDeclaration") && ge("<script setup> cannot contain ES module exports. If you are using a previous version of <script setup>, please consult the updated RFC at https://github.com/vuejs/rfcs/pull/227.", A2), m && (A2.type === "TSEnumDeclaration" && Lr(T, A2.id, "setup-const"), (A2.type.startsWith("TS") || A2.type === "ExportNamedDeclaration" && A2.exportKind === "type" || A2.type === "VariableDeclaration" && A2.declare) && (Nd(A2, de), W.move(V, z, 0)));
  }
  if (o && (h || lo(i.content)) || oe) {
    const { rootRefs: A2, importedHelpers: V } = uo(sr, W, Y, h, se);
    h = h ? [...h, ...A2] : A2;
    for (const z of V)
      E.add(z);
  }
  if (R2 && Sw(R2, le, de), F && ww(F, Ee), qr(K, Ue), qr(ue, Ue), qr(oe, Ue), qr(L, Er), r ? Y < me ? (W.remove(0, Y), W.remove(ne, me), W.remove(Xe, n.length)) : (W.remove(0, me), W.remove(Xe, Y), W.remove(ne, n.length)) : (W.remove(0, Y), W.remove(ne, n.length)), At && Object.assign(x, uh(At.body)), K)
    for (const A2 of Qo(K))
      x[A2] = "props";
  for (const A2 in le)
    x[A2] = "props";
  if (oe) {
    N && (x[N] = "setup-reactive-const");
    for (const A2 in se) {
      const { local: V } = se[A2];
      V !== A2 && (x[V] = "props-aliased", (x.__propsAliases || (x.__propsAliases = {}))[V] = A2);
    }
  }
  for (const [A2, { isType: V, imported: z, source: ee }] of Object.entries(C))
    V || (x[A2] = z === "*" || z === "default" && ee.endsWith(".vue") || ee === "vue" ? "setup-const" : "setup-maybe-ref");
  for (const A2 in w)
    x[A2] = w[A2];
  for (const A2 in T)
    x[A2] = T[A2];
  if (h)
    for (const A2 of h)
      x[A2] = "setup-ref";
  f.length && !(e.inlineTemplate && ((t = e.templateOptions) === null || t === void 0 ? void 0 : t.ssr)) && (E.add(On), E.add("unref"), W.prependRight(Y, `
${cf(f, x, p, u)}
`));
  let Vr = "__props";
  if (R2 && (Vr += ": any"), $ && W.prependLeft(Y, `
const ${$} = __props${R2 ? ` as ${$a(R2)}` : ""}
`), N && W.prependLeft(Y, `
const ${N} = ${Ge("createPropsRestProxy")}(__props, ${JSON.stringify(Object.keys(se))})
`), Z) {
    const A2 = m ? ": any" : "";
    W.prependLeft(Y, `
let __temp${A2}, __restore${A2}
`);
  }
  const Ua = k || !e.inlineTemplate ? ["expose"] : [];
  B && Ua.push(B === "emit" ? "emit" : `emit: ${B}`), Ua.length && (Vr += `, { ${Ua.join(", ")} }`, F && (Vr += `: { emit: (${i.content.slice(F.start, F.end)}), expose: any, slots: any, attrs: any }`));
  let Rs;
  if (!e.inlineTemplate || !s3.template && Q) {
    const A2 = Object.assign(Object.assign({}, w), T);
    for (const V in C)
      !C[V].isType && C[V].isUsedInTemplate && (A2[V] = true);
    Rs = `{ ${Object.keys(A2).join(", ")} }`;
  } else if (s3.template && !s3.template.src) {
    e.templateOptions && e.templateOptions.ssr && (M = true);
    const { code: A2, ast: V, preamble: z, tips: ee, errors: X } = Cd(Object.assign(Object.assign({ filename: a, source: s3.template.content, inMap: s3.template.map }, e.templateOptions), { id: p, scoped: s3.styles.some((ce) => ce.scoped), isProd: e.isProd, ssrCssVars: s3.cssVars, compilerOptions: Object.assign(Object.assign({}, e.templateOptions && e.templateOptions.compilerOptions), {
      inline: true,
      isTS: m,
      bindingMetadata: x
    }) }));
    ee.length && ee.forEach(ii);
    const J = X[0];
    if (typeof J == "string")
      throw new Error(J);
    if (J)
      throw J.loc && (J.message += `

` + s3.filename + `
` + Ks(n, J.loc.start.offset, J.loc.end.offset) + `
`), J;
    z && W.prepend(z), V && V.helpers.includes(ls) && E.delete("unref"), Rs = A2;
  } else
    Rs = "() => {}";
  e.inlineTemplate ? W.appendRight(ne, `
return ${Rs}
}

`) : W.appendRight(ne, `
const __returned__ = ${Rs}
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

`);
  let Bt = "";
  if (!_ && a && a !== Md) {
    const A2 = a.match(/([^/\\]+)\.\w+$/);
    A2 && (Bt += `
  __name: '${A2[1]}',`);
  }
  if (M && (Bt += `
  __ssrInlineRender: true,`), K) {
    let A2 = i.content.slice(K.start, K.end).trim();
    if (oe) {
      const V = [];
      for (const z in se) {
        const ee = $i(z);
        ee && V.push(`${z}: ${ee}`);
      }
      V.length && (A2 = `${Ge("mergeDefaults")}(${A2}, {
  ${V.join(`,
  `)}
})`);
    }
    Bt += `
  props: ${A2},`;
  } else
    R2 && (Bt += Ba(le));
  L ? Bt += `
  emits: ${i.content.slice(L.start, L.end).trim()},` : F && (Bt += Ew(Ee));
  const ja = k || e.inlineTemplate ? "" : `  expose();
`;
  if (m) {
    const A2 = P ? `
  ...${wr},` : "";
    W.prependLeft(Y, `
export default /*#__PURE__*/${Ge("defineComponent")}({${A2}${Bt}
  ${Z ? "async " : ""}setup(${Vr}) {
${ja}`), W.appendRight(ne, "})");
  } else
    P ? (W.prependLeft(Y, `
export default /*#__PURE__*/Object.assign(${wr}, {${Bt}
  ${Z ? "async " : ""}setup(${Vr}) {
${ja}`), W.appendRight(ne, "})")) : (W.prependLeft(Y, `
export default {${Bt}
  ${Z ? "async " : ""}setup(${Vr}) {
${ja}`), W.appendRight(ne, "}"));
  return E.size > 0 && W.prepend(`import { ${[...E].map((A2) => `${A2} as _${A2}`).join(", ")} } from 'vue'
`), W.trim(), Object.assign(Object.assign({}, i), { bindings: x, imports: C, content: W.toString(), map: c ? W.generateMap({
    source: a,
    hires: true,
    includeContent: true
  }) : void 0, scriptAst: At == null ? void 0 : At.body, scriptSetupAst: sr == null ? void 0 : sr.body });
}
function Lr(s3, e, t) {
  s3[e.name] = t;
}
function ho(s3, e, t) {
  if (s3.type === "VariableDeclaration") {
    const r = s3.kind === "const";
    for (const { id: i, init: n } of s3.declarations) {
      const a = !!(r && kt(n, (o) => o === Ue || o === Er || o === Kr));
      if (i.type === "Identifier") {
        let o;
        const l = t.reactive || "reactive";
        kt(n, l) ? o = r ? "setup-reactive-const" : "setup-let" : a || r && Od(n, l) ? o = kt(n, Ue) ? "setup-reactive-const" : "setup-const" : r ? kt(n, t.ref || "ref") ? o = "setup-ref" : o = "setup-maybe-ref" : o = "setup-let", Lr(e, i, o);
      } else {
        if (kt(n, Ue))
          return;
        i.type === "ObjectPattern" ? Id(i, e, r, a) : i.type === "ArrayPattern" && kd(i, e, r, a);
      }
    }
  } else
    (s3.type === "TSEnumDeclaration" || s3.type === "FunctionDeclaration" || s3.type === "ClassDeclaration") && (e[s3.id.name] = "setup-const");
}
function Id(s3, e, t, r = false) {
  for (const i of s3.properties)
    if (i.type === "ObjectProperty")
      if (i.key.type === "Identifier" && i.key === i.value) {
        const n = r ? "setup-const" : t ? "setup-maybe-ref" : "setup-let";
        Lr(e, i.key, n);
      } else
        ju(i.value, e, t, r);
    else {
      const n = t ? "setup-const" : "setup-let";
      Lr(e, i.argument, n);
    }
}
function kd(s3, e, t, r = false) {
  for (const i of s3.elements)
    i && ju(i, e, t, r);
}
function ju(s3, e, t, r = false) {
  if (s3.type === "Identifier")
    Lr(e, s3, r ? "setup-const" : t ? "setup-maybe-ref" : "setup-let");
  else if (s3.type === "RestElement") {
    const i = t ? "setup-const" : "setup-let";
    Lr(e, s3.argument, i);
  } else if (s3.type === "ObjectPattern")
    Id(s3, e, t);
  else if (s3.type === "ArrayPattern")
    kd(s3, e, t);
  else if (s3.type === "AssignmentPattern")
    if (s3.left.type === "Identifier") {
      const i = r ? "setup-const" : t ? "setup-maybe-ref" : "setup-let";
      Lr(e, s3.left, i);
    } else
      ju(s3.left, e, t);
}
function Nd(s3, e) {
  s3.type === "TSInterfaceDeclaration" ? e[s3.id.name] = ["Object"] : s3.type === "TSTypeAliasDeclaration" ? e[s3.id.name] = Bn(s3.typeAnnotation, e) : s3.type === "ExportNamedDeclaration" && s3.declaration && Nd(s3.declaration, e);
}
function Sw(s3, e, t, r) {
  const i = s3.type === "TSTypeLiteral" ? s3.members : s3.body;
  for (const n of i)
    if ((n.type === "TSPropertySignature" || n.type === "TSMethodSignature") && n.key.type === "Identifier") {
      let a;
      n.type === "TSMethodSignature" ? a = ["Function"] : n.typeAnnotation && (a = Bn(n.typeAnnotation.typeAnnotation, t)), e[n.key.name] = {
        key: n.key.name,
        required: !n.optional,
        type: a || ["null"]
      };
    }
}
function Bn(s3, e) {
  switch (s3.type) {
    case "TSStringKeyword":
      return ["String"];
    case "TSNumberKeyword":
      return ["Number"];
    case "TSBooleanKeyword":
      return ["Boolean"];
    case "TSObjectKeyword":
      return ["Object"];
    case "TSTypeLiteral":
      return ["Object"];
    case "TSFunctionType":
      return ["Function"];
    case "TSArrayType":
    case "TSTupleType":
      return ["Array"];
    case "TSLiteralType":
      switch (s3.literal.type) {
        case "StringLiteral":
          return ["String"];
        case "BooleanLiteral":
          return ["Boolean"];
        case "NumericLiteral":
        case "BigIntLiteral":
          return ["Number"];
        default:
          return ["null"];
      }
    case "TSTypeReference":
      if (s3.typeName.type === "Identifier") {
        if (e[s3.typeName.name])
          return e[s3.typeName.name];
        switch (s3.typeName.name) {
          case "Array":
          case "Function":
          case "Object":
          case "Set":
          case "Map":
          case "WeakSet":
          case "WeakMap":
          case "Date":
          case "Promise":
            return [s3.typeName.name];
          case "Record":
          case "Partial":
          case "Readonly":
          case "Pick":
          case "Omit":
          case "Exclude":
          case "Extract":
          case "Required":
          case "InstanceType":
            return ["Object"];
        }
      }
      return ["null"];
    case "TSParenthesizedType":
      return Bn(s3.typeAnnotation, e);
    case "TSUnionType":
      return [
        ...new Set([].concat(...s3.types.map((t) => Bn(t, e))))
      ];
    case "TSIntersectionType":
      return ["Object"];
    case "TSSymbolKeyword":
      return ["Symbol"];
    default:
      return ["null"];
  }
}
function oh(s3) {
  return s3.length > 1 ? `[${s3.join(", ")}]` : s3[0];
}
function ww(s3, e) {
  if (s3.type === "TSTypeLiteral" || s3.type === "TSInterfaceBody") {
    const t = s3.type === "TSTypeLiteral" ? s3.members : s3.body;
    for (let r of t)
      r.type === "TSCallSignatureDeclaration" && lh(r.parameters[0], e);
    return;
  } else
    lh(s3.parameters[0], e);
}
function lh(s3, e) {
  if (s3.type === "Identifier" && s3.typeAnnotation && s3.typeAnnotation.type === "TSTypeAnnotation") {
    const t = s3.typeAnnotation.typeAnnotation;
    if (t.type === "TSLiteralType")
      t.literal.type !== "UnaryExpression" && e.add(String(t.literal.value));
    else if (t.type === "TSUnionType")
      for (const r of t.types)
        r.type === "TSLiteralType" && r.literal.type !== "UnaryExpression" && e.add(String(r.literal.value));
  }
}
function Ew(s3) {
  return s3.size ? `
  emits: [${Array.from(s3).map((e) => JSON.stringify(e)).join(", ")}],` : "";
}
function kt(s3, e) {
  return !!(s3 && s3.type === "CallExpression" && s3.callee.type === "Identifier" && (typeof e == "string" ? s3.callee.name === e : e(s3.callee.name)));
}
function Od(s3, e) {
  if (kt(s3, e))
    return true;
  switch (s3.type) {
    case "UnaryExpression":
    case "BinaryExpression":
    case "ArrayExpression":
    case "ObjectExpression":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "UpdateExpression":
    case "ClassExpression":
    case "TaggedTemplateExpression":
      return true;
    case "SequenceExpression":
      return Od(s3.expressions[s3.expressions.length - 1], e);
    default:
      return !!s3.type.endsWith("Literal");
  }
}
function uh(s3) {
  for (const e of s3)
    if (e.type === "ExportDefaultDeclaration" && e.declaration.type === "ObjectExpression")
      return xw(e.declaration);
  return {};
}
function xw(s3) {
  const e = {};
  Object.defineProperty(e, "__isScriptSetup", {
    enumerable: false,
    value: false
  });
  for (const t of s3.properties)
    if (t.type === "ObjectProperty" && !t.computed && t.key.type === "Identifier") {
      if (t.key.name === "props")
        for (const r of Qo(t.value))
          e[r] = "props";
      else if (t.key.name === "inject")
        for (const r of Qo(t.value))
          e[r] = "options";
      else if (t.value.type === "ObjectExpression" && (t.key.name === "computed" || t.key.name === "methods"))
        for (const r of Jo(t.value))
          e[r] = "options";
    } else if (t.type === "ObjectMethod" && t.key.type === "Identifier" && (t.key.name === "setup" || t.key.name === "data")) {
      for (const r of t.body.body)
        if (r.type === "ReturnStatement" && r.argument && r.argument.type === "ObjectExpression")
          for (const i of Jo(r.argument))
            e[i] = t.key.name === "setup" ? "setup-maybe-ref" : "data";
    }
  return e;
}
function Jo(s3) {
  const e = [];
  for (const t of s3.properties)
    (t.type === "ObjectProperty" || t.type === "ObjectMethod") && !t.computed && (t.key.type === "Identifier" ? e.push(t.key.name) : t.key.type === "StringLiteral" && e.push(t.key.value));
  return e;
}
function Tw(s3) {
  const e = [];
  for (const t of s3.elements)
    t && t.type === "StringLiteral" && e.push(t.value);
  return e;
}
function Qo(s3) {
  return s3.type === "ArrayExpression" ? Tw(s3) : s3.type === "ObjectExpression" ? Jo(s3) : [];
}
var ch = hf();
function Pw(s3) {
  const { content: e, ast: t } = s3.template, r = ch.get(e);
  if (r)
    return r;
  let i = "";
  return fa(xs([t]), {
    nodeTransforms: [
      (n) => {
        if (n.type === 1) {
          !ms.isNativeTag(n.tag) && !ms.isBuiltInComponent(n.tag) && (i += `,${Mt(n.tag)},${Dr(Mt(n.tag))}`);
          for (let a = 0; a < n.props.length; a++) {
            const o = n.props[a];
            o.type === 7 && (vw(o.name) || (i += `,v${Dr(Mt(o.name))}`), o.exp && (i += `,${$n(o.exp.content, o.name)}`));
          }
        } else
          n.type === 5 && (i += `,${$n(n.content.content)}`);
      }
    ]
  }), i += ";", ch.set(e, i), i;
}
var Aw = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
function $n(s3, e) {
  if (/ as\s+\w|<.*>|:/.test(s3)) {
    if (e === "slot")
      s3 = `(${s3})=>{}`;
    else if (e === "for") {
      const i = s3.match(Aw);
      if (i) {
        const [, n, a] = i;
        return $n(`(${n})=>{}`) + $n(a);
      }
    }
    let t = "";
    const r = Pp(s3, { plugins: ["typescript"] });
    return ya(r, (i) => {
      t += "," + i.name;
    }), t;
  }
  return Cw(s3);
}
function Cw(s3) {
  return s3.replace(/'[^']*'|"[^"]*"/g, "").replace(/`[^`]+`/g, _w);
}
function _w(s3) {
  const e = s3.match(/\${[^}]+}/g);
  return e ? e.map((t) => t.slice(2, -1)).join(",") : "";
}
function Ld(s3, e) {
  return new RegExp(`[^\\w$_]${s3.replace(/\$/g, "\\$")}[^\\w$_]`).test(Pw(e));
}
function Iw(s3, e) {
  if (!e.scriptSetup || e.scriptSetup.lang !== "ts" && e.scriptSetup.lang !== "tsx")
    return false;
  for (const t in s3)
    if (!s3[t].isUsedInTemplate && Ld(t, e))
      return true;
  return false;
}
var Md = "anonymous.vue";
var hh = hf();
function kw(s3, { sourceMap: e = true, filename: t = Md, sourceRoot: r = "", pad: i = false, ignoreEmpty: n = true, compiler: a = rf } = {}) {
  const o = s3 + e + t + r + i + a.parse, l = hh.get(o);
  if (l)
    return l;
  const u = {
    filename: t,
    source: s3,
    template: null,
    script: null,
    scriptSetup: null,
    styles: [],
    customBlocks: [],
    cssVars: [],
    slotted: false,
    shouldForceReload: (g) => Iw(g, u)
  }, c = [];
  if (a.parse(s3, {
    isNativeTag: () => true,
    isPreTag: () => true,
    getTextMode: ({ tag: g, props: d }, m) => !m && g !== "template" || g === "template" && d.some((y) => y.type === 6 && y.name === "lang" && y.value && y.value.content && y.value.content !== "html") ? 2 : 0,
    onError: (g) => {
      c.push(g);
    }
  }).children.forEach((g) => {
    if (g.type === 1 && !(n && g.tag !== "template" && Rw(g) && !Dw(g)))
      switch (g.tag) {
        case "template":
          if (u.template)
            c.push(ph(g));
          else {
            const x = u.template = Wi(g, s3, false);
            if (x.ast = g, x.attrs.functional) {
              const E = new SyntaxError("<template functional> is no longer supported in Vue 3, since functional components no longer have significant performance difference from stateful ones. Just use a normal <template> instead.");
              E.loc = g.props.find((C) => C.name === "functional").loc, c.push(E);
            }
          }
          break;
        case "script":
          const d = Wi(g, s3, i), m = !!d.attrs.setup;
          if (m && !u.scriptSetup) {
            u.scriptSetup = d;
            break;
          }
          if (!m && !u.script) {
            u.script = d;
            break;
          }
          c.push(ph(g, m));
          break;
        case "style":
          const y = Wi(g, s3, i);
          y.attrs.vars && c.push(new SyntaxError("<style vars> has been replaced by a new proposal: https://github.com/vuejs/rfcs/pull/231")), u.styles.push(y);
          break;
        default:
          u.customBlocks.push(Wi(g, s3, i));
          break;
      }
  }), u.scriptSetup && (u.scriptSetup.src && (c.push(new SyntaxError('<script setup> cannot use the "src" attribute because its syntax will be ambiguous outside of the component.')), u.scriptSetup = null), u.script && u.script.src && (c.push(new SyntaxError('<script> cannot use the "src" attribute when <script setup> is also present because they must be processed together.')), u.script = null)), e) {
    const g = (d) => {
      d && !d.src && (d.map = Lw(t, s3, d.content, r, !i || d.type === "template" ? d.loc.start.line - 1 : 0));
    };
    g(u.template), g(u.script), u.styles.forEach(g), u.customBlocks.forEach(g);
  }
  u.cssVars = mb(u);
  const p = /(?:::v-|:)slotted\(/;
  u.slotted = u.styles.some((g) => g.scoped && p.test(g.content));
  const f = {
    descriptor: u,
    errors: c
  };
  return hh.set(o, f), f;
}
function ph(s3, e = false) {
  const t = new SyntaxError(`Single file component can contain only one <${s3.tag}${e ? " setup" : ""}> element`);
  return t.loc = s3.loc, t;
}
function Wi(s3, e, t) {
  const r = s3.tag;
  let { start: i, end: n } = s3.loc, a = "";
  if (s3.children.length)
    i = s3.children[0].loc.start, n = s3.children[s3.children.length - 1].loc.end, a = e.slice(i.offset, n.offset);
  else {
    const c = s3.loc.source.indexOf("</");
    c > -1 && (i = {
      line: i.line,
      column: i.column + c,
      offset: i.offset + c
    }), n = Object.assign({}, i);
  }
  const o = {
    source: a,
    start: i,
    end: n
  }, l = {}, u = {
    type: r,
    content: a,
    loc: o,
    attrs: l
  };
  return t && (u.content = Mw(e, u, t) + u.content), s3.props.forEach((c) => {
    c.type === 6 && (l[c.name] = c.value && c.value.content || true, c.name === "lang" ? u.lang = c.value && c.value.content : c.name === "src" ? u.src = c.value && c.value.content : r === "style" ? c.name === "scoped" ? u.scoped = true : c.name === "module" && (u.module = l[c.name]) : r === "script" && c.name === "setup" && (u.setup = l.setup));
  }), u;
}
var Dd = /\r?\n/g;
var Nw = /^(?:\/\/)?\s*$/;
var Ow = /./g;
function Lw(s3, e, t, r, i) {
  const n = new ma({
    file: s3.replace(/\\/g, "/"),
    sourceRoot: r.replace(/\\/g, "/")
  });
  return n.setSourceContent(s3, e), t.split(Dd).forEach((a, o) => {
    if (!Nw.test(a)) {
      const l = o + 1 + i, u = o + 1;
      for (let c = 0; c < a.length; c++)
        /\s/.test(a[c]) || n.addMapping({
          source: s3,
          original: {
            line: l,
            column: c
          },
          generated: {
            line: u,
            column: c
          }
        });
    }
  }), JSON.parse(n.toString());
}
function Mw(s3, e, t) {
  if (s3 = s3.slice(0, e.loc.start.offset), t === "space")
    return s3.replace(Ow, " ");
  {
    const r = s3.split(Dd).length, i = e.type === "script" && !e.lang ? `//
` : `
`;
    return Array(r).join(i);
  }
}
function Dw(s3) {
  return s3.props.some((e) => e.type !== 6 ? false : e.name === "src");
}
function Rw(s3) {
  for (let e = 0; e < s3.children.length; e++) {
    const t = s3.children[e];
    if (t.type !== 2 || t.content.trim() !== "")
      return false;
  }
  return true;
}
function Rd() {
  return false;
}
function Fd() {
  throw new Error("tty.ReadStream is not implemented");
}
function Bd() {
  throw new Error("tty.ReadStream is not implemented");
}
var Fw = {
  isatty: Rd,
  ReadStream: Fd,
  WriteStream: Bd
};
var Bw = Object.freeze({
  __proto__: null,
  isatty: Rd,
  ReadStream: Fd,
  WriteStream: Bd,
  default: Fw
});
var $w = Di(Bw);
var Uw = !("NO_COLOR" in {} || ss.argv.includes("--no-color")) && ("FORCE_COLOR" in {} || ss.argv.includes("--color") || false || $w.isatty(1) && {}.TERM !== "dumb" || "CI" in {});
var Ne = (s3, e, t = s3) => (r) => {
  let i = "" + r, n = i.indexOf(e, s3.length);
  return ~n ? s3 + $d(i, e, t, n) + e : s3 + i + e;
};
var $d = (s3, e, t, r) => {
  let i = s3.substring(0, r) + t, n = s3.substring(r + e.length), a = n.indexOf(e);
  return ~a ? i + $d(n, e, t, a) : i + n;
};
var Ud = (s3 = Uw) => ({
  isColorSupported: s3,
  reset: s3 ? (e) => `\x1B[0m${e}\x1B[0m` : String,
  bold: s3 ? Ne("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
  dim: s3 ? Ne("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
  italic: s3 ? Ne("\x1B[3m", "\x1B[23m") : String,
  underline: s3 ? Ne("\x1B[4m", "\x1B[24m") : String,
  inverse: s3 ? Ne("\x1B[7m", "\x1B[27m") : String,
  hidden: s3 ? Ne("\x1B[8m", "\x1B[28m") : String,
  strikethrough: s3 ? Ne("\x1B[9m", "\x1B[29m") : String,
  black: s3 ? Ne("\x1B[30m", "\x1B[39m") : String,
  red: s3 ? Ne("\x1B[31m", "\x1B[39m") : String,
  green: s3 ? Ne("\x1B[32m", "\x1B[39m") : String,
  yellow: s3 ? Ne("\x1B[33m", "\x1B[39m") : String,
  blue: s3 ? Ne("\x1B[34m", "\x1B[39m") : String,
  magenta: s3 ? Ne("\x1B[35m", "\x1B[39m") : String,
  cyan: s3 ? Ne("\x1B[36m", "\x1B[39m") : String,
  white: s3 ? Ne("\x1B[37m", "\x1B[39m") : String,
  gray: s3 ? Ne("\x1B[90m", "\x1B[39m") : String,
  bgBlack: s3 ? Ne("\x1B[40m", "\x1B[49m") : String,
  bgRed: s3 ? Ne("\x1B[41m", "\x1B[49m") : String,
  bgGreen: s3 ? Ne("\x1B[42m", "\x1B[49m") : String,
  bgYellow: s3 ? Ne("\x1B[43m", "\x1B[49m") : String,
  bgBlue: s3 ? Ne("\x1B[44m", "\x1B[49m") : String,
  bgMagenta: s3 ? Ne("\x1B[45m", "\x1B[49m") : String,
  bgCyan: s3 ? Ne("\x1B[46m", "\x1B[49m") : String,
  bgWhite: s3 ? Ne("\x1B[47m", "\x1B[49m") : String
});
var Fe = Ud();
var jw = Ud;
Fe.createColors = jw;
var po = "'".charCodeAt(0);
var fh = '"'.charCodeAt(0);
var Hi = "\\".charCodeAt(0);
var dh = "/".charCodeAt(0);
var Ki = `
`.charCodeAt(0);
var zs = " ".charCodeAt(0);
var Yi = "\f".charCodeAt(0);
var Ji = "	".charCodeAt(0);
var Qi = "\r".charCodeAt(0);
var qw = "[".charCodeAt(0);
var Vw = "]".charCodeAt(0);
var zw = "(".charCodeAt(0);
var Gw = ")".charCodeAt(0);
var Ww = "{".charCodeAt(0);
var Hw = "}".charCodeAt(0);
var Kw = ";".charCodeAt(0);
var Yw = "*".charCodeAt(0);
var Jw = ":".charCodeAt(0);
var Qw = "@".charCodeAt(0);
var Xi = /[\t\n\f\r "#'()/;[\\\]{}]/g;
var Zi = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
var Xw = /.[\n"'(/\\]/;
var mh = /[\da-f]/i;
var jd = function(e, t = {}) {
  let r = e.css.valueOf(), i = t.ignoreErrors, n, a, o, l, u, c, h, p, f, g, d = r.length, m = 0, y = [], x = [];
  function E() {
    return m;
  }
  function C(P) {
    throw e.error("Unclosed " + P, m);
  }
  function v() {
    return x.length === 0 && m >= d;
  }
  function w(P) {
    if (x.length)
      return x.pop();
    if (m >= d)
      return;
    let b = P ? P.ignoreUnclosed : false;
    switch (n = r.charCodeAt(m), n) {
      case Ki:
      case zs:
      case Ji:
      case Qi:
      case Yi: {
        a = m;
        do
          a += 1, n = r.charCodeAt(a);
        while (n === zs || n === Ki || n === Ji || n === Qi || n === Yi);
        g = ["space", r.slice(m, a)], m = a - 1;
        break;
      }
      case qw:
      case Vw:
      case Ww:
      case Hw:
      case Jw:
      case Kw:
      case Gw: {
        let S = String.fromCharCode(n);
        g = [S, S, m];
        break;
      }
      case zw: {
        if (p = y.length ? y.pop()[1] : "", f = r.charCodeAt(m + 1), p === "url" && f !== po && f !== fh && f !== zs && f !== Ki && f !== Ji && f !== Yi && f !== Qi) {
          a = m;
          do {
            if (c = false, a = r.indexOf(")", a + 1), a === -1)
              if (i || b) {
                a = m;
                break;
              } else
                C("bracket");
            for (h = a; r.charCodeAt(h - 1) === Hi; )
              h -= 1, c = !c;
          } while (c);
          g = ["brackets", r.slice(m, a + 1), m, a], m = a;
        } else
          a = r.indexOf(")", m + 1), l = r.slice(m, a + 1), a === -1 || Xw.test(l) ? g = ["(", "(", m] : (g = ["brackets", l, m, a], m = a);
        break;
      }
      case po:
      case fh: {
        o = n === po ? "'" : '"', a = m;
        do {
          if (c = false, a = r.indexOf(o, a + 1), a === -1)
            if (i || b) {
              a = m + 1;
              break;
            } else
              C("string");
          for (h = a; r.charCodeAt(h - 1) === Hi; )
            h -= 1, c = !c;
        } while (c);
        g = ["string", r.slice(m, a + 1), m, a], m = a;
        break;
      }
      case Qw: {
        Xi.lastIndex = m + 1, Xi.test(r), Xi.lastIndex === 0 ? a = r.length - 1 : a = Xi.lastIndex - 2, g = ["at-word", r.slice(m, a + 1), m, a], m = a;
        break;
      }
      case Hi: {
        for (a = m, u = true; r.charCodeAt(a + 1) === Hi; )
          a += 1, u = !u;
        if (n = r.charCodeAt(a + 1), u && n !== dh && n !== zs && n !== Ki && n !== Ji && n !== Qi && n !== Yi && (a += 1, mh.test(r.charAt(a)))) {
          for (; mh.test(r.charAt(a + 1)); )
            a += 1;
          r.charCodeAt(a + 1) === zs && (a += 1);
        }
        g = ["word", r.slice(m, a + 1), m, a], m = a;
        break;
      }
      default: {
        n === dh && r.charCodeAt(m + 1) === Yw ? (a = r.indexOf("*/", m + 2) + 1, a === 0 && (i || b ? a = r.length : C("comment")), g = ["comment", r.slice(m, a + 1), m, a], m = a) : (Zi.lastIndex = m + 1, Zi.test(r), Zi.lastIndex === 0 ? a = r.length - 1 : a = Zi.lastIndex - 2, g = ["word", r.slice(m, a + 1), m, a], y.push(g), m = a);
        break;
      }
    }
    return m++, g;
  }
  function T(P) {
    x.push(P);
  }
  return {
    back: T,
    nextToken: w,
    endOfFile: v,
    position: E
  };
};
var qd;
function Zw(s3) {
  qd = s3;
}
var eE = {
  brackets: Fe.cyan,
  "at-word": Fe.cyan,
  comment: Fe.gray,
  string: Fe.green,
  class: Fe.yellow,
  hash: Fe.magenta,
  call: Fe.cyan,
  "(": Fe.cyan,
  ")": Fe.cyan,
  "{": Fe.yellow,
  "}": Fe.yellow,
  "[": Fe.yellow,
  "]": Fe.yellow,
  ":": Fe.yellow,
  ";": Fe.yellow
};
function tE([s3, e], t) {
  if (s3 === "word") {
    if (e[0] === ".")
      return "class";
    if (e[0] === "#")
      return "hash";
  }
  if (!t.endOfFile()) {
    let r = t.nextToken();
    if (t.back(r), r[0] === "brackets" || r[0] === "(")
      return "call";
  }
  return s3;
}
function Vd(s3) {
  let e = jd(new qd(s3), { ignoreErrors: true }), t = "";
  for (; !e.endOfFile(); ) {
    let r = e.nextToken(), i = eE[tE(r, e)];
    i ? t += r[1].split(/\r?\n/).map((n) => i(n)).join(`
`) : t += r[1];
  }
  return t;
}
Vd.registerInput = Zw;
var ni = Vd;
var Ei = class _Ei extends Error {
  constructor(e, t, r, i, n, a) {
    super(e), this.name = "CssSyntaxError", this.reason = e, n && (this.file = n), i && (this.source = i), a && (this.plugin = a), typeof t < "u" && typeof r < "u" && (typeof t == "number" ? (this.line = t, this.column = r) : (this.line = t.line, this.column = t.column, this.endLine = r.line, this.endColumn = r.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, _Ei);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let t = this.source;
    e == null && (e = Fe.isColorSupported), ni && e && (t = ni(t));
    let r = t.split(/\r?\n/), i = Math.max(this.line - 3, 0), n = Math.min(this.line + 2, r.length), a = String(n).length, o, l;
    if (e) {
      let { bold: u, red: c, gray: h } = Fe.createColors(true);
      o = (p) => u(c(p)), l = (p) => h(p);
    } else
      o = l = (u) => u;
    return r.slice(i, n).map((u, c) => {
      let h = i + 1 + c, p = " " + (" " + h).slice(-a) + " | ";
      if (h === this.line) {
        let f = l(p.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return o(">") + l(p) + u + `
 ` + f + o("^");
      }
      return " " + l(p) + u;
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var Un = Ei;
Ei.default = Ei;
var rE = Symbol("isClean");
var sE = Symbol("my");
var qu = {
  isClean: rE,
  my: sE
};
var gh = {
  colon: ": ",
  indent: "    ",
  beforeDecl: `
`,
  beforeRule: `
`,
  beforeOpen: " ",
  beforeClose: `
`,
  beforeComment: `
`,
  after: `
`,
  emptyBody: "",
  commentLeft: " ",
  commentRight: " ",
  semicolon: false
};
function iE(s3) {
  return s3[0].toUpperCase() + s3.slice(1);
}
var Xo = class {
  constructor(e) {
    this.builder = e;
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
    this[e.type](e, t);
  }
  document(e) {
    this.body(e);
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), r = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + r + "*/", e);
  }
  decl(e, t) {
    let r = this.raw(e, "between", "colon"), i = e.prop + r + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"), t && (i += ";"), this.builder(i, e);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  atrule(e, t) {
    let r = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? r += e.raws.afterName : i && (r += " "), e.nodes)
      this.block(e, r + i);
    else {
      let n = (e.raws.between || "") + (t ? ";" : "");
      this.builder(r + i + n, e);
    }
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let r = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let n = e.nodes[i], a = this.raw(n, "before");
      a && this.builder(a), this.stringify(n, t !== i || r);
    }
  }
  block(e, t) {
    let r = this.raw(e, "between", "beforeOpen");
    this.builder(t + r + "{", e, "start");
    let i;
    e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end");
  }
  raw(e, t, r) {
    let i;
    if (r || (r = t), t && (i = e.raws[t], typeof i < "u"))
      return i;
    let n = e.parent;
    if (r === "before" && (!n || n.type === "root" && n.first === e || n && n.type === "document"))
      return "";
    if (!n)
      return gh[r];
    let a = e.root();
    if (a.rawCache || (a.rawCache = {}), typeof a.rawCache[r] < "u")
      return a.rawCache[r];
    if (r === "before" || r === "after")
      return this.beforeAfter(e, r);
    {
      let o = "raw" + iE(r);
      this[o] ? i = this[o](a, e) : a.walk((l) => {
        if (i = l.raws[t], typeof i < "u")
          return false;
      });
    }
    return typeof i > "u" && (i = gh[r]), a.rawCache[r] = i, i;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length && r.last.type === "decl" && (t = r.raws.semicolon, typeof t < "u"))
        return false;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length === 0 && (t = r.raws.after, typeof t < "u"))
        return false;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent)
      return e.raws.indent;
    let t;
    return e.walk((r) => {
      let i = r.parent;
      if (i && i !== e && i.parent && i.parent === e && typeof r.raws.before < "u") {
        let n = r.raws.before.split(`
`);
        return t = n[n.length - 1], t = t.replace(/\S/g, ""), false;
      }
    }), t;
  }
  rawBeforeComment(e, t) {
    let r;
    return e.walkComments((i) => {
      if (typeof i.raws.before < "u")
        return r = i.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), false;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeDecl(e, t) {
    let r;
    return e.walkDecls((i) => {
      if (typeof i.raws.before < "u")
        return r = i.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), false;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < "u")
        return t = r.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), false;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
        return t = r.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), false;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((r) => {
      if (r.type !== "decl" && (t = r.raws.between, typeof t < "u"))
        return false;
    }), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((r) => {
      if (typeof r.raws.between < "u")
        return t = r.raws.between.replace(/[^\s:]/g, ""), false;
    }), t;
  }
  beforeAfter(e, t) {
    let r;
    e.type === "decl" ? r = this.raw(e, null, "beforeDecl") : e.type === "comment" ? r = this.raw(e, null, "beforeComment") : t === "before" ? r = this.raw(e, null, "beforeRule") : r = this.raw(e, null, "beforeClose");
    let i = e.parent, n = 0;
    for (; i && i.type !== "root"; )
      n += 1, i = i.parent;
    if (r.includes(`
`)) {
      let a = this.raw(e, null, "indent");
      if (a.length)
        for (let o = 0; o < n; o++)
          r += a;
    }
    return r;
  }
  rawValue(e, t) {
    let r = e[t], i = e.raws[t];
    return i && i.value === r ? i.raw : r;
  }
};
var zd = Xo;
Xo.default = Xo;
function Zo(s3, e) {
  new zd(e).stringify(s3);
}
var Na = Zo;
Zo.default = Zo;
var { isClean: en, my: nE } = qu;
function el(s3, e) {
  let t = new s3.constructor();
  for (let r in s3) {
    if (!Object.prototype.hasOwnProperty.call(s3, r) || r === "proxyCache")
      continue;
    let i = s3[r], n = typeof i;
    r === "parent" && n === "object" ? e && (t[r] = e) : r === "source" ? t[r] = i : Array.isArray(i) ? t[r] = i.map((a) => el(a, t)) : (n === "object" && i !== null && (i = el(i)), t[r] = i);
  }
  return t;
}
var tl = class {
  constructor(e = {}) {
    this.raws = {}, this[en] = false, this[nE] = true;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let r of e[t])
          typeof r.clone == "function" ? this.append(r.clone()) : this.append(r);
      } else
        this[t] = e[t];
  }
  error(e, t = {}) {
    if (this.source) {
      let { start: r, end: i } = this.rangeBy(t);
      return this.source.input.error(e, { line: r.line, column: r.column }, { line: i.line, column: i.column }, t);
    }
    return new Un(e);
  }
  warn(e, t, r) {
    let i = { node: this };
    for (let n in r)
      i[n] = r[n];
    return e.warn(t, i);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  toString(e = Na) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (r) => {
      t += r;
    }), t;
  }
  assign(e = {}) {
    for (let t in e)
      this[t] = e[t];
    return this;
  }
  clone(e = {}) {
    let t = el(this);
    for (let r in e)
      t[r] = e[r];
    return t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, r = false;
      for (let i of e)
        i === this ? r = true : r ? (this.parent.insertAfter(t, i), t = i) : this.parent.insertBefore(t, i);
      r || this.remove();
    }
    return this;
  }
  next() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  prev() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  raw(e, t) {
    return new zd().raw(this, e, t);
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  toJSON(e, t) {
    let r = {}, i = t == null;
    t = t || /* @__PURE__ */ new Map();
    let n = 0;
    for (let a in this) {
      if (!Object.prototype.hasOwnProperty.call(this, a) || a === "parent" || a === "proxyCache")
        continue;
      let o = this[a];
      if (Array.isArray(o))
        r[a] = o.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l);
      else if (typeof o == "object" && o.toJSON)
        r[a] = o.toJSON(null, t);
      else if (a === "source") {
        let l = t.get(o.input);
        l == null && (l = n, t.set(o.input, n), n++), r[a] = {
          inputId: l,
          start: o.start,
          end: o.end
        };
      } else
        r[a] = o;
    }
    return i && (r.inputs = [...t.keys()].map((a) => a.toJSON())), r;
  }
  positionInside(e) {
    let t = this.toString(), r = this.source.start.column, i = this.source.start.line;
    for (let n = 0; n < e; n++)
      t[n] === `
` ? (r = 1, i += 1) : r += 1;
    return { line: i, column: r };
  }
  positionBy(e) {
    let t = this.source.start;
    if (e.index)
      t = this.positionInside(e.index);
    else if (e.word) {
      let r = this.toString().indexOf(e.word);
      r !== -1 && (t = this.positionInside(r));
    }
    return t;
  }
  rangeBy(e) {
    let t = {
      line: this.source.start.line,
      column: this.source.start.column
    }, r = this.source.end ? {
      line: this.source.end.line,
      column: this.source.end.column + 1
    } : {
      line: t.line,
      column: t.column + 1
    };
    if (e.word) {
      let i = this.toString().indexOf(e.word);
      i !== -1 && (t = this.positionInside(i), r = this.positionInside(i + e.word.length));
    } else
      e.start ? t = {
        line: e.start.line,
        column: e.start.column
      } : e.index && (t = this.positionInside(e.index)), e.end ? r = {
        line: e.end.line,
        column: e.end.column
      } : e.endIndex ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
    return (r.line < t.line || r.line === t.line && r.column <= t.column) && (r = { line: t.line, column: t.column + 1 }), { start: t, end: r };
  }
  getProxyProcessor() {
    return {
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || t === "text") && e.markDirty()), true;
      },
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      }
    };
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let t = this.source;
      e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`);
    }
    return e;
  }
  markDirty() {
    if (this[en]) {
      this[en] = false;
      let e = this;
      for (; e = e.parent; )
        e[en] = false;
    }
  }
  get proxyOf() {
    return this;
  }
};
var Oa = tl;
tl.default = tl;
var rl = class extends Oa {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Os = rl;
rl.default = rl;
var yh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
var aE = function(s3) {
  if (0 <= s3 && s3 < yh.length)
    return yh[s3];
  throw new TypeError("Must be between 0 and 63: " + s3);
};
var oE = function(s3) {
  var e = 65, t = 90, r = 97, i = 122, n = 48, a = 57, o = 43, l = 47, u = 26, c = 52;
  return e <= s3 && s3 <= t ? s3 - e : r <= s3 && s3 <= i ? s3 - r + u : n <= s3 && s3 <= a ? s3 - n + c : s3 == o ? 62 : s3 == l ? 63 : -1;
};
var Gd = {
  encode: aE,
  decode: oE
};
var Vu = 5;
var Wd = 1 << Vu;
var Hd = Wd - 1;
var Kd = Wd;
function lE(s3) {
  return s3 < 0 ? (-s3 << 1) + 1 : (s3 << 1) + 0;
}
function uE(s3) {
  var e = (s3 & 1) === 1, t = s3 >> 1;
  return e ? -t : t;
}
var cE = function(e) {
  var t = "", r, i = lE(e);
  do
    r = i & Hd, i >>>= Vu, i > 0 && (r |= Kd), t += Gd.encode(r);
  while (i > 0);
  return t;
};
var hE = function(e, t, r) {
  var i = e.length, n = 0, a = 0, o, l;
  do {
    if (t >= i)
      throw new Error("Expected more digits in base 64 VLQ value.");
    if (l = Gd.decode(e.charCodeAt(t++)), l === -1)
      throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
    o = !!(l & Kd), l &= Hd, n = n + (l << a), a += Vu;
  } while (o);
  r.value = uE(n), r.rest = t;
};
var Yr = {
  encode: cE,
  decode: hE
};
var j = we(function(s3, e) {
  function t(b, S, k) {
    if (S in b)
      return b[S];
    if (arguments.length === 3)
      return k;
    throw new Error('"' + S + '" is a required argument.');
  }
  e.getArg = t;
  var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
  function n(b) {
    var S = b.match(r);
    return S ? {
      scheme: S[1],
      auth: S[2],
      host: S[3],
      port: S[4],
      path: S[5]
    } : null;
  }
  e.urlParse = n;
  function a(b) {
    var S = "";
    return b.scheme && (S += b.scheme + ":"), S += "//", b.auth && (S += b.auth + "@"), b.host && (S += b.host), b.port && (S += ":" + b.port), b.path && (S += b.path), S;
  }
  e.urlGenerate = a;
  var o = 32;
  function l(b) {
    var S = [];
    return function(k) {
      for (var _ = 0; _ < S.length; _++)
        if (S[_].input === k) {
          var Q = S[0];
          return S[0] = S[_], S[_] = Q, S[0].result;
        }
      var K = b(k);
      return S.unshift({
        input: k,
        result: K
      }), S.length > o && S.pop(), K;
    };
  }
  var u = l(function(S) {
    var k = S, _ = n(S);
    if (_) {
      if (!_.path)
        return S;
      k = _.path;
    }
    for (var Q = e.isAbsolute(k), K = [], ue = 0, oe = 0; ; )
      if (ue = oe, oe = k.indexOf("/", ue), oe === -1) {
        K.push(k.slice(ue));
        break;
      } else
        for (K.push(k.slice(ue, oe)); oe < k.length && k[oe] === "/"; )
          oe++;
    for (var N, R2 = 0, oe = K.length - 1; oe >= 0; oe--)
      N = K[oe], N === "." ? K.splice(oe, 1) : N === ".." ? R2++ : R2 > 0 && (N === "" ? (K.splice(oe + 1, R2), R2 = 0) : (K.splice(oe, 2), R2--));
    return k = K.join("/"), k === "" && (k = Q ? "/" : "."), _ ? (_.path = k, a(_)) : k;
  });
  e.normalize = u;
  function c(b, S) {
    b === "" && (b = "."), S === "" && (S = ".");
    var k = n(S), _ = n(b);
    if (_ && (b = _.path || "/"), k && !k.scheme)
      return _ && (k.scheme = _.scheme), a(k);
    if (k || S.match(i))
      return S;
    if (_ && !_.host && !_.path)
      return _.host = S, a(_);
    var Q = S.charAt(0) === "/" ? S : u(b.replace(/\/+$/, "") + "/" + S);
    return _ ? (_.path = Q, a(_)) : Q;
  }
  e.join = c, e.isAbsolute = function(b) {
    return b.charAt(0) === "/" || r.test(b);
  };
  function h(b, S) {
    b === "" && (b = "."), b = b.replace(/\/$/, "");
    for (var k = 0; S.indexOf(b + "/") !== 0; ) {
      var _ = b.lastIndexOf("/");
      if (_ < 0 || (b = b.slice(0, _), b.match(/^([^\/]+:\/)?\/*$/)))
        return S;
      ++k;
    }
    return Array(k + 1).join("../") + S.substr(b.length + 1);
  }
  e.relative = h;
  var p = function() {
    var b = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in b);
  }();
  function f(b) {
    return b;
  }
  function g(b) {
    return m(b) ? "$" + b : b;
  }
  e.toSetString = p ? f : g;
  function d(b) {
    return m(b) ? b.slice(1) : b;
  }
  e.fromSetString = p ? f : d;
  function m(b) {
    if (!b)
      return false;
    var S = b.length;
    if (S < 9 || b.charCodeAt(S - 1) !== 95 || b.charCodeAt(S - 2) !== 95 || b.charCodeAt(S - 3) !== 111 || b.charCodeAt(S - 4) !== 116 || b.charCodeAt(S - 5) !== 111 || b.charCodeAt(S - 6) !== 114 || b.charCodeAt(S - 7) !== 112 || b.charCodeAt(S - 8) !== 95 || b.charCodeAt(S - 9) !== 95)
      return false;
    for (var k = S - 10; k >= 0; k--)
      if (b.charCodeAt(k) !== 36)
        return false;
    return true;
  }
  function y(b, S, k) {
    var _ = v(b.source, S.source);
    return _ !== 0 || (_ = b.originalLine - S.originalLine, _ !== 0) || (_ = b.originalColumn - S.originalColumn, _ !== 0 || k) || (_ = b.generatedColumn - S.generatedColumn, _ !== 0) || (_ = b.generatedLine - S.generatedLine, _ !== 0) ? _ : v(b.name, S.name);
  }
  e.compareByOriginalPositions = y;
  function x(b, S, k) {
    var _;
    return _ = b.originalLine - S.originalLine, _ !== 0 || (_ = b.originalColumn - S.originalColumn, _ !== 0 || k) || (_ = b.generatedColumn - S.generatedColumn, _ !== 0) || (_ = b.generatedLine - S.generatedLine, _ !== 0) ? _ : v(b.name, S.name);
  }
  e.compareByOriginalPositionsNoSource = x;
  function E(b, S, k) {
    var _ = b.generatedLine - S.generatedLine;
    return _ !== 0 || (_ = b.generatedColumn - S.generatedColumn, _ !== 0 || k) || (_ = v(b.source, S.source), _ !== 0) || (_ = b.originalLine - S.originalLine, _ !== 0) || (_ = b.originalColumn - S.originalColumn, _ !== 0) ? _ : v(b.name, S.name);
  }
  e.compareByGeneratedPositionsDeflated = E;
  function C(b, S, k) {
    var _ = b.generatedColumn - S.generatedColumn;
    return _ !== 0 || k || (_ = v(b.source, S.source), _ !== 0) || (_ = b.originalLine - S.originalLine, _ !== 0) || (_ = b.originalColumn - S.originalColumn, _ !== 0) ? _ : v(b.name, S.name);
  }
  e.compareByGeneratedPositionsDeflatedNoLine = C;
  function v(b, S) {
    return b === S ? 0 : b === null ? 1 : S === null ? -1 : b > S ? 1 : -1;
  }
  function w(b, S) {
    var k = b.generatedLine - S.generatedLine;
    return k !== 0 || (k = b.generatedColumn - S.generatedColumn, k !== 0) || (k = v(b.source, S.source), k !== 0) || (k = b.originalLine - S.originalLine, k !== 0) || (k = b.originalColumn - S.originalColumn, k !== 0) ? k : v(b.name, S.name);
  }
  e.compareByGeneratedPositionsInflated = w;
  function T(b) {
    return JSON.parse(b.replace(/^\)]}'[^\n]*\n/, ""));
  }
  e.parseSourceMapInput = T;
  function P(b, S, k) {
    if (S = S || "", b && (b[b.length - 1] !== "/" && S[0] !== "/" && (b += "/"), S = b + S), k) {
      var _ = n(k);
      if (!_)
        throw new Error("sourceMapURL could not be parsed");
      if (_.path) {
        var Q = _.path.lastIndexOf("/");
        Q >= 0 && (_.path = _.path.substring(0, Q + 1));
      }
      S = c(a(_), S);
    }
    return u(S);
  }
  e.computeSourceURL = P;
});
var zu = Object.prototype.hasOwnProperty;
var Mr = typeof Map < "u";
function Zt() {
  this._array = [], this._set = Mr ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
Zt.fromArray = function(e, t) {
  for (var r = new Zt(), i = 0, n = e.length; i < n; i++)
    r.add(e[i], t);
  return r;
};
Zt.prototype.size = function() {
  return Mr ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
Zt.prototype.add = function(e, t) {
  var r = Mr ? e : j.toSetString(e), i = Mr ? this.has(e) : zu.call(this._set, r), n = this._array.length;
  (!i || t) && this._array.push(e), i || (Mr ? this._set.set(e, n) : this._set[r] = n);
};
Zt.prototype.has = function(e) {
  if (Mr)
    return this._set.has(e);
  var t = j.toSetString(e);
  return zu.call(this._set, t);
};
Zt.prototype.indexOf = function(e) {
  if (Mr) {
    var t = this._set.get(e);
    if (t >= 0)
      return t;
  } else {
    var r = j.toSetString(e);
    if (zu.call(this._set, r))
      return this._set[r];
  }
  throw new Error('"' + e + '" is not in the set.');
};
Zt.prototype.at = function(e) {
  if (e >= 0 && e < this._array.length)
    return this._array[e];
  throw new Error("No element indexed by " + e);
};
Zt.prototype.toArray = function() {
  return this._array.slice();
};
var pE = Zt;
var Yd = {
  ArraySet: pE
};
function fE(s3, e) {
  var t = s3.generatedLine, r = e.generatedLine, i = s3.generatedColumn, n = e.generatedColumn;
  return r > t || r == t && n >= i || j.compareByGeneratedPositionsInflated(s3, e) <= 0;
}
function La() {
  this._array = [], this._sorted = true, this._last = { generatedLine: -1, generatedColumn: 0 };
}
La.prototype.unsortedForEach = function(e, t) {
  this._array.forEach(e, t);
};
La.prototype.add = function(e) {
  fE(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = false, this._array.push(e));
};
La.prototype.toArray = function() {
  return this._sorted || (this._array.sort(j.compareByGeneratedPositionsInflated), this._sorted = true), this._array;
};
var dE = La;
var mE = {
  MappingList: dE
};
var jn = Yd.ArraySet;
var gE = mE.MappingList;
function vt(s3) {
  s3 || (s3 = {}), this._file = j.getArg(s3, "file", null), this._sourceRoot = j.getArg(s3, "sourceRoot", null), this._skipValidation = j.getArg(s3, "skipValidation", false), this._sources = new jn(), this._names = new jn(), this._mappings = new gE(), this._sourcesContents = null;
}
vt.prototype._version = 3;
vt.fromSourceMap = function(e) {
  var t = e.sourceRoot, r = new vt({
    file: e.file,
    sourceRoot: t
  });
  return e.eachMapping(function(i) {
    var n = {
      generated: {
        line: i.generatedLine,
        column: i.generatedColumn
      }
    };
    i.source != null && (n.source = i.source, t != null && (n.source = j.relative(t, n.source)), n.original = {
      line: i.originalLine,
      column: i.originalColumn
    }, i.name != null && (n.name = i.name)), r.addMapping(n);
  }), e.sources.forEach(function(i) {
    var n = i;
    t !== null && (n = j.relative(t, i)), r._sources.has(n) || r._sources.add(n);
    var a = e.sourceContentFor(i);
    a != null && r.setSourceContent(i, a);
  }), r;
};
vt.prototype.addMapping = function(e) {
  var t = j.getArg(e, "generated"), r = j.getArg(e, "original", null), i = j.getArg(e, "source", null), n = j.getArg(e, "name", null);
  this._skipValidation || this._validateMapping(t, r, i, n), i != null && (i = String(i), this._sources.has(i) || this._sources.add(i)), n != null && (n = String(n), this._names.has(n) || this._names.add(n)), this._mappings.add({
    generatedLine: t.line,
    generatedColumn: t.column,
    originalLine: r != null && r.line,
    originalColumn: r != null && r.column,
    source: i,
    name: n
  });
};
vt.prototype.setSourceContent = function(e, t) {
  var r = e;
  this._sourceRoot != null && (r = j.relative(this._sourceRoot, r)), t != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[j.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[j.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
};
vt.prototype.applySourceMap = function(e, t, r) {
  var i = t;
  if (t == null) {
    if (e.file == null)
      throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
    i = e.file;
  }
  var n = this._sourceRoot;
  n != null && (i = j.relative(n, i));
  var a = new jn(), o = new jn();
  this._mappings.unsortedForEach(function(l) {
    if (l.source === i && l.originalLine != null) {
      var u = e.originalPositionFor({
        line: l.originalLine,
        column: l.originalColumn
      });
      u.source != null && (l.source = u.source, r != null && (l.source = j.join(r, l.source)), n != null && (l.source = j.relative(n, l.source)), l.originalLine = u.line, l.originalColumn = u.column, u.name != null && (l.name = u.name));
    }
    var c = l.source;
    c != null && !a.has(c) && a.add(c);
    var h = l.name;
    h != null && !o.has(h) && o.add(h);
  }, this), this._sources = a, this._names = o, e.sources.forEach(function(l) {
    var u = e.sourceContentFor(l);
    u != null && (r != null && (l = j.join(r, l)), n != null && (l = j.relative(n, l)), this.setSourceContent(l, u));
  }, this);
};
vt.prototype._validateMapping = function(e, t, r, i) {
  if (t && typeof t.line != "number" && typeof t.column != "number")
    throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
  if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !t && !r && !i)) {
    if (e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)
      return;
    throw new Error("Invalid mapping: " + JSON.stringify({
      generated: e,
      source: r,
      original: t,
      name: i
    }));
  }
};
vt.prototype._serializeMappings = function() {
  for (var e = 0, t = 1, r = 0, i = 0, n = 0, a = 0, o = "", l, u, c, h, p = this._mappings.toArray(), f = 0, g = p.length; f < g; f++) {
    if (u = p[f], l = "", u.generatedLine !== t)
      for (e = 0; u.generatedLine !== t; )
        l += ";", t++;
    else if (f > 0) {
      if (!j.compareByGeneratedPositionsInflated(u, p[f - 1]))
        continue;
      l += ",";
    }
    l += Yr.encode(u.generatedColumn - e), e = u.generatedColumn, u.source != null && (h = this._sources.indexOf(u.source), l += Yr.encode(h - a), a = h, l += Yr.encode(u.originalLine - 1 - i), i = u.originalLine - 1, l += Yr.encode(u.originalColumn - r), r = u.originalColumn, u.name != null && (c = this._names.indexOf(u.name), l += Yr.encode(c - n), n = c)), o += l;
  }
  return o;
};
vt.prototype._generateSourcesContent = function(e, t) {
  return e.map(function(r) {
    if (!this._sourcesContents)
      return null;
    t != null && (r = j.relative(t, r));
    var i = j.toSetString(r);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, i) ? this._sourcesContents[i] : null;
  }, this);
};
vt.prototype.toJSON = function() {
  var e = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
};
vt.prototype.toString = function() {
  return JSON.stringify(this.toJSON());
};
var yE = vt;
var Jd = {
  SourceMapGenerator: yE
};
var Gu = we(function(s3, e) {
  e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
  function t(r, i, n, a, o, l) {
    var u = Math.floor((i - r) / 2) + r, c = o(n, a[u], true);
    return c === 0 ? u : c > 0 ? i - u > 1 ? t(u, i, n, a, o, l) : l == e.LEAST_UPPER_BOUND ? i < a.length ? i : -1 : u : u - r > 1 ? t(r, u, n, a, o, l) : l == e.LEAST_UPPER_BOUND ? u : r < 0 ? -1 : r;
  }
  e.search = function(i, n, a, o) {
    if (n.length === 0)
      return -1;
    var l = t(-1, n.length, i, n, a, o || e.GREATEST_LOWER_BOUND);
    if (l < 0)
      return -1;
    for (; l - 1 >= 0 && a(n[l], n[l - 1], true) === 0; )
      --l;
    return l;
  };
});
function vE(s3) {
  function e(i, n, a) {
    var o = i[n];
    i[n] = i[a], i[a] = o;
  }
  function t(i, n) {
    return Math.round(i + Math.random() * (n - i));
  }
  function r(i, n, a, o) {
    if (a < o) {
      var l = t(a, o), u = a - 1;
      e(i, l, o);
      for (var c = i[o], h = a; h < o; h++)
        n(i[h], c, false) <= 0 && (u += 1, e(i, u, h));
      e(i, u + 1, h);
      var p = u + 1;
      r(i, n, a, p - 1), r(i, n, p + 1, o);
    }
  }
  return r;
}
function bE(s3) {
  let e = vE.toString();
  return new Function(`return ${e}`)()(s3);
}
var vh = /* @__PURE__ */ new WeakMap();
var SE = function(s3, e, t = 0) {
  let r = vh.get(e);
  r === void 0 && (r = bE(e), vh.set(e, r)), r(s3, e, t, s3.length - 1);
};
var wE = {
  quickSort: SE
};
var ys = Yd.ArraySet;
var xi = wE.quickSort;
function ke(s3, e) {
  var t = s3;
  return typeof s3 == "string" && (t = j.parseSourceMapInput(s3)), t.sections != null ? new Pt(t, e) : new ze(t, e);
}
ke.fromSourceMap = function(s3, e) {
  return ze.fromSourceMap(s3, e);
};
ke.prototype._version = 3;
ke.prototype.__generatedMappings = null;
Object.defineProperty(ke.prototype, "_generatedMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
  }
});
ke.prototype.__originalMappings = null;
Object.defineProperty(ke.prototype, "_originalMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
  }
});
ke.prototype._charIsMappingSeparator = function(e, t) {
  var r = e.charAt(t);
  return r === ";" || r === ",";
};
ke.prototype._parseMappings = function(e, t) {
  throw new Error("Subclasses must implement _parseMappings");
};
ke.GENERATED_ORDER = 1;
ke.ORIGINAL_ORDER = 2;
ke.GREATEST_LOWER_BOUND = 1;
ke.LEAST_UPPER_BOUND = 2;
ke.prototype.eachMapping = function(e, t, r) {
  var i = t || null, n = r || ke.GENERATED_ORDER, a;
  switch (n) {
    case ke.GENERATED_ORDER:
      a = this._generatedMappings;
      break;
    case ke.ORIGINAL_ORDER:
      a = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  for (var o = this.sourceRoot, l = e.bind(i), u = this._names, c = this._sources, h = this._sourceMapURL, p = 0, f = a.length; p < f; p++) {
    var g = a[p], d = g.source === null ? null : c.at(g.source);
    d = j.computeSourceURL(o, d, h), l({
      source: d,
      generatedLine: g.generatedLine,
      generatedColumn: g.generatedColumn,
      originalLine: g.originalLine,
      originalColumn: g.originalColumn,
      name: g.name === null ? null : u.at(g.name)
    });
  }
};
ke.prototype.allGeneratedPositionsFor = function(e) {
  var t = j.getArg(e, "line"), r = {
    source: j.getArg(e, "source"),
    originalLine: t,
    originalColumn: j.getArg(e, "column", 0)
  };
  if (r.source = this._findSourceIndex(r.source), r.source < 0)
    return [];
  var i = [], n = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", j.compareByOriginalPositions, Gu.LEAST_UPPER_BOUND);
  if (n >= 0) {
    var a = this._originalMappings[n];
    if (e.column === void 0)
      for (var o = a.originalLine; a && a.originalLine === o; )
        i.push({
          line: j.getArg(a, "generatedLine", null),
          column: j.getArg(a, "generatedColumn", null),
          lastColumn: j.getArg(a, "lastGeneratedColumn", null)
        }), a = this._originalMappings[++n];
    else
      for (var l = a.originalColumn; a && a.originalLine === t && a.originalColumn == l; )
        i.push({
          line: j.getArg(a, "generatedLine", null),
          column: j.getArg(a, "generatedColumn", null),
          lastColumn: j.getArg(a, "lastGeneratedColumn", null)
        }), a = this._originalMappings[++n];
  }
  return i;
};
var EE = ke;
function ze(s3, e) {
  var t = s3;
  typeof s3 == "string" && (t = j.parseSourceMapInput(s3));
  var r = j.getArg(t, "version"), i = j.getArg(t, "sources"), n = j.getArg(t, "names", []), a = j.getArg(t, "sourceRoot", null), o = j.getArg(t, "sourcesContent", null), l = j.getArg(t, "mappings"), u = j.getArg(t, "file", null);
  if (r != this._version)
    throw new Error("Unsupported version: " + r);
  a && (a = j.normalize(a)), i = i.map(String).map(j.normalize).map(function(c) {
    return a && j.isAbsolute(a) && j.isAbsolute(c) ? j.relative(a, c) : c;
  }), this._names = ys.fromArray(n.map(String), true), this._sources = ys.fromArray(i, true), this._absoluteSources = this._sources.toArray().map(function(c) {
    return j.computeSourceURL(a, c, e);
  }), this.sourceRoot = a, this.sourcesContent = o, this._mappings = l, this._sourceMapURL = e, this.file = u;
}
ze.prototype = Object.create(ke.prototype);
ze.prototype.consumer = ke;
ze.prototype._findSourceIndex = function(s3) {
  var e = s3;
  if (this.sourceRoot != null && (e = j.relative(this.sourceRoot, e)), this._sources.has(e))
    return this._sources.indexOf(e);
  var t;
  for (t = 0; t < this._absoluteSources.length; ++t)
    if (this._absoluteSources[t] == s3)
      return t;
  return -1;
};
ze.fromSourceMap = function(e, t) {
  var r = Object.create(ze.prototype), i = r._names = ys.fromArray(e._names.toArray(), true), n = r._sources = ys.fromArray(e._sources.toArray(), true);
  r.sourceRoot = e._sourceRoot, r.sourcesContent = e._generateSourcesContent(r._sources.toArray(), r.sourceRoot), r.file = e._file, r._sourceMapURL = t, r._absoluteSources = r._sources.toArray().map(function(f) {
    return j.computeSourceURL(r.sourceRoot, f, t);
  });
  for (var a = e._mappings.toArray().slice(), o = r.__generatedMappings = [], l = r.__originalMappings = [], u = 0, c = a.length; u < c; u++) {
    var h = a[u], p = new Qd();
    p.generatedLine = h.generatedLine, p.generatedColumn = h.generatedColumn, h.source && (p.source = n.indexOf(h.source), p.originalLine = h.originalLine, p.originalColumn = h.originalColumn, h.name && (p.name = i.indexOf(h.name)), l.push(p)), o.push(p);
  }
  return xi(r.__originalMappings, j.compareByOriginalPositions), r;
};
ze.prototype._version = 3;
Object.defineProperty(ze.prototype, "sources", {
  get: function() {
    return this._absoluteSources.slice();
  }
});
function Qd() {
  this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
}
var fo = j.compareByGeneratedPositionsDeflatedNoLine;
function bh(s3, e) {
  let t = s3.length, r = s3.length - e;
  if (!(r <= 1))
    if (r == 2) {
      let i = s3[e], n = s3[e + 1];
      fo(i, n) > 0 && (s3[e] = n, s3[e + 1] = i);
    } else if (r < 20)
      for (let i = e; i < t; i++)
        for (let n = i; n > e; n--) {
          let a = s3[n - 1], o = s3[n];
          if (fo(a, o) <= 0)
            break;
          s3[n - 1] = o, s3[n] = a;
        }
    else
      xi(s3, fo, e);
}
ze.prototype._parseMappings = function(e, t) {
  var r = 1, i = 0, n = 0, a = 0, o = 0, l = 0, u = e.length, c = 0, h = {}, p = [], f = [], g, d, m, y;
  let x = 0;
  for (; c < u; )
    if (e.charAt(c) === ";")
      r++, c++, i = 0, bh(f, x), x = f.length;
    else if (e.charAt(c) === ",")
      c++;
    else {
      for (g = new Qd(), g.generatedLine = r, m = c; m < u && !this._charIsMappingSeparator(e, m); m++)
        ;
      for (e.slice(c, m), d = []; c < m; )
        Yr.decode(e, c, h), y = h.value, c = h.rest, d.push(y);
      if (d.length === 2)
        throw new Error("Found a source, but no line and column");
      if (d.length === 3)
        throw new Error("Found a source and line, but no column");
      if (g.generatedColumn = i + d[0], i = g.generatedColumn, d.length > 1 && (g.source = o + d[1], o += d[1], g.originalLine = n + d[2], n = g.originalLine, g.originalLine += 1, g.originalColumn = a + d[3], a = g.originalColumn, d.length > 4 && (g.name = l + d[4], l += d[4])), f.push(g), typeof g.originalLine == "number") {
        let C = g.source;
        for (; p.length <= C; )
          p.push(null);
        p[C] === null && (p[C] = []), p[C].push(g);
      }
    }
  bh(f, x), this.__generatedMappings = f;
  for (var E = 0; E < p.length; E++)
    p[E] != null && xi(p[E], j.compareByOriginalPositionsNoSource);
  this.__originalMappings = [].concat(...p);
};
ze.prototype._findMapping = function(e, t, r, i, n, a) {
  if (e[r] <= 0)
    throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
  if (e[i] < 0)
    throw new TypeError("Column must be greater than or equal to 0, got " + e[i]);
  return Gu.search(e, t, n, a);
};
ze.prototype.computeColumnSpans = function() {
  for (var e = 0; e < this._generatedMappings.length; ++e) {
    var t = this._generatedMappings[e];
    if (e + 1 < this._generatedMappings.length) {
      var r = this._generatedMappings[e + 1];
      if (t.generatedLine === r.generatedLine) {
        t.lastGeneratedColumn = r.generatedColumn - 1;
        continue;
      }
    }
    t.lastGeneratedColumn = 1 / 0;
  }
};
ze.prototype.originalPositionFor = function(e) {
  var t = {
    generatedLine: j.getArg(e, "line"),
    generatedColumn: j.getArg(e, "column")
  }, r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", j.compareByGeneratedPositionsDeflated, j.getArg(e, "bias", ke.GREATEST_LOWER_BOUND));
  if (r >= 0) {
    var i = this._generatedMappings[r];
    if (i.generatedLine === t.generatedLine) {
      var n = j.getArg(i, "source", null);
      n !== null && (n = this._sources.at(n), n = j.computeSourceURL(this.sourceRoot, n, this._sourceMapURL));
      var a = j.getArg(i, "name", null);
      return a !== null && (a = this._names.at(a)), {
        source: n,
        line: j.getArg(i, "originalLine", null),
        column: j.getArg(i, "originalColumn", null),
        name: a
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
ze.prototype.hasContentsOfAllSources = function() {
  return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
    return e == null;
  }) : false;
};
ze.prototype.sourceContentFor = function(e, t) {
  if (!this.sourcesContent)
    return null;
  var r = this._findSourceIndex(e);
  if (r >= 0)
    return this.sourcesContent[r];
  var i = e;
  this.sourceRoot != null && (i = j.relative(this.sourceRoot, i));
  var n;
  if (this.sourceRoot != null && (n = j.urlParse(this.sourceRoot))) {
    var a = i.replace(/^file:\/\//, "");
    if (n.scheme == "file" && this._sources.has(a))
      return this.sourcesContent[this._sources.indexOf(a)];
    if ((!n.path || n.path == "/") && this._sources.has("/" + i))
      return this.sourcesContent[this._sources.indexOf("/" + i)];
  }
  if (t)
    return null;
  throw new Error('"' + i + '" is not in the SourceMap.');
};
ze.prototype.generatedPositionFor = function(e) {
  var t = j.getArg(e, "source");
  if (t = this._findSourceIndex(t), t < 0)
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  var r = {
    source: t,
    originalLine: j.getArg(e, "line"),
    originalColumn: j.getArg(e, "column")
  }, i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", j.compareByOriginalPositions, j.getArg(e, "bias", ke.GREATEST_LOWER_BOUND));
  if (i >= 0) {
    var n = this._originalMappings[i];
    if (n.source === r.source)
      return {
        line: j.getArg(n, "generatedLine", null),
        column: j.getArg(n, "generatedColumn", null),
        lastColumn: j.getArg(n, "lastGeneratedColumn", null)
      };
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
var xE = ze;
function Pt(s3, e) {
  var t = s3;
  typeof s3 == "string" && (t = j.parseSourceMapInput(s3));
  var r = j.getArg(t, "version"), i = j.getArg(t, "sections");
  if (r != this._version)
    throw new Error("Unsupported version: " + r);
  this._sources = new ys(), this._names = new ys();
  var n = {
    line: -1,
    column: 0
  };
  this._sections = i.map(function(a) {
    if (a.url)
      throw new Error("Support for url field in sections not implemented.");
    var o = j.getArg(a, "offset"), l = j.getArg(o, "line"), u = j.getArg(o, "column");
    if (l < n.line || l === n.line && u < n.column)
      throw new Error("Section offsets must be ordered and non-overlapping.");
    return n = o, {
      generatedOffset: {
        generatedLine: l + 1,
        generatedColumn: u + 1
      },
      consumer: new ke(j.getArg(a, "map"), e)
    };
  });
}
Pt.prototype = Object.create(ke.prototype);
Pt.prototype.constructor = ke;
Pt.prototype._version = 3;
Object.defineProperty(Pt.prototype, "sources", {
  get: function() {
    for (var s3 = [], e = 0; e < this._sections.length; e++)
      for (var t = 0; t < this._sections[e].consumer.sources.length; t++)
        s3.push(this._sections[e].consumer.sources[t]);
    return s3;
  }
});
Pt.prototype.originalPositionFor = function(e) {
  var t = {
    generatedLine: j.getArg(e, "line"),
    generatedColumn: j.getArg(e, "column")
  }, r = Gu.search(t, this._sections, function(n, a) {
    var o = n.generatedLine - a.generatedOffset.generatedLine;
    return o || n.generatedColumn - a.generatedOffset.generatedColumn;
  }), i = this._sections[r];
  return i ? i.consumer.originalPositionFor({
    line: t.generatedLine - (i.generatedOffset.generatedLine - 1),
    column: t.generatedColumn - (i.generatedOffset.generatedLine === t.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
    bias: e.bias
  }) : {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
Pt.prototype.hasContentsOfAllSources = function() {
  return this._sections.every(function(e) {
    return e.consumer.hasContentsOfAllSources();
  });
};
Pt.prototype.sourceContentFor = function(e, t) {
  for (var r = 0; r < this._sections.length; r++) {
    var i = this._sections[r], n = i.consumer.sourceContentFor(e, true);
    if (n)
      return n;
  }
  if (t)
    return null;
  throw new Error('"' + e + '" is not in the SourceMap.');
};
Pt.prototype.generatedPositionFor = function(e) {
  for (var t = 0; t < this._sections.length; t++) {
    var r = this._sections[t];
    if (r.consumer._findSourceIndex(j.getArg(e, "source")) !== -1) {
      var i = r.consumer.generatedPositionFor(e);
      if (i) {
        var n = {
          line: i.line + (r.generatedOffset.generatedLine - 1),
          column: i.column + (r.generatedOffset.generatedLine === i.line ? r.generatedOffset.generatedColumn - 1 : 0)
        };
        return n;
      }
    }
  }
  return {
    line: null,
    column: null
  };
};
Pt.prototype._parseMappings = function(e, t) {
  this.__generatedMappings = [], this.__originalMappings = [];
  for (var r = 0; r < this._sections.length; r++)
    for (var i = this._sections[r], n = i.consumer._generatedMappings, a = 0; a < n.length; a++) {
      var o = n[a], l = i.consumer._sources.at(o.source);
      l = j.computeSourceURL(i.consumer.sourceRoot, l, this._sourceMapURL), this._sources.add(l), l = this._sources.indexOf(l);
      var u = null;
      o.name && (u = i.consumer._names.at(o.name), this._names.add(u), u = this._names.indexOf(u));
      var c = {
        source: l,
        generatedLine: o.generatedLine + (i.generatedOffset.generatedLine - 1),
        generatedColumn: o.generatedColumn + (i.generatedOffset.generatedLine === o.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
        originalLine: o.originalLine,
        originalColumn: o.originalColumn,
        name: u
      };
      this.__generatedMappings.push(c), typeof c.originalLine == "number" && this.__originalMappings.push(c);
    }
  xi(this.__generatedMappings, j.compareByGeneratedPositionsDeflated), xi(this.__originalMappings, j.compareByOriginalPositions);
};
var TE = Pt;
var PE = {
  SourceMapConsumer: EE,
  BasicSourceMapConsumer: xE,
  IndexedSourceMapConsumer: TE
};
var AE = Jd.SourceMapGenerator;
var CE = /(\r?\n)/;
var _E = 10;
var Ls = "$$$isSourceNode$$$";
function ft(s3, e, t, r, i) {
  this.children = [], this.sourceContents = {}, this.line = s3 == null ? null : s3, this.column = e == null ? null : e, this.source = t == null ? null : t, this.name = i == null ? null : i, this[Ls] = true, r != null && this.add(r);
}
ft.fromStringWithSourceMap = function(e, t, r) {
  var i = new ft(), n = e.split(CE), a = 0, o = function() {
    var p = g(), f = g() || "";
    return p + f;
    function g() {
      return a < n.length ? n[a++] : void 0;
    }
  }, l = 1, u = 0, c = null;
  return t.eachMapping(function(p) {
    if (c !== null)
      if (l < p.generatedLine)
        h(c, o()), l++, u = 0;
      else {
        var f = n[a] || "", g = f.substr(0, p.generatedColumn - u);
        n[a] = f.substr(p.generatedColumn - u), u = p.generatedColumn, h(c, g), c = p;
        return;
      }
    for (; l < p.generatedLine; )
      i.add(o()), l++;
    if (u < p.generatedColumn) {
      var f = n[a] || "";
      i.add(f.substr(0, p.generatedColumn)), n[a] = f.substr(p.generatedColumn), u = p.generatedColumn;
    }
    c = p;
  }, this), a < n.length && (c && h(c, o()), i.add(n.splice(a).join(""))), t.sources.forEach(function(p) {
    var f = t.sourceContentFor(p);
    f != null && (r != null && (p = j.join(r, p)), i.setSourceContent(p, f));
  }), i;
  function h(p, f) {
    if (p === null || p.source === void 0)
      i.add(f);
    else {
      var g = r ? j.join(r, p.source) : p.source;
      i.add(new ft(p.originalLine, p.originalColumn, g, f, p.name));
    }
  }
};
ft.prototype.add = function(e) {
  if (Array.isArray(e))
    e.forEach(function(t) {
      this.add(t);
    }, this);
  else if (e[Ls] || typeof e == "string")
    e && this.children.push(e);
  else
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
  return this;
};
ft.prototype.prepend = function(e) {
  if (Array.isArray(e))
    for (var t = e.length - 1; t >= 0; t--)
      this.prepend(e[t]);
  else if (e[Ls] || typeof e == "string")
    this.children.unshift(e);
  else
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
  return this;
};
ft.prototype.walk = function(e) {
  for (var t, r = 0, i = this.children.length; r < i; r++)
    t = this.children[r], t[Ls] ? t.walk(e) : t !== "" && e(t, {
      source: this.source,
      line: this.line,
      column: this.column,
      name: this.name
    });
};
ft.prototype.join = function(e) {
  var t, r, i = this.children.length;
  if (i > 0) {
    for (t = [], r = 0; r < i - 1; r++)
      t.push(this.children[r]), t.push(e);
    t.push(this.children[r]), this.children = t;
  }
  return this;
};
ft.prototype.replaceRight = function(e, t) {
  var r = this.children[this.children.length - 1];
  return r[Ls] ? r.replaceRight(e, t) : typeof r == "string" ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this;
};
ft.prototype.setSourceContent = function(e, t) {
  this.sourceContents[j.toSetString(e)] = t;
};
ft.prototype.walkSourceContents = function(e) {
  for (var t = 0, r = this.children.length; t < r; t++)
    this.children[t][Ls] && this.children[t].walkSourceContents(e);
  for (var i = Object.keys(this.sourceContents), t = 0, r = i.length; t < r; t++)
    e(j.fromSetString(i[t]), this.sourceContents[i[t]]);
};
ft.prototype.toString = function() {
  var e = "";
  return this.walk(function(t) {
    e += t;
  }), e;
};
ft.prototype.toStringWithSourceMap = function(e) {
  var t = {
    code: "",
    line: 1,
    column: 0
  }, r = new AE(e), i = false, n = null, a = null, o = null, l = null;
  return this.walk(function(u, c) {
    t.code += u, c.source !== null && c.line !== null && c.column !== null ? ((n !== c.source || a !== c.line || o !== c.column || l !== c.name) && r.addMapping({
      source: c.source,
      original: {
        line: c.line,
        column: c.column
      },
      generated: {
        line: t.line,
        column: t.column
      },
      name: c.name
    }), n = c.source, a = c.line, o = c.column, l = c.name, i = true) : i && (r.addMapping({
      generated: {
        line: t.line,
        column: t.column
      }
    }), n = null, i = false);
    for (var h = 0, p = u.length; h < p; h++)
      u.charCodeAt(h) === _E ? (t.line++, t.column = 0, h + 1 === p ? (n = null, i = false) : i && r.addMapping({
        source: c.source,
        original: {
          line: c.line,
          column: c.column
        },
        generated: {
          line: t.line,
          column: t.column
        },
        name: c.name
      })) : t.column++;
  }), this.walkSourceContents(function(u, c) {
    r.setSourceContent(u, c);
  }), { code: t.code, map: r };
};
var IE = ft;
var kE = {
  SourceNode: IE
};
var NE = Jd.SourceMapGenerator;
var OE = PE.SourceMapConsumer;
var LE = kE.SourceNode;
var Wu = {
  SourceMapGenerator: NE,
  SourceMapConsumer: OE,
  SourceNode: LE
};
var ME = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var DE = (s3, e) => () => {
  let t = "", r = e;
  for (; r--; )
    t += s3[Math.random() * s3.length | 0];
  return t;
};
var RE = (s3 = 21) => {
  let e = "", t = s3;
  for (; t--; )
    e += ME[Math.random() * 64 | 0];
  return e;
};
var FE = { nanoid: RE, customAlphabet: DE };
var { SourceMapConsumer: Sh, SourceMapGenerator: wh } = Wu;
var { existsSync: BE, readFileSync: $E } = aw;
var { dirname: mo, join: UE } = Uu;
function jE(s3) {
  return D ? D.from(s3, "base64").toString() : window.atob(s3);
}
var sl = class {
  constructor(e, t) {
    if (t.map === false)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let r = t.map ? t.map.prev : void 0, i = this.loadMap(t.from, r);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = mo(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Sh(this.text)), this.consumerCache;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : false;
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!t)
      return;
    let r = e.lastIndexOf(t.pop()), i = e.indexOf("*/", r);
    r > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, i)));
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, r = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, n = /^data:application\/json,/;
    if (i.test(e) || n.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || r.test(e))
      return jE(e.substr(RegExp.lastMatch.length));
    let a = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + a);
  }
  loadFile(e) {
    if (this.root = mo(e), BE(e))
      return this.mapFile = e, $E(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === false)
      return false;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let r = t(e);
        if (r) {
          let i = this.loadFile(r);
          if (!i)
            throw new Error("Unable to load previous source map: " + r.toString());
          return i;
        }
      } else {
        if (t instanceof Sh)
          return wh.fromSourceMap(t).toString();
        if (t instanceof wh)
          return t.toString();
        if (this.isMap(t))
          return JSON.stringify(t);
        throw new Error("Unsupported previous source map format: " + t.toString());
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let r = this.annotation;
        return e && (r = UE(mo(e), r)), this.loadFile(r);
      }
    }
  }
  isMap(e) {
    return typeof e != "object" ? false : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
};
var Xd = sl;
sl.default = sl;
var Zd = Di(f1);
var { SourceMapConsumer: qE, SourceMapGenerator: VE } = Wu;
var { fileURLToPath: Eh, pathToFileURL: tn } = Zd;
var { resolve: il, isAbsolute: nl } = Uu;
var { nanoid: zE } = FE;
var go = Symbol("fromOffsetCache");
var GE = Boolean(qE && VE);
var xh = Boolean(il && nl);
var qn = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, t.from && (!xh || /^\w+:\/\//.test(t.from) || nl(t.from) ? this.file = t.from : this.file = il(t.from)), xh && GE) {
      let r = new Xd(this.css, t);
      if (r.text) {
        this.map = r;
        let i = r.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + zE(6) + ">"), this.map && (this.map.file = this.from);
  }
  fromOffset(e) {
    let t, r;
    if (this[go])
      r = this[go];
    else {
      let n = this.css.split(`
`);
      r = new Array(n.length);
      let a = 0;
      for (let o = 0, l = n.length; o < l; o++)
        r[o] = a, a += n[o].length + 1;
      this[go] = r;
    }
    t = r[r.length - 1];
    let i = 0;
    if (e >= t)
      i = r.length - 1;
    else {
      let n = r.length - 2, a;
      for (; i < n; )
        if (a = i + (n - i >> 1), e < r[a])
          n = a - 1;
        else if (e >= r[a + 1])
          i = a + 1;
        else {
          i = a;
          break;
        }
    }
    return {
      line: i + 1,
      col: e - r[i] + 1
    };
  }
  error(e, t, r, i = {}) {
    let n, a, o;
    if (t && typeof t == "object") {
      let u = t, c = r;
      if (typeof t.offset == "number") {
        let h = this.fromOffset(u.offset);
        t = h.line, r = h.col;
      } else
        t = u.line, r = u.column;
      if (typeof c.offset == "number") {
        let h = this.fromOffset(c.offset);
        a = h.line, o = h.col;
      } else
        a = c.line, o = c.column;
    } else if (!r) {
      let u = this.fromOffset(t);
      t = u.line, r = u.col;
    }
    let l = this.origin(t, r, a, o);
    return l ? n = new Un(e, l.endLine === void 0 ? l.line : { line: l.line, column: l.column }, l.endLine === void 0 ? l.column : { line: l.endLine, column: l.endColumn }, l.source, l.file, i.plugin) : n = new Un(e, a === void 0 ? t : { line: t, column: r }, a === void 0 ? r : { line: a, column: o }, this.css, this.file, i.plugin), n.input = { line: t, column: r, endLine: a, endColumn: o, source: this.css }, this.file && (tn && (n.input.url = tn(this.file).toString()), n.input.file = this.file), n;
  }
  origin(e, t, r, i) {
    if (!this.map)
      return false;
    let n = this.map.consumer(), a = n.originalPositionFor({ line: e, column: t });
    if (!a.source)
      return false;
    let o;
    typeof r == "number" && (o = n.originalPositionFor({ line: r, column: i }));
    let l;
    nl(a.source) ? l = tn(a.source) : l = new URL(a.source, this.map.consumer().sourceRoot || tn(this.map.mapFile));
    let u = {
      url: l.toString(),
      line: a.line,
      column: a.column,
      endLine: o && o.line,
      endColumn: o && o.column
    };
    if (l.protocol === "file:")
      if (Eh)
        u.file = Eh(l);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let c = n.sourceContentFor(a.source);
    return c && (u.source = c), u;
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : il(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  get from() {
    return this.file || this.id;
  }
  toJSON() {
    let e = {};
    for (let t of ["hasBOM", "css", "file", "id"])
      this[t] != null && (e[t] = this[t]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
};
var Ma = qn;
qn.default = qn;
ni && ni.registerInput && ni.registerInput(qn);
var { SourceMapConsumer: em, SourceMapGenerator: gn } = Wu;
var { dirname: yn, resolve: tm, relative: rm, sep: sm } = Uu;
var { pathToFileURL: Th } = Zd;
var WE = Boolean(em && gn);
var HE = Boolean(yn && tm && rm && sm);
var KE = class {
  constructor(e, t, r, i) {
    this.stringify = e, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = i;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let t = e.source.input.map;
            this.previousMaps.includes(t) || this.previousMaps.push(t);
          }
        });
      else {
        let e = new Ma(this.css, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== true ? false : this.previous().length ? this.previous().some((t) => t.inline) : true;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : true;
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== false)
      if (this.root) {
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t);
      } else
        this.css && (this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let r = t.source.input.from;
          r && !e[r] && (e[r] = true, this.map.setSourceContent(this.toUrl(this.path(r)), t.source.input.css));
        }
      });
    else if (this.css) {
      let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(t, this.css);
    }
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let t = this.toUrl(this.path(e.file)), r = e.root || yn(e.file), i;
      this.mapOpts.sourcesContent === false ? (i = new em(e.text), i.sourcesContent && (i.sourcesContent = i.sourcesContent.map(() => null))) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(r)));
    }
  }
  isAnnotation() {
    return this.isInline() ? true : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : true;
  }
  toBase64(e) {
    return D ? D.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let t = `
`;
    this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = gn.fromSourceMap(e);
    } else
      this.map = new gn({ file: this.outputFile() }), this.map.addMapping({
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>",
        generated: { line: 1, column: 0 },
        original: { line: 1, column: 0 }
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  path(e) {
    if (e.indexOf("<") === 0 || /^\w+:\/\//.test(e) || this.mapOpts.absolute)
      return e;
    let t = this.opts.to ? yn(this.opts.to) : ".";
    return typeof this.mapOpts.annotation == "string" && (t = yn(tm(t, this.mapOpts.annotation))), e = rm(t, e), e;
  }
  toUrl(e) {
    return sm === "\\" && (e = e.replace(/\\/g, "/")), encodeURI(e).replace(/[#?]/g, encodeURIComponent);
  }
  sourcePath(e) {
    if (this.mapOpts.from)
      return this.toUrl(this.mapOpts.from);
    if (this.mapOpts.absolute) {
      if (Th)
        return Th(e.source.input.from).toString();
      throw new Error("`map.absolute` option is not available in this PostCSS build");
    } else
      return this.toUrl(this.path(e.source.input.from));
  }
  generateString() {
    this.css = "", this.map = new gn({ file: this.outputFile() });
    let e = 1, t = 1, r = "<no source>", i = {
      source: "",
      generated: { line: 0, column: 0 },
      original: { line: 0, column: 0 }
    }, n, a;
    this.stringify(this.root, (o, l, u) => {
      if (this.css += o, l && u !== "end" && (i.generated.line = e, i.generated.column = t - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = r, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), n = o.match(/\n/g), n ? (e += n.length, a = o.lastIndexOf(`
`), t = o.length - a) : t += o.length, l && u !== "start") {
        let c = l.parent || { raws: {} };
        (l.type !== "decl" || l !== c.last || c.raws.semicolon) && (l.source && l.source.end ? (i.source = this.sourcePath(l), i.original.line = l.source.end.line, i.original.column = l.source.end.column - 1, i.generated.line = e, i.generated.column = t - 2, this.map.addMapping(i)) : (i.source = r, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = t - 1, this.map.addMapping(i)));
      }
    });
  }
  generate() {
    if (this.clearAnnotation(), HE && WE && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (t) => {
        e += t;
      }), [e];
    }
  }
};
var im = KE;
var al = class extends Oa {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Ms = al;
al.default = al;
var { isClean: nm, my: am } = qu;
var om;
var Hu;
var Ku;
function lm(s3) {
  return s3.map((e) => (e.nodes && (e.nodes = lm(e.nodes)), delete e.source, e));
}
function um(s3) {
  if (s3[nm] = false, s3.proxyOf.nodes)
    for (let e of s3.proxyOf.nodes)
      um(e);
}
var Ft = class _Ft extends Oa {
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  each(e) {
    if (!this.proxyOf.nodes)
      return;
    let t = this.getIterator(), r, i;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (r = this.indexes[t], i = e(this.proxyOf.nodes[r], r), i !== false); )
      this.indexes[t] += 1;
    return delete this.indexes[t], i;
  }
  walk(e) {
    return this.each((t, r) => {
      let i;
      try {
        i = e(t, r);
      } catch (n) {
        throw t.addToError(n);
      }
      return i !== false && t.walk && (i = t.walk(e)), i;
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, i) => {
      if (r.type === "decl" && e.test(r.prop))
        return t(r, i);
    }) : this.walk((r, i) => {
      if (r.type === "decl" && r.prop === e)
        return t(r, i);
    }) : (t = e, this.walk((r, i) => {
      if (r.type === "decl")
        return t(r, i);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, i) => {
      if (r.type === "rule" && e.test(r.selector))
        return t(r, i);
    }) : this.walk((r, i) => {
      if (r.type === "rule" && r.selector === e)
        return t(r, i);
    }) : (t = e, this.walk((r, i) => {
      if (r.type === "rule")
        return t(r, i);
    }));
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, i) => {
      if (r.type === "atrule" && e.test(r.name))
        return t(r, i);
    }) : this.walk((r, i) => {
      if (r.type === "atrule" && r.name === e)
        return t(r, i);
    }) : (t = e, this.walk((r, i) => {
      if (r.type === "atrule")
        return t(r, i);
    }));
  }
  walkComments(e) {
    return this.walk((t, r) => {
      if (t.type === "comment")
        return e(t, r);
    });
  }
  append(...e) {
    for (let t of e) {
      let r = this.normalize(t, this.last);
      for (let i of r)
        this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let r = this.normalize(t, this.first, "prepend").reverse();
      for (let i of r)
        this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes)
        this.indexes[i] = this.indexes[i] + r.length;
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes)
        t.cleanRaws(e);
  }
  insertBefore(e, t) {
    e = this.index(e);
    let r = e === 0 ? "prepend" : false, i = this.normalize(t, this.proxyOf.nodes[e], r).reverse();
    for (let a of i)
      this.proxyOf.nodes.splice(e, 0, a);
    let n;
    for (let a in this.indexes)
      n = this.indexes[a], e <= n && (this.indexes[a] = n + i.length);
    return this.markDirty(), this;
  }
  insertAfter(e, t) {
    e = this.index(e);
    let r = this.normalize(t, this.proxyOf.nodes[e]).reverse();
    for (let n of r)
      this.proxyOf.nodes.splice(e + 1, 0, n);
    let i;
    for (let n in this.indexes)
      i = this.indexes[n], e < i && (this.indexes[n] = i + r.length);
    return this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let r in this.indexes)
      t = this.indexes[r], t >= e && (this.indexes[r] = t - 1);
    return this.markDirty(), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes)
      e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  replaceValues(e, t, r) {
    return r || (r = t, t = {}), this.walkDecls((i) => {
      t.props && !t.props.includes(i.prop) || t.fast && !i.value.includes(t.fast) || (i.value = i.value.replace(e, r));
    }), this.markDirty(), this;
  }
  every(e) {
    return this.nodes.every(e);
  }
  some(e) {
    return this.nodes.some(e);
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  get first() {
    if (!!this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (!!this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = lm(om(e).nodes);
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Os(e)];
    } else if (e.selector)
      e = [new Hu(e)];
    else if (e.name)
      e = [new Ku(e)];
    else if (e.text)
      e = [new Ms(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[am] || _Ft.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[nm] && um(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this, i));
  }
  getProxyProcessor() {
    return {
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "name" || t === "params" || t === "selector") && e.markDirty()), true;
      },
      get(e, t) {
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...r) => e[t](...r.map((i) => typeof i == "function" ? (n, a) => i(n.toProxy(), a) : i)) : t === "every" || t === "some" ? (r) => e[t]((i, ...n) => r(i.toProxy(), ...n)) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((r) => r.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      }
    };
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
};
Ft.registerParse = (s3) => {
  om = s3;
};
Ft.registerRule = (s3) => {
  Hu = s3;
};
Ft.registerAtRule = (s3) => {
  Ku = s3;
};
var rr = Ft;
Ft.default = Ft;
Ft.rebuild = (s3) => {
  s3.type === "atrule" ? Object.setPrototypeOf(s3, Ku.prototype) : s3.type === "rule" ? Object.setPrototypeOf(s3, Hu.prototype) : s3.type === "decl" ? Object.setPrototypeOf(s3, Os.prototype) : s3.type === "comment" && Object.setPrototypeOf(s3, Ms.prototype), s3[am] = true, s3.nodes && s3.nodes.forEach((e) => {
    Ft.rebuild(e);
  });
};
var cm;
var hm;
var Ti = class extends rr {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new cm(new hm(), this, e).stringify();
  }
};
Ti.registerLazyResult = (s3) => {
  cm = s3;
};
Ti.registerProcessor = (s3) => {
  hm = s3;
};
var Da = Ti;
Ti.default = Ti;
var Ph = {};
var pm = function(e) {
  Ph[e] || (Ph[e] = true, typeof console < "u" && console.warn && console.warn(e));
};
var ol = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let r = t.node.rangeBy(t);
      this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
    }
    for (let r in t)
      this[r] = t[r];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      plugin: this.plugin,
      index: this.index,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var fm = ol;
ol.default = ol;
var ll = class {
  constructor(e, t, r) {
    this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let r = new fm(e, t);
    return this.messages.push(r), r;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Vn = ll;
ll.default = ll;
var zn = class extends rr {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var Ra = zn;
zn.default = zn;
rr.registerAtRule(zn);
var dm;
var mm;
var Pi = class extends rr {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  removeChild(e, t) {
    let r = this.index(e);
    return !t && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e);
  }
  normalize(e, t, r) {
    let i = super.normalize(e);
    if (t) {
      if (r === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let n of i)
          n.raws.before = t.raws.before;
    }
    return i;
  }
  toResult(e = {}) {
    return new dm(new mm(), this, e).stringify();
  }
};
Pi.registerLazyResult = (s3) => {
  dm = s3;
};
Pi.registerProcessor = (s3) => {
  mm = s3;
};
var Ds = Pi;
Pi.default = Pi;
var Ai = {
  split(s3, e, t) {
    let r = [], i = "", n = false, a = 0, o = false, l = false;
    for (let u of s3)
      l ? l = false : u === "\\" ? l = true : o ? u === o && (o = false) : u === '"' || u === "'" ? o = u : u === "(" ? a += 1 : u === ")" ? a > 0 && (a -= 1) : a === 0 && e.includes(u) && (n = true), n ? (i !== "" && r.push(i.trim()), i = "", n = false) : i += u;
    return (t || i !== "") && r.push(i.trim()), r;
  },
  space(s3) {
    let e = [" ", `
`, "	"];
    return Ai.split(s3, e);
  },
  comma(s3) {
    return Ai.split(s3, [","], true);
  }
};
var gm = Ai;
Ai.default = Ai;
var Gn = class extends rr {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return gm.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, r = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(r);
  }
};
var Ci = Gn;
Gn.default = Gn;
rr.registerRule(Gn);
var YE = class {
  constructor(e) {
    this.input = e, this.root = new Ds(), this.current = this.root, this.spaces = "", this.semicolon = false, this.customProperty = false, this.createTokenizer(), this.root.source = { input: e, start: { offset: 0, line: 1, column: 1 } };
  }
  createTokenizer() {
    this.tokenizer = jd(this.input);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  comment(e) {
    let t = new Ms();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]);
    let r = e[1].slice(2, -2);
    if (/^\s*$/.test(r))
      t.text = "", t.raws.left = r, t.raws.right = "";
    else {
      let i = r.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = i[2], t.raws.left = i[1], t.raws.right = i[3];
    }
  }
  emptyRule(e) {
    let t = new Ci();
    this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
  }
  other(e) {
    let t = false, r = null, i = false, n = null, a = [], o = e[1].startsWith("--"), l = [], u = e;
    for (; u; ) {
      if (r = u[0], l.push(u), r === "(" || r === "[")
        n || (n = u), a.push(r === "(" ? ")" : "]");
      else if (o && i && r === "{")
        n || (n = u), a.push("}");
      else if (a.length === 0)
        if (r === ";")
          if (i) {
            this.decl(l, o);
            return;
          } else
            break;
        else if (r === "{") {
          this.rule(l);
          return;
        } else if (r === "}") {
          this.tokenizer.back(l.pop()), t = true;
          break;
        } else
          r === ":" && (i = true);
      else
        r === a[a.length - 1] && (a.pop(), a.length === 0 && (n = null));
      u = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = true), a.length > 0 && this.unclosedBracket(n), t && i) {
      for (; l.length && (u = l[l.length - 1][0], !(u !== "space" && u !== "comment")); )
        this.tokenizer.back(l.pop());
      this.decl(l, o);
    } else
      this.unknownWord(l);
  }
  rule(e) {
    e.pop();
    let t = new Ci();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  decl(e, t) {
    let r = new Os();
    this.init(r, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = true, e.pop()), r.source.end = this.getPosition(i[3] || i[2]); e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), r.raws.before += e.shift()[1];
    for (r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length; ) {
      let l = e[0][0];
      if (l === ":" || l === "space" || l === "comment")
        break;
      r.prop += e.shift()[1];
    }
    r.raws.between = "";
    let n;
    for (; e.length; )
      if (n = e.shift(), n[0] === ":") {
        r.raws.between += n[1];
        break;
      } else
        n[0] === "word" && /\w/.test(n[1]) && this.unknownWord([n]), r.raws.between += n[1];
    (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
    let a = this.spacesAndCommentsFromStart(e);
    this.precheckMissedSemicolon(e);
    for (let l = e.length - 1; l >= 0; l--) {
      if (n = e[l], n[1].toLowerCase() === "!important") {
        r.important = true;
        let u = this.stringFrom(e, l);
        u = this.spacesFromEnd(e) + u, u !== " !important" && (r.raws.important = u);
        break;
      } else if (n[1].toLowerCase() === "important") {
        let u = e.slice(0), c = "";
        for (let h = l; h > 0; h--) {
          let p = u[h][0];
          if (c.trim().indexOf("!") === 0 && p !== "space")
            break;
          c = u.pop()[1] + c;
        }
        c.trim().indexOf("!") === 0 && (r.important = true, r.raws.important = c, e = u);
      }
      if (n[0] !== "space" && n[0] !== "comment")
        break;
    }
    let o = e.some((l) => l[0] !== "space" && l[0] !== "comment");
    this.raw(r, "value", e), o ? r.raws.between += a : r.value = a + r.value, r.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  atrule(e) {
    let t = new Ra();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let r, i, n, a = false, o = false, l = [], u = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), r = e[0], r === "(" || r === "[" ? u.push(r === "(" ? ")" : "]") : r === "{" && u.length > 0 ? u.push("}") : r === u[u.length - 1] && u.pop(), u.length === 0)
        if (r === ";") {
          t.source.end = this.getPosition(e[2]), this.semicolon = true;
          break;
        } else if (r === "{") {
          o = true;
          break;
        } else if (r === "}") {
          if (l.length > 0) {
            for (n = l.length - 1, i = l[n]; i && i[0] === "space"; )
              i = l[--n];
            i && (t.source.end = this.getPosition(i[3] || i[2]));
          }
          this.end(e);
          break;
        } else
          l.push(e);
      else
        l.push(e);
      if (this.tokenizer.endOfFile()) {
        a = true;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(t, "params", l), a && (e = l[l.length - 1], t.source.end = this.getPosition(e[3] || e[2]), this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), o && (t.nodes = [], this.current = t);
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces;
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return {
      offset: e,
      line: t.line,
      column: t.col
    };
  }
  init(e, t) {
    this.current.push(e), e.source = {
      start: this.getPosition(t),
      input: this.input
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = false);
  }
  raw(e, t, r) {
    let i, n, a = r.length, o = "", l = true, u, c, h = /^([#.|])?(\w)+/i;
    for (let p = 0; p < a; p += 1) {
      if (i = r[p], n = i[0], n === "comment" && e.type === "rule") {
        c = r[p - 1], u = r[p + 1], c[0] !== "space" && u[0] !== "space" && h.test(c[1]) && h.test(u[1]) ? o += i[1] : l = false;
        continue;
      }
      n === "comment" || n === "space" && p === a - 1 ? l = false : o += i[1];
    }
    if (!l) {
      let p = r.reduce((f, g) => f + g[1], "");
      e.raws[t] = { value: o, raw: p };
    }
    e[t] = o;
  }
  spacesAndCommentsFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      r = e.pop()[1] + r;
    return r;
  }
  spacesAndCommentsFromStart(e) {
    let t, r = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      r += e.shift()[1];
    return r;
  }
  spacesFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      r = e.pop()[1] + r;
    return r;
  }
  stringFrom(e, t) {
    let r = "";
    for (let i = t; i < e.length; i++)
      r += e[i][1];
    return e.splice(t, e.length - t), r;
  }
  colon(e) {
    let t = 0, r, i, n;
    for (let [a, o] of e.entries()) {
      if (r = o, i = r[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!n)
          this.doubleColon(r);
        else {
          if (n[0] === "word" && n[1] === "progid")
            continue;
          return a;
        }
      n = r;
    }
    return false;
  }
  unclosedBracket(e) {
    throw this.input.error("Unclosed bracket", { offset: e[2] }, { offset: e[2] + 1 });
  }
  unknownWord(e) {
    throw this.input.error("Unknown word", { offset: e[0][2] }, { offset: e[0][2] + e[0][1].length });
  }
  unexpectedClose(e) {
    throw this.input.error("Unexpected }", { offset: e[2] }, { offset: e[2] + 1 });
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  doubleColon(e) {
    throw this.input.error("Double colon", { offset: e[2] }, { offset: e[2] + e[1].length });
  }
  unnamedAtrule(e, t) {
    throw this.input.error("At-rule without name", { offset: t[2] }, { offset: t[2] + t[1].length });
  }
  precheckMissedSemicolon() {
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === false)
      return;
    let r = 0, i;
    for (let n = t - 1; n >= 0 && (i = e[n], !(i[0] !== "space" && (r += 1, r === 2))); n--)
      ;
    throw this.input.error("Missed semicolon", i[0] === "word" ? i[3] + 1 : i[2]);
  }
};
var JE = YE;
function Wn(s3, e) {
  let t = new Ma(s3, e), r = new JE(t);
  try {
    r.parse();
  } catch (i) {
    throw i.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? i.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? i.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (i.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), i;
  }
  return r.root;
}
var Yu = Wn;
Wn.default = Wn;
rr.registerParse(Wn);
var { isClean: _t, my: QE } = qu;
var XE = {
  document: "Document",
  root: "Root",
  atrule: "AtRule",
  rule: "Rule",
  decl: "Declaration",
  comment: "Comment"
};
var ZE = {
  postcssPlugin: true,
  prepare: true,
  Once: true,
  Document: true,
  Root: true,
  Declaration: true,
  Rule: true,
  AtRule: true,
  Comment: true,
  DeclarationExit: true,
  RuleExit: true,
  AtRuleExit: true,
  CommentExit: true,
  RootExit: true,
  DocumentExit: true,
  OnceExit: true
};
var ex = {
  postcssPlugin: true,
  prepare: true,
  Once: true
};
var vs = 0;
function Gs(s3) {
  return typeof s3 == "object" && typeof s3.then == "function";
}
function ym(s3) {
  let e = false, t = XE[s3.type];
  return s3.type === "decl" ? e = s3.prop.toLowerCase() : s3.type === "atrule" && (e = s3.name.toLowerCase()), e && s3.append ? [
    t,
    t + "-" + e,
    vs,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : s3.append ? [t, vs, t + "Exit"] : [t, t + "Exit"];
}
function Ah(s3) {
  let e;
  return s3.type === "document" ? e = ["Document", vs, "DocumentExit"] : s3.type === "root" ? e = ["Root", vs, "RootExit"] : e = ym(s3), {
    node: s3,
    events: e,
    eventIndex: 0,
    visitors: [],
    visitorIndex: 0,
    iterator: 0
  };
}
function ul(s3) {
  return s3[_t] = false, s3.nodes && s3.nodes.forEach((e) => ul(e)), s3;
}
var cl = {};
var dr = class _dr {
  constructor(e, t, r) {
    this.stringified = false, this.processed = false;
    let i;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      i = ul(t);
    else if (t instanceof _dr || t instanceof Vn)
      i = ul(t.root), t.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = false), r.map.prev = t.map);
    else {
      let n = Yu;
      r.syntax && (n = r.syntax.parse), r.parser && (n = r.parser), n.parse && (n = n.parse);
      try {
        i = n(t, r);
      } catch (a) {
        this.processed = true, this.error = a;
      }
      i && !i[QE] && rr.rebuild(i);
    }
    this.result = new Vn(e, i, r), this.helpers = { ...cl, result: this.result, postcss: cl }, this.plugins = this.processor.plugins.map((n) => typeof n == "object" && n.prepare ? { ...n, ...n.prepare(this.result) } : n);
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.stringify().css;
  }
  get content() {
    return this.stringify().content;
  }
  get map() {
    return this.stringify().map;
  }
  get root() {
    return this.sync().root;
  }
  get messages() {
    return this.sync().messages;
  }
  warnings() {
    return this.sync().warnings();
  }
  toString() {
    return this.css;
  }
  then(e, t) {
    return "from" in this.opts || pm("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."), this.async().then(e, t);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    if (this.processed = true, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (Gs(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[_t]; )
        e[_t] = true, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let t of e.nodes)
            this.visitSync(this.listeners.OnceExit, t);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = true, this.sync();
    let e = this.result.opts, t = Na;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let i = new im(t, this.result.root, this.result.opts).generate();
    return this.result.css = i[0], this.result.map = i[1], this.result;
  }
  walkSync(e) {
    e[_t] = true;
    let t = ym(e);
    for (let r of t)
      if (r === vs)
        e.nodes && e.each((i) => {
          i[_t] || this.walkSync(i);
        });
      else {
        let i = this.listeners[r];
        if (i && this.visitSync(i, e.toProxy()))
          return;
      }
  }
  visitSync(e, t) {
    for (let [r, i] of e) {
      this.result.lastPlugin = r;
      let n;
      try {
        n = i(t, this.helpers);
      } catch (a) {
        throw this.handleError(a, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return true;
      if (Gs(n))
        throw this.getAsyncError();
    }
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let t = this.result.root.nodes.map((r) => e.Once(r, this.helpers));
          return Gs(t[0]) ? Promise.all(t) : t;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (t) {
      throw this.handleError(t);
    }
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, t) {
    let r = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = r.postcssPlugin, e.setMessage();
      else if (r.postcssVersion && {}.NODE_ENV !== "production") {
        let i = r.postcssPlugin, n = r.postcssVersion, a = this.result.processor.version, o = n.split("."), l = a.split(".");
        (o[0] !== l[0] || parseInt(o[1]) > parseInt(l[1])) && console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + a + ", but " + i + " uses " + n + ". Perhaps this is the source of the error below.");
      }
    } catch (i) {
      console && console.error && console.error(i);
    }
    return e;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], r = this.runOnRoot(t);
      if (Gs(r))
        try {
          await r;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[_t]; ) {
        e[_t] = true;
        let t = [Ah(e)];
        for (; t.length > 0; ) {
          let r = this.visitTick(t);
          if (Gs(r))
            try {
              await r;
            } catch (i) {
              let n = t[t.length - 1].node;
              throw this.handleError(i, n);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, r] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let i = e.nodes.map((n) => r(n, this.helpers));
              await Promise.all(i);
            } else
              await r(e, this.helpers);
          } catch (i) {
            throw this.handleError(i);
          }
        }
    }
    return this.processed = true, this.stringify();
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, r, i) => {
      this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([t, i]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let r in t) {
          if (!ZE[r] && /^[A-Z]/.test(r))
            throw new Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
          if (!ex[r])
            if (typeof t[r] == "object")
              for (let i in t[r])
                i === "*" ? e(t, r, t[r][i]) : e(t, r + "-" + i.toLowerCase(), t[r][i]);
            else
              typeof t[r] == "function" && e(t, r, t[r]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: r, visitors: i } = t;
    if (r.type !== "root" && r.type !== "document" && !r.parent) {
      e.pop();
      return;
    }
    if (i.length > 0 && t.visitorIndex < i.length) {
      let [a, o] = i[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = a;
      try {
        return o(r.toProxy(), this.helpers);
      } catch (l) {
        throw this.handleError(l, r);
      }
    }
    if (t.iterator !== 0) {
      let a = t.iterator, o;
      for (; o = r.nodes[r.indexes[a]]; )
        if (r.indexes[a] += 1, !o[_t]) {
          o[_t] = true, e.push(Ah(o));
          return;
        }
      t.iterator = 0, delete r.indexes[a];
    }
    let n = t.events;
    for (; t.eventIndex < n.length; ) {
      let a = n[t.eventIndex];
      if (t.eventIndex += 1, a === vs) {
        r.nodes && r.nodes.length && (r[_t] = true, t.iterator = r.getIterator());
        return;
      } else if (this.listeners[a]) {
        t.visitors = this.listeners[a];
        return;
      }
    }
    e.pop();
  }
};
dr.registerPostcss = (s3) => {
  cl = s3;
};
var vm = dr;
dr.default = dr;
Ds.registerLazyResult(dr);
Da.registerLazyResult(dr);
var hl = class {
  constructor(e, t, r) {
    t = t.toString(), this.stringified = false, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
    let i, n = Na;
    this.result = new Vn(this._processor, i, this._opts), this.result.css = t;
    let a = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return a.root;
      }
    });
    let o = new im(n, i, this._opts, t);
    if (o.isMap()) {
      let [l, u] = o.generate();
      l && (this.result.css = l), u && (this.result.map = u);
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.result.css;
  }
  get content() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, t = Yu;
    try {
      e = t(this._css, this._opts);
    } catch (r) {
      this.error = r;
    }
    return this._root = e, e;
  }
  get messages() {
    return [];
  }
  warnings() {
    return [];
  }
  toString() {
    return this._css;
  }
  then(e, t) {
    return "from" in this._opts || pm("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."), this.async().then(e, t);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
};
var tx = hl;
hl.default = hl;
var _i = class {
  constructor(e = []) {
    this.version = "8.4.4", this.plugins = this.normalize(e);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
  process(e, t = {}) {
    return this.plugins.length === 0 && typeof t.parser > "u" && typeof t.stringifier > "u" && typeof t.syntax > "u" ? new tx(this, e, t) : new vm(this, e, t);
  }
  normalize(e) {
    let t = [];
    for (let r of e)
      if (r.postcss === true ? r = r() : r.postcss && (r = r.postcss), typeof r == "object" && Array.isArray(r.plugins))
        t = t.concat(r.plugins);
      else if (typeof r == "object" && r.postcssPlugin)
        t.push(r);
      else if (typeof r == "function")
        t.push(r);
      else
        throw typeof r == "object" && (r.parse || r.stringify) ? new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.") : new Error(r + " is not a PostCSS plugin");
    return t;
  }
};
var Ju = _i;
_i.default = _i;
Ds.registerProcessor(_i);
Da.registerProcessor(_i);
function Ii(s3, e) {
  if (Array.isArray(s3))
    return s3.map((i) => Ii(i));
  let { inputs: t, ...r } = s3;
  if (t) {
    e = [];
    for (let i of t) {
      let n = { ...i, __proto__: Ma.prototype };
      n.map && (n.map = {
        ...n.map,
        __proto__: Xd.prototype
      }), e.push(n);
    }
  }
  if (r.nodes && (r.nodes = s3.nodes.map((i) => Ii(i, e))), r.source) {
    let { inputId: i, ...n } = r.source;
    r.source = n, i != null && (r.source.input = e[i]);
  }
  if (r.type === "root")
    return new Ds(r);
  if (r.type === "decl")
    return new Os(r);
  if (r.type === "rule")
    return new Ci(r);
  if (r.type === "comment")
    return new Ms(r);
  if (r.type === "atrule")
    return new Ra(r);
  throw new Error("Unknown node type: " + s3.type);
}
var rx = Ii;
Ii.default = Ii;
function Ae(...s3) {
  return s3.length === 1 && Array.isArray(s3[0]) && (s3 = s3[0]), new Ju(s3);
}
Ae.plugin = function(e, t) {
  console && console.warn && console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`);
  function r(...n) {
    let a = t(...n);
    return a.postcssPlugin = e, a.postcssVersion = new Ju().version, a;
  }
  let i;
  return Object.defineProperty(r, "postcss", {
    get() {
      return i || (i = r()), i;
    }
  }), r.process = function(n, a, o) {
    return Ae([r(o)]).process(n, a);
  }, r;
};
Ae.stringify = Na;
Ae.parse = Yu;
Ae.fromJSON = rx;
Ae.list = gm;
Ae.comment = (s3) => new Ms(s3);
Ae.atRule = (s3) => new Ra(s3);
Ae.decl = (s3) => new Os(s3);
Ae.rule = (s3) => new Ci(s3);
Ae.root = (s3) => new Ds(s3);
Ae.document = (s3) => new Da(s3);
Ae.CssSyntaxError = Un;
Ae.Declaration = Os;
Ae.Container = rr;
Ae.Processor = Ju;
Ae.Document = Da;
Ae.Comment = Ms;
Ae.Warning = fm;
Ae.AtRule = Ra;
Ae.Result = Vn;
Ae.Input = Ma;
Ae.Rule = Ci;
Ae.Root = Ds;
Ae.Node = Oa;
vm.registerPostcss(Ae);
var sx = Ae;
Ae.default = Ae;
var bm = () => ({
  postcssPlugin: "vue-sfc-trim",
  Once(s3) {
    s3.walk(({ type: e, raws: t }) => {
      (e === "rule" || e === "atrule") && (t.before && (t.before = `
`), "after" in t && t.after && (t.after = `
`));
    });
  }
});
bm.postcss = true;
var Sm = we(function(s3, e) {
  e.__esModule = true, e.default = i;
  function t(n) {
    for (var a = n.toLowerCase(), o = "", l = false, u = 0; u < 6 && a[u] !== void 0; u++) {
      var c = a.charCodeAt(u), h = c >= 97 && c <= 102 || c >= 48 && c <= 57;
      if (l = c === 32, !h)
        break;
      o += a[u];
    }
    if (o.length !== 0) {
      var p = parseInt(o, 16), f = p >= 55296 && p <= 57343;
      return f || p === 0 || p > 1114111 ? ["�", o.length + (l ? 1 : 0)] : [String.fromCodePoint(p), o.length + (l ? 1 : 0)];
    }
  }
  var r = /\\/;
  function i(n) {
    var a = r.test(n);
    if (!a)
      return n;
    for (var o = "", l = 0; l < n.length; l++) {
      if (n[l] === "\\") {
        var u = t(n.slice(l + 1, l + 7));
        if (u !== void 0) {
          o += u[0], l += u[1];
          continue;
        }
        if (n[l + 1] === "\\") {
          o += "\\", l++;
          continue;
        }
        n.length === l + 1 && (o += n[l]);
        continue;
      }
      o += n[l];
    }
    return o;
  }
  s3.exports = e.default;
});
var ix = we(function(s3, e) {
  e.__esModule = true, e.default = t;
  function t(r) {
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    for (; n.length > 0; ) {
      var o = n.shift();
      if (!r[o])
        return;
      r = r[o];
    }
    return r;
  }
  s3.exports = e.default;
});
var nx = we(function(s3, e) {
  e.__esModule = true, e.default = t;
  function t(r) {
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    for (; n.length > 0; ) {
      var o = n.shift();
      r[o] || (r[o] = {}), r = r[o];
    }
  }
  s3.exports = e.default;
});
var ax = we(function(s3, e) {
  e.__esModule = true, e.default = t;
  function t(r) {
    for (var i = "", n = r.indexOf("/*"), a = 0; n >= 0; ) {
      i = i + r.slice(a, n);
      var o = r.indexOf("*/", n + 2);
      if (o < 0)
        return i;
      a = o + 2, n = r.indexOf("/*", a);
    }
    return i = i + r.slice(a), i;
  }
  s3.exports = e.default;
});
var Ce = we(function(s3, e) {
  e.__esModule = true, e.stripComments = e.ensureObject = e.getProp = e.unesc = void 0;
  var t = a(Sm);
  e.unesc = t.default;
  var r = a(ix);
  e.getProp = r.default;
  var i = a(nx);
  e.ensureObject = i.default;
  var n = a(ax);
  e.stripComments = n.default;
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
});
var gr = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  function t(a, o) {
    for (var l = 0; l < o.length; l++) {
      var u = o[l];
      u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(a, u.key, u);
    }
  }
  function r(a, o, l) {
    return o && t(a.prototype, o), l && t(a, l), a;
  }
  var i = function a(o, l) {
    if (typeof o != "object" || o === null)
      return o;
    var u = new o.constructor();
    for (var c in o)
      if (!!o.hasOwnProperty(c)) {
        var h = o[c], p = typeof h;
        c === "parent" && p === "object" ? l && (u[c] = l) : h instanceof Array ? u[c] = h.map(function(f) {
          return a(f, u);
        }) : u[c] = a(h, u);
      }
    return u;
  }, n = function() {
    function a(l) {
      l === void 0 && (l = {}), Object.assign(this, l), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
    }
    var o = a.prototype;
    return o.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, o.replaceWith = function() {
      if (this.parent) {
        for (var u in arguments)
          this.parent.insertBefore(this, arguments[u]);
        this.remove();
      }
      return this;
    }, o.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, o.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, o.clone = function(u) {
      u === void 0 && (u = {});
      var c = i(this);
      for (var h in u)
        c[h] = u[h];
      return c;
    }, o.appendToPropertyAndEscape = function(u, c, h) {
      this.raws || (this.raws = {});
      var p = this[u], f = this.raws[u];
      this[u] = p + c, f || h !== c ? this.raws[u] = (f || p) + h : delete this.raws[u];
    }, o.setPropertyAndEscape = function(u, c, h) {
      this.raws || (this.raws = {}), this[u] = c, this.raws[u] = h;
    }, o.setPropertyWithoutEscape = function(u, c) {
      this[u] = c, this.raws && delete this.raws[u];
    }, o.isAtPosition = function(u, c) {
      if (this.source && this.source.start && this.source.end)
        return !(this.source.start.line > u || this.source.end.line < u || this.source.start.line === u && this.source.start.column > c || this.source.end.line === u && this.source.end.column < c);
    }, o.stringifyProperty = function(u) {
      return this.raws && this.raws[u] || this[u];
    }, o.valueToString = function() {
      return String(this.stringifyProperty("value"));
    }, o.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
    }, r(a, [{
      key: "rawSpaceBefore",
      get: function() {
        var u = this.raws && this.raws.spaces && this.raws.spaces.before;
        return u === void 0 && (u = this.spaces && this.spaces.before), u || "";
      },
      set: function(u) {
        (0, Ce.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = u;
      }
    }, {
      key: "rawSpaceAfter",
      get: function() {
        var u = this.raws && this.raws.spaces && this.raws.spaces.after;
        return u === void 0 && (u = this.spaces.after), u || "";
      },
      set: function(u) {
        (0, Ce.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = u;
      }
    }]), a;
  }();
  e.default = n, s3.exports = e.default;
});
var he = we(function(s3, e) {
  e.__esModule = true, e.UNIVERSAL = e.ATTRIBUTE = e.CLASS = e.COMBINATOR = e.COMMENT = e.ID = e.NESTING = e.PSEUDO = e.ROOT = e.SELECTOR = e.STRING = e.TAG = void 0;
  var t = "tag";
  e.TAG = t;
  var r = "string";
  e.STRING = r;
  var i = "selector";
  e.SELECTOR = i;
  var n = "root";
  e.ROOT = n;
  var a = "pseudo";
  e.PSEUDO = a;
  var o = "nesting";
  e.NESTING = o;
  var l = "id";
  e.ID = l;
  var u = "comment";
  e.COMMENT = u;
  var c = "combinator";
  e.COMBINATOR = c;
  var h = "class";
  e.CLASS = h;
  var p = "attribute";
  e.ATTRIBUTE = p;
  var f = "universal";
  e.UNIVERSAL = f;
});
var Qu = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = a(gr), r = n(he);
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var d = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return d;
    }, d;
  }
  function n(d) {
    if (d && d.__esModule)
      return d;
    if (d === null || typeof d != "object" && typeof d != "function")
      return { default: d };
    var m = i();
    if (m && m.has(d))
      return m.get(d);
    var y = {}, x = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in d)
      if (Object.prototype.hasOwnProperty.call(d, E)) {
        var C = x ? Object.getOwnPropertyDescriptor(d, E) : null;
        C && (C.get || C.set) ? Object.defineProperty(y, E, C) : y[E] = d[E];
      }
    return y.default = d, m && m.set(d, y), y;
  }
  function a(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function o(d, m) {
    var y;
    if (typeof Symbol > "u" || d[Symbol.iterator] == null) {
      if (Array.isArray(d) || (y = l(d)) || m && d && typeof d.length == "number") {
        y && (d = y);
        var x = 0;
        return function() {
          return x >= d.length ? { done: true } : { done: false, value: d[x++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    return y = d[Symbol.iterator](), y.next.bind(y);
  }
  function l(d, m) {
    if (!!d) {
      if (typeof d == "string")
        return u(d, m);
      var y = Object.prototype.toString.call(d).slice(8, -1);
      if (y === "Object" && d.constructor && (y = d.constructor.name), y === "Map" || y === "Set")
        return Array.from(d);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
        return u(d, m);
    }
  }
  function u(d, m) {
    (m == null || m > d.length) && (m = d.length);
    for (var y = 0, x = new Array(m); y < m; y++)
      x[y] = d[y];
    return x;
  }
  function c(d, m) {
    for (var y = 0; y < m.length; y++) {
      var x = m[y];
      x.enumerable = x.enumerable || false, x.configurable = true, "value" in x && (x.writable = true), Object.defineProperty(d, x.key, x);
    }
  }
  function h(d, m, y) {
    return m && c(d.prototype, m), y && c(d, y), d;
  }
  function p(d, m) {
    d.prototype = Object.create(m.prototype), d.prototype.constructor = d, f(d, m);
  }
  function f(d, m) {
    return f = Object.setPrototypeOf || function(x, E) {
      return x.__proto__ = E, x;
    }, f(d, m);
  }
  var g = function(d) {
    p(m, d);
    function m(x) {
      var E;
      return E = d.call(this, x) || this, E.nodes || (E.nodes = []), E;
    }
    var y = m.prototype;
    return y.append = function(E) {
      return E.parent = this, this.nodes.push(E), this;
    }, y.prepend = function(E) {
      return E.parent = this, this.nodes.unshift(E), this;
    }, y.at = function(E) {
      return this.nodes[E];
    }, y.index = function(E) {
      return typeof E == "number" ? E : this.nodes.indexOf(E);
    }, y.removeChild = function(E) {
      E = this.index(E), this.at(E).parent = void 0, this.nodes.splice(E, 1);
      var C;
      for (var v in this.indexes)
        C = this.indexes[v], C >= E && (this.indexes[v] = C - 1);
      return this;
    }, y.removeAll = function() {
      for (var E = o(this.nodes), C; !(C = E()).done; ) {
        var v = C.value;
        v.parent = void 0;
      }
      return this.nodes = [], this;
    }, y.empty = function() {
      return this.removeAll();
    }, y.insertAfter = function(E, C) {
      C.parent = this;
      var v = this.index(E);
      this.nodes.splice(v + 1, 0, C), C.parent = this;
      var w;
      for (var T in this.indexes)
        w = this.indexes[T], v <= w && (this.indexes[T] = w + 1);
      return this;
    }, y.insertBefore = function(E, C) {
      C.parent = this;
      var v = this.index(E);
      this.nodes.splice(v, 0, C), C.parent = this;
      var w;
      for (var T in this.indexes)
        w = this.indexes[T], w <= v && (this.indexes[T] = w + 1);
      return this;
    }, y._findChildAtPosition = function(E, C) {
      var v = void 0;
      return this.each(function(w) {
        if (w.atPosition) {
          var T = w.atPosition(E, C);
          if (T)
            return v = T, false;
        } else if (w.isAtPosition(E, C))
          return v = w, false;
      }), v;
    }, y.atPosition = function(E, C) {
      if (this.isAtPosition(E, C))
        return this._findChildAtPosition(E, C) || this;
    }, y._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, y.each = function(E) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var C = this.lastEach;
      if (this.indexes[C] = 0, !!this.length) {
        for (var v, w; this.indexes[C] < this.length && (v = this.indexes[C], w = E(this.at(v), v), w !== false); )
          this.indexes[C] += 1;
        if (delete this.indexes[C], w === false)
          return false;
      }
    }, y.walk = function(E) {
      return this.each(function(C, v) {
        var w = E(C, v);
        if (w !== false && C.length && (w = C.walk(E)), w === false)
          return false;
      });
    }, y.walkAttributes = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.ATTRIBUTE)
          return E.call(C, v);
      });
    }, y.walkClasses = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.CLASS)
          return E.call(C, v);
      });
    }, y.walkCombinators = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.COMBINATOR)
          return E.call(C, v);
      });
    }, y.walkComments = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.COMMENT)
          return E.call(C, v);
      });
    }, y.walkIds = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.ID)
          return E.call(C, v);
      });
    }, y.walkNesting = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.NESTING)
          return E.call(C, v);
      });
    }, y.walkPseudos = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.PSEUDO)
          return E.call(C, v);
      });
    }, y.walkTags = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.TAG)
          return E.call(C, v);
      });
    }, y.walkUniversals = function(E) {
      var C = this;
      return this.walk(function(v) {
        if (v.type === r.UNIVERSAL)
          return E.call(C, v);
      });
    }, y.split = function(E) {
      var C = this, v = [];
      return this.reduce(function(w, T, P) {
        var b = E.call(C, T);
        return v.push(T), b ? (w.push(v), v = []) : P === C.length - 1 && w.push(v), w;
      }, []);
    }, y.map = function(E) {
      return this.nodes.map(E);
    }, y.reduce = function(E, C) {
      return this.nodes.reduce(E, C);
    }, y.every = function(E) {
      return this.nodes.every(E);
    }, y.some = function(E) {
      return this.nodes.some(E);
    }, y.filter = function(E) {
      return this.nodes.filter(E);
    }, y.sort = function(E) {
      return this.nodes.sort(E);
    }, y.toString = function() {
      return this.map(String).join("");
    }, h(m, [{
      key: "first",
      get: function() {
        return this.at(0);
      }
    }, {
      key: "last",
      get: function() {
        return this.at(this.length - 1);
      }
    }, {
      key: "length",
      get: function() {
        return this.nodes.length;
      }
    }]), m;
  }(t.default);
  e.default = g, s3.exports = e.default;
});
var wm = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(Qu);
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u, c) {
    for (var h = 0; h < c.length; h++) {
      var p = c[h];
      p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(u, p.key, p);
    }
  }
  function n(u, c, h) {
    return c && i(u.prototype, c), h && i(u, h), u;
  }
  function a(u, c) {
    u.prototype = Object.create(c.prototype), u.prototype.constructor = u, o(u, c);
  }
  function o(u, c) {
    return o = Object.setPrototypeOf || function(p, f) {
      return p.__proto__ = f, p;
    }, o(u, c);
  }
  var l = function(u) {
    a(c, u);
    function c(p) {
      var f;
      return f = u.call(this, p) || this, f.type = he.ROOT, f;
    }
    var h = c.prototype;
    return h.toString = function() {
      var f = this.reduce(function(g, d) {
        return g.push(String(d)), g;
      }, []).join(",");
      return this.trailingComma ? f + "," : f;
    }, h.error = function(f, g) {
      return this._error ? this._error(f, g) : new Error(f);
    }, n(c, [{
      key: "errorGenerator",
      set: function(f) {
        this._error = f;
      }
    }]), c;
  }(t.default);
  e.default = l, s3.exports = e.default;
});
var Em = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(Qu);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(u) {
      var c;
      return c = o.call(this, u) || this, c.type = he.SELECTOR, c;
    }
    return l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var ox = {};
var lx = ox.hasOwnProperty;
var ux = function(e, t) {
  if (!e)
    return t;
  var r = {};
  for (var i in t)
    r[i] = lx.call(e, i) ? e[i] : t[i];
  return r;
};
var cx = /[ -,\.\/:-@\[-\^`\{-~]/;
var hx = /[ -,\.\/:-@\[\]\^`\{-~]/;
var px = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
var Xu = function s2(e, t) {
  t = ux(t, s2.options), t.quotes != "single" && t.quotes != "double" && (t.quotes = "single");
  for (var r = t.quotes == "double" ? '"' : "'", i = t.isIdentifier, n = e.charAt(0), a = "", o = 0, l = e.length; o < l; ) {
    var u = e.charAt(o++), c = u.charCodeAt(), h = void 0;
    if (c < 32 || c > 126) {
      if (c >= 55296 && c <= 56319 && o < l) {
        var p = e.charCodeAt(o++);
        (p & 64512) == 56320 ? c = ((c & 1023) << 10) + (p & 1023) + 65536 : o--;
      }
      h = "\\" + c.toString(16).toUpperCase() + " ";
    } else
      t.escapeEverything ? cx.test(u) ? h = "\\" + u : h = "\\" + c.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(u) ? h = "\\" + c.toString(16).toUpperCase() + " " : u == "\\" || !i && (u == '"' && r == u || u == "'" && r == u) || i && hx.test(u) ? h = "\\" + u : h = u;
    a += h;
  }
  return i && (/^-[-\d]/.test(a) ? a = "\\-" + a.slice(1) : /\d/.test(n) && (a = "\\3" + n + " " + a.slice(1))), a = a.replace(px, function(f, g, d) {
    return g && g.length % 2 ? f : (g || "") + d;
  }), !i && t.wrap ? r + a + r : a;
};
Xu.options = {
  escapeEverything: false,
  isIdentifier: false,
  quotes: "single",
  wrap: false
};
Xu.version = "3.0.0";
var Zu = Xu;
var xm = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = i(Zu), r = i(gr);
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function n(c, h) {
    for (var p = 0; p < h.length; p++) {
      var f = h[p];
      f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(c, f.key, f);
    }
  }
  function a(c, h, p) {
    return h && n(c.prototype, h), p && n(c, p), c;
  }
  function o(c, h) {
    c.prototype = Object.create(h.prototype), c.prototype.constructor = c, l(c, h);
  }
  function l(c, h) {
    return l = Object.setPrototypeOf || function(f, g) {
      return f.__proto__ = g, f;
    }, l(c, h);
  }
  var u = function(c) {
    o(h, c);
    function h(f) {
      var g;
      return g = c.call(this, f) || this, g.type = he.CLASS, g._constructed = true, g;
    }
    var p = h.prototype;
    return p.valueToString = function() {
      return "." + c.prototype.valueToString.call(this);
    }, a(h, [{
      key: "value",
      get: function() {
        return this._value;
      },
      set: function(g) {
        if (this._constructed) {
          var d = (0, t.default)(g, {
            isIdentifier: true
          });
          d !== g ? ((0, Ce.ensureObject)(this, "raws"), this.raws.value = d) : this.raws && delete this.raws.value;
        }
        this._value = g;
      }
    }]), h;
  }(r.default);
  e.default = u, s3.exports = e.default;
});
var Tm = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(gr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(u) {
      var c;
      return c = o.call(this, u) || this, c.type = he.COMMENT, c;
    }
    return l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var Pm = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(gr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(c) {
      var h;
      return h = o.call(this, c) || this, h.type = he.ID, h;
    }
    var u = l.prototype;
    return u.valueToString = function() {
      return "#" + o.prototype.valueToString.call(this);
    }, l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var ec = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = i(Zu), r = i(gr);
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function n(c, h) {
    for (var p = 0; p < h.length; p++) {
      var f = h[p];
      f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(c, f.key, f);
    }
  }
  function a(c, h, p) {
    return h && n(c.prototype, h), p && n(c, p), c;
  }
  function o(c, h) {
    c.prototype = Object.create(h.prototype), c.prototype.constructor = c, l(c, h);
  }
  function l(c, h) {
    return l = Object.setPrototypeOf || function(f, g) {
      return f.__proto__ = g, f;
    }, l(c, h);
  }
  var u = function(c) {
    o(h, c);
    function h() {
      return c.apply(this, arguments) || this;
    }
    var p = h.prototype;
    return p.qualifiedName = function(g) {
      return this.namespace ? this.namespaceString + "|" + g : g;
    }, p.valueToString = function() {
      return this.qualifiedName(c.prototype.valueToString.call(this));
    }, a(h, [{
      key: "namespace",
      get: function() {
        return this._namespace;
      },
      set: function(g) {
        if (g === true || g === "*" || g === "&") {
          this._namespace = g, this.raws && delete this.raws.namespace;
          return;
        }
        var d = (0, t.default)(g, {
          isIdentifier: true
        });
        this._namespace = g, d !== g ? ((0, Ce.ensureObject)(this, "raws"), this.raws.namespace = d) : this.raws && delete this.raws.namespace;
      }
    }, {
      key: "ns",
      get: function() {
        return this._namespace;
      },
      set: function(g) {
        this.namespace = g;
      }
    }, {
      key: "namespaceString",
      get: function() {
        if (this.namespace) {
          var g = this.stringifyProperty("namespace");
          return g === true ? "" : g;
        } else
          return "";
      }
    }]), h;
  }(r.default);
  e.default = u, s3.exports = e.default;
});
var Am = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(ec);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(u) {
      var c;
      return c = o.call(this, u) || this, c.type = he.TAG, c;
    }
    return l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var Cm = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(gr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(u) {
      var c;
      return c = o.call(this, u) || this, c.type = he.STRING, c;
    }
    return l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var _m = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(Qu);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(c) {
      var h;
      return h = o.call(this, c) || this, h.type = he.PSEUDO, h;
    }
    var u = l.prototype;
    return u.toString = function() {
      var h = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.rawSpaceBefore, this.stringifyProperty("value"), h, this.rawSpaceAfter].join("");
    }, l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var Ws = ow.deprecate;
var Im = we(function(s3, e) {
  e.__esModule = true, e.unescapeValue = d, e.default = void 0;
  var t = a(Zu), r = a(Sm), i = a(ec), n;
  function a(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function o(C, v) {
    for (var w = 0; w < v.length; w++) {
      var T = v[w];
      T.enumerable = T.enumerable || false, T.configurable = true, "value" in T && (T.writable = true), Object.defineProperty(C, T.key, T);
    }
  }
  function l(C, v, w) {
    return v && o(C.prototype, v), w && o(C, w), C;
  }
  function u(C, v) {
    C.prototype = Object.create(v.prototype), C.prototype.constructor = C, c(C, v);
  }
  function c(C, v) {
    return c = Object.setPrototypeOf || function(T, P) {
      return T.__proto__ = P, T;
    }, c(C, v);
  }
  var h = /^('|")([^]*)\1$/, p = Ws(function() {
  }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), f = Ws(function() {
  }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), g = Ws(function() {
  }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
  function d(C) {
    var v = false, w = null, T = C, P = T.match(h);
    return P && (w = P[1], T = P[2]), T = (0, r.default)(T), T !== C && (v = true), {
      deprecatedUsage: v,
      unescaped: T,
      quoteMark: w
    };
  }
  function m(C) {
    if (C.quoteMark !== void 0 || C.value === void 0)
      return C;
    g();
    var v = d(C.value), w = v.quoteMark, T = v.unescaped;
    return C.raws || (C.raws = {}), C.raws.value === void 0 && (C.raws.value = C.value), C.value = T, C.quoteMark = w, C;
  }
  var y = function(C) {
    u(v, C);
    function v(T) {
      var P;
      return T === void 0 && (T = {}), P = C.call(this, m(T)) || this, P.type = he.ATTRIBUTE, P.raws = P.raws || {}, Object.defineProperty(P.raws, "unquoted", {
        get: Ws(function() {
          return P.value;
        }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
        set: Ws(function() {
          return P.value;
        }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
      }), P._constructed = true, P;
    }
    var w = v.prototype;
    return w.getQuotedValue = function(P) {
      P === void 0 && (P = {});
      var b = this._determineQuoteMark(P), S = x[b], k = (0, t.default)(this._value, S);
      return k;
    }, w._determineQuoteMark = function(P) {
      return P.smart ? this.smartQuoteMark(P) : this.preferredQuoteMark(P);
    }, w.setValue = function(P, b) {
      b === void 0 && (b = {}), this._value = P, this._quoteMark = this._determineQuoteMark(b), this._syncRawValue();
    }, w.smartQuoteMark = function(P) {
      var b = this.value, S = b.replace(/[^']/g, "").length, k = b.replace(/[^"]/g, "").length;
      if (S + k === 0) {
        var _ = (0, t.default)(b, {
          isIdentifier: true
        });
        if (_ === b)
          return v.NO_QUOTE;
        var Q = this.preferredQuoteMark(P);
        if (Q === v.NO_QUOTE) {
          var K = this.quoteMark || P.quoteMark || v.DOUBLE_QUOTE, ue = x[K], oe = (0, t.default)(b, ue);
          if (oe.length < _.length)
            return K;
        }
        return Q;
      } else
        return k === S ? this.preferredQuoteMark(P) : k < S ? v.DOUBLE_QUOTE : v.SINGLE_QUOTE;
    }, w.preferredQuoteMark = function(P) {
      var b = P.preferCurrentQuoteMark ? this.quoteMark : P.quoteMark;
      return b === void 0 && (b = P.preferCurrentQuoteMark ? P.quoteMark : this.quoteMark), b === void 0 && (b = v.DOUBLE_QUOTE), b;
    }, w._syncRawValue = function() {
      var P = (0, t.default)(this._value, x[this.quoteMark]);
      P === this._value ? this.raws && delete this.raws.value : this.raws.value = P;
    }, w._handleEscapes = function(P, b) {
      if (this._constructed) {
        var S = (0, t.default)(b, {
          isIdentifier: true
        });
        S !== b ? this.raws[P] = S : delete this.raws[P];
      }
    }, w._spacesFor = function(P) {
      var b = {
        before: "",
        after: ""
      }, S = this.spaces[P] || {}, k = this.raws.spaces && this.raws.spaces[P] || {};
      return Object.assign(b, S, k);
    }, w._stringFor = function(P, b, S) {
      b === void 0 && (b = P), S === void 0 && (S = E);
      var k = this._spacesFor(b);
      return S(this.stringifyProperty(P), k);
    }, w.offsetOf = function(P) {
      var b = 1, S = this._spacesFor("attribute");
      if (b += S.before.length, P === "namespace" || P === "ns")
        return this.namespace ? b : -1;
      if (P === "attributeNS" || (b += this.namespaceString.length, this.namespace && (b += 1), P === "attribute"))
        return b;
      b += this.stringifyProperty("attribute").length, b += S.after.length;
      var k = this._spacesFor("operator");
      b += k.before.length;
      var _ = this.stringifyProperty("operator");
      if (P === "operator")
        return _ ? b : -1;
      b += _.length, b += k.after.length;
      var Q = this._spacesFor("value");
      b += Q.before.length;
      var K = this.stringifyProperty("value");
      if (P === "value")
        return K ? b : -1;
      b += K.length, b += Q.after.length;
      var ue = this._spacesFor("insensitive");
      return b += ue.before.length, P === "insensitive" && this.insensitive ? b : -1;
    }, w.toString = function() {
      var P = this, b = [this.rawSpaceBefore, "["];
      return b.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (b.push(this._stringFor("operator")), b.push(this._stringFor("value")), b.push(this._stringFor("insensitiveFlag", "insensitive", function(S, k) {
        return S.length > 0 && !P.quoted && k.before.length === 0 && !(P.spaces.value && P.spaces.value.after) && (k.before = " "), E(S, k);
      }))), b.push("]"), b.push(this.rawSpaceAfter), b.join("");
    }, l(v, [{
      key: "quoted",
      get: function() {
        var P = this.quoteMark;
        return P === "'" || P === '"';
      },
      set: function(P) {
        f();
      }
    }, {
      key: "quoteMark",
      get: function() {
        return this._quoteMark;
      },
      set: function(P) {
        if (!this._constructed) {
          this._quoteMark = P;
          return;
        }
        this._quoteMark !== P && (this._quoteMark = P, this._syncRawValue());
      }
    }, {
      key: "qualifiedAttribute",
      get: function() {
        return this.qualifiedName(this.raws.attribute || this.attribute);
      }
    }, {
      key: "insensitiveFlag",
      get: function() {
        return this.insensitive ? "i" : "";
      }
    }, {
      key: "value",
      get: function() {
        return this._value;
      },
      set: function(P) {
        if (this._constructed) {
          var b = d(P), S = b.deprecatedUsage, k = b.unescaped, _ = b.quoteMark;
          if (S && p(), k === this._value && _ === this._quoteMark)
            return;
          this._value = k, this._quoteMark = _, this._syncRawValue();
        } else
          this._value = P;
      }
    }, {
      key: "attribute",
      get: function() {
        return this._attribute;
      },
      set: function(P) {
        this._handleEscapes("attribute", P), this._attribute = P;
      }
    }]), v;
  }(i.default);
  e.default = y, y.NO_QUOTE = null, y.SINGLE_QUOTE = "'", y.DOUBLE_QUOTE = '"';
  var x = (n = {
    "'": {
      quotes: "single",
      wrap: true
    },
    '"': {
      quotes: "double",
      wrap: true
    }
  }, n[null] = {
    isIdentifier: true
  }, n);
  function E(C, v) {
    return "" + v.before + C + v.after;
  }
});
var km = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(ec);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(u) {
      var c;
      return c = o.call(this, u) || this, c.type = he.UNIVERSAL, c.value = "*", c;
    }
    return l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var Nm = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(gr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(u) {
      var c;
      return c = o.call(this, u) || this, c.type = he.COMBINATOR, c;
    }
    return l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var Om = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(gr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, n(o, l);
  }
  function n(o, l) {
    return n = Object.setPrototypeOf || function(c, h) {
      return c.__proto__ = h, c;
    }, n(o, l);
  }
  var a = function(o) {
    i(l, o);
    function l(u) {
      var c;
      return c = o.call(this, u) || this, c.type = he.NESTING, c.value = "&", c;
    }
    return l;
  }(t.default);
  e.default = a, s3.exports = e.default;
});
var fx = we(function(s3, e) {
  e.__esModule = true, e.default = t;
  function t(r) {
    return r.sort(function(i, n) {
      return i - n;
    });
  }
  s3.exports = e.default;
});
var Lm = we(function(s3, e) {
  e.__esModule = true, e.combinator = e.word = e.comment = e.str = e.tab = e.newline = e.feed = e.cr = e.backslash = e.bang = e.slash = e.doubleQuote = e.singleQuote = e.space = e.greaterThan = e.pipe = e.equals = e.plus = e.caret = e.tilde = e.dollar = e.closeSquare = e.openSquare = e.closeParenthesis = e.openParenthesis = e.semicolon = e.colon = e.comma = e.at = e.asterisk = e.ampersand = void 0;
  var t = 38;
  e.ampersand = t;
  var r = 42;
  e.asterisk = r;
  var i = 64;
  e.at = i;
  var n = 44;
  e.comma = n;
  var a = 58;
  e.colon = a;
  var o = 59;
  e.semicolon = o;
  var l = 40;
  e.openParenthesis = l;
  var u = 41;
  e.closeParenthesis = u;
  var c = 91;
  e.openSquare = c;
  var h = 93;
  e.closeSquare = h;
  var p = 36;
  e.dollar = p;
  var f = 126;
  e.tilde = f;
  var g = 94;
  e.caret = g;
  var d = 43;
  e.plus = d;
  var m = 61;
  e.equals = m;
  var y = 124;
  e.pipe = y;
  var x = 62;
  e.greaterThan = x;
  var E = 32;
  e.space = E;
  var C = 39;
  e.singleQuote = C;
  var v = 34;
  e.doubleQuote = v;
  var w = 47;
  e.slash = w;
  var T = 33;
  e.bang = T;
  var P = 92;
  e.backslash = P;
  var b = 13;
  e.cr = b;
  var S = 12;
  e.feed = S;
  var k = 10;
  e.newline = k;
  var _ = 9;
  e.tab = _;
  var Q = C;
  e.str = Q;
  var K = -1;
  e.comment = K;
  var ue = -2;
  e.word = ue;
  var oe = -3;
  e.combinator = oe;
});
var dx = we(function(s3, e) {
  e.__esModule = true, e.default = d, e.FIELDS = void 0;
  var t = a(Lm), r, i;
  function n() {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap();
    return n = function() {
      return m;
    }, m;
  }
  function a(m) {
    if (m && m.__esModule)
      return m;
    if (m === null || typeof m != "object" && typeof m != "function")
      return { default: m };
    var y = n();
    if (y && y.has(m))
      return y.get(m);
    var x = {}, E = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in m)
      if (Object.prototype.hasOwnProperty.call(m, C)) {
        var v = E ? Object.getOwnPropertyDescriptor(m, C) : null;
        v && (v.get || v.set) ? Object.defineProperty(x, C, v) : x[C] = m[C];
      }
    return x.default = m, y && y.set(m, x), x;
  }
  for (var o = (r = {}, r[t.tab] = true, r[t.newline] = true, r[t.cr] = true, r[t.feed] = true, r), l = (i = {}, i[t.space] = true, i[t.tab] = true, i[t.newline] = true, i[t.cr] = true, i[t.feed] = true, i[t.ampersand] = true, i[t.asterisk] = true, i[t.bang] = true, i[t.comma] = true, i[t.colon] = true, i[t.semicolon] = true, i[t.openParenthesis] = true, i[t.closeParenthesis] = true, i[t.openSquare] = true, i[t.closeSquare] = true, i[t.singleQuote] = true, i[t.doubleQuote] = true, i[t.plus] = true, i[t.pipe] = true, i[t.tilde] = true, i[t.greaterThan] = true, i[t.equals] = true, i[t.dollar] = true, i[t.caret] = true, i[t.slash] = true, i), u = {}, c = "0123456789abcdefABCDEF", h = 0; h < c.length; h++)
    u[c.charCodeAt(h)] = true;
  function p(m, y) {
    var x = y, E;
    do {
      if (E = m.charCodeAt(x), l[E])
        return x - 1;
      E === t.backslash ? x = f(m, x) + 1 : x++;
    } while (x < m.length);
    return x - 1;
  }
  function f(m, y) {
    var x = y, E = m.charCodeAt(x + 1);
    if (!o[E])
      if (u[E]) {
        var C = 0;
        do
          x++, C++, E = m.charCodeAt(x + 1);
        while (u[E] && C < 6);
        C < 6 && E === t.space && x++;
      } else
        x++;
    return x;
  }
  var g = {
    TYPE: 0,
    START_LINE: 1,
    START_COL: 2,
    END_LINE: 3,
    END_COL: 4,
    START_POS: 5,
    END_POS: 6
  };
  e.FIELDS = g;
  function d(m) {
    var y = [], x = m.css.valueOf(), E = x, C = E.length, v = -1, w = 1, T = 0, P = 0, b, S, k, _, Q, K, ue, oe, N, R2, q, $, L;
    function F(O, B) {
      if (m.safe)
        x += B, N = x.length - 1;
      else
        throw m.error("Unclosed " + O, w, T - v, T);
    }
    for (; T < C; ) {
      switch (b = x.charCodeAt(T), b === t.newline && (v = T, w += 1), b) {
        case t.space:
        case t.tab:
        case t.newline:
        case t.cr:
        case t.feed:
          N = T;
          do
            N += 1, b = x.charCodeAt(N), b === t.newline && (v = N, w += 1);
          while (b === t.space || b === t.newline || b === t.tab || b === t.cr || b === t.feed);
          L = t.space, _ = w, k = N - v - 1, P = N;
          break;
        case t.plus:
        case t.greaterThan:
        case t.tilde:
        case t.pipe:
          N = T;
          do
            N += 1, b = x.charCodeAt(N);
          while (b === t.plus || b === t.greaterThan || b === t.tilde || b === t.pipe);
          L = t.combinator, _ = w, k = T - v, P = N;
          break;
        case t.asterisk:
        case t.ampersand:
        case t.bang:
        case t.comma:
        case t.equals:
        case t.dollar:
        case t.caret:
        case t.openSquare:
        case t.closeSquare:
        case t.colon:
        case t.semicolon:
        case t.openParenthesis:
        case t.closeParenthesis:
          N = T, L = b, _ = w, k = T - v, P = N + 1;
          break;
        case t.singleQuote:
        case t.doubleQuote:
          $ = b === t.singleQuote ? "'" : '"', N = T;
          do
            for (Q = false, N = x.indexOf($, N + 1), N === -1 && F("quote", $), K = N; x.charCodeAt(K - 1) === t.backslash; )
              K -= 1, Q = !Q;
          while (Q);
          L = t.str, _ = w, k = T - v, P = N + 1;
          break;
        default:
          b === t.slash && x.charCodeAt(T + 1) === t.asterisk ? (N = x.indexOf("*/", T + 2) + 1, N === 0 && F("comment", "*/"), S = x.slice(T, N + 1), oe = S.split(`
`), ue = oe.length - 1, ue > 0 ? (R2 = w + ue, q = N - oe[ue].length) : (R2 = w, q = v), L = t.comment, w = R2, _ = R2, k = N - q) : b === t.slash ? (N = T, L = b, _ = w, k = T - v, P = N + 1) : (N = p(x, T), L = t.word, _ = w, k = N - v), P = N + 1;
          break;
      }
      y.push([
        L,
        w,
        T - v,
        _,
        k,
        T,
        P
      ]), q && (v = q, q = null), T = P;
    }
    return y;
  }
});
var mx = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = w(wm), r = w(Em), i = w(xm), n = w(Tm), a = w(Pm), o = w(Am), l = w(Cm), u = w(_m), c = v(Im), h = w(km), p = w(Nm), f = w(Om), g = w(fx), d = v(dx), m = v(Lm), y = v(he), x, E;
  function C() {
    if (typeof WeakMap != "function")
      return null;
    var $ = /* @__PURE__ */ new WeakMap();
    return C = function() {
      return $;
    }, $;
  }
  function v($) {
    if ($ && $.__esModule)
      return $;
    if ($ === null || typeof $ != "object" && typeof $ != "function")
      return { default: $ };
    var L = C();
    if (L && L.has($))
      return L.get($);
    var F = {}, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var B in $)
      if (Object.prototype.hasOwnProperty.call($, B)) {
        var Z = O ? Object.getOwnPropertyDescriptor($, B) : null;
        Z && (Z.get || Z.set) ? Object.defineProperty(F, B, Z) : F[B] = $[B];
      }
    return F.default = $, L && L.set($, F), F;
  }
  function w($) {
    return $ && $.__esModule ? $ : { default: $ };
  }
  function T($, L) {
    for (var F = 0; F < L.length; F++) {
      var O = L[F];
      O.enumerable = O.enumerable || false, O.configurable = true, "value" in O && (O.writable = true), Object.defineProperty($, O.key, O);
    }
  }
  function P($, L, F) {
    return L && T($.prototype, L), F && T($, F), $;
  }
  var b = (x = {}, x[m.space] = true, x[m.cr] = true, x[m.feed] = true, x[m.newline] = true, x[m.tab] = true, x), S = Object.assign({}, b, (E = {}, E[m.comment] = true, E));
  function k($) {
    return {
      line: $[d.FIELDS.START_LINE],
      column: $[d.FIELDS.START_COL]
    };
  }
  function _($) {
    return {
      line: $[d.FIELDS.END_LINE],
      column: $[d.FIELDS.END_COL]
    };
  }
  function Q($, L, F, O) {
    return {
      start: {
        line: $,
        column: L
      },
      end: {
        line: F,
        column: O
      }
    };
  }
  function K($) {
    return Q($[d.FIELDS.START_LINE], $[d.FIELDS.START_COL], $[d.FIELDS.END_LINE], $[d.FIELDS.END_COL]);
  }
  function ue($, L) {
    if (!!$)
      return Q($[d.FIELDS.START_LINE], $[d.FIELDS.START_COL], L[d.FIELDS.END_LINE], L[d.FIELDS.END_COL]);
  }
  function oe($, L) {
    var F = $[L];
    if (typeof F == "string")
      return F.indexOf("\\") !== -1 && ((0, Ce.ensureObject)($, "raws"), $[L] = (0, Ce.unesc)(F), $.raws[L] === void 0 && ($.raws[L] = F)), $;
  }
  function N($, L) {
    for (var F = -1, O = []; (F = $.indexOf(L, F + 1)) !== -1; )
      O.push(F);
    return O;
  }
  function R2() {
    var $ = Array.prototype.concat.apply([], arguments);
    return $.filter(function(L, F) {
      return F === $.indexOf(L);
    });
  }
  var q = function() {
    function $(F, O) {
      O === void 0 && (O = {}), this.rule = F, this.options = Object.assign({
        lossy: false,
        safe: false
      }, O), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, d.default)({
        css: this.css,
        error: this._errorGenerator(),
        safe: this.options.safe
      });
      var B = ue(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new t.default({
        source: B
      }), this.root.errorGenerator = this._errorGenerator();
      var Z = new r.default({
        source: {
          start: {
            line: 1,
            column: 1
          }
        }
      });
      this.root.append(Z), this.current = Z, this.loop();
    }
    var L = $.prototype;
    return L._errorGenerator = function() {
      var O = this;
      return function(B, Z) {
        return typeof O.rule == "string" ? new Error(B) : O.rule.error(B, Z);
      };
    }, L.attribute = function() {
      var O = [], B = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[d.FIELDS.TYPE] !== m.closeSquare; )
        O.push(this.currToken), this.position++;
      if (this.currToken[d.FIELDS.TYPE] !== m.closeSquare)
        return this.expected("closing square bracket", this.currToken[d.FIELDS.START_POS]);
      var Z = O.length, M = {
        source: Q(B[1], B[2], this.currToken[3], this.currToken[4]),
        sourceIndex: B[d.FIELDS.START_POS]
      };
      if (Z === 1 && !~[m.word].indexOf(O[0][d.FIELDS.TYPE]))
        return this.expected("attribute", O[0][d.FIELDS.START_POS]);
      for (var le = 0, Ee = "", de = "", se = null, W = false; le < Z; ) {
        var Y = O[le], ne = this.content(Y), me = O[le + 1];
        switch (Y[d.FIELDS.TYPE]) {
          case m.space:
            if (W = true, this.options.lossy)
              break;
            if (se) {
              (0, Ce.ensureObject)(M, "spaces", se);
              var Xe = M.spaces[se].after || "";
              M.spaces[se].after = Xe + ne;
              var Ge = (0, Ce.getProp)(M, "raws", "spaces", se, "after") || null;
              Ge && (M.raws.spaces[se].after = Ge + ne);
            } else
              Ee = Ee + ne, de = de + ne;
            break;
          case m.asterisk:
            if (me[d.FIELDS.TYPE] === m.equals)
              M.operator = ne, se = "operator";
            else if ((!M.namespace || se === "namespace" && !W) && me) {
              Ee && ((0, Ce.ensureObject)(M, "spaces", "attribute"), M.spaces.attribute.before = Ee, Ee = ""), de && ((0, Ce.ensureObject)(M, "raws", "spaces", "attribute"), M.raws.spaces.attribute.before = Ee, de = ""), M.namespace = (M.namespace || "") + ne;
              var We = (0, Ce.getProp)(M, "raws", "namespace") || null;
              We && (M.raws.namespace += ne), se = "namespace";
            }
            W = false;
            break;
          case m.dollar:
            if (se === "value") {
              var ge = (0, Ce.getProp)(M, "raws", "value");
              M.value += "$", ge && (M.raws.value = ge + "$");
              break;
            }
          case m.caret:
            me[d.FIELDS.TYPE] === m.equals && (M.operator = ne, se = "operator"), W = false;
            break;
          case m.combinator:
            if (ne === "~" && me[d.FIELDS.TYPE] === m.equals && (M.operator = ne, se = "operator"), ne !== "|") {
              W = false;
              break;
            }
            me[d.FIELDS.TYPE] === m.equals ? (M.operator = ne, se = "operator") : !M.namespace && !M.attribute && (M.namespace = true), W = false;
            break;
          case m.word:
            if (me && this.content(me) === "|" && O[le + 2] && O[le + 2][d.FIELDS.TYPE] !== m.equals && !M.operator && !M.namespace)
              M.namespace = ne, se = "namespace";
            else if (!M.attribute || se === "attribute" && !W) {
              Ee && ((0, Ce.ensureObject)(M, "spaces", "attribute"), M.spaces.attribute.before = Ee, Ee = ""), de && ((0, Ce.ensureObject)(M, "raws", "spaces", "attribute"), M.raws.spaces.attribute.before = de, de = ""), M.attribute = (M.attribute || "") + ne;
              var st = (0, Ce.getProp)(M, "raws", "attribute") || null;
              st && (M.raws.attribute += ne), se = "attribute";
            } else if (!M.value && M.value !== "" || se === "value" && !W) {
              var Ze = (0, Ce.unesc)(ne), bt = (0, Ce.getProp)(M, "raws", "value") || "", yr = M.value || "";
              M.value = yr + Ze, M.quoteMark = null, (Ze !== ne || bt) && ((0, Ce.ensureObject)(M, "raws"), M.raws.value = (bt || yr) + ne), se = "value";
            } else {
              var vr = ne === "i" || ne === "I";
              (M.value || M.value === "") && (M.quoteMark || W) ? (M.insensitive = vr, (!vr || ne === "I") && ((0, Ce.ensureObject)(M, "raws"), M.raws.insensitiveFlag = ne), se = "insensitive", Ee && ((0, Ce.ensureObject)(M, "spaces", "insensitive"), M.spaces.insensitive.before = Ee, Ee = ""), de && ((0, Ce.ensureObject)(M, "raws", "spaces", "insensitive"), M.raws.spaces.insensitive.before = de, de = "")) : (M.value || M.value === "") && (se = "value", M.value += ne, M.raws.value && (M.raws.value += ne));
            }
            W = false;
            break;
          case m.str:
            if (!M.attribute || !M.operator)
              return this.error("Expected an attribute followed by an operator preceding the string.", {
                index: Y[d.FIELDS.START_POS]
              });
            var br = (0, c.unescapeValue)(ne), qr = br.unescaped, Fa = br.quoteMark;
            M.value = qr, M.quoteMark = Fa, se = "value", (0, Ce.ensureObject)(M, "raws"), M.raws.value = ne, W = false;
            break;
          case m.equals:
            if (!M.attribute)
              return this.expected("attribute", Y[d.FIELDS.START_POS], ne);
            if (M.value)
              return this.error('Unexpected "=" found; an operator was already defined.', {
                index: Y[d.FIELDS.START_POS]
              });
            M.operator = M.operator ? M.operator + ne : ne, se = "operator", W = false;
            break;
          case m.comment:
            if (se)
              if (W || me && me[d.FIELDS.TYPE] === m.space || se === "insensitive") {
                var Bi = (0, Ce.getProp)(M, "spaces", se, "after") || "", Ba = (0, Ce.getProp)(M, "raws", "spaces", se, "after") || Bi;
                (0, Ce.ensureObject)(M, "raws", "spaces", se), M.raws.spaces[se].after = Ba + ne;
              } else {
                var $i = M[se] || "", $a = (0, Ce.getProp)(M, "raws", se) || $i;
                (0, Ce.ensureObject)(M, "raws"), M.raws[se] = $a + ne;
              }
            else
              de = de + ne;
            break;
          default:
            return this.error('Unexpected "' + ne + '" found.', {
              index: Y[d.FIELDS.START_POS]
            });
        }
        le++;
      }
      oe(M, "attribute"), oe(M, "namespace"), this.newNode(new c.default(M)), this.position++;
    }, L.parseWhitespaceEquivalentTokens = function(O) {
      O < 0 && (O = this.tokens.length);
      var B = this.position, Z = [], M = "", le = void 0;
      do
        if (b[this.currToken[d.FIELDS.TYPE]])
          this.options.lossy || (M += this.content());
        else if (this.currToken[d.FIELDS.TYPE] === m.comment) {
          var Ee = {};
          M && (Ee.before = M, M = ""), le = new n.default({
            value: this.content(),
            source: K(this.currToken),
            sourceIndex: this.currToken[d.FIELDS.START_POS],
            spaces: Ee
          }), Z.push(le);
        }
      while (++this.position < O);
      if (M) {
        if (le)
          le.spaces.after = M;
        else if (!this.options.lossy) {
          var de = this.tokens[B], se = this.tokens[this.position - 1];
          Z.push(new l.default({
            value: "",
            source: Q(de[d.FIELDS.START_LINE], de[d.FIELDS.START_COL], se[d.FIELDS.END_LINE], se[d.FIELDS.END_COL]),
            sourceIndex: de[d.FIELDS.START_POS],
            spaces: {
              before: M,
              after: ""
            }
          }));
        }
      }
      return Z;
    }, L.convertWhitespaceNodesToSpace = function(O, B) {
      var Z = this;
      B === void 0 && (B = false);
      var M = "", le = "";
      O.forEach(function(de) {
        var se = Z.lossySpace(de.spaces.before, B), W = Z.lossySpace(de.rawSpaceBefore, B);
        M += se + Z.lossySpace(de.spaces.after, B && se.length === 0), le += se + de.value + Z.lossySpace(de.rawSpaceAfter, B && W.length === 0);
      }), le === M && (le = void 0);
      var Ee = {
        space: M,
        rawSpace: le
      };
      return Ee;
    }, L.isNamedCombinator = function(O) {
      return O === void 0 && (O = this.position), this.tokens[O + 0] && this.tokens[O + 0][d.FIELDS.TYPE] === m.slash && this.tokens[O + 1] && this.tokens[O + 1][d.FIELDS.TYPE] === m.word && this.tokens[O + 2] && this.tokens[O + 2][d.FIELDS.TYPE] === m.slash;
    }, L.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var O = this.content(this.tokens[this.position + 1]), B = (0, Ce.unesc)(O).toLowerCase(), Z = {};
        B !== O && (Z.value = "/" + O + "/");
        var M = new p.default({
          value: "/" + B + "/",
          source: Q(this.currToken[d.FIELDS.START_LINE], this.currToken[d.FIELDS.START_COL], this.tokens[this.position + 2][d.FIELDS.END_LINE], this.tokens[this.position + 2][d.FIELDS.END_COL]),
          sourceIndex: this.currToken[d.FIELDS.START_POS],
          raws: Z
        });
        return this.position = this.position + 3, M;
      } else
        this.unexpected();
    }, L.combinator = function() {
      var O = this;
      if (this.content() === "|")
        return this.namespace();
      var B = this.locateNextMeaningfulToken(this.position);
      if (B < 0 || this.tokens[B][d.FIELDS.TYPE] === m.comma) {
        var Z = this.parseWhitespaceEquivalentTokens(B);
        if (Z.length > 0) {
          var M = this.current.last;
          if (M) {
            var le = this.convertWhitespaceNodesToSpace(Z), Ee = le.space, de = le.rawSpace;
            de !== void 0 && (M.rawSpaceAfter += de), M.spaces.after += Ee;
          } else
            Z.forEach(function(bt) {
              return O.newNode(bt);
            });
        }
        return;
      }
      var se = this.currToken, W = void 0;
      B > this.position && (W = this.parseWhitespaceEquivalentTokens(B));
      var Y;
      if (this.isNamedCombinator() ? Y = this.namedCombinator() : this.currToken[d.FIELDS.TYPE] === m.combinator ? (Y = new p.default({
        value: this.content(),
        source: K(this.currToken),
        sourceIndex: this.currToken[d.FIELDS.START_POS]
      }), this.position++) : b[this.currToken[d.FIELDS.TYPE]] || W || this.unexpected(), Y) {
        if (W) {
          var ne = this.convertWhitespaceNodesToSpace(W), me = ne.space, Xe = ne.rawSpace;
          Y.spaces.before = me, Y.rawSpaceBefore = Xe;
        }
      } else {
        var Ge = this.convertWhitespaceNodesToSpace(W, true), We = Ge.space, ge = Ge.rawSpace;
        ge || (ge = We);
        var st = {}, Ze = {
          spaces: {}
        };
        We.endsWith(" ") && ge.endsWith(" ") ? (st.before = We.slice(0, We.length - 1), Ze.spaces.before = ge.slice(0, ge.length - 1)) : We.startsWith(" ") && ge.startsWith(" ") ? (st.after = We.slice(1), Ze.spaces.after = ge.slice(1)) : Ze.value = ge, Y = new p.default({
          value: " ",
          source: ue(se, this.tokens[this.position - 1]),
          sourceIndex: se[d.FIELDS.START_POS],
          spaces: st,
          raws: Ze
        });
      }
      return this.currToken && this.currToken[d.FIELDS.TYPE] === m.space && (Y.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(Y);
    }, L.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var O = new r.default({
        source: {
          start: k(this.tokens[this.position + 1])
        }
      });
      this.current.parent.append(O), this.current = O, this.position++;
    }, L.comment = function() {
      var O = this.currToken;
      this.newNode(new n.default({
        value: this.content(),
        source: K(O),
        sourceIndex: O[d.FIELDS.START_POS]
      })), this.position++;
    }, L.error = function(O, B) {
      throw this.root.error(O, B);
    }, L.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.", {
        index: this.currToken[d.FIELDS.START_POS]
      });
    }, L.missingParenthesis = function() {
      return this.expected("opening parenthesis", this.currToken[d.FIELDS.START_POS]);
    }, L.missingSquareBracket = function() {
      return this.expected("opening square bracket", this.currToken[d.FIELDS.START_POS]);
    }, L.unexpected = function() {
      return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[d.FIELDS.START_POS]);
    }, L.namespace = function() {
      var O = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[d.FIELDS.TYPE] === m.word)
        return this.position++, this.word(O);
      if (this.nextToken[d.FIELDS.TYPE] === m.asterisk)
        return this.position++, this.universal(O);
    }, L.nesting = function() {
      if (this.nextToken) {
        var O = this.content(this.nextToken);
        if (O === "|") {
          this.position++;
          return;
        }
      }
      var B = this.currToken;
      this.newNode(new f.default({
        value: this.content(),
        source: K(B),
        sourceIndex: B[d.FIELDS.START_POS]
      })), this.position++;
    }, L.parentheses = function() {
      var O = this.current.last, B = 1;
      if (this.position++, O && O.type === y.PSEUDO) {
        var Z = new r.default({
          source: {
            start: k(this.tokens[this.position - 1])
          }
        }), M = this.current;
        for (O.append(Z), this.current = Z; this.position < this.tokens.length && B; )
          this.currToken[d.FIELDS.TYPE] === m.openParenthesis && B++, this.currToken[d.FIELDS.TYPE] === m.closeParenthesis && B--, B ? this.parse() : (this.current.source.end = _(this.currToken), this.current.parent.source.end = _(this.currToken), this.position++);
        this.current = M;
      } else {
        for (var le = this.currToken, Ee = "(", de; this.position < this.tokens.length && B; )
          this.currToken[d.FIELDS.TYPE] === m.openParenthesis && B++, this.currToken[d.FIELDS.TYPE] === m.closeParenthesis && B--, de = this.currToken, Ee += this.parseParenthesisToken(this.currToken), this.position++;
        O ? O.appendToPropertyAndEscape("value", Ee, Ee) : this.newNode(new l.default({
          value: Ee,
          source: Q(le[d.FIELDS.START_LINE], le[d.FIELDS.START_COL], de[d.FIELDS.END_LINE], de[d.FIELDS.END_COL]),
          sourceIndex: le[d.FIELDS.START_POS]
        }));
      }
      if (B)
        return this.expected("closing parenthesis", this.currToken[d.FIELDS.START_POS]);
    }, L.pseudo = function() {
      for (var O = this, B = "", Z = this.currToken; this.currToken && this.currToken[d.FIELDS.TYPE] === m.colon; )
        B += this.content(), this.position++;
      if (!this.currToken)
        return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
      if (this.currToken[d.FIELDS.TYPE] === m.word)
        this.splitWord(false, function(M, le) {
          B += M, O.newNode(new u.default({
            value: B,
            source: ue(Z, O.currToken),
            sourceIndex: Z[d.FIELDS.START_POS]
          })), le > 1 && O.nextToken && O.nextToken[d.FIELDS.TYPE] === m.openParenthesis && O.error("Misplaced parenthesis.", {
            index: O.nextToken[d.FIELDS.START_POS]
          });
        });
      else
        return this.expected(["pseudo-class", "pseudo-element"], this.currToken[d.FIELDS.START_POS]);
    }, L.space = function() {
      var O = this.content();
      this.position === 0 || this.prevToken[d.FIELDS.TYPE] === m.comma || this.prevToken[d.FIELDS.TYPE] === m.openParenthesis || this.current.nodes.every(function(B) {
        return B.type === "comment";
      }) ? (this.spaces = this.optionalSpace(O), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[d.FIELDS.TYPE] === m.comma || this.nextToken[d.FIELDS.TYPE] === m.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(O), this.position++) : this.combinator();
    }, L.string = function() {
      var O = this.currToken;
      this.newNode(new l.default({
        value: this.content(),
        source: K(O),
        sourceIndex: O[d.FIELDS.START_POS]
      })), this.position++;
    }, L.universal = function(O) {
      var B = this.nextToken;
      if (B && this.content(B) === "|")
        return this.position++, this.namespace();
      var Z = this.currToken;
      this.newNode(new h.default({
        value: this.content(),
        source: K(Z),
        sourceIndex: Z[d.FIELDS.START_POS]
      }), O), this.position++;
    }, L.splitWord = function(O, B) {
      for (var Z = this, M = this.nextToken, le = this.content(); M && ~[m.dollar, m.caret, m.equals, m.word].indexOf(M[d.FIELDS.TYPE]); ) {
        this.position++;
        var Ee = this.content();
        if (le += Ee, Ee.lastIndexOf("\\") === Ee.length - 1) {
          var de = this.nextToken;
          de && de[d.FIELDS.TYPE] === m.space && (le += this.requiredSpace(this.content(de)), this.position++);
        }
        M = this.nextToken;
      }
      var se = N(le, ".").filter(function(me) {
        var Xe = le[me - 1] === "\\", Ge = /^\d+\.\d+%$/.test(le);
        return !Xe && !Ge;
      }), W = N(le, "#").filter(function(me) {
        return le[me - 1] !== "\\";
      }), Y = N(le, "#{");
      Y.length && (W = W.filter(function(me) {
        return !~Y.indexOf(me);
      }));
      var ne = (0, g.default)(R2([0].concat(se, W)));
      ne.forEach(function(me, Xe) {
        var Ge = ne[Xe + 1] || le.length, We = le.slice(me, Ge);
        if (Xe === 0 && B)
          return B.call(Z, We, ne.length);
        var ge, st = Z.currToken, Ze = st[d.FIELDS.START_POS] + ne[Xe], bt = Q(st[1], st[2] + me, st[3], st[2] + (Ge - 1));
        if (~se.indexOf(me)) {
          var yr = {
            value: We.slice(1),
            source: bt,
            sourceIndex: Ze
          };
          ge = new i.default(oe(yr, "value"));
        } else if (~W.indexOf(me)) {
          var vr = {
            value: We.slice(1),
            source: bt,
            sourceIndex: Ze
          };
          ge = new a.default(oe(vr, "value"));
        } else {
          var br = {
            value: We,
            source: bt,
            sourceIndex: Ze
          };
          oe(br, "value"), ge = new o.default(br);
        }
        Z.newNode(ge, O), O = null;
      }), this.position++;
    }, L.word = function(O) {
      var B = this.nextToken;
      return B && this.content(B) === "|" ? (this.position++, this.namespace()) : this.splitWord(O);
    }, L.loop = function() {
      for (; this.position < this.tokens.length; )
        this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, L.parse = function(O) {
      switch (this.currToken[d.FIELDS.TYPE]) {
        case m.space:
          this.space();
          break;
        case m.comment:
          this.comment();
          break;
        case m.openParenthesis:
          this.parentheses();
          break;
        case m.closeParenthesis:
          O && this.missingParenthesis();
          break;
        case m.openSquare:
          this.attribute();
          break;
        case m.dollar:
        case m.caret:
        case m.equals:
        case m.word:
          this.word();
          break;
        case m.colon:
          this.pseudo();
          break;
        case m.comma:
          this.comma();
          break;
        case m.asterisk:
          this.universal();
          break;
        case m.ampersand:
          this.nesting();
          break;
        case m.slash:
        case m.combinator:
          this.combinator();
          break;
        case m.str:
          this.string();
          break;
        case m.closeSquare:
          this.missingSquareBracket();
        case m.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, L.expected = function(O, B, Z) {
      if (Array.isArray(O)) {
        var M = O.pop();
        O = O.join(", ") + " or " + M;
      }
      var le = /^[aeiou]/.test(O[0]) ? "an" : "a";
      return Z ? this.error("Expected " + le + " " + O + ', found "' + Z + '" instead.', {
        index: B
      }) : this.error("Expected " + le + " " + O + ".", {
        index: B
      });
    }, L.requiredSpace = function(O) {
      return this.options.lossy ? " " : O;
    }, L.optionalSpace = function(O) {
      return this.options.lossy ? "" : O;
    }, L.lossySpace = function(O, B) {
      return this.options.lossy ? B ? " " : "" : O;
    }, L.parseParenthesisToken = function(O) {
      var B = this.content(O);
      return O[d.FIELDS.TYPE] === m.space ? this.requiredSpace(B) : B;
    }, L.newNode = function(O, B) {
      return B && (/^ +$/.test(B) && (this.options.lossy || (this.spaces = (this.spaces || "") + B), B = true), O.namespace = B, oe(O, "namespace")), this.spaces && (O.spaces.before = this.spaces, this.spaces = ""), this.current.append(O);
    }, L.content = function(O) {
      return O === void 0 && (O = this.currToken), this.css.slice(O[d.FIELDS.START_POS], O[d.FIELDS.END_POS]);
    }, L.locateNextMeaningfulToken = function(O) {
      O === void 0 && (O = this.position + 1);
      for (var B = O; B < this.tokens.length; )
        if (S[this.tokens[B][d.FIELDS.TYPE]]) {
          B++;
          continue;
        } else
          return B;
      return -1;
    }, P($, [{
      key: "currToken",
      get: function() {
        return this.tokens[this.position];
      }
    }, {
      key: "nextToken",
      get: function() {
        return this.tokens[this.position + 1];
      }
    }, {
      key: "prevToken",
      get: function() {
        return this.tokens[this.position - 1];
      }
    }]), $;
  }();
  e.default = q, s3.exports = e.default;
});
var gx = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = r(mx);
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = function() {
    function n(o, l) {
      this.func = o || function() {
      }, this.funcRes = null, this.options = l;
    }
    var a = n.prototype;
    return a._shouldUpdateSelector = function(l, u) {
      u === void 0 && (u = {});
      var c = Object.assign({}, this.options, u);
      return c.updateSelector === false ? false : typeof l != "string";
    }, a._isLossy = function(l) {
      l === void 0 && (l = {});
      var u = Object.assign({}, this.options, l);
      return u.lossless === false;
    }, a._root = function(l, u) {
      u === void 0 && (u = {});
      var c = new t.default(l, this._parseOptions(u));
      return c.root;
    }, a._parseOptions = function(l) {
      return {
        lossy: this._isLossy(l)
      };
    }, a._run = function(l, u) {
      var c = this;
      return u === void 0 && (u = {}), new Promise(function(h, p) {
        try {
          var f = c._root(l, u);
          Promise.resolve(c.func(f)).then(function(g) {
            var d = void 0;
            return c._shouldUpdateSelector(l, u) && (d = f.toString(), l.selector = d), {
              transform: g,
              root: f,
              string: d
            };
          }).then(h, p);
        } catch (g) {
          p(g);
          return;
        }
      });
    }, a._runSync = function(l, u) {
      u === void 0 && (u = {});
      var c = this._root(l, u), h = this.func(c);
      if (h && typeof h.then == "function")
        throw new Error("Selector processor returned a promise to a synchronous call.");
      var p = void 0;
      return u.updateSelector && typeof l != "string" && (p = c.toString(), l.selector = p), {
        transform: h,
        root: c,
        string: p
      };
    }, a.ast = function(l, u) {
      return this._run(l, u).then(function(c) {
        return c.root;
      });
    }, a.astSync = function(l, u) {
      return this._runSync(l, u).root;
    }, a.transform = function(l, u) {
      return this._run(l, u).then(function(c) {
        return c.transform;
      });
    }, a.transformSync = function(l, u) {
      return this._runSync(l, u).transform;
    }, a.process = function(l, u) {
      return this._run(l, u).then(function(c) {
        return c.string || c.root.toString();
      });
    }, a.processSync = function(l, u) {
      var c = this._runSync(l, u);
      return c.string || c.root.toString();
    }, n;
  }();
  e.default = i, s3.exports = e.default;
});
var yo = we(function(s3, e) {
  e.__esModule = true, e.universal = e.tag = e.string = e.selector = e.root = e.pseudo = e.nesting = e.id = e.comment = e.combinator = e.className = e.attribute = void 0;
  var t = g(Im), r = g(xm), i = g(Nm), n = g(Tm), a = g(Pm), o = g(Om), l = g(_m), u = g(wm), c = g(Em), h = g(Cm), p = g(Am), f = g(km);
  function g(k) {
    return k && k.__esModule ? k : { default: k };
  }
  var d = function(_) {
    return new t.default(_);
  };
  e.attribute = d;
  var m = function(_) {
    return new r.default(_);
  };
  e.className = m;
  var y = function(_) {
    return new i.default(_);
  };
  e.combinator = y;
  var x = function(_) {
    return new n.default(_);
  };
  e.comment = x;
  var E = function(_) {
    return new a.default(_);
  };
  e.id = E;
  var C = function(_) {
    return new o.default(_);
  };
  e.nesting = C;
  var v = function(_) {
    return new l.default(_);
  };
  e.pseudo = v;
  var w = function(_) {
    return new u.default(_);
  };
  e.root = w;
  var T = function(_) {
    return new c.default(_);
  };
  e.selector = T;
  var P = function(_) {
    return new h.default(_);
  };
  e.string = P;
  var b = function(_) {
    return new p.default(_);
  };
  e.tag = b;
  var S = function(_) {
    return new f.default(_);
  };
  e.universal = S;
});
var vo = we(function(s3, e) {
  e.__esModule = true, e.isNode = i, e.isPseudoElement = x, e.isPseudoClass = E, e.isContainer = C, e.isNamespace = v, e.isUniversal = e.isTag = e.isString = e.isSelector = e.isRoot = e.isPseudo = e.isNesting = e.isIdentifier = e.isComment = e.isCombinator = e.isClassName = e.isAttribute = void 0;
  var t, r = (t = {}, t[he.ATTRIBUTE] = true, t[he.CLASS] = true, t[he.COMBINATOR] = true, t[he.COMMENT] = true, t[he.ID] = true, t[he.NESTING] = true, t[he.PSEUDO] = true, t[he.ROOT] = true, t[he.SELECTOR] = true, t[he.STRING] = true, t[he.TAG] = true, t[he.UNIVERSAL] = true, t);
  function i(w) {
    return typeof w == "object" && r[w.type];
  }
  function n(w, T) {
    return i(T) && T.type === w;
  }
  var a = n.bind(null, he.ATTRIBUTE);
  e.isAttribute = a;
  var o = n.bind(null, he.CLASS);
  e.isClassName = o;
  var l = n.bind(null, he.COMBINATOR);
  e.isCombinator = l;
  var u = n.bind(null, he.COMMENT);
  e.isComment = u;
  var c = n.bind(null, he.ID);
  e.isIdentifier = c;
  var h = n.bind(null, he.NESTING);
  e.isNesting = h;
  var p = n.bind(null, he.PSEUDO);
  e.isPseudo = p;
  var f = n.bind(null, he.ROOT);
  e.isRoot = f;
  var g = n.bind(null, he.SELECTOR);
  e.isSelector = g;
  var d = n.bind(null, he.STRING);
  e.isString = d;
  var m = n.bind(null, he.TAG);
  e.isTag = m;
  var y = n.bind(null, he.UNIVERSAL);
  e.isUniversal = y;
  function x(w) {
    return p(w) && w.value && (w.value.startsWith("::") || w.value.toLowerCase() === ":before" || w.value.toLowerCase() === ":after");
  }
  function E(w) {
    return p(w) && !x(w);
  }
  function C(w) {
    return !!(i(w) && w.walk);
  }
  function v(w) {
    return a(w) || m(w);
  }
});
var yx = we(function(s3, e) {
  e.__esModule = true, Object.keys(he).forEach(function(t) {
    t === "default" || t === "__esModule" || t in e && e[t] === he[t] || (e[t] = he[t]);
  }), Object.keys(yo).forEach(function(t) {
    t === "default" || t === "__esModule" || t in e && e[t] === yo[t] || (e[t] = yo[t]);
  }), Object.keys(vo).forEach(function(t) {
    t === "default" || t === "__esModule" || t in e && e[t] === vo[t] || (e[t] = vo[t]);
  });
});
var vx = we(function(s3, e) {
  e.__esModule = true, e.default = void 0;
  var t = a(gx), r = n(yx);
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var u = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return u;
    }, u;
  }
  function n(u) {
    if (u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var c = i();
    if (c && c.has(u))
      return c.get(u);
    var h = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in u)
      if (Object.prototype.hasOwnProperty.call(u, f)) {
        var g = p ? Object.getOwnPropertyDescriptor(u, f) : null;
        g && (g.get || g.set) ? Object.defineProperty(h, f, g) : h[f] = u[f];
      }
    return h.default = u, c && c.set(u, h), h;
  }
  function a(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var o = function(c) {
    return new t.default(c);
  };
  Object.assign(o, r), delete o.__esModule;
  var l = o;
  e.default = l, s3.exports = e.default;
});
var pl = L0(vx);
var bx = /^(-\w+-)?animation-name$/;
var Sx = /^(-\w+-)?animation$/;
var Mm = (s3 = "") => {
  const e = /* @__PURE__ */ Object.create(null), t = s3.replace(/^data-v-/, "");
  return {
    postcssPlugin: "vue-sfc-scoped",
    Rule(r) {
      wx(s3, r);
    },
    AtRule(r) {
      /-?keyframes$/.test(r.name) && !r.params.endsWith(`-${t}`) && (e[r.params] = r.params = r.params + "-" + t);
    },
    OnceExit(r) {
      Object.keys(e).length && r.walkDecls((i) => {
        bx.test(i.prop) && (i.value = i.value.split(",").map((n) => e[n.trim()] || n.trim()).join(",")), Sx.test(i.prop) && (i.value = i.value.split(",").map((n) => {
          const a = n.trim().split(/\s+/), o = a.findIndex((l) => e[l]);
          return o !== -1 ? (a.splice(o, 1, e[a[o]]), a.join(" ")) : n;
        }).join(","));
      });
    }
  };
};
var Ch = /* @__PURE__ */ new WeakSet();
function wx(s3, e) {
  Ch.has(e) || e.parent && e.parent.type === "atrule" && /-?keyframes$/.test(e.parent.name) || (Ch.add(e), e.selector = pl((t) => {
    t.each((r) => {
      Dm(s3, r, t);
    });
  }).processSync(e.selector));
}
function Dm(s3, e, t, r = false) {
  let i = null, n = true;
  if (e.each((a) => {
    if (a.type === "combinator" && (a.value === ">>>" || a.value === "/deep/"))
      return a.value = " ", a.spaces.before = a.spaces.after = "", Ko("the >>> and /deep/ combinators have been deprecated. Use :deep() instead."), false;
    if (a.type === "pseudo") {
      const { value: o } = a;
      if (o === ":deep" || o === "::v-deep") {
        if (a.nodes.length) {
          let l = a;
          a.nodes[0].each((c) => {
            e.insertAfter(l, c), l = c;
          });
          const u = e.at(e.index(a) - 1);
          (!u || !_h(u)) && e.insertAfter(a, pl.combinator({
            value: " "
          })), e.removeChild(a);
        } else {
          Ko("::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead.");
          const l = e.at(e.index(a) - 1);
          l && _h(l) && e.removeChild(l), e.removeChild(a);
        }
        return false;
      }
      if (o === ":slotted" || o === "::v-slotted") {
        Dm(s3, a.nodes[0], t, true);
        let l = a;
        return a.nodes[0].each((u) => {
          e.insertAfter(l, u), l = u;
        }), e.removeChild(a), n = false, false;
      }
      if (o === ":global" || o === "::v-global")
        return t.insertAfter(e, a.nodes[0]), t.removeChild(e), false;
    }
    a.type !== "pseudo" && a.type !== "combinator" && (i = a);
  }), i ? i.spaces.after = "" : e.first.spaces.before = "", n) {
    const a = r ? s3 + "-s" : s3;
    e.insertAfter(i, pl.attribute({
      attribute: a,
      value: a,
      raws: {},
      quoteMark: '"'
    }));
  }
}
function _h(s3) {
  return s3.type === "combinator" && /^\s+$/.test(s3.value);
}
Mm.postcss = true;
var Ih = qp.SourceMapConsumer;
var Ex = qp.SourceMapGenerator;
var tc = xx;
function xx(s3, e) {
  if (!s3)
    return e;
  if (!e)
    return s3;
  var t = new Ih(s3), r = new Ih(e), i = new Ex();
  r.eachMapping(function(a) {
    if (a.originalLine != null) {
      var o = t.originalPositionFor({
        line: a.originalLine,
        column: a.originalColumn
      });
      o.source != null && i.addMapping({
        original: {
          line: o.line,
          column: o.column
        },
        generated: {
          line: a.generatedLine,
          column: a.generatedColumn
        },
        source: o.source,
        name: o.name
      });
    }
  });
  var n = [t, r];
  return n.forEach(function(a) {
    a.sources.forEach(function(o) {
      i._sources.add(o);
      var l = a.sourceContentFor(o);
      l != null && i.setSourceContent(o, l);
    });
  }), i._sourceRoot = s3.sourceRoot, i._file = s3.file, JSON.parse(i.toString());
}
var Rm = (s3, e, t, r = __require) => {
  const i = r("sass"), n = Object.assign(Object.assign({}, t), { data: Fm(s3, t.filename, t.additionalData), file: t.filename, outFile: t.filename, sourceMap: !!e });
  try {
    const a = i.renderSync(n), o = a.stats.includedFiles;
    return e ? {
      code: a.css.toString(),
      map: tc(e, JSON.parse(a.map.toString())),
      errors: [],
      dependencies: o
    } : { code: a.css.toString(), errors: [], dependencies: o };
  } catch (a) {
    return { code: "", errors: [a], dependencies: [] };
  }
};
var Tx = (s3, e, t, r) => Rm(s3, e, Object.assign(Object.assign({}, t), { indentedSyntax: true }), r);
var Px = (s3, e, t, r = __require) => {
  const i = r("less");
  let n, a = null;
  if (i.render(Fm(s3, t.filename, t.additionalData), Object.assign(Object.assign({}, t), { syncImport: true }), (l, u) => {
    a = l, n = u;
  }), a)
    return { code: "", errors: [a], dependencies: [] };
  const o = n.imports;
  return e ? {
    code: n.css.toString(),
    map: tc(e, n.map),
    errors: [],
    dependencies: o
  } : {
    code: n.css.toString(),
    errors: [],
    dependencies: o
  };
};
var kh = (s3, e, t, r = __require) => {
  const i = r("stylus");
  try {
    const n = i(s3);
    Object.keys(t).forEach((l) => n.set(l, t[l])), e && n.set("sourcemap", { inline: false, comment: false });
    const a = n.render(), o = n.deps();
    return e ? {
      code: a,
      map: tc(e, n.sourcemap),
      errors: [],
      dependencies: o
    } : { code: a, errors: [], dependencies: o };
  } catch (n) {
    return { code: "", errors: [n], dependencies: [] };
  }
};
function Fm(s3, e, t) {
  return t ? Vh(t) ? t(s3, e) : t + s3 : s3;
}
var Ax = {
  less: Px,
  sass: Tx,
  scss: Rm,
  styl: kh,
  stylus: kh
};
function Cx(s3) {
  return _x(Object.assign(Object.assign({}, s3), { isAsync: false }));
}
function _x(s3) {
  const { filename: e, id: t, scoped: r = false, trim: i = true, isProd: n = false, modules: a = false, modulesOptions: o = {}, preprocessLang: l, postcssOptions: u, postcssPlugins: c } = s3, h = l && Ax[l], p = h && Ix(s3, h), f = p ? p.map : s3.inMap || s3.map, g = p ? p.code : s3.source, d = t.replace(/^data-v-/, ""), m = `data-v-${d}`, y = (c || []).slice();
  y.unshift(uf({ id: d, isProd: n })), i && y.push(bm()), r && y.push(Mm(m));
  let x;
  if (a)
    throw new Error("[@vue/compiler-sfc] `modules` option is not supported in the browser build.");
  const E = Object.assign(Object.assign({}, u), { to: e, from: e });
  f && (E.map = {
    inline: false,
    annotation: false,
    prev: f
  });
  let C, v, w;
  const T = new Set(p ? p.dependencies : []);
  T.delete(e);
  const P = [];
  p && p.errors.length && P.push(...p.errors);
  const b = (S) => (S.forEach((k) => {
    k.type === "dependency" && T.add(k.file);
  }), T);
  try {
    if (C = sx(y).process(g, E), s3.isAsync)
      return C.then((S) => ({
        code: S.css || "",
        map: S.map && S.map.toJSON(),
        errors: P,
        modules: x,
        rawResult: S,
        dependencies: b(S.messages)
      })).catch((S) => ({
        code: "",
        map: void 0,
        errors: [...P, S],
        rawResult: void 0,
        dependencies: T
      }));
    b(C.messages), v = C.css, w = C.map;
  } catch (S) {
    P.push(S);
  }
  return {
    code: v || "",
    map: w && w.toJSON(),
    errors: P,
    rawResult: C,
    dependencies: T
  };
}
function Ix(s3, e) {
  if (!s3.preprocessCustomRequire)
    throw new Error("[@vue/compiler-sfc] Style preprocessing in the browser build must provide the `preprocessCustomRequire` option to return the in-browser version of the preprocessor.");
  return e(s3.source, s3.inMap || s3.map, Object.assign({ filename: s3.filename }, s3.preprocessOptions), s3.preprocessCustomRequire);
}
var Nh = 0;
A();
var kx = ["jsx", "vue", "tsx"];
var Dx = class {
  constructor(e, t, r = false, i) {
    this.scriptEl = null, this.templateUrl = "", this.scriptUrl = "", this._id = Nh, this.styleEl = document.createElement("style"), this.onError = () => {
    }, this.isTypeScript = false, this.selector = e, this.lang = kx.includes(t) ? t : "vue", this.isTypeScript = r, i && (this.onError = i), document.body.appendChild(this.styleEl), Nh++;
  }
  listenError() {
    window.addEventListener("error", (e) => {
      [this.scriptUrl, this.templateUrl].includes(e.filename) && this.handleError([e]);
    });
  }
  async compilerSFC(e) {
    e = Um(e), /\<script.*?\>.*\<\/script.*?\>/s.test(e) || (e = `${e}
         <script>export default {}<\/script>
         `);
    const r = kw(e, { filename: "none" });
    r.errors && this.handleError(r.errors);
    const i = Nx(), n = this.compilerTemplate(r, i);
    this.templateUrl = Oh(n);
    const a = await this.compilerScript(r, i);
    return this.compilerStyle(r, i), a;
  }
  async compileCode(e) {
    this.revokeAllObjectURL(), this.createScriptEl();
    try {
      let t = "";
      if (this.lang === "jsx" || this.lang === "tsx" ? t = await this.compilerJsx(e) : this.lang === "vue" && (t = await this.compilerSFC(e)), !t)
        return;
      this.scriptUrl = Oh(t);
      const r = this.runCode();
      return this.clearError(), r;
    } catch (t) {
      throw this.handleError([t]), t;
    }
  }
  async compilerJsx(e) {
    const t = await Mh(), i = [await Ox()];
    if (this.isTypeScript) {
      const n = await Lh();
      i.push([n, { isTSX: true }]);
    }
    try {
      const n = t(e, {
        plugins: i
      }), a = R(n.code);
      if (!/export default/.test(a)) {
        this.handleError([new Error("No default export found")]);
        return;
      }
      return a;
    } catch (n) {
      this.handleError(Array.isArray(n) ? n : [n]);
    }
  }
  createScriptEl() {
    this.scriptEl && this.scriptEl.remove(), this.scriptEl = document.createElement("script"), this.scriptEl.type = "module", document.body.appendChild(this.scriptEl);
  }
  compilerTemplate(e, t) {
    var n;
    const i = Cd({
      source: ((n = e.descriptor.template) == null ? void 0 : n.content) || "",
      id: t,
      scoped: true,
      filename: e.descriptor.filename,
      slotted: e.descriptor.slotted
    }).code;
    return R(i);
  }
  async compilerScript(e, t) {
    var a, o, l;
    const { descriptor: r } = e;
    this.isTypeScript = ((a = r.script) == null ? void 0 : a.lang) === "ts" || ((o = r.scriptSetup) == null ? void 0 : o.lang) === "ts";
    let n = bw(r, {
      id: t,
      sourceMap: true,
      templateOptions: {
        id: t,
        source: ((l = e.descriptor.template) == null ? void 0 : l.content) || "",
        filename: r.filename,
        scoped: true,
        slotted: r.slotted,
        compilerOptions: {
          scopeId: `data-v-${t}`,
          mode: "module"
        }
      }
    }).content;
    if (this.isTypeScript) {
      const u = await Mh(), c = await Lh();
      n = u(n, {
        plugins: [[c]]
      }).code;
    }
    return n ? (n = n.replace("export default", "const _script ="), n = R(n), `
      import {render as __render} from "${this.templateUrl}"
      ${n}
      _script.render = __render;
      _script.components = _app._context.components;
      _script.__scopeId = "data-v-${t}"; //节点的 __scopeId
      export default _script;
    `) : "";
  }
  compilerStyle(e, t) {
    const r = e.descriptor.styles.reduce((i, n) => {
      const a = Cx({
        source: n.content,
        filename: e.descriptor.filename,
        id: t,
        scoped: true
      });
      return `${i}
${a.code}`;
    }, "");
    this.styleEl.innerHTML = r;
  }
  runCode() {
    const e = R(`
    import { createApp,h,render } from 'vue'
    import App from '${this.scriptUrl}'
    const vnode = h(App)
    vnode.appContext = _app._context; // 全局app
    const root = document.querySelector('${this.selector}');
    render(vnode,root)
    `);
    return this.scriptEl && (this.scriptEl.innerHTML = e), e;
  }
  handleError(e) {
    this.onError(e);
  }
  clearError() {
    this.onError([]);
  }
  revokeAllObjectURL() {
    this.templateUrl && URL.revokeObjectURL(this.templateUrl), this.scriptUrl && URL.revokeObjectURL(this.scriptUrl);
  }
};
function Oh(s3, e) {
  return URL.createObjectURL(new Blob([s3], { type: "application/javascript" }));
}
function Nx() {
  return Math.random().toString(36).slice(2, 12);
}
async function Lh() {
  return await import("./index.76c75465-KIOQWNV3.js").then((s3) => s3.i).then((s3) => s3.default);
}
async function Mh() {
  return await import("./babel.dc741a6c-IDURMNMU.js").then((s3) => s3.b).then((s3) => s3.default ? s3.default.transform : s3.transform);
}
async function Ox() {
  return await import("./dist-TQA4IMDM.js").then((s3) => s3.default);
}
export {
  Dx as default
};
/*! Bundled license information:

vitepress-demo-editor/dist/index.64626887.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
  (*! https://mths.be/punycode v1.4.1 by @mathias *)
  (*! https://mths.be/cssesc v3.0.0 by @mathias *)
*/
//# sourceMappingURL=index.64626887-FQN254SK.js.map
