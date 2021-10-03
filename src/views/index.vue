<template>
  <el-container>
    <el-header><h1 align="center">BILIBILI-HELPER配置生成器</h1></el-header>
    <el-main>
      <el-form ref="config" :model="config" label-width="180px">
        <el-form-item label="是否跳过每日任务">
          <el-select v-model="config.skipDailyTask" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投币数量">
          <el-input-number
            v-model="config.numberOfCoins"
            :min="1"
            :max="5"
            label="最多五个"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="投币策略">
          <el-select v-model="config.coinAddPriority" placeholder="请选择">
            <el-option
              v-for="item in Coinoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="投币时是否点赞">
          <el-select v-model="config.selectLike" placeholder="请选择">
            <el-option
              v-for="item in selectLikeoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="月底是否开启充电">
          <el-select v-model="config.monthEndAutoCharge" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="月底自动充电对象">
          <el-input v-model="config.chargeForLove"></el-input>
        </el-form-item>

        <el-form-item label="直播送出快过期的礼物">
          <el-select v-model="config.giveGift" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="直播送礼指定UP主">
          <el-input v-model="config.upLive"></el-input>
        </el-form-item>

        <el-form-item label="竞猜预留硬币数量">
          <el-input v-model="config.reserveCoins"></el-input>
        </el-form-item>
        <el-form-item label="漫画签到平台">
          <el-select v-model="config.devicePlatform" placeholder="请选择">
            <el-option
              v-for="item in devicePlatformOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="常用的浏览器UA">
          <el-input v-model="config.userAgent"></el-input>
        </el-form-item>

        <el-form-item label="任务执行间隔时间">
          <el-input v-model="config.taskIntervalTime" placeholder="默认10秒"></el-input>
        </el-form-item>

        <el-form-item label="COOKIE:dedeuserid">
          <el-input v-model="config.dedeuserid" placeholder="请复制黏贴到此处,jar,docker方式运行无需填写此配置"></el-input>
        </el-form-item>

        <el-form-item label="COOKIE:sessdata">
          <el-input v-model="config.sessdata" placeholder="请复制黏贴到此处,jar,docker方式运行无需填写此配置"></el-input>
        </el-form-item>
          <el-form-item label="COOKIE:biliJct">
          <el-input v-model="config.biliJct" placeholder="请复制黏贴到此处,jar,docker方式运行无需填写此配置"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">生成</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        <json-viewer
          :value="textarea"
          :expand-depth="5"
          copyable
          boxed
          sort
        ></json-viewer>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      config: {
        numberOfCoins: '5',
        reserveCoins: 50,
        selectLike: 0,
        monthEndAutoCharge: true,
        giveGift: true,
        upLive: '0',
        chargeForLove: '14602398',
        devicePlatform: 'ios',
        coinAddPriority: 1,
        skipDailyTask: true,
        userAgent: '',
        taskIntervalTime: 10,
        dedeuserid: "",
        sessdata: "",
        biliJct: "", 
      },
      textarea: '请生成',
      options: [
        {
          value: true,
          label: '是',
        },
        {
          value: false,
          label: '否',
        },
      ],
      devicePlatformOpt: [
        {
          value: 'ios',
          label: '苹果',
        },
        {
          value: 'android',
          label: '安卓',
        },
      ],
      selectLikeoptions: [
        {
          value: 1,
          label: '是',
        },
        {
          value: 0,
          label: '否',
        },
      ],
      Coinoptions: [
        {
          value: 1,
          label: '优先关注的up主',
        },
        {
          value: 0,
          label: '优先热榜',
        },
      ],
    }
  },
  created() {
    this.config.userAgent = navigator.userAgent
  },
  methods: {
    onSubmit() {
      //this.textarea = JSON.stringify(this.config)
      this.textarea = this.config
      console.log(this.textarea)
    },
  },
}
</script>
<style scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}
</style>
