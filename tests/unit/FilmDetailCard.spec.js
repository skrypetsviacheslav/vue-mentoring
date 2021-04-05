import { mount } from "@vue/test-utils";
import FilmDetailCard from "../../src/components/FilmDetailCard.vue";

const imageUrl = "imageUrl";
const title = "Test title";
const releaseDate = "1994-05-01";
const rate = 4.3;
const duration = 154;
const description = "Test description";
const genres = ["Test genre", "Test genre2"];
const factory = propsData => {
  return mount(FilmDetailCard, {
    propsData: {
      imageUrl: imageUrl,
      title: title,
      releaseDate: releaseDate,
      rate: rate,
      duration: duration,
      description: description,
      genres: genres,
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
    expect(cardWrapper.find("img").attributes("src")).toBe(imageUrl);
    expect(cardBodyWrapper.text()).toContain(title);

    expect(cardBodyWrapper.text()).toContain(formmatedReleaseDate);
    expect(cardBodyWrapper.text()).toContain(rate);
    expect(cardBodyWrapper.text()).toContain(duration);
    expect(cardBodyWrapper.text()).toContain(description);
  });

  it("displays formatted genres prop", () => {
    const formattedGenres = "Test genre & Test genre2";

    const wrapper = factory();

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardBodyWrapper.text()).toContain(formattedGenres);
  });
});
