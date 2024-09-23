import { Heading, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY="5px">
            <HStack key={genre.id}>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
