import express, { Request, Response } from "express";
import { lengthUnits } from "../data/length";
import { massUnits } from "../data/mass";
import { ConverterValue, Units, ConverterResponse } from "../models/converter.model";
import { timeUnits } from "../data/time";
import { storageUnits } from '../data/storage';
import { temperatureUnits } from "../data/temperature";

/** Route that will be added to the express */
const router = express.Router();
const path: string = "/api/v1/converter";
const units: Units = { ...lengthUnits, ...massUnits, ...timeUnits, ...temperatureUnits, ...storageUnits };

// Define routes
router.get(path, async (req: Request, res: Response) => {
	return res.status(200).send("Got an unit");
});

//http://localhost:3001/api/v1/converter/m/cm/245/3
router.get(path + '/:from/:to/:value/:round?', (req: Request<ConverterValue>, res: Response): void => {

	const converterValues = req.params;
	const from = units[converterValues.from] ?? null;
	const to = units[converterValues.to] ?? null;
	const value = +converterValues.value;
	const response: ConverterResponse = { status: 200, errors: {} };
	let roundValue;

	if (!from) {
		response.errors['from'] = 'Parameter is not in the converter';
		response.status = 400;
	}

	if (!to) {
		response.errors['to'] = 'Parameter is not in the converter';
		response.status = 400
	}
	if (!value) {
		response.errors['value'] = 'Parameter is not a number';
		response.status = 400
	}

	if (from?.type !== to?.type) {
		response.errors['type'] = 'Type of both units are not the same';
		response.status = 400
	};

	if (converterValues.round) {
		roundValue = Number(converterValues.round)
		if (isNaN(roundValue)) {
			response.errors['round'] = 'Round cannot be a string';
			response.status = 400
		}
		else if (converterValues.round < 0) {
			response.errors['round'] = 'Round cannot be a negative number';
			response.status = 400
		}
		else {
			roundValue = roundValue > 17 ? 17 : roundValue;
		}
	} else {
		roundValue = 17; // this was the missing piece if there's no value
	}

	// TODO: Add temperature
	// TODO: route to get possible units
	// TODO: Easter eggs

	if (response.status !== 400) response.convertedValue = Number((from.factor / to.factor * value).toFixed(roundValue));

	//TODO: ADD CATCH with proper status code in case of 500 server error
	res.status(response.status).send(JSON.stringify({ errors: { ...response.errors }, convertedValue: response.convertedValue }));
});

//start here
// TODO - Return what units we accept. Units come from the variable "units"
// return value is: JSON object with all units
// res.send(JSON.parse())
// 
router.get(path + '/units', (req: Request<ConverterValue>, res: Response): void => { 
	res.status(200).send(JSON.stringify(units));
});


// Export the route
export { router as converterRouter };

