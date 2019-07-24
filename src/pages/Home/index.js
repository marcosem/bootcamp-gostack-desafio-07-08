import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions'; // importing both functions by using *
import { formatPrice } from '../../util/format';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  ProductAmount,
  ProductAmountText,
  ButtonText,
} from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const amount = useSelector(state =>
    state.cart.reduce((amountAux, product) => {
      amountAux[product.id] = product.amount;
      return amountAux;
    }, {})
  );

  const dispatch = useDispatch();

  // Load Products when creating the view
  // Replace the componentDidMount
  useEffect(() => {
    // Declare an async function
    async function loadProducts() {
      const response = await api.get('/products').catch(error => {
        console.tron.log(
          `There has been a problem with your fetch operation: ${error.message}`
        );
        throw error;
      });

      // Avoid to call function inside the render, it is better to do like this way inside the componentDidMourrnt
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    // Run the declared function
    loadProducts();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [amount]);

  function handleAddProduct(id) {
    setLoading(true);
    dispatch(CartActions.addToCartRequest(id));
  }

  /*
  handleAddProduct.propTypes = {
    id: PropTypes.number.isRequired,
  };
  */

  function renderProduct({ item }) {
    // const { amount } = this.props;
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        {/* <ProductPrice>{formatPrice(item.price)}</ProductPrice> */}
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddToCartButton
          loading={loading}
          onPress={() => handleAddProduct(item.id)}
        >
          <ProductAmount>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add-shopping-cart" color="#fff" size={20} />
            )}
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <ButtonText>ADD TO CART</ButtonText>
        </AddToCartButton>
      </Product>
    );
  }

  renderProduct.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      priceFormatted: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
/*
Home.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
*/
export default Home;
