import { transparentize } from "polished";
const PrimaryColors = {
  biru: "#3498DB",
  hitam: "#1B1B1B",
  putih: "#FFFFFF",
};
const SecondaryColors = {
  orange: "#FC642D",
  merah: "#E74C3C",
  hijau: "#2ECC71",
};
const SaturationShadeColors = {
  // Biru
  biru01: "#2874A6",
  biru02: "#2E86C1",
  biru03: "#3498DB",
  biru04: "#5DADE2",
  biru05: "#85C1E9",

  // Hitam
  hitam01: "#0D0D0D",
  hitam02: "#151515",
  hitam03: "#1B1B1B",
  hitam04: "#3E3E3E",
  hitam05: "#E1E1E1",

  // Putih
  putih01: "#FFFFFF",
  putih02: "#FFFFFF",
  putih03: "#FFFFFF",
  putih04: "#FFFFFF",
  putih05: "#FFFFFF",

  // Orange
  orange01: "#FF4400",
  orange02: "#FF591D",
  orange03: "#FC642D",
  orange04: "#FF895F",
  orange05: "#FFD2C1",

  // Merah
  merah01: "#943126",
  merah02: "#CB4335",
  merah03: "#E74C3C",
  merah04: "#EC7063",
  merah05: "#F5B7B1",

  // Hijau
  hijau01: "#196F3D",
  hijau02: "#28B463",
  hijau03: "#2ECC71",
  hijau04: "#82E0AA",
  hijau05: "#ABEBC6",
};
export const fonts = "'open sans', sans-serif";
export const colors = {
  white: "#fff",
  black: "#000",

  ...PrimaryColors,
  ...SecondaryColors,
  ...SaturationShadeColors,
};

/**
 * Legacy spacer units (in px units).
 */
export const spaceLegacy = {
  /** Equivalent to 8px */
  space1: 8,
  /** Equivalent to 16px */
  space2: 16,
  /** Equivalent to 24px */
  space3: 24,
  /** Equivalent to 32px */
  space4: 32,
  /** Equivalent to 40px */
  space5: 40,
  /** Equivalent to 48px */
  space6: 48,
  /** Equivalent to 56px */
  space7: 56,
  /** Equivalent to 64px */
  space8: 64,
  /** Equivalent to 72px */
  space9: 72,
  /** Equivalent to 80px */
  space10: 80,
};

/** Space values (in px) mapped by size designators */

export const space = {
  ...spaceLegacy,
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 48px */
  xxl: 48,
};

export const breakpoints = ["1024px", "1280px", "1440px", "1600px"];

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};

/** Border radiuses */
export const radiuss = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
};

/** Legacy box-shadow values. */
export const shadowsLegacy = {
  layer100: "0 1px 1px 0 rgba(0, 0, 0, 0.25)",
  layer200: "0 2px 4px 1px rgba(0, 0, 0, 0.15)",
  layer300: "0 4px 6px 2px rgba(0, 0, 0, 0.15)",
  layer400: "0 6px 10px 2px rgba(0, 0, 0, 0.15)",
};

/** Default box/text shadow separated by layers */
export const shadows = {
  ...shadowsLegacy,
};

/** Legacy elevation values. */
export const elevationLegacy = {
  layer100: {
    boxShadow: "layer100",
  },
  layer200: {
    boxShadow: "layer200",
  },
  layer300: {
    boxShadow: "layer300",
  },
  layer400: {
    boxShadow: "layer400",
  },
};

const shadowColor = transparentize(0.85, colors.hitam04);

/** Custom elevation variant for the Card component. */
export const elevation = {
  ...elevationLegacy,
  level1: {
    boxShadow: "none",
  },
  level2: {
    boxShadow: `0px 2px 6px ${shadowColor};`,
  },
  level3: {
    boxShadow: `0px 6px 12px ${shadowColor};`,
  },
  level4: {
    boxShadow: `0px 12px 24px ${shadowColor};`,
  },
  level5: {
    boxShadow: `0px 24px 48px ${shadowColor};`,
  },
};

/** Typography scale values (in pixels) mapped by style tokens. */
export const typeScale = {
  heading1: {
    fontSize: 28,
    lineHeight: 32,
  },
  heading2: {
    fontSize: 24,
    lineHeight: 30,
  },
  heading3: {
    fontSize: 20,
    lineHeight: 24,
  },
  heading4: {
    fontSize: 18,
    lineHeight: 22,
  },
  heading5: {
    fontSize: 16,
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
  },
  large: {
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 13,
    lineHeight: 20,
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
  },
  small: {
    fontSize: 11,
    lineHeight: 16,
  },
};
