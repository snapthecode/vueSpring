module.exports = {
  lintOnSave: true,
  outputDir: "../src/main/resources/static",
  indexPath: "../static/index.html",
  devServer: {
    overlay: false,
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true
      },

      "/coronaApi": {
        target: "http://api.corona-19.kr/korea/country/new",
        changeOrigin: true,
        withCredentials: true
      },
      "/openapi": {
        // data: {
        //   mykey:
        //     "RmtSp%2B0e2VoVfZn2t%2BCbJTBUeoXWUbhlmnnuCw%2FOVmwgWFZkiXt87S7pRc7Q3qhrU68EXkdhc%2Fm11HNn6TlwWA%3D%3D",
        //   encoded: null,
        //   decoded: null
        // },
        // methods: {
        //   decodeURI: function(target) {
        //     this.decoded = decodeURI(target);
        //   }
        // },
        // mounted() {
        //   console.log("서버단 : " + this.decodeURI(this.mykey));
        //   console.log("hihiihihihihi");
        // },
        target:
          "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
        changeOrigin: true

        // RmtSp+0e2VoVfZn2t+CbJTBUeoXWUbhlmnnuCw/OVmwgWFZkiXt87S7pRc7Q3qhrU68EXkdhc/m11HNn6TlwWA==
      }
    }

    // proxy:
    //   "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=RmtSp%2B0e2VoVfZn2t%2BCbJTBUeoXWUbhlmnnuCw%2FOVmwgWFZkiXt87S7pRc7Q3qhrU68EXkdhc%2Fm11HNn6TlwWA%3D%3D"
  },
  // externalsType: 'script',
  // externals: {
  //   "googleCharts": 'https://www.gstatic.com/charts/loader.js'
  //
  //   // "$": "jQuery",
  //   // "jQuery": "jQuery",
  //   // "_": "lodash",
  //   // "react": "React",
  //   // "react-dom": "ReactDOM",
  //   // /***** 생략 *****/
  // },

  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
