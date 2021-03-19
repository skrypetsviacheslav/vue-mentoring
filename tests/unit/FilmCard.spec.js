import { mount } from "@vue/test-utils";
import FilmCard from "../../src/components/FilmCard.vue";

describe("FilmCard.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(FilmCard);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const imageUrl = "imageUrl";
    const title = "Test title";
    const releaseDate = "2000";
    const genre = "Test genre";

    const wrapper = mount(FilmCard, {
      propsData: {
        imageUrl: imageUrl,
        title: title,
        releaseDate: releaseDate,
        genre: genre
      }
    });

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardWrapper.find(".card-img-top").attributes("src")).toBe(imageUrl);
    expect(cardBodyWrapper.find("h6").text()).toBe(title);
    expect(cardBodyWrapper.find("p").text()).toBe(releaseDate);
    expect(cardBodyWrapper.find(".card-text").text()).toBe(genre);
  });
});
