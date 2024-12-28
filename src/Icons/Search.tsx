/**
 * @file src\Icons\Search.tsx
 * @description Search icon  component.
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 28/12/2024
 * @license MIT
 * @version 0.0.1 (file version)
 * @tag v2
 */

import React from "react";
import { ReactComponent as SearchSolid } from "@/assets/icons/SVG/solidSearch.svg";
import { IconVariantProp, INITIAL_VARIANT_PROP } from ".";

const Search: React.FC<IconVariantProp> = ({
  variant,
} = INITIAL_VARIANT_PROP) => {
  switch (variant) {
    default:
      return <SearchSolid width={24} height={24} />;
  }
};

export default Search;
