import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OrderOverviewStack, OrderListStack, OrderCancelledStack} from './stack'
import HeaderOrderCancelled from 'components/order/HeaderOrderCancelled';

const Stack = createNativeStackNavigator();
const OrderScreen = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="OrderOverviewStack"
        component={OrderOverviewStack}
        options={{ title: 'Đơn hàng', headerBackVisible: false, }}
      />
      <Stack.Screen
        name="OrderListStack"
        component={OrderListStack}
        options={{ title: 'Danh sách đơn hàng' }}
      />
      <Stack.Screen
        name="OrderCancelledStack"
        component={OrderCancelledStack}
        options={{
          header: () => <HeaderOrderCancelled />,
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderScreen;
