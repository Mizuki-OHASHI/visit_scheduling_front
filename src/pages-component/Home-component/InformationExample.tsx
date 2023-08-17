import { PreviewTable } from "@/components/PreviewTable";
import { Group } from "@mantine/core";
import { FC } from "react";

export const InformationExample: FC = () => {
  const data = [
    ["氏名", "入会期", "性別", "直近の訪問", "運転", "担当"],
    [
      "任意の文字列",
      "8 or 9 or 10",
      "0=男 1=女",
      "202x/xx/xx",
      "0=無免許 1=要補助 2=一人前",
      "任意の文字列",
    ],
  ];

  return (
    <>
      <Group position="center" mt={16}>
        <h4>メンバー情報 (CSV ファイル) の形式</h4>
      </Group>
      <Group position="center" mb={16}>
        <PreviewTable data={data} />
      </Group>
    </>
  );
};
