import { mount } from "@vue/test-utils";
import FilmDetailCard from "../../src/components/FilmDetailCard.vue";

const movie = {
  title: "Test title",
  release_date: "1994-05-01",
  vote_average: 4.3,
  runtime: 154,
  overview: "Test description",
  poster_path: "imageUrl",
  genres: ["Test genre", "Test genre2"]
};

const factory = propsData => {
  return mount(FilmDetailCard, {
    propsData: {
      movie,
      ...propsData
    }
  });
};

describe("FilmDetailCard.vue", () => {
  it("renders correctly", () => {
    const wrapper = factory();

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const formmatedReleaseDate = "1994";
    const wrapper = factory();

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardWrapper.find("img").attributes("src")).toBe(movie.poster_path);
    expect(cardBodyWrapper.text()).toContain(movie.title);

    expect(cardBodyWrapper.text()).toContain(formmatedReleaseDate);
    expect(cardBodyWrapper.text()).toContain(movie.vote_average);
    expect(cardBodyWrapper.text()).toContain(movie.runtime);
    expect(cardBodyWrapper.text()).toContain(movie.overview);
  });

  it("displays formatted genres prop", () => {
    const formattedGenres = "Test genre & Test genre2";

    const wrapper = factory();

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardBodyWrapper.text()).toContain(formattedGenres);
  });
});
