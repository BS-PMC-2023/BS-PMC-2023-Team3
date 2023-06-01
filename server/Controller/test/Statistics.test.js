const connection = require('../../mySQL.js');
const request = require('supertest');
const app = require('../../server');

describe("GET /statistics/getNumberOfOrdersCategory", () => {
    it("It should respond with an array of items", async () => {
        const response = await request(app).get("/statistics/getNumberOfOrdersCategory");
        expect(response.body[0]).toHaveProperty("CATEGORY");
        expect(response.body[0]).toHaveProperty("NUMBER");
        expect(response.statusCode).toBe(200);
    });
});