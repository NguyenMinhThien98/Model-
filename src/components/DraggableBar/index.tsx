import React, {useCallback} from 'react';
import {View} from 'react-native';
import Interactable from 'react-native-interactable';
import styles from './styles';

const DraggableBar = () => {
  const onSnap = useCallback((event: Interactable.IDragEvent) => {
    event.nativeEvent.x;
  }, []);
  return (
    <View style={styles.container}>
      <Interactable.View
        horizontalOnly={true}
        initialPosition={{x: 0, y: 0}}
        onDrag={onSnap}>
        <View style={styles.box} />
      </Interactable.View>
    </View>
  );
};
export default DraggableBar;
