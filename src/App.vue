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
}
.cover-buttons {
  left: 50%;
  bottom: 20%;
  position: absolute;
  transform: translate(-50%, 50%);
}
.cover-buttons > a:not(:last-child) {
  margin-right: 10px;
}
</style>
