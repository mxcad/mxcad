import {
  wp
} from "./chunk-V73TLIZF.js";
import "./chunk-5FUTL2UF.js";

// node_modules/vitepress-demo-editor/dist/liquid.e794626a.js
var s = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var u = Object.prototype.hasOwnProperty;
var m = (i, e, a, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let t of c(e))
      !u.call(i, t) && (a || t !== "default") && s(i, t, { get: () => e[t], enumerable: !(o = d(e, t)) || o.enumerable });
  return i;
};
var r = {};
m(r, wp);
var n = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var w = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
  brackets: [
    ["<!--", "-->"],
    ["<", ">"],
    ["{{", "}}"],
    ["{%", "%}"],
    ["{", "}"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "%", close: "%" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "<", close: ">" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  onEnterRules: [
    {
      beforeText: new RegExp(`<(?!(?:${n.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
      afterText: /^<\/(\w[\w\d]*)\s*>$/i,
      action: {
        indentAction: r.languages.IndentAction.IndentOutdent
      }
    },
    {
      beforeText: new RegExp(`<(?!(?:${n.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
      action: { indentAction: r.languages.IndentAction.Indent }
    }
  ]
};
var f = {
  defaultToken: "",
  tokenPostfix: "",
  builtinTags: [
    "if",
    "else",
    "elseif",
    "endif",
    "render",
    "assign",
    "capture",
    "endcapture",
    "case",
    "endcase",
    "comment",
    "endcomment",
    "cycle",
    "decrement",
    "for",
    "endfor",
    "include",
    "increment",
    "layout",
    "raw",
    "endraw",
    "render",
    "tablerow",
    "endtablerow",
    "unless",
    "endunless"
  ],
  builtinFilters: [
    "abs",
    "append",
    "at_least",
    "at_most",
    "capitalize",
    "ceil",
    "compact",
    "date",
    "default",
    "divided_by",
    "downcase",
    "escape",
    "escape_once",
    "first",
    "floor",
    "join",
    "json",
    "last",
    "lstrip",
    "map",
    "minus",
    "modulo",
    "newline_to_br",
    "plus",
    "prepend",
    "remove",
    "remove_first",
    "replace",
    "replace_first",
    "reverse",
    "round",
    "rstrip",
    "size",
    "slice",
    "sort",
    "sort_natural",
    "split",
    "strip",
    "strip_html",
    "strip_newlines",
    "times",
    "truncate",
    "truncatewords",
    "uniq",
    "upcase",
    "url_decode",
    "url_encode",
    "where"
  ],
  constants: ["true", "false"],
  operators: ["==", "!=", ">", "<", ">=", "<="],
  symbol: /[=><!]+/,
  identifier: /[a-zA-Z_][\w]*/,
  tokenizer: {
    root: [
      [/\{\%\s*comment\s*\%\}/, "comment.start.liquid", "@comment"],
      [/\{\{/, { token: "@rematch", switchTo: "@liquidState.root" }],
      [/\{\%/, { token: "@rematch", switchTo: "@liquidState.root" }],
      [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
      [/(<)([:\w]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/(<\/)([\w\-]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/</, "delimiter.html"],
      [/\{/, "delimiter.html"],
      [/[^<{]+/]
    ],
    comment: [
      [/\{\%\s*endcomment\s*\%\}/, "comment.end.liquid", "@pop"],
      [/./, "comment.content.liquid"]
    ],
    otherTag: [
      [
        /\{\{/,
        {
          token: "@rematch",
          switchTo: "@liquidState.otherTag"
        }
      ],
      [
        /\{\%/,
        {
          token: "@rematch",
          switchTo: "@liquidState.otherTag"
        }
      ],
      [/\/?>/, "delimiter.html", "@pop"],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [/[ \t\r\n]+/]
    ],
    liquidState: [
      [/\{\{/, "delimiter.output.liquid"],
      [/\}\}/, { token: "delimiter.output.liquid", switchTo: "@$S2.$S3" }],
      [/\{\%/, "delimiter.tag.liquid"],
      [/raw\s*\%\}/, "delimiter.tag.liquid", "@liquidRaw"],
      [/\%\}/, { token: "delimiter.tag.liquid", switchTo: "@$S2.$S3" }],
      { include: "liquidRoot" }
    ],
    liquidRaw: [
      [/^(?!\{\%\s*endraw\s*\%\}).+/],
      [/\{\%/, "delimiter.tag.liquid"],
      [/@identifier/],
      [/\%\}/, { token: "delimiter.tag.liquid", next: "@root" }]
    ],
    liquidRoot: [
      [/\d+(\.\d+)?/, "number.liquid"],
      [/"[^"]*"/, "string.liquid"],
      [/'[^']*'/, "string.liquid"],
      [/\s+/],
      [
        /@symbol/,
        {
          cases: {
            "@operators": "operator.liquid",
            "@default": ""
          }
        }
      ],
      [/\./],
      [
        /@identifier/,
        {
          cases: {
            "@constants": "keyword.liquid",
            "@builtinFilters": "predefined.liquid",
            "@builtinTags": "predefined.liquid",
            "@default": "variable.liquid"
          }
        }
      ],
      [/[^}|%]/, "variable.liquid"]
    ]
  }
};
export {
  w as conf,
  f as language
};
/*! Bundled license information:

vitepress-demo-editor/dist/liquid.e794626a.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.33.8(ed685c1f00d1ff3e2873cec2aae0bd338313c4c2)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/
//# sourceMappingURL=liquid.e794626a-ICO6MHA3.js.map
