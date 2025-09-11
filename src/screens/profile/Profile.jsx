import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../global/colors";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CameraIcon from "../../components/CameraIcon";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.userReducer.email);

  const dispatch = useDispatch();
  const pickImage = async ()=>{
    let result = await ImagePicker.launchCameraAsync({
               mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
            base64: true
    })
    if (!result.canceled) {
         const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`
         setImage (imgBase64)
    }
  }

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageProfileContainer}>
        {image ? (
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.profileImage}
          />
        ) : (
          <Text style={styles.textProfilePlaceHolder}>
            {user.charAt(0).toUpperCase()}
          </Text>
        )}
        <Pressable
          onPress={pickImage}
          style={({ pressed }) => [
            { opacity: pressed ? 0.9 : 1 },
            styles.cameraIcon,
          ]}
        >
          <CameraIcon />
        </Pressable>
      </View>
      <Text style={styles.profileData}>Email: {user}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.ubication}>Mi ubicación:</Text>
      </View>
      <View style={styles.mapContainer}></View>
      <View style={styles.placeDescriptionContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}></Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfileContainer: {
    width: 128,
    height: 128,
    borderRadius: 128,
    backgroundColor: colors.lightPink,
    justifyContent: "center",
    alignItems: "center",
  },
  textProfilePlaceHolder: {
    color: colors.white,
    fontSize: 48,
  },
  profileData: {
    paddingVertical: 16,
    fontSize: 16,

    fontFamily: "RobotoCondensed-Regular",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 128,
  },
  mapContainer: {
    width: "100%",
    height: 240,
    overflow: "hidden",
    elevation: 5,
    marginBottom: 16,
  },
  map: {
    height: 240,
  },
  mapTitle: {
    fontWeight: "700",
  },
  placeDescriptionContainer: {
    flexDirection: "row",
    gap: 16,
  },
  ubication: {
    fontSize: 16,
    fontFamily: "RobotoCondensed-Regular",
  },
});
