import React from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

const HeaderOrderCancelled = () => {
    const navigation = useNavigation();
    return (
    <View className='bg-white pb-5'>
      {/* Phần trên của header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginBottom: 8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#0089FF', fontWeight: '600' }}>
            <HeroSolid.ArrowLeftIcon size={25} />
          </Text>
        </TouchableOpacity>
        <View className='flex-row items-center'>
            <TouchableOpacity className='bg-gray-200 w-10 h-10 justify-center items-center rounded-full' onPress={() => alert('Tìm kiếm')}>
                <HeroSolid.ListBulletIcon size={25} color={'#333'} />
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-200 w-10 h-10 justify-center items-center rounded-full ml-2' onPress={() => alert('Tìm kiếm')}>
                <HeroSolid.EllipsisVerticalIcon size={25} color={'#333'} />
            </TouchableOpacity>
        </View>
      </View>

      {/* Phần tiêu đề */}
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '700',
          color: '#333',
        }}
      >
        Đơn hàng huỷ
      </Text>
    </View>
  );
}

export default HeaderOrderCancelled