<template>
  <GridLayout rows="auto,*" verticalAlignment="top">
    <Label row="0" text="Card Meanings" class="title med"/>
    <StackLayout row="1" class="meaning-card" orientation="vertical">
      <ListView
        class="list-group"
        for="item in allCards"
        backgroundColor="transparent"
        separatorColor="transparent"
      >
        <v-template>
          <GridLayout
            columns="50,*"
            rows="*"
            @tap="showDetailPageModally(item)"
            class="list-item list-item-name"
          >
            <Image col="0" :src="'~/assets/emoji/' +item.value+ '.png' " class="emoji"/>
            <Label col="1" :text="item.name" class="lab" verticalAlignment="center"/>
          </GridLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </GridLayout>
</template>

<script>
import { Cards } from "../data/cards";
const Detail = {
  props: ["name", "value", "meaning_up", "meaning_rev"],
  template: `
	<ModalStack class="modal-container">
		<GridLayout class="card modal" rows="auto,auto" verticalAlignment="middle">
			<Button row="0" @tap="$modal.close" class="fa close" text.decode="&#xf00d;" horizontalAlignment="right" />
						<StackLayout row="1" ref="meaningContainer" class="list-item list-item-meaning">
							<Image col="0" :src="'~/assets/emoji/' + value + '.png' " class=" emoji_window" />
							<Label col="1" :text="name" class="card-title"
						            style="text-align: center;padding-bottom: 24;" />
						                <GridLayout columns="20,*" rows="*,*">
						                    <Image col="0" row="0" class="arrow"
						                            verticalAlignment="top" src="~/assets/arrow_up.png" style="margin-top: 5; margin-right: 10" />
						                        <Label col="1" row="0" verticalAlignment="top"
						                            :text="meaning_up" textWrap="true"
						                            style="margin-bottom:25; font-size: 16;" />
						                        <Image col="0" row="1" class="arrow2"
						                            verticalAlignment="top" src="~/assets/arrow_down.png" style="margin-top: 5; margin-right: 10" />
						                        <Label col="1" row="1" verticalAlignment="top"
						                            :text="meaning_rev" textWrap="true" style="font-size: 16" />
						                    </GridLayout>
						    </StackLayout>
	                </GridLayout>
	            </ModalStack>
		    `
};
export default {
  data() {
    return {
      cards: Cards,
      name: "",
      meaning_up: "",
      meaning_rev: "",
      emoji: "",
      value: "",
      allCards: [],
      detailPage: Detail
    };
  },
  methods: {
    getAllCards() {
      this.cards.forEach((card, index) => {
        if (card.type == "major") {
          this.allCards.push({
            name: card.name,
            emoji: card.emoji,
            value: card.value,
            meaning_up: card.meaning_up,
            meaning_rev: card.meaning_rev
          });
        }
      });
    },
    showDetailPageModally(item) {
      this.$showModal(Detail, {
        props: {
          name: item.name,
          value: item.value,
          meaning_up: item.meaning_up,
          meaning_rev: item.meaning_rev
        }
      });
    }
  },
  created() {
    this.getAllCards();
  }
};
</script>

<style scoped>
.meaning-card {
  margin: 10;
  padding: 5;
}

.arrow {
  margin-right: 5;
}

.arrow2 {
  margin-right: 5;
}
</style>