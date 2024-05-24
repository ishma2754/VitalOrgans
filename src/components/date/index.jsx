import React from 'react';
import { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GlobalContext } from '../../context';


export default function DateInput (){
  const {selectedDate, setSelectedDate} = useContext(GlobalContext);
  
  function handleDateChange (newDate){
    
    setSelectedDate(newDate);
    console.log(newDate);
  }

  console.log();

  return (
    <div className='max-w-sm flex justify-center mt-10'>

      <div className='flex items-center ps-3.5 pointer-events-none'>

      <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      
      </div>

        <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat='dd/MM/yyyy'
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholderText="Select date"
      />


    </div>
  )
}