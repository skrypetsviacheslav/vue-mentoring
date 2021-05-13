<template>
  <div id="app">
    <BaseLayout>
      <template v-slot:header>
        <Header>
          <div class="row">
            <div class="col">
              <AppNameLabel />
            </div>
            <div class="col">
              <div class="float-right">
                <a style="cursor: pointer" @click="goToMainPage">
                  <i class="fa fa-search icon-red"></i>
                </a>
              </div>
            </div>
          </div>
        </Header>
      </template>
      <template v-slot:toolbar> </template>
      <div class="body__bg-dark container-fluid">
        <div class="row min-vh-100 align-items-center">
          <div class="col">
            <h1 class="text-white text-center">{{ message }}</h1>
          </div>
        </div>
      </div>
    </BaseLayout>
  </div>
</template>

<script>
import AppNameLabel from "@/components/AppNameLabel";
import Header from "@/components/Header";
import BaseLayout from "@/components/layout/BaseLayout";

import { PATH } from "@/router/constants";
import I18N from "@/config/i18n/index";

export default {
  name: "NotFound",
  components: {
    BaseLayout,
    AppNameLabel,
    Header
  },
  data: () => {
    return {
      message: I18N["EN"].NOT_FOUND
    };
  },
  methods: {
    goToMainPage() {
      this.$router.push({ path: PATH.MAIN_PAGE });
    }
  }
};
</script>

<style scoped>
.body__bg-dark {
  background-color: #232323;
}
.icon-red {
  color: #f65261;
}
</style>
