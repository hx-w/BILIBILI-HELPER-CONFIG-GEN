<template>
  <el-container>
    <el-header><h1 align="center">BILIBILI-HELPER日志</h1></el-header>
    <el-main>
      <div>{{ log }}</div>
    </el-main>
  </el-container>
</template>


<script>
export default {
    data() {
        return {
            log: '空的日志\n22'
        }
    },
    created() {
        let code = this.$route.query.code
        if (!code) return
        this.log = code

    }
}
</script>