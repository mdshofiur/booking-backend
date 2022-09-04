import jwt from "jsonwebtoken";

export const Tokenverify = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return console.log("token not here");

  jwt.verify(
    token,
    "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4ifQ.dhDq__bcVVqVeYQw0_h4JIXs2lMZ6x2l9Rjs1X9vt9Q",
    (err, user) => {
      if (err) return console.log(err);
      req.user = user;
      next();
    }
  );
};

export const verifyUser = async (req, res, next) => {
  Tokenverify(req, res, next, () => {
    try {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  }
  );
};

export const verifyAdmin = (req, res, next) => {
  return Tokenverify(req, res, () => {
    if (req.user.isAdmin) {
      console.log("user is admin");
      next();
    } else {
      res.send("user is not admin");
    }
  });
};
