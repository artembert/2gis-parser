export const StartAppTime = (() => {
  let startDate;
  return {
    getStartTime: () => {
      if (!startDate) {
        startDate = new Date();
      }
      return formatDate(startDate);
    },
  };
})();

function formatDate(date: Date): string {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date).replace(/:/g, ".");
}
