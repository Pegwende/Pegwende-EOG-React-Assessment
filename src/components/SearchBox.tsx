import { Button } from '@material-ui/core';
import React from 'react';
import Select from 'react-select';
// interface Props {
//   text: string;
// }

export const SearchBox = () => {
  const options = [
    { value: 'casingPressure', label: 'casingPressure' },
    { value: 'injValveOpen', label: 'injValveOpen' },
    { value: 'tubingPressure', label: 'tubingPressure' },
    { value: 'flareTemp', label: 'flareTemp' },
    { value: 'oilTemp', label: 'oilTemp' },
    { value: 'waterTemp', label: 'waterTemp' },
  ];

  const func = () => (
    // eslint-disable-next-line no-alert
    alert('Clicked')
  );

  return (

    <>
      <Select
        onClick={() => { alert('Clicked'); }}
        isMulti
        options={options}
      />
      <Button onClick={func} variant="contained" color="secondary">
        Submit
      </Button>
    </>

  );
};
