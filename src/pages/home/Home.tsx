import Charts from '../../components/charts/Charts';
import TopBox from '../../components/topbox/TopBox';
import './home.scss';

import { chartsData } from './data';
const Home = () => {
  return (
    <div className="home">
      <div className="item item-1">
        <TopBox />
      </div>
      <div className="item item-2">
        <Charts {...chartsData} />
      </div>
      <div className="item item-3">
        <Charts {...chartsData} />
      </div>
      <div className="item item-4">4</div>
      <div className="item item-5">
        <Charts {...chartsData} />
      </div>
      <div className="item item-6">
        <Charts {...chartsData} />
      </div>
      <div className="item item-7">7</div>
      <div className="item item-8">8</div>
      <div className="item item-9">9</div>
    </div>
  );
};

export default Home;
