import React, { useRef, useMemo, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const OrderAddStack = () => {
    const customers = [
        { label: 'Nguyễn Văn A', value: '0' },
        { label: 'Nguyễn Văn B', value: '1' },
        { label: 'Nguyễn Văn C', value: '2' },
      ];
      const [value, setValue] = useState(null);
      const [isFocus, setIsFocus] = useState(false);

    return (
        <View className='bg-gray-400 p-4'>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: '#0089FF' }]}
                  data={customers}
                //   search
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Chọn khách hàng' : '...'}
                  searchPlaceholder="Tìm kiếm..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                //   onChange={item => setValue(item.value)}
                />
              </View>
    )
}
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
export default OrderAddStack