const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getBlogById() {
  try {
    
    const response = await fetch(`${API_URL}/${BLOG_ID}/posts?key=${API_KEY}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error en la respuesta de la API: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.items) {
      throw new Error("No se encontraron posts en la respuesta de la API.");
    }

    console.log("Data de los posts del blog:", data);

    return data.items;
  } catch (err) {
    console.error("Error al obtener los datos de los posts del blog:", err);
    throw new Error("Fallo en el fetch de los posts del blog: " + err.message);
  }
}

export async function getPostById(postId) {
  try {
    const response = await fetch(`${API_URL}/${BLOG_ID}/posts/${postId}?key=${API_KEY}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error en la respuesta de la API: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (err) {
    console.error("Error al obtener el post:", err);
    throw new Error("Fallo en el fetch del post: " + err.message);
  }
}


  