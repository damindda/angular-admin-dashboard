import './topnavbar.scss';

const TopNavbar = () => {
  return (
    <div className="top-navbar flex">
      <div className="logo flex">LOGO</div>
      <ul className="flex">
        <li>search</li>
        <li>dashboard</li>
        <li>notifications</li>
      </ul>
    </div>
  );
};

export default TopNavbar;
