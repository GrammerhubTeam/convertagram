import express, { Request, Response } from "express";
import { lengthUnits } from "../data/length";
import { massUnits } from "../data/mass";
import { ConverterValue, Units, ConverterResponse } from "../models/converter.model";
import { timeUnits } from "../data/time";
import { storageUnits } from '../data/storage'
import { temperatureUnits } from "../data/temperature";

/** Route that will be added to the express */
const router = express.Router();
const path: string = "/api/v1/converter";
const units: Units = { ...lengthUnits, ...massUnits, ...timeUnits, ...temperatureUnits, ...storageUnits };

// Define routes
router.get(path, async (req: Request, res: Response) => {
  return res.status(200).send("Got an unit");
});

//http://localhost:3001/api/v1/converter/m/cm/245
router.get(path + '/:from/:to/:value', (req: Request<ConverterValue>, res: Response): void => {

  const converterValues = req.params;
  const from = units[converterValues.from] ?? null;
  const to = units[converterValues.to] ?? null;
  const value = +converterValues.value;
  const response: ConverterResponse = { status: 200 };

  if (!from) {
    response.error['from'] ='Parameter is not in the converter'};
    response.status = 400;
  }

  if (!to) {
    response.error['to'] ='Parameter is not in the converter'};
    response.status = 400
  }
  if (!value) {
    response.error['value'] ='Parameter is not a number'};
    response.status = 400
  }

  // == this checks only the value 
  if (from.type !== to.type) {
    response.error['type'] ='Type of both units are not the same'};
    response.status = 400
  };   

  //TODO: floating point with a limit on digits
  //TODO: Update after destructuring
  response.converterValue = from.factor / to.factor * value;

  //TODO: CHECK ON THE STATUS THINGY
  //TODO: ADD CATCH with proper status code
  res.status(response.status).send(JSON.stringify({...response.converterValue, ...response.errors}));
});


// Export the route
export { router as converterRouter };

