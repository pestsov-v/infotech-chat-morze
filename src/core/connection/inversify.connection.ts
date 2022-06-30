import { Container, ContainerModule, interfaces } from "inversify";

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IUserController>(TYPES.UserController).to(UserController);
  bind<Server>(TYPES.Application).to(Server);
});

async function bootstrap() {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<Server>(TYPES.Application);
  await app.init();
  new Database();
  return { appContainer, app };
}

bootstrap();
