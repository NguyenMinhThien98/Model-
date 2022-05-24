import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const customAlignTop = 12;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#EBF1FF',
  },
  containerFirstItem: {
    borderTopWidth: 1,
    marginTop: 15,
  },
  leftIconView: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconView: {
    marginRight: 0,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: Colors.greyMedium,
  },
  picture: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  descriptionView: {
    flex: 1,
  },
  stockNameView: {
    minWidth: '35%',
  },
  stockNameTxt: {
    color: Colors.greyDark,
    fontWeight: '400',
    fontSize: 16,
  },
  companyName: {
    color: Colors.greyMedium,
    fontWeight: '400',
    fontSize: 12,
  },
  lineTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignBottomView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: customAlignTop,
  },
  numberView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  priceTxt: {
    fontSize: 14,
    color: Colors.greyMedium,
  },
  percentTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
