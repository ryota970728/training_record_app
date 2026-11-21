// 環境変数からAPI接続先と認証情報を取得
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTHORIZATION = import.meta.env.VITE_API_AUTHORIZATION;

// 環境変数の設定漏れをチェック
if (!BASE_URL) {
  throw new Error('VITE_API_BASE_URL is not defined');
}

if (!AUTHORIZATION) {
  throw new Error('VITE_API_AUTHORIZATION is not defined');
}

// エンドポイントの定義
export const API_ENDPOINTS = {
  PARTS: {
    FETCH: `${BASE_URL}/fetchPart`,
    FETCH_OLD: `${BASE_URL}/fetchOldPart`,
  },
  MENUS: {
    FETCH: `${BASE_URL}/fetchMenu`,
    FETCH_OLD: `${BASE_URL}/fetchOldMenu`,
    INSERT: `${BASE_URL}/insertMenu`,
  },
  RECORDS: {
    FETCH: `${BASE_URL}/fetchRecords`,
    FETCH_OLD: `${BASE_URL}/fetchOldRecords`,
    INSERT: `${BASE_URL}/insertRecord`,
    DELETE: `${BASE_URL}/deleteRecord`,
  },
  // 認証用トークン
  AUTHORIZATION,
} as const; // as const をつけることで、TypeScriptで読み取り専用の厳格な型になります