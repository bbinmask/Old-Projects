// User controller

import User from "../models/user.models.js";

const login = async (req, res) => {
  const { email, password, username, phone } = req.body;

  try {
    if (!email && !username && !phone) {
      return res
        .status(404)
        .json({ success: false, message: "All fields required!" });
    }
    const user = email
      ? await User.findOne({
          email,
        })
      : await User.findOne({
          username,
        });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find the user" });
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      return res.status(404).json({
        success: false,
        message: "Password not correct",
        isPasswordCorrect,
      });
    }

    const accessToken = await user.generateAccessToken();

    return res.status(200).json({
      success: true,
      message: "User found successfully",
      user,
      accessToken,
      isPasswordCorrect,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const signUp = async (req, res) => {
  const { email, password, name, username, phone } = req.body;

  try {
    if (!email || !password || !name || !username) {
      return res
        .status(404)
        .json({ success: false, message: "All fields required!" });
    }

    const existingUser = await User.findOne({ email }, { username });
    console.log(existingUser);
    if (existingUser) {
      return res.status(404).json({
        success: false,
        message: "Email or username already exists! Try a different.",
      });
    }

    const user = await User.create({
      name,
      username,
      password,
      email,
      phone,
    });

    await user.save();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Something went wrong!" });
    }

    const accessToken = await user.generateAccessToken();

    return res.status(200).json({
      success: true,
      message: "Sign up successful.",
      user,
      accessToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { login, signUp };
