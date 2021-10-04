const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER NEW USER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSPHRASE
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    // IF USER IS'NT FOUND ERROR MESSAGE
    !user && res.status(401).json("Wrong credentials USER");

    // DECRYPT PASSWORD
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSPHRASE
    );

    // DECRYPTED PASSWORD TO STRING
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // IF PASSWORD DOES'NT MATCH ERROR MESSAGE
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials PW");

    //JWT AUTH
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    // RETURNS DESTRUCTURED USER INFORMATION EXCEPT PASSWORD
    const { password, ...others } = user._doc;

    res.status(200).json({ others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
