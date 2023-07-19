import './topnavbar.scss';

const TopNavbar = () => {
  return (
    <div className="top-navbar flex align-center space-between">
      <div className="logo-container flex align-center ">
        <img src="/public/favicon.svg" className="logo" /> <label className="px-10 text-white">HR Dashboard</label>
      </div>
      <div className="top-nav-items flex">
        <ul className="flex">
          <li>search</li>
          <li>dashboard</li>
          <li>notifications</li>
        </ul>
        <div className="user-settings flex align-center text-white">
          <label>David Walker</label>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
