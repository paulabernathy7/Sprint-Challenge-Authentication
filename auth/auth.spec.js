const request = require("supertest");
const server = require("../api/server");
const auth = require("./auth-router.js");
const db = require("../database/dbConfig");

describe("POST /api/auth/register", () => {
  afterEach(async () => {
    await db("users").delete();
  });
  it("should return a JSON", async () => {
    const user = { username: "paul", password: "ab" };
    const res = await request(server)
      .post("/api/auth/register/")
      .send(user);
    console.log(res.status);
    expect(res.type).toBe("application/json");
  });

  it("should return status 201", async () => {
    const user = { username: "paul", password: "ab" };
    const res = await request(server)
      .post("/api/auth/register/")
      .send(user);
    console.log(res.status);
    expect(res.status).toBe(201);
  });
});

describe("POST /api/auth/login", () => {
  let data = {
    username: "paul",
    password: "ab"
  };
  it("should return 500 created", () => {
    return request(server)
      .post("/api/auth/login", data)
      .then(res => {
        expect(res.status).toBe(500);
      });
  });

  //testing the format
  it("should return a json object", async () => {
    const res = await request(server).post("/api/auth/login");
    expect(res.type).toBe("application/json");
  });
});
