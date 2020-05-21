<template>
    <div class="level-four">
        <div class="level-four-left" style="background: url(/pics/level-3.jpg) 100% 0%"></div>
        <div class="level-four-right">
            <div class="level-two-panel">
                <div class="content" v-if="content != null">
                    <div class="breadcrumbs">
                        <div class="breadcrumbs-one" v-on:click="goLevel(0)">Главная</div>
                        <div class="breadcrumbs-del">></div>
                        <div class="breadcrumbs-one" v-on:click="goLevel(1)">Синарский трубный завод</div>
                        <div class="breadcrumbs-del">></div>
                        <div class="breadcrumbs-one" v-on:click="goLevel(2)">Производственные цеха</div>
                        <div class="breadcrumbs-del">></div>
                        <div class="breadcrumbs-one active">{{content.title}}</div>
                    </div>
                    <h1>{{content.title}}</h1>
                    <div class="content-block">
                        <div v-html="content.html"></div>
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
        name: 'levelFour',
        props: ['goLevel', 'back'],
        data: function() {
            return {
                
            }
        },
        computed: {
            content: function () {
                return this.$store.state.content.level4;
            },
        },
        methods: {
            
        },
        mounted: function() {
            this.$nextTick(function() {
                
            });
        }
    }
</script>