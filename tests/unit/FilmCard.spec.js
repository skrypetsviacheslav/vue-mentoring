import { mount } from "@vue/test-utils";
import FilmCard from "../../src/components/FilmCard.vue";

const imageUrl = "imageUrl";
const title = "Test title";
const releaseDate = "2000";
const genres = ["Test genre", "Test genre2"];
const factory = propsData => {
  return mount(FilmCard, {
    propsData: {
      imageUrl: imageUrl,
      title: title,
      releaseDate: releaseDate,
      genres: genres,
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
    const wrapper = factory();

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardWrapper.find(".card-img-top").attributes("src")).toBe(imageUrl);
    expect(cardBodyWrapper.find("h6").text()).toBe(title);
    expect(cardBodyWrapper.find("span").text()).toBe(releaseDate);
  });

  it("displays formatted genres prop", () => {
    const formattedGenres = "Test genre & Test genre2";

    const wrapper = factory();

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardBodyWrapper.find(".card-text").text()).toBe(formattedGenres);
  });

  it("emit card-clicked event when card clicked", async () => {
    const wrapper = factory();
    const cardWrapper = wrapper.find(".card");

    await cardWrapper.trigger("click");

    expect(wrapper.emitted("card-clicked")).toBeTruthy();
    expect(wrapper.emitted("card-clicked").length).toBe(1);
  });
});
