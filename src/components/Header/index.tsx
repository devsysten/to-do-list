import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from  '@expo/vector-icons';
import { styles } from "./styles";

import logoImage from '../../assets/Logo.png';
import { theme } from "../../theme";

type HeaderProps = {
  task: string,
  inputRef: React.RefObject<TextInput>,
  onChangeText: (task: string ) => void,
  onPress: () => void,
}

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps){
  return(
    <View style={styles.headerContainer}>
      <Image source={logoImage}/>
      <View style={styles.form}>
        <TextInput 
          style={[
            styles.input, 
            inputRef.current?.isFocused() && task
            ? styles.inputBoder 
            : null,
          ]} 
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.color.base.gray300}
          value={task}
          onChangeText={text => onChangeText(text)}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType='done'
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialCommunityIcons  
             name="plus-circle-outline" 
             size={22}
             color={theme.color.base.gray100}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}