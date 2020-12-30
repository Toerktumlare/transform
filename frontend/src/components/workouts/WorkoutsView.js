import React from 'react'
import BasicTable from '../common/BasicTable'

const headers = [
  "name",
  "categories",
  "id"
]

const items = [
  {
    "name": "Squats",
    "category": "Legs",
    "id": 1,
  },
  {
    "name": "WallBalls",
    "category": "Legs",
    "id": 2,
  }
]

const WorkoutsView = () => {

  const handleClick = (e, item) => {
    if (item !== undefined) {
      console.log(item);
    }
  }

  return (
    <BasicTable headers={headers} items={items} size="small" hover onClick={handleClick}/>
  )
}

export default WorkoutsView
