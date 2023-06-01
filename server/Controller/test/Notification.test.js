const connection = require('../../mySQL.js');
const request = require('supertest');
const app = require('../../server');

describe("GET /notification/getAllNotiForUser", () => {
    it("It should respond with an array of items", async () => {
        const response = await request(app).get("/notification/getAllNotiForUser?USERNAME=Efrat123");
        expect(response.body[0]).toHaveProperty("DESCRIPTION");
        expect(response.body[0]).toHaveProperty("READ");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /notification/getAllNotiForManager", () => {
    it("It should respond with an array of items", async () => {
        const response = await request(app).get("/notification/getAllNotiForManager");
        expect(response.body[0]).toHaveProperty("DESCRIPTION");
        expect(response.body[0]).toHaveProperty("READ");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /notification/getNotReadNotiForUser", () => {
    it("It should respond with an array of items", async () => {
        const response = await request(app).get("/notification/getNotReadNotiForUser?USERNAME=Efrat123");
        expect(response.body[0]).toHaveProperty("DESCRIPTION");
        expect(response.body[0]).toHaveProperty("READ");
        expect(response.statusCode).toBe(200);
    });
});