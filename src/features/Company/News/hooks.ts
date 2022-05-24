import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback} from 'react';

const useCompanyNews = () => {
  const dumpNews = [
    {
      title: 'Why Commonwealth Bank is trading higher today',
      published_date: 'Sep 29 2021',
      tag: 'company_overview.news.announcement',
      tagType: 'announcement',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna dignissim est, maecenas at sed sem placerat. Risus, nunc habitant quisque nam mauris faucibus. Auctor gravida elit lacus quis quis tortor sed enim orci. Tortor, enim molestie ornare mattis diam egestas aliquet amet odio. Tempus quisque varius porttitor elit elit. Odio cras viverra at pellentesque mauris. Ut sollicitudin sed eu tellus turpis a curabitur aliquet diam. Nibh viverra vel, vitae eu. Mattis posuere in tempus, nam magna at erat massa adipiscing. Pellentesque vitae bibendum ipsum amet consectetur maecenas adipiscing. Urna, justo, enim tincidunt consectetur volutpat adipiscing consectetur elementum sit. Ac nam aliquam cursus pretium vestibulum senectus. Suspendisse amet, consequat at quis. Nunc consequat purus aenean sed urna nulla. Aliquam consequat malesuada feugiat lorem. Ac velit et condimentum ultrices dignissim commodo tincidunt viverra lacus. Nam ipsum pharetra, mauris erat. Urna vehicula cursus varius fringilla consectetur sed. Sodales augue fames in ultrices odio molestie molestie .Malesuada tristique velit in senectus velit. Dui, sit tempus, vitae sit ullamcorper fermentum, odio risus. Consectetur velit volutpat mi ullamcorper. Vestibulum hendrerit massa quis massa quam. Ridiculus posuere id faucibus faucibus nisi. Habitasse cras odio commodo nibh. Aliquam volutpat mollis quisque dignissim tristique a, diam in est. Lacus eu, consequat erat proin risus gravida nunc.',
    },
    {
      title:
        'Banks ask for space to grow to grow crypto as regulators ponder guardrails',
      published_date: 'Sep 29 2021',
      tag: 'company_overview.news.recommendations',
      tagType: 'recommendations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna dignissim est, maecenas at sed sem placerat. Risus, nunc habitant quisque nam mauris faucibus. Auctor gravida elit lacus quis quis tortor sed enim orci. Tortor, enim molestie ornare mattis diam egestas aliquet amet odio. Tempus quisque varius porttitor elit elit. Odio cras viverra at pellentesque mauris. Ut sollicitudin sed eu tellus turpis a curabitur aliquet diam. Nibh viverra vel, vitae eu. Mattis posuere in tempus, nam magna at erat massa adipiscing. Pellentesque vitae bibendum ipsum amet consectetur maecenas adipiscing. Urna, justo, enim tincidunt consectetur volutpat adipiscing consectetur elementum sit. Ac nam aliquam cursus pretium vestibulum senectus. Suspendisse amet, consequat at quis. Nunc consequat purus aenean sed urna nulla. Aliquam consequat malesuada feugiat lorem. Ac velit et condimentum ultrices dignissim commodo tincidunt viverra lacus. Nam ipsum pharetra, mauris erat. Urna vehicula cursus varius fringilla consectetur sed. Sodales augue fames in ultrices odio molestie molestie .Malesuada tristique velit in senectus velit. Dui, sit tempus, vitae sit ullamcorper fermentum, odio risus. Consectetur velit volutpat mi ullamcorper. Vestibulum hendrerit massa quis massa quam. Ridiculus posuere id faucibus faucibus nisi. Habitasse cras odio commodo nibh. Aliquam volutpat mollis quisque dignissim tristique a, diam in est. Lacus eu, consequat erat proin risus gravida nunc.',
    },
    {
      title:
        'Banks ask for space to grow to grow crypto as regulators ponder guardrails',
      published_date: 'Sep 29 2021',
      tag: 'company_overview.news.broker_notes',
      tagType: 'broker_notes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna dignissim est, maecenas at sed sem placerat. Risus, nunc habitant quisque nam mauris faucibus. Auctor gravida elit lacus quis quis tortor sed enim orci. Tortor, enim molestie ornare mattis diam egestas aliquet amet odio. Tempus quisque varius porttitor elit elit. Odio cras viverra at pellentesque mauris. Ut sollicitudin sed eu tellus turpis a curabitur aliquet diam. Nibh viverra vel, vitae eu. Mattis posuere in tempus, nam magna at erat massa adipiscing. Pellentesque vitae bibendum ipsum amet consectetur maecenas adipiscing. Urna, justo, enim tincidunt consectetur volutpat adipiscing consectetur elementum sit. Ac nam aliquam cursus pretium vestibulum senectus. Suspendisse amet, consequat at quis. Nunc consequat purus aenean sed urna nulla. Aliquam consequat malesuada feugiat lorem. Ac velit et condimentum ultrices dignissim commodo tincidunt viverra lacus. Nam ipsum pharetra, mauris erat. Urna vehicula cursus varius fringilla consectetur sed. Sodales augue fames in ultrices odio molestie molestie .Malesuada tristique velit in senectus velit. Dui, sit tempus, vitae sit ullamcorper fermentum, odio risus. Consectetur velit volutpat mi ullamcorper. Vestibulum hendrerit massa quis massa quam. Ridiculus posuere id faucibus faucibus nisi. Habitasse cras odio commodo nibh. Aliquam volutpat mollis quisque dignissim tristique a, diam in est. Lacus eu, consequat erat proin risus gravida nunc.',
    },
    {
      title:
        'Banks ask for space to grow to grow crypto as regulators ponder guardrails',
      published_date: 'Sep 29 2021',
      tag: 'company_overview.news.resources',
      tagType: 'resources',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna dignissim est, maecenas at sed sem placerat. Risus, nunc habitant quisque nam mauris faucibus. Auctor gravida elit lacus quis quis tortor sed enim orci. Tortor, enim molestie ornare mattis diam egestas aliquet amet odio. Tempus quisque varius porttitor elit elit. Odio cras viverra at pellentesque mauris. Ut sollicitudin sed eu tellus turpis a curabitur aliquet diam. Nibh viverra vel, vitae eu. Mattis posuere in tempus, nam magna at erat massa adipiscing. Pellentesque vitae bibendum ipsum amet consectetur maecenas adipiscing. Urna, justo, enim tincidunt consectetur volutpat adipiscing consectetur elementum sit. Ac nam aliquam cursus pretium vestibulum senectus. Suspendisse amet, consequat at quis. Nunc consequat purus aenean sed urna nulla. Aliquam consequat malesuada feugiat lorem. Ac velit et condimentum ultrices dignissim commodo tincidunt viverra lacus. Nam ipsum pharetra, mauris erat. Urna vehicula cursus varius fringilla consectetur sed. Sodales augue fames in ultrices odio molestie molestie .Malesuada tristique velit in senectus velit. Dui, sit tempus, vitae sit ullamcorper fermentum, odio risus. Consectetur velit volutpat mi ullamcorper. Vestibulum hendrerit massa quis massa quam. Ridiculus posuere id faucibus faucibus nisi. Habitasse cras odio commodo nibh. Aliquam volutpat mollis quisque dignissim tristique a, diam in est. Lacus eu, consequat erat proin risus gravida nunc.',
    },
    {
      title:
        'Banks ask for space to grow to grow crypto as regulators ponder guardrails',
      published_date: 'Sep 29 2021',
      tag: 'company_overview.news.market_news',
      tagType: 'market_news',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna dignissim est, maecenas at sed sem placerat. Risus, nunc habitant quisque nam mauris faucibus. Auctor gravida elit lacus quis quis tortor sed enim orci. Tortor, enim molestie ornare mattis diam egestas aliquet amet odio. Tempus quisque varius porttitor elit elit. Odio cras viverra at pellentesque mauris. Ut sollicitudin sed eu tellus turpis a curabitur aliquet diam. Nibh viverra vel, vitae eu. Mattis posuere in tempus, nam magna at erat massa adipiscing. Pellentesque vitae bibendum ipsum amet consectetur maecenas adipiscing. Urna, justo, enim tincidunt consectetur volutpat adipiscing consectetur elementum sit. Ac nam aliquam cursus pretium vestibulum senectus. Suspendisse amet, consequat at quis. Nunc consequat purus aenean sed urna nulla. Aliquam consequat malesuada feugiat lorem. Ac velit et condimentum ultrices dignissim commodo tincidunt viverra lacus. Nam ipsum pharetra, mauris erat. Urna vehicula cursus varius fringilla consectetur sed. Sodales augue fames in ultrices odio molestie molestie .Malesuada tristique velit in senectus velit. Dui, sit tempus, vitae sit ullamcorper fermentum, odio risus. Consectetur velit volutpat mi ullamcorper. Vestibulum hendrerit massa quis massa quam. Ridiculus posuere id faucibus faucibus nisi. Habitasse cras odio commodo nibh. Aliquam volutpat mollis quisque dignissim tristique a, diam in est. Lacus eu, consequat erat proin risus gravida nunc.',
    },
  ];

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goNewsDetails = useCallback(() => {
    navigation.navigate(SCREENS.COMPANYNEWSDETAILS, {dumpNews});
  }, [navigation]);

  return {
    dumpNews,
    goNewsDetails,
  };
};

export default useCompanyNews;
