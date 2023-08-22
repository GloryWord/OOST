import {
  Button,
  Avatar,
  Box,
  Grid,
  Flex,
  FormLabel,
  Icon,
  Select,
  Text,
  SimpleGrid,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import "assets/css/App.css";
import Banner from "views/admin/MCLS_04_c/components/Banner";
import Card from "components/card/Card.js";


// Custom components
import React from 'react';
import LinkToTableauButton from "components/card/LinkToTableauButton";
// Custom part
import Graph from "components/card/Graph"
// Assets
import MCLS_04_c_spent from "assets/img/graph/MCLS_04_c_spent2.png";
import MCLS_04_c_kosis from "assets/img/graph/MCLS_04_c_spent.png";
import MCLS_04_c_list from "assets/img/graph/MCLS_04_c_list.png";
import MCLS_04_market_spent from "assets/img/graph/MCLS_04_market_spent.png";

export default function MCLS_04_c() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");


  //
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Banner />
      <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
              스마트폰 출시 시기에 영향을 많이 받습니다. 3대 제조사(갤럭시, 아이폰, LG등)의 동향이 중요합니다. 
              </Text>
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 2, xl: 2 }} gap='20px' mb='20px'  spacing={100}> {/* 반응형 웹 설정 모바일, 태블릿, 데스크탑 순*/}
        {/* 배치 시작할 행 / 열, 배치 끝낼 행 / 열 */}
        <Graph image={MCLS_04_c_spent} />
        <Graph image={MCLS_04_c_list} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1 }} gap='20px' row = {2}>
        <Graph image={MCLS_04_c_kosis} content= "정확한 통계청 매출 동향입니다."/>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1 }} gap='20px' row = {2}>
        {/* <Graph image={MCLS_04_a_api} content= "주요 항목의 트래픽 변화량입니다."/> */}
      </SimpleGrid>
      <Flex>
        <Card>
        휴대폰 메인 제조사라면 출시 시기를 조절하고, 관련 소상공인이라면 출시 시기에 맞게 케이스, 충전기, 액세서리를 준비하세요!
        </Card>
      </Flex>
      <Flex>
        <Card>
          지금까지 말씀드린 내용을 바탕으로, 성별·연령별 현황을 대시보드로 제공하고 있습니다.
        </Card>
      </Flex>
      <Flex>
        <Card>
          <Center>
          <LinkToTableauButton
            buttonText="연령/기기 트래픽"
            backgroundColor="green.500"
            hoverColor="green.600"
            link="https://public.tableau.com/app/profile/.55283864/viz/2023-07-25__16902604923400/1_1"
          />
          {/* <LinkToTableauButton
            buttonText="30대 현황 보기"
            backgroundColor="blue.500"
            hoverColor="blue.600"
            link = "https://public.tableau.com/app/profile/.55283864/viz/2023-07-18API_30/2_1"
          />
          <LinkToTableauButton
            buttonText="40대 현황 보기"
            backgroundColor="purple.500"
            hoverColor="purple.600"
            link = "https://public.tableau.com/app/profile/.55283864/viz/2023-07-18API_40/3_1"
          /> */}

          </Center>
        </Card>
      </Flex>   
    </Box>    
    
    
  );
}