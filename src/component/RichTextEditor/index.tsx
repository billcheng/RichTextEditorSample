import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import ImageLinkExtension from "./ImageLinkExtension";
import { fromHtml, toHtml } from './htmlConverter'
import classes from './index.module.css'

interface Props {
  content: string;
  onChange?: (content: string) => void;
  onBlur?: (content: string) => void;
}

export default function RichTextEditor({ content, onChange, onBlur }: Props) {
  const editor = useEditor(
    {
      extensions: [StarterKit, ImageLinkExtension],
      content: fromHtml(content),
      onUpdate: ({ editor }) => {
        onChange?.(toHtml(editor.getHTML()));
      },
      onBlur: ({ editor }) => {
        onBlur?.(toHtml(editor.getHTML()));
      },
    },
    [],
  );

  useEffect(() => {
    editor?.commands.setContent(fromHtml(content));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return <EditorContent editor={editor} className={classes.noOutlineOnFocus} />;
}
