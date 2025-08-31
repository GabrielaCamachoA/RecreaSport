import { usersService } from "../services/usersService.js";

// Controller to obtain all users
export async function getAllUsers(req, res) {
  try {
    const users = await usersService.getUsers();
    res.status(200).json({
      success: true,
      data: users,
      count: users.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener usuarios",
      error: error.message,
    });
  }
}

// Controller for user login
export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await usersService.loginUser(username, password);
    res.status(200).json({
      success: true,
      message: "Login exitoso",
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}

// Controller for user registration
export async function register(req, res) {
  const userData = req.body;
  try {
    const newUser = await usersService.registerUser(userData);
    res.status(201).json({
      success: true,
      message: "Usuario registrado con éxito",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear usuario",
      error: error.message,
    });
  }
}
