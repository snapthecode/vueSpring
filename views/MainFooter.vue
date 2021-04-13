<template>
  <footer class="mt-5 py-5 bg-dark text-white-50">
    <div class="row">
      <div class="col-12 col-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="d-block mb-2"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>Product</title>
          <circle cx="12" cy="12" r="10" />
          <path
            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
          />
        </svg>
        <small class="d-block mb-3 text-muted">&copy; 2017-2020</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li>
            <router-link class="link-secondary" to="#">Cool stuff</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#"
              >Random feature</router-link
            >
          </li>
          <li>
            <router-link class="link-secondary" to="#"
              >Team feature</router-link
            >
          </li>
          <li>
            <router-link class="link-secondary" to="#"
              >Stuff for developers</router-link
            >
          </li>
          <li>
            <router-link class="link-secondary" to="#">Another one</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#">Last time</router-link>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li>
            <router-link class="link-secondary" to="#"
              >Resource name</router-link
            >
          </li>
          <li>
            <router-link class="link-secondary" to="#">Resource</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#"
              >Another resource</router-link
            >
          </li>
          <li>
            <router-link class="link-secondary" to="#"
              >Final resource</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li>
            <router-link class="link-secondary" to="#">Business</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#">Education</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#">Government</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#">Gaming</router-link>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><router-link class="link-secondary" to="#">Team</router-link></li>
          <li>
            <router-link class="link-secondary" to="#">Locations</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#">Privacy</router-link>
          </li>
          <li>
            <router-link class="link-secondary" to="#">Terms</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
a:link {
  color: gray;
}
a:hover {
  color: azure;
}
</style>
