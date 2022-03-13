import React, { useState } from 'react';
import './StepForm.scss';

interface StepFormProps {
  fieldId: string;
  formName: string;
  setStepInvalid: () => void;
  setStepCompleted: () => void;
  stepLabel: string;
}

type ChangeEvent = React.ChangeEvent<{
  name: string | undefined;
  value: string | undefined;
}>

const StepForm: React.FC<StepFormProps> = (props: StepFormProps) => {
  const { fieldId, formName, setStepInvalid, setStepCompleted, stepLabel } = props;

  // Putting the form state here doesn't keep the state when it goes to the next step
  // It would need to be moved out and saved as an array if we want all values at the end
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = (event: ChangeEvent) => {
    const inputValue: string = event?.target?.value ?? '';
    setInputValue(inputValue);
    validateField(inputValue);
  }

  const validateField = (fieldValue: string): void => {
    const isValid = Boolean(fieldValue && fieldValue !== '');
    return isValid
      ? setStepCompleted()
      : setStepInvalid();
  }

  // TODO: Extract out input field from form if there is more than one text field per step
  return (
    <form name={formName}>
      <h2>{stepLabel}</h2>
      <label htmlFor={fieldId} className="step-field-label">{fieldId}</label>
      <input
        autoFocus
        id={fieldId}
        name={fieldId}
        type="text"
        required
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
}

export default StepForm;
