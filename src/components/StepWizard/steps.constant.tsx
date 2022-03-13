export interface StepType {
  label: string;
  formName: 'locationForm' | 'bestFriendForm' | 'lastOwnerForm' | 'suburbForm';
  fieldId: string;
}

const steps: StepType[] = [
  {
    label: 'Where did you last see Apollo?',
    formName: 'locationForm',
    fieldId: 'location'
  },
  {
    label: `Who is Apollo's best friend?`,
    formName: 'bestFriendForm',
    fieldId: 'friendName'
  },
  {
    label: `Who was Apollo's last owner?`,
    formName: 'lastOwnerForm',
    fieldId: 'ownerName'
  },
  {
    label: 'Which suburb does he come from?',
    formName: 'suburbForm',
    fieldId: 'suburbName'
  }
]

export default steps;
