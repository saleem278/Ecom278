import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 30px;
  height: 30px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 17px;
  font-weight: bold;
  bottom: 15px;
  color:#000000;
`;