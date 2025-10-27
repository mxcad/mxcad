import "./chunk-5FUTL2UF.js";

// node_modules/vitepress-demo-editor/dist/shell.7c91b536.js
var e = {
  comments: {
    lineComment: "#"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ]
};
var r = {
  defaultToken: "",
  ignoreCase: true,
  tokenPostfix: ".shell",
  brackets: [
    { token: "delimiter.bracket", open: "{", close: "}" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],
  keywords: [
    "if",
    "then",
    "do",
    "else",
    "elif",
    "while",
    "until",
    "for",
    "in",
    "esac",
    "fi",
    "fin",
    "fil",
    "done",
    "exit",
    "set",
    "unset",
    "export",
    "function"
  ],
  builtins: [
    "ab",
    "awk",
    "bash",
    "beep",
    "cat",
    "cc",
    "cd",
    "chown",
    "chmod",
    "chroot",
    "clear",
    "cp",
    "curl",
    "cut",
    "diff",
    "echo",
    "find",
    "gawk",
    "gcc",
    "get",
    "git",
    "grep",
    "hg",
    "kill",
    "killall",
    "ln",
    "ls",
    "make",
    "mkdir",
    "openssl",
    "mv",
    "nc",
    "node",
    "npm",
    "ping",
    "ps",
    "restart",
    "rm",
    "rmdir",
    "sed",
    "service",
    "sh",
    "shopt",
    "shred",
    "source",
    "sort",
    "sleep",
    "ssh",
    "start",
    "stop",
    "su",
    "sudo",
    "svn",
    "tee",
    "telnet",
    "top",
    "touch",
    "vi",
    "vim",
    "wall",
    "wc",
    "wget",
    "who",
    "write",
    "yes",
    "zsh"
  ],
  startingWithDash: /\-+\w+/,
  identifiersWithDashes: /[a-zA-Z]\w+(?:@startingWithDash)+/,
  symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
  tokenizer: {
    root: [
      [/@identifiersWithDashes/, ""],
      [/(\s)((?:@startingWithDash)+)/, ["white", "attribute.name"]],
      [
        /[a-zA-Z]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@builtins": "type.identifier",
            "@default": ""
          }
        }
      ],
      { include: "@whitespace" },
      { include: "@strings" },
      { include: "@parameters" },
      { include: "@heredoc" },
      [/[{}\[\]()]/, "@brackets"],
      [/@symbols/, "delimiter"],
      { include: "@numbers" },
      [/[,;]/, "delimiter"]
    ],
    whitespace: [
      [/\s+/, "white"],
      [/(^#!.*$)/, "metatag"],
      [/(^#.*$)/, "comment"]
    ],
    numbers: [
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
      [/\d+/, "number"]
    ],
    strings: [
      [/'/, "string", "@stringBody"],
      [/"/, "string", "@dblStringBody"]
    ],
    stringBody: [
      [/'/, "string", "@popall"],
      [/./, "string"]
    ],
    dblStringBody: [
      [/"/, "string", "@popall"],
      [/./, "string"]
    ],
    heredoc: [
      [
        /(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,
        [
          "constants",
          "white",
          "string.heredoc.delimiter",
          "string.heredoc",
          "string.heredoc.delimiter"
        ]
      ]
    ],
    parameters: [
      [/\$\d+/, "variable.predefined"],
      [/\$\w+/, "variable"],
      [/\$[*@#?\-$!0_]/, "variable"],
      [/\$'/, "variable", "@parameterBodyQuote"],
      [/\$"/, "variable", "@parameterBodyDoubleQuote"],
      [/\$\(/, "variable", "@parameterBodyParen"],
      [/\$\{/, "variable", "@parameterBodyCurlyBrace"]
    ],
    parameterBodyQuote: [
      [/[^#:%*@\-!_']+/, "variable"],
      [/[#:%*@\-!_]/, "delimiter"],
      [/[']/, "variable", "@pop"]
    ],
    parameterBodyDoubleQuote: [
      [/[^#:%*@\-!_"]+/, "variable"],
      [/[#:%*@\-!_]/, "delimiter"],
      [/["]/, "variable", "@pop"]
    ],
    parameterBodyParen: [
      [/[^#:%*@\-!_)]+/, "variable"],
      [/[#:%*@\-!_]/, "delimiter"],
      [/[)]/, "variable", "@pop"]
    ],
    parameterBodyCurlyBrace: [
      [/[^#:%*@\-!_}]+/, "variable"],
      [/[#:%*@\-!_]/, "delimiter"],
      [/[}]/, "variable", "@pop"]
    ]
  }
};
export {
  e as conf,
  r as language
};
/*! Bundled license information:

vitepress-demo-editor/dist/shell.7c91b536.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.33.8(ed685c1f00d1ff3e2873cec2aae0bd338313c4c2)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/
//# sourceMappingURL=shell.7c91b536-ZE2O7TS4.js.map
