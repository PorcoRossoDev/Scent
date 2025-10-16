import React, { forwardRef, useMemo, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { Dropdown } from 'react-native-element-dropdown';
import { SelectList } from 'react-native-dropdown-select-list'

// forwardRef cho phép parent gọi ref.present()
const BottomOrderFilterSheet = forwardRef((props, ref) => {
  const { snapPoints = ['50%', '80%'], onClose } = props;
  // render backdrop mờ
  const renderBackdrop = useCallback(
    (backdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
      />
    ),
    []
  );

  const customers = [
    { label: 'Nguyễn Văn A', value: '0' },
    { label: 'Nguyễn Văn B', value: '1' },
    { label: 'Nguyễn Văn C', value: '2' },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
    const [selected, setSelected] = useState("");

  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.indicator}
      onDismiss={onClose}
    >
      <BottomSheetView className='py-3 flex-1'>
        <View className='flex-row justify-between items-center mb-2 flex-1 px-5 border-b border-gray-200 pb-6'>
          <TouchableOpacity onPress={onClose}>
            <Text className="text-f16 text-blue-500 font-medium">Huỷ</Text>
          </TouchableOpacity>
          <Text className='font-medium text-f17'>Bộ lọc</Text>
          <TouchableOpacity onPress={onClose}>
            <Text className="text-f16 text-blue-500 font-medium">Lưu</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='px-4 bg-gray-200 flex-1' keyboardShouldPersistTaps="handled">
          <View className='mt-4 z-[1000] flex-1'>
            <Text>Khách hàng</Text>
            <View style={{ padding: 16, zIndex: 1000, position: 'relative' }}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
      </View>
          </View>
        </ScrollView>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomOrderFilterSheet;

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  indicator: {
    backgroundColor: '#ccc',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});
