import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import MCLS_11 from "assets/img/nfts/MCLS_11_thumb.png"
import MCLS_08 from "assets/img/nfts/MCLS_08_thumb.png"
import MCLS_06 from "assets/img/nfts/MCLS_06_thumb.png"
import MCLS_05 from "assets/img/nfts/MCLS_05_thumb.png"
import tableDataTop from "views/admin/marketplace/variables/tableDataTop_sample.json";
import { tableColumnsTop } from "views/admin/marketplace/variables/tableColumnsTopCreators";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Trending Categories
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  분석파트1
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                  분석파트2
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='사무·문구'
                author='사무·문구 용품 관련 세부 정보를 탐색하세요!'
                image={MCLS_05}
                download='http://localhost:3000/horizon-ui-chakra#/admin/MCLS_05'
              />
              <NFT
                name='반려동물'
                author='반려동물 용품 관련 세부 정보를 탐색하세요!'
                image={MCLS_06}
                download='http://localhost:3000/horizon-ui-chakra#/admin/MCLS_06'
              />
              <NFT
                name='아동·유아'
                author='아동·유아용품 관련 세부 정보를 탐색하세요!'
                image={MCLS_08}
                download='http://localhost:3000/horizon-ui-chakra#/admin/MCLS_08'
              />
              <NFT
                name='화장품'
                author='화장품 분야 관련 세부 정보를 탐색하세요!'
                image={MCLS_11}
                download='http://localhost:3000/horizon-ui-chakra#/admin/MCLS_11'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        {/* 나영님 + 종웅님 파트 */}
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={tableDataTop}
              // tableData={tableDataTopCreators}
              columnsData={tableColumnsTop}
            />
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
