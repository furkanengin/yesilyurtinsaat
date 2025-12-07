import { MenuItem } from "@/types/menu-d-t";

const headerMenuData:MenuItem[] = [
  {
    id: 1,
    active: true,
    title: "Anasayfa",
    pluseIncon: false,
    link: "#",
  },
  {
    id: 2,
    active: false,
    children: false,
    title: "Hakkımızda",
    pluseIncon: false,
    link: "#",
    smallMenu: false,
  },
  {
    id: 3,
    hasDropdown: true,
    active: false,
    children: false,
    title: "Portfolyo",
    pluseIncon: false,
    mediumMenu: false,
    link: "#",
  },
  {
    id: 4,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: false,
    title: "Blog",
    pluseIncon: false,
    link: "#",
  },
];
export default headerMenuData;

