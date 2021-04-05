import { mount } from "@vue/test-utils";
import FilmCardGallery from "../../src/components/FilmCardGallery.vue";

describe("FilmCardGallery.vue", () => {
  const NO_FILM_FOUND = "No films found";
  const cards = [
    {
      id: 1,
      poster_path: "https://via.placeholder.com/300x500.png",
      title: "cardTitle1",
      release_date: "2000-08-07",
      genres: ["Action", "Drama"]
    },
    {
      id: 2,
      poster_path: "https://via.placeholder.com/300x500.png",
      title: "cardTitle2",
      release_date: "2007-06-01",
      genres: ["Drama", "Action"]
    },
    {
      id: 3,
      poster_path: "https://via.placeholder.com/300x500.png",
      title: "cardTitle4",
      release_date: "2007-05-03",
      genres: ["Comedy", "Drama"]
    }
  ];

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
    expect(rowWrapper.text()).toBe(NO_FILM_FOUND);
  });

  it("displays a passed properties", () => {
    const wrapper = mount(FilmCardGallery, {
      propsData: {
        cards: cards
      }
    });

    const cardsWrapper = wrapper.findAll(".gallery .card");
    expect(cardsWrapper.length).toBe(3);
  });

  it("emit film-gallery-card-clicked event when card clicked", async () => {
    const wrapper = mount(FilmCardGallery, {
      propsData: {
        cards: cards
      }
    });

    const cardsWrapper = wrapper.findAll(".gallery .card");
    const firstCard = cardsWrapper.at(0);

    await firstCard.trigger("click");

    expect(wrapper.emitted("film-gallery-card-clicked")).toBeTruthy();
    expect(wrapper.emitted("film-gallery-card-clicked").length).toBe(1);
    expect(wrapper.emitted("film-gallery-card-clicked")[0]).toEqual([1]);
  });
});
