import { mount } from "@vue/test-utils";
import Toggle from "../../src/components/Toggle.vue";

const label = "Test label";
const firstOption = "Test first option";
const secondOption = "Test second option";
const factory = propsData => {
  return mount(Toggle, {
    propsData: {
      label: label,
      firstOption: firstOption,
      secondOption: secondOption,
      ...propsData
    }
  });
};

describe("Toggle.vue", () => {
  it("displays a passed properties", () => {
    const wrapper = factory();

    const ToggleWrapper = wrapper.find(".toggle");
    expect(ToggleWrapper.find(".label").text()).toBe(label);
    const OptionLabels = ToggleWrapper.findAll(".btn-group-toggle label");
    expect(OptionLabels.at(0).text()).toBe(firstOption);
    expect(OptionLabels.at(1).text()).toBe(secondOption);
  });

  it("renders with firstOption selected", () => {
    const wrapper = factory();

    const firstOption = wrapper
      .findAll(".toggle .btn-group-toggle label")
      .at(0);
    expect(firstOption.classes("active")).toBe(true);
  });

  it("switch between options on click", async () => {
    const wrapper = factory();
    const OptionLabels = wrapper.findAll(".toggle .btn-group-toggle label");
    const firstOptionLabel = OptionLabels.at(0);
    const secondOptionLabel = OptionLabels.at(1);
    const firstOptionRadioInput = firstOptionLabel.find("input[type='radio']");
    const secondOptionRadioInput = secondOptionLabel.find(
      "input[type='radio']"
    );

    // select second option
    secondOptionRadioInput.element.checked = true;
    await secondOptionRadioInput.trigger("click");
    await secondOptionRadioInput.trigger("change");

    expect(firstOptionRadioInput.element.checked).toBeFalsy();
    expect(secondOptionRadioInput.element.checked).toBeTruthy();
  });

  it("emit value-switched event when option changed", async () => {
    const wrapper = factory();
    const OptionLabels = wrapper.findAll(".toggle .btn-group-toggle label");
    const secondOptionLabel = OptionLabels.at(1);
    const secondOptionRadioInput = secondOptionLabel.find(
      "input[type='radio']"
    );

    // select second option
    secondOptionRadioInput.element.checked = true;
    await secondOptionRadioInput.trigger("click");
    await secondOptionRadioInput.trigger("change");

    expect(wrapper.emitted("value-switched")).toBeTruthy();
    expect(wrapper.emitted("value-switched").length).toBe(1);
    expect(wrapper.emitted("value-switched")[0]).toEqual([secondOption]);
  });
});
