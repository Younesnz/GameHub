import {
  AspectRatio,
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card>
      <AspectRatio ratio={3 / 2}>
        <Skeleton h={{ sm: "64", md: "52", lg: "48", xl: "40" }} />
      </AspectRatio>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
