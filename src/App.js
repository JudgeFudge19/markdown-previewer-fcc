import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
let marked = require("marked");

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, language) {
    const hljs = require("highlight.js");
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default function App() {
  const [value, setValue] = useState({
    value:
      "# This is how you write a h1\n\n## This is how you write a h2\n\nSometimes you gotta go on [Netflix](http://shorturl.at/atuD2) and chillax\n\nYou have to `code` on the daily\n\n> Gotta throw in a **blockquote** too\n\nAnd get schwifty\n\n![Like Rick](data:image/jpeg;base64,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)\n\nBecause \n- Life is too short\n- Moms spaghetti\n\nAnd finally\n\n    function yolo(you)    { \n\n    liveHard(you)\n\n    }\n\ncheers"
  });

  const onChange = e => {
    setValue({ value: e.target.value });
  };

  return (
    <div className="App">
      <Header />
      <Editor onChange={onChange} value={value.value} />
      <Preview value={{ __html: marked(value.value) }} />
    </div>
  );
}
