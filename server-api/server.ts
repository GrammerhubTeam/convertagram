import express from "express";
import { exampleRouter } from "./routes/example";
import cors from "cors";
import { converterRouter } from "./routes/converter";

/** Express server */
const app: express.Application = express();

//  Expres internal Bodyparser implementations for parsing request body
app.use(express.json());
app.use(cors());

//ROUTES
app.use(exampleRouter); // '/api/v1/example'
app.use(converterRouter); // '/api/v1/converter'
// I'm used to these looking like
// Testing contribution
// app.use('/api/v1/', converterRouter)

//LANDING PAGE
app.get("/", function (req, res) {
	res.send("Hello Grammers & Goats!");
});

app.get("/welcome", function (req, res) {
	res.send("Welcome to express");
});

app.listen(3001, function () {
	console.log("App is listening on port 3001!");
});
