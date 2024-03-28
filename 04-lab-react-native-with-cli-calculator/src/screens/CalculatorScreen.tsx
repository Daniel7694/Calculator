import { Pressable, Text, View } from "react-native";
import { colors, styles } from "../../config/theme/app-theme";
import { CalculatorButton } from "../components/CalculatorButton";

export const CalculatorScreen = () =>{
    return(
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 30, paddingBottom:20}}>
            <Text style={styles.mainResult}>1103</Text>
            <Text style={styles.subResult}>11</Text>
            </View>

            <View style={styles.row}>
           <CalculatorButton blackText label="AC" color={colors.lightGray}/>
           <CalculatorButton blackText label="+/-" color={colors.lightGray}/>
           <CalculatorButton blackText label="DEL" color={colors.lightGray}/>
           <CalculatorButton label="÷" color={colors.orange}/>
            </View> 


            <View style={styles.row}>
           <CalculatorButton label="7" color={colors.lightGray}/>
           <CalculatorButton label="8" color={colors.lightGray}/>
           <CalculatorButton label="9" color={colors.lightGray}/>
           <CalculatorButton label="*" color={colors.orange}/>
            </View> 


            <View style={styles.row}>
           <CalculatorButton label="4" color={colors.lightGray}/>
           <CalculatorButton label="5" color={colors.lightGray}/>
           <CalculatorButton label="6" color={colors.lightGray}/>
           <CalculatorButton label="-" color={colors.orange}/>
            </View> 


            <View style={styles.row}>
           <CalculatorButton label="1" color={colors.lightGray}/>
           <CalculatorButton label="2" color={colors.lightGray}/>
           <CalculatorButton label="3" color={colors.lightGray}/>
           <CalculatorButton label="+" color={colors.orange}/>
            </View> 


            <View style={styles.row}>
           <CalculatorButton label="0" color={colors.lightGray} doubleSize/>
           <CalculatorButton label="." color={colors.lightGray}/>

           <CalculatorButton label="=" color={colors.orange}/>
            </View> 
        </View>


    );
};