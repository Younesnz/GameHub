import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useQueryStore from "../hooks/stores/queryStore";

export const FiltersDrawer = () => {
  const { query, setGenre, setPlatform, setOrder } = useQueryStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: { results: Gdata } = {}, isLoading: GisLoading } = useGenres();

  const { data: { results: Pdata } = {}, isLoading: PisLoading } =
    usePlatform();
  const sortData = [
    { value: "", label: "Relevance" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "Rlease Date" },
    { value: "-rating", label: "Rating" },
    { value: "name", label: "Name" },
  ];
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(query.order || "");
  const btnRef = useRef(null);

  const handleSubmit = () => {
    setGenre(Gdata?.find((genre) => genre.id === +selectedGenre) || null);
    setPlatform(
      Pdata?.find((platform) => platform.id === +selectedPlatform) || null
    );
    setOrder(selectedOrder);
  };

  return (
    <>
      <Button
        ml={3}
        ref={btnRef}
        colorScheme="gray"
        onClick={() => {
          setSelectedGenre(query.genre?.id ? query.genre.id + "" : "");
          setSelectedPlatform(query.platform?.id ? query.platform.id + "" : "");
          setSelectedOrder(query.order || "");
          onOpen();
        }}
        leftIcon={<BiFilterAlt />}
      >
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Game Filters</DrawerHeader>

          <DrawerBody>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Genres
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {GisLoading && <Spinner />}
                  <RadioGroup
                    onChange={setSelectedGenre}
                    value={selectedGenre + ""}
                  >
                    <Stack direction="column">
                      <Radio key={-1} value={""}>
                        All
                      </Radio>
                      {Gdata?.map((g) => (
                        <Radio key={g.id} value={g.id + ""}>
                          {g.name}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Platforms
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {PisLoading && <Spinner />}

                  <RadioGroup
                    onChange={setSelectedPlatform}
                    value={selectedPlatform + ""}
                  >
                    <Stack direction="column">
                      <Radio key={-1} value={""}>
                        All
                      </Radio>
                      {Pdata?.map((p) => (
                        <Radio key={p.id} value={p.id + ""}>
                          {p.name}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {"Order by: " +
                        sortData.find((s) => s.value === query.order)?.label ||
                        ""}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup onChange={setSelectedOrder} value={selectedOrder}>
                    <Stack direction="column">
                      {sortData.map((s, i) => (
                        <Radio key={i} value={s.value}>
                          {s.label}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme="gray"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              colorScheme="gray"
              onClick={() => {
                handleSubmit(), onClose();
              }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
