import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: theme.color.base.gray400,
    borderEndColor: theme.color.base.gray600,
    borderStartColor: theme.color.base.gray600,
    borderBottomColor: theme.color.base.gray600,
    borderWidth: 1,
  },

  emptyImage: {
    marginBottom: 16,
  },

  textBold: {
    fontSize: 12,
    fontFamily: theme.font_family.bold,
    color: theme.color.base.gray300,
  },

  textRegular: {
    fontSize: 12,
    fontFamily: theme.font_family.regular,
    color: theme.color.base.gray300,
  }
});