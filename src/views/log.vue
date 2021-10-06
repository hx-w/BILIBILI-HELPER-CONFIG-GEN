<template>
  <el-container>
    <el-header><h1 align="center">BILIBILI-HELPER日志</h1></el-header>
    <el-main>
      <el-card class="box-card">
      <div class="text-wrapper" style="font-size:18px;"><span>{{ log }}</span></div>
      </el-card>
    </el-main>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      log: "空的日志",
    };
  },
  created() {
    let code = this.$route.query.code;
    if (!code) return;
    this.$http
      .get("https://ci.csgowiki.top:8080/query_log?code=" + code)
      .then((response) => {
        console.log(response.data);
        this.log = response.data;
      });
  },
};
</script>

<style scoped>
.text-wrapper {
  white-space: pre-wrap;
}
</style>
