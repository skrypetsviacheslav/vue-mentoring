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
  movie: {
    poster_path:
      "https://images-na.ssl-images-amazon.com/images/I/51UQNTy4GqL._AC_.jpg",
    title: "Kill Bill: Vol 2",
    genres: ["Oscar winning Movie", "Action"],
    release_date: "1994-05-01",
    vote_average: 4.3,
    runtime: 154,
    overview:
      "Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. "
  }
};
