export const TECHNICAL_MONOLITH_COLORS = {
  primary: '#FFFFFF',
  onPrimary: '#1A1C1C',
  secondary: '#C8C6C5',
  background: '#131313',
  surface: '#131313',
  surfaceContainerLowest: '#0E0E0E',
  surfaceContainerLow: '#1C1B1B',
  surfaceContainer: '#201F1F',
  surfaceContainerHigh: '#2A2A2A',
  surfaceContainerHighest: '#353534',
  onSurface: '#E5E2E1',
  onSurfaceVariant: '#C6C6C6',
  outline: '#919191',
  outlineVariant: '#474747',
  surfaceTint: '#C6C6C7',
  inverseSurface: '#E5E2E1',
  inversePrimary: '#5D5F5F',
} as const;

export type TechnicalMonolithColor = keyof typeof TECHNICAL_MONOLITH_COLORS;