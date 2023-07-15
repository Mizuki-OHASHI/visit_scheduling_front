import { FC, useEffect, useState } from "react";
import {
  IconMathMin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
} from "@tabler/icons-react";
import { CSVReader } from "@/components/CSVReader";
import { Affix, Group, MantineProvider, Switch } from "@mantine/core";

import type { CSVType } from "@/components/CSVReader";
import { PreviewTable } from "@/components/PreviewTable";
import { Opt, RequestOptimize } from "@/components/RequestOptimize";
import { ShowResult } from "@/pages-component/Home-component/ShowResult";
import { MyButton } from "@/components/MyButton";
import { Candidate } from "@/components/Type";
import { SetCandidate } from "@/pages-component/Home-component/SetCandidate";

/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */

export const Home: FC = () => {
  const [chouseisan, setChouseisan] = useState<CSVType>({});
  const [memberInfo, setMemberInfo] = useState<CSVType>({});
  const [candidateInfo, setCandidateInfo] = useState<Array<Candidate>>([]);
  const [opt, setOpt] = useState<Opt>({
    status: "not optimized yet",
  });
  const [considerGender, setConsiderGender] = useState(false);

  const iconSize = 64;

  // useEffect(() => console.log(chouseisan.data), [chouseisan]);

  const handleSubmit = async () => {
    console.log("optimizing...");
    if (chouseisan.data && memberInfo.data) {
      RequestOptimize(
        chouseisan.data.slice(2),
        memberInfo.data,
        candidateInfo,
        setOpt,
        considerGender
      );
    }
  };

  useEffect(() => {
    const emptyCandidates: Array<Candidate> = [];
    const len = chouseisan.data ? chouseisan.data[2].length - 2 : 0;
    for (let i = 0; i < len; i++) {
      emptyCandidates.push({ group: "", todo: "" });
    }
    setCandidateInfo(emptyCandidates);
  }, [chouseisan, memberInfo]);

  return (
    <div className="home">
      <Affix position={{ top: 0, right: 0, left: 0 }}>
        <Group position="center" bg="maroon" mb={16}>
          <h1 className="title">訪問組み自動化プロジェクト</h1>
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
          <PreviewTable data={chouseisan.data?.slice(2) ?? [[]]} />
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
        <h3>候補日の設定</h3>
      </div>
      {chouseisan.data && memberInfo.data ? (
        <>
          <Group position="center" my={16}>
            <SetCandidate
              setCandidateInfo={setCandidateInfo}
              candidateInfo={candidateInfo}
              candidates={chouseisan.data[2].slice(1, -1)}
            />
          </Group>
          <Group position="center" my={16}>
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
              <Switch
                checked={considerGender}
                onChange={(event) =>
                  setConsiderGender(event.currentTarget.checked)
                }
                label="各訪問で女子をひとりにしない"
                color="my-maroon"
              />
            </MantineProvider>
          </Group>
        </>
      ) : (
        <></>
      )}
      <br />

      {/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */}

      <div className="hor bb">
        <IconNumber4 size={iconSize} />
        <h3>訪問組み最適化を実行</h3>
      </div>

      <MyButton
        values="訪問組み最適化を実行"
        disabled={
          chouseisan.data === undefined || memberInfo.data === undefined
        }
        onSubmit={() => {
          handleSubmit();
        }}
        icon={<IconMathMin size={32} />}
      />

      {/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */}

      <div className="hor bb">
        <IconNumber5 size={iconSize} />
        <h3>結果の確認とダウンロード</h3>
      </div>
      {opt.status === "not optimized yet" ? <></> : <ShowResult opt={opt} />}
    </div>
  );
};
