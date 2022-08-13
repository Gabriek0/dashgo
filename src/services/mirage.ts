import { createServer, Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

interface User {
  name: string;
  email: string;
  created_at: string;
}

export default function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },

        email() {
          return faker.internet.email().toLowerCase();
        },

        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "/api";

      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";

      // Por padrão NextJS também trás uma pasta api para configurar rotas
      // Então é interessante setar o namespace para vazio assim que
      // realizar a requisição

      this.passthrough();
    },
  });

  return server;
}
