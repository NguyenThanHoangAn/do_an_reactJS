import express from "express"
import multer from "multer";
import path from "path";
import { register, login, logout, registerAdmin, loginAdmin, registerUser, getEmployees, deleteUser, updateUser, uploadFile, readProduct } from "../controllers/auth.js"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
 })
const upload = multer({
    storage: storage
 })


const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);

router.post("/registerUser", registerUser);
router.get("/getEmployees", getEmployees);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", updateUser);
router.post("/upload",upload.single('image'), uploadFile);

router.get("/product", readProduct);



export default router;