import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.color.base.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
    position: 'relative',
  },
  form: {
    position: 'absolute',
    bottom: -54/2,
    height: 54,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    marginRight:4,
    height: 54,
    width: '75%',
    backgroundColor: theme.color.base.gray500,
    borderRadius: 5,
    padding: 16,
    fontSize: theme.font_size.md,
    borderColor: theme.color.base.gray700,
    borderWidth: 1,
    color: theme.color.base.gray100,
  },
  inputBoder:{
    borderColor: theme.color.brand.purple,
  },
  button: {
    height: 54,
    width: 54,
    borderRadius: 6,
    backgroundColor: theme.color.brand.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  }
});