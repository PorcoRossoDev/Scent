import React from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, Dimensions, Platform, StyleSheet, FlatList } from 'react-native';
import * as HeroSolid from "react-native-heroicons/solid";

const OrderItem = ({ props }) => {
    return (
        <View className='bg-white p-4 mb-4'
            style={{
                backgroundColor: "white",
                borderRadius: 10,
                //paddingVertical: 16,
                // Shadow cho iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                // Shadow cho Android
                elevation: 6,
            }}
        >
            <View className="flex-row justify-between items-start">
                {/* Bên trái */}
                <View>
                    <Text className="text-f17 font-bold text-blue-700">240619-122</Text>
                    <Text className="text-f17 font-bold mt-1">3.199.200 đ</Text>
                </View>

                {/* Bên phải */}
                <View className="items-end">
                    <View className="bg-red-500 px-3 py-1 rounded-lg">
                        <Text className="text-white text-f13 font-bold">Xuất kho</Text>
                    </View>
                    <Text className="text-f12 text-right mt-2 text-gray-500">13:39 24/09/2025</Text>
                    <Text className="text-right font-medium mt-1">Tuấn Anh</Text>
                </View>
            </View>
            <View className='flex-row items-center'>
                <HeroSolid.UserCircleIcon size={20} color={'#CECECE'} />
                <View className='flex-row ml-3'>
                    <Text className='text-f14'>Anh Việt - </Text>
                    <Text className='font-medium underline text-f14'>098765637</Text>
                </View>
            </View>
            <View className='flex-row items-center my-2'>
                <HeroSolid.MapPinIcon size={20} color={'#CECECE'} />
                <View className='flex-row ml-3'>
                    <Text className='text-f14'>361A Lê Văn Sỹ</Text>
                </View>
            </View>
            <View className='flex-row items-start'>
                <HeroSolid.PencilSquareIcon size={18} color={'#CECECE'} />
                <Text className="ml-3">
                    <Text className="font-bold text-f14">Ghi chú: </Text>
                    *** Khách Viết Chênh VAT số tiền: 9.969.100đ
                </Text>
            </View>

        </View>
    )
}

export default OrderItem