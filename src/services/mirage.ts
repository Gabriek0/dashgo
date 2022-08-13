import { createServer, Model, Factory, Response } from "miragejs";
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
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "/api";

      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        // Page 2:
        // Start from register 10 to 20

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        // serializer transform the data and configure them
        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        // Metadata of response to create a pagination
        return new Response(
          200,
          { "x-total-count": String(total) }, // Total users
          { users } // Listing users of page
        );
      });

      this.get("/users/:id");
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
