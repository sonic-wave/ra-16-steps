import React from 'react';
import { IRecord } from '../../App';
import './DisplayInfo.css';

interface DisplayInfoProps {
  records: IRecord[];
  handleDelete: (date: string) => void;
}

export const DisplayInfo: React.FC<DisplayInfoProps> = ({ records, handleDelete }) => {
  return (
    <div className='displayContainer'>
      <div className='infoContainer'>
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      {records.map((record) => (
        <div className='valueContainer' key={record.date}>
          <div className='dateDiv'>{record.date}</div>
          <div className='distanceDiv'>{record.distance}</div>
          <div className='actionsDiv'>
            <button className='actionsBtn' onClick={() => handleDelete(record.date)}>
              &#10060;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
