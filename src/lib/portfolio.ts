/* eslint-disable react-hooks/rules-of-hooks */
import { PORTFOLIO_MENUS } from '@/constants';

export const setPortfolioMenus = (setMenus: Function, selectedMenu: number) => {
  // Set the menus without waiting for the badge value
  PORTFOLIO_MENUS.forEach((menu, index) => (menu.selected = index == selectedMenu));
  setMenus([...PORTFOLIO_MENUS]);

  // Remove the menus from the header on dismount
  return () => setMenus([]);
};
