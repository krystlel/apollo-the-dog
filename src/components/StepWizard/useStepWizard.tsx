import { useState } from 'react';
import steps from './steps.constant';
import { Statuses, StatusType } from "../../common/Statuses";

interface StepFormStateType {
  completed: boolean;
  touched: boolean;
}

interface StepsFormStateType {
  locationForm: StepFormStateType;
  bestFriendForm: StepFormStateType;
  lastOwnerForm: StepFormStateType;
  suburbForm: StepFormStateType;
}

const initialFormState: StepFormStateType = {
  completed: false,
  touched: false,
}

const initialStepsFormState: StepsFormStateType = {
  locationForm: initialFormState,
  bestFriendForm: initialFormState,
  lastOwnerForm: initialFormState,
  suburbForm: initialFormState
}

const useStepWizard = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [stepsFormState, setStepsFormState] = useState<StepsFormStateType>(initialStepsFormState);

  const currentStep = steps[activeStepIndex];

  const _setIsCompleted = (isCompleted: boolean): void => {
    const selectedStepForm = steps[activeStepIndex].formName;
    setStepsFormState((prevState) => ({
      ...prevState,
      [selectedStepForm]: {
        touched: true,
        completed: isCompleted
      }
    }))
  }

  const setStepCompleted = () => _setIsCompleted(true);

  const setStepInvalid = () => _setIsCompleted(false);

  // check if step is touched, but input deleted so it is empty again
  const isStepInvalid = (stepIndex: number): boolean => {
    const selectedStepForm = steps[stepIndex].formName;
    return stepsFormState[selectedStepForm].touched && !stepsFormState[selectedStepForm].completed
  }

  const isStepActive = (stepIndex: number): boolean => {
    return activeStepIndex === stepIndex;
  }

  const isStepCompleted = (stepIndex: number): boolean => {
    const selectedStepForm = steps[stepIndex].formName;
    return stepsFormState[selectedStepForm].completed
  }

  const getStepStatus = (stepIndex: number): StatusType => {
    const isPreviousStepCompleted = stepIndex > 0 ? isStepCompleted(stepIndex - 1) : false;

    if (isStepCompleted(stepIndex)) {
      return Statuses.COMPLETED;
    }
    if (isStepInvalid(stepIndex)) {
      return Statuses.INVALID;
    }
    if (isStepActive(stepIndex)) {
      return Statuses.AVAILABLE;
    }
    if (isPreviousStepCompleted) {
      return Statuses.AVAILABLE;
    }
    return Statuses.UNAVAILABLE;
  }

  return {
    activeStepIndex,
    currentStep,
    getStepStatus,
    isStepActive,
    setActiveStepIndex,
    setStepCompleted,
    setStepInvalid,
  }
}

export default useStepWizard;


