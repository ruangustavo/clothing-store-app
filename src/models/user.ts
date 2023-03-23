import { pool } from "./database";
import { CREATE_USER, SELECT_USER_BY_EMAIL } from "./queries/auth/authQueries";
import bcrypt from "bcrypt";

interface UserType {
  id: number;
  email: string;
  password: string;
}

type UserTypeWithoutId = Omit<UserType, "id">;

export class User {
  static async findByEmailWithPassword(email: string): Promise<UserType> {
    const { rows } = await pool.query(SELECT_USER_BY_EMAIL, [email]);
    return rows[0];
  }

  static async create(user: UserTypeWithoutId): Promise<UserType> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const { rows } = await pool.query(CREATE_USER, [
      user.email,
      hashedPassword,
    ]);
    return rows[0];
  }

  static async authenticate(user: UserTypeWithoutId): Promise<UserType> {
    const existingUser = await User.findByEmailWithPassword(user.email);

    if (!existingUser) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(
      user.password,
      existingUser.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return existingUser;
  }

  static async register(user: UserTypeWithoutId): Promise<UserType> {
    const existingUser = await User.findByEmailWithPassword(user.email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const createdUser = await User.create(user);
    return createdUser;
  }
}
