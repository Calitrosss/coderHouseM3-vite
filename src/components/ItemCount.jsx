/* eslint-disable react/prop-types */
import { Center, ButtonGroup, IconButton, Button, Box } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { useCount } from "../hooks/useCount";

const ItemCount = ({ initial, min, max }) => {
  const { count, increment, decrement } = useCount(initial, min, max);

  return (
    <Box w={140}>
      <ButtonGroup variant="outline" spacing="6" w="100%">
        <IconButton icon={<MinusIcon />} onClick={decrement} />
        <Center>{count}</Center>
        <IconButton icon={<AddIcon />} onClick={increment} />
      </ButtonGroup>
      <Button display={"block"} w="100%">
        Añadir
      </Button>
    </Box>
  );
};

export default ItemCount;