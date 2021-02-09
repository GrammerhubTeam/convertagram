import express, { Request, Response } from "express";
import { lengthUnits } from "../data/length";
import { massUnits } from "../data/mass";
import { ConverterValue, Units } from "../models/converter.model";
import { timeUnits } from "../data/time";
import { storageUnits } from '../data/storage'
import { temperatureUnits } from "../data/temperature";

/** Route that will be added to the express */
const router = express.Router();
const path: string = "/api/v1/converter";
const units: Units = {...lengthUnits, ...massUnits, ...timeUnits, ...temperatureUnits, ...storageUnits };

// Define routes
router.get(path, async (req: Request, res: Response) => {
	return res.status(200).send("Got an unit");
});

//http://localhost:3001/api/v1/converter/m/cm/245
router.get(path + '/:from/:to/:value', (req: Request<ConverterValue>, res: Response): void => {
	
	const converterValues = req.params;
  const from = units[converterValues.from] ?? null;
  const to = units[converterValues.to] ?? null;
  const value = converterValues.value;

  if (!from) res.status(400).send(JSON.stringify({message: 'From parameter is not in the converter'}));
  if (!to) res.status(400).send(JSON.stringify({message: 'To parameter is not in the converter'}));
  if (typeof value !== 'number') res.status(400).send(JSON.stringify({message: 'Value parameter is not a number'}));

  //TODO: floating point with a limit on digits
  //TODO: Update after destructuring
	const val = units[converterValues.from].factor / units[converterValues.to].factor * converterValues.value;
	//TODO: CHECK ON THE STATUS THINGY
  //TODO: ADD CATCH with proper status code
	res.status(200).send(JSON.stringify(val));
});


// Export the route
export { router as converterRouter };

