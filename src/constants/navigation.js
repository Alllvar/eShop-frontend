import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { BsThreeDots, BsFillPuzzleFill, BsQuestionSquare} from 'react-icons/bs';
import { RiShoppingBagLine, RiNewspaperLine, RiGamepadLine } from 'react-icons/ri';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const NAV_NAMES = [
    {
        id: 1,
        className: "navigation-element",
        text: "Семейство Nintendo Switch",
        icon: <BsFillPuzzleFill className="nav-social-icon"/>
    },
    {
        id: 2,
        className: "navigation-element",
        text: "Игры",
        icon: <RiGamepadLine className="nav-social-icon"/>
    },
    {
        id: 3,
        className: "navigation-element",
        text: "Nintendo eShop",
        icon: <RiShoppingBagLine className="nav-social-icon"/>
    },
    {
        id: 4,
        className: "navigation-element",
        text: "Поддержка",
        icon: <BsQuestionSquare className="nav-social-icon"/>
    },
    {
        id: 5,
        className: "navigation-element",
        text: "Покупки",
        icon: <HiOutlineShoppingCart className="nav-social-icon"/>
    },
    {
        id: 6,
        className: "navigation-element",
        text: "Новости",
        icon: <RiNewspaperLine className="nav-social-icon"/>
    },
    {
        id: 7,
        className: "navigation-social",
        icon: <FaUsers className="nav-social-icon"/>
    },
    {
        id: 8,
        className: "navigation-social",
        icon: <BsThreeDots className="nav-social-icon"/>
    }
];

export default NAV_NAMES;