import React, { useMemo, useRef } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"

const ReactQuill = dynamic(
  async () => {
    const ReactQuill = (await import("react-quill")).default

    return ({
      forwardedRef,
      ...rest
    }) => <ReactQuill ref={forwardedRef} {...rest} />
  },
  {
    ssr: false,
  },
)

export default function ReactQuillEditor ({ text, onContent }) {
  const quillRef = useRef(null)
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting 
    ['image']
];

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  )

  function imageHandler() {
    if (!quillRef.current) return

    const editor = quillRef.current.getEditor()
    const range = editor.getSelection()
    const value = prompt("Please enter the image URL")

    if (value && range) {
      editor.insertEmbed(range.index, "image", value, "user")
    }
  }

  return (
      <ReactQuill
        forwardedRef={quillRef}
        theme="snow"
        value={text}
        onChange={onContent}
        modules={modules}
      />
  )
}