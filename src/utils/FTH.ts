const HRS = (value: number): string => {
  const hours = Math.floor(value);
  const minutes = Math.round((value - hours) * 60);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

export default HRS;
