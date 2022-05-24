import i18n from 'utils/LocalizedStrings';

const useTableRecommendations = () => {
  const tableHeader = [
    {table_title: i18n.t('viewAllRecommendations.close_date')},
    {table_title: i18n.t('viewAllRecommendations.code')},
    {table_title: i18n.t('viewAllRecommendations.type')},
    {table_title: i18n.t('viewAllRecommendations.return')},
  ];

  return {
    tableHeader,
  };
};

export default useTableRecommendations;
