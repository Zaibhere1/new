import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define your navigation parameter types
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  About: undefined;
  LogIn: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
};

// Create a custom hook
export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

export default useAppNavigation;
