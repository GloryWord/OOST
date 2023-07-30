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
import Banner from "views/admin/MCLS_04_b/components/Banner";
import Card from "components/card/Card.js";


// Custom components
import React from 'react';
import LinkToTableauButton from "components/card/LinkToTableauButton";
// Custom part
import Graph from "components/card/Graph"
// Assets
import MCLS_04_b_spent from "assets/img/graph/MCLS_04_b_spent.png";
import MCLS_04_b_api from "assets/img/graph/MCLS_04_b_api.png";
import MCLS_04_market_spent from "assets/img/graph/MCLS_04_market_spent.png";

export default function MCLS_04_b() {
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
              가전·전자 제품의 매출은 계절성이 돋보이고, 상품간의 트래픽의 연관성이 매우 높아요.
              </Text>
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 2, xl: 2 }} gap='20px' mb='20px'  spacing={100}> {/* 반응형 웹 설정 모바일, 태블릿, 데스크탑 순*/}
        {/* 배치 시작할 행 / 열, 배치 끝낼 행 / 열 */}
        <Graph image={MCLS_04_b_spent} content = "여름 시기 이전에 구매가 늘어나는 경향이 있습니다."/>
        <Graph image={MCLS_04_b_api} content = "기간 내 트래픽 변화를 정규화 했을 때 관련항목의 변화율이 유사합니다."/>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1 }} gap='20px' row = {2}>
        <Graph image={MCLS_04_market_spent} content= "쿠팡, G마켓, 11번가 같은 종합몰이 전문 공식몰보다 매출액이 매우 높습니다."/>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1 }} gap='20px' row = {2}>
        {/* <Graph image={MCLS_04_a_api} content= "주요 항목의 트래픽 변화량입니다."/> */}
      </SimpleGrid>
      <Flex>
        <Card>
        계절 가전의 경우 다음 계절을 준비하는 시기에 매출이 변동합니다. 환절기 마케팅에 힘쓰세요!
        자사 사이트를 통해 판매하기 보다 대형 종합몰 사이트를 이용하세요.
        </Card>
        <Card>
        가전 시장의 경우 선발 주자가 잡고있는 시장이기 때문에, 가성비 있는 제품으로 경쟁력을 갖춰보세요!
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
            buttonText="카테고리/성별"
            backgroundColor="green.500"
            hoverColor="green.600"
            link="https://public.tableau.com/app/profile/.55283864/viz/2023-07-28/10"
          />
          <LinkToTableauButton
            buttonText="카테고리/기기"
            backgroundColor="blue.500"
            hoverColor="blue.600"
            link = "https://public.tableau.com/app/profile/.55283864/viz/2023-7-28/7"
          />
          <LinkToTableauButton
            buttonText="연령별 클릭량"
            backgroundColor="purple.500"
            hoverColor="purple.600"
            link = "https://public.tableau.com/app/profile/.55283864/viz/2023-07-25__16902602199250/1_1"
          />
          {/* <LinkToTableauButton
            buttonText="50대 현황 보기"
            backgroundColor="blue.500"
            hoverColor="blue.600"
            link = "https://public.tableau.com/app/profile/.55283864/viz/2023-07-18API_40/4_1"
          />
          <LinkToTableauButton
            buttonText="60대 현황 보기"
            backgroundColor="blue.500"
            hoverColor="blue.600"
            link = "https://public.tableau.com/app/profile/.55283864/viz/2023-07-18API_40/5_1"
          /> */}
          </Center>
        </Card>
      </Flex>   
    </Box>    
    
    
  );
}