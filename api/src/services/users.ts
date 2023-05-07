import { models } from "../db/models";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { ErrorResponse, UserData } from "./interfaces";

const getTokens = async (
  userId: number,
  email: string
): Promise<{ rt: string }> => {
  const secret: string = String(process.env.RT_TOKEN);

  const JwtPayload = {
    sub: userId,
    email,
  };

  const [rt] = await Promise.all([
    jwt.sign(
      {
        exp: 60 * 15,
        data: JwtPayload,
      },
      secret
    ),
  ]);

  return { rt: rt };
};

const updateRt = async (userId: number, rt: string) => {
  const { user } = models;

  const hash = await argon2.hash(rt);

  const subject = await user.findOne({
    where: {
      id: userId,
    },
  });

  await subject.update({
    rtHash: hash,
  });
};

export const signupService = async (
  name: string,
  password: string,
  email: string,
  avatar: string
): Promise<UserData | ErrorResponse | any> => {
  const { user } = models;

  try {
    const uniqueEmail = await user.findOne({
      where: {
        email: email,
      },
    });

    if (uniqueEmail) throw new Error("Credentials Taken");

    const hashPass = await argon2.hash(password);

    const newUser = await user.create({
      name,
      password: hashPass,
      email,
      avatar: !avatar
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71xOBIcQUs2yi94FYFxVPd5llqJ_b7eN4rZC59SwW&s"
        : avatar,
    });

    const tokens = await getTokens(newUser.id, newUser.email);

    await updateRt(newUser.id, tokens.rt);

    return {
      name: newUser.name,
      email: newUser.email,
      token: tokens.rt,
    };

  } catch (error) {
    console.log(error)
    if (error instanceof Error) return { message: error.message };
  }
};

export const signInService = async (email: string, password: string) => {
  try {
    const { user } = models;

    const verifyUser: any = await user.findOne({
      where: {
        email: email,
      },
    });

    if (!verifyUser) throw new Error("Credentials invalid");

    const db = verifyUser;

    const pwMatches = argon2.verify(db.password, password);

    if (!pwMatches) throw new Error("Credentials invalid");

    const token = await getTokens(db.id,db.email)
    console.log(token)

    return db
  } catch (error : any) {
    return { error : error.message}
  }
};
