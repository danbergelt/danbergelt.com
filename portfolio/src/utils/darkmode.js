export const addDark = () => {
  localStorage.setItem('dark', true);
}

export const removeDark = () => {
  localStorage.removeItem('dark');
}