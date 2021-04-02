import FilmCardGallery from "../components/FilmCardGallery.vue";
import {action} from "@storybook/addon-actions";

export default {
  title: "FilmCardGallery",
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
  onCardClicked: action("card-clicked")
};

const Template = (args, { argTypes }) => ({
  components: { FilmCardGallery },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: `<FilmCardGallery v-bind="$props" @card-clicked='onCardClicked'/>`
});

export const Empty = Template.bind({});

export const With_Cards = Template.bind({});
With_Cards.args = {
  cards: [
    {
      id: 1,
      poster_path: "https://via.placeholder.com/300x500.png",
      title: "cardTitle1",
      release_date: "2000",
      genres: ["Action", "Drama"]
    },
    {
      id: 2,
      poster_path: "https://via.placeholder.com/300x500.png",
      title: "cardTitle2",
      release_date: "2007",
      genres: ["Drama", "Action"]
    },
    {
      id: 3,
      poster_path: "https://via.placeholder.com/300x500.png",
      title: "cardTitle3",
      release_date: "2010",
      genres: ["Test genre"]
    },
    {
      id: 4,
      poster_path: "https://via.placeholder.com/300x500.png",
      title: "cardTitle4",
      release_date: "2007",
      genres: ["Comedy"]
    }
  ]
};
