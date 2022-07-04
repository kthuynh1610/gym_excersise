import React, {useState, useEffect} from 'react'
import { Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {exerciseOptions, fetchData } from '../utils/fetchData';

import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercise from '../Components/SimilarExercise';


const ExerciseDetail = ({exercise}) => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id}  = useParams();

  useEffect(()=>{
     const fetchExerciseData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =  'https://youtube-search-and-download.p.rapidapi.com';

     const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
     setExerciseDetail(exerciseDetailData);
     }

     fetchExerciseData();
  }, [id])

  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
    </Box>
  )
}

export default ExerciseDetail
