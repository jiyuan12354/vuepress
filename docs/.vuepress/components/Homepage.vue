<template>
    <ClientOnly>
        <div class="home">
            <ClientOnly>
                <VueCarousel :imgs="data.banner" :delay="2000" :imgWidth="960" :imgHeight="450" :dotWidth="10" />
            </ClientOnly>

            <div class="hero animated fadeIn">
                <img :src="$withBase(data.heroImage)" alt="hero">
                <div id='intro'>
                    <p>與我們</p>
                    <!-- <img src="/banner/d_index_content_bg1.jpg" alt=""> -->
                    <p>壹起創建您的移動應用程序</p>
                    <p>我們設計和開發了多款應用產品，包括網站，小程序，手機app</p>
                    <p>我們構思和創建成功軟件的基礎就是以用戶為中心的互動設計和體驗</p>
                </div>
                <!-- <h1>{{ data.siteTitle }}</h1> -->
                <p class="description">
                    {{ data.description }}
                </p>
                <p class="action"><a href="/guide/" class="nav-link action-button animated infinite pulse">{{ data.actionText }}</a></p>
            </div>
            <div class="features animated fadeIn">
                <div class="feature fadeIn service_list" v-for="item in data.features" :key="item.title">
                    <a href="">
                        <li :class="item.tag">
                            <img :src="item.icon">
                            <span>{{item.title}}</span>
                        </li>
                    </a>
                    <!-- <h3>{{ item.title }}</h3> -->
                    <p>{{ item.details }}</p>
                </div>
            </div>

            <div class="intro">
                <h3>手機應用軟件開發能給企業帶來哪些價值</h3>
                <ul class="value">
                    <li>手機應用軟件開發可以幫助企業實現精準營銷。APP將企業的最新信息，比如公司最近的新產品上市或促銷活動等信息快速精準的傳達給目標客戶。</li>
                    <li>可以通過手機APP隨時隨地傳達信息給客戶，不時間跟空間等原因受阻。</li>
                    <li>提高用戶的粘度，留住新老客戶，讓他們成為中最好的口碑傳播者。</li>
                    <li>企業用最低的廣告成本，獲得最佳的宣傳效果傳統的廣告方式相比，手機APP廣告無需按點擊和次數付費，其圖文並茂、形象生動的廣告表現形式論是費用還是效果方面都比傳統的廣告更勝壹籌。</li>
                    <li>服務於現有客戶，提升客戶的滿意度，並促成二次消費。</li>
                </ul>
                <h3>開發壹個APP需要多少錢</h3>
                <div class="assess-cost">
                    <div class="desc">
                        要說到開發壹款APP多少錢？這是許多需要制作APP客戶端的企業都會想要知道的問題答案，就APP開發的工作內容來看，APP報價都受到多方面的因素影響，所以相應的蘋果APP的開發價格當然也是受到很多因素影響的。
                    </div>
                    <ul class="cost">
                        <li>
                            <h5>企業對功能需求影響開發價格</h5>
                            <div>
                                不同行業的企業主對蘋果APP開發的功能需求有所不同，所以開發公司也是按照不同APP功能需求來進行APP報價的。比如說企業需要壹款簡單的企業蘋果APP展示功能的軟件，那麽在開發上就不需要太復雜的技術就能夠制作出來，那麽APP報價就會低壹些；但是如果是企業需要壹款電商類型的蘋果APP應用，由於電商APP開發比較復雜，因此在蘋果APP的開發上就需要投入比較多的人力和物力，APP報價相應的也會比較高壹些。所以說蘋果APP的價格是針對企業主的不同功能需求來進行報價的，並沒有壹個統壹的具體APP開發價格。
                            </div>
                        </li>
                        <li>
                            <h5>蘋果軟件開發相對於安卓APP報價高壹些</h5>
                            <div>
                                目前比較主流的APP應用開發就是蘋果APP開發和安卓APP開發，但是因為蘋果APP開發所使用到的Objective-C語言是比較難學習的，在APP開發上也會遇到非常多的難題，所以相較於簡單易學的Java語言開發的安卓APP軟件，在報價上就會高出很多。因此，蘋果IOS
                                APP開發的報價通常都是高於安卓APP報價。</div>
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
        // mounted(){
        //     let sidebar=document.querySelector('.sidebar');
        //     sidebar.style.display="none";
        // },
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