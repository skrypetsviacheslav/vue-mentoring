import FilmCardGallery from "../components/FilmCardGallery.vue";

export default {
  title: "FilmCardGallery",
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

const Template = (args, { argTypes }) => ({
  components: { FilmCardGallery },
  props: Object.keys(argTypes),
  template: `<FilmCardGallery v-bind="$props"/>`
});

export const Empty = Template.bind({});

export const With_Cards = Template.bind({});
With_Cards.args = {
  cards: [
    {
      imageUrl: "https://via.placeholder.com/300x500.png",
      title: "cardTitle1",
      releaseDate: "2000",
      genre: "Action"
    },
    {
      imageUrl: "https://via.placeholder.com/300x500.png",
      title: "cardTitle2",
      releaseDate: "2007",
      genre: "Drama"
    },
    {
      imageUrl: "https://via.placeholder.com/300x500.png",
      title: "cardTitle3",
      releaseDate: "2010",
      genre: "Test genre"
    },
    {
      imageUrl: "https://via.placeholder.com/300x500.png",
      title: "cardTitle4",
      releaseDate: "2007",
      genre: "Comedy"
    }
  ]
};
