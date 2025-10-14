import React, { useRef, useMemo, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

export default function BottomSheetDemo() {
  // ref điều khiển BottomSheet
  const bottomSheetModalRef = useRef(null);

  // các snap points (độ cao các mức sheet)
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // mở sheet
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // đóng sheet
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Mở Bottom Sheet" onPress={handlePresentModalPress} />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1} // mở ở mức thứ 2 (50%)
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: '#fff' }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.title}>Hello 👋</Text>
          <Text>Đây là nội dung trong bottom sheet!</Text>
          <View style={{ marginTop: 10 }}>
            <Button title="Đóng lại" onPress={handleDismissModalPress} />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
