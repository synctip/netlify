/**
 * @file src\Icons\index.ts
 * @description Main index for the icons operations.
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 28/12/2024
 * @license MIT
 * @version 0.0.1
 * @app-version 2.0.0-prelaunch
 * @tag v2
 */

export const ICON_VARIANTS = ["solid"] as const;
export type IconVariant = (typeof ICON_VARIANTS)[number];
export type IconVariantProp = { variant?: IconVariant };
export const DEFAULT_ICON_VARIANT = ICON_VARIANTS[0];
export const INITIAL_VARIANT_PROP = { variant: DEFAULT_ICON_VARIANT };
