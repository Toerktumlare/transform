import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import StyledSelect from '../../common/StyledSelect';
import ForMinutesInput from './ForMinutesInput';
import ForRoundsInput from './ForRoundsInput';
import SelectableTable from '../SelectableTable';

const createStyles = makeStyles((theme) => ({

}))

const WorkoutTypeInput = (props) => {

    const values = [
        {
            id: "0",
            name: "AMRAP"
        },{
            id: "1",
            name: "EMOM"
        },
        {
            id: "2",
            name: "E90"
        },{
            id: "3",
            name: "E2M"
        },{
            id: "4",
            name: "E2:30M"
        },{
            id: "5",
            name: "E3M"
        },{
            id: "6",
            name: "EVERY (custom)"
        },
    ];

    const [workoutType, setWorkoutType] = useState(values[0].id);

    const onChange = (e) => {
        e.preventDefault();
        console.log("Select me!");
        setWorkoutType(values[e.target.value].id);
    }

    let workoutTypeComponent;
    switch(workoutType) {

        case values[0].id:
            workoutTypeComponent = <ForMinutesInput />
            break;
        case values[1].id:
            workoutTypeComponent = <ForMinutesInput />
            break;
        default:
            workoutTypeComponent = <ForRoundsInput />;
    }

    return (
        <Box display="flex" flexGrow="1">
            <Box display='flex' flexDirection="column" flexGrow="3" mr={4}>
                <StyledSelect label="WorkoutType" values={values} value={workoutType} onChange={onChange} mb={2} />
                {workoutTypeComponent}
            </Box>
            <Box flexGrow="1">
                <SelectableTable />
            </Box>
        </Box>
    )
}

export default WorkoutTypeInput;