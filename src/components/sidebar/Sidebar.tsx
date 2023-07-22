import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { menu } from './menu';
import { AnimatePresence, motion } from 'framer-motion';
import { IconContext } from 'react-icons';

import './sidebar.scss';
import { useState } from 'react';

const Sidebar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const toggle = () => setSideBarOpen(!isSideBarOpen);
  return (
    <>
      <motion.div
        animate={{ width: isSideBarOpen ? 300 : 50, opacity: 100 }}
        initial={{ width: 0, opacity: 50 }}
        className="sidebar">
        <div className="hamburger-container flex align-center">
          <AnimatePresence>{isSideBarOpen && <h5 className="text-white px-10">ADMIN DASHBOARD</h5>}</AnimatePresence>
          <IconContext.Provider value={{ className: 'hamburger-icon flex align-center' }}>
            <RxHamburgerMenu onClick={toggle} />
          </IconContext.Provider>
        </div>

        <div className="text-white">
          {menu.map((item) => (
            <div key={item.id} className="align-center">
              <Link to={item.url} className="sidenav-item text-white align-center">
                <IconContext.Provider value={{ className: 'text-white' }}>
                  <item.icon />
                </IconContext.Provider>
                {isSideBarOpen && <label>{item.name}</label>}
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
