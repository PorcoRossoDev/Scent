import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const OrderListStack = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Danh sách đơn hàng</Text>
      <Button
        title="Quay lại tổng quan"
        onPress={() => navigation.navigate('OrderOverviewStack')}
      />
    </View>
  );
};

export default OrderListStack;
