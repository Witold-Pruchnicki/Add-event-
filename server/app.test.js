const request = require("supertest");
const app = require("./app.js");
const { response } = require("express");

describe("Get users from DataBase", () => {
  it("GET /user should show all users", () => {
    return request(app)
      .get("/events")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              firstName: expect.any(String),
              lastName: expect.any(String),
              email: expect.any(String),
              date: expect.any(String),
            }),
          ])
        );
      });
  });
});

describe("Add event to database", () => {
  //should save all data to the database
  //should respond with a json object containing event id
  test("should response with a 200 status code", async () => {
    const response = await request(app).post("/events").send({
      firstName: "Firstname",
      lastName: "LastName",
      email: "email",
      date: "date",
    });
    expect(response.statusCode).toBe(201);
  });
  test("response has event id", async () => {
    const response = await request(app).post("/events").send({
      firstName: "Firstname",
      lastName: "LastName",
      email: "email",
      date: "date",
    });
    expect(response.body._id).toBeDefined();
  });
});
