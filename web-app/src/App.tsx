import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Heading, FormControl, Button, NumberInput, NumberInputField, Select, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { ConverterResponse, Units } from './model/units';


function App() {
  // We need to pass converter units here
  // FIll the select field with the unit, using map function,
  //populate selectsn
  //
  const [units, setUnits] = useState<Units>({});
  const [unitsType, setUnitsType] = useState<string[]>([]);
  const [fromSelect, setFromSelect] = useState<string[]>([]);
  const [toSelect, setToSelect] = useState<string[]>([]);
  const [unit, setUnit] = useState<string>();
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();
  const [value, setValue] = useState<number>();
  const [round, setRound] = useState<number | null>();
  const [convertedValue, setConvertedValue] = useState<ConverterResponse>()

  useEffect(() => {
    const loadUnits = async () => {
      const units = await axios.get<Units>('http://localhost:3001/api/v1/converter/units');
      setUnits(units.data);
      const unitTypeArray = filterUnits(units.data);
      setUnitsType(unitTypeArray);

    }
    loadUnits();

  }, [])

  //send call to convert
  //display data
  //optional validation
  const unitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val: string = e.target.value;
    console.log(val)
    if (val) {
      const filteredUnits = Object.keys(units).filter(u => units[u].type === val);
      setToSelect(filteredUnits);
      setFromSelect(filteredUnits);
      setUnit(val);
    }
  }

  const fromChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFrom(e.target.value);
  const toChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTo(e.target.value)
  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value));
  const roundChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.value) setRound(Number(e.target.value));
    else setRound(null);
  }

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    if(!from && !to && !value) return;
    const converted = await axios.get<ConverterResponse>(`http://localhost:3001/api/v1/converter/${from}/${to}/${value}/${round ?? ""}`)
    setConvertedValue(converted.data);
    console.log(converted.data);
  }
  const filterUnits = (units: Units) => {
    const unitArray = Object.keys(units).map(u => units[u].type);
    return removeDuplicates(unitArray);
  }

  function removeDuplicates(array: string[]) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };

  return (
    <Box className="App" maxWidth={700} marginX="auto">
      <Box textAlign="center">
        <Heading>Convertagram</Heading>
      </Box>

      <Box width="auto" py={4} mr={12} spacing={5}>
        <form>
          <FormControl isRequired>
            <Select onChange={unitChange} placeholder="Select a unit type" mb={10}>
              {unitsType.map(u => <option key={u} value={u}>{u}</option>)}
              {/* loop through the unit in units */}
            </Select>
            <Select onChange={fromChange} placeholder="From" mb={10}>
              {unit && (fromSelect.map(u => <option key={u} value={u}>{u}</option>))}
            </Select>
            <Select onChange={toChange} placeholder="To" mb={10}>
              {unit && (toSelect.map(u => <option key={u} value={u}>{u}</option>))}
            </Select>
            <NumberInput mb={10}>
              <NumberInputField onChange={valueChange} placeholder="Value" />
            </NumberInput>
          </FormControl>
          <FormControl>
            <NumberInput mb={10}>
              <NumberInputField onChange={roundChange} placeholder="Round to" />
            </NumberInput>
          </FormControl >
          <Button onClick={submitHandler} mb={10}>Convert</Button>
        </form>

        <Box>
          <Heading as="h3" size="lg">{convertedValue?.convertedValue}</Heading>
        </Box>
      </Box>

    </Box>
  );
}

export default App;
