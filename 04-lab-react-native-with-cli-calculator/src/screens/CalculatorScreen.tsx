import { Pressable, Text, View } from "react-native";
import { styles } from "../../config/theme/app-theme";
import { CalculatorButton } from "../components/CalculatorButton";

export const CalculatorScreen = () =>{
    return(
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 30, paddingBottom:20}}>
            <Text style={styles.mainResult}>1103</Text>
            <Text style={styles.subResult}>11</Text>
            </View>

            <View style={styles.row}>
           <CalculatorButton label="AC"/>
           <CalculatorButton label="+/-"/>
           <CalculatorButton label="%"/>
           <CalculatorButton label="÷"/>
        </View> 
        </View>


    );
};