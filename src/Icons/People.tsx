/**
 * @file src\Icons\PeopleIcon.tsx
 * @description People icon  component.
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 28/12/2024
 * @license MIT
 * @version 0.0.2 (file version)
 * @app_version 2.0.0
 * @tag v2
 */

import React from "react";
import { ReactComponent as PeopleSolid } from "@/assets/icons/SVG/solidPeople.svg";
import { IconVariantProp, INITIAL_VARIANT_PROP } from ".";

const People: React.FC<IconVariantProp> = ({
  variant,
} = INITIAL_VARIANT_PROP) => {
  switch (variant) {
    default:
      return <PeopleSolid />;
  }
};

export default People;
