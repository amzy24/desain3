<template>
  <section class="ROOT section px-0 py-0">
    <section class="MAIN-TOP section pt-5 pb-6 px-3 mx-6">
      <div class="container">
        <nav
          class="breadcrumb has-arrow-separator mb-3 is-hidden-mobile"
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
          <div class="container columns mb-0 is-mobile">
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
          <button class="BUTTON-CHATMITRA button is-medium has-text-centered">
            Chat Mitra
          </button>
        </div>
      </div>
      <div class="SLIDER">
        <b-carousel :indicator-inside="false" :autoplay="false">
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
      <div class="columns mb-5">
        <div class="column is-half pr-6">
          <div class="title is-5 has-text-weight-bold">
            Deskripsi mitra
          </div>
          <div class="DESKRIPSI container has-text-justified">
            akwodkaaowidosen ofsjmdijrinaijenohdawi ijijn fqijnefi ijniwjbfijer
            i hboijdngoqbreirjnoi doaibwfn pjepwfij qoiejofijqo iwehoiq joqijwof
            oiejfqoiejofj qoiejfoiqj oiejfoijoiqjeofbo qoiejfobroqfj
            oqoeijfoiqbokalidjbfle qefij lidjflqjenfl qijndljqn lfjnqjng
            qinjelfqjenlkfj qijbb ijqnoijnegi qijwnsbaijnfijn qijnoauhbduofwr
            ijnuaabvijnq qihbauohdbfuhnqoi3 ijabduhbfoiq3jniljnq qbodfiojqn4ij
            owkdoaw
          </div>
        </div>
        <div class="PAKET column is-half pl-6">
          <div class="title is-5 has-text-weight-bold">
            Pilih harga paket
          </div>
          <div class="HARGA-PAKET container">
            <b-tabs
              v-model="activeTab"
              type="is-toggle"
              expanded
              :multiline="multiline"
              class="CONTENT-PAKET has-text-justified"
            >
              <template v-for="tab in tabs">
                <b-tab-item
                  v-if="tab.displayed"
                  :key="tab.id"
                  :value="tab.id"
                  :label="tab.label"
                >
                  <p>
                    {{ tab.content }}
                  </p>
                  <button class="HARGA button is-small has-text-centered mt-5">
                    <strong>{{ tab.button }}</strong>
                  </button>
                </b-tab-item>
              </template>
            </b-tabs>
          </div>
          <div class="container">
            <button
              class="BUTTON-CHATMITRA button is-medium has-text-centered is-light mt-4"
            >
              <strong>Chat Mitra</strong>
            </button>
          </div>
        </div>
      </div>
      <!-- --------------------------------------- -->
      <div class="DETAIL-MITRA">
        <div class="container pt-5">
          <div class="ABOUT-MITRA">
            <div class="card">
              <div class="container columns">
                <div class="column is-2 pr-2">
                  <div class="PHOTO-PROFILE2 container">
                    <img
                      src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                      alt
                      width="100%"
                    />
                    <div class="DOT-STATUS-2 container"></div>
                  </div>
                </div>
                <div class="column is-one-quarter pr-2">
                  <p>
                    <strong>John Smith</strong> <span> | </span
                    ><small>@johnsmith</small>
                  </p>
                  <div class="RATE column is-full pl-1 py-0">
                    <div class="RATING-2 is-size-7 px-1 has-text-weight-bold">
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
                      ></b-rate>
                    </div>
                    <div class="column is-half is-size-7 px-1">
                      (1000) Komentar
                    </div>
                  </div>
                  <p>Mitra Level 2</p>
                </div>
                <div class="column pr-2">
                  <p><strong>Gabung</strong></p>
                  <p><small>2020</small></p>
                </div>
                <div class="column pr-2">
                  <p><strong>Balasan Chat</strong></p>
                  <p><small>1 Hari lalu</small></p>
                </div>
                <div class="column pr-2">
                  <p><strong>Pengiriman Terakhir</strong></p>
                  <p><small>4 Hari lalu</small></p>
                </div>
              </div>
              <div class="KOMENTAR column px-2 py-0">
                <div class="column">
                  <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- --------------------------------------- -->
      <div class="PENILAIAN container mt-6">
        <div class="container">
          <div
            class="TITLE-PENILAIAN container title is-5 has-text-weight-bold mb-4"
          >
            <p class="pr-4">550 Penilaian</p>
            <b-rate
              v-model="rate"
              :icon-pack="packs"
              :icon="icons"
              :max="maxs"
              :size="sizes"
              :locale="locale"
              :custom-text="custom"
              :rtl="isRtl"
              :spaced="isSpaced"
              :disabled="isDisabled"
              class="px-2 is-size-6"
            >
            </b-rate>
          </div>
        </div>
        <div class="container mb-4">
          <div class="columns">
            <div class="column">
              <div class="columns">
                <div class="column is-half">
                  <div class="SET columns container is-vcentered">
                    <div class="container column pr-1 pb-0">
                      5 Ulasan
                    </div>
                    <div class="container column is-7 px-1 pb-0">
                      <b-progress
                        type="is-halo"
                        size="is-small"
                        :max="400"
                        :value="indeterminate ? undefined : 350"
                        :show-value="showValue"
                        :format="format"
                        :precision="precision"
                        :keep-trailing-zeroes="keepTrailingZeroes"
                        :locale="locale"
                        class="BAR"
                      ></b-progress>
                    </div>
                    <div class="container column px-1 pb-0">
                      (350)
                    </div>
                  </div>
                  <div class="SET columns container is-vcentered">
                    <div class="container column pr-1 pb-0">
                      4 Ulasan
                    </div>
                    <div class="container column is-7 px-1 pb-0">
                      <b-progress
                        type="is-halo"
                        size="is-small"
                        :max="400"
                        :value="indeterminate ? undefined : 150"
                        :show-value="showValue"
                        :format="format"
                        :precision="precision"
                        :keep-trailing-zeroes="keepTrailingZeroes"
                        :locale="locale"
                        class="BAR"
                      ></b-progress>
                    </div>
                    <div class="container column px-1 pb-0">
                      (150)
                    </div>
                  </div>
                  <div class="SET columns container is-vcentered">
                    <div class="container column pr-1 pb-0">
                      3 Ulasan
                    </div>
                    <div class="container column is-7 px-1 pb-0">
                      <b-progress
                        type="is-halo"
                        size="is-small"
                        :max="400"
                        :value="indeterminate ? undefined : 30"
                        :show-value="showValue"
                        :format="format"
                        :precision="precision"
                        :keep-trailing-zeroes="keepTrailingZeroes"
                        :locale="locale"
                        class="BAR"
                      ></b-progress>
                    </div>
                    <div class="container column px-1 pb-0">
                      (30)
                    </div>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="SET columns container is-vcentered">
                    <div class="container column pr-1 pb-0">
                      2 Ulasan
                    </div>
                    <div class="container column is-7 px-1 pb-0">
                      <b-progress
                        type="is-halo"
                        size="is-small"
                        :max="400"
                        :value="indeterminate ? undefined : 15"
                        :show-value="showValue"
                        :format="format"
                        :precision="precision"
                        :keep-trailing-zeroes="keepTrailingZeroes"
                        :locale="locale"
                        class="BAR"
                      ></b-progress>
                    </div>
                    <div class="container column px-1 pb-0">
                      (15)
                    </div>
                  </div>
                  <div class="SET columns container is-vcentered">
                    <div class="container column pr-1 pb-0">
                      1 Ulasan
                    </div>
                    <div class="container column is-7 px-1 pb-0">
                      <b-progress
                        type="is-halo"
                        size="is-small"
                        :max="400"
                        :value="indeterminate ? undefined : 5"
                        :show-value="showValue"
                        :format="format"
                        :precision="precision"
                        :keep-trailing-zeroes="keepTrailingZeroes"
                        :locale="locale"
                        class="BAR"
                      ></b-progress>
                    </div>
                    <div class="container column px-1 pb-0">
                      (5)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-2 mt-6">
              <div class="column">
                <div class="container">
                  <button
                    class="URUTKAN button is-small has-text-centered mt-4 is-size-7"
                  >
                    Urutkan V
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="CARD-MITRA container pt-4 pb-5">
          <div>
            <div class="container columns mb-0 is-vcentered is-mobile">
              <div class="column container pr-1">
                <div class="PHOTO-PROFILE container">
                  <img
                    src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div class="CARD-INFO column is-full pl-1">
                <div class="is-size-5 has-text-weight-semibold px-3">
                  Angga
                </div>
                <div
                  class="CARD-CITY is-one-fifth is-size-7 has-text-weight-normal px-3"
                >
                  Semarang
                </div>
                <div class="CARD-RATING is-size-7 px-3 has-text-weight-bold">
                  <b-rate
                    v-model="rate"
                    :icon-pack="packs"
                    :icon="icons"
                    max="1"
                    :size="sizes"
                    :locale="locale"
                    :show-score="score"
                    :custom-text="custom"
                    :rtl="isRtl"
                    :spaced="isSpaced"
                    :disabled="isDisabled"
                  >
                  </b-rate>
                </div>
              </div>
            </div>
          </div>
          <div>
            <article class="media">
              <figure class="media-left px-2">
                <p class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis awodkapwogpjow apwokd apownrpa siondpia wpomap
                    owndpawmpoandpam wpodm.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="CARD-MITRA container pt-4 pb-5">
          <div>
            <div class="container columns mb-0 is-vcentered is-mobile">
              <div class="column container pr-1">
                <div class="PHOTO-PROFILE container">
                  <img
                    src="https://raw.githubusercontent.com/AmzyZy24/Item/master/no-icon.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div class="CARD-INFO column is-full pl-1">
                <div class="is-size-5 has-text-weight-semibold px-3">
                  Ratna
                </div>
                <div
                  class="CARD-CITY is-one-fifth is-size-7 has-text-weight-normal px-3"
                >
                  Semarang
                </div>
                <div class="CARD-RATING is-size-7 px-3 has-text-weight-bold">
                  <b-rate
                    v-model="rate"
                    :icon-pack="packs"
                    :icon="icons"
                    max="1"
                    :size="sizes"
                    :locale="locale"
                    :show-score="score"
                    :custom-text="custom"
                    :rtl="isRtl"
                    :spaced="isSpaced"
                    :disabled="isDisabled"
                  >
                  </b-rate>
                </div>
              </div>
            </div>
          </div>
          <div>
            <article class="media">
              <figure class="media-left px-2">
                <p class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis awodkapwogpjow apwokd apownrpa siondpia wpomap
                    owndpawmpoandpam wpodm.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="button is-small is-fullwidth mx-2">
          <strong>Lihat lebih banyak V</strong>
        </div>
      </div>
      <div class="CAROUSEL-LIST container mt-4">
        <div class="title is-6 has-text-weight-bold mx-5">
          Rekomendasi lain
        </div>
        <div class="container mx-2">
          <b-carousel-list
            data="data3"
            :v-model="test"
            :dataA="items"
            :items-to-show="4"
          >
            <template slot="item" slot-scope="list">
              <figure class="RECOM-IMAGE image is-4by3 mx-2">
                <a><img :src="list.image" /></a>
              </figure>
            </template>
          </b-carousel-list>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rate: 4.9,
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
  data2() {
    return {
      indeterminate: false,
      type: null,
      showValue: true,
      format: 'raw',
      precision: 2,
      keepTrailingZeroes: false,
      locale: undefined, // Browser locale
    }
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    },
  },
  data3() {
    return {
      test: 0,
      items: [
        {
          title: 'Slide 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 2',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 3',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 4',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 5',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 6',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 7',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 8',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
      ],
    }
  },
  data4() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    baseTabs() {
      return [
        {
          id: 'standar',
          label: 'Standar',
          content: 'Ini adalah paket Standar',
          displayed: true,
          button: 'Rp. 750.000',
        },
        {
          id: 'medium',
          label: 'Medium',
          content: 'Ini adalah paket Medium',
          displayed: true,
          button: 'Rp. 1.000.000',
        },
        {
          id: 'premium',
          label: 'Premium',
          content: 'Ini adalah paket Premium',
          displayed: true,
          button: 'Rp. 1.500.000',
        },
      ]
    },
    tabs() {
      const tabs = [...this.baseTabs]
      if (this.showBooks) {
        tabs.splice(tabs.length - 2, 0, this.bookTab)
      }
      return tabs
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
  background-color: greenyellow;
  border-radius: 290486px;
  position: absolute;
  bottom: 1px;
  right: 1px;
}
.DOT-STATUS-2 {
  width: 20px;
  height: 20px;
  background-color: greenyellow;
  border-radius: 290486px;
  position: absolute;
  bottom: 4.5px;
  right: 4.5px;
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
.CONTENT-PAKET,
.CONTENT-PAKET li {
  padding-bottom: none;
  border: none;
  margin: none;
}
.tabs.is-toggle a {
  border-style: none;
  background-color: lightgrey;
}
.tabs.is-toggle li.is-active a {
  background-color: darkgrey;
  border-color: darkgrey;
  border-radius: 2px;
  color: black;
}
.HARGA.button {
  border-radius: 0.7rem;
  background-color: #f79351;
  width: 100%;
}
.TITLE-PENILAIAN {
  display: flex;
}
.BAR {
  width: 100%;
}
.URUTKAN.button {
  border-radius: 0.7rem;
  background-color: #f79351;
  width: 100%;
}
.CARD-MITRA {
  border-top-style: ridge;
  border-color: hsl(0, 0%, 86%);
  border-width: thin;
}
.CARD-INFO {
  display: flex;
  justify-content: start;
  align-items: baseline;
}
.CARD-CITY {
  border-left-style: solid;
  border-right-style: solid;
  border-color: hsl(0, 0%, 86%);
  border-width: thin;
}
.RECOM-IMAGE img {
  border-radius: 1rem;
  border-style: solid;
  border-width: thin;
}
.card-mitra {
  background-color: whitesmoke;
}
.RATE {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}
.PHOTO-PROFILE2 {
  width: 96px;
  height: 96px;
  border-color: #f79351;
  border-width: thin;
  border-style: solid;
  border-radius: 290486px;
}
.px-2 {
  padding-left: 0rem !important;
  padding-right: 0.5rem !important;
}
.pl-1 {
  padding-left: 0rem !important;
}
.KOMENTAR {
  border-style: solid;
  border-width: thin;
  border-color: #f79351;
}
/* -------------RESPONSIVE--------------- */
@media screen and (max-width: 1024px) {
  .INFO {
    display: block;
    padding-top: 0rem;
    padding-left: 1rem !important;
  }
  .button.is-medium {
    font-size: 0.75rem;
  }
  .PAKET {
    padding-left: 0.75rem !important;
  }
  .RECOM-IMAGE img {
    border-radius: 0.5rem;
  }
}
</style>
