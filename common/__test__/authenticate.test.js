// authenticate.test.js
const { authenticate } = require("../middlewares/authenticate");
const jwt = require("jsonwebtoken");

describe("Authenticate Middleware", () => {
  it("should authenticate a user", () => {
    const req = {
      headers: {
        authorization: `Bearer ${jwt.sign({ email: "test@example.com", userId: "123" }, process.env.JWT_SECRET)}`,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    authenticate(req, res, next);

    expect(req.authenticated).toBe(true);
    expect(req.email).toBe("test@example.com");
    expect(req.userId).toBe("123");
    expect(next).toHaveBeenCalled();
  });
});
