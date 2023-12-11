const app = require("../app")
const supertest = require("supertest")

test("GET /", async () => {
	await supertest(app)
		.get("/")
		.expect(200)
        .expect('Content-Type', /json/)
		.then((response) => {
            expect(JSON.parse(response.text).message).toBe('This will demo node test and CICD and Webhook.');
		})
});
