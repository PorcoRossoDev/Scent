import { View, Text, TouchableOpacity, Button, ScrollView, Dimensions, Platform, StyleSheet, FlatList } from 'react-native';
import { BellIcon } from 'react-native-heroicons/solid';
import React, { useRef, useMemo, useCallback, useState } from 'react';
import SalesPieChart from '../../../components/charts/SalesPieChart'
import BarSalesChart from 'components/charts/BarSalesChart';
import PieSalesChart from '../../../components/charts/PieSalesChart'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { SegmentedButtons } from 'react-native-paper';
// import { FolderIcon, PlusIcon, ShoppingCartIcon, UserGroupIcon, ClipboardIcon, FolderPlus } from "react-native-heroicons/solid";
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetActions, ActionItem, OrderItem } from '../../../components/home'
import * as HeroSolid from "react-native-heroicons/solid";
import * as HeroOutline from "react-native-heroicons/outline";

const HomeScreen = () => {
    const { width } = Dimensions.get('window');
    const sideSpacing = 16;

    /*=== START: Tab - Biểu đồ ===*/
    const [index, setIndex] = useState(0);
    const segments = [
        { value: 0, label: 'Doanh thu' },
        { value: 1, label: 'Nguồn khách' },
        { value: 2, label: 'Phân bố' },
    ];
    /*=== END: Tab - Biểu đồ ===*/

    /*=== START: Modal - Thao tác nhanh ===*/
    const selectedIndex = segments.findIndex(s => s.value === index);
    const bottomSheetRef = useRef(null);
    const openSheet = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);
    const closeSheet = useCallback(() => {
        bottomSheetRef.current?.dismiss();
    }, []);

    const actionList = [
        { id: '1', name: 'Thêm sản phẩm', icon: 'FolderIcon' },
        { id: '2', name: 'Tạo đơn hàng', icon: 'ShoppingCartIcon' },
        { id: '3', name: 'Quản lý nhân viên', icon: 'UserGroupIcon' },
        { id: '4', name: 'Tạo phiếu chi', icon: 'ClipboardIcon' },
        { id: '5', name: 'Báo cáo doanh thu', icon: 'ChartPieIcon' },
        { id: '6', name: 'Quản lý kho', icon: 'FolderIcon' },
        { id: '7', name: 'Quản lý giao hàng', icon: 'FolderIcon' },
        { id: '8', name: 'Tạo phiếu kiểm hàng', icon: 'FolderIcon' },
        { id: '9', name: 'Số quỹ', icon: 'FolderIcon' },
        { id: 'all', name: 'Xem thêm', icon: 'FolderPlusIcon' },
    ]
    const [activeActions, setActiveActions] = useState(['1', '2', '3', '4', '5', '6', 'all']);
    const actionListActive = actionList.filter(item => activeActions.includes(item.id));
    /*=== END: Modal - Thao tác nhanh ===*/

    return (
        <View className='flex-1 relative bg-white'>
            <View className='bg-primary py-6 px-5 flex flex-row justify-between'>
                <Text className='text-white font-bold text-xl'>Scent Home</Text>
                <TouchableOpacity className='relative'>
                    <BellIcon color='white' width='25' height='25' />
                    <Text className='w-5 h-5 text-center leading-5 text-white rounded-full font-bold text-f10 absolute bottom-[-5px] right-[-5px] bg-red-600'>10</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className=''>
                <View className="flex-1 m-4">
                    {index === 0 && (
                        <BarSalesChart />
                    )}
                    {index === 1 && (
                        <SalesPieChart />
                    )}
                    {index === 2 && (
                        <PieSalesChart />
                    )}
                </View>
                <View className='px-4'>
                    {Platform.OS === 'ios' ? (
                        <SegmentedControl
                            values={segments.map(s => s.label)}
                            selectedIndex={selectedIndex}
                            onChange={(event) => {
                                const newIndex = event.nativeEvent.selectedSegmentIndex;
                                setIndex(segments[newIndex].value);
                            }}
                        />
                    ) : (
                        <SegmentedButtons
                            value={index}
                            onValueChange={(val) => setIndex(val)}
                            buttons={segments.map((s, i) => ({
                                value: s.value,
                                label: s.label,
                                style: {
                                    borderRadius: 10,
                                    //borderColor: '#007AFF',
                                    borderWidth: 0,
                                    backgroundColor: index === s.value ? '#fff' : 'transparent',
                                    //marginLeft: i === 0 ? 0 : -1, // dính liền các nút
                                },
                                labelStyle: {
                                    //color: index === s.value ? 'white' : '#007AFF',
                                    //fontWeight: '500',
                                },
                            }))}
                            style={{
                                // margin:9,
                                borderRadius: 10,
                                padding: 3,
                                //overflow: 'hidden',
                                borderColor: '#007AFF',
                                borderWidth: 0,
                                backgroundColor: '#ecebeb'
                            }}
                        />
                    )}
                </View>

                {/* Thao tác nhanh */}
                <View className='px-4'>
                    <View className='flex flex-row justify-between mt-6'>
                        <Text className='uppercase font-medium text-f15'>Thao tác nhanh</Text>
                        <TouchableOpacity onPress={openSheet}>
                            <Text className='text-blue-600 text-f15 font-medium'>Tuỳ chỉnh</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap mt-6">
                        {actionListActive.map((item, index) => (
                            <View key={index} className="w-1/4">
                                <ActionItem name={item.name} icon={item.icon} variant={item?.variant ?? 'solid'} />
                            </View>
                        ))}
                    </View>
                </View>

                {/* Danh sách đơn hàng */}
                <View className='px-4 mt-4'>
                    <Text className='uppercase font-medium text-f15'>Danh sách đơn hàng</Text>
                    <View className='mt-6 px-3 pt-4' style={{
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
                        <TouchableOpacity className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                            <View className='flex-row flex-wrap'>
                                <View className='bg-blue-200 rounded-xl w-11 h-11 justify-center items-center'>
                                    <HeroSolid.ShoppingCartIcon size={18} color={'#2563eb'} />
                                </View>
                                <View className='pl-3'>
                                    <Text className='font-medium'>Tổng đơn hàng</Text>
                                    <Text className='text-blue-600 text-f13 mt-1'>586.727.343</Text>
                                </View>
                            </View>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-blue-600 bg-blue-200 rounded-2xl px-3 py-2 text-f12'>117</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                            <View className='flex-row flex-wrap'>
                                <View className='bg-green-200 rounded-xl w-11 h-11 justify-center items-center'>
                                    <HeroSolid.CheckCircleIcon size={18} color={'#16a34a'} />
                                </View>
                                <View className='pl-3'>
                                    <Text className='font-medium'>Hoàn thành</Text>
                                    <Text className='text-green-600 text-f13 mt-1'>586.727.343</Text>
                                </View>
                            </View>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-green-600 bg-green-200 rounded-2xl px-3 py-2 text-f12'>117</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                            <View className='flex-row flex-wrap'>
                                <View className='bg-purple-200 rounded-xl w-11 h-11 justify-center items-center'>
                                    <HeroSolid.CreditCardIcon size={18} color={'#9333ea'} />
                                </View>
                                <View className='pl-3'>
                                    <Text className='font-medium'>Đã Thanh toán</Text>
                                    <Text className='text-purple-600 text-f13 mt-1'>586.727.343</Text>
                                </View>
                            </View>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-purple-600 bg-purple-200 rounded-2xl px-3 py-2 text-f12'>117</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                            <View className='flex-row flex-wrap'>
                                <View className='bg-orange-200 rounded-xl w-11 h-11 justify-center items-center'>
                                    <HeroSolid.ClockIcon size={18} color={'#ea580c'} />
                                </View>
                                <View className='pl-3'>
                                    <Text className='font-medium'>Chưa Thanh toán</Text>
                                    <Text className='text-orange-600 text-f13 mt-1'>586.727.343</Text>
                                </View>
                            </View>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-orange-600 bg-orange-200 rounded-2xl px-3 py-2 text-f12'>117</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='mb-4 pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                            <View className='flex-row flex-wrap'>
                                <View className='bg-pink-200 rounded-xl w-11 h-11 justify-center items-center'>
                                    <HeroSolid.TruckIcon size={18} color={'#db2777'} />
                                </View>
                                <View className='pl-3'>
                                    <Text className='font-medium'>Hẹn giao</Text>
                                    <Text className='text-pink-600 text-f13 mt-1'>0</Text>
                                </View>
                            </View>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-pink-600 bg-pink-200 rounded-2xl px-3 py-2 text-f12'>117</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='pb-4 flex-row flex-wrap justify-between w-full items-center border-b border-gray-200'>
                            <View className='flex-row flex-wrap'>
                                <View className='bg-red-200 rounded-xl w-11 h-11 justify-center items-center'>
                                    <HeroSolid.ArrowDownTrayIcon size={18} color={'#db2777'} />
                                </View>
                                <View className='pl-3'>
                                    <Text className='font-medium'>Công nợ</Text>
                                    <Text className='text-red-600 text-f13 mt-1'>225.435.678</Text>
                                </View>
                            </View>
                            <View className='flex-row flex-wrap items-center'>
                                <Text className='text-red-600 bg-red-200 rounded-2xl px-3 py-2 text-f12'>117</Text>
                                <Text className='ml-2'>
                                    <HeroSolid.ChevronRightIcon size={17} color={'#9ca3af'} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <BottomSheetActions ref={bottomSheetRef} onClose={closeSheet} actionList={actionList} activeActions={activeActions} />
        </View>
    );
}

export default HomeScreen