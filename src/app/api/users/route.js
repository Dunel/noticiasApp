import prisma from "@/db";

export async function GET() {
  try {
    const allUsers = await prisma.user.findMany();
    return Response.json(allUsers);
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    let { username, email, password, lastName, firstName } =
      await request.json();

    if (!username || !email || !password) {
      return Response.json(
        { message: "Debe llenar todos los campos." },
        {
          status: 401,
        }
      );
    }
    const userExists = await prisma.user.findMany({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });
    if (!userExists || userExists.length > 0) {
      return Response.json(
        {
          message: "Este usuario se encuentra registrado.",
        },
        {
          status: 401,
        }
      );
    }

    const emailExists = await prisma.user.findMany({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });
    if (!emailExists || emailExists.length > 0) {
      return Response.json(
        { message: "Este correo se encuentra registrado." },
        {
          status: 401,
        }
      );
    }

    const usernew = await prisma.user.create({
      data: { username, email, password, firstName, lastName },
    });
    return Response.json(
      { message: "Usuario regisrado." },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Error del servidor" },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request) {
  try {
    let { id, password, lastName, firstName } = await request.json();

    const userExists = await prisma.user.findMany({
      where: {
        id,
      },
    });
    if (!userExists || userExists.length < 1) {
      return Response.json(
        { message: "Usuario no autorizado." },
        {
          status: 401,
        }
      );
    }

    const userUp = await prisma.user.update({
      where: {
        id,
      },
      data: {
        lastName,
        firstName,
        password,
      },
    });
    return Response.json(
      { message: "Usuario actualizado" },
      {
        status: 200,
      }
    );
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

/*export async function DELETE(request) {
  try {
    const formData = await request.formData();
    await User.destroy({
      where: {
        id: formData.get("id"),
      },
    });
    return Response.json({ message: "Usuario eliminado" });
  } catch (error) {
    return Response.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}*/
