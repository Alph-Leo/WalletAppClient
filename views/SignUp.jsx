import { useState } from "react";
import { Image, SafeAreaView, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, icons } from "../constants";
import InputField from "./reusable/InputField";
import inputField from "../styles/reusable/inputField";
import axios from "axios";
import 'react-native-get-random-values'





const SignUp = () => {

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [inputError, setInputError] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false)

    const navigation = useNavigation()

    const navigateToPage = (pageName) => {
        navigation.navigate(pageName);
    };

    const signUpUrl = "api/v1/user";
    const ngrokBaseUrl = "https://2af0-102-88-68-155.ngrok-free.app";
    const URL = `${ngrokBaseUrl}/${signUpUrl}`

    const errorMessage = "An Error Occured !!!";
    const requiredFieldMessage = "All Fields Are Required";


    const handleSubmit = async () => {

        setButtonClicked(true)


        let signUpData = {
            userName,
            email,
            phoneNumber,
            password,
            
        };
        if(
           userName !== "" 
        && email !== "" 
        && phoneNumber !== "" 
        && password !== ""
        ) {
            setInputError("");
            try{
                const response = await axios.post(URL, signUpData);
                if(response.status === 201){
                    navigateToPage("Home");
                    ToastAndroid.show("Registration Successful", ToastAndroid.SHORT)
                }
            } catch(error) {
                if(error.response && error.response.data) {
                    setError(error.response.data);
                } else {
                    setError(errorMessage)
                }
            }
        } else {
            setInputError(requiredFieldMessage)
        }
    } 

    return(
        <SafeAreaView>
            
            <Image source={require('../assets/images/jpg/bankingapp.jpeg')}
                style={{height: SIZES.height, position: 'absolute'}}
            />
            <View style={{height: 200, alignItems: 'center', marginTop: 20}}>
                <Image source={(require('../assets/images/jpg/startPage.jpeg'))}
                    style={{height: 200, width: 300}}
                />
            </View>
            <View style={inputField.container}>
                
                <InputField
                    placeholder="Username"
                    keyboardType="name"
                    onChangeText={(text) => setUsername(text)}
                    value={userName}
                />
                
                <InputField
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                
                <InputField
                    placeholder="Phone number"
                    keyboardType='numeric'
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                />
                <InputField
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
                
               
            </View>
            <View>
                {error && <Text style={{color: COLORS.red}}>{error}</Text>}
                {inputError !== "" && (
                    <Text style={{color: COLORS.red}}>{inputError}</Text>
                )}
                
            </View>
            <View style={{
                marginTop: 50,
                width: 250,
                alignItems: 'center',
                borderColor: 'white',
            }}>
                <TouchableOpacity style={{                                
                    height: 50,
                    width: 300,
                    borderRadius: 20,
                    marginLeft: 100,
                    backgroundColor: buttonClicked ? COLORS.yellow : COLORS.emerald
                }}
                onPress={(e) => handleSubmit(e)}
                >
                    <Text style={inputField.text}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;