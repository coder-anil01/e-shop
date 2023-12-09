import { express } from "express";

const router = express.Router();


router.post('/create', ProductCreateController)

export default router