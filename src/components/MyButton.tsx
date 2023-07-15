import { Group, MantineProvider, Button } from "@mantine/core";
import { FC, ReactElement } from "react";

type Props = {
  values: string;
  onSubmit: () => void;
  icon: ReactElement;
  disabled: boolean;
};
export const MyButton: FC<Props> = ({ values, onSubmit, icon, disabled }) => {
  return (
    <Group position="center" my={16}>
      <MantineProvider
        theme={{
          colors: {
            "my-maroon": [
              "#800000",
              "#800000",
              "#800000",
              "#800000",
              "#800000",
              "#800000",
              "#800000", // bg
              "#8F0000", // bg:hover
              "#800000",
              "#800000",
            ],
          },
        }}
      >
        <Button
          leftIcon={icon}
          disabled={disabled}
          color="my-maroon"
          size="xl"
          onClick={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {values}
        </Button>
      </MantineProvider>
    </Group>
  );
};
