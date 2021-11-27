import express from "express";
const router = express.Router();
import { home, shortenUrl } from '../controller/controller.js';




router.get('/', home)
router.post('/shortenUrl', shortenUrl);



export default router;