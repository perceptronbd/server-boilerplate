// userRoutes.test.js
const request = require("supertest");
const app = require("../../../server");

describe("User Registration", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/v0/users/registration").send({
      username: "testuser",
      password: "testpassword",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Login successful");
    expect(res.body).toHaveProperty("user");
  });
});
