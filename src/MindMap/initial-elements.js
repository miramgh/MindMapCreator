import React from 'react';
import { MarkerType } from 'react-flow-renderer';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

export const nodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          Hello <strong>I will show you how to create Mind Map</strong>
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          This is a <strong> node object</strong>
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          <MDEditor.Markdown 
              source={"**Add new nodes from + icon**"}
              rehypePlugins={[[rehypeSanitize]]}
         />
        </>
      ),
    },
    position: { x: 400, y: 100 },
    
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: {
      label: (
        <>
          <MDEditor.Markdown 
              source={"**Hit Backspace to remove node**"}
              rehypePlugins={[[rehypeSanitize]]}
         />
        </>
      )
    },
  },
  {
    id: '5',
    data: {
      label: (
        <>
           <strong>Adjust the Styles </strong>
        </>
      ),
    },
    position: { x: 250, y: 325 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <>
           <strong>Connect them from the upper dot of the rectangle</strong>
        </>
      ),
    },
    position: { x: 100, y: 480 },
  },
  {
    id: '7',
    type: 'output',
    data: { label:
       'Take screenshot from the upper right icon' },
    position: { x: 400, y: 450 },
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', label: '' },
  { id: 'e1-3', source: '1', target: '3' },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    label: '',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    label: '',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    label: '',
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'step',
    style: { stroke: '#f6ab6c' },
    label: '',
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
];
