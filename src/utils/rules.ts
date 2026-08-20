export const rules = {
  minLength: (minLength: number) => (value: string) => value.length > minLength || 'Value is too short',
  required: (value: string) => !!value || 'Required',
  cardNumber: (value: string) => {
    const digits = (value || '').replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(digits)) {
      return 'Enter a valid card number';
    }
    let sum = 0;
    let double = false;
    for (let i = digits.length - 1; i >= 0; i -= 1) {
      let digit = Number(digits[i]);
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }
    return sum % 10 === 0 || 'Enter a valid card number';
  },
  fullName: (value: string) => {
    const parts = (value || '').trim().split(/\s+/).filter(Boolean);
    return (parts.length >= 2 && parts.every((part) => part.length >= 2)) || 'Enter first and last name';
  },
};
