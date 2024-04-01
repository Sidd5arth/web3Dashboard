import React from "react";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { HiOutlineCube } from "react-icons/hi";
import { TbMobiledata } from "react-icons/tb";
import { PiHourglass } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { RiNotification4Line } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { NavItem } from "../../types";

const iconMapping: Record<string, IconType> = {
  FiHome,
  GoOrganization,
  HiOutlineCube,
  TbMobiledata,
  PiHourglass,
  IoWalletOutline,
  RiNotification4Line,
  FaRegQuestionCircle,
  IoIosSettings,
};

export const navData: NavItem[] = [
  {
    page: "Home",
    logo: React.createElement(iconMapping["FiHome"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "Organization",
    logo: React.createElement(iconMapping["GoOrganization"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "Assets",
    logo: React.createElement(iconMapping["HiOutlineCube"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "Trade",
    logo: React.createElement(iconMapping["TbMobiledata"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "History",
    logo: React.createElement(iconMapping["PiHourglass"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "Wallet",
    logo: React.createElement(iconMapping["IoWalletOutline"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "Notification",
    logo: React.createElement(iconMapping["RiNotification4Line"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "Support",
    logo: React.createElement(iconMapping["FaRegQuestionCircle"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
  {
    page: "Settings",
    logo: React.createElement(iconMapping["IoIosSettings"], {
      color: "white",
      size: 18,
    }),
    isActive: false,
  },
];
