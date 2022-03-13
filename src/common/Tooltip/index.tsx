import React from 'react';
import classNames from 'classnames';
import './Tooltip.scss';

interface TooltipProps {
  children: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = (
  props: TooltipProps,
) => {
  const { children, className } = props;
  return (
    <div className={classNames("tooltipContainer", className)}>
      <div className="tooltip">{children}</div>
    </div>
  )
}

export default Tooltip;
