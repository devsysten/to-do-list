import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.base.gray600,
  },

  tasksContainer: {
    flex: 1,
    marginTop: 55,
    marginHorizontal: 24,
  },

  tasksInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

  },

  tasksCreated: {
    color: theme.color.brand.blue,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.bold,
  },

  tasksDone: {
    color: theme.color.brand.purple,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.bold
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  counterContainer: {
    backgroundColor: theme.color.base.gray400,
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  },

  counterText: {
    color: theme.color.base.gray200,
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_family.bold,
  }
});