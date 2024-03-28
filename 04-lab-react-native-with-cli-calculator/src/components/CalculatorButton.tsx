import { Pressable, Text } from "react-native";
import { styles } from "../../config/theme/app-theme";


interface props{
    label : string;
}

export const CalculatorButton = ({label,}:props) =>{
    return(
        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
    );
};

