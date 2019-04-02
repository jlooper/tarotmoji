<template>
  <StackLayout>
    <Label row="0" text="My Reading" class="title med"/>

    <GridLayout rows="auto,1,*" columns="*" class="card">
      <GridLayout row="0" rows="*" columns="*,*,*">
        <Label col="0" :class="tabButtonClasses('Past')" text="PAST" @tap="getCard('Past')"/>
        <Label
          col="1"
          :class="tabButtonClasses('Present')"
          text="PRESENT"
          @tap="getCard('Present')"
        />
        <Label col="2" :class="tabButtonClasses('Future')" text="FUTURE" @tap="getCard('Future')"/>
      </GridLayout>

      <StackLayout row="1" backgroundColor="#8089A8" style="opacity: .2"></StackLayout>

      <GridLayout row="2" rows="2*,3*,3*" class="card">
        <Label row="0" textWrap="true" class="card-title" :text="name"/>
        <Image row="1" v-if="major" :class="icon" :src="emoji"/>
        <StackLayout
          row="1"
          rows="*"
          columns="*,*"
          v-if="!major"
          horizontalAlignment="center"
          orientation="horizontal"
        >
          <Image style="margin:5" v-if="!major" :class="icon" :src="emoji1"/>
          <Image style="margin:5" v-if="!major" :class="icon" :src="emoji2"/>
        </StackLayout>
        <Label row="2" class="meaning" textWrap="true" :text="meaning"/>
      </GridLayout>
    </GridLayout>
  </StackLayout>
</template>

<script>
import Tarot from "./tarot";

export default {
  mixins: [Tarot],

  data() {
    return {
      currentTab: "Present"
    };
  },
  computed: {
    tabButtonClasses() {
      return tab => ({
        label: true,
        selected: tab === this.currentTab
      });
    }
  },
  methods: {
    getCard(context) {
      let sNum = Math.floor(Math.random() * Math.floor(2));
      let rNum = Math.round(Math.random() * Math.floor(72));
      this.getOneCard(context, sNum, rNum);
    }
  },
  created() {
    this.getCard("Present");
  }
};
</script>

<style scoped>
.label {
  font-family: Nunito, Nunito-Sans;
  font-size: 15;
  opacity: 0.5;
  text-align: center;
  margin: 15;
}

.selected {
  color: #5326bf;
  opacity: 1;
}
</style>