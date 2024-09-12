export const rules = {
  minLength: (minLength: number) => (value: string) => value.length > minLength || 'Value is too short',
  required: (value: string) => !!value || 'Required',
};