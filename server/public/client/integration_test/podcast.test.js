// // Import necessary testing libraries (e.g., Mocha, Chai, and supertest)
// const { expect } = require('chai');
// const request = require('supertest');

// // Import the server file that serves the page
// const app = require('C:/Users/yamb1/OneDrive/מסמכים/GitHub/BS-PMC-2023-Team3/server/server.js'); // Replace './server' with the actual server file path

// describe('Page Integration Tests', () => {
//   describe('GET /warehouse/getAllPS', () => {
//     it('should return a list of items from the server', async () => {
//       const response = await request(app).get('/warehouse/getAllPS');
//       expect(response.status).to.equal(200); // Ensure that the response status is 200 (OK)
//       expect(response.body).to.be.an('array'); // Ensure that the response body is an array
//       // Add more assertions as needed to validate the response body
//     });
//   });

//   describe('POST /orders/addOrderForPS', () => {
//     it('should add an order for a podcast', async () => {
//       const orderData = {
//         USERNAME: 'testuser',
//         TYPE: 'podcast',
//         NUM: 3,
//         DATE_TIME: '2023-05-31 10:00',
//       };
//       const response = await request(app)
//         .post('/orders/addOrderForPS')
//         .send(orderData);
//       expect(response.status).to.equal(200); // Ensure that the response status is 200 (OK)
//       expect(response.body).to.have.property('message'); // Ensure that the response body has a 'message' property
//       // Add more assertions as needed to validate the response body
//     });

//     it('should return an error if date and time are not provided', async () => {
//       const orderData = {
//         USERNAME: 'testuser',
//         TYPE: 'podcast',
//         NUM: 3,
//         DATE_TIME: '',
//       };
//       const response = await request(app)
//         .post('/orders/addOrderForPS')
//         .send(orderData);
//       expect(response.status).to.equal(400); // Ensure that the response status is 400 (Bad Request)
//       expect(response.body).to.have.property('message'); // Ensure that the response body has a 'message' property
//       // Add more assertions as needed to validate the response body
//     });
//   });

//   // Add more integration tests as needed for other endpoints and functionalities
// });
