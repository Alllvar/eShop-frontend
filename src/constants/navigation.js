import { FaUsers } from "react-icons/fa";
import { BsThreeDots, BsFillPuzzleFill, BsQuestionSquare} from "react-icons/bs";
// import { GrGamepad } from "react-icons/gr";
import { RiShoppingBagLine, RiNewspaperLine, RiGamepadLine } from "react-icons/ri";
import React, { Component }  from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";

const NAV_NAMES = [
    {   
        className: "navigation-element",
        text: "Семейство Nintendo Switch",
        icon: <BsFillPuzzleFill className="nav-social-icon"/>
    },
    {
        className: "navigation-element",
        text: "Игры",
        icon: <RiGamepadLine className="nav-social-icon"/>
    },
    {
        className: "navigation-element",
        text: "Nintendo eShop",
        icon: <RiShoppingBagLine className="nav-social-icon"/>
    },
    {
        className: "navigation-element",
        text: "Поддержка",
        icon: <BsQuestionSquare className="nav-social-icon"/>
    },
    {
        className: "navigation-element",
        text: "Покупки",
        icon: <HiOutlineShoppingCart className="nav-social-icon"/>
    },
    {
        className: "navigation-element",
        text: "Новости",
        icon: <RiNewspaperLine className="nav-social-icon"/>
    },
    {
        className: "navigation-social",
        icon: <FaUsers className="nav-social-icon"/>
    },
    {
        className: "navigation-social",
        icon: <BsThreeDots className="nav-social-icon"/>
    }
]

export default NAV_NAMES;