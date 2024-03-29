/*
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
*/

import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

export const formatPrice = num => `R$ ${numeral(num).format('0,0.00')}`;
