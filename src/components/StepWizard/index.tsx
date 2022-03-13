import React from 'react';
import './StepWizard.scss';
import Step from '../../common/Step';
import StepForm from '../StepForm';
import steps from './steps.constant';
import useStepWizard from "./useStepWizard";

const StepWizard: React.FC = () => {
  const {
    getStepStatus,
    isStepActive,
    setActiveStepIndex,
    setStepCompleted,
    setStepInvalid,
  } = useStepWizard();

  return (
    <div className="page-content">
      <h1>Help find Apollo, the office dog</h1>
      <p>Each form field is a Required field.  To see the invalid step, type in a value then delete it.</p>
      <div className="step-wizard">
        <div className="step-menu">
          <ul>
            {steps.map((step, index) => {
              const status = getStepStatus(index);
              const isActive = isStepActive(index);
              const onStepClick = () => setActiveStepIndex(index);
              const className = `list-item-${status.toLowerCase()}`;
              return (
                <li key={index} className={className}>
                  <Step
                    isActive={isActive}
                    status={status}
                    onClick={onStepClick}>
                    {step.label}
                  </Step>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="step-content">
          {steps.map((step, index) => {
            // Putting it in an array resets the form state per step
            return isStepActive(index) && (
              <StepForm
                key={index}
                stepLabel={step.label}
                formName={step.formName}
                fieldId={step.fieldId}
                {...{ setStepCompleted, setStepInvalid }}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default StepWizard;
