<script setup>
import {ref} from 'vue';
import LanguageSwitcher from "./language-switcher.vue";
import FooterContent from "./footer-content.vue";

const drawerVisible = ref(false);
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
};
</script>

<template>
<div>
  <div>
    <pv-menubar>
      <template #start>
        <pv-button icon="pi pi-bars" @click="toggleDrawer" label="CatchUp" text/>

      </template>
      <template #end>
        <language-switcher/>
      </template>
    </pv-menubar>
  </div>
</div>
  <div>

  </div>
  <footer-content/>
</template>

<style scoped>

</style>