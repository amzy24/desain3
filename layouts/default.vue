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
                  placeholder="Pencarian..."
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
      <div class="container columns is-fullhd mx-6">
        <div class="F-FIRST column is-one-third pt-6">
          <div class="title is-3 has-text-weight-bold">Halo Properti</div>
          <div class="ICON-SOSMED container columns">
            <div class="column is-one-quarter">
              <figure class="image is-4by3">
                <a
                  ><img
                    src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                    width="1.5rem"
                    height="1.5rem"
                /></a>
              </figure>
            </div>
            <div class="column is-one-quarter">
              <figure class="image is-4by3">
                <a
                  ><img
                    src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                    width="1.5rem"
                    height="1.5rem"
                /></a>
              </figure>
            </div>
            <div class="column is-one-quarter">
              <figure class="image is-4by3">
                <a
                  ><img
                    src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                    width="1.5rem"
                    height="1.5rem"
                /></a>
              </figure>
            </div>
            <div class="column is-one-quarter">
              <figure class="image is-4by3">
                <a
                  ><img
                    src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                    width="1.5rem"
                    height="1.5rem"
                /></a>
              </figure>
            </div>
          </div>
        </div>
        <div class="SECOND column is-one-third pl-5 has-text-weight-bold">
          <div class="columns">
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
          <div class="button has-background-white px-6">No Button</div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {}
</script>

<style>
.ROOT {
  margin: 0rem 6rem;
}
.FOOTER {
  height: 17rem;
}
.has-background-halo {
  background-color: #f79351;
}
.FOOTER .F-FIRST {
  padding-left: 6rem;
  padding-right: 6rem;
}
.SECOND {
  margin-top: 5rem;
  line-height: 3rem;
}
.THIRD {
  margin-top: 5rem;
  line-height: 3rem;
}
.ICON-SOSMED .column {
  padding: 5px;
  margin: 0px 5px;
  border-style: ridge;
  border-width: thin;
  border-color: blanchedalmond;
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
</style>
