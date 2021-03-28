import Footer from "../components/Footer.vue";
import AppNameLabel from "../components/AppNameLabel.vue";

export default {
  title: "Footer"
};

export const Empty = () => ({
  components: { Footer },
  template: `<Footer/>`
});

export const With_AppNameLabel = () => ({
  components: { Footer, AppNameLabel },
  template: `
    <Footer>
        <AppNameLabel class="text-center w-100"/>
    </Footer>`
});
