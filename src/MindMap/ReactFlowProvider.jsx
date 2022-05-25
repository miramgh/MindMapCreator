import { ReactFlowProvider  } from 'react-flow-renderer';
import OverviewFlow from './OverviewFlow'

function FlowWithProvider() {
    
    return (
      <ReactFlowProvider>
        <OverviewFlow />
      </ReactFlowProvider>
    );
  }

export default FlowWithProvider