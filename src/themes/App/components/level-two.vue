<template>
    <div class="level-two">
        <div class="level-two-left" style="background: url(/pics/level-1.jpg)">
        </div>
        <div class="level-two-right">
            <div class="level-two-panel">
                <div class="content" v-if="content != null">
                    <div class="breadcrumbs">
                        <div class="breadcrumbs-one" v-on:click="goLevel(0)">Главная</div>
                        <div class="breadcrumbs-del">></div>
                        <div class="breadcrumbs-one active">{{content.title}}</div>
                    </div>
                    <h1>{{content.title}}</h1>
                    <div class="content-block">
                        <div class="content-menu">
                            <div class="content-menu-one" v-for="item in content.catalogList" v-on:click="goNext(item.link)">
                                <span class="content-menu-one__title">{{item.title}}</span>
                                <div class="content-menu-one__arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div class="content-back" v-on:click="back">
                        Назад
                        <div class="content-back--arrow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'levelTwo',
        props: ['goLevel', 'back'],
        data: function() {
            return {
                
            }
        },
        computed: {
            content: function () {
                return this.$store.state.content.level2;
            },
        },
        methods: {
            goNext: function(itemIink) {
                var self = this;
                this.$store.dispatch('getContent', {
                    link: itemIink,
                    level: 'level3'
                }).then(function() {
                    self.goLevel(2);
                });
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                
            });
        }
    }
</script>
