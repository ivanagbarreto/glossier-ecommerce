import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../../screens";
import { colors } from "../../global/colors";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{
        header: ({route})=>(<Header title="fashion" 
          subtitle="Perfil"
          />)
      }}
    >
      <Stack.Screen name="Perfil" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;