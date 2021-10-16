new Vue({
  el: '#app',
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "img/77.jpg",
          img2: "img/78.jpg",
          img3: "img/79.jpg",
          title: "NEKO",
          isOpen: false
        },
        {
          img1: "img/80.jpg",
          img2: "img/81.jpg",
          img3: "img/82.jpg",
          title: "NYAN",
          isOpen: false
        },
        {
          img1: "img/70.jpg",
          img2: "img/69.jpg",
          img3: "img/92.jpg",
          title: "NEKO",
          isOpen: false
        },
        {
          img1: "img/89.jpg",
          img2: "img/90.jpg",
          img3: "img/91.jpg",
          title: "NYANNYAN",
          isOpen: false
        },
        {
          img1: "img/65.jpg",
          img2: "img/66.jpg",
          img3: "img/67.jpg",
          title: "NEKONEKO",
          isOpen: false
        },
        {
          img1: "img/64.jpg",
          img2: "img/68.jpg",
          img3: "img/91.jpg",
          title: "NYANNYAN",
          isOpen: false
        }
      ]
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach(item => (item.isOpen = false));
      this.isOpenedTop = false;
    }
  }
})