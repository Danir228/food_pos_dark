interface TypeSidebarItems {
  id: number;
  icon: string;
  url: string;
  url2: string;
}

export const sidebarItems: TypeSidebarItems[] = [
  {
    id: 1,
    url: "/home",
    url2: "/hot-dishes",
    icon: "icon-home",
  },
  {
    id: 2,
    url: "/discount",
    url2: "",
    icon: "icon-discount",
  },
  {
    id: 3,
    url: "/dashboard",
    url2: "",
    icon: "icon-dashboard",
  },
  {
    id: 4,
    url: "/message",
    url2: "",
    icon: "icon-message",
  },
  {
    id: 5,
    url: "/notification",
    url2: "",
    icon: "icon-notification",
  },
  {
    id: 6,
    url: "/settings",
    url2: "/management/hot-dishes",
    icon: "icon-settings",
  },
  {
    id: 7,
    url: "/logout",
    url2: "",
    icon: "icon-logout",
  },
];
