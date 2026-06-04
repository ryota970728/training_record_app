const IS_PRODUCTION = import.meta.env.MODE === 'production'

// BASE URL と認証トークンを .env ファイルから読み込む
const BASE_URL = IS_PRODUCTION ? import.meta.env.VITE_PRODUCTION_API_BASE_URL : import.meta.env.VITE_DEVELOPMENT_API_BASE_URL
const AUTHORIZATION = import.meta.env.VITE_API_AUTHORIZATION

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