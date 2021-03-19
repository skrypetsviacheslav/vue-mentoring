import { mount } from "@vue/test-utils";
import Footer from "../../src/components/Footer.vue";

describe("Footer.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(Footer);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const slotContent = "<h1>Test slot content</h1>";

    const wrapper = mount(Footer, {
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.find(".navbar .container").html()).toContain(slotContent);
  });
});
