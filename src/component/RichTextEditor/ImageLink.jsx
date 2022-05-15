import { useState } from "react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import classes from "./ImageLink.module.css";
import ImageLinkEditor from "./ImageLinkEditor";

export default function ImageLink(props) {
  const [openEditor, setOpenEditor] = useState(false);
  const handleOpenImageLinkEditorModal = () => {
    setOpenEditor(true);
  };
  const handleEditorClose = (apply, url) => {
    setOpenEditor(false);
    if (apply) {
      props.updateAttributes({
        url,
      });
    }
  };
  return (
    <NodeViewWrapper>
      <div className={classes.imageLink}>
        <span
          contentEditable={false}
          className={classes.tag}
          onClick={handleOpenImageLinkEditorModal}
        >
          IL
        </span>
        <NodeViewContent className={classes.content} />
        <span
          contentEditable={false}
          className={classes.tag}
          onClick={handleOpenImageLinkEditorModal}
        >
          IL
        </span>
      </div>
      {openEditor && (
        <ImageLinkEditor
          url={props.node.attrs.url}
          onClose={handleEditorClose}
        />
      )}
    </NodeViewWrapper>
  );
}
