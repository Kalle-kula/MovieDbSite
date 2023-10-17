export const getYear = (date: string) => {
  const year = new Date(date).getFullYear();
  return year;
};

export const checkStringLength = (
  allowedStringLength: number,
  stringToCheck?: string,
): string => {
  if (stringToCheck && stringToCheck.length < allowedStringLength)
    return stringToCheck;
  return stringToCheck
    ? stringToCheck.substring(0, allowedStringLength - 3) + "..."
    : "";
};
