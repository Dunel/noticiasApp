import prisma from "@/db";

export async function GET() {
  try {
    const allNews = await prisma.new.findMany({
      orderBy: {
        id: 'asc'
      }
    });
    return new Response(JSON.stringify(allNews), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  try {
    let { authorId, title, body } = await request.json();

    if (!title || !authorId) {
      new Response(
        JSON.stringify({ message: "No se pueden registrar campos vacios." }),
        {
          status: 401,
        }
      );
    }

    const createNews = await prisma.new.create({
      data: {
        title,
        body,
        authorId,
      },
    });

    return Response.json(
      { message: "Noticia regisrada." },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
