import { HStack } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface Props {
  rating: number;
}
export const Rating = ({ rating }: Props) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<AiFillStar />);
    else stars.push(<AiOutlineStar />);
  }
  return (
    <HStack spacing={0} color="yellow.500" fontSize="xs">
      {stars}
    </HStack>
  );
};
