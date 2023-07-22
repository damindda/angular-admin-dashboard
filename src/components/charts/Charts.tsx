import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import './charts.scss';

type Props = {
  color: string;
  icons: string;
  title: string;
  datakey: string;
  number: number;
  percentage: number;
  chartdata: [];
};

const CalendarDate = styled(CiCalendarDate)`
  color: purple;
  transform: scale(2);
  margin: 5px;
`;

const Charts = (props: Props) => {
  return (
    <div className="chart-container flex">
      <div className="user-info">
        <div className="title">
          <CalendarDate />
          <label className="title">{props.title}</label>
          <h2>{props.number}</h2>
          <Link to="/" style={{ color: props.color }}>
            View All
          </Link>
        </div>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartdata}>
              <Tooltip contentStyle={{ background: 'transparent', border: 'none' }} labelStyle={{ display: 'none' }} />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="info">
          <div className="percantage" style={{ color: props.percentage < 40 ? 'limegreen' : 'red' }}>
            props.percentage
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
