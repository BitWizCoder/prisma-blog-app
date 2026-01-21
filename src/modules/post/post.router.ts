import express, { Router } from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/", PostController.createPost);

router.get("/", PostController.getAllPosts);

export const postRouter: Router = router;
