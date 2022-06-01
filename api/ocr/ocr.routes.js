const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");
const { ocrCreate } = require("./ocr.controllers");
const { createWorker } = require("tesseract.js");

router.post("/", upload.single("image"), function (req, res) {
  const worker = createWorker({
    // logger: (m) => console.log(m),
  });

  (async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(req.file.path);
    console.log(text);
    await worker.terminate();
  })();
  console.log(req.file.path);
  //   console.log(__dirname);
  //   console.log(req.file, req.body);
});
router.post("/", ocrCreate);

module.exports = router;
