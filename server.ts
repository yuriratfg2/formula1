import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

/* =========================
   DATA
========================= */
const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
  { id: 8, name: "AlphaTauri", base: "Faenza, Italy" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" },


  { id: 11, name: "Audi F1 Team", base: "Neuburg, Germany" },
  { id: 12, name: "Andretti Cadillac", base: "Indiana, United States" },
  { id: 13, name: "Lotus F1", base: "Enstone, United Kingdom" },
  { id: 14, name: "Brawn GP", base: "Brackley, United Kingdom" },
  { id: 15, name: "Jaguar Racing", base: "Milton Keynes, United Kingdom" },
  { id: 16, name: "Toyota F1", base: "Cologne, Germany" },
  { id: 17, name: "BMW Sauber", base: "Hinwil, Switzerland" },
  { id: 18, name: "Super Aguri", base: "Leafield, United Kingdom" },
  { id: 19, name: "Manor Racing", base: "Banbury, United Kingdom" },
  { id: 20, name: "Caterham F1", base: "Leafield, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "George Russell", team: "Mercedes" },
  { id: 6, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 7, name: "Sergio Perez", team: "Red Bull Racing" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },


  { id: 9, name: "Pierre Gasly", team: "Alpine" },
  { id: 10, name: "Esteban Ocon", team: "Alpine" },
  { id: 11, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 12, name: "Alexander Albon", team: "Williams" },
  { id: 13, name: "Valtteri Bottas", team: "Alfa Romeo Racing" },
  { id: 14, name: "Zhou Guanyu", team: "Alfa Romeo Racing" },
  { id: 15, name: "Kevin Magnussen", team: "Haas" },
  { id: 16, name: "Nico Hulkenberg", team: "Haas" },
  { id: 17, name: "Logan Sargeant", team: "Williams" },
  { id: 18, name: "Nyck de Vries", team: "AlphaTauri" },
];

/* =========================
   ROUTES
========================= */
server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

/* =========================
   START SERVER
========================= */
server.listen({ port: 3333 }, () => {
  console.log("Server init 🚀");
});