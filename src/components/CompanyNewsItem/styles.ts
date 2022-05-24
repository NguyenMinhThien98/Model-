import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  newsListContainer: {
    marginTop: 20,
  },
  gradientContainer: {
    borderRadius: 10,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 10,
  },
  newsListWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 11,
  },
  newsTitle: {
    color: Colors.greyDark,
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  newsPublished: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  newsPublishedTitle: {
    color: Colors.greyMedium,
    fontSize: 10,
    fontFamily: Fonts.regular,
  },
  newsTagGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 12,
  },
  chevronPrimaryRight: {
    marginTop: 4,
  },
  newsTagAnnouncement: {
    backgroundColor: Colors.zircon,
    borderRadius: 10,
  },
  newsTagAnnouncementText: {
    color: Colors.primary600,
    fontSize: 10,
    fontFamily: Fonts.regular,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
    textAlign: 'center',
  },
  newsTagRecommendations: {
    backgroundColor: Colors.error200,
    borderRadius: 10,
  },
  newsTagRecommendationsText: {
    color: Colors.error600,
    fontSize: 10,
    fontFamily: Fonts.regular,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
    textAlign: 'center',
  },
  newsTagBrokerNotes: {
    backgroundColor: Colors.border,
    borderRadius: 10,
  },
  newsTagBrokerNotesText: {
    color: Colors.grey600,
    fontSize: 10,
    fontFamily: Fonts.regular,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
    textAlign: 'center',
  },
  newsTagResouces: {
    backgroundColor: Colors.success200,
    borderRadius: 10,
  },
  newsTagResoucesText: {
    color: Colors.success800,
    fontSize: 10,
    fontFamily: Fonts.regular,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
    textAlign: 'center',
  },
  newsTagMarketNews: {
    backgroundColor: Colors.warning100,
    borderRadius: 10,
  },
  newsTagMarketNewsText: {
    color: Colors.warning600,
    fontSize: 10,
    fontFamily: Fonts.regular,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
    textAlign: 'center',
  },
});

export default styles;
