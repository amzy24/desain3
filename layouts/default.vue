<template>
  <section>
    <section class="ROOT section px-0 py-0">
      <section class="HEADER section py-5 px-3 mx-6">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="~/assets/logo-halo.png" width="150" />
            </a>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <b-field class="py-2 pl-4">
                <b-input
                  placeholder="Pencarian . . . "
                  type="search"
                  icon-right="magnify"
                  icon-right-clickable="search"
                >
                </b-input>
              </b-field>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-light">
                    <strong>Gabung Mitra</strong>
                  </a>
                  <a class="button is-halo">
                    <strong>Masuk</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </section>
    <!-- ------------------------------------- -->
    <section class="MAIN">
      <nuxt />
    </section>
    <!-- ------------------------------------- -->
    <footer class="FOOTER has-background-halo">
      <div class="FOOTER-CONTENT container columns is-fullhd mx-6">
        <div class="F-FIRST column is-one-third pt-6 has-text-centered">
          <div class="title is-3- has-text-weight-bold">Halo Properti</div>
          <div class="ICON-SOSMED container">
            <div class="block">
              <a href="#">
                <span class="icon mx-3 my-3">
                  <b-icon icon="facebook" size="is-medium"> </b-icon
                ></span>
              </a>
              <a href="#">
                <span class="icon mx-3 my-3">
                  <b-icon icon="twitter" size="is-medium"> </b-icon
                ></span>
              </a>
              <a href="#">
                <span class="icon mx-3 my-3">
                  <b-icon icon="instagram" size="is-medium"> </b-icon
                ></span>
              </a>
              <a href="#">
                <span class="icon mx-3 my-3">
                  <b-icon icon="youtube" size="is-medium"> </b-icon
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div class="SECOND column is-one-third pl-5 mb-5 has-text-weight-bold">
          <div class="columns is-mobile">
            <div class="column is-half">
              <a href="" class="has-text-dark">Tentang Kami</a><br />
              <a href="" class="has-text-dark">Layanan Kami</a><br />
              <a href="" class="has-text-dark">Kebijakan Privasi</a>
            </div>
            <div class="column is-half">
              <a href="" class="has-text-dark">Partner Kami</a><br />
              <a href="" class="has-text-dark">Kontak Kami</a><br />
              <a href="" class="has-text-dark">Pusat Bantuan</a>
            </div>
          </div>
        </div>
        <div class="THIRD column is-one-third has-text-weight-bold">
          <div class="container has-text-dark">Unduh Aplikasi</div>
          <div class="LINK-APP container mx-2 my-2">
            <div class="APP columns is-mobile">
              <a href=""
                ><figure class="image mx-1 my-2">
                  <img
                    src="https://github.com/amzy24/Item/blob/master/appstore.png?raw=true"
                    src-fallback="https://github.com/amzy24/Item/blob/master/appstore.png?raw=true"
                  /></figure
              ></a>
              <a href=""
                ><figure class="image mx-1 my-2">
                  <img
                    src="https://github.com/amzy24/Item/blob/master/playstore.png?raw=true"
                    src-fallback="https://github.com/amzy24/Item/blob/master/playstore.png?raw=true"
                  /></figure
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {}
</script>

<style>
.FOOTER {
  height: fit-content;
}
.has-background-halo {
  background-color: #f79351;
}
.SECOND {
  margin-top: 5rem;
  line-height: 3rem;
}
.THIRD {
  margin-top: 5rem;
  line-height: 3rem;
}
.ICON-SOSMED a {
  color: unset;
}
.APP {
  margin-right: 8rem;
}
.APP figure img {
  border-radius: 2px;
}
.button.is-halo {
  background-color: #f79351;
  border-color: transparent;
  color: #fff;
  border-radius: 10px;
}
.navbar-start {
  width: 80%;
}
.field.py-2 {
  width: 80%;
}
.HEADER {
  border-bottom-style: ridge;
  border-color: hsl(0, 0%, 86%);
  border-width: thin;
}
.navbar-start input {
  border-radius: 8px;
  border-color: darkgray;
}
/* -------------RESPONSIVE--------------- */
@media screen and (max-width: 768px) {
  .FOOTER-CONTENT {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
    text-align: center;
  }
  .SECOND {
    margin-top: 1rem !important;
    padding-left: 0.75rem !important;
  }
  .ICON-SOSMED {
    justify-content: center;
  }
  .THIRD {
    margin-top: 0rem !important;
  }
  .APP {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .HEADER {
    margin: 0rem !important;
  }
  .ROOT {
    margin: 0.25rem 0.25rem !important;
  }
  .MAIN-TOP {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important;
  }
  .MAIN-BOTTOM {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important;
  }
}
</style>
