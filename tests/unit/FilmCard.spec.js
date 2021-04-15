import { mount } from "@vue/test-utils";
import FilmCard from "../../src/components/FilmCard.vue";

const movie = {
  title: "Test title",
  release_date: "2000-05-01",
  poster_path: "imageUrl",
  genres: ["Test genre", "Test genre2"]
};

const factory = propsData => {
  return mount(FilmCard, {
    propsData: {
      movie,
      ...propsData
    }
  });
};

describe("FilmCard.vue", () => {
  it("renders correctly", () => {
    const wrapper = factory();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const formmatedReleaseDate = "2000";
    const wrapper = factory();

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardWrapper.find(".card-img-top").attributes("src")).toBe(
      movie.poster_path
    );
    expect(cardBodyWrapper.find("h6").text()).toBe(movie.title);
    expect(cardBodyWrapper.find("span").text()).toBe(formmatedReleaseDate);
  });

  it("displays formatted genres prop", () => {
    const formattedGenres = "Test genre & Test genre2";

    const wrapper = factory();

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardBodyWrapper.find(".card-text").text()).toBe(formattedGenres);
  });

  it("emit film-card-clicked event when card clicked", async () => {
    const wrapper = factory();
    const cardWrapper = wrapper.find(".card");

    await cardWrapper.trigger("click");

    expect(wrapper.emitted("film-card-clicked")).toBeTruthy();
    expect(wrapper.emitted("film-card-clicked").length).toBe(1);
  });
});
