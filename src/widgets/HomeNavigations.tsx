import {
  View,
  //   Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeNavigations() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        {/* <Text>Home</Text> */}
        <Icon name="home" size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        {/* <Text>Settings</Text> */}
        <Icon name="settings" size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Profile', {userId: '123'});
        }}>
        {/* <Text>Profile</Text> */}
        <Icon name="person" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    // height: 100,
    padding: 0,
    paddingBottom: -10,
  },
  button: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
