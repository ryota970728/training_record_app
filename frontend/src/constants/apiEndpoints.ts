// ビルドモードに応じてURLを切り替え
const BASE_URL = import.meta.env.MODE === 'production'
  ? 'https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record'
  : 'http://127.0.0.1:54321/functions/v1/training_record'

const AUTHORIZATION = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

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