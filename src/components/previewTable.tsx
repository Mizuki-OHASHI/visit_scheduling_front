import { FC } from "react";

type Props = {
  data: Array<Array<any>>;
};

export const PreviewTable: FC<Props> = ({ data }) => {
  const addRowH = (row: Array<any>) => {
    return (
      <tr>
        {row.map((e, i) => {
          return <th key={i}>{e}</th>;
        })}
      </tr>
    );
  };

  const addRowD = (row: Array<any>, j: number) => {
    return (
      <tr key={j}>
        {row.map((e, i) => {
          return <td key={i}>{e}</td>;
        })}
      </tr>
    );
  };

  return (
    <table>
      {addRowH(data[0])}
      {data.slice(1).map((r, j) => {
        return addRowD(r, j);
      })}
    </table>
  );
};
