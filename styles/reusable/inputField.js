import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


export default StyleSheet.create({
    container: {
        marginTop:50
    },
    textInput: {
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white
    },
    input: {
        width: '90%',
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 12,
        padding: 10,
        fontSize: 15,
        marginLeft: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderBottomColor: COLORS.white
    },
    text: { 
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 1
    },
    
    touchableOpacity: {
        height: 50,
        width: 300,
        borderRadius: 20,
        marginLeft: 100,
    },
})