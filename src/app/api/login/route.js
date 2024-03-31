import prisma from "@/db";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    let { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Debes llenar todos los campos." }),
        { status: 401 }
      );
    }

    const user = await prisma.user.findMany({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
        password: {
          equals: password,
          mode: "insensitive",
        },
      },
    });

    if (!user || user.length < 1) {
      return new Response(
        JSON.stringify({ message: "Usuario o contraseña incorrectos" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({
        token,
        email: user[0].email,
        author: user[0].id,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ message: "Error del servidor." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
