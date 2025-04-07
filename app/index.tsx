// React
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

// Components
import ChargeChart from '@/components/Chart';
import Timeline from '@/components/TimeLine';
import ConsumptionCard from '@/components/ConsumptionCard';

// Icons
import ArrowLeftIcon from '@/assets/icons/ArrowLeft';
import VectorIcon from '@/assets/icons/Vector';
import SunIcon from '@/assets/icons/Sun';
import CheckCircleIcon from '@/assets/icons/CheckCircle';
import CarFrontIcon from '@/assets/icons/Car';
import Typography from '@/components/Typography';
import { Colors } from '@/constants/Colors';
import Toast from 'react-native-toast-message';

const consumptionData = [
  { title: '65kW', value: 'Total energy consumed' },
  { title: '€0.25 kW', value: 'AVG. Energy cost' },
  { title: '€984', value: 'EST. Total Spend' },
];

const MainScreen = () => {
  const showToast = () => {
    Toast.show({
      text2: 'Charging completed.',
      text1: 'You can hire UFUK now :)',
      type: 'success',
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={showToast}>
            <ArrowLeftIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={showToast}>
            <VectorIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Typography
            weight="medium"
            style={{ fontSize: 14, textAlign: 'center' }}
          >
            <CarFrontIcon /> FERRANS`S CAR
          </Typography>

          <Typography
            weight="bold"
            style={{ fontSize: 24, textAlign: 'center', alignItems: 'center' }}
          >
            Charging in progress
          </Typography>

          <Typography
            weight="regular"
            color="green"
            style={{ fontSize: 12, marginTop: 8 }}
          >
            <SunIcon /> Full power charging; excess energy available
          </Typography>
        </View>

        <View style={{ marginTop: 24 }}>
          <ChargeChart />
        </View>

        <View style={styles.batteryTimeContainer}>
          <Image
            source={require('@/assets/images/Baterai.png')}
            style={styles.batteryImage}
          />
          <View style={{ marginLeft: 16 }}>
            <Typography weight="bold" style={{ fontSize: 14 }}>
              79%
            </Typography>
            <View style={styles.batteryTime}>
              <Typography weight="bold" style={{ fontSize: 14 }}>
                24 min{' '}
              </Typography>

              <Typography
                weight="regular"
                style={{ fontSize: 13, lineHeight: 19.5 }}
              >
                left
              </Typography>
            </View>
          </View>
        </View>

        <View style={styles.timelineContainer}>
          <Timeline />
        </View>

        <View style={styles.consumptionContainer}>
          {consumptionData.map((item) => (
            <ConsumptionCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.doneButton} onPress={showToast}>
            <CheckCircleIcon />
            <Typography
              weight="bold"
              color="white"
              style={styles.doneButtonText}
            >
              DONE
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    overflow: 'visible',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
  },
  batteryImage: {
    width: 80,
    height: 40,
    objectFit: 'contain',
  },
  batteryTimeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },
  batteryTime: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  consumptionContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: '100%',
    marginVertical: 24,
  },
  timelineContainer: {
    marginTop: 16,
  },
  doneButton: {
    width: '100%',
    backgroundColor: Colors.light.blue,
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButtonText: {
    marginLeft: 8,
    fontSize: 14,
  },
});

export default MainScreen;
