import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, MouseEvent } from "react";
import ImageLinkExtension from "./ImageLinkExtension";
import { fromHtml, toHtml } from "./htmlConverter";
import classes from "./index.module.css";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import UnderlineExtension from "@tiptap/extension-underline";

interface Props {
  content: string;
  onChange?: (content: string) => void;
  onBlur?: (content: string) => void;
}

export default function RichTextEditor({ content, onChange, onBlur }: Props) {
  const editor = useEditor(
    {
      extensions: [StarterKit, ImageLinkExtension, UnderlineExtension],
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
    editor?.commands?.setContent(fromHtml(content));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const bold = editor?.isActive("bold") ? "bold" : "";
  const italic = editor?.isActive("italic") ? "italic" : "";
  const underlined = editor?.isActive("underline") ? "underlined" : "";
  const formats = [bold, italic, underlined].filter((format) => format);

  const handleFormatChange = (
    event: MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    if (newFormats.includes('bold')) {
      editor?.commands.setBold();
    } else {
      editor?.commands.unsetBold();
    }

    if (newFormats.includes("italic")) {
      editor?.commands.setItalic();
    } else {
      editor?.commands.unsetItalic();
    }

    if (newFormats.includes("underlined")) {
      editor?.commands.setUnderline();
    } else {
      editor?.commands.unsetUnderline();
    }
  };

  return (
    <>
      <div>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChange}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <EditorContent editor={editor} className={classes.noOutlineOnFocus} />
    </>
  );
}
