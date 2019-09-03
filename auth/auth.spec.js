const request = require("supertest");
const server = require("../api/server");
const auth = require("./auth-router.js");

//testing http status code

// describe("POST /api/auth/register", () => {
//   let data = {
//     username: "paul",
//     password: "ab"
//   };
//   it("should return 201 created", () => {
//     return request(server)
//       .post("/api/auth/register", data)
//       .then(res => {
//         expect(res.status).toBe(201);
//       });
//   });

//   //testing the format
//   it("should return a json object", async () => {
//     const res = await request(server).post("/api/auth/register", data);
//     expect(res.type).toBe("application/json");
//   });
// });

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
