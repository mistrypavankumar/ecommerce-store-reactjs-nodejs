const sendToken = (user, statusCode, res, msg) => {
  const token = user.getJWTToken();

  // Options for cookies
  const options = {
    expires: new Date(
      Date.now() + parseInt(process.env.COOKIE_EXPIRE, 10) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only send cookies over HTTPS
    sameSite: "None", // if your frontend and backend are served from different origins
  };

  // Omit sensitive data
  const { password, ...userDetails } = user.toObject();

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message: msg,
    user: userDetails,
    token,
  });
};

module.exports = sendToken;
