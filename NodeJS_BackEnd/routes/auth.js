import express from "express"
import { register, login, logout, registerAdmin, loginAdmin } from "../controllers/auth.js"

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);




export default router;