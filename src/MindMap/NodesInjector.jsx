import React, { useEffect, useState , useCallback } from 'react'
import MarkdownEditor from './MarkdownEditor'
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

function NodesInjector({setNode , node  ,toggleInjector , nodes , setNodes}) {
    const [content , setContent ]= useState()
    
    
    const [value, setValue] = useState("**Hello world!!!**");
    const [id , setId  ] = useState()
    const [position , setPosition ] = useState()
    const [label , setLabel] = useState()
    //<!--<input type="text" onChange={(e)=>setContent(e.target.value)}/>-->
    document.documentElement.setAttribute('data-color-mode', 'light')
    
    const getNodeId = () => `randomnode_${+new Date()}`;
    const onAdd = useCallback(() => {
      const newNode = {
        id: getNodeId(),
        data: { label: (
          <>
           <MDEditor.Markdown 
                source={value}
                rehypePlugins={[[rehypeSanitize]]}
               />
          </>
        ),
      },
        position: {
          x: Math.random() * window.innerWidth - 100,
          y: Math.random() * window.innerHeight,
        },
      };
      setNodes((nodes) => nodes.concat(newNode));
    }, [setNodes , value]);
  return (
    <div className={toggleInjector}>
            <button className='adder'>Add</button> 
          
                <div className='options'>
                <div className='node__nav'>
                  
                      <MarkdownEditor  value={value} setValue ={setValue}/>
  
            </div>
            </div>
           
        <button onClick={onAdd}
            className ='btn-primary'
            >Done</button>
 </div>

  )
}

export default NodesInjector
/* 

{(value)=>{
          console.log(value)
          pushNode(
            {
                id: '8',
                data: {
                  label: (
                    <>
                     <MDEditor.Markdown 
                          source={value}
                          rehypePlugins={[[rehypeSanitize]]}
                         />
                    </>
                  ),
                },
                position: { x: 130, y: 130 },
              }
            )}}
*/