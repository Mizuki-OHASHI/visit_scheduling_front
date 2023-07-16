import { CSVDownloader } from "@/components/CSVDownloader";
import { MyButton } from "@/components/MyButton";
import { Opt } from "@/components/RequestOptimize";
import { PreviewTable } from "@/components/PreviewTable";
import { Group, Space } from "@mantine/core";
import { IconFileDownload } from "@tabler/icons-react";
import { FC } from "react";

type Props = {
  opt: Opt;
};
export const ShowResult: FC<Props> = ({ opt }) => {
  const { visitinfo, visitschedule } = opt;
  return (
    <>
      <Group position="center" my={32} className="visitInfo">
        <h3>基本情報</h3>
        <table>
          <tbody>
            <tr>
              <td>訪問回数</td>
              <td>{visitinfo?.visittime} 回</td>
            </tr>
            <tr>
              <td>回答者数</td>
              <td>{visitinfo?.respondents} 人</td>
            </tr>
            <tr>
              <td>訪問日</td>
              <td>{visitinfo?.visitdate.join("\t")}</td>
            </tr>
            <tr>
              <td>先輩ドライバー</td>
              <td>
                {visitinfo?.seniordriver.length ?? 0 > 0
                  ? visitinfo?.seniordriver.join("\t")
                  : "なし"}
              </td>
            </tr>
          </tbody>
        </table>
      </Group>
      <Group position="center" my={32}>
        <PreviewTable data={visitschedule ?? [[]]} />
      </Group>
      <div>
        <MyButton
          values="ダウンロード (CSV形式)"
          disabled={visitinfo ? false : true}
          onSubmit={() => CSVDownloader(visitschedule ?? [[]])}
          icon={<IconFileDownload size={32} />}
        />
      </div>
      <Space h={64} />
    </>
  );
};
