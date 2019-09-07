<template>
  <div id="app">
   <!--  <div id="nav">

    </div> -->
    <keep-alive exclude="Detail">
    	<router-view />
	</keep-alive>
	<!-- 味了不用重复访问json文件 -->
  </div>
</template>

<style></style>
