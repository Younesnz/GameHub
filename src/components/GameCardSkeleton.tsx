import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton h={{ sm: "64", md: "52", lg: "48", xl: "40" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
