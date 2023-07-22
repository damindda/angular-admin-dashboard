import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { menu } from './menu';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <>
      <motion.div animate={{ width: '300px' }} className="sidebar">
        <div className="hamburger-container flex align-center">
          <h5 className="text-white px-10">ADMIN DASHBOARD</h5>
          <IconContext.Provider value={{ className: 'hamburger-icon flex' }}>
            <RxHamburgerMenu />
          </IconContext.Provider>
        </div>

        <div className="text-white">
          {menu.map((item) => (
            <div key={item.id} className="align-center">
              <Link to={item.url} className="text-white align-center">
                <IconContext.Provider value={{ className: 'hamburger-icon' }}>
                  <item.icon />
                </IconContext.Provider>
                <label className="px-10">{item.name}</label>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
