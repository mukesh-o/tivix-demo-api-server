export const NODE_ENV = process.env.NODE_ENV;
export const SERVER_URL = process.env.SERVER_URL;
export const PORT = process.env.PORT || 4500;

export const RAWG_API_BASE_URL = process.env.RAWG_API_BASE_URL;
export const RAWG_API_KEY = process.env.RAWG_API_KEY;

export const WHITELISTED_ORIGINS = (
  process.env.WHITELISTED_ORIGINS || ""
).split(",");
