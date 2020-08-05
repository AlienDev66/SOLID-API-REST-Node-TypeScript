import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: ICreateUserRequestDTO) {
    const useAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (useAlreadyExists) {
      return new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
