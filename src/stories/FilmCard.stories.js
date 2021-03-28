import FilmCard from "../components/FilmCard.vue";

export default {
  title: "FilmCard"
};

const Template = (args, { argTypes }) => ({
  components: { FilmCard },
  props: Object.keys(argTypes),
  template: `<FilmCard v-bind="$props"/>`
});

export const Kill_Bill_vol2 = Template.bind({});
Kill_Bill_vol2.args = {
  imageUrl:
    "https://images-na.ssl-images-amazon.com/images/I/51UQNTy4GqL._AC_.jpg",
  title: "Kill Bill: Vol 2",
  genre: "Oscar winning Movie",
  releaseDate: "1994"
};
