import React from "react";
import { withKnobs, object, boolean } from "@storybook/addon-knobs";
import Table from "../components/Table";
import { withA11y } from "@storybook/addon-a11y";

import { StorybookThemeProvider } from "../lib/withTheme";

export default {
  title: "Components/Table",
  component: Table,
  decorators: [withKnobs, withA11y],
};

const tableKnobGroupID = "Table";

export const KitchenSink = () => {
  const tableConfig = {
    columns: {
      c1: {
        title: "Member name",
        sortable: true,
      },
      c2: {
        title: "Location",
        hideable: true,
        minWidth: 100,
      },
      c3: {
        title: "Role",
        hideable: true,
        hidePriority: 1,
      },
    },
    rows: {
      r4: {
        c1: "Babak Shammas (no delete)",
        c2: "Seattle, WA",
        c3: "Senior analyst",
        actions: {
          share: { title: "Share", icon: "ShareGeneric" },
          manage: { title: "Edit", icon: "Edit" },
        },
      },
      r1: {
        c1: "Aadi Kapoor",
        c2: "Seattle, WA",
        c3: "Security associate",
        actions: {
          share: { title: "Share", icon: "ShareGeneric" },
          manage: { title: "Edit", icon: "Edit" },
          delete: { title: "Delete", icon: "TrashCan", multi: true },
        },
      },
      r2: {
        c1: "Aaron Buxton",
        c2: "Seattle, WA",
        c3:
          "Security engineer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ultricies mi. Sed aliquet odio et magna maximus, et aliquam ipsum faucibus. Sed pulvinar vel nibh eget scelerisque. Vestibulum ornare id felis ut feugiat. Ut vulputate ante non odio condimentum, eget dignissim erat tincidunt. Etiam sodales lobortis viverra. Sed gravida nisi at nisi ornare, non maximus nisi elementum.",
        actions: {
          share: { title: "Share", icon: "ShareGeneric" },
          manage: { title: "Edit", icon: "Edit" },
          delete: { title: "Delete", icon: "TrashCan", multi: true },
        },
      },
      r3: {
        c1: "Alvin Tao (no actions)",
        c2: "Seattle, WA",
        c3: "Marketing analyst",
      },
      r5: {
        c1: "Beth Davies",
        c2: "Seattle, WA",
        c3: "Senior engineer",
        actions: {
          share: { title: "Share", icon: "ShareGeneric" },
          manage: { title: "Edit", icon: "Edit" },
          delete: { title: "Delete", icon: "TrashCan", multi: true },
        },
      },
    },
  };
  return (
    <StorybookThemeProvider>
      <Table
        truncate={boolean("Truncate", false, tableKnobGroupID)}
        selectable={boolean("Selectable", true, tableKnobGroupID)}
        {...object("Configuration", tableConfig, tableKnobGroupID)}
      />
    </StorybookThemeProvider>
  );
};
