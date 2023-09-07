import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = (req, res) => {

    //CHECK EXISTING USER
    const q = "SELECT * FROM user WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.name], (err,data)=> {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exisxts")

        //Hash the password and creat a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO  user(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data)=> {
            if(err) return res.json(err);
             return res.status(200).json("User has been created");
        } );
    });

};

export const login = (req, res) => {

    
    //CHECK USER    
    const q = "SELECT * FROM user WHERE username = ? and status = 0"

    

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length===0) return res.status(404).json("User not found");

        //CHECK PASSWORD
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password")

        const token = jwt.sign({id:data[0].id}, "jwtkey");
        const {password, ...other} = data[0]

        res.cookie("access_token", token, {
            httpOnly: false
        }).status(200).json(other)


        
    })
    
  
}








export const logout = (req, res) => {
    
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out")
}


export const registerAdmin = (req, res) => {

    //CHECK EXISTING USER
    const q = "SELECT * FROM admin WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.name], (err,data)=> {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("Admin already exisxts")

        //Hash the password and creat a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO  admin(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err,data)=> {
            if(err) return res.json(err);
             return res.status(200).json("Admin has been created");
        } );
    });

};

export const loginAdmin = (req, res) => {
    
    //CHECK USER    
    const q = "SELECT * FROM admin WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length===0) return res.status(404).json("Admin not found");

        //CHECK PASSWORD
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password")

        const token = jwt.sign({id:data[0].id}, "jwtkey");
        const {password, ...other} = data[0]

        res.cookie("token", token, {
            httpOnly: true
        }).status(200).json(other)


        
    })
    
  
}

export const registerUser = (req, res) => {

    //CHECK EXISTING USER
    const q = "SELECT * FROM user WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.name], (err,data)=> {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exisxts")

        //Hash the password and creat a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO  user(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err,data)=> {
            if(err) return res.json(err);
             return res.status(200).json("User has been created");
        } );
    });

};

export const getEmployees = (req, res) => {

    const q = "SELECT * FROM user WHERE status = 0 ";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  };


 export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const q = " UPDATE user SET `status` = 1 WHERE id = ? ";
  
    db.query(q,[userId],   (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
 };

 export const updateUser = (req, res) => {
    const userId = req.params.id;
    const q = "UPDATE user SET `username`= ?, `email`= ?, `password`= ? WHERE id = ?";

    const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    const values = [
      req.body.username,
      req.body.email,
      hash,
    ];
  
    db.query(q, [...values,userId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
 }



export const uploadFile = (req, res) => {
    const image = req.file.filename;
    const sql = "INSERT product(`name`, `price`, `discount`,`categories`, `image`) VALUES (?) ";
    const values = [
        req.body.name,
        req.body.price,
        req.body.discount,
        req.body.categories,
        image,
      ];
    //   console.log(values)
    db.query(sql, [values], (err, result) => {
        if(err) return res.json({Message: "Error"});
        return res.json({Status: "Success"});
    })
}

export const readProduct = (req, res) => {
    const sql = 'SELECT * FROM product WHERE status = 0';
    db.query(sql, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    })
}


export const logoutAdmin = (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"});
    
}

export const getProduct = (req, res) => {

    const q = "SELECT * FROM product WHERE status = 0";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  };


  export const detailProduct = (req, res) => {
    const productId = req.params.id;
    const sql = "SELECT * FROM product WHERE id= ? LIMIT 1";
    db.query(sql,[productId], (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    })
}


export const oderProduct = (req, res) => {
    const decoded = jwt.decode(req.body.accessToken);
        const q = "INSERT INTO dataorder(`userId`,`address`, `phone`, `total`) VALUES (?)"
        const values = [
            decoded.id,
            req.body.userInfo.address,
            req.body.userInfo.phone,
            req.body.userInfo.total,
        ];
        // console.log(values)
        db.query(q, [values], (err,data)=> {
            if(err) return res.json(err);
             return res.status(200).json("Order has been created");
        } );
        

};


export const getOrderProduct = (req, res) => {
    const token = req.headers?.authorization
    const accessToken = token.replace('Bearer ', '')
    // console.log(accessToken)
    const decoded = jwt.decode(accessToken);
    // console.log(decoded)
    const q = "SELECT o.*, u.username FROM `dataorder` o LEFT JOIN user u ON o.userId = u.id WHERE o.userId = ?  ";
    db.query(q,decoded.id, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log(data)
      return res.json(data);
    });
  };


  export const searchProduct = (req, res) => {
    // console.log(req.params.search)
    const searchproduct = req.params.search;
    const q = "SELECT * FROM product WHERE name LIKE ? and status = 0";
    db.query(q,['%' + searchproduct + '%'] , (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log(data)
      return res.json(data);
    });
  };


  export const getUserTrash = (req, res) => {

    const q = "SELECT * FROM user WHERE status = 1 ";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  };

  export const restoreUser = (req, res) => {
    const userId = req.params.id;
    const q = " UPDATE user SET `status` = 0 WHERE id = ? ";
  
    db.query(q,[userId],   (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
 };

 
 export const deleteProduct = (req, res) => {
    const userId = req.params.id;
    const q = " UPDATE product SET `status` = 1 WHERE id = ? ";
  
    db.query(q,[userId],   (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
 };

 export const getProductTrash = (req, res) => {

    const q = "SELECT * FROM product WHERE status = 1 ";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  };

 export const restoreProduct = (req, res) => {
    const productId = req.params.id;
    const q = " UPDATE product SET `status` = 0 WHERE id = ? ";
  
    db.query(q,[productId],   (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
 };

 export const getManagerOrder = (req, res) => {
    const sql = 'SELECT o.*, u.username FROM `dataorder` o LEFT JOIN user u ON o.userId = u.id WHERE o.status = 0 ';
    db.query(sql, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    })
  };

  export const deleteOrder = (req, res) => {
    const orderId = req.params.id;
    const q = " UPDATE dataorder SET `status` = 1 WHERE id = ? ";
  
    db.query(q,[orderId],   (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
 };

 export const getTrashOrder = (req, res) => {
    const sql = 'SELECT o.*, u.username FROM `dataorder` o LEFT JOIN user u ON o.userId = u.id WHERE o.status = 1 ';
    db.query(sql, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    })
  };

  export const restoreOrder = (req, res) => {
    const productId = req.params.id;
    const q = " UPDATE dataorder SET `status` = 0 WHERE id = ? ";
  
    db.query(q,[productId],   (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
 };