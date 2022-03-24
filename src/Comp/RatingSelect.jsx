import React, { useState ,useEffect} from 'react'
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
  color: '#ff6a95',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-markLabel':{
    color: '#ff6a95'
  },

  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#ff6a95',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
  const marks = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 10,
      label: 10,
    },
  ];
const RatingSelect = ({select ,editMode}) => {
    const [range , setRange] = useState(null)
    const [updRating, setUpdRating] = useState(null)
    
    useEffect(()=>{
      setUpdRating(localStorage.getItem('rating'))
      console.log(updRating)
    },[editMode])
    
  return (
    <div >
        <h3>Select rating</h3>
        <PrettoSlider
        sx={{margin:'20px' }}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        step={1}
        marks={marks}
        color='secondary'
        min={1}
        max={10}
        
        value={editMode ? +updRating : range}

        onChange={(e)=>{ 
        select(+e.target.value)
        setUpdRating(+e.target.value)
        setRange(+e.target.value)
      }}
      />
      {/* editMode{editMode.toString()}<br/>
      upd Rating{updRating}<br/>
      type of upd {typeof(Number(updRating))} */}
       
    </div>
  )
}


export default RatingSelect
