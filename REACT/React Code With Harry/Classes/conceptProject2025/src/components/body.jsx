import React from 'react';
import Cal_inp from './calulater_comp/cal_inp_box';
import Cal_btns from './calulater_comp/cal_btns';
import TodoInp from './ToDoComponents/TodoInp';
import Lists from './ToDoComponents/lists';
import TodoContextProvider from './ToDoComponents/TodoStorage';
export default function bodycontent() {
  return (
    <div className='m-5 h-fit bg-gray-100 justify-center gap-3 grid p-3'>
      <TodoContextProvider>
        <div className='h-fit bg-gray-400 grid gap-2 justify-center p-3 shadow-sm rounded-lg'>
        {/* grid-rows-[30px,30px,170px] */}
          <h1 className='flex justify-center font-bold'>To Do List</h1>
          <TodoInp/>
          <div className='grid gap-2'>
            <Lists/>
          </div>
        </div>
      </TodoContextProvider>
      <div className='bg-gray-400 gap-3 w-fi h-fit grid grid-rows-[30px,30px,170px] justify-center p-3 shadow-sm rounded-lg'>
        <h1 className='flex  justify-center font-bold'>Calculater</h1>
        <Cal_inp />
        <Cal_btns />
      </div>
    </div>
  );
};
