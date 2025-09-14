import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../global/colors";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CameraIcon from "../../components/CameraIcon";
import * as ImagePicker from "expo-image-picker";
import { usePutProfilePictureMutation } from "../../services/profileApi";
import { setImage } from "../../store/slices/userSlice";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Profile = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const user = useSelector((state) => state.userReducer.email);
  const localId = useSelector((state) => state.userReducer.localId);
  const image = useSelector((state) => state.userReducer.image);

  const [triggerPutProfilePicture, result] = usePutProfilePictureMutation();

  const dispatch = useDispatch();

  console.log("Locarion",location)
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    });
    if (!result.canceled) {
      const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
      dispatch(setImage(imgBase64));
      triggerPutProfilePicture({ localId: localId, image: imgBase64 });
    }
  };

 useEffect(() => {
    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Los permisos fueron denegados');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

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

      <View style={styles.mapContainer}>
                {
                    location
                        ?
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker coordinate={{ "latitude": location.coords.latitude, "longitude": location.coords.longitude }} title={"Fashion"} />
                        </MapView>
                        :

                                <Text>Hubo un problema al obtener la ubicación</Text>


                }

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