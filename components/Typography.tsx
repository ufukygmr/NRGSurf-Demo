import { Colors } from '@/constants/Colors';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

type TypographyProps = TextProps & {
  weight?: 'regular' | 'medium' | 'bold' | 'semibold';
  color?: 'black' | 'gray' | 'green' | 'blue' | 'white';
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const getFontFamily = (weight: TypographyProps['weight']) => {
  switch (weight) {
    case 'medium':
      return 'Inter_500Medium';
    case 'bold':
      return 'Inter_700Bold';
    case 'semibold':
      return 'Inter_600SemiBold';
    case 'regular':
    default:
      return 'Inter_400Regular';
  }
};

const getColor = (color: TypographyProps['color']) => {
  switch (color) {
    case 'green':
      return Colors.light.green;
    case 'gray':
      return Colors.light.gray;
    case 'black':
      return Colors.light.black;
    case 'blue':
      return Colors.light.blue;
    case 'white':
      return Colors.light.white;
  }
};

const Typography = ({
  weight = 'regular',
  color = 'black',
  style,
  children,
  ...rest
}: TypographyProps) => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={[
        { fontFamily: getFontFamily(weight), color: getColor(color) },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
