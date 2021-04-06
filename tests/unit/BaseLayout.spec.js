import { mount } from "@vue/test-utils";
import BaseLayout from "../../src/components/layout/BaseLayout.vue";

describe("BaseLayout.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(BaseLayout);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const headerSlotContent = "<h1>Header slot content</h1>";
    const toolbarSlotContent = "<h1>Toolbar slot content</h1>";
    const mainSlotContent = "<h1>Main slot content</h1>";
    const footerSlotContent = "<h1>Footer slot content</h1>";

    const wrapper = mount(BaseLayout, {
      slots: {
        header: headerSlotContent,
        toolbar: toolbarSlotContent,
        default: mainSlotContent,
        footer: footerSlotContent
      }
    });

    const baseLayoutWrapper = wrapper.find(".container-fluid");
    const headerWrapper = baseLayoutWrapper.find("header");
    const toolbarWrapper = baseLayoutWrapper.find(".container-fluid");
    const mainWrapper = baseLayoutWrapper.find("main");
    const footerWrapper = baseLayoutWrapper.find("footer");

    expect(headerWrapper.html()).toContain(headerSlotContent);
    expect(toolbarWrapper.html()).toContain(toolbarSlotContent);
    expect(mainWrapper.html()).toContain(mainSlotContent);
    expect(footerWrapper.html()).toContain(footerSlotContent);
  });
});
