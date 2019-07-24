import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  LogoContainer,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  // const cartSize = 0;

  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoContainer>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

/*
Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.shape({}),
  }).isRequired,
};
*/
export default Header;
