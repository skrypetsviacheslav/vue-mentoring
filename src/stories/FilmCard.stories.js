import FilmCard from "../components/FilmCard.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "FilmCard",
  excludeStories: /.*Data$/
};

export const actionsData = {
  onCardClicked: action("card-clicked")
};

const Template = (args, { argTypes }) => ({
  components: { FilmCard },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: `<FilmCard v-bind="$props" @card-clicked='onCardClicked'/>`
});

export const Kill_Bill_vol2 = Template.bind({});
Kill_Bill_vol2.args = {
  imageUrl:
    "https://images-na.ssl-images-amazon.com/images/I/51UQNTy4GqL._AC_.jpg",
  title: "Kill Bill: Vol 2",
  genres: ["Oscar winning Movie", "Action"],
  releaseDate: "1994-05-01"
};
