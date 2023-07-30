// React 컴포넌트에서 데이터를 요청하는 함수
const fetchDataFromDjangoAPI = async (keyword) => {
    try {
      const response = await fetch('/RESTFull_Practice_Project/keyword_data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword: keyword }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from Django API');
      }
  
      const data = await response.json();
      // 데이터 처리 및 화면에 표시 등 원하는 작업 수행
      console.log(data);
    } catch (error) {
      console.error('Django API을 fetching 하는데 에러가 발생했습니다.:', error);
    }
  };
  
  // 사용 예시
  const keyword = 'example keyword';
  fetchDataFromDjangoAPI(keyword);
  