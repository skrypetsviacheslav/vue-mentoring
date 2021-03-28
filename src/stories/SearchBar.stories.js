import SearchBar from "../components/SearchBar.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "SearchBar",
  excludeStories: /.*Data$/,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#333333" },
        { name: "ligth", value: "#F8F8F8" },
        { name: "white", value: "#FFFFFF" }
      ]
    }
  }
};

export const actionsData = {
  onButtonClick: action("button-clicked")
};

const Template = (args, { argTypes }) => ({
  components: { SearchBar },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: `<SearchBar v-bind="$props" @button-clicked='onButtonClick'/>`
});

export const By_Title_and_Genre = Template.bind({});
By_Title_and_Genre.args = {
  firstOption: "TITLE",
  secondOption: "GENRE"
}