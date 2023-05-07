import { Request, Response } from "express";
import { userDto } from "./dto";
import { validate } from "class-validator";
import { signInService, signupService } from "../services/users";

export const signup = async (req: Request, res: Response) => {
  try {
    let { name, password, email, avatar } = req.body;

    const dto = new userDto();
    dto.email = email;
    dto.name = name;
    dto.password = password;
    dto.avatar = avatar;

    const validator = await validate(dto);

    if (validator.length > 0) throw new Array(validator);

    const signIn = await signupService(
      dto.name,
      dto.password,
      dto.email,
      dto.avatar
    );

    res.json(signIn).status(201);

  } catch (error) {

    res.json({ error: error });

  }
};

export const signin = async (req: Request, res: Response) => {
  let { email, password } = req.body;

  try {
    const dto = new userDto();
    dto.email = email;
    dto.password = password;

    const validator = await validate(dto);

    if (validator.length > 0) throw new Array(validator);

    const login = await signInService(dto.email, dto.password);

    res.json(login).status(200);
  } catch (error: any) {
    if (error instanceof Array) res.json(error).status(403);
  }
};
