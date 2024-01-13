import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react"
import { Image, SafeAreaView, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import InputField from "./reusable/InputField";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [inputError, setInputError] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false)

    
    const loginUrl = "api/v1/user/login";
    const ngrokBaseUrl = " https://4b7f-102-89-33-64.ngrok-free.app";
    const URL = `${ngrokBaseUrl}/${loginUrl}`

    const navigation = useNavigation()

    const navigateToPage = (pageName) => {
        navigation.navigate(pageName);
    };

    handleSubmit = async () => {

        setButtonClicked(true)

        let loginData = {
            email,
            password
        };
        if(email !== "" && password !== ""){
            setInputError("");
            try{
                const response = await axios.post(URL, loginData);
                if(response.status === 201){
                    navigateToPage("Home")
                }
            } catch(error){
                if(error.response && error.response.data){
                    setError(error.response.data);
                } else {
                    setError("An Error Occured, Failed To Connect !!!")
                }
            } 
        } else {
            setInputError("Email Or Password Can Not Be Blank !!!")
        }
    }    

        return(
            <SafeAreaView 
                style={{
                    backgroundColor: COLORS.emerald, 
                    height: SIZES.height,
                    width: SIZES.width,
                    position: 'absolute',
                    alignItems: 'center'
                    
                    }}>
                <View>
                    <Image source={require('../assets/images/jpg/bankingapp.jpeg')}
                        style={{width: 300, 
                                marginTop: 20,
                                height: 250
                               }}
                    />
                    <View>
                        <Text>Email</Text>
                        <InputField
                            placeholder="email"
                            keyboardType="email-address"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    
}

export default Login;