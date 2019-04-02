<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="auto, *, auto" columns="*, *, *">
      <Image src="~/assets/logo.png" width="195" marginTop="20" row="0" col="0" colspan="3"/>
      <component
        v-for="component in componentsArray"
        v-show="component === currentComponent"
        :is="component"
        row="1"
        col="0"
        colspan="3"
      />
      <Button
        :class="navigationButtonClasses('CardOfTheDay')"
        text.decode="&#xf0c8;"
        @tap="currentComponent = 'CardOfTheDay'"
        row="2"
        col="0"
      />
      <Button
        :class="navigationButtonClasses('CardList')"
        text.decode="&#xf0c9;"
        @tap="currentComponent = 'CardList' "
        row="2"
        col="1"
      />
      <Button
        :class="navigationButtonClasses('Reading')"
        text.decode="&#xf24d;"
        @tap="currentComponent = 'Reading'"
        row="2"
        col="2"
      />
    </GridLayout>
  </Page>
</template>

<script>
import CardOfTheDay from "../components/CardOfTheDay";
import CardList from "../components/CardList";
import Reading from "../components/Reading";
export default {
  data() {
    return {
      currentComponent: "CardOfTheDay",
      componentsArray: ["CardOfTheDay", "CardList", "Reading"]
    };
  },
  components: {
    CardOfTheDay,
    CardList,
    Reading
  },
  computed: {
    navigationButtonClasses() {
      return component => ({
        fa: true,
        "nav-btn": true,
        purple: component === this.currentComponent
      });
    }
  }
};
</script>

<style>
.nav-btn {
  color: #9d95b4;
  margin: 20;
  font-size: 30;
  padding: 10;
}

.purple {
  background-color: #5326bf;
  color: white;
  font-size: 30;
  border-radius: 10;
}

button {
  background-color: rgba(255, 0, 0, 0);
  border-color: rgba(255, 0, 0, 0);
  border-width: 1;
}
</style>