import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

type ColorValueHex = `#${string}`;

export type ColorScheme = {
  background: ColorValueHex;
  foreground: ColorValueHex;
  primary: ColorValueHex;
  secondary: ColorValueHex;
  destructive: ColorValueHex;
  muted: ColorValueHex;
  default: ColorValueHex;
};

export type CustomPressableProps = {
  onPress: () => void;
  children?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export type SelectRouteProps = {
  modalVisible: boolean;
  setModalVisible: (value: React.SetStateAction<boolean>) => void;
  toggleModal: () => void;
  routes: MapRoute[];
  handleRouteSelect: (routeId: number) => Promise<void>;
};

export type PreviewRouteProps = {
  onConfirmRoute: () => void;
  onCancel: () => void;
};

export type animateLocationProps = {
  latitude?: number;
  longitude?: number;
};

export type TreeImagesType = {
  [key: string]: ImageSourcePropType;
};

export type Tree = {
  id: number;
  latitude: number;
  longitude: number;
  address: string;
  dbh: number;
  species: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type MapRoute = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type RouteCoordinates = {
  id: number;
  route_id: number;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
};
