export const addDark = () => {
  localStorage.setItem('dark', true);
  console.log('dark');
}

export const removeDark = () => {
  localStorage.removeItem('dark');
  console.log('light');
}