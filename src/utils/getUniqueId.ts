export const getUniqueId = () => {
  return Date.now() + Math.floor(Math.random() * 9000) + 1000;
};