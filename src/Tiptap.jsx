import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Extension from "./Extension";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Extension],
    content: '<react-component count="0"></react-component>'
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
