import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import colors from '../../styles/colors';

/*
export const Container = styled.View`
  padding: 30px;
  flex: 1;
  background: ${colors.darker};
  flex-direction: row;
`;
*/

export const Container = styled.View`
  background: ${colors.darker};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 3,
})`
  height: 60px;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;

  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px 8px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
