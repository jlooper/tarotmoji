<template>
    <StackLayout>

        <Label row="0" text="My Reading" class="title med" />

        <GridLayout rows="auto,1,*" columns="*" class="card">

            <GridLayout row="0" rows="*" columns="*,*,*">
                <Label col="0" ref="past" class="label selected" text="PAST"
                    @tap="getOneCard('past')" />
                <Label col="1" ref="present" class="label" text="PRESENT"
                    @tap="getOneCard('present')" />
                <Label col="2" ref="future" class="label" text="FUTURE" @tap="getOneCard('future')" />
            </GridLayout>

            <StackLayout row="1" backgroundColor="#8089A8" style="opacity: .2"></StackLayout>

            <GridLayout row="2" rows="2*,*,3*,3*" class="card">
                <Label row="0" textWrap="true" class="card-title" :text="name" />
                <StackLayout v-if="reversed" row="1" style="margin:10"
                    verticalAlignment="top" horizontalAlignment="center"
                    orientation="horizontal">
                    <Label class="fa status" :text="'fa-refresh' | fonticon" />
                    <Label class="status" text=" REVERSED" />
                </StackLayout>
                <Image row="2" v-if="major" :class="icon" :src="emoji" />
                <StackLayout row="2" rows="*" columns="*,*" v-if="!major"
                    horizontalAlignment="center" orientation="horizontal">
                    <Image row="0" style="margin:5" col="0" v-if="!major"
                        :class="icon" :src="emoji1" />
                    <Image row="0" style="margin:5" col="1" v-if="!major"
                        :class="icon" :src="emoji2" />
                </StackLayout>
                <Label row="3" class="meaning" textWrap="true" :text="meaning" />
            </GridLayout>

        </GridLayout>
    </StackLayout>
</template>

<script>
    import {
        Cards
    } from "../data/cards";
    export default {
        data() {
            return {
                name: "",
                meaning: "",
                emoji: "",
                emoji1: "",
                emoji2: "",
                icon: "emoji",
                cards: Cards,
                major: true,
                shuffledNum: 0,
                randomNum: 0
            };
        },
        methods: {
            pickNums() {
                this.shuffledNum = Math.floor(Math.random() * Math.floor(2));
                this.randomNum = Math.round(Math.random() * Math.floor(72));
            },
            getOneCard(ref) {
                this.pickNums();
                this.switchColor(ref);
                this.cards.forEach((card, index) => {
                    if (index == this.randomNum) {
                        if (card.type != "major") {
                            this.major = false;
                            this.emoji1 = "~/assets/emoji/" + card.value +
                                ".png";
                            this.emoji2 = "~/assets/emoji/" + card.suit +
                                ".png";
                        } else {
                            this.major = true;
                            this.emoji = "~/assets/emoji/" + card.value +
                                ".png";
                        }
                        this.name = card.name;
                        if (this.shuffledNum == 0) {
                            this.meaning = card.meaning_up;
                            this.icon = "emoji";
                        } else {
                            this.meaning = card.meaning_rev;
                            this.reversed = true;
                            this.icon = "emoji reversed";
                        }
                        console.log(this.reversed);
                    } else {}
                });
            },
            switchColor(ref) {
                if (ref == "past") {
                    this.$refs.past.nativeView.className = "label selected";
                    this.$refs.present.nativeView.className = "label";
                    this.$refs.future.nativeView.className = "label";
                } else if (ref == "present") {
                    this.$refs.past.nativeView.className = "label";
                    this.$refs.present.nativeView.className =
                        "label selected";
                    this.$refs.future.nativeView.className = "label";
                } else if (ref == "future") {
                    this.$refs.past.nativeView.className = "label";
                    this.$refs.present.nativeView.className = "label";
                    this.$refs.future.nativeView.className = "label selected";
                }
            }
        },
        created() {
            this.getOneCard();
        }
    };
</script>

<style scoped>
    .label {
        font-family: Nunito, Nunito-Sans;
        font-size: 15;
        opacity: .5;
        text-align: center;
        margin: 15;
    }

    .selected {
        color: #5326BF;
        opacity: 1;
    }
</style>