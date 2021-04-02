import FilmDetailCard from "../components/FilmDetailCard.vue";

export default {
  title: "FilmDetailCard"
};

const Template = (args, { argTypes }) => ({
  components: { FilmDetailCard },
  props: Object.keys(argTypes),
  template: `<FilmDetailCard v-bind="$props"/>`
});

export const Kill_Bill_vol2 = Template.bind({});
Kill_Bill_vol2.args = {
  imageUrl:
    "https://images-na.ssl-images-amazon.com/images/I/51UQNTy4GqL._AC_.jpg",
  title: "Kill Bill: Vol 2",
  genres: ["Oscar winning Movie", "Action"],
  releaseDate: "1994",
  rate: 4.3,
  duration: 154,
  description:
    "Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. "
};
