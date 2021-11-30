import React from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';

const CustomFlatList = ({
  loading,
  renderItem,
  ListEmptyComponent,
  data,
  keyExtractor,
}) => {
  //const {navigate} = useNavigation();

  //console.log('item :>>', item.name);
  return (
    <View>
      {loading && (
        <View>
          <ActivityIndicator
            style={styles.positionCenter}
            size="large"
            color="grey"
          />
        </View>
      )}
      {!loading && (
        <FlatList
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          data={data}
          ListEmptyComponent={ListEmptyComponent}
          horizontal={true}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  positionCenter: {
    alignItems: 'center',
    // height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
});
export default CustomFlatList;
