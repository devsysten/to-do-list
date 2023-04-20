import { View, ActivityIndicator } from "react-native";
import { styles } from "../../screens/Home/styles";
import { theme } from "../../theme";



export function Loading(){
  return(
    <View style={styles.container}>  
      <ActivityIndicator size={50} color={theme.color.brand.blue} />
    </View>
  )
}