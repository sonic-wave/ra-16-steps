import React, { useState } from 'react'
import './App.css'
import { DisplayInfo } from './components/DisplayInfo/DisplayInfo'
import { FormFC } from './components/FormFC/FormFC'

export interface IForm {
  date: string,
  distance: string
}

export interface IRecord {
  date: string;
  distance: number;
}

function App() {
  const [form, setForm] = useState({
    date: '',
    distance: ''
  })

  const [records, setRecords] = useState<IRecord[]>([]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm, [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDate = form.date;
    const newDistance = Number(form.distance);

    setRecords((prevRecords) => {
      const existingRecord = prevRecords.find(record => record.date === newDate);
      if (existingRecord) {
        return prevRecords.map(record => 
          record.date === newDate
            ? { ...record, distance: record.distance + newDistance }
            : record
        );
      } else {
        return [...prevRecords, { date: newDate, distance: newDistance }].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    });

    setForm({ date: '', distance: '' });
  };

  const handleDelete = (date: string) => {
    setRecords((prevRecords) => prevRecords.filter(record => record.date !== date));
  };

  return (
    <>
      <FormFC handleSubmit={handleSubmit} handleChange={handleChange} form={form} />
      <DisplayInfo records={records} handleDelete={handleDelete}  />
    </>
  )
}

export default App
