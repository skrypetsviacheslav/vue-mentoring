import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

describe("Header.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(Header);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const slotContent = "<h1>Test slot content</h1>";

    const wrapper = mount(Header, {
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.find(".navbar .container").html()).toContain(slotContent);
  });
});
