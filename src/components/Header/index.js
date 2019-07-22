import React from 'react';
// import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <Icon name="shopping-basket" color="#FFF" size={24} />
    </Container>
  );
}
