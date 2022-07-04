import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {

  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  return (
    <Stack gap="60px" sx={{flexDirection :{ lg:'row'}, p :"20px", alignItems: 'center'}} >
      <img src={gifUrl} alt={name} Loading ="lazy" className ="detail-image"/>
      <Stack sx={{gap: {lg: '35px'}, xs:'28px'}}>
        <Typography fontSize='25px' variant='h4' >
          {name}
        </Typography>
        <Typography>
           {name} {``} is one of the best exercise to target your {target}.
            It will help you grow your {target}
        </Typography>
        <Button
        sx={{ml : '21px', 
        color: '#fff',
        background : '#FFA9A9', 
        fontSize: '14px',
        borderRadius: '20px',
        textTransform:'capitalize'
        }}>
          {bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {target}
        </Button>
        <Typography>
          At this stage, the requirement of equipment will be {equipment}.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail