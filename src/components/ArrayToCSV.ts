export const ArrayToCSV = (arr: Array<Array<any>>): string => {
  const csv = arr
    .map((r) => {
      return r.join(",");
    })
    .join("\r\n");
  console.log(csv);
  return csv;
};
