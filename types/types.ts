type ColorValueHex = `#${string}`;

export type ColorScheme = {
  background: ColorValueHex;
  foreground: ColorValueHex;
  primary: ColorValueHex;
  secondary: ColorValueHex;
  destructive: ColorValueHex;
  muted: ColorValueHex;
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

export type TreesOnRoute = {
  route_id: number;
  tree_id: number;
  created_at: string;
  updated_at: string;
};
