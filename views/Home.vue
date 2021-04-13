<template>
  <div id="Home">
    <body>
      <main class="mt-3">
        <div class="container">
          <div class="row mb-3">
            <div class="col-12">
              <select class="form-select">
                <option selected></option>
                <option value="1">노트북</option>
                <option value="2">모니터</option>
                <option value="3">악세사리</option>
              </select>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div ref="card" class="card" style="width: 18rem;">
                <router-link to="/detail">
                  <img
                    src="http://img.danawa.com/prod_img/500000/936/647/img/12647936_1.jpg?shrink=500:500&_v=20201109163623"
                    class="card-img-top"
                    alt="..."
                  />
                </router-link>
                <div class="card-body">
                  <h5 ref="title" class="card-title">
                    TEX Shinobi (저소음 적축)
                  </h5>
                  <div v-bind:class="{ alert: true }"></div>

                  <p class="card-text">
                    <span class="badge bg-dark">전자제품</span>
                    <span class="badge bg-dark">컴퓨터</span>
                    <span class="badge bg-dark">악세사리</span>
                  </p>
                  <small class="text-dark">
                    219000 원
                  </small>
                  <div
                    class="d-flex justify-content-between align-item-center mt-2"
                  >
                    <div class="btn-group" role="group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        장바구니 담기
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        바로 주문
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem;">
                <router-link to="/detail">
                  <img
                    src="http://img.danawa.com/prod_img/500000/390/517/img/6517390_1.jpg?shrink=500:500&_v=20200317143115"
                    class="card-img-top"
                    alt="..."
                  />
                </router-link>
                <div class="card-body">
                  <h5 class="card-title">로지텍 MX VERTICAL (정품)</h5>
                  <p class="card-text">
                    <span class="badge bg-dark">전자제품</span>
                    <span class="badge bg-dark">컴퓨터</span>
                    <span class="badge bg-dark">악세사리</span>
                  </p>
                  <small class="text-dark">
                    119000 원
                  </small>
                  <div
                    class="d-flex justify-content-between align-item-center mt-2"
                  >
                    <div class="btn-group" role="group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        장바구니 담기
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        바로 주문
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem;">
                <router-link to="/detail">
                  <img
                    src="http://img.danawa.com/prod_img/500000/985/466/img/10466985_1.jpg?shrink=500:500&_v=20210108165527"
                    class="card-img-top"
                    alt="..."
                /></router-link>
                <div class="card-body">
                  <h5 class="card-title">
                    SuperFlower SF-1000F14MP LEADEX PLATINUM SE BLACK
                  </h5>
                  <p class="card-text">
                    <span class="badge bg-dark">전자제품</span>
                    <span class="badge bg-dark">컴퓨터</span>
                    <span class="badge bg-dark">부품</span>
                  </p>
                  <small class="text-dark">
                    211000 원
                  </small>
                  <div
                    class="d-flex justify-content-between align-item-center mt-2"
                  >
                    <div class="btn-group" role="group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        장바구니 담기
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        바로 주문
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card" style="width: 18rem;">
                <router-link to="/detail">
                  <img
                    src="http://img.danawa.com/prod_img/500000/418/108/img/11108418_1.jpg?shrink=500:500&_v=20200513145446"
                    class="card-img-top"
                    alt="..."
                /></router-link>
                <div class="card-body">
                  <h5 class="card-title">DELL UltraSharp U4320Q</h5>
                  <p class="card-text">
                    <span class="badge bg-dark">전자제품</span>
                    <span class="badge bg-dark">모니터</span>
                  </p>
                  <small class="text-dark">
                    1088000 원
                  </small>
                  <div
                    class="d-flex justify-content-between align-item-center mt-2"
                  >
                    <div class="btn-group" role="group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        장바구니 담기
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        바로 주문
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script>
// this.$refs.card.$on("", function() {
//   alert("this.$refs.title.attributes");
// });

export default {
  name: "Home"
};
</script>

<style scoped>
.card a:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 0%;
  height: 30px;
  box-sizeing: border-box;
  border-top: 1px solid dimgray;
  transition: width 0.5s, left 0.5s;
}
.card :hover:after {
  width: 100%;
  left: 0;
}
</style>
