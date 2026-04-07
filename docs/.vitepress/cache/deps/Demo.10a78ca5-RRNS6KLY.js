import {
  O,
  P,
  v
} from "./chunk-ZSBWHPK2.js";
import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  defineComponent,
  inject,
  nextTick,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-MGKBEPMD.js";
import "./chunk-5FUTL2UF.js";

// node_modules/vitepress-demo-editor/dist/Demo.10a78ca5.js
var Q = "vs-dark";
var X = true;
var Y = [
  {
    foreground: "637777",
    token: "comment"
  },
  {
    foreground: "addb67",
    token: "string"
  },
  {
    foreground: "ecc48d",
    token: "vstring.quoted"
  },
  {
    foreground: "ecc48d",
    token: "variable.other.readwrite.js"
  },
  {
    foreground: "5ca7e4",
    token: "string.regexp"
  },
  {
    foreground: "5ca7e4",
    token: "string.regexp keyword.other"
  },
  {
    foreground: "5f7e97",
    token: "meta.function punctuation.separator.comma"
  },
  {
    foreground: "f78c6c",
    token: "constant.numeric"
  },
  {
    foreground: "f78c6c",
    token: "constant.character.numeric"
  },
  {
    foreground: "addb67",
    token: "variable"
  },
  {
    foreground: "c792ea",
    token: "keyword"
  },
  {
    foreground: "c792ea",
    token: "punctuation.accessor"
  },
  {
    foreground: "c792ea",
    token: "storage"
  },
  {
    foreground: "c792ea",
    token: "meta.var.expr"
  },
  {
    foreground: "c792ea",
    token: "meta.class meta.method.declaration meta.var.expr storage.type.jsm"
  },
  {
    foreground: "c792ea",
    token: "storage.type.property.js"
  },
  {
    foreground: "c792ea",
    token: "storage.type.property.ts"
  },
  {
    foreground: "c792ea",
    token: "storage.type.property.tsx"
  },
  {
    foreground: "82aaff",
    token: "storage.type"
  },
  {
    foreground: "ffcb8b",
    token: "entity.name.class"
  },
  {
    foreground: "ffcb8b",
    token: "meta.class entity.name.type.class"
  },
  {
    foreground: "addb67",
    token: "entity.other.inherited-class"
  },
  {
    foreground: "82aaff",
    token: "entity.name.function"
  },
  {
    foreground: "addb67",
    token: "punctuation.definition.variable"
  },
  {
    foreground: "d3423e",
    token: "punctuation.section.embedded"
  },
  {
    foreground: "d6deeb",
    token: "punctuation.terminator.expression"
  },
  {
    foreground: "d6deeb",
    token: "punctuation.definition.arguments"
  },
  {
    foreground: "d6deeb",
    token: "punctuation.definition.array"
  },
  {
    foreground: "d6deeb",
    token: "punctuation.section.array"
  },
  {
    foreground: "d6deeb",
    token: "meta.array"
  },
  {
    foreground: "d9f5dd",
    token: "punctuation.definition.list.begin"
  },
  {
    foreground: "d9f5dd",
    token: "punctuation.definition.list.end"
  },
  {
    foreground: "d9f5dd",
    token: "punctuation.separator.arguments"
  },
  {
    foreground: "d9f5dd",
    token: "punctuation.definition.list"
  },
  {
    foreground: "d3423e",
    token: "string.template meta.template.expression"
  },
  {
    foreground: "d6deeb",
    token: "string.template punctuation.definition.string"
  },
  {
    foreground: "c792ea",
    fontStyle: "italic",
    token: "italic"
  },
  {
    foreground: "addb67",
    fontStyle: "bold",
    token: "bold"
  },
  {
    foreground: "82aaff",
    token: "constant.language"
  },
  {
    foreground: "82aaff",
    token: "punctuation.definition.constant"
  },
  {
    foreground: "82aaff",
    token: "variable.other.constant"
  },
  {
    foreground: "7fdbca",
    token: "support.function.construct"
  },
  {
    foreground: "7fdbca",
    token: "keyword.other.new"
  },
  {
    foreground: "82aaff",
    token: "constant.character"
  },
  {
    foreground: "82aaff",
    token: "constant.other"
  },
  {
    foreground: "f78c6c",
    token: "constant.character.escape"
  },
  {
    foreground: "addb67",
    token: "entity.other.inherited-class"
  },
  {
    foreground: "d7dbe0",
    token: "variable.parameter"
  },
  {
    foreground: "7fdbca",
    token: "entity.name.tag"
  },
  {
    foreground: "cc2996",
    token: "punctuation.definition.tag.html"
  },
  {
    foreground: "cc2996",
    token: "punctuation.definition.tag.begin"
  },
  {
    foreground: "cc2996",
    token: "punctuation.definition.tag.end"
  },
  {
    foreground: "addb67",
    token: "entity.other.attribute-name"
  },
  {
    foreground: "addb67",
    token: "entity.name.tag.custom"
  },
  {
    foreground: "82aaff",
    token: "support.function"
  },
  {
    foreground: "82aaff",
    token: "support.constant"
  },
  {
    foreground: "7fdbca",
    token: "upport.constant.meta.property-value"
  },
  {
    foreground: "addb67",
    token: "support.type"
  },
  {
    foreground: "addb67",
    token: "support.class"
  },
  {
    foreground: "addb67",
    token: "support.variable.dom"
  },
  {
    foreground: "7fdbca",
    token: "support.constant"
  },
  {
    foreground: "7fdbca",
    token: "keyword.other.special-method"
  },
  {
    foreground: "7fdbca",
    token: "keyword.other.new"
  },
  {
    foreground: "7fdbca",
    token: "keyword.other.debugger"
  },
  {
    foreground: "7fdbca",
    token: "keyword.control"
  },
  {
    foreground: "c792ea",
    token: "keyword.operator.comparison"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.flow.js"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.flow.ts"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.flow.tsx"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.ruby"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.module.ruby"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.class.ruby"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.def.ruby"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.loop.js"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.loop.ts"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.import.js"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.import.ts"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.import.tsx"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.from.js"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.from.ts"
  },
  {
    foreground: "c792ea",
    token: "keyword.control.from.tsx"
  },
  {
    foreground: "ffffff",
    background: "ff2c83",
    token: "invalid"
  },
  {
    foreground: "ffffff",
    background: "d3423e",
    token: "invalid.deprecated"
  },
  {
    foreground: "7fdbca",
    token: "keyword.operator"
  },
  {
    foreground: "c792ea",
    token: "keyword.operator.relational"
  },
  {
    foreground: "c792ea",
    token: "keyword.operator.assignement"
  },
  {
    foreground: "c792ea",
    token: "keyword.operator.arithmetic"
  },
  {
    foreground: "c792ea",
    token: "keyword.operator.bitwise"
  },
  {
    foreground: "c792ea",
    token: "keyword.operator.increment"
  },
  {
    foreground: "c792ea",
    token: "keyword.operator.ternary"
  },
  {
    foreground: "637777",
    token: "comment.line.double-slash"
  },
  {
    foreground: "cdebf7",
    token: "object"
  },
  {
    foreground: "ff5874",
    token: "constant.language.null"
  },
  {
    foreground: "d6deeb",
    token: "meta.brace"
  },
  {
    foreground: "c792ea",
    token: "meta.delimiter.period"
  },
  {
    foreground: "d9f5dd",
    token: "punctuation.definition.string"
  },
  {
    foreground: "ff5874",
    token: "constant.language.boolean"
  },
  {
    foreground: "ffffff",
    token: "object.comma"
  },
  {
    foreground: "7fdbca",
    token: "variable.parameter.function"
  },
  {
    foreground: "80cbc4",
    token: "support.type.vendor.property-name"
  },
  {
    foreground: "80cbc4",
    token: "support.constant.vendor.property-value"
  },
  {
    foreground: "80cbc4",
    token: "support.type.property-name"
  },
  {
    foreground: "80cbc4",
    token: "meta.property-list entity.name.tag"
  },
  {
    foreground: "57eaf1",
    token: "meta.property-list entity.name.tag.reference"
  },
  {
    foreground: "f78c6c",
    token: "constant.other.color.rgb-value punctuation.definition.constant"
  },
  {
    foreground: "ffeb95",
    token: "constant.other.color"
  },
  {
    foreground: "ffeb95",
    token: "keyword.other.unit"
  },
  {
    foreground: "c792ea",
    token: "meta.selector"
  },
  {
    foreground: "fad430",
    token: "entity.other.attribute-name.id"
  },
  {
    foreground: "80cbc4",
    token: "meta.property-name"
  },
  {
    foreground: "c792ea",
    token: "entity.name.tag.doctype"
  },
  {
    foreground: "c792ea",
    token: "meta.tag.sgml.doctype"
  },
  {
    foreground: "d9f5dd",
    token: "punctuation.definition.parameters"
  },
  {
    foreground: "ecc48d",
    token: "string.quoted"
  },
  {
    foreground: "ecc48d",
    token: "string.quoted.double"
  },
  {
    foreground: "ecc48d",
    token: "string.quoted.single"
  },
  {
    foreground: "addb67",
    token: "support.constant.math"
  },
  {
    foreground: "addb67",
    token: "support.type.property-name.json"
  },
  {
    foreground: "addb67",
    token: "support.constant.json"
  },
  {
    foreground: "c789d6",
    token: "meta.structure.dictionary.value.json string.quoted.double"
  },
  {
    foreground: "80cbc4",
    token: "string.quoted.double.json punctuation.definition.string.json"
  },
  {
    foreground: "ff5874",
    token: "meta.structure.dictionary.json meta.structure.dictionary.value constant.language"
  },
  {
    foreground: "d6deeb",
    token: "variable.other.ruby"
  },
  {
    foreground: "ecc48d",
    token: "entity.name.type.class.ruby"
  },
  {
    foreground: "ecc48d",
    token: "keyword.control.class.ruby"
  },
  {
    foreground: "ecc48d",
    token: "meta.class.ruby"
  },
  {
    foreground: "7fdbca",
    token: "constant.language.symbol.hashkey.ruby"
  },
  {
    foreground: "e0eddd",
    background: "a57706",
    fontStyle: "italic",
    token: "meta.diff"
  },
  {
    foreground: "e0eddd",
    background: "a57706",
    fontStyle: "italic",
    token: "meta.diff.header"
  },
  {
    foreground: "ef535090",
    fontStyle: "italic",
    token: "markup.deleted"
  },
  {
    foreground: "a2bffc",
    fontStyle: "italic",
    token: "markup.changed"
  },
  {
    foreground: "a2bffc",
    fontStyle: "italic",
    token: "meta.diff.header.git"
  },
  {
    foreground: "a2bffc",
    fontStyle: "italic",
    token: "meta.diff.header.from-file"
  },
  {
    foreground: "a2bffc",
    fontStyle: "italic",
    token: "meta.diff.header.to-file"
  },
  {
    foreground: "219186",
    background: "eae3ca",
    token: "markup.inserted"
  },
  {
    foreground: "d3201f",
    token: "other.package.exclude"
  },
  {
    foreground: "d3201f",
    token: "other.remove"
  },
  {
    foreground: "269186",
    token: "other.add"
  },
  {
    foreground: "ff5874",
    token: "constant.language.python"
  },
  {
    foreground: "82aaff",
    token: "variable.parameter.function.python"
  },
  {
    foreground: "82aaff",
    token: "meta.function-call.arguments.python"
  },
  {
    foreground: "b2ccd6",
    token: "meta.function-call.python"
  },
  {
    foreground: "b2ccd6",
    token: "meta.function-call.generic.python"
  },
  {
    foreground: "d6deeb",
    token: "punctuation.python"
  },
  {
    foreground: "addb67",
    token: "entity.name.function.decorator.python"
  },
  {
    foreground: "8eace3",
    token: "source.python variable.language.special"
  },
  {
    foreground: "82b1ff",
    token: "markup.heading.markdown"
  },
  {
    foreground: "c792ea",
    fontStyle: "italic",
    token: "markup.italic.markdown"
  },
  {
    foreground: "addb67",
    fontStyle: "bold",
    token: "markup.bold.markdown"
  },
  {
    foreground: "697098",
    token: "markup.quote.markdown"
  },
  {
    foreground: "80cbc4",
    token: "markup.inline.raw.markdown"
  },
  {
    foreground: "ff869a",
    token: "markup.underline.link.markdown"
  },
  {
    foreground: "ff869a",
    token: "markup.underline.link.image.markdown"
  },
  {
    foreground: "d6deeb",
    token: "string.other.link.title.markdown"
  },
  {
    foreground: "d6deeb",
    token: "string.other.link.description.markdown"
  },
  {
    foreground: "82b1ff",
    token: "punctuation.definition.string.markdown"
  },
  {
    foreground: "82b1ff",
    token: "punctuation.definition.string.begin.markdown"
  },
  {
    foreground: "82b1ff",
    token: "punctuation.definition.string.end.markdown"
  },
  {
    foreground: "82b1ff",
    token: "meta.link.inline.markdown punctuation.definition.string"
  },
  {
    foreground: "7fdbca",
    token: "punctuation.definition.metadata.markdown"
  },
  {
    foreground: "82b1ff",
    token: "beginning.punctuation.definition.list.markdown"
  }
];
var Z = {
  "editor.foreground": "#d6deeb",
  "editor.background": "#18181c",
  "editor.selectionBackground": "#5f7e9779",
  "editor.lineHighlightBackground": "#010E17",
  "editorCursor.foreground": "#80a4c2",
  "editorWhitespace.foreground": "#2e2040",
  "editorIndentGuide.background": "#5e81ce52",
  "editor.selectionHighlightBorder": "#122d42"
};
var ee = {
  base: Q,
  inherit: X,
  rules: Y,
  colors: Z
};
var oe = "vs";
var te = true;
var ne = [
  {
    foreground: "008e00",
    token: "comment"
  },
  {
    foreground: "7d4726",
    token: "meta.preprocessor"
  },
  {
    foreground: "7d4726",
    token: "keyword.control.import"
  },
  {
    foreground: "df0002",
    token: "string"
  },
  {
    foreground: "3a00dc",
    token: "constant.numeric"
  },
  {
    foreground: "c800a4",
    token: "constant.language"
  },
  {
    foreground: "275a5e",
    token: "constant.character"
  },
  {
    foreground: "275a5e",
    token: "constant.other"
  },
  {
    foreground: "c800a4",
    token: "variable.language"
  },
  {
    foreground: "c800a4",
    token: "variable.other"
  },
  {
    foreground: "c800a4",
    token: "keyword"
  },
  {
    foreground: "c900a4",
    token: "storage"
  },
  {
    foreground: "438288",
    token: "entity.name.class"
  },
  {
    foreground: "790ead",
    token: "entity.name.tag"
  },
  {
    foreground: "450084",
    token: "entity.other.attribute-name"
  },
  {
    foreground: "450084",
    token: "support.function"
  },
  {
    foreground: "450084",
    token: "support.constant"
  },
  {
    foreground: "790ead",
    token: "support.type"
  },
  {
    foreground: "790ead",
    token: "support.class"
  },
  {
    foreground: "790ead",
    token: "support.other.variable"
  }
];
var re = {
  "editor.foreground": "#000000",
  "editor.background": "#FFFFFF",
  "editor.selectionBackground": "#B5D5FF",
  "editor.lineHighlightBackground": "#00000012",
  "editorCursor.foreground": "#000000",
  "editorWhitespace.foreground": "#BFBFBF"
};
var ae = {
  base: oe,
  inherit: te,
  rules: ne,
  colors: re
};
var de = defineComponent({
  __name: "Edit",
  props: {
    initialValue: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "vs"
    },
    language: {
      type: String,
      default: "html"
    }
  },
  emits: ["change"],
  setup(u, { expose: c, emit: m }) {
    const g = u, s = ref(null);
    let n;
    return onMounted(async () => {
      const o = await O(), l = document.documentElement.classList.contains("dark");
      if (window.monaco || (window.monaco = o), !s.value)
        return;
      o.editor.defineTheme("iDark", ee), o.editor.defineTheme("iLight", ae);
      let f = "html", v2 = "html";
      ["jsx", "tsx"].includes(g.language) && (f = "tsx", v2 = "typescript"), n = o.editor.create(s.value, {
        theme: l ? "iDark" : "iLight",
        automaticLayout: true,
        tabSize: 2,
        fixedOverflowWidgets: true,
        minimap: { enabled: false },
        scrollbar: {
          handleMouseWheel: false
        },
        fontSize: 14
      });
      const b = o.Uri.file(`${P()}.${f}`), _ = o.editor.createModel(g.initialValue, v2, b);
      n.setModel(_), n.onDidChangeModelContent((w) => {
        const y = n.getValue();
        m("change", y);
      }), n.onDidBlurEditorText(() => {
        n.updateOptions({
          scrollbar: {
            handleMouseWheel: false
          }
        });
      }), n.onDidFocusEditorText(() => {
        n.updateOptions({
          scrollbar: {
            handleMouseWheel: true
          }
        });
      }), new MutationObserver((w) => {
        w.forEach((y) => {
          y.target.classList.contains("dark") ? n.updateOptions({
            theme: "iDark"
          }) : n.updateOptions({ theme: "vs" });
        });
      }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }), c({
      reset() {
        n.setValue(g.initialValue);
      }
    }), (o, l) => (openBlock(), createElementBlock("div", {
      class: "monaco",
      ref_key: "monacoContainer",
      ref: s
    }, null, 512));
  }
});
var L = (u, c) => {
  const m = u.__vccOpts || u;
  for (const [g, s] of c)
    m[g] = s;
  return m;
};
var ie = L(de, [["__scopeId", "data-v-a029ce32"]]);
var F = (u) => (pushScopeId("data-v-f5114afc"), u = u(), popScopeId(), u);
var ue = {
  key: 0,
  class: "error"
};
var ce = { key: 0 };
var fe = {
  key: 0,
  class: "tools"
};
var se = F(() => createBaseVNode("svg", {
  t: "1652853672207",
  class: "icon",
  viewBox: "0 0 1130 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3224"
}, [
  createBaseVNode("path", {
    d: "M1126.586009 306.125494l-204.026536 204.026536-204.026535-204.026536h148.939371a408.053071 408.053071 0 1 0 24.99325 357.046437h108.64413a511.953584 511.953584 0 1 1-20.402653-357.046437H1126.586009z",
    "p-id": "3225"
  })
], -1));
var le = [
  se
];
var ge = F(() => createBaseVNode("span", null, "可编辑", -1));
var ke = { key: 0 };
var pe = createTextVNode(" 隐藏代码 ");
var me = F(() => createBaseVNode("svg", {
  t: "1655722520234",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "6572",
  width: "14",
  height: "14"
}, [
  createBaseVNode("path", {
    d: "M946.33106 697.353498 541.30749 284.093337c-15.690354-16.009625-41.469484-16.009625-57.160861 0l-405.024593 413.260162c-24.819269 25.323758-6.877641 68.028373 28.579919 68.028373l810.048163 0C953.209724 765.381871 971.150328 722.677257 946.33106 697.353498z",
    "p-id": "6573"
  })
], -1));
var be = [
  pe,
  me
];
var ye = createTextVNode(" 展示代码 ");
var he = F(() => createBaseVNode("svg", {
  t: "1655722463269",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "6417",
  width: "14",
  height: "14"
}, [
  createBaseVNode("path", {
    d: "M79.123059 327.850933l405.024593 413.260162c15.690354 16.009625 41.469484 16.009625 57.160861 0l405.02357-413.260162c24.819269-25.323758 6.877641-68.028373-28.579919-68.028373L107.704001 259.82256C72.245418 259.82256 54.30379 302.527175 79.123059 327.850933z",
    "p-id": "6418"
  })
], -1));
var ve = [
  ye,
  he
];
var we = defineComponent({
  __name: "Demo",
  props: {
    initialValue: null,
    direction: null,
    lang: null,
    height: null
  },
  setup(u) {
    const c = u, { ms: m, defaultDirection: g, handleError: s } = inject(v, {
      ms: 30,
      defaultDirection: "row"
    }), n = c.lang === "tsx", o = c.direction ? c.direction : g, l = ref(o == "row"), f = ref([]), v2 = ref(0), b = ref(null), _ = ref(null), x = ref(false), w = "id_" + P(), y = () => {
      var S;
      const t = ((S = b.value) == null ? void 0 : S.clientHeight) || 0, e = /\d+/.exec(c.height || ""), r = Number(e ? e[0] : 0);
      v2.value = Math.max(t, r);
    }, D = () => {
      var t;
      (t = _.value) == null || t.reset();
    };
    let C, j;
    onMounted(async () => {
      const { default: t } = await import("./index.64626887-FQN254SK.js");
      await nextTick(), C = new t(`#${w}`, c.lang, n, (e) => {
        f.value = e, s == null || s(e);
      }), C.compileCode(c.initialValue), y(), j = new MutationObserver(y), b.value && j.observe(b.value, { childList: true });
    }), onUnmounted(() => {
      j.disconnect();
    });
    const O2 = /* @__PURE__ */ ((t, e) => {
      let r;
      return (...S) => {
        r && clearTimeout(r), r = setTimeout(() => {
          t.apply(this, S);
        }, e);
      };
    })((t) => C.compileCode(t), m), q = (t) => {
      !C || O2(t);
    };
    return (t, e) => (openBlock(), createElementBlock("div", {
      class: "demo",
      style: normalizeStyle({
        flexDirection: unref(o)
      })
    }, [
      createBaseVNode("div", {
        class: "view-wrap",
        style: normalizeStyle({ borderRight: unref(o) === "column" ? "0" : void 0 })
      }, [
        createBaseVNode("div", {
          class: "view",
          id: w,
          ref_key: "viewRef",
          ref: b
        }, null, 512),
        f.value.length ? (openBlock(), createElementBlock("div", ue, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (r) => (openBlock(), createElementBlock("div", null, toDisplayString(r.message), 1))), 256)),
          f.value.length > 5 ? (openBlock(), createElementBlock("div", ce, "...")) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 4),
      createBaseVNode("div", {
        class: "edit-wrap",
        onMouseenter: e[2] || (e[2] = (r) => x.value = true),
        onMouseleave: e[3] || (e[3] = (r) => x.value = false),
        style: normalizeStyle({ flex: unref(o) === "column" ? "0" : "4 0 40%" })
      }, [
        x.value && l.value ? (openBlock(), createElementBlock("div", fe, [
          createBaseVNode("span", {
            title: "重置代码",
            class: "reset-code",
            onClick: D
          }, le),
          ge
        ])) : createCommentVNode("", true),
        l.value ? (openBlock(), createBlock(ie, {
          key: 1,
          class: "edit",
          style: normalizeStyle({
            height: v2.value + "px",
            minHeight: unref(o) === "row" ? "200px" : "300px"
          }),
          "initial-value": t.$props.initialValue,
          onChange: q,
          language: t.$props.lang,
          ref_key: "editRef",
          ref: _
        }, createSlots({ _: 2 }, [
          f.value.length ? {
            name: "error",
            fn: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(f.value.slice(0, 4), (r) => (openBlock(), createElementBlock("div", null, toDisplayString(r.message), 1))), 256)),
              f.value.length > 4 ? (openBlock(), createElementBlock("div", ke, "...")) : createCommentVNode("", true)
            ])
          } : void 0
        ]), 1032, ["style", "initial-value", "language"])) : createCommentVNode("", true),
        unref(o) === "column" && l.value ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "demo-control",
          onClick: e[0] || (e[0] = (r) => l.value = false)
        }, be)) : createCommentVNode("", true),
        unref(o) === "column" && !l.value ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "demo-control",
          onClick: e[1] || (e[1] = (r) => l.value = true)
        }, ve)) : createCommentVNode("", true)
      ], 36)
    ], 4));
  }
});
var Se = L(we, [["__scopeId", "data-v-f5114afc"]]);
export {
  Se as default
};
//# sourceMappingURL=Demo.10a78ca5-RRNS6KLY.js.map
