<template>
    <div id="app">
        <div class="level-one">
            <div class="level-one-left" v-bind:class="[leftOpen ? 'level-one-left--openLeft':'', rightOpen ? 'level-one-left--openRight':'',  level == 2 ? 'level-one--hidden':'']">
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
        <div class="level-two" v-bind:class="[level == 1 ? 'level-two--open':'', level == 2 ? 'level-two--hidden':'']">
            <div class="level-two-right">
                <div class="level-two-panel">
                    <div class="content">
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
        <div class="level-three" v-bind:class="[level == 2 ? 'level-three--open':'']">
            <div class="level-two-right">
                <div class="level-two-panel">
                    <div class="content">
                        <h1>Производственные цеха предприятия</h1>
                        <div class="content-block">
                            <p>Завод был основан в 1934 году. Сейчас предприятие выпускает все виды труб нефтяного сортамента: бурильные, обсадные, насосно-компрессорные, нефтегазопроводные, а также бесшовные горячекатаные и холоднодеформированные трубы, в том числе для котлов высокого давления, трубы из коррозионностойких марок стали и сплавов.</p>
                            <p>Продукция завода находит применение во многих отраслях - нефтегазодобыче, энергетике, машиностроении, ЖКХ. Часть продукции в виде передельной трубной заготовки идет для обеспечения предприятий, входящих в ПАО «ТМК».</p>
                            <p>Качество выпускаемых труб подтверждено сертификатами АРI, Сертификатами соответствия в системе ГОСТ Р, лицензиями и разрешениями.</p>
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