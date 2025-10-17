import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const UserScreen = () => {
  const [value, setValue] = useState(null);
  const data = [
    { label: 'Việt Nam', value: 'vn' },
    { label: 'Mỹ', value: 'us' },
    { label: 'Nhật Bản', value: 'jp' },
    { label: 'Hàn Quốc', value: 'kr' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chọn quốc gia:</Text>

      <View style={{ zIndex: 1000 }}>
        <Dropdown
          style={styles.dropdown}
          containerStyle={{ zIndex: 3000, elevation: 3000 }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Chọn quốc gia"
          searchPlaceholder="Tìm kiếm..."
          value={value}
          onChange={item => setValue(item.value)}
        />
      </View>

      {value && <Text style={styles.resultText}>Bạn đã chọn: {value}</Text>}
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    zIndex: 1000,
    elevation: 1000,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  resultText: {
    marginTop: 16,
    fontSize: 16,
    color: '#2563eb',
  },
});
