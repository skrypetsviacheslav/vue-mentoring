import { mount } from "@vue/test-utils";
import AppNameLabel from "../../src/components/AppNameLabel.vue";

describe("AppNameLabel.vue", () => {
  it("displays a passed properties", () => {
    const companyName = "company";
    const appName = "app";

    const wrapper = mount(AppNameLabel, {
      propsData: {
        companyName: companyName,
        appName: appName
      }
    });

    expect(wrapper.find(".application-name-label b").text()).toBe(companyName);
    expect(wrapper.find(".application-name-label").text()).toContain(appName);
  });
});
