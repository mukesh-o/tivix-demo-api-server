import Axios, { AxiosError } from "axios";
import httpStatusCode from "http-status-codes";
import { Request, Response } from "express";

import { RAWG_API_BASE_URL, RAWG_API_KEY } from "../config/environment";
import { IGamesListAPIResponse, IGameDetailsAPIResponse } from "../interfaces";

class GamesController {
  public static async getGamesList(req: Request, res: Response) {
    const recordsPerPage = 12;
    const pageNumber = Number(req.query.page);

    if (!pageNumber) {
      return res.json({
        error: {
          statusCode: httpStatusCode.NOT_ACCEPTABLE,
          message: "Page number not valid.",
        },
      });
    }

    await Axios.get<IGamesListAPIResponse>(`${RAWG_API_BASE_URL}/games`, {
      params: {
        key: RAWG_API_KEY,
        page: pageNumber,
        page_size: recordsPerPage,
      },
    })
      .then(({ data }) => {
        return res.json({
          ...data,
        });
      })
      .catch((err: AxiosError) => {
        return res.json({
          error: {
            message: err.message,
          },
        });
      });
  }

  public static async getGameDetails(req: Request, res: Response) {
    const gameId = Number(req.query.gameId);

    if (!gameId) {
      return res.json({
        error: {
          statusCode: httpStatusCode.NOT_ACCEPTABLE,
          message: "Game ID not valid.",
        },
      });
    }

    await Axios.get<IGameDetailsAPIResponse>(
      `${RAWG_API_BASE_URL}/games/${gameId}`,
      {
        params: {
          key: RAWG_API_KEY,
        },
      }
    )
      .then(({ data }) => {
        return res.json({
          ...data,
        });
      })
      .catch((err: AxiosError) => {
        return res.json({
          error: {
            message: err.message,
          },
        });
      });
  }
}

export default GamesController;
