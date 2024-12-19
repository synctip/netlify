const nowDateString = (
  d: string | number | Date = new Date().toString()
): string => {
  if (d.toString() === "Invalid Date") {
    return new Date().toString();
  }

  return d.toString();
};

export default nowDateString;
