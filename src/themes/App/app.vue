<template>
    <div id="app">
        <div class="level-one">
            <div class="level-one-left" v-bind:class="[leftOpen ? 'level-one-left--openLeft':'', rightOpen ? 'level-one-left--openRight':'',  level >= 1 ? 'level-one--hidden':'']">
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
            <div class="level-one-right" v-bind:class="[rightOpen ? 'level-one-right--openRight': '', leftOpen ? 'level-one-right--openLeft':'', level >= 1 ? 'level-one--hidden':'']">
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
        <div class="level-two" v-bind:class="[level == 1 ? 'level-two--open':'', level >= 2 ? 'level-two--hidden':'']">
            <div class="level-two-left" style="background: url(/pics/level-1.jpg) 100% 0%">
            </div>  
            <div class="level-two-right">
                <div class="level-two-panel">
                    <div class="content">
                        <div class="breadcrumbs">
                            <div class="breadcrumbs-one" v-on:click="goLevel(0)">Главная</div>
                            <div class="breadcrumbs-del">></div>
                            <div class="breadcrumbs-one active">Синарский трубный завод</div>
                        </div>
                        <h1>Синарский трубный завод</h1>
                        <div class="content-block" v-on:click="openLevelTree">
                            <img src="/pics/blocks-tile.png">
                        </div>
                        <div class="content-back" v-on:click="back">
                            Назад
                            <div class="content-back--arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="level-three" v-bind:class="[level == 2 ? 'level-three--open':'', level >= 3 ? 'level-three--hidden':'']">
            <div class="level-three-left"  style="background: url(/pics/level-2.jpg) 100% 0%">
            </div> 
            <div class="level-three-right">
                <div class="level-two-panel">
                    <div class="content">
                        <div class="breadcrumbs">
                            <div class="breadcrumbs-one" v-on:click="goLevel(0)">Главная</div>
                            <div class="breadcrumbs-del">></div>
                            <div class="breadcrumbs-one" v-on:click="goLevel(1)">Синарский трубный завод</div>
                            <div class="breadcrumbs-del">></div>
                            <div class="breadcrumbs-one active">Производственные цеха</div>
                        </div>
                        <h1>Производственные цеха</h1>
                        <div class="content-block"  v-on:click="openLevelFour">
                            <img src="/pics/blocks-tile-2.png">
                        </div>
                        <div class="content-back" v-on:click="back">
                            Назад
                            <div class="content-back--arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="level-four" v-bind:class="[level == 3 ? 'level-four--open':'']">
            <div class="level-four-left"  style="background: url(/pics/level-3.jpg) 100% 0%">
            </div> 
            <div class="level-four-right">
                <div class="level-two-panel">
                    <div class="content">
                        <div class="breadcrumbs">
                            <div class="breadcrumbs-one" v-on:click="goLevel(0)">Главная</div>
                            <div class="breadcrumbs-del">></div>
                            <div class="breadcrumbs-one" v-on:click="goLevel(1)">Синарский трубный завод</div>
                            <div class="breadcrumbs-del">></div>
                            <div class="breadcrumbs-one" v-on:click="goLevel(2)">Производственные цеха</div>
                            <div class="breadcrumbs-del">></div>
                            <div class="breadcrumbs-one active">Трубопрокатный цех №3 (Т-3)</div>
                        </div>
                        <h1>Трубопрокатный цех №3 (Т-3)</h1>
                        <div class="content-block">
                            <p>Текст</p>
                        </div>
                        <div class="content-back" v-on:click="back">
                            Назад
                            <div class="content-back--arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                level: 0,
                rightOpen: false,
                leftOpen: false
            }
        },
        methods: {
            openRight: function() {
                this.rightOpen = true;
                this.level = 1;
            },
            openLeft:  function() {
                this.leftOpen = true;
                this.level = 1;
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