import prisma from "@/db";

export async function GET(request, { params }) {
  try {
    let newId = parseInt(params.newId);

    const news = await prisma.new.findUnique({
      where: {
        id: newId,
      },
    });

    if (!news || news.length < 1) {
      return new Response(
        JSON.stringify({ message: "Noticia no encontrada" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(JSON.stringify(news), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    let id = parseInt(params.newId);

    if (!id) {
      return new Response(
        JSON.stringify({ error: { message: "Noticia no válida." } }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newExist = await prisma.new.findMany({
      where: { id },
    });
    if (newExist.length < 1) {
      return Response.json(
        { error: { message: "Noticia no encontrada." } },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newDelete = await prisma.new.delete({
      where: {
        id,
      },
    });
    return new Response(JSON.stringify({ message: "Noticia eliminada." }));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    let id = parseInt(params.newId);
    let { title, body, authorId } = await request.json();

    if (!authorId || !title || !body || !id) {
      return Response.json(
        { error: { message: "Noticia no valida." } },
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newExist = await prisma.new.findMany({
      where: { id },
    });
    if (newExist.length < 1) {
      return Response.json(
        { error: { message: "Noticia no encontrada." } },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newUp = await prisma.new.update({
      where: { id },
      data: { title, body, authorId },
    });
    return Response.json({ message: "Noticia actualizada." });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}
