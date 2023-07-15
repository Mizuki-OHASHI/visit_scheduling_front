import { Candidate } from "@/components/Type";
import { Button, TextInput } from "@mantine/core";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setCandidateInfo: Dispatch<SetStateAction<Array<Candidate>>>;
  candidateInfo: Array<Candidate>;
  candidates: Array<any>;
};

export const SetCandidate: FC<Props> = (props) => {
  const { setCandidateInfo, candidateInfo, candidates } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th>候補日</th>
          <th>グループ番号</th>
          <th>作業内容</th>
        </tr>
        {candidates.map((c, i) => {
          return (
            <tr key={i}>
              <td>{c}</td>
              <td>
                <TextInput
                  // value={candidateInfo[i].group}
                  placeholder="未入力"
                  variant="unstyled"
                  withAsterisk
                  onChange={(event) => {
                    candidateInfo[i].group = event.currentTarget.value;
                    setCandidateInfo(candidateInfo);
                  }}
                />
              </td>
              <td>
                {/* {candidateInfo[i].todo?.map((t) => {
                return <div className="todo">{t}</div>;
              })} */}
                <TextInput
                  // value={candidateInfo[i].todo}
                  placeholder="作業#人数/作業#人数/..."
                  variant="unstyled"
                  withAsterisk
                  onChange={(event) => {
                    candidateInfo[i].todo = event.currentTarget.value;
                    setCandidateInfo(candidateInfo);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
