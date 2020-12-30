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
  return (
    <BasicTable headers={headers} items={items} />
  )
}

export default WorkoutsView
