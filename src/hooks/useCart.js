import React from "react";
import AppContext from "../context";

export const useCart = () => {
    const { setCartCardsArr, cartCardsArr } = React.useContext(AppContext);
    const totalPrice = cartCardsArr.reduce((sum, obj) => Number(obj.price) + sum, 0);

    return { setCartCardsArr, cartCardsArr, totalPrice };
}