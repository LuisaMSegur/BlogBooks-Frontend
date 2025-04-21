export default async function handler(req, res) {
    const { id } = req.query;
    const API_URL = process.env.BLOGGER_API_URL;
    const BLOG_ID = process.env.BLOGGER_BLOG_ID;
    const API_KEY = process.env.BLOGGER_API_KEY;
  
    try {
      const response = await fetch(`${API_URL}/${BLOG_ID}/posts/${id}?key=${API_KEY}`);
  
      if (!response.ok) {
        return res.status(response.status).json({ message: "Error al obtener el post" });
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.error("Error al obtener el post:", err);
      res.status(500).json({ message: "Error interno" });
    }
  }
  