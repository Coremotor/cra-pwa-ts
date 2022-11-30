import React from "react";
import { TabBar } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesNames } from "routes/routesNames";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as DocsIcon } from "assets/icons/docs.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile.svg";
import { ReactComponent as HomeIconActive } from "assets/icons/home-active.svg";
import { ReactComponent as DocsIconActive } from "assets/icons/docs-active.svg";
import { ReactComponent as ProfileIconActive } from "assets/icons/profile-active.svg";

const tabs = [
  {
    key: RoutesNames.home,
    title: "Home",
    icon: (active: boolean) => (active ? <HomeIconActive /> : <HomeIcon />),
  },
  {
    key: RoutesNames.docs,
    title: "Документы",
    icon: (active: boolean) => (active ? <DocsIconActive /> : <DocsIcon />),
  },
  {
    key: RoutesNames.profile,
    title: "Профиль",
    icon: (active: boolean) =>
      active ? <ProfileIconActive /> : <ProfileIcon />,
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };
  return (
    <TabBar
      safeArea
      activeKey={pathname}
      onChange={(value) => setRouteActive(value)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Navigation;
