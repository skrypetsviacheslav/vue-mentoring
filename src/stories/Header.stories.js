import Header from "../components/Header.vue";
import AppNameLabel from "../components/AppNameLabel.vue";

export default {
  title: "Header"
};

export const Empty = () => ({
  components: { Header },
  template: `<Header/>`
});

export const With_AppNameLabel = () => ({
  components: { Header, AppNameLabel },
  template: `
    <Header>
        <AppNameLabel class="text-center w-100"/>
    </Header>`
});
