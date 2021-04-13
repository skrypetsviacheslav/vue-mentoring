import Toggle from "../components/Toggle.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Toggle",
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
  onValueSwitch: action("value-switched")
};

const Template = (args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: `<Toggle v-bind="$props" @value-switched='onValueSwitch'/>`
});

export const Default = Template.bind({});
Default.args = {
  label: "label",
  firstOption: "firstOptions",
  secondOption: "secondOptions"
};

export const Sort_by_ReleaseDate_and_Rating = Template.bind({});
Sort_by_ReleaseDate_and_Rating.args = {
  label: "Sort by",
  firstOption: "ReleaseDate",
  secondOption: "Rating"
};
