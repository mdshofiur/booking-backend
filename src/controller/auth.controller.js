import SchemaUser from "../model/auth.model.js";
import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";


export async function createUsers(req, res) {
  try { 
   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new SchemaUser({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      isAdmin: req.body.isAdmin,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
}


export async function loginUser(req, res, next) {
  try {
    const user = await SchemaUser.findOne({ email: req.body.email });
    if (!user) return console.log("User not found");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return console.log("isPasswordCorrect not correct");

    const { password, isAdmin, ...otherDetails } = user._doc;

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin,email:user.email },
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4ifQ.dhDq__bcVVqVeYQw0_h4JIXs2lMZ6x2l9Rjs1X9vt9Q"
    );
    
    res.cookie("accessToken", token, {
      httpOnly: true,
      domain: "localhost",
      path: "/",
      sameSite: "strict",
      secure: false,
    });

    res.status(200).json(otherDetails);
  } catch (err) {
    res.status(500).json(err);
  }
}


