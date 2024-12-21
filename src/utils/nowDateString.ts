export enum DateDelimiters {
  Slash = "/",
  Dot = ".",
  Dash = "-",
  Comma = ",",
  Space = " ",
  Underscore = "_",
  Colon = ":",
  Semicolon = ";",
  QuestionMark = "?",
  At = "@",
  Hash = "#",
  Percent = "%",
  Ampersand = "&",
  Pipe = "|",
  Tilde = "~",
  Caret = "^",
  Dollar = "$",
}

const formatDate = (
  d: string | number | Date = new Date(),
  delimiter: DateDelimiters = DateDelimiters.Dash
): string => {
  const date = new Date(d);

  if (date.toString() === "Invalid Date") throw new Error("Invalid Date");

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const array = [year, month, day];

  return array.join(delimiter);
};

export default formatDate;
