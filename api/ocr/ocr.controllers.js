exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) req.body = __dirname;
    res.status(201).json("text");
  } catch (error) {
    next(error);
  }
};
