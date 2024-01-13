import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import getStarted from "../styles/getStarted";
import { useNavigation } from "@react-navigation/native";
import { SIZES } from "../constants";



const GetStarted = () => {

    const navigation = useNavigation()

    const navigateToPage = (pageName) => {
        navigation.navigate(pageName);
    };

    return(
        <SafeAreaView>
            <Image source={require('../assets/images/jpg/bankingapp.jpeg')}
                style={{
                    height: SIZES.height,
                    width: SIZES.width,                    
                    position: 'absolute'
                }}
            />
            <View style={getStarted.container}>
                <TouchableOpacity onPress={() => navigateToPage("Login")}>
                    <Text style={getStarted.text}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default GetStarted;