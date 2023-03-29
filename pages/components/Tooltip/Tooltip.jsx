import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

const TooltipComponent = ({ children, tooltipText }) => {
  return (
    <Tooltip title={tooltipText} placement="top" arrow>
      <span>{children}</span>
    </Tooltip>
  );
};

export default TooltipComponent;
