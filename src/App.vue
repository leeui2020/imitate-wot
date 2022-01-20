<template>
  <div>
    <!-- 头部 -->
    <app-header />
    <!-- 老兵指引 -->
    <div class="collapse-wrapper">
      <app-collapse />
    </div>
    <!-- 横幅报纸 -->
    <div class="cover-wrapper">
      <div class="cover-buttons">
        <app-button-banner :type="0" />
        <app-button-banner :type="1" />
        <app-button-banner :type="2" />
        <app-button-banner :type="3" />
      </div>
    </div>
    <!-- 视频banner -->
    <app-swiper />
    <!-- 按钮区域 -->
    <div class="buttons">
      <app-button-large ico="user" text="账号注册" />
      <app-button-large ico="download" text="游戏下载" />
      <app-button-large ico="home" text="进入官网" />
    </div>
    <!-- 底部声明信息 -->
    <app-footer />
    <app-code-poster />
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import './styles/index.css';

.collapse-wrapper {
  top: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  z-index: 10;
}

.cover-wrapper {
  padding-top: 56.25%;
  background-image: url("~@/assets/cover_bj.jpeg");
  background-size: 100% 100%;
  position: relative;
}
.cover-buttons {
  left: 50%;
  bottom: 20%;
  width: 100%;
  position: absolute;
  transform: translate(-50%, 50%);
  text-align: center;
}
.cover-buttons > a:not(:last-child) {
  margin-right: 10px;
}

.buttons {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
}
</style>
