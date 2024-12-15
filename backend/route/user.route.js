import express from 'express';

import {contact} from "../controller/user.controller.js";
import { appointment } from '../controller/user.controller.js';
import { ambulence } from '../controller/user.controller.js';

const router = express.Router();

router.post('/contact',contact);
router.post('/appointment',appointment);
router.post('/ambulence',ambulence)

export default router;