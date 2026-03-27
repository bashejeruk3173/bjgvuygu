import type { GetRoot } from "../types/aniwatch/root";
import type { RequestHandler } from "express";
import { isSiteReachable } from "./isSiteReachable";

// TODO: make config json files , make it better in future
export const getRoot: RequestHandler = async (_req, res) => {
  res.status(418).json({
    status: "critical_weeb_overload",
    message: "The digital hamsters powering this endpoint have abandoned their wheels to watch a 100-episode tournament arc. Please try again after the protagonist unlocks their hidden power.",
    docs: "Written in the ancient texts, guarded by a very angry tsundere."
  });
};
