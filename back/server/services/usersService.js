import { Users } from "../models/index.js";

// Servicio para el login de usuarios
async function loginUser(username, password) {
  const user = await Users.findOne({
    where: { name: username.trim() },
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  if (String(user.number_id).trim() !== String(password).trim()) {
    throw new Error("Credenciales inválidas");
  }

  return {
    id: user.id_user,
    username: user.name,
    role: user.id_rol,
  };
}

// Servicio para registrar un nuevo usuario
async function registerUser(userData) {
  const newUser = await Users.create(userData);
  // Se añade esta validación para que siempre devuelva el ID correcto
  if (newUser && newUser.id_user) {
    return newUser; // El objeto de Sequelize ya incluye las propiedades del modelo.
  } else {
    throw new Error("No se pudo obtener el ID del usuario recién creado.");
  }
}

// Servicio para obtener todos los usuarios
async function getUsers() {
  const users = await Users.findAll();
  return users;
}

export const usersService = {
  loginUser,
  registerUser,
  getUsers,
};
