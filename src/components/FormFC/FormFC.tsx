import React from 'react'
import './FormFC.css'
import { IForm } from '../../App'

export const FormFC = ({handleSubmit, handleChange, form}: {form: IForm, handleSubmit:React.FormEventHandler<HTMLFormElement>, handleChange: React.ChangeEventHandler<HTMLInputElement>}) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='formDate'>
        <label htmlFor='date'>
            Дата (дд.мм.гг)
        </label>
        <input type='date' id='date' name='date' value={form.date} onChange={handleChange}/>
        </div>
        <div className='formDistance'>
        <label htmlFor='distance'>
            Пройдено км
        </label>
        <input type='text' id='distance' name='distance' value={form.distance} onChange={handleChange} />
        </div>
        <button type='submit'>OK</button>
    </form>
  )
}
