import React, { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import pagedown from "pagedown";


export default function MarkdownEditor({value , setValue}) {
 

  
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <MDEditor.Markdown 
        source={value}
        rehypePlugins={[[rehypeSanitize]]}
         />
    </div>
  );
}