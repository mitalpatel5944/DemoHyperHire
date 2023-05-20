import React, { useEffect, useRef } from "react";
import {
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  Text,
  Pressable,
} from "react-native";
import { WebView } from "react-native-webview";

function HomeScreen() {
  const webViewRef = useRef(null);

  const handleWebViewMessage = (event) => {
    const message = event.nativeEvent.data;
    Alert.alert(message);
  };

  //   const handleNativeAlert = () => {
  //     webViewRef.current.postMessage("Native Alert clicked");
  //   };

  const NativeAlert = () => {
    webViewRef.current.postMessage("WV Alert");
  };


  const injectedJavaScript = `
    document.addEventListener('message', function(event) {
      if (event.data === 'WV Alert') {
        alert('Alert in WebView');
      }
    });
  `;

  const htmlContent = `
  <html>
    <head>
      <title>WebView Page</title>
      <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        background-color: #EDEEF3;
      }

      #customButton {
        background-color: #01B99F;
        color: white;
        border: none;
        border-radius: 25px;
        padding: 12px 24px;
        font-size: 25px;
        cursor: pointer;
        font-family : Noto Sans;        
      }
    </style>
    </head>
    <body>
      <button id="customButton">Native Alert</button>
      <script>
        const button = document.getElementById('customButton');
        button.addEventListener('click', () => {
          window.ReactNativeWebView.postMessage('Button clicked');
        });
        
      </script>
    </body>
  </html>
`;

  function ProfileHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/profile.png")} />
          <View
            style={{
              marginLeft: 10,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text>안녕 나 응애</Text>
            <Image
              source={require("../assets/checked.png")}
              style={{ alignSelf: "center", marginLeft: 10 }}
            />
            <Text style={{ color: "#919EB6", marginLeft: 5 }}>1일전 </Text>
          </View>
        </View>
        <Image
          source={require("../assets/bar.png")}
          style={{ alignSelf: "center" }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, marginTop: 40, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <Image source={require("../assets/back.png")} />

        <Text>자유톡</Text>
        <Image source={require("../assets/bell.png")} />
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/profile.png")} />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text>안녕 나 응애</Text>
              <Image
                source={require("../assets/checked.png")}
                style={{ alignSelf: "center", marginLeft: 10 }}
              />
              <Text style={{ color: "#919EB6", marginLeft: 5 }}>1일전 </Text>
            </View>
            <Text style={{ color: "#919EB6" }}>165cm - 53kg</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#01B99F",
            paddingHorizontal: 10,
            borderRadius: 15,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", marginLeft: 5, padding: 5 }}>
            1일전
          </Text>
        </View>
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <Text>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</Text>

        <Text style={{ color: "#313B49", fontSize: 12, marginTop: 10 }}>
          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
          어떤 상품이 제일 괜찮았어? {"\n\n"}
          후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일
          재밌었다던데 맞아???{"\n\n"}
          올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌
          사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
          팝들 있으면 어땠는지 후기 좀 공유해주라~~!
        </Text>

        <View style={{ flexWrap: "wrap", flexDirection: "row", marginTop: 20 }}>
          {["#2023", "#TODAYISMONDAY", "#TOP", "#POPS!", "#WOW", "#ROW"].map(
            (e) => {
              return (
                <View
                  style={{
                    backgroundColor: "#F7F8FA",
                    marginRight: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "#CED3DE",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#5A6B87",
                      alignSelf: "center",
                      paddingHorizontal: 10,
                      fontSize: 12,
                      paddingVertical: 5,
                    }}
                  >
                    {e}
                  </Text>
                </View>
              );
            }
          )}
        </View>
      </View>
      <WebView
        originWhitelist={["*"]}
        scrollEnabled={false}
        ref={webViewRef}
        source={{ html: htmlContent }}
        onMessage={handleWebViewMessage}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
        style={{
          marginTop: 20,
          height: 300,
        }}
      />

      <View
        style={{
          padding: 10,
          paddingRight: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/like.png")}
            style={{ alignSelf: "center", marginLeft: 10 }}
          />
          <Text style={{ color: "#919EB6", alignSelf: "center", padding: 10 }}>
            5
          </Text>

          <Image
            source={require("../assets/comment.png")}
            style={{ alignSelf: "center", marginLeft: 10 }}
          />
          <Text style={{ color: "#919EB6", alignSelf: "center", padding: 10 }}>
            5
          </Text>
          <Image
            source={require("../assets/save.png")}
            style={{ alignSelf: "center", marginLeft: 10 }}
          />

          <Image
            source={require("../assets/bar.png")}
            style={{ alignSelf: "center", marginLeft: 30 }}
          />
        </View>
        <Pressable
          onPress={() => {
            NativeAlert();
          }}
          style={{
            backgroundColor: "#01B99F",
            paddingHorizontal: 10,
            borderRadius: 15,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", marginLeft: 5, padding: 5 }}>
            WV Alert
          </Text>
        </Pressable>
      </View>
      {ProfileHeader()}

      <View style={{ paddingLeft: 60, paddingRight: 20 }}>
        <Text>
          어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
          아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
          기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
          올라온다고 하니 꼭 봐주세용~!
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/like.png")}
            style={{ alignSelf: "center", marginLeft: 10 }}
          />
          <Text style={{ color: "#919EB6", alignSelf: "center", padding: 10 }}>
            5
          </Text>

          <Image
            source={require("../assets/comment.png")}
            style={{ alignSelf: "center", marginLeft: 10 }}
          />
          <Text style={{ color: "#919EB6", alignSelf: "center", padding: 10 }}>
            5
          </Text>
        </View>
        {ProfileHeader()}
        <View style={{ paddingLeft: 60 }}>
          <Text>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/like.png")}
              style={{ alignSelf: "center", marginLeft: 10 }}
            />
            <Text
              style={{ color: "#919EB6", alignSelf: "center", padding: 10 }}
            >
              5
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
