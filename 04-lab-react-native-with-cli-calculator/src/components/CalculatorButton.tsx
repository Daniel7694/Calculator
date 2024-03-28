import { Pressable, Text } from "react-native";
import { styles, colors } from '../../config/theme/app-theme';


interface props{
    label : string;
    color? : string;
}

export const CalculatorButton = ({label,color = colors.darkGray}:props) =>{
    return(
        <Pressable style={({pressed}) =>({
            ...styles.button,
            backgroundColor: color,
            opacity: (pressed) ? 0.8 :1

        })}>
        <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
    );
};

