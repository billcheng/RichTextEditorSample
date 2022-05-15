import { useState } from "react";
import JsxParser from "react-jsx-parser";
import ImageLink from "./component/ImageLink";
import RichTextEditor from "./component/RichTextEditor";

function App() {
  const [content, setContent] = useState(
    '<ImageLink url="https://i.imgur.com/nBljrDU.jpeg">Hello World</ImageLink>',
  );
  const handleContentChange = (newContent) => {
    setContent(newContent);
  };
  const handleHTMLChange = (newHTML) => {
    setContent(newHTML.target.value);
  };
  return (
    <>
      <h1>Editor</h1>
      <div style={{ margin: "5px 5px" }}>
        <RichTextEditor content={content} onBlur={handleContentChange} />
      </div>
      <hr />
      <h1>HTML Output</h1>
      <div style={{ margin: "0 5px" }}>
        <textarea
          style={{ width: "calc(100% - 1em)" }}
          value={content}
          onChange={handleHTMLChange}
        />
      </div>
      <hr />
      <h1>Runtime</h1>
      <JsxParser
        components={{ ImageLink }}
        jsx={content}
        allowUnknownElements
        showWarnings
      />
    </>
  );
}

export default App;
