import React from 'react';
import { View, StyleSheet } from 'react-native';
import Typography from './Typography';
import { Colors } from '@/constants/Colors';

type BadgesProps = {
  children: React.ReactNode;
};

const Badges = (props: BadgesProps) => {
  return (
    <View style={styles.badge}>
      <Typography weight="medium" color="gray" style={{ fontSize: 12 }}>
        {props.children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.light.gray,
  },
});

export default Badges;
