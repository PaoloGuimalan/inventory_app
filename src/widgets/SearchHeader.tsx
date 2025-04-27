import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type SearchHeaderType = {
  showBackButton: boolean;
  onEdit: (e: string) => void;
  onSubmit: () => void;
};

const SearchHeader = ({showBackButton, onEdit, onSubmit}: SearchHeaderType) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
      )}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={e => {
            onEdit(e);
          }}
          onSubmitEditing={() => {
            onSubmit();
          }}
          placeholder="Input here"
        />
        <TouchableOpacity
          onPress={() => {
            onSubmit();
          }}>
          <Icon name="search" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 14,
    paddingRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    // maxHeight: 80,
    width: Dimensions.get('window').width,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
  },
});

export default SearchHeader;
