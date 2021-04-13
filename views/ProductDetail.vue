<template>
  <div id="product">
    <main class="mt-3">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div
              id="carouselExampleIndicators"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="http://img.danawa.com/prod_img/500000/390/517/img/6517390_4.jpg?shrink=500:500&_v=20200317143115"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="http://img.danawa.com/prod_img/500000/390/517/img/6517390_2.jpg?shrink=500:500&_v=20200317143115"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="http://img.danawa.com/prod_img/500000/390/517/img/6517390_3.jpg?shrink=500:500&_v=20200317143115"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
          </div>
          <div class="col-md-7 ">
            <div class="card shadow-sm">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">로지텍 MX VERTICAL (정품)</h5>
                <h5 class="card-title pt-3 pb-3 border-top">119000 원</h5>
                <p class="card-text pt-3 border-top">
                  <span class="badge bg-dark">전자제품</span>
                  <span class="badge bg-dark">컴퓨터</span>
                  <span class="badge bg-dark">악세사리</span>
                </p>
                <p class="card-text pb-3">
                  | 배송비 2,500원 | 도서산간(제주도) 배송비 추가 5,000원 |
                  택배배송 | 5일 이내 출고 (주말,공휴일 제외)
                </p>
                <div class="card-text pb-3 border-top">
                  <div class="row">
                    <div class="col-auto">
                      <label class="col-form-label">구매수량</label>
                    </div>
                    <div class="col-auto">
                      <div class="input-group mb-3">
                        <span class="input-group-text">-</span>
                        <input
                          type="text"
                          class="form-control"
                          style="width: 40px;"
                          value="1"
                        />
                        <span class="input-group-text">+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row pt-3 pb-3 border-top">
                  <div class="col-6">
                    <h3>총 상품금액</h3>
                  </div>
                  <div class="col-6" style="text-align: right">
                    <h3>119,000</h3>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-item-center mt-2 "
                >
                  <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-dark">
                      장바구니 담기
                    </button>
                  </div>
                  <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-danger">
                      주문하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <img
              class="img-fluid"
              src="http://iws.danawa.com/prod_img/500000/480/702/desc/prod_7702480/add_1/20190502135743494_YWMEKDSL.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "product-detail"
};
</script>

<style scoped></style>
