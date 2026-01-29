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
    title: "Kentsel Dönüşüm",
    pluseIncon: false,
    link: "https://www.cityvenn.com/",
    smallMenu: false,
  },
  {
    id: 3,
    hasDropdown: true,
    active: false,
    children: false,
    title: "İstanbul",
    pluseIncon: false,
    mediumMenu: false,
    link: "yakinda",
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

