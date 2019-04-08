<template>
    <ClientOnly>
        <div class="home">
            <ClientOnly>
                <VueCarousel :imgs="data.banner" :delay="2000" :imgWidth="960" :imgHeight="450" :dotWidth="10" />
            </ClientOnly>

            <div class="hero animated fadeIn">
                <img :src="$withBase(data.heroImage)" alt="hero">
                <div id='intro'>
                    <p>与我们</p>
                    <!-- <img src="/banner/d_index_content_bg1.jpg" alt=""> -->
                    <p>一起创建您的移动应用程序</p>
                    <p>我们设计和开发了多款应用产品，包括网站，小程序，手机app</p>
                    <p>我们构思和创建成功软件的基础就是以用户为中心的互动设计和体验</p>
                </div>
                <!-- <h1>{{ data.siteTitle }}</h1> -->
                <p class="description">
                    {{ data.description }}
                </p>
                <p class="action"><a href="/guide/" class="nav-link action-button">{{ data.actionText }}</a></p>
            </div>
            <div class="features animated fadeIn">
                <div class="feature fadeIn service_list" v-for="item in data.features" :key="item.title">
                    <a href="">
                        <li :class="item.tag">
                            <img :src="item.icon">
                            <span>{{item.title}}</span>
                        </li>
                    </a>
                    <!-- <h2>{{ item.title }}</h2> -->
                    <p>{{ item.details }}</p>
                </div>
            </div>

            <div class="intro">
                <h2>手机应用软件开发能给企业带来哪些价值</h2>
                <ul class="value">
                    <li>手机应用软件开发可以帮助企业实现精准营销。APP将企业的最新信息，比如公司最近的新产品上市或促销活动等信息快速精准的传达给目标客户。</li>
                    <li>可以通过手机APP随时随地传达信息给客户，不时间跟空间等原因受阻。</li>
                    <li>提高用户的粘度，留住新老客户，让他们成为中最好的口碑传播者。</li>
                    <li>企业用最低的广告成本，获得最佳的宣传效果传统的广告方式相比，手机APP广告无需按点击和次数付费，其图文并茂、形象生动的广告表现形式论是费用还是效果方面都比传统的广告更胜一筹。</li>
                    <li>服务于现有客户，提升客户的满意度，并促成二次消费。</li>
                </ul>
                <h2>开发一个APP需要多少钱</h2>
                <div class="assess-cost">
                    <div class="desc">
                        要说到开发一款APP多少钱？这是许多需要制作APP客户端的企业都会想要知道的问题答案，就APP开发的工作内容来看，APP报价都受到多方面的因素影响，所以相应的苹果APP的开发价格当然也是受到很多因素影响的。
                    </div>
                    <ul class="cost">
                        <li>
                            <h5>企业对功能需求影响开发价格</h5>
                            <div>
                                不同行业的企业主对苹果APP开发的功能需求有所不同，所以开发公司也是按照不同APP功能需求来进行APP报价的。比如说企业需要一款简单的企业苹果APP展示功能的软件，那么在开发上就不需要太复杂的技术就能够制作出来，那么APP报价就会低一些；但是如果是企业需要一款电商类型的苹果APP应用，由于电商APP开发比较复杂，因此在苹果APP的开发上就需要投入比较多的人力和物力，APP报价相应的也会比较高一些。所以说苹果APP的价格是针对企业主的不同功能需求来进行报价的，并没有一个统一的具体APP开发价格。
                            </div>
                        </li>
                        <li>
                            <h5>苹果软件开发相对于安卓APP报价高一些</h5>
                            <div>
                                目前比较主流的APP应用开发就是苹果APP开发和安卓APP开发，但是因为苹果APP开发所使用到的Objective-C语言是比较难学习的，在APP开发上也会遇到非常多的难题，所以相较于简单易学的Java语言开发的安卓APP软件，在报价上就会高出很多。因此，苹果IOS
                                APP开发的报价通常都是高于安卓APP报价。</div>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="content custom"></div>
            <div class="footer">
                {{data.footer}}
            </div>
        </div>
    </ClientOnly>
</template>

<script>
    import VueCarousel from './VueCarousel.vue'
    export default {
        components: {
            "VueCarousel": VueCarousel,
        },
        computed: {
            background() {
                return this.$site.themeConfig.homeBackgroundUrl
            },
            data() {
                return {
                    ...this.$page.frontmatter,
                    banner: [
                        { src: '/banner/banner1.jpg' },
                        { src: '/banner/banner2.jpg' },
                    ]
                };
            },
        },
        methods: {
        },
    };
</script>

<style lang="stylus" scoped>
    @import './styles/config.styl'
    @import './styles/home.styl'
</style>