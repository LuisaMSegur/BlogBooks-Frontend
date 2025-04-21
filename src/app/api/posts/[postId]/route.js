// src/app/api/posts/[postId]/route.js
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { postId } = params;
  const API_URL = process.env.BLOGGER_API_URL;
  const BLOG_ID = process.env.BLOGGER_BLOG_ID;
  const API_KEY = process.env.BLOGGER_API_KEY;

  try {
    const res = await fetch(`${API_URL}/${BLOG_ID}/posts/${postId}?key=${API_KEY}`);
    if (!res.ok) throw new Error("No se pudo obtener el post");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error en API interna:", error);
    return NextResponse.json(
      { error: "Error al obtener el post" },
      { status: 500 }
    );
  }
}
