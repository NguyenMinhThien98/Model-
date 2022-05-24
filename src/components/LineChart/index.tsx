import {Colors} from 'assets/colors';
import styles from './styles';
import React, {useCallback, useEffect, useState} from 'react';
import {ColorValue, Text, View} from 'react-native';
import {LineChart as LineChartLibrary} from 'react-native-gifted-charts';

type ItemChartType = {
  value?: number;
  label: String;
  labelComponent: Function;
  labelTextStyle?: any;
  dataPointText?: string;
  textShiftX?: number;
  textShiftY?: number;
  textColor?: string;
  textFontSize?: number;

  hideDataPoint?: Boolean;
  dataPointHeight?: number;
  dataPointWidth?: number;
  dataPointRadius?: number;
  dataPointColor?: string;
  dataPointShape?: string;
  customDataPoint?: Function;

  stripHeight?: number;
  stripWidth?: number;
  stripColor?: ColorValue | String | any;
  stripOpacity?: number;

  focusedDataPointShape?: String;
  focusedDataPointWidth?: number;
  focusedDataPointHeight?: number;
  focusedDataPointColor?: ColorValue | String | any;
  focusedDataPointRadius?: number;
  focusedCustomDataPoint?: Function;

  dataPointLabelComponent?: Function;
  focusedDataPointLabelComponent?: Function;
  dataPointLabelWidth?: number;
  dataPointLabelShiftX?: number;
  dataPointLabelShiftY?: number;
  showStrip?: Boolean;

  showVerticalLine?: Boolean;
  verticalLineColor?: string;
  verticalLineThickness?: number;
};

interface ItemData {
  value: number;
  label?: string;
}

interface LineChartProps {
  color?: string;
  data: ItemData[];
  thickness?: number;
  maxValue?: number;
  spacing?: number;
}

const baseColor = Colors.white;

const LineChart = ({
  color = Colors.success700,
  thickness = 5,
  maxValue = 500,
  spacing = 16,
  data,
}: LineChartProps) => {
  const [chartData, setChartData] = useState<ItemChartType[]>([]);

  const labelComponent = useCallback(
    (value?: string) => (
      <Text style={styles.lableBottom}>{value ? value : ''}</Text>
    ),
    [],
  );

  const convertedData = useCallback(() => {
    let finalData: ItemChartType[] = [];
    if (data.length > 0) {
      finalData = data.map(item => {
        return {
          value: item.value,
          label: '',
          labelComponent: () => labelComponent(item.label),
        };
      });
    }
    setChartData(finalData);
  }, [data, setChartData, labelComponent]);

  useEffect(() => {
    convertedData();
  }, [convertedData]);

  if (chartData.length > 0) {
    return (
      <View>
        <LineChartLibrary
          thickness={thickness}
          color={color}
          maxValue={maxValue}
          noOfSections={5}
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          areaChart={false}
          showYAxisIndices={false}
          curved
          yAxisTextStyle={styles.yAxisText}
          data={chartData}
          hideDataPoints
          startFillColor={baseColor}
          endFillColor={baseColor}
          startOpacity={0.4}
          spacing={spacing}
          backgroundColor={baseColor}
          rulesColor={baseColor}
          rulesType="solid"
          initialSpacing={10}
          yAxisColor={baseColor}
          xAxisColor={baseColor}
        />
      </View>
    );
  } else {
    return <View />;
  }
};
export default LineChart;
