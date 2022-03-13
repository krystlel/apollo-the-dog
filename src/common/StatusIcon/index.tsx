import React from 'react';
import classNames from 'classnames';
import './StatusIcon.scss';
import { StatusType } from "../Statuses";

interface StatusIconProps {
  isActive: boolean;
  onClick: () => void;
  status: StatusType;
}

const classNameMapping = {
  AVAILABLE: 'icon-available',
  COMPLETED: 'icon-completed fa-2xl fa-solid fa-circle-check',
  INVALID: 'icon-invalid fa-2xl fa-solid fa-circle-exclamation',
  UNAVAILABLE: 'icon-unavailable'
}

const StatusIcon: React.FC<StatusIconProps> = (
  props: StatusIconProps,
) => {
  const { isActive, onClick, status } = props;
  return (
    <i
      className={classNames('status-icon', classNameMapping[status], {
        active: isActive
      })}
      onClick={onClick}
    />
  )
}

export default StatusIcon;
