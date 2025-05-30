import Badges from '@/components/badges';
import Typography from '@/components/Typography';
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Mapbox, { MapView } from '@rnmapbox/maps';
import BedIcon from '@/assets/icons/Bed';
import { Colors } from '@/constants/Colors';
import CoffeeIcon from '@/assets/icons/Coffee';
import ShoppingCartIcon from '@/assets/icons/ShoppingCart';
import CreditCardIcon from '@/assets/icons/CreditCard';
import StarIcon from '@/assets/icons/Star';
import ArrowRightIcon from '@/assets/icons/ArrowRight';
import ChargeChartGifted from '@/components/Chart';
import { router } from 'expo-router';
import PiggyBankIcon from '@/assets/icons/PiggyBank';
import Toast from 'react-native-toast-message';
interface AmenitiesProps {
  icon: React.ReactNode;
  title: string;
}

Mapbox.setAccessToken(
  'pk.eyJ1IjoidWYwIiwiYSI6ImNtOXZmajJzdDBqOG4yanI4YjVrdHZ3cnMifQ.pI5VwxcUjauW6exy3fMP4Q'
);

const Amenities = ({ icon, title }: AmenitiesProps) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.light.gray,
        borderRadius: 24,
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 8,
        gap: 6,
        alignItems: 'center',
        marginRight: 8,
      }}
    >
      {icon}
      <Typography weight="semibold" color="gray" style={{ fontSize: 14 }}>
        {title}
      </Typography>
    </View>
  );
};

const Charge = () => {
  const badges = ['Best Price', 'Nearby', '22kW'];

  const showToast = () => {
    Toast.show({
      text2: 'Charging completed.',
      text1: 'To Be implemented in future :)',
      type: 'success',
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
      >
        <View>
          <Typography
            weight="bold"
            color="blue"
            style={{ fontSize: 12, marginTop: 6 }}
          >
            2/6 PORT FREE
          </Typography>
          <Typography weight="bold" style={{ fontSize: 24 }}>
            de Mobil Charging Station
          </Typography>
          <Typography weight="regular" color="gray" style={{ fontSize: 14 }}>
            13 Lindengasse
          </Typography>
        </View>

        <View style={styles.badgesContainer}>
          {badges.map((badge) => (
            <Badges key={badge}>{badge}</Badges>
          ))}
        </View>

        <View style={styles.chartContainer}>
          <ChargeChartGifted showDetails={false} />
        </View>

        <View>
          <Typography weight="semibold" color="gray" style={{ fontSize: 14 }}>
            Amenities on site
          </Typography>

          <View style={styles.amenitiesContainer}>
            <Amenities icon={<BedIcon />} title="Restroom" />
            <Amenities icon={<CoffeeIcon />} title="Coffee" />
          </View>
        </View>

        <View>
          <Typography weight="semibold" color="gray" style={{ fontSize: 14 }}>
            {`> ${5} mins to walk`}
          </Typography>

          <View style={styles.amenitiesContainer}>
            <Amenities icon={<CreditCardIcon />} title="ATM" />
            <Amenities icon={<ShoppingCartIcon />} title="Grocery" />
          </View>
        </View>

        <View style={styles.mapContainer}>
          <MapView style={{ flex: 1, borderRadius: 10 }} />
        </View>

        <View>
          <Typography weight="bold" color="black" style={{ fontSize: 20 }}>
            Charging Tips
          </Typography>
          <View
            style={{
              marginTop: 12,
              borderWidth: 1,
              borderColor: Colors.light.lightGray,
              borderRadius: 6,
              padding: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                marginBottom: 12,
              }}
            >
              <PiggyBankIcon />
              <Typography
                weight="semibold"
                color="blue"
                style={{ fontSize: 16 }}
              >
                18% Savings
              </Typography>
            </View>
            <Typography weight="regular" color="black" style={{ fontSize: 14 }}>
              By charging here you’ll save €13.54 if you get 20kW. This is
              possible since there a is an excess of the solar energy generated
              by your Energy Community.
            </Typography>
          </View>
        </View>

        <View>{/* TODO: ADD Reviews HERE  */}</View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              padding: 14,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: Colors.light.lightGray,
            }}
            onPress={showToast}
          >
            <StarIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => router.push('/charge')}
          >
            <Typography
              weight="semibold"
              color="white"
              style={{ fontSize: 14 }}
            >
              Directions
            </Typography>
            <ArrowRightIcon />
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
  badgesContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    marginRight: 6,
    marginTop: 8,
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: Colors.light.lightGray,
    borderRadius: 6,
    paddingVertical: 12,
  },
  doneButton: {
    flex: 1,
    backgroundColor: Colors.light.blue,
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  mapContainer: {
    height: 190,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default Charge;
