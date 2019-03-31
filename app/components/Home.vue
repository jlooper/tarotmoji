<template>
    <Page class="page" actionBarHidden="true">
        <GridLayout rows="auto, *, auto" columns="*, *, *">
            <Image src="~/assets/logo.png" width="195" marginTop="20" row="0"
                col="0" colSpan="3" />

            <!-- main components all on top of each other, since only 1 will be visible at any given time -->
            <component v-for="component in componentsArray" 
                v-show="component === currentComponent"
                :is="component" row="1" col="0" colSpan="3" />

            <!-- Bottom navigation -->
            <Button :class="navigationButtonClasses('CardOfTheDay')" @tap="currentComponent = 'CardOfTheDay'"
                :text="'fa-square' | fonticon" row="2" col="0" />
            <Button :class="navigationButtonClasses('CardList')" @tap="currentComponent = 'CardList'"
                :text="'fa-bars' | fonticon" row="2" col="1" />
            <Button :class="navigationButtonClasses('Reading')" @tap="currentComponent = 'Reading'"
                :text="'fa-clone' | fonticon" row="2" col="2" />
        </GridLayout>
    </Page>
</template>

<script>
    import CardOfTheDay from "../components/CardOfTheDay";
    import CardList from "../components/CardList";
    import Reading from "../components/Reading";
    import {
        Cards
    } from "../data/cards";
    export default {
        data() {
            return {
                currentComponent: "CardOfTheDay",
                componentsArray: ["CardOfTheDay", "CardList", "Reading"]
            };
        },
        computed: {
            navigationButtonClasses() {
                return component => ({
                    fa: true,
                    "nav-btn": true,
                    purple: component === this.currentComponent
                });
            }
        },
        components: {
            CardOfTheDay,
            CardList,
            Reading
        }
    };
</script>

<style>
    .nav-btn {
        color: #9D95B4;
        margin: 20;
        font-size: 30;
        padding: 10;
    }

    .purple {
        background-color: #5326BF;
        color: white;
        font-size: 30;
        border-radius: 10;
    }

    Button {
        background-color: rgba(255, 0, 0, 0.0);
        border-color: rgba(255, 0, 0, 0.0);
        border-width: 1;
    }
</style>