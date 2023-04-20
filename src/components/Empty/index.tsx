import { View, Text, Image } from "react-native";
import logoClipboard from '../../assets/Clipboard.png';
import { styles } from "./styles";


export function Empty(){
  return (
    <View style={styles.emptyContainer}>
        <Image source={logoClipboard} style={styles.emptyImage}/>
        <Text style={styles.textBold}>
          você ainda não tem tarefas cadastradas
        </Text>
        <Text style={[styles.textRegular, styles.textRegular]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
    </View>
  );
}