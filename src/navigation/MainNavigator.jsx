import { NavigationContainer, TabActions } from "@react-navigation/native";
import AuthStackNavigator from "./auth/AuthStackNavigator";
import TabsNavigator from "./tabs/TabsNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../services/profileApi";
import { setImage } from "../store/slices/userSlice";
import { useEffect, useState } from "react";
import { initSessionTable, getSession } from "../database";
import { setUserEmail, setLocalId } from "../store/slices/userSlice";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../global/colors";
import { Image } from "react-native";
 
const MainNavigator = () => {
    const email= useSelector(state=>state.userReducer.email)
    const localId = useSelector(state=>state.userReducer.localId)
    const [checkSession, setCheckSession] = useState(true);


    const dispatch = useDispatch()
    const {data:profilePicture, isLoading, error}= useGetProfilePictureQuery(localId)


       useEffect(() => {
        const bootstrap = async () => {
            await initSessionTable();
            const session = await getSession(); 
            if (session) {
                console.log("Session:", session)
                dispatch(setUserEmail(session.email))
                dispatch(setLocalId(session.localId))
            }
            setCheckSession(false);
          
        };

        bootstrap();
    }, []);


    useEffect(()=>{
        if(profilePicture){
            dispatch(setImage(profilePicture.image))
        }
    },[profilePicture])


 if (checkSession) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/ribbon.png')} style={{ width: 30, height: 30 }} />
                <ActivityIndicator size="large" color={colors.cobaltBlue} />
            </View>
        );
    }



    return (
     <NavigationContainer>
        {
            email?<TabsNavigator/>:<AuthStackNavigator/>
        }
     </NavigationContainer>
    );
};

export default MainNavigator;