<template>
  <section class="ROOT section px-0 py-0">
    <section class="MAIN-TOP section pt-5 pb-6 px-3 mx-6">
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
      <div class="columns is-vcentered">
        <div class="column is-half">
          <div class="container columns mb-0">
            <div class="column container pr-1">
              <div class="PHOTO-PROFILE container">
                <img
                  src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                  alt=""
                  width="100%"
                />
                <div class="DOT-STATUS container"></div>
              </div>
            </div>
            <div class="INFO column is-full pl-1">
              <div class="is-size-5 has-text-weight-semibold px-1">
                Jokowi
              </div>
              <div class="is-one-fifth is-size-7 has-text-weight-normal px-1">
                Mitra level <span>2</span>
              </div>
              <div class="RATING is-size-7 px-1 has-text-weight-bold">
                <b-rate
                  v-model="rate"
                  :icon-pack="packs"
                  :icon="icons"
                  :max="maxs"
                  :size="sizes"
                  :locale="locale"
                  :show-score="score"
                  :custom-text="custom"
                  :rtl="isRtl"
                  :spaced="isSpaced"
                  :disabled="isDisabled"
                  class="px-2"
                >
                </b-rate>
              </div>
              <div class="is-one-third is-size-7 px-1">
                <span>15</span> Orderan sedang dibuat
              </div>
            </div>
          </div>
          <div class="container">
            <div class="title is-4 mx-2">
              <strong>Saya akan membuatkan desain terbaik</strong>
            </div>
          </div>
        </div>
        <div class="column is-half mt-3">
          <button class="BUTTON-CHATMITRA button is-large has-text-centered">
            Chat Mitra
          </button>
        </div>
      </div>
      <div class="SLIDER">
        <b-carousel :indicator-inside="false">
          <b-carousel-item v-for="(item, i) in 3" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)" />
            </span>
          </b-carousel-item>
          <template slot="indicators" slot-scope="props">
            <span class="al image">
              <img :src="getImgUrl(props.i)" :title="props.i" />
            </span>
          </template>
        </b-carousel>
      </div>
    </section>
    <section class="MAIN-BOTTOM section pt-5 pb-6 px-3 mx-6">
      <div class="columns">
        <div class="column is-half pr-6">
          <div class="title is-5 has-text-weight-bold">
            Deskripsi mitra
          </div>
          <div class="DESKRIPSI container has-text-justified">
            akwodkaaowidosenofsjmdijrinaijenohdawi ijijn fqijnefi ijniwjbfijer i
            hboijdngoqbreirjnoi qijbb ijqnoijnegi qijwnsbaijnfijn
            qijnoauhbduofwr ijnuaabvijnq qihbauohdbfuhnqoi3 ijabduhbfoiq3jniljnq
            qbodfiojqn4ij owkdoaw
          </div>
        </div>
        <div class="PAKET column is-half pl-6">
          <div class="title is-5 has-text-weight-bold">
            Pilih harga paket
          </div>
          <div class="HARGA-PAKET container"></div>
          <div class="container">
            <button
              class="BUTTON-CHATMITRA button is-medium has-text-centered is-light"
            >
              <strong>Chat Mitra</strong>
            </button>
          </div>
        </div>
      </div>
      <!-- --------------------------------------- -->
      <div class="DETAIL-MITRA"></div>
      <!-- --------------------------------------- -->
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rate: 4.6,
      maxs: 5,
      sizes: 'is-small',
      packs: 'mdi',
      icons: 'star',
      score: true,
      custom: '',
      isRtl: false,
      isSpaced: false,
      isDisabled: true,
      locale: undefined, // Browser locale
    }
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    },
  },
}
</script>

<style>
.ROOT {
  margin: 0rem 6rem;
}
.MAIN-TOP {
  border-bottom-style: ridge;
  border-color: hsl(0, 0%, 86%);
  border-width: thin;
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
  width: 100%;
}
.PHOTO-PROFILE {
  width: 2.7rem;
  height: 2.7rem;
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
.INFO {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding-top: 2rem;
}
.RATING .rate {
  border-left-style: solid;
  border-right-style: solid;
  border-color: hsl(0, 0%, 86%);
  border-width: thin;
}
.is-active .al img {
  filter: opacity(100%);
}
.al img {
  filter: opacity(50%);
}
.carousel .carousel-indicator {
  justify-content: start;
}
.carousel-indicator a {
  width: 15%;
}
.HARGA-PAKET {
  border-style: solid;
  border-width: thin;
  border-color: #f79351;
}
/* ------------------------------------ */
</style>
