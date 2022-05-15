import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ImageLink from "./ImageLink";

export default Node.create({
  name: "image-link",

  group: "block",

  content: "inline*",

  addAttributes() {
    return {
      url: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "image-link",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["image-link", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageLink);
  },

});
