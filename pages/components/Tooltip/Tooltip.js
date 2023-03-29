import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Tooltip = ({ children, tooltipText, id, ...props }) => {
  return (
    <>
      <span data-tooltip-id={id} data-tooltip-content={tooltipText} {...props}>
        {children}
      </span>
      <ReactTooltip place="top" effect="solid" id={id}>
        {tooltipText}
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
