import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GenresSkeleton = () => {
  return (
    <HStack>
      <Skeleton width="40px" aspectRatio={1} borderRadius={10} />
      <SkeletonText ml={2} noOfLines={2} w="70%" h="100%" />
    </HStack>
  );
};
