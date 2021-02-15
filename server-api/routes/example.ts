import express, { Request, Response } from 'express';
import { Example } from '../models/example.model';

/** Route that will be added to the express */
const router = express.Router();
const path: string = '/api/v1/example';

// Define routes
router.get(path, async (req: Request, res: Response) => {
  return res.status(200).send('Got an example');
});

router.post(path, async (req: Request, res: Response) => {
  //TODO: ADD A METHOD TO GENERATE CREATED/MODIFIED INFO
  const createExample = (cookExample: Example): void => {
    // Check if new conversion has been added
    cookingUnits.push(cookExample);
    console.log(cookingUnits);
  };

  // Set example for conversion
  const cookingUnits: Example[] = [{ pound: '1' }, { ounces: '16' }];

  const newExample: Example = { ...req.body };
  createExample(newExample);
  console.log(newExample);

  return res.status(201).send(newExample);
});

// Export the route
export { router as exampleRouter };
