const GetDateTime = () => {
  return GetDate() + " " + GetTime();
};

const GetDate = () => {
  let date = new Date();
  return [
    date.getDate().toString().padStart(2, "0"),
    date.getMonth().toString().padStart(2, "0"),
    date.getFullYear(),
  ].join("-");
};

const GetTime = () => {
  let date = new Date();
  let time =
    (date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12)
      .toString()
      .padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    ":" +
    date.getSeconds().toString().padStart(2, "0");

  let ampm = date.getHours() >= 12 ? "PM" : "AM";
  return time + ampm;
};

export { GetDate, GetDateTime, GetTime };
