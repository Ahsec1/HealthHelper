import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { Badge } from '@mui/material';

function calendar() {
  return (
    <div className= 'absolute'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar showDaysOutsideCurrentMonth></DateCalendar>
        </LocalizationProvider>
    </div>
  )
}

export default calendar