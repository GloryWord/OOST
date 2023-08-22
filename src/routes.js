import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import Tablolist from "views/admin/tabloList";
import Tablo1 from "views/admin/tablo1";
import Tablo2 from "views/admin/tablo2";
import Tablo3 from "views/admin/tablo3";
import Tablo4 from "views/admin/tablo4";
import MCLS_06 from "views/admin/MCLS_06";
import MCLS_08 from "views/admin/MCLS_08";
import MCLS_05 from "views/admin/MCLS_05";
import MCLS_11 from "views/admin/MCLS_11";
import MCLS_04_a from "views/admin/MCLS_04_a";
import MCLS_04_b from "views/admin/MCLS_04_b";
import MCLS_04_c from "views/admin/MCLS_04_c";
//

// Auth Imports
import SignInCentered from "views/auth/signIn";
//path 브라우저 URL 입력에 표시
//component 지정된 경로에 표시하려는 보기 구성 요소
//name : 사이드바에 표시되는 이름
//layout

const routes = [
  {
    name: "한눈에 보기",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "카테고리",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  {
    name: "태블로 리스트",
    layout: "/tablolist",
    path: "/tablolist",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: Tablolist,
  },
  {

    name: "컴퓨터 및 주변기기",

    layout: "/admin",
    path: "/MCLS_04_a",
    icon: [],
    component: MCLS_04_a,
  },
  {
    name: "가전·전자",
    layout: "/admin",
    path: "/MCLS_04_b",
    icon: [],
    component: MCLS_04_b,
  },
  {
    name: "통신기기",
    layout: "/admin",
    path: "/MCLS_04_c",
    icon: [],
    component: MCLS_04_c,

    name: "MCLS_08",
    layout: "/admin",
    path: "/MCLS_08",
    icon: [],
    component: MCLS_08,
  },
  {
    name: "MCLS_05",
    layout: "/admin",
    path: "/MCLS_05",
    icon: [],
    component: MCLS_05,
  },
  {
    name: "MCLS_11",
    layout: "/admin",
    path: "/MCLS_11",
    icon: [],
    component: MCLS_11,

  },
  {
    name: "반려동물용품",
    layout: "/admin",
    path: "/MCLS_06",
    icon: [],
    component: MCLS_06,
  },
  {
    name: "아동·유아용품",
    layout: "/admin",
    path: "/MCLS_08",
    icon: [],
    component: MCLS_08,
  },
  {
    name: "사무·문구용품",
    layout: "/admin",
    path: "/MCLS_05",
    icon: [],
    component: MCLS_05,
  },
  {
    name: "화장품",
    layout: "/admin",
    path: "/MCLS_11",
    icon: [],
    component: MCLS_11,
  },
  {
    name: [],
    layout: "/admin",
    path: "/tablo1",
    icon: [],
    component: Tablo1,
  },
  {
    name: [],
    layout: "/admin",
    path: "/tablo2",
    icon: [],
    component: Tablo2,
  },
  {
    name: [],
    layout: "/admin",
    path: "/tablo3",
    icon: [],
    component: Tablo3,
  },
  {
    name: [],
    layout: "/admin",
    path: "/tablo4",
    icon: [],
    component: Tablo4,
  },
];
export default routes;
// additional part
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // }