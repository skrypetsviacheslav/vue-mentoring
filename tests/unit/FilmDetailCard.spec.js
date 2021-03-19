import { mount } from "@vue/test-utils";
import FilmDetailCard from "../../src/components/FilmDetailCard.vue";

describe("FilmDetailCard.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(FilmDetailCard);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const imageUrl = "imageUrl";
    const title = "Test title";
    const genre = "Test genre";
    const releaseDate = 1994;
    const rate = 4.3;
    const duration = 154;
    const description = "Test description";

    const wrapper = mount(FilmDetailCard, {
      propsData: {
        imageUrl: imageUrl,
        title: title,
        releaseDate: releaseDate,
        rate: rate,
        genre: genre,
        duration: duration,
        description: description
      }
    });

    const cardWrapper = wrapper.find(".card");
    const cardBodyWrapper = cardWrapper.find(".card .card-body");
    expect(cardWrapper.find("img").attributes("src")).toBe(imageUrl);
    expect(cardBodyWrapper.text()).toContain(title);
    expect(cardBodyWrapper.text()).toContain(genre);
    expect(cardBodyWrapper.text()).toContain(releaseDate);
    expect(cardBodyWrapper.text()).toContain(rate);
    expect(cardBodyWrapper.text()).toContain(duration);
    expect(cardBodyWrapper.text()).toContain(description);
  });
});
