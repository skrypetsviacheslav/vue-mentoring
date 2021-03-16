import FilmCard from "../components/FilmCard.vue";

export default {
  title: "FilmCard"
};

export const Kill_Bill_vol2_FilmCard = () => ({
  components: { FilmCard },
  template: `<FilmCard image-url="https://images-na.ssl-images-amazon.com/images/I/51UQNTy4GqL._AC_.jpg"
                        title="Kill Bill: Vol 2"
                        genre="Oscar winning Movie"
                        release-date="1994"/>`
});
