const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, dateOfBirth, gender } =
      req.body;
    console.log(req.body);

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

   
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hashedPassword); 

    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      dateOfBirth,
      gender,
    });

    await user.save();
    console.log("User Registered:", user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    console.log("Type of entered password:", typeof password);

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    console.log(user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = generateToken(user);

    const userData = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
     
    };

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res
      .status(200)
      .json({ message: "Login successful", token, user: userData });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

exports.verifyAuth = async (req, res) => {
  try {
   
    const token = req.cookies.token; 

    if (!token) {
      return res.status(401).json({
        isAuthenticated: false,
        message: "No authentication token found",
      });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

   
    const user = await User.findById(decoded.id);

    //

    if (!user) {
      return res.status(401).json({
        isAuthenticated: false,
        message: "User not found",
      });
    }

   
    const userData = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      
    };

    return res.status(200).json({
      isAuthenticated: true,
      user: userData,
      token, 
    });
  } catch (error) {
    console.error("Auth verification error:", error);
    return res.status(401).json({
      isAuthenticated: false,
      message: "Invalid authentication token",
    });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) return res.status(404).json({ message: "User not found" });

  const resetToken = user.getResetPasswordToken();
  console.log(resetToken);
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  console.log(resetUrl);

  const message = `Click to reset Password: ${resetUrl}`;

  try {
    await sendEmail(user.email, "Reset Password", resetUrl);
    res.status(200).json({ message: "Password reset email sent successfully" });
  } catch (err) {
    console.error("Email sending error:", err);

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });
    res.status(500).json({ message: "Email could not be sent" });
  }
};

exports.resetPassword = async (req, res) => {
  const resetToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  console.log("Token in URL:", req.params.token);
  console.log("Hashed token:", resetToken);

  const user = await User.findOne({
    resetPasswordToken: resetToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  console.log(req.body.password);
  if (!user)
    return res.status(400).json({ message: "Invalid or expired token" });

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  console.log("Hashed Password:", hashedPassword);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  console.log("Password reset successful");
  res.status(200).json({ message: "Password updated successfully" });
};
