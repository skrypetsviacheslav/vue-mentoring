import { mount } from "@vue/test-utils";
import Toogle from "../../src/components/Toogle.vue";

const label = "Test label";
const firstOption = "Test first option";
const secondOption = "Test second option";
const factory = propsData => {
  return mount(Toogle, {
    propsData: {
      label: label,
      firstOption: firstOption,
      secondOption: secondOption,
      ...propsData
    }
  });
};

describe("Toogle.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(Toogle);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const wrapper = factory();

    const ToogleWrapper = wrapper.find(".toogle");
    expect(ToogleWrapper.find(".label").text()).toBe(label);
    const OptionLabels = ToogleWrapper.findAll(".btn-group-toggle label");
    expect(OptionLabels.at(0).text()).toBe(firstOption);
    expect(OptionLabels.at(1).text()).toBe(secondOption);
  });

  it("renders with firstOption selected", () => {
    const wrapper = factory();

    const firstOption = wrapper
      .findAll(".toogle .btn-group-toggle label")
      .at(0);
    const firstOptionRadioInput = firstOption.find("input[type='radio']");
    expect(firstOptionRadioInput.element.checked).toBeTruthy();
    expect(firstOption.classes("active")).toBe(true);
  });

  it("switch between options on click", async () => {
    const wrapper = factory();
    const OptionLabels = wrapper.findAll(".toogle .btn-group-toggle label");
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
    const OptionLabels = wrapper.findAll(".toogle .btn-group-toggle label");
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
