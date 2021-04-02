<template>
  <div class="container-fluid bg-gray px-0">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="container-fluid bg-gray p-2">
      <slot name="toolbar"></slot>
    </div>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer">
        <Footer>
          <AppNameLabel class="text-center w-100 p-1" />
        </Footer>
      </slot>
    </footer>
  </div>
</template>

<script>
import Footer from "../Footer";
import AppNameLabel from "../AppNameLabel";

export default {
  name: "BaseLayout",
  components: { Footer, AppNameLabel }
};
</script>

<style scoped>
.bg-gray {
  background-color: #555555;
}
</style>
