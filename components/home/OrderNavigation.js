import * as HeroSolid from "react-native-heroicons/solid";
import { View, Text, TouchableOpacity, Button, ScrollView, Dimensions, Platform, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const OrderNavigation = () => {
    const navigation = useNavigation();
    return (
        <View className='mt-4 px-4'>
            <Text className='uppercase font-medium text-f15'>Danh sách đơn hàng</Text>
            <View className='mt-3 px-3 pt-4' style={{
                backgroundColor: "white",
                borderRadius: 10,
                // paddingVertical: 16,
                // Shadow cho iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
                // Shadow cho Android
                elevation: 6,
                }}>
                <TouchableOpacity onPress={() => (navigation.navigate('OrderListStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-blue-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.ShoppingCartIcon size={18} color={'#60a5fa'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Tổng đơn hàng</Text>
                            <Text className='text-blue-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='text-blue-600 bg-blue-100 rounded-2xl px-3 py-2 text-f12'>117</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate('OrderSuccessStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-green-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.CheckCircleIcon size={18} color={'#4ade80'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Hoàn thành</Text>
                            <Text className='text-green-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='text-green-600 bg-green-100 rounded-2xl px-3 py-2 text-f12'>90</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate('OrderPaymentSuccessStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-purple-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.CreditCardIcon size={18} color={'#c084fc'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Đã Thanh toán</Text>
                            <Text className='text-purple-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='text-purple-600 bg-purple-100 rounded-2xl px-3 py-2 text-f12'>88</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate('UnpaidOrdersStack'))} className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-orange-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.ClockIcon size={18} color={'#fb923c'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Chưa Thanh toán</Text>
                            <Text className='text-orange-600 text-f13 mt-1'>586.727.343</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='text-orange-600 bg-orange-100 rounded-2xl px-3 py-2 text-f12'>21</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-pink-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.TruckIcon size={18} color={'#f472b6'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Hẹn giao</Text>
                            <Text className='text-pink-600 text-f13 mt-1'>0</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='text-pink-600 bg-pink-100 rounded-2xl px-3 py-2 text-f12'>17</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                    <View className='flex-row flex-wrap'>
                        <View className='bg-red-100 rounded-xl w-11 h-11 justify-center items-center'>
                            <HeroSolid.ArrowDownTrayIcon size={18} color={'#f87171'} />
                        </View>
                        <View className='pl-3'>
                            <Text className='font-medium'>Công nợ</Text>
                            <Text className='text-red-600 text-f13 mt-1'>225.435.678</Text>
                        </View>
                    </View>
                    <View className='flex-row flex-wrap items-center'>
                        <Text className='text-red-600 bg-red-100 rounded-2xl px-3 py-2 text-f12'>0</Text>
                        <Text className='ml-2'>
                            <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderNavigation