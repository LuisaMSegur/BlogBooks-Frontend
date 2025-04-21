export default async function handler(req, res) {
    const API_URL = process.env.BLOGGER_API_URL;
    const BLOG_ID = process.env.BLOGGER_BLOG_ID;
    const API_KEY = process.env.BLOGGER_API_KEY;
  
    try {
      const response = await fetch(`${API_URL}/${BLOG_ID}/posts?key=${API_KEY}`);
  
      if (!response.ok) {
        return res.status(response.status).json({ message: "Error en la respuesta de la API" });
      }
  
      const data = await response.json();
      res.status(200).json(data.items);
    } catch (err) {
      console.error("Error en handler de posts:", err);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
  