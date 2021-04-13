<template>
  <section class="container">
    <h1 class="mb-3 mt-3 badge rounded-pill bg-info text-dark">
      코로나 현황
    </h1>

    <div class="columns">
      <!--      <div class="column">-->
      <!--        <h3>라인 차트</h3>-->
      <!--        <line-chart></line-chart>-->
      <!--      </div>-->
      <!--      <div class="column">-->
      <!--        <h3>바 차트</h3>-->

      <!--        <bar-chart></bar-chart>-->
      <!--        &lt;!&ndash;Bar Chart example&ndash;&gt;-->
      <!--      </div>-->
      <!--    </div>-->
      <!--    <div class="columns">-->
      <!--      <div class="column">-->
      <!--        <h3>버블 차트</h3>-->
      <!--        <bubble-chart></bubble-chart>-->
      <!--        &lt;!&ndash;Bubble Chart example&ndash;&gt;-->
      <!--      </div>-->
      <div class="column">
        <!--        <h3>반응형 차트</h3>-->
        <h1>기준일 : {{ this.$moment(yesterday).format("YYYY-MM-DD") }}</h1>
        <h2>확진자 합계 : 최소 {{ coronaJSON[18].localOccCnt }} 명</h2>

        <div class="align-items-center justify-content-start mb-3">
          <span class="d-inline-flex badge bg-danger alert-dismissible">
            알림 - 당일 아침은 서버에서 집계가 느립니다
          </span>
          <span></span>
        </div>
        <!--        버튼 시작-->
        <div class="btn-group">
          <button
            type="button"
            class="btn border-secondary  dropdown-toggle me-3 rounded-pill"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            유형&nbsp;<span style="color: #a52834">{{ contaminateType }}</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="changeContaminateType('확진자')"
                >확진자</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeContaminateType('사망자')"
                >사망자</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeContaminateType('검사자')"
                >검사자</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeContaminateType('확진율')"
                >확진율</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeContaminateType('완치자')"
                >완치자</a
              >
            </li>
          </ul>

          <button
            type="button"
            class="btn border-secondary  dropdown-toggle me-3 rounded-pill"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            종류&nbsp;<span style="color: #a52834">{{ timeType }}</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="changeTimeType('실시간')"
                >실시간</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeTimeType('일별')">일별</a>
            </li>
            <!--            <li><a class="dropdown-item" href="#">주별</a></li>-->
            <!--            <li><a class="dropdown-item" href="#">월별</a></li>-->
            <!--            <li><a class="dropdown-item" href="#">누적</a></li>-->
          </ul>
          <button
            type="button"
            class="btn border-secondary dropdown-toggle me-3 rounded-pill"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            기간&nbsp;<span style="color: #a52834">{{ durationType }}</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="changeDurationType('오늘')"
                >오늘</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeDurationType('어제')"
                >어제</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeDurationType('1주')"
                >1주</a
              >
            </li>
          </ul>
          <button
            type="button"
            class=" list-inline-item btn border-secondary dropdown-toggle me-3 rounded-pill"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            지역&nbsp;<span style="color: #a52834">{{ locationType }}</span>
          </button>
          <ul class="dropdown-menu scrollable-menu">
            <li>
              <a class="dropdown-item" @click="changeLocationType('전체')"
                >전체</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('서울')"
                >서울</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('부산')"
                >부산</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('인천')"
                >인천</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('대구')"
                >대구</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('광주')"
                >광주</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('대전')"
                >대전</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('울산')"
                >울산</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('세종')"
                >세종</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('경기')"
                >경기</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('강원')"
                >강원</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('충북')"
                >충북</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('충남')"
                >충남</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('경북')"
                >경북</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('경남')"
                >경남</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('전북')"
                >전북</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('전남')"
                >전남</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('제주')"
                >제주</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="changeLocationType('검역')"
                >검역</a
              >
            </li>
          </ul>
        </div>

        <Reactive
          v-if="loaded"
          :chartdata="chartdata"
          :options="options"
        ></Reactive>

        코로나 감염현황
      </div>
    </div>
  </section>
</template>
<style>
.scrollable-menu {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
}
.scrollable-menu::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 4px;
}
.scrollable-menu::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: lightgray;
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.75);
}
</style>
<script>
// import LineChart from "@/components/LineChart";
// import BarChart from "@/components/BarChart";
// import BubbleChart from "@/components/BubbleChart";
import Reactive from "@/components/Reactive";
import axios from "axios";
// 여기서 import 하고 나서는 this.$axios 쓰나 axios 쓰나 똑같이 작동
import moment from "moment";

// const convert = require("xml-js");
// const fs = require("fs");
import xml2js from "xml2js";

// const parseString = xml2js;
// const pointer = this;
export default {
  name: "Corona",
  components: {
    // LineChart,
    // BarChart,
    // BubbleChart,
    Reactive
  },

  data: () => ({
    // instantiating chartdata with null
    loaded: false,
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "확진자 현황",
          backgroundColor: "rgba(39,239,121,0.84)",
          data: []
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    },

    // 정렬타입 시작

    contaminateType: "확진자",
    timeType: "실시간",
    durationType: "오늘",
    locationType: "전체",

    // 정렬타입 끝
    test1: null,
    coronaJSON: null,
    today: "",
    todayNormalized: "",
    yesterday: "",
    beforeYesterday: "",
    minDate: "",
    maxDate: "",
    tempDateS: "",
    tempDateE: "",
    tempDateStart: "",
    tempDateEnd: "",
    cityName: null,
    cityData: null,
    cityArrayNum: null,
    cityTempNum: null,
    citiesName: [],
    test: null
  }),

  created() {
    //anytime the vue instance is created, call the fillData() function.
    // this.fillData();
    this.today = moment().format("YYYYMMDD");
    this.todayNormalized = moment().format("YYYY-MM-DD");
    this.yesterday = this.$moment()
      .subtract(1, "days")
      .format("YYYYMMDD");
    this.beforeYesterday = this.$moment()
      .subtract(2, "days")
      .format("YYYYMMDD");
    this.tempDateStart = this.yesterday;
    this.tempDateEnd = this.$moment().format("YYYYMMDD");
    // this.publicApi(this.yesterday);
  },

  // 아래 데이터 transform 하기 위해선 babel-polyfill 필요, then main.js import
  async mounted() {
    this.loaded = false;
    try {
      await axios
        .get("/api/openApi", {
          params: {
            start: this.today
          }
        })
        .then(res => {
          const xml = res.data;
          xml2js
            .parseStringPromise(xml, { explicitArray: false })
            .then(result => {
              const refined1 = result.response.body.items.item;

              this.coronaJSON = refined1;
              console.log(this.coronaJSON);
              //맨 마지막 값 = 합계 pop됨, 따라서 필요시 coronajson에서 꺼내쓸것

              for (let i = 0; i < refined1.length - 1; i++) {
                this.chartdata.labels[i] = refined1[i].gubun;
                this.chartdata.datasets[0].data[i] = refined1[i].localOccCnt;
                this.loaded = true;
              }

              // refined1.pop();
              // refined1.forEach((item, index, arr) => {
              //   // console.log(arr);
              //   // console.log(index);
              //   // console.log(item.gubun);
              //   // console.log(item.createDt);
              //   // 아래 코드는 item.createDt랑 같음
              //   // console.log(arr[index].localOccCnt);
              //   // console.log(this.chartdata.labels);
              //   // console.log(item.localOccCnt + "====>");
              //   // console.log(parseInt(item.localOccCnt));
              //   this.chartdata.labels[index] = item.gubun;
              //   //
              //   // // console.log(JSON.parse(JSON.stringify(item.gubun)));
              //   this.chartdata.datasets[0].data[index] = item.localOccCnt;
              //
              //   /*            this.chartdata = api;*/
              //   this.loaded = true;
              // });
            })
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e));
    } catch (e) {
      console.error(e);
    }
  },
  computed: {},
  watch: {
    tempDateS: function(e) {
      this.tempDateStart = moment(e).format("YYYYMMDD");
    },
    tempDateStart: function(e) {
      this.tempDateS = moment(e).format("YYYY-MM-DD");
    },

    tempDateE: function(e) {
      this.tempDateEnd = moment(e).format("YYYYMMDD");
    }
  },
  methods: {
    changeContaminateType: function(contaminateType) {},
    changeTimeType: function(timeType) {},
    changeDurationType: function(durationType) {
      switch (durationType) {
        case "오늘":
          this.tempDateStart = this.today;
          break;
        case "어제":
          this.tempDateStart = this.yesterday;
          break;
        case "1주":
          this.tempDateStart = this.beforeYesterday;
          break;
      }
    },
    changeLocationType: function(locationType) {},
    // mindate: function() {
    //   var a = moment([this.tempDateS]);
    //   var b = moment([this.tempDateE]);
    //   let diffDays = a.diff(b, "days"); // 1
    //   alert(diffDays);
    //
    //   var c = moment(moment(this.tempDateS).format("YYYY,MM,DD")).fromNow();
    //   alert(c);
    // },

    // findCityData(city) {
    //   this.coronaJSON.filter(function(e) {
    //     if (e._text == city) {
    //       alert(e._text.data());
    //       this.cityData = e;
    //     }
    //   });
    // },
    findCityData(cityTempNum) {
      this.coronaJSON.stringify(cityTempNum);
    },

    findCityArray(cityName) {
      JSON.stringify("부산");
      for (let i = 0; i < this.coronaJSON.length; i++) {
        if (this.coronaJSON.gubun._text === cityName) {
          console.log(
            "찾는 배열의 localOccCnt : " + this.coronaJSON.localOccCnt
          );
        }
      }
    },
    showCities() {
      let cnt = Object.keys(this.coronaJSON).length;
      // console.log("도시갯수" + cnt);
      for (let i = 0; i < cnt - 1; i++) {
        console.log(this.coronaJSON[i].gubun);
        this.citiesName[i] = this.coronaJSON[i].gubun;
        this.chartdata.labels[i] = this.coronaJSON[i].gubun;
        // console.log(
        //   "지역명:" +
        //     this.coronaJSON[i].gubun +
        //     "\n 총지역수:" +
        //     i +
        //     "\n 발생수:" +
        //     this.coronaJSON[i].localOccCnt
        // );
        // console.log("=================");
        console.log(this.chartdata.datasets[0].data);
        this.chartdata.datasets[0].data[i] = this.coronaJSON[i].localOccCnt;
      }
    },
    calcToday() {
      return moment().format("YYYYMMDD");
    },
    calcStartDate(inputDateStart) {
      return this.calcStartDate
        .$moment()
        .subtract(inputDateStart, "days")
        .format("YYYYMMDD");
    },
    calcEndDate(inputDateEnd) {
      return this.calcStartDate
        .$moment()
        .subtract(inputDateEnd, "days")
        .format("YYYYMMDD");
    },

    // **** in case of using Multi daisy chained syntax , must be aware of ARROW+func => not pointing windows.this
    // 즉 애로우+일반func 섞어서 쓰면 작동안함, 그러므로 this.coronaJSON을 가르키기 위해선 전부다 애로우로 관계가 엮여야한다.
    publicApi(tempDateStart) {
      axios
        .get("/api/openApi", {
          params: {
            start: tempDateStart
            // end: tempDateEnd
          }
        })
        .then(res => {
          const xml = res.data;

          xml2js
            .parseStringPromise(xml, { explicitArray: false })
            .then(result => {
              const refined1 = result.response.body.items.item;
              this.coronaJSON = refined1;
              console.log("refined1" + refined1);
              console.log(typeof refined1);

              refined1.forEach((item, index, arr) => {
                // console.log(arr);
                console.log(item.gubun);
                console.log(item.createDt);
                // 아래 코드는 item.createDt랑 같음
                // console.log(arr[index].localOccCnt);
                // console.log(this.chartdata.labels);
                console.log(item.localOccCnt + "====>");
                this.chartdata.datasets[0].data[index] = parseInt(
                  item.localOccCnt
                );
              });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    },

    // 여기코드는 내 서버로부터 받아온 xml 파일을 json으로 변환 후 json객체의 item까지 껍데기를 깐 후 저장
    // 이후 위에 있는 city() 메소드로 stringfy 적용하여 해당하는 값에 대한 객체값들만 뽑아옴
    //   function replacer(key, value) {
    //   return key == "_text" ? "" : value;
    // }
    //   위에 처럼 쓰니 키 값 _text에 해당하는 value값들이 전부다 ""으로 바꼇음
    // 즉 value값들만 바뀌지 key 바꾸는 방법은 모르겠음
    // this.coronaJSON = JSON.stringify(
    //   JSON.parse(json).response.body.items.item
    //   /*  function replacer(key, value) {
    //                     return key == "_text" ? "" : value;
    //                   }*/
    //
    //   //아래 옵션 적용시 콘솔에 프리티파이 적용
    //   // null,
    //   // "\t"
    // );
    // console.log(this.coronaJSON);
    // })

// 구조 해석용 샘플
    fillData() {
      this.chartdata = {
        // Data for the y-axis of the chart
        labels: [
          "검역",
          "제주",
          "경남",
          "경북",
          "전남",
          "전북",
          "충남",
          "충북",
          "강원",
          "경기",
          "세종",
          "울산",
          "대전",
          "광주",
          "인천",
          "대구",
          "부산",
          "서울",
          "검역"
        ],
        datasets: [
          {
            label: "확진자 수",
            backgroundColor: "#f87979",
            // Data for the x-axis of the chart
            data: [11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11]
          }
        ]
      };
    },
    getRandomInt() {
      // JS function to generate numbers to be used for the chart
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
