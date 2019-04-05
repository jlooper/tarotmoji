<template>
  <GridLayout rows="auto,auto" verticalAlignment="top">
    <Label row="0" text="Card of the Day" class="title med"/>
    <GridLayout row="1" rows="2*,*,3*,3*" class="card">
      <Label row="0" textWrap="true" class="card-title" :text="name"/>
      <StackLayout
        v-if="reversed"
        row="1"
        style="margin:5"
        verticalAlignment="top"
        horizontalAlignment="center"
        orientation="horizontal"
      >
        <Label class="fa status" text.decode="&#xf021;"/>
        <Label class="status" text=" REVERSED"/>
      </StackLayout>
      <Image row="2" v-if="major" :class="icon" :src="emoji"/>
      <StackLayout row="2" v-if="!major" horizontalAlignment="center" orientation="horizontal">
        <Image style="margin:5" v-if="!major" :class="icon" :src="emoji1"/>
        <Image style="margin:5" v-if="!major" :class="icon" :src="emoji2"/>
      </StackLayout>
      <Label row="3" class="meaning" textWrap="true" :text="meaning"/>
    </GridLayout>
  </GridLayout>
</template>

<script>
import { Cards } from "../data/cards";
import Tarot from "./tarot";
export default {
  mixins: [Tarot],
  data() {
    return {
      name: "",
      meaning: "",
      emoji: "",
      emoji1: "",
      emoji2: "",
      icon: "emoji",
      cards: Cards,
      major: true
    };
  },
  computed: {
    shuffle() {
      return Math.floor(Math.random() * 2);
    },
    randomNumber() {
      return Math.round(Math.random() * 72);
    }
  },
  created() {
    this.getOneCard("", this.shuffle, this.randomNumber);
  }
};
</script>

<style>
.meaning {
  font-size: 16;
  color: #131636;
  text-align: center;
  margin: 0 20;
}

.status {
  color: #323340;
  opacity: 0.5;
  font-size: 14;
}
</style>