import { Checkbox } from '@mui/material';
import { amber, blue, blueGrey, common, grey, pink } from '@mui/material/colors';
import * as React from 'react'
import { tasks } from '../data/tasks';
import './Main.scss'

const Main = () => {
    return (
        <div className='main'>
            {tasks.map(el =>
                <div key={el.id} className='task' style={{ backgroundColor: `${el.color}` }}>
                    {el.name}
                    <Checkbox sx={{
                        color: common['black'],
                        '&.Mui-checked': {
                            color: common['black'],
                        },
                    }} />
                </div>
            )}
        </div>
    );
}

export default Main;