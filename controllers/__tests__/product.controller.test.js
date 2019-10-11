import "core-js";
import "regenerator-runtime/runtime";

// import { sequelize } from "../../database/models";
import request from "supertest";

import app from "../../app";

describe("product controller", () => {
  let server;
  beforeAll(done => {
    server = app.listen(8378, err => {
      if (err) return done(err);
      request.agent(server);
      done();
    });
  });

  afterAll(done => {
    return server && server.close(done);
  });

  describe("getAllProducts", () => {
    it("should return a list of products", done => {
      request(app)
        .get("/products/?limit=10&offset=3")
        .set("Content-Type", "application/json")
        .end((error, response) => {
          if (error) return done(error);
          expect(response.status).toEqual(200);
          console.log(response);
          done();
        });
    });
  });
});
