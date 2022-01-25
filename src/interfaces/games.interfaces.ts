export interface IGameRating {
  id: number;
  title: "exceptional" | "recommended" | "meh" | "skip";
  count: number;
  percent: number;
}

export interface IGameESRBRating {
  id: number;
  name: string;
  slug: string;
}

export interface IGamePublishers {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface IGameAddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface IGameDevelopers {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface IGamePlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    year_end: number | null;
    year_start: number | null;
    games_count: number;
    image_background: string;
  };
  released_at: string;
  requirements_en: {
    minimum: string;
    recommended: string;
  } | null;
  requirements_ru: {
    minimum: string;
    recommended: string;
  } | null;
}

export interface IGameParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface IGameGenres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface IGameStores {
  id: number;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
}

export interface IGameTags {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface IGameShortScreenshots {
  id: number;
  image: string;
}

export interface IGame {
  id: string;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: IGameRating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: IGameAddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: IGamePlatform[];
  parent_platforms: IGameParentPlatform[];
  genres: IGameGenres[];
  stores: IGameStores[];
  clip: null;
  tags: IGameTags[];
  esrb_rating: IGameESRBRating;
  short_screenshots: IGameShortScreenshots[];
}

export interface IGamesListAPIResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IGame[];
}

export interface IGameMetacriticPlatforms {
  metascore: number;
  url: string;
  platform: {
    platform: number;
    name: string;
    slug: string;
  };
}

export interface IGameDetailsAPIResponse {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: IGameMetacriticPlatforms[];
  released: string;
  tba: boolean;
  updated: Date;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: IGameRating[];
  reactions: {
    [key: string]: number;
  };
  added: number;
  added_by_status: IGameAddedByStatus;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: IGameParentPlatform[];
  platforms: { requirements: {} }[] &
    Omit<IGamePlatform, "requirements_en" | "requirements_ru">[];
  stores: IGameStores[];
  developers: IGameDevelopers[];
  genres: IGameGenres[];
  tags: IGameTags[];
  publishers: IGamePublishers[];
  esrb_rating: IGameESRBRating;
  clip: null;
  description_raw: string;
}
