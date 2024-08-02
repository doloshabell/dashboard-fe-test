import HomePage from "../pages/homepage";
import NftMarketplacePage from "../pages/nftmarketplacepage";
import ProfilePage from "../pages/profilepage";
import DataTablesPage from "../pages/datatablespage";
import {
  MdBarChart,
  MdHome,
  MdOutlineShoppingCart,
  MdPerson,
} from "react-icons/md";

const routes = [
  {
    name: "Home",
    layout: "/dashboard",
    path: "home",
    icon: <MdHome className="h-5 w-5" />,
    component: <HomePage />,
  },
  {
    name: "NFT Marketplace",
    layout: "/dashboard",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-5 w-5" />,
    component: <NftMarketplacePage />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/dashboard",
    icon: <MdBarChart className="h-5 w-5" />,
    path: "data-tables",
    component: <DataTablesPage />,
  },
  {
    name: "Profile",
    layout: "/dashboard",
    path: "profile",
    icon: <MdPerson className="h-5 w-5" />,
    component: <ProfilePage />,
  },
];

export default routes;
