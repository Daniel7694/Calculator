import { Pressable, Text, View } from "react-native";
import { styles } from "../../config/theme/app-theme";


export const CalculatorScreen = () =>{
    return(
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 30, paddingBottom:20}}>
            <Text style={styles.mainResult}>1103</Text>
            <Text style={styles.subResult}>11</Text>
            </View>

            <View>
            <Pressable style={styles.button}>
                <Text>AC</Text>
            </Pressable>
        </View> 
        </View>


    );
};