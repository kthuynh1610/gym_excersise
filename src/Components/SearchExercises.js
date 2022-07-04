import React, {useEffect, useState} from 'react'
import {Box, Stack, TextField, Button, Typography} from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScollBar from './HorizontalScollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const[search,setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    useEffect(() =>{
        const fetchExerciseData = async () =>{
           const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
           exerciseOptions);
           setBodyParts(['all', ...bodyPartsData]);
         }
         fetchExerciseData();
    }, [])
    const handleSearch = async () =>{
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
         exerciseOptions);
      const SearchExercises = exercisesData.filter((exercise) =>exercise.name.toLowerCase().includes(search)
    ||exercise.target.toLowerCase().includes(search)
    ||exercise.bodyPart.toLowerCase().includes(search)
    ||exercise.equipment.toLowerCase().includes(search)
     );
     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(SearchExercises);
    }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
       fontSize: {lg: '44px', xs:'30px'}
      }} mb="50px" textAlign="center">
        Awesome Exercise You <br/> Should Know
      </Typography>
      <Box>
        <TextField
        sx={{
            input: {
                fontWeight:'700',
                borderRadius:'4px',
                border:'none'
            },
            width: {lg: '800px', xs:'350px'},
            backgroundColor: '#FFF',
            borderRadius: '40px'
        }}
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exsercises"
        type="text"
        />
        <Button className="search-btn" 
        sx={{
            borderRadius: '4px',
            border: 'none', 
            backgroundColor: '#FF2625',
            textTransform: 'none',
            width: {lg: '175px', xs:'80px'},
            fontSize: {lg: '20px', xs :'12px'},
            position: "absolute",
            height: '56px'
        }}
        onClick={handleSearch}
        >
            Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', witdh: '100%' , p: '20px'}}>
         <HorizontalScollBar data={bodyParts} 
          bodyPart = {bodyPart}
          setBodyPart = {setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises