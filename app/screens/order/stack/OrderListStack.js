import React, { useRef, useMemo, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderItem from 'components/order/OrderItem';
import { Dropdown } from 'react-native-element-dropdown';


const OrderListStack = ({ navigation }) => {
  return (
    <View className='px-4'>
      <View className='mt-6'>
        <Text className='text-gray-500 text-f14'>2.207 đơn hàng</Text>
        <ScrollView className='mt-4'>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default OrderListStack;
