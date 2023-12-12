import Banner from "./banner";
import Worry from "./worry";
import BlueSection from "./blueSection";
import { Box, VStack } from "@chakra-ui/react";
import NumberOne from "./numberOne";
import NumberTwo from "./numberTwo";
import NumberThree from "./numberThree";
import Pay from "./pay";
import Consulting from "./consulting";

export default function Home() {
    return (
        <div>
            <Box h={"100px"} />
            <Banner />
            <Worry />
            <BlueSection />
            <VStack spacing={0}>
                <NumberOne />
                <NumberTwo />
                <NumberThree />
            </VStack>
            <Pay />
            <Consulting />
        </div>
    );
}