/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Grid,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
  Center
} from "@chakra-ui/react";
// Assets
// Custom components
import React from 'react';
// Custom part
import General from "views/admin/MCLS_08/components/General";
import Projects from "views/admin/MCLS_08/components/Projects";
import Banner from "views/admin/MCLS_08/components/Banner copy";
import Card from "components/card/Card.js";
import Graph from "components/card/Graph";
import LinkToTableauButton from "components/card/LinkToTableauButton";
// Assets
import avatar from "assets/img/avatars/avatar4.png";
import banner from "assets/img/auth/banner.png";
import MCLS_08_graph1 from "assets/img/graph/MCLS_08_graph1b.png";
import MCLS_08_graph2 from "assets/img/graph/MCLS_08_api.png";
import MCLS_08_pie from "assets/img/graph/MCLS_08_pie.png";
import MCLS_08_f from "assets/img/graph/MCLS_08_f.png";
import MCLS_08_m from "assets/img/graph/MCLS_08_m.png";
export default function MCLS_08() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  //
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "10px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          {/* 배너 */}
          <Banner />
          <Flex direction='column'>
            {/* 중간 컬럼 */}
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                매출, API 트렌드 동향
              </Text>
            </Flex>
            {/* 이미지 출력부분 */}
            <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' row = {2} col = {3}>
              <Graph

                image={MCLS_08_graph1}
                content= "인터넷 시장 매출은 제자리, 모바일 시장 매출은 성장세"
              />
              <Graph
                image={MCLS_08_graph2}
                content= "12월 완구/매트, 유아동 잡화, 최근 2~3월 신생아용품 변동"
              />
              {/* <Graph
                image={MCLS_08_pie}
                content= "최근 1년 모바일 점유율 우세"
              /> */}
              <Graph
              image={MCLS_08_f}
              content= "여성 클릭량 우세 키워드"
              />
              <Graph
                image={MCLS_08_m}
                content= "남성 클릭량 우세 키워드"
              />              
            </SimpleGrid>          
          </Flex>
        </Flex>
        
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <General gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
            minH='365px'
            pe='20px'
            />
          </Card>
          {/* 링크 관련 */}
          <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
          />
        </Flex>
      </Grid>
      <Flex>
        <Card>
          <Center>
          <LinkToTableauButton
            buttonText="성별 트래픽"
            backgroundColor="green.500"
            hoverColor="green.600"
            link="https://public.tableau.com/app/profile/.55283864/viz/2023-07-13_16892157156940/34"
          />
          <LinkToTableauButton
            buttonText="기기별 트래픽"
            backgroundColor="blue.500"
            hoverColor="blue.600"
            link = "https://public.tableau.com/app/profile/.55283864/viz/2023-07-13_16892156321980/31"
          />


          </Center>
        </Card>
      </Flex>     
    </Box>
  );
}
