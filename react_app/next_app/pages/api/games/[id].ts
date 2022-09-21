//参考: https://maku.blog/p/qcp2coz/
import type { NextApiRequest, NextApiResponse } from "next";

export type Game = {
  id: string;
  title: string;
  genre: string;
};

// API のレスポンス型
export type GamesApiResponse = {
  game?: Game;
  debugMessage?: string;
};

// API のエントリポイント
export default function gamesApi(
  req: NextApiRequest,
  res: NextApiResponse<GamesApiResponse>
) {
  const id = req.query.id as string;
  const game = fetchGameData(id);
  if (game) {
    res.status(200).json({ game });
  } else {
    res.status(400).json({ debugMessage: `Game [id=${id}] not found` });
  }
}

// 擬似的なデータフェッチ関数
function fetchGameData(id: string): Game | undefined {
  const games: Game[] = [
    { id: "1", title: "ドンキーコング", genre: "アクション" },
    { id: "2", title: "ゼビウス", genre: "シューティング" },
    { id: "3", title: "ロードランナー", genre: "パズル" },
  ];
  return games.find((game) => game.id === id);
}
