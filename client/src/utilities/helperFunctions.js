export const timeConverter = UNIX_timestamp => {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "October",
    "November",
    "Dezember"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  //   var hour = a.getHours();
  //   var min = a.getMinutes();
  //   var sec = a.getSeconds();
  //   var time =
  //   date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  var time = date + " " + month + " " + year;
  return time;
};
