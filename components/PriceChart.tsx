import { Colors } from '@/constants/Colors';
import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const ChartMock = () => {
  const data = [
    { value: 1 },
    { value: 7 },
    { value: 4.2 },
    { value: 5.5 },
    { value: 3 },
    { value: 1 },
    { value: 11.8 },
    { value: 2 },
    { value: 1 },
    { value: 9.5 },
    { value: 6.5 },
    { value: 3 },
    { value: 5.8 },
    { value: 0 },
    { value: 3 },
    { value: 12.5 },
    { value: 4.5 },
  ];

  return (
    <View style={{ backgroundColor: 'white' }}>
      <LineChart
        data={data}
        width={340}
        height={200}
        spacing={360 / data.length}
        initialSpacing={0}
        color={Colors.light.gray}
        thickness={1}
        isAnimated
        hideDataPoints={true}
        dataPointsColor="#4ade80"
        dataPointsRadius={4}
        showVerticalLines={false}
        showXAxisIndices={false}
        showYAxisIndices={false}
        xAxisColor="transparent"
        yAxisColor="transparent"
        hideRules
        hideAxesAndRules
        hideYAxisText
      />
    </View>
  );
};

export default ChartMock;
