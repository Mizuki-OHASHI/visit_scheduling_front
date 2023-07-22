import { Dispatch, SetStateAction } from "react";

import type { Candidate } from "@/components/Type";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export type Opt = {
  visitinfo?: {
    visittime: number;
    respondents: number;
    visitdate: Array<string>;
    seniordriver: Array<string>;
  };
  visitschedule?: Array<Array<any>>;
  textsummary?: string;
  status: string;
  detail?: string;
};

export const RequestOptimize = async (
  chouseisan: Array<Array<any>>,
  memberInfo: Array<Array<any>>,
  candidateInfo: Array<Candidate>,
  setOpt: Dispatch<SetStateAction<Opt>>,
  considerGender: boolean
): Promise<boolean> => {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chouseisan: chouseisan,
        memberinfo: memberInfo,
        candidateinfo: candidateInfo,
        considergender: considerGender,
      }),
    });

    const opt = (await res.json()) as Opt;

    if (opt.status == "no solution found") {
      alert("入力された条件下では訪問組み不可能です");
      return false;
    }

    if (opt.status == "error") {
      alert(`
        エラー
        ${opt.detail}
      `);
      return false;
    }

    alert("訪問組みに成功しました");

    setOpt(opt);
    return true;
  } catch (err) {
    alert("サーバーとの接続に失敗しました");
    console.error(err);
    return false;
  }
};
