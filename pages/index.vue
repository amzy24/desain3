<template>
  <section class="ROOT section px-0 py-0">
    <section class="MAIN-TOP section py-5 px-3 mx-6">
      <div class="container">
        <nav
          class="breadcrumb has-arrow-separator mb-3"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <a class="has-text-dark has-text-weight-medium" href="#"
                >Gabung</a
              >
            </li>
            <li>
              <a class="has-text-dark has-text-weight-medium" href="#"
                >Konsultan</a
              >
            </li>
            <li class="is-active has-text-weight-medium">
              <a href="#" aria-current="page">Halaman Mitra</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="container">
              <div class="PHOTO-PROFILE container is-one-quarter">
                <img
                  src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                  alt=""
                  width="100%"
                />
                <div class="DOT-STATUS container"></div>
              </div>
            </div>
          </div>
          <div class="level-item"></div>
        </div>
        <div class="mt-3 level-right">
          <button class="BUTTON-CHATMITRA button has-text-centered box-radius">
            Chat Mitra
          </button>
        </div>
      </div>
    </section>
    <!-- -------BATAS TOP DENGAN BOTTOM------ -->
    <section class="MAIN-BOTTOM"></section>
  </section>
</template>

<script>
export default {}
</script>

<style>
.ROOT {
  margin: 0rem 6rem;
}
li {
  border-bottom-style: ridge;
  border-color: hsl(0, 0%, 86%);
  border-width: thin;
  padding-bottom: 0.5rem;
}
.BUTTON-CHATMITRA {
  border-radius: 0.4rem;
  border-color: #f79351;
  padding: 0rem 13rem;
}
.PHOTO-PROFILE {
  width: 2.5rem;
  height: 2.5rem;
  border-color: #f79351;
  border-width: thin;
  border-style: solid;
  border-radius: 290486px;
}
.DOT-STATUS {
  width: 8px;
  height: 8px;
  background-color: lime;
  border-radius: 290486px;
  position: absolute;
  bottom: 1px;
  right: 1px;
}
</style>
