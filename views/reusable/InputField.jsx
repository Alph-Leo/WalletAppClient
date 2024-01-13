import { TextInput, View } from "react-native"
import inputField from "../../styles/reusable/inputField";


const InputField = ({placeholder, value, onChangeText, secureTextEntry}) => {

    return(
        <View>
            <TextInput
                style={inputField.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default InputField;