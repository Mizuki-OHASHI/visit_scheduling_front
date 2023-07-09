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
