export const formatDate = (isoDate: Date) => {
  if (!isoDate) return null;

  const date = new Date(isoDate);

  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
};
