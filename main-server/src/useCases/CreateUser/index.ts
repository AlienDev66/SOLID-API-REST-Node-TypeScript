import { PostgresUserRepository } from "./../../repositories/implementations/PostgresUserRepository";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";


const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapMailProvider,
);

const createUserController = new CreateUserController(
createUserUseCase
)

export { createUserUseCase, createUserController }