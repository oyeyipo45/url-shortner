import express from "express";
const router = express.Router();
import { home, shortenUrl } from '../controller/controller.js';




// router.get('/', home)
// router.post('/shortenUrl', shortenUrl);

router.route('/').get(home);
router.route('/shortenUrl').post(shortenUrl);

export default router;