import { StyleSheet } from "react-native";
import { COLORS } from "../constants";



export default StyleSheet.create({
    container: {
        height: 50,
        width: 300,
        borderRadius: 20,
        marginTop: 400,
        marginLeft: 30,
        backgroundColor: COLORS.emerald
    },
    text: { 
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 1
    }
})