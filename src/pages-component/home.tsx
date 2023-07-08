import { FC, useEffect, useState } from "react";
import {
  IconMathMin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
} from "@tabler/icons-react";
import { CSVReader } from "@/components/CSVReader";
import { Affix, Group } from "@mantine/core";

import type { CSVType } from "@/components/CSVReader";
import { PreviewTable } from "@/components/PreviewTable";
import { Opt, RequestOptimize } from "@/components/RequestOptimize";
import { ShowResult } from "@/pages-component/ShowResult";
import { MyButton } from "@/components/MyButton";

/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */

export const Home: FC = () => {
  const [chouseisan, setChouseisan] = useState<CSVType>({});
  const [memberInfo, setMemberInfo] = useState<CSVType>({});
  const [opt, setOpt] = useState<Opt>({
    status: "not optimized yet",
  });

  const iconSize = 64;

  useEffect(() => console.log(chouseisan.data), [chouseisan]);

  const handleSubmit = async () => {
    console.log("optimizing...");
    if (chouseisan.data && memberInfo.data) {
      RequestOptimize(chouseisan.data, memberInfo.data, setOpt);
    }
  };

  return (
    <div className="home">
      <Affix position={{ top: 0, right: 0, left: 0 }}>
        <Group position="center" bg="maroon" mb={16}>
          <h1 className="title">訪問組み自動化キャンペーン</h1>
        </Group>
      </Affix>

      {/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */}

      <div className="hor bb top">
        <IconNumber1 size={iconSize} />
        <h3>調整さんをアップロード</h3>
      </div>
      <br />
      <CSVReader setResult={(c: CSVType) => setChouseisan(c)} />
      {chouseisan.data ? (
        <Group position="center" my={16}>
          <PreviewTable data={chouseisan.data?.slice(0) ?? [[]]} />
        </Group>
      ) : (
        <></>
      )}
      <br />

      {/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */}

      <div className="hor bb">
        <IconNumber2 size={iconSize} />
        <h3>メンバーの情報をアップロード</h3>
      </div>
      <br />
      <CSVReader setResult={(c: CSVType) => setMemberInfo(c)} />
      {memberInfo.data ? (
        <Group position="center" my={16}>
          <PreviewTable data={memberInfo.data} />
        </Group>
      ) : (
        <></>
      )}
      <br />

      {/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */}

      <div className="hor bb">
        <IconNumber3 size={iconSize} />
        <h3>訪問組み最適化を実行</h3>
      </div>

      <MyButton
        values="訪問組み最適化を実行"
        onSubmit={() => {
          handleSubmit();
        }}
        icon={<IconMathMin size={32} />}
      />

      {/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */}

      <div className="hor bb">
        <IconNumber4 size={iconSize} />
        <h3>結果の確認とダウンロード</h3>
      </div>
      {opt.status === "not optimized yet" ? <></> : <ShowResult opt={opt} />}
    </div>
  );
};
