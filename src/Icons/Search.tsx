/**
 * @file src\Icons\Search.tsx
 * @description Search icon  component.
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 28/12/2024
 * @license MIT
 * @version 0.0.1 (file version)
 * @app-version 2.0.0-prelaunch
 * @tag v2
 */

import React from "react";
import { ReactComponent as PeopleSolid } from "@/assets/icons/SVG/solidPeople.svg";

const VARIANT = ["solid"] as const;
type Variant = (typeof VARIANT)[number];

type PeopleIconProps = {
  variant?: Variant;
};

const People: React.FC<PeopleIconProps> = (
  { variant } = { variant: VARIANT[0] }
) => {
  switch (variant) {
    default:
      return <PeopleSolid />;
  }
};

export default People;
