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
    path: "",
    icon: <MdHome className="h-6 w-6" />,
    component: <HomePage />,
  },
  {
    name: "NFT Marketplace",
    layout: "/dashboard",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NftMarketplacePage />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/dashboard",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTablesPage />,
  },
  {
    name: "Profile",
    layout: "/dashboard",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ProfilePage />,
  },
];

export default routes;
