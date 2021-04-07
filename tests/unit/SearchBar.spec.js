import { mount } from "@vue/test-utils";
import SearchBar from "../../src/components/SearchBar.vue";
import Toggle from "../../src/components/Toggle.vue";

const firstOption = "Test first option";
const secondOption = "Test second option";
const factory = propsData => {
  return mount(SearchBar, {
    propsData: {
      firstOption: firstOption,
      secondOption: secondOption,
      ...propsData
    }
  });
};

describe("SearchBar.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(SearchBar);

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("displays a passed properties", () => {
    const wrapper = factory();

    const SearchBar = wrapper.find(".search-bar");
    const Toggle = SearchBar.find(".toggle");
    expect(Toggle.text()).toContain(firstOption);
    expect(Toggle.text()).toContain(secondOption);
  });

  it("reflect to user input", async () => {
    const testInput = "some value";
    const wrapper = factory();
    const SearchBar = wrapper.find(".search-bar");
    const SearchInput = SearchBar.find(".input-group  input[type='text']");

    await SearchInput.setValue(testInput);

    expect(wrapper.vm.searchText).toEqual(testInput);
  });

  it("reflect to toggle change", () => {
    const wrapper = factory();
    const ToggleWrapper = wrapper.findComponent(Toggle);

    ToggleWrapper.vm.$emit("value-switched", secondOption);

    expect(wrapper.vm.selectedOption).toEqual(secondOption);
  });

  it("emit search-submitted event with user input and selected option when button cicked", async () => {
    const testInput = "some value";
    const wrapper = factory();
    const SearchBar = wrapper.find(".search-bar");
    const SearchInput = SearchBar.find(".input-group  input[type='text']");
    const SearchButton = SearchBar.find(".input-group  button");

    await SearchInput.setValue(testInput);
    await SearchButton.trigger("click");

    expect(wrapper.emitted("search-submitted")).toBeTruthy();
    expect(wrapper.emitted("search-submitted").length).toBe(1);
    expect(wrapper.emitted("search-submitted")[0]).toEqual([
      testInput,
      firstOption
    ]);
  });

  it("emit search-submitted event with user input and selected option when enter button pressed", async () => {
    const testInput = "some value";
    const wrapper = factory();
    const SearchBar = wrapper.find(".search-bar");
    const SearchInput = SearchBar.find(".input-group  input[type='text']");

    await SearchInput.setValue(testInput);
    await SearchInput.trigger("keydown.enter");

    expect(wrapper.emitted("search-submitted")).toBeTruthy();
    expect(wrapper.emitted("search-submitted").length).toBe(1);
    expect(wrapper.emitted("search-submitted")[0]).toEqual([
      testInput,
      firstOption
    ]);
  });
});
