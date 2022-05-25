import React , { useState , useRef} from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow ,
  useViewport,
  updateEdge

} from 'react-flow-renderer';
import {RiScreenshot2Line} from 'react-icons/ri'
import { useScreenshot } from 'use-react-screenshot'
import  FileSaver from 'file-saver';
import html2canvas from 'html2canvas';

import TextUpdaterNode from './TextUpdaterNode';

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
import NodesInjector from './NodesInjector';
import MapSideNav from './MapSideNav';

const onInit = (reactFlowInstance) =>{ 
  console.log('flow loaded:', reactFlowInstance)
  console.log(reactFlowInstance.getNodes())
}

const nodeTypes = { textUpdater: TextUpdaterNode };
  //const n = useNodes()
  //console.log(n)


const OverviewFlow = () => {
  const [styles , setStyles] = useState('')
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  const [toggleInjector , setToggleInjector] =useState('hidden__nodesInj');
  

  const treeRef = useRef(null)
  const [ image, takeScreenshot, isLoading, clear ] = useScreenshot({ref:treeRef});
  const element  = document.getElementsByClassName('react-flow__container')



      const downloadImage = async () => {
         html2canvas(element[0], {logging:false }).then((canvas)=>{
          const url = canvas.toDataURL()
         
          FileSaver.saveAs(url, "image.jpg");
        })
       
        
          
      }
  
  const [node , setNode] =useState({})
  const onEdgeUpdate = (oldEdge, newConnection) => setEdges((els) => updateEdge(oldEdge, newConnection, els));


  const handleToggle =()=>{
    if( toggleInjector== 'shown__nodesInj'){

      setToggleInjector('hidden__nodesInj')
    }else{
      setToggleInjector('shown__nodesInj')
    }
   // console.log(toggleInjector)
  }

  return (
    <div className={styles}>
      <button onClick={downloadImage} className="screenshot__btn">
        <RiScreenshot2Line font-size={30}/>
        </button>
       
    <ReactFlow
      ref={treeRef}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onEdgeUpdate={onEdgeUpdate}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      nodeTypes={nodeTypes}
      attributionPosition="top-right"
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return '#fff';
        }}
        nodeBorderRadius={2}
      />
      <Controls />

      <Background color="#FFFFFF" gap={16} />
      
    </ReactFlow>


       <NodesInjector
                 setNode ={setNode} 
                 toggleInjector= {toggleInjector}
                 nodes = {nodes}
                 setNodes = {setNodes}
        />

      
      
      <MapSideNav 
          handleToggle={handleToggle}
          setStyles ={setStyles}
          />
          <img src={image} alt="" />
    </div>
  );
};

export default OverviewFlow;
//<button onClick={()=>pushNode(node)}> ddd</button>