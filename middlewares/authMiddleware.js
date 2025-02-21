const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Accès non autorisé. Token manquant." });
  }

  const token = authHeader.split(" ")[1]; // Récupérer le token après "Bearer"
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifie et décode le token
    req.user = decoded; // Ajoute les infos de l'utilisateur au `req.user`
    next(); // Passe à la suite
  } catch (error) {
    return res.status(403).json({ message: "Token invalide ou expiré." });
  }
};

module.exports = verifyToken;
