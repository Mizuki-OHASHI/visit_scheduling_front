import { Dispatch, SetStateAction } from "react";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export type Opt = {
  visitinfo?: {
    visittime: number;
    respondents: number;
    visitdate: Array<string>;
    seniordriver: Array<string>;
  };
  visitschedule?: Array<Array<any>>;
  status: string;
};

export const RequestOptimize = async (
  chouseisan: Array<Array<any>>,
  memberInfo: Array<Array<any>>,
  setOpt: Dispatch<SetStateAction<Opt>>
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
      }),
    });

    const opt = (await res.json()) as Opt;

    if (opt.status == "no solution found") {
      alert("入力された条件下では訪問組み不可能です");
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
