import { mount } from "@vue/test-utils";
import FilmCardGallery from "../../src/components/FilmCardGallery.vue";

describe("FilmCardGallery.vue", () => {
  const NO_FILM_AVAILIABLE = "No films availiable";

  it("renders correctly", () => {
    const wrapper = mount(FilmCardGallery);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("display message when empty array passed to cards", () => {
    const wrapper = mount(FilmCardGallery, {
      propsData: {
        cards: []
      }
    });

    const rowWrapper = wrapper.find(".gallery .row");
    expect(rowWrapper.text()).toBe(NO_FILM_AVAILIABLE);
  });

  it("display message when no array passed to cards", () => {
    const wrapper = mount(FilmCardGallery);

    const rowWrapper = wrapper.find(".gallery .row");
    expect(rowWrapper.text()).toBe(NO_FILM_AVAILIABLE);
  });

  it("displays a passed properties", () => {
    const cards = [
      {
        imageUrl: "https://via.placeholder.com/300x500.png",
        title: "cardTitle1",
        releaseDate: "2000",
        genre: "Action"
      },
      {
        imageUrl: "https://via.placeholder.com/300x500.png",
        title: "cardTitle2",
        releaseDate: "2007",
        genre: "Drama"
      },
      {
        imageUrl: "https://via.placeholder.com/300x500.png",
        title: "cardTitle4",
        releaseDate: "2007",
        genre: "Comedy"
      }
    ];
    const wrapper = mount(FilmCardGallery, {
      propsData: {
        cards: cards
      }
    });

    const cardsWrapper = wrapper.findAll(".gallery .card");
    expect(cardsWrapper.length).toBe(3);
  });
});
