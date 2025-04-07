import { View, StyleSheet } from 'react-native';
import Typography from './Typography';

const ConsumptionCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <View style={styles.card}>
      <Typography weight="bold" color="blue" style={{ fontSize: 16 }}>
        {title}
      </Typography>
      <Typography
        weight="regular"
        color="gray"
        style={{ fontSize: 12, marginTop: 8 }}
      >
        {value}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '32%',
    height: 84,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    elevation: 0.5,
  },
});

export default ConsumptionCard;
