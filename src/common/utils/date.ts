function format(date: string): string {
  return new Date(date).toLocaleDateString();
}

export const dateUtils = {
  format,
};
