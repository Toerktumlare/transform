import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import ExerciseList from './ExerciseList'
import ExerciseForm from './ExerciseForm'
import {
  useMutation,
  useQuery
} from "@apollo/client"
import { 
  GET_EXERCISES,
  CREATE_EXERCISE, 
} from './ExerciseQueries'
import { GET_CATEGORIES } from '../../api/queries/categories'
import ClipLoader from "react-spinners/ClipLoader"

const ExerciseView = () => {

  const [createExercise] = useMutation(CREATE_EXERCISE);
  const exercises = useQuery(GET_EXERCISES);
  const categories = useQuery(GET_CATEGORIES)
  const [name, setName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()
    createExercise({ 
      variables: { input: { name } },
      refetchQueries: [{ query: GET_EXERCISES }]
    }).then(() => {
      setName('')
    })
  }

  const onInputChange = (e) => {
    setName(e.target.value)
  }

  const onCategoryChange = (e) => {
    console.log("im changinged")
  }

  if(categories.loading || categories.error) {
    return (<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <ClipLoader
      size={75}
      color={"#123abc"}
      loading={categories.loading}
    />
  </Box>)
  }

  return (
    <Box display="flex" justifyContent="space-around">
      <ExerciseForm 
        onSubmit={handleSubmit} 
        value={name} 
        onInputChange={onInputChange} 
        selectedCategory={selectedCategory} 
        onCategoryChange={onCategoryChange} 
        categories={categories.data.categories}
      />
      <ExerciseList border={1} data={exercises.data} loading={exercises.loading} error={exercises.error} />
    </Box>
  )
}

export default ExerciseView
