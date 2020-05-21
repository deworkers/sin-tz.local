<template>
    <div id="app">
        <div class="level-one">
            <div class="level-one-left" v-bind:class="[leftOpen ? 'level-one-left--openLeft':'', rightOpen ? 'level-one-left--openRight':'',  level == 2 ? 'level-one--hidden':'']">
                <div class="level-one-img"></div>
                <div class="level-one-panel">
                    <div class="level-one__logo level-one__logo--tmk">
                        <img src="/pics/logo-tmk.png">
                    </div>
                    <div class="level-one__title">
                        Трубная<br>
                        металлургическая<br>
                        компания
                    </div>
                    <div class="level-one__more" v-on:click="openLeft">
                        Узнать больше
                        <div class="level-one__more-arrow"></div>
                    </div>
                    <div class="level-one__qr">
                        <img src="/pics/qr-tmk-group-ru.png">
                    </div>
                </div>
            </div>
            <div class="level-one-right" v-bind:class="[rightOpen ? 'level-one-right--openRight': '', leftOpen ? 'level-one-right--openLeft':'', level == 2 ? 'level-one--hidden':'']">
                <div class="level-one-img"></div>
                <div class="level-one-panel">
                    <div class="level-one__logo  level-one__logo--sinz">
                        <img src="/pics/logo-sinz.png">
                    </div>
                    <div class="level-one__title">
                        Синарский<br>
                        трубный<br>
                        завод
                    </div>
                    <div class="level-one__more"  v-on:click="openRight">
                        Узнать больше
                        <div class="level-one__more-arrow"></div>
                    </div>
                    <div class="level-one__qr">
                        <img src="/pics/qr-sintz-tmk-group.png">
                    </div>
                </div>
            </div>
        </div>
        <levelTwo 
            :class="[level == 1 ? 'level-two--open':'', level >= 2 ? 'level-two--hidden':'']"
            :goLevel="goLevel"
            :back="back"
        ></levelTwo>
        <levelThree
            :class="[level == 2 ? 'level-three--open':'', level >= 3 ? 'level-three--hidden':'']"
            :goLevel="goLevel"
            :back="back"
        ></levelThree>
        <levelFour
            :class="[level == 3 ? 'level-four--open':'']"
            :goLevel="goLevel"
            :back="back"
        ></levelFour>
    </div>
</template>

<script>
    import levelTwo   from "./components/level-two.vue";
    import levelThree from "./components/level-three.vue";
    import levelFour  from "./components/level-four.vue";

    export default {
        components: {
            levelTwo, 
            levelThree, 
            levelFour
        },
        data: function() {
            return {
                level: 0,
                rightOpen: false,
                leftOpen: false
            }
        },
        computed: {
            content: function () {
                return this.$store.state.content;
            },
        },
        methods: {
            openRight: function() {
                var self = this;
                this.$store.dispatch('getContent', {
                    link: 'json/level2.json',
                    level: 'level2'
                }).then(function() {
                    self.rightOpen = true;
                    setTimeout(() => {
                        self.level = 1;
                    }, 2000);
                });
            },
            openLeft:  function() {
                var self = this;
                this.$store.dispatch('getContent', {
                    link: 'json/level2.json',
                    level: 'level2'
                }).then(function() {
                    self.leftOpen = true;
                    setTimeout(() => {
                        self.level = 1;
                    }, 2000);
                });
            },
            openLevelTree: function() {
                this.level = 2;
            },
            openLevelFour: function() {
                this.level = 3;
            },
            goLevel: function(level) {
                this.level = level;
                if ( this.level == 0 ) {
                    this.rightOpen = false;
                    this.leftOpen = false;
                }
            },
            back: function() {
                this.level = this.level-1;
                if ( this.level == 0 ) {
                    this.rightOpen = false;
                    this.leftOpen = false;
                }
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                
            });
        }
    }
</script>