import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { CriticScore } from "./CriticScore";
import cropImgUrl from "../services/cropImgUrl";
import { PlatformIcon } from "./PlatformIcon";
import NoImage from "../assets/NoImage.png";
import { Rating } from "./Rating";
interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Card
      overflow="hidden"
      cursor="pointer"
      transition="all ease 0.3s"
      bgColor={colorMode === "light" ? "gray.200" : "gray.700"}
      _hover={{ shadow: "lg" }}
    >
      <AspectRatio ratio={3 / 2}>
        <Image
          src={
            game.background_image ? cropImgUrl(game.background_image) : NoImage
          }
          h={{ sm: "64", md: "52", lg: "48", xl: "40" }}
          objectFit="cover"
        />
      </AspectRatio>
      <CardBody pt={2} pb={1}>
        <HStack>
          <HStack>
            {game.parent_platforms.length > 0 &&
              game.parent_platforms.map(({ platform }) => (
                <PlatformIcon key={platform.id} platformSlug={platform.slug} />
              ))}
          </HStack>
          <Spacer />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
      <CardHeader
        py={1}
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        fontWeight="semibold"
        fontSize="lg"
      >
        {game.name}
      </CardHeader>

      <CardBody pt={0}>
        {!!game.rating_top && <Rating rating={game.rating_top} />}
      </CardBody>
    </Card>
  );
};
