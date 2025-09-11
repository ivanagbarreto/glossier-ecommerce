import { StyleSheet, Text, View, Pressable, Image, ActivityIndicator } from 'react-native'
import { colors } from '../../global/colors'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CameraIcon from '../../components/CameraIcon'



const Profile = () => {
   
  const [image,setImage]=useState("")
  const user= useSelector(state=>state.userReducer.email)
  
  
    return (
        <View style={styles.profileContainer}>
            <View style={styles.imageProfileContainer}>
                {
                    image
                        ?
                        <Image source={{ uri: image }} resizeMode='cover' style={styles.profileImage} />
                        :
                        <Text style={styles.textProfilePlaceHolder}>{user.charAt(0).toUpperCase()}</Text>
                }
                <Pressable onPress={null} style={({ pressed }) => [{ opacity: pressed ? 0.90 : 1 }, styles.cameraIcon]} >
                    <CameraIcon />
                </Pressable>
            </View>
            <Text style={styles.profileData}>Email: </Text>
            <View style={styles.titleContainer}>
                <Text>Mi ubicación:</Text>
            </View>
            <View style={styles.mapContainer}>
                

            </View>
            <View style={styles.placeDescriptionContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}></Text>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    profileContainer: {
        paddingTop: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfileContainer: {
        width: 128,
        height: 128,
        borderRadius: 128,
        backgroundColor: colors.lightPink,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textProfilePlaceHolder: {
        color: colors.white,
        fontSize: 48,
    },
    profileData: {
        paddingVertical: 16,
        fontSize: 16
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 128
    },
    mapContainer: {
        width: '100%',
        height: 240,
        overflow: "hidden",
        elevation: 5,
        marginBottom: 16
    },
    map: {
        height: 240,
    },
    mapTitle: {
        fontWeight: '700'
    },
    placeDescriptionContainer: {
        flexDirection: 'row',
        gap: 16
    }
})