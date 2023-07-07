import { FC, useEffect, useState } from "react";
import {
  IconMathMin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
} from "@tabler/icons-react";
import { CSVReader } from "@/components/CSVReader";
import { Affix, Button, Group, MantineProvider } from "@mantine/core";

import type { CSVType } from "@/components/CSVReader";
import { PreviewTable } from "@/components/previewTable";
import { ArrayToCSV } from "@/components/ArrayToCSV";
import { RequestOptimize } from "@/components/RequestOptimize";

/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */

export const Home: FC = () => {
  const [chouseisan, setChouseisan] = useState<CSVType>({});
  const [memberInfo, setMemberInfo] = useState<CSVType>({});

  const iconSize = 64;

  useEffect(() => console.log(chouseisan.data), [chouseisan]);

  const handleSubmit = (): void => {
    console.log("optimizing...");
    RequestOptimize(chouseisan.data ?? [[]], memberInfo.data ?? [[]]);
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
        <h3>調整さんのアップロード</h3>
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
      <Group position="center" my={16} className="bottom">
        <MantineProvider
          theme={{
            colors: {
              "my-maroon": [
                "#800000",
                "#800000",
                "#800000",
                "#800000",
                "#800000",
                "#800000",
                "#800000", // bg
                "#8F0000", // bg:hover
                "#800000",
                "#800000",
              ],
            },
          }}
        >
          <Button
            leftIcon={<IconMathMin size={32} />}
            color="my-maroon"
            size="xl"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            訪問組み最適化を実行
          </Button>
        </MantineProvider>
      </Group>
    </div>
  );
};
