import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/productos");
  },
  filename: (req, file, cb) => {
    const nombreLimpio = req.body.descripcion
      .replace(/\s+/g, "-")
      .toLowerCase();
    const uniqueName = nombreLimpio + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });
