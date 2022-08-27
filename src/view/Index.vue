<template>
    <div>
        <Nav></Nav>
        <full-page :options="options" ref="fullpage">
                <div class="section">
                    <div class="slide">
                        <Mshose></Mshose>
                    </div>
                    <div class="slide">
                        <Mclothes></Mclothes>
                    </div>
                    <div class="slide">
                        <Mornaments></Mornaments> 
                    </div>
                </div>
                <div class="section">
                    <div class="slide">
                        <Wshose></Wshose>
                    </div>
                    <div class="slide">
                        <Wclothes></Wclothes>
                    </div>
                    <div class="slide">
                        <Wornaments></Wornaments> 
                    </div>
                </div>
                <div class="section">
                    <div class="publicity">
                        <Video class="publicity-video" loop autoplay>
                            <source src="../assets/Publicity video.mp4" type="video/mp4">
                        </Video>
                    </div>
                </div>
                <div class="section footerH">
                    <Footer></Footer>
                
                </div>
        </full-page>
    </div>
</template>

<script>
import '../css/fullpage.min.css'
import Nav from '../components/Nav'
import Mshose from './Mshose'
import Mclothes from './Mclothes'
import Mornaments from './Mornaments'
import Wshose from './Wshose'
import Wclothes from './Wclothes'
import Wornaments from './Wornaments'
import Footer from '../components/Footer'



export default {
    name:'index',
    components:{
        Nav,Mshose,Mclothes,Mornaments,Wornaments
        ,Wclothes,Wshose,Footer
    },
    data(){
        return{
            options:{
                licenseKey: null,
                verticalCentered: false, //定义每一页的内容是否垂直居中
                afterLoad: this.afterLoad, //滚动到某一屏后的回调函数
                controlArrows: true, //是否通过箭头控制slide幻灯片
                loopHorizontal: false, //slide幻灯片是否循环滚动
                mscrollBar: true, //true则是一滚动就是一整屏
                monLeave: this.onLeave, //滚动前的回调函数，
                navigation: true,
            }
        }
    }
}
</script>

<style scoped>
.publicity{
    width: 100%;
    height: 100%;
}
.publicity-video{
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>