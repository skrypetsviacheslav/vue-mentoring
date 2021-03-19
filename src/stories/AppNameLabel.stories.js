import AppNameLabel from "../components/AppNameLabel.vue";

export default {
  title: "AppNameLabel"
};

const Template = (args, { argTypes }) => ({
  components: { AppNameLabel },
  props: Object.keys(argTypes),
  template: `<AppNameLabel v-bind="$props"/>`
});

export const With_default_value = Template.bind({});

export const With_custom_companyName = Template.bind({});
With_custom_companyName.args = {
  companyName: "Microsoft"
};

export const With_custom_appName = Template.bind({});
With_custom_appName.args = {
  appName: "search"
};

export const With_custom_companyName_and_appName = Template.bind({});
With_custom_companyName_and_appName.args = {
  companyName: "Macintosh",
  appName: "find"
};
