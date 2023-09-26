import { Badge } from "@chakra-ui/react";

export const CriticScore = ({ score }: { score: number }) => {
  const color = score >= 80 ? "green" : score >= 50 ? "orange" : "red";
  return (
    <Badge borderRadius={4} px={2} colorScheme={color} fontSize="14px">
      {score}
    </Badge>
  );
};
