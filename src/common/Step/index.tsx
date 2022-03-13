import React from 'react';
import classNames from 'classnames';
import { Statuses } from "../Statuses";
import './Step.scss';
import StatusIcon from "../StatusIcon";
import Tooltip from '../Tooltip';

interface StepProps {
  children: string;
  isActive: boolean;
  status: Statuses.AVAILABLE | Statuses.COMPLETED | Statuses.INVALID | Statuses.UNAVAILABLE;
  onClick: () => void;
}

const Step: React.FC<StepProps> = (props: StepProps) => {
  const { children, isActive, onClick, status } = props;

  const onStepClick = () => {
    if (status !== Statuses.UNAVAILABLE) {
      onClick()
    }
  }

  return (
    <div className={classNames("step-item", {
      disabled: status === Statuses.UNAVAILABLE
    })}>
      <StatusIcon isActive={isActive} status={status} onClick={onStepClick} />
      <Tooltip className="step-tooltip">{children}</Tooltip>
    </div>
  )
}

export default Step;
