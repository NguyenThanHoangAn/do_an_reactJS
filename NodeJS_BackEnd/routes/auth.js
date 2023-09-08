import express from "express"
import multer from "multer";
import path from "path";
import { register, login, logout, registerAdmin, loginAdmin, registerUser, getEmployees, deleteUser, updateUser, uploadFile, readProduct
, logoutAdmin, getProduct, detailProduct, oderProduct, getOrderProduct, getUserTrash, restoreUser, deleteProduct, restoreProduct, getProductTrash, getManagerOrder, deleteOrder, getTrashOrder, restoreOrder, searchProduct } from "../controllers/auth.js"

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

router.put("/user/:id", deleteUser);

router.put("/user1/:id", updateUser);
router.post("/upload",upload.single('image'), uploadFile);

router.get("/product", readProduct);

router.post("/logoutAdmin", logoutAdmin);

router.get("/getproduct", getProduct);


router.get("/detailproduct/:id", detailProduct);

router.post("/orderproduct", oderProduct);

router.get("/historyorderproduct", getOrderProduct);


router.get("/getusertrash", getUserTrash);
router.put("/restoreuser/:id", restoreUser);

router.put("/product/:id", deleteProduct);

router.get("/getproducttrash", getProductTrash);

router.put("/restoreproduct/:id", restoreProduct);

router.get("/managerorder", getManagerOrder);

router.put("/deleteorder/:id", deleteOrder);

router.get("/gettrashorder", getTrashOrder);

router.put("/restoreorder/:id", restoreOrder);

router.get("/searchproduct/:search", searchProduct);
export default router;