const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export type MyError = {
  code?: number;
  detail?: string;
};

export const RequestOptimize = async (
  chouseisan: Array<Array<any>>,
  memberInfo: Array<Array<any>>
) => {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chouseisan: chouseisan,
        memberInfo: memberInfo,
      }),
    });

    const error = (await res.json()) as MyError;

    if (error.code != 0) {
      alert(
        `エラー
        ${error.detail}`
      );
      return false;
    }

    alert("訪問組みに成功しました");
    return true;
  } catch (err) {
    alert("サーバーとの接続に失敗しました");
    console.error(err);
    return false;
  }
};
