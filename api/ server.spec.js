// imported supertest and our server file
// yarn test to run the test
const request = require("supertest");
const server = require("./server");

//testing envirnoment
describe("server", () => {
  it("should set up our testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  //testing http status code

  describe("GET /", () => {
    it("should return 200 ok", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    // testing the format
    it("should return a json object", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
  });
});
