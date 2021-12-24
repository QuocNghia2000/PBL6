import React from 'react';
import {View, Text, useWindowDimensions, ActivityIndicator} from 'react-native';
import styles from '../History/styles';
import {TabView, SceneMap} from 'react-native-tab-view';
import PendingTab from './../PendingTab/index';
import CompletedTab from './../CompeletedTab/index';
const renderScene = SceneMap({
  first: PendingTab,
  second: CompletedTab,
});

const HistorysComponent = ({loading}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Đơn xác nhận'},
    {key: 'second', title: 'Đơn đã mua'},
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.txtTitle}>Đơn mua</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" />
      ) : (
        <View>
          <View style={styles.tabview}>
            <TabView
              // renderTabBar={renderTabBar}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default HistorysComponent;
