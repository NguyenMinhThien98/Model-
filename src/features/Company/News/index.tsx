import {ScrollView} from 'react-native';
import React from 'react';
import DockedButton from 'components/DockedButton';
import CompanyNewsItem from 'components/CompanyNewsItem';
import useCompanyNews from './hooks';

const News = () => {
  const {dumpNews, goNewsDetails} = useCompanyNews();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CompanyNewsItem news={dumpNews} goNewsDetails={goNewsDetails} />
      <DockedButton />
    </ScrollView>
  );
};

export default News;
