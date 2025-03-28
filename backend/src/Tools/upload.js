const multer = require("multer");
const path = require("path");

// Spécifier où et comment les fichiers seront stockés
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Le dossier où les images seront stockées
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Nom unique + extension de l'image
  },
});

// Filtre pour accepter uniquement les images
// eslint-disable-next-line consistent-return
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error("Seules les images sont autorisées"), false);
};

// Configuration de Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5 Mo par fichier
  fileFilter,
});

module.exports = upload;
