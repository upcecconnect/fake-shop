export const asCurrency = (value: number): string => {
  try {
    if (!value) {
      return '0.00';
    }
    const price = value / 100;
    if (isNaN(price)) {
      throw new Error(`Invalid value: ${ value }`);
    }
    return price.toFixed(2);
  } catch (error) {
    console.log(error);
    return '0.00';
  }
}