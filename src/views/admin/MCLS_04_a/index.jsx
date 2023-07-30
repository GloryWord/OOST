import {
  Button,
  Avatar,
  Box,
  Grid,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Text,
  Center,
} from "@chakra-ui/react";
// Assets
import "assets/css/App.css";
import MCLS_04_a_graph1 from "assets/img/graph/PC부품,PC 검색량.png"
import MCLS_04_a_graph2 from "assets/img/graph/노트북,노트북악세사리.png"
import MCLS_04_a_spent from "assets/img/graph/MCLS_04_spent.png"
import MCLS_04_gen from "assets/img/graph/MCLS_04_gen.png"
import MCLS_04_a_api from "assets/img/graph/MCLS_04_a_api.png"

import Banner from "views/admin/MCLS_04_a/components/Banner";
import Card from "components/card/Card.js";


// Custom components
import React from 'react';
import TotalSpent from "views/admin/default/components/TotalSpent";
import TotalTraffic from "views/admin/default/components/TotalTraffic";
import LinkToTableauButton from "components/card/LinkToTableauButton";
// Custom part
import General from "views/admin/MCLS_04_a/components/General";
import Projects from "views/admin/MCLS_04_a/components/Projects";
import Graph from "components/card/Graph"
// Assets
import avatar from "assets/img/avatars/avatar4.png";
import banner from "assets/img/auth/banner.png";

export default function MCLS_04_a() {
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
              수요는 학생들의 새 학기 시기인 2,3월에 가장 높아요.
              </Text>
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 2, xl: 2 }} gap='20px' mb='20px'  spacing={100}> {/* 반응형 웹 설정 모바일, 태블릿, 데스크탑 순*/}
        {/* 배치 시작할 행 / 열, 배치 끝낼 행 / 열 */}
        <Graph image={MCLS_04_a_graph1} content = "PC트래픽과 PC부품 트래픽 증감 변화가 일치합니다."/>
        <Graph image={MCLS_04_a_graph2} content = "노트북 트래픽과 노트북 액세서리 트래픽 증감 변화가 일치합니다."/>
        <Graph image={MCLS_04_a_spent} content = "시장 내 웹/모바일 매출 점유율이 비슷합니다"/>
        <Graph image={MCLS_04_gen} content = "남성 트래픽은 꾸준한 반면 여성 트래픽은 특성시기에 집중됩니다."/>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1 }} gap='20px' row = {2}>
        <Graph image={MCLS_04_a_api} content= "주요 항목의 트래픽 변화량입니다."/>
      </SimpleGrid>
      <Flex>
        <Card>
        입점하시거나 새 상품을 내놓을 때 
        심한 경쟁을 감안하셔야 합니다.<br></br>
        추가로, 모바일 검색 사용자가 증가하고 있기 때문에, <br></br>
        모바일 사용자에게도 최적화된 페이지를 제공하시면 구매율에 도움 될 수 있습니다.<br></br>
        지금까지 말씀드린 내용을 바탕으로, 성별·연령별 현황을 대시보드로 제공하고 있습니다.
        </Card>

      </Flex>
      <Flex>
        <Card>
          <Center>
          <LinkToTableauButton
            buttonText="20대 현황 보기"
            backgroundColor="green.500"
            hoverColor="green.600"
            link="https://public.tableau.com/app/profile/.55283864/viz/2023-07-18API_20/1_1"
          />
          <LinkToTableauButton
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
          />
          <LinkToTableauButton
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
          />
          </Center>
        </Card>
      </Flex>   
    </Box>    
    
    
  );
}
