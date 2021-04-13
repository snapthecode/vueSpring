<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">As you wish</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse justify-content-between"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detail">테스트</router-link>
          </li>
          <!--          <li class="nav-item">-->
          <!--            <router-link class="nav-link" to="#">전자제품</router-link>-->
          <!--          </li>-->
          <li class="nav-item">
            <router-link class="nav-link" to="/create">제품등록</router-link>
          </li>
          <!--          <li class="nav-item">-->
          <!--            <router-link class="nav-link" to="#">의류</router-link>-->
          <!--          </li>-->
          <!--          <li class="nav-item">-->
          <!--            <router-link class="nav-link" to="#">식품</router-link>-->
          <!--          </li>-->
          <li class="nav-item">
            <router-link class="nav-link" to="/corona">코로나</router-link>
          </li>
          <!--          <li class="nav-item">-->
          <!--            <router-link class="nav-link" to="/blog">게시판</router-link>-->
          <!--          </li>-->
          <!--          <li class="nav-item">-->
          <!--            <router-link class="nav-link" to="/chat">채팅</router-link>-->
          <!--          </li>-->
          <!--          <li class="nav-item">-->
          <!--            <a class="nav-link" href="/api/all">testApi</a>-->
          <!--          </li>-->
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainHeader"
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
</style>
