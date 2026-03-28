export const validateMiddleware = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length < 3) {
    return res.status(400).json({
      message: "Name must be at least 3 characters",
    });
  }

  next();
};
