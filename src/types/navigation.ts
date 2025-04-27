import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Settings: undefined;
  Products: {context?: string};
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
