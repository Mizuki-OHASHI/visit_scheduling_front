import { ArrayToCSV } from "@/components/ArrayToCSV";

export const CSVDownloader = (data: Array<Array<any>>) => {
  const fileName = "optimized_schedule.csv";
  const fileContents = ArrayToCSV(data);

  // Create a Blob object with the file contents
  const blob = new Blob([fileContents], { type: "text/csv" });

  // Create a temporary link element to trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;

  // Simulate a click on the link element to start the download
  link.click();

  // Clean up the temporary link element
  link.remove();
};

/*
export const CSVDownloader_utf8 = (data: Array<Array<any>>) => {
  const fileName = "optimized_schedule.csv";
  const fileContents = ArrayToCSV(data);

  // Convert the file contents to a Uint8Array with UTF-8 encoding
  const utf8Encoder = new TextEncoder();
  const fileData = utf8Encoder.encode(fileContents);

  // Create a Blob object with the file data and specify UTF-8 encoding
  const blob = new Blob([fileData], { type: "text/csv;charset=utf-8" });

  // Create a temporary link element to trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;

  // Simulate a click on the link element to start the download
  link.click();

  // Clean up the temporary link element
  link.remove();
};

export const CSVDownloader_shift_js = (data: Array<Array<any>>) => {
  const fileName = "optimized_schedule.csv";
  const fileContents = ArrayToCSV(data);

  // Convert the file contents to a Uint8Array with Shift-JIS encoding
  const sjisEncoder = new TextEncoder();
  const fileData = sjisEncoder.encode(fileContents);

  // Create a Blob object with the file data and specify Shift-JIS encoding
  const blob = new Blob([fileData], { type: "text/csv;charset=shift-jis" });

  // Create a temporary link element to trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;

  // Simulate a click on the link element to start the download
  link.click();

  // Clean up the temporary link element
  link.remove();
};
*/
