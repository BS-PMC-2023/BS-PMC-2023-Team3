const connection = require('../../mySQL.js');
const request = require('supertest');
const app = require('../../server');

describe("POST /warehouse/UpdateItem", () => {
    it("It should respond 'update successfully!'", async () => {
        const Item = await request(app).post("/warehouse/UpdateItem").send({
            STATUS: 'IN',
            NAME: 'Sony A7III',
            S_N: '4476762'
        });
        expect(Item.body.message).toBe("update successfully!");
        expect(Item.statusCode).toBe(200);

    });
});

describe("POST /warehouse/UpdateItem", () => {
    it("It should respond 'update successfully!'", async () => {
        const Item = await request(app).post("/warehouse/UpdateItem").send({
            STATUS: 'OUT',
            NAME: 'Sony A7III',
            S_N: '4476762',
            BORROW_DATE: '12.05.2023',
            RETURN_DATE: '15.05.2023'
        });
        expect(Item.body.message).toBe("update successfully!");
        expect(Item.statusCode).toBe(200);

    });
});

describe("POST /warehouse/UpdateItem", () => {
    it("It should respond 'update successfully!'", async () => {
        const Item = await request(app).post("/warehouse/UpdateItem").send({
            STATUS: 'FAULTY',
            NAME: 'Sony A7III',
            S_N: '4476762'
        });
        expect(Item.body.message).toBe("update successfully!");
        expect(Item.statusCode).toBe(200);

    });
});

describe("DELETE /warehouse/deleteItem", () => {
    it("It should respond 'delete successfully!'", async () => {
        const Item = await request(app).delete("/warehouse/deleteItem").send({
            NAME: 'Sony A7III',
            S_N: '4476762'
        });
        expect(Item.body.message).toBe("delete successfully!");
        expect(Item.statusCode).toBe(200);

    });
});

describe("POST /warehouse/add", () => {
    it("It should respond 'New item successfully added'", async () => {
        const Item = await request(app).post("/warehouse/add").send({
            NAME: 'Sony A7III',
            S_N: '4476762', 
            CATEGORY: 'CAMERA'
        });
        expect(Item.body.message).toBe("New item successfully added");
        expect(Item.statusCode).toBe(200);

    });
});