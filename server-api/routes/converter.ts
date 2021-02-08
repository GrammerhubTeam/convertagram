import express, { Request, Response } from "express";
import { lengthUnits } from "../data/length";
import { massUnits } from "../data/mass";
import { ConverterValue, Units } from "../models/converter.model";
import { timeUnits } from "../data/time";
import { temperatureUnits } from "../data/temperature";

/** Route that will be added to the express */
const router = express.Router();
const path: string = "/api/v1/converter";
const units: Units = { ...lengthUnits, ...massUnits, ...timeUnits, ...temperatureUnits };

// Define routes
router.get(path, async (req: Request, res: Response) => {
	return res.status(200).send("Got an unit");
});

//http://localhost:3001/api/v1/converter/m/cm/245
router.get(path + '/:from/:to/:value', (req: Request<ConverterValue>, res: Response): void => {
	
	const converterValues = req.params;
	/**
	 * converterValues = {from: 'm', to: 'cm', value: 245}
	 * units = { 
	 * 	m: {...} UnitReference
	 *  mm: {...}
	 *  cm: {...}
	 * }
	 * units[converterValues.from].factor / units[converterValues.to].factor * converterValues.value;
	 * units['m'].factor / units['cm'].factor * 245
	 * 1 / 0.01 *245
	 */

	const val = units[converterValues.from].factor / units[converterValues.to].factor * converterValues.value;
	//TODO: CHECK ON THE STATUS THINGY
	res.status(200).send(JSON.stringify(val));
});


// Export the route
export { router as converterRouter };

