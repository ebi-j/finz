import { useParams } from 'react-router-dom';
import { ReactFlow, useNodesState, useEdgesState, addEdge, Connection, Background, Controls } from '@xyflow/react';
import { useCallback } from 'react';
import { initialNodes, nodeTypes } from './nodes';
import { TableNode } from './nodes/TableNode';
import '@xyflow/react/dist/style.css';

const Canvas = () => {
	const { projectId } = useParams();

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

	const handleNodeClick = (_: React.MouseEvent, node: TableNode) => {
		nodes.forEach((n) => (n.data.focused = n.id === node.id));
	};

	const handlePanelClick = (_: React.MouseEvent) => {
		nodes.forEach((n) => (n.data.focused = false));
	};

	return (
		<ReactFlow
			nodes={nodes}
			nodeTypes={nodeTypes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
			onNodeClick={handleNodeClick}
			onPaneClick={handlePanelClick}
			fitView
		>
			<Background />
		</ReactFlow>
	);
};

export { Canvas };
