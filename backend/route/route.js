import express from "express";
const router = express.Router();
import { home, shortenUrl, redirectUrl } from '../controller/controller.js';




router.route('/').get(home);
router.route('/redirectUrl').post(redirectUrl);
router.route('/shortenUrl').post(shortenUrl);

export default router;