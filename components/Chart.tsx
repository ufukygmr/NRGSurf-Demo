import { Colors } from '@/constants/Colors';
import React, { useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import Typography from './Typography';

const screenWidth = Dimensions.get('window').width;

const dataPurple = [
  { value: 150 },
  { value: 200 },
  { value: 202 },
  { value: 203 },
  { value: 203 },
  { value: 200 },
];

const dataYellow = [
  { value: 200 },
  { value: 200 },
  { value: 100 },
  { value: 40 },
  { value: 20 },
  { value: 10 },
];

const dataCyan = [
  { value: 0 },
  { value: 50 },
  { value: 70 },
  { value: 72 },
  { value: 78 },
  { value: 79 },
];

// X-axis labels (in hours)
const xLabels = ['0', '0.5', '1.0', '1.5', '2.0', '2.5'];

// Right-side Y-axis labels (simulated)
const rightYAxisLabels = ['0', '20', '40', '60', '80', '100'];

const ChargeChartGifted = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.textTransform90}>
        <Typography
          weight="semibold"
          style={{
            fontSize: 8,
          }}
        >
          CONSTANT kW
        </Typography>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <LineChart
          isAnimated
          curved
          spacing={(screenWidth - 100) / 7}
          data={dataPurple}
          data2={dataYellow}
          secondaryData={dataCyan}
          height={152}
          maxValue={250}
          noOfSections={5}
          hideRules={false}
          xAxisColor="#E5E7EB"
          yAxisColor="#E5E7EB"
          xAxisLabelTexts={xLabels}
          secondaryYAxis={{
            yAxisLabelTexts: rightYAxisLabels,
          }}
          yAxisTextStyle={{ color: '#64748B' }}
          color1={Colors.light.blue} // purple
          color2={Colors.light.yellow} // yellow
          secondaryLineConfig={{ color: Colors.light.cyan }}
          thickness1={2}
          thickness2={2}
          thickness3={2}
          dashGap={4} // dashed cyan line
          dashWidth={4}
          hideDataPoints
          yAxisLabelWidth={40}
        />
      </View>

      {/* Right Y-axis title (rotated) */}
      <View style={styles.textTransform270}>
        <Typography
          weight="semibold"
          style={{
            fontSize: 8,
          }}
        >
          CHARGE CAPACITY (%)
        </Typography>
      </View>

      <Typography
        weight="semibold"
        style={{
          marginTop: 8,
          textAlign: 'center',
          fontSize: 8,
        }}
      >
        CHARGE TIME (HOURS)
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  textTransform90: {
    width: 100,
    height: 8,
    textAlign: 'center',
    transform: [{ rotate: '270deg' }],
    position: 'absolute',
    left: -55,
    top: 50,
  },
  textTransform270: {
    width: 100,
    height: 8,
    textAlign: 'center',
    transform: [{ rotate: '90deg' }],
    position: 'absolute',
    right: -50,
    top: 70,
  },
});

export default ChargeChartGifted;
