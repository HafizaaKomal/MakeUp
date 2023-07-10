import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Title } from '../../components/common';
import { selectBasketItems, selectBasketTotal, basketItemPriceTotal, clearBasket } from '../../redux/store/basketSlice';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Basket from '../../components/basket/Basket';

const BasketPage = () => {
  const basketItems = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  let basketSubtotal = useSelector(selectBasketTotal);

  useEffect(() => {
    dispatch(basketItemPriceTotal());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketItems]);

  if(basketItems.length === 0){
    return (
      <BasketPageWrapper className='container py-5 text-center'>
        <h3 className='d-flex align-items-center justify-content-center'> <AiOutlineShoppingCart className='me-2' /> Your cart is empty!</h3>
        <p className='fs-13 op-07 mt-2 mb-4'>You have no items in your shopping cart. <br /> Let&apos;s go buy something!</p>
        <Link to = "/" className='shop-btn bg-black text-white px-4 py-2'>See Products</Link>
      </BasketPageWrapper>
    )
  }

  return (
    <BasketPageWrapper className='container'>
      <section className='bg-white'>
        <Title title = "Your Shopping Basket" />
        <div className = "datagrid-wrapper">
          <Basket basketItems = {basketItems} basketSubtotal = { basketSubtotal } />
        </div>
        <button type = "button" className='clear-btn bg-danger text-white fs-13 d-block py-2 px-3 mt-4' onClick={ () => dispatch(clearBasket())}>Clear Basket</button>
      </section>
    </BasketPageWrapper>
  )
}

export default BasketPage;

const BasketPageWrapper = styled.div`
  .datagrid-wrapper{
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 7px;
    }
    
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }

  .shop-btn{
    border-radius: 4px;
  }

  .clear-btn{
    background: var(--clr-pink);
  }
`;
