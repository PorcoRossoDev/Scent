import React, { useRef, useMemo, useCallback, useState } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";
import * as HeroOutline from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import BottomOrderFilterSheet from './BottomOrderFilterSheet'

const HeaderOrderCancelled = ({ title, navigation, route }) => {

  const bottomSheetRef = useRef(null);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  return (
    <View className='bg-white'
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        //paddingVertical: 16,
        // Shadow cho iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // Shadow cho Android
        elevation: 2,
      }}
    >
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
            <HeroOutline.Squares2X2Icon size={25} color={'#333'} />
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
        {title}
      </Text>

      {/* Tìm kiếm */}
      <View className='px-4 mt-5'>
        <View className='border border-gray-300 rounded-3xl p-3 mb-4 relative flex-row flex-wrap items-center bg-gray-200'>
          <HeroOutline.MagnifyingGlassIcon className='relative top-[10px]' size={18} color={'#6b7280'} />
          <TextInput
            placeholderTextColor="#6b7280"
            className='pl-2 py-1 text-gray-500 text-f14'
            placeholder='Tìm kiếm theo id, mã đơn hàng'
          />
        </View>
      </View>

      {/* Lọc */}
      <View className='px-4 mt-3 flex-row justify-between'>
        <Text className='pb-4 text-blue-600 text-f15 font-medium px-3 border-b-2 border-blue-600'>Tất cả</Text>
        <TouchableOpacity
          onPress={openSheet}
        >
          <HeroOutline.FunnelIcon size={25} />
        </TouchableOpacity>
      </View>

      <BottomOrderFilterSheet ref={bottomSheetRef} onClose={closeSheet} />

    </View>

  );
}

export default HeaderOrderCancelled