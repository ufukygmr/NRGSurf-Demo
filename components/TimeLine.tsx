import React from 'react';
import { View, StyleSheet } from 'react-native';
import Typography from './Typography';

const timelineData = [
  {
    title: 'Plugged in, start charging at 15%',
    time: '12:12',
  },
  {
    title: 'Plugged in, charging in to 50%',
    time: '12:49',
  },
  {
    title: 'Plugged in, charging in to 80%',
    time: '13:15',
  },
  {
    title: 'Charging Complete, battery is at 100%',
    time: '13:40',
  },
];

const TimelineItem = ({ item, isLast }: { item: any; isLast: boolean }) => (
  <View style={styles.row}>
    <View style={styles.lineContainer}>
      <View style={styles.dot} />
      {!isLast && <View style={styles.verticalLine} />}
    </View>

    <View style={styles.content}>
      <Typography weight="medium" style={styles.title}>
        {item.title}
      </Typography>
      <Typography weight="regular" color="gray" style={styles.time}>
        {item.time}
      </Typography>
    </View>
  </View>
);

const Timeline = () => {
  return (
    <View>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.title}
          item={item}
          isLast={index === timelineData.length - 1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  lineContainer: {
    alignItems: 'center',
    width: 16,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#0F172A', // Slate-900
    marginTop: 4,
  },
  verticalLine: {
    backgroundColor: '#CBD5E1', // Slate-300
    marginTop: 4,
    height: 42,
    width: 1,
  },
  content: {
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
  },
});

export default Timeline;
