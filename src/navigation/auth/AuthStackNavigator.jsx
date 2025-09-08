import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, SignUp } from "../../screens";


const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"

    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;