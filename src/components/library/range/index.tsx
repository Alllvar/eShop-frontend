import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,max-len
const RangeSlider = (
  { priceFrom, priceTo, handleRange }: {
    priceFrom: number,
    priceTo: number,
    handleRange: (priceFrom: number, priceTo: number) => void
  },
): JSX.Element => {
  const [value, setValue] = React.useState<number[]>([priceFrom, priceTo]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    const [from, to] = newValue as number[];
    handleRange(from, to);
  };

  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default RangeSlider;
