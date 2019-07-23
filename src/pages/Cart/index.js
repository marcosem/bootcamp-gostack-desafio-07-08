import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>{formatPrice(179.9)}</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={24} color={colors.primary} />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductAmount value={String(2)} />
            <ProductControlButton>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductSubtotal>R$ 179,90</ProductSubtotal>
          </ProductControls>
        </Product>
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$ 179,90</TotalAmount>
        <Order>
          <OrderText>FINISH ORDER</OrderText>
        </Order>
      </TotalContainer>

      {/* products.length ? (
        <>
          <Products>
            {products.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                </ProductControls>
              </Product>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{totalPrice}</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </>
                  ) : ( */}
      {/* }
      <EmptyContainer>
        <Icon name="remove-shopping-cart" size={64} color="#eee" />
        <EmptyText>Your cart is empty.</EmptyText>
      </EmptyContainer>
      {/*  )} */}
    </Container>
  );
}

export default Cart;
