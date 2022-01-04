import {useEffect, useState} from 'react';

import ReportCard from './ReportCard';
import data from '../data.json';
import ellipsis from '../assets/icon-ellipsis.svg';

const byDate = [...new Set(Object.keys(data[0].timeframes))];

export default function Index() {
  const [personData, setPersonData] = useState();
  const [filterByDate, setFilterByDate] = useState();

  useEffect(() => {
    setPersonData(data);
    setFilterByDate(byDate[1]);
  }, []);

  return (
    <main className="timeTrackingSection">
      <section className="report">
        <div className="profile">
          <div className="image">
            <img
              src={require('../assets/image-jeremy.png')}
              alt="profile icon"
            />
          </div>
          <div className="person">
            Report for<h4>jeremy robson</h4>
          </div>
        </div>
        <div className="date">
          {byDate.map(item => (
            <span
              key={item}
              className={item === filterByDate ? 'active' : ''}
              onClick={e => setFilterByDate(e.target.textContent)}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
      {personData &&
        personData.map((item, index) => (
          <ReportCard
            key={index}
            menuIcon={ellipsis}
            filter={filterByDate}
            {...item}
          />
        ))}
    </main>
  );
}
