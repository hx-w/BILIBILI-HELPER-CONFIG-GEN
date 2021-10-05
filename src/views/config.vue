<template>
  <el-container>
    <el-header><h1 align="center">BILIBILI-HELPER配置生成器</h1></el-header>
    <el-main>
      <el-form ref="config" :model="config" label-width="180px">
        <el-tag>基本任务</el-tag>
        <el-form-item label="任务执行间隔时间(秒)">
          <el-input-number
            v-model="config.taskConfig.taskIntervalTime"
            :min="1"
            :max="30"
            placeholder="默认20秒"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="是否跳过每日任务">
          <el-select
            v-model="config.taskConfig.skipDailyTask"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="自动投币数量">
          <el-input-number
            v-model="config.taskConfig.numberOfCoins"
            :min="1"
            :max="5"
            label="最多五个"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="自动投币预留硬币数">
          <el-input-number
            v-model="config.taskConfig.reserveCoins"
            :min="0"
            :max="4000"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="投币时是否点赞">
          <el-select
            v-model="config.taskConfig.selectLike"
            placeholder="请选择"
          >
            <el-option
              v-for="item in selectLikeoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="漫画签到平台">
          <el-select
            v-model="config.taskConfig.devicePlatform"
            placeholder="请选择"
          >
            <el-option
              v-for="item in devicePlatformOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投币策略">
          <el-select
            v-model="config.taskConfig.coinAddPriority"
            placeholder="请选择"
          >
            <el-option
              v-for="item in Coinoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-tag>赛事预测功能</el-tag>
        <el-form-item label="是否开启赛事预测">
          <el-select v-model="config.taskConfig.matchGame" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="赛事预测偏好">
          <el-select
            v-model="config.taskConfig.showHandModel"
            placeholder="请选择"
          >
            <el-option
              v-for="item in handModelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单次竞猜的硬币数量">
          <el-input-number
            v-model="config.taskConfig.predictNumberOfCoins"
            :min="1"
            :max="10"
            label="最多10个"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="竞猜预留硬币数">
          <el-input-number
            v-model="config.taskConfig.minimumNumberOfCoins"
            :min="1"
            label="硬币低于此数量不进行竞猜"
          ></el-input-number>
        </el-form-item>
        <br />
        <br />
        <el-tag>大会员权益</el-tag>
        <el-form-item label="每月自动充电">
          <el-select
            v-model="config.taskConfig.monthEndAutoCharge"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="每月充电日期">
          <el-input-number
            v-model="config.taskConfig.chargeDay"
            :min="1"
            :max="28"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="月底自动充电对象(uuid)">
          <el-input v-model="config.taskConfig.chargeForLove"></el-input>
        </el-form-item>
        <el-form-item label="直播送出快过期的礼物">
          <el-select v-model="config.taskConfig.giveGift" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="直播送礼指定UP主(uuid)">
          <el-input v-model="config.taskConfig.upLive"></el-input>
        </el-form-item>
        <el-form-item label="银瓜子兑换硬币">
          <el-select
            v-model="config.taskConfig.silver2Coin"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <br/>
        <el-tag>信息配置</el-tag>
        <el-form-item label="常用的浏览器UA">
          <el-input v-model="config.taskConfig.userAgent"></el-input>
        </el-form-item>

        <el-form-item label="你的bilibili cookies">
          <el-input
            v-model="config.biliVerify.biliCookies"
            placeholder="请复制黏贴到此处"
          ></el-input>
        </el-form-item>

        <br/>
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
        biliVerify: {
          biliCookies: "",
        },
        taskConfig: {
          skipDailyTask: false,
          matchGame: false,
          showHandModel: false,
          predictNumberOfCoins: 1,
          minimumNumberOfCoins: 100,
          taskIntervalTime: 20,
          numberOfCoins: 5,
          coinAddPriority: 1,
          reserveCoins: 10,
          selectLike: 0,
          monthEndAutoCharge: true,
          giveGift: true,
          silver2Coin: true,
          upLive: "0",
          chargeForLove: "14602398",
          chargeDay: 28,
          devicePlatform: "ios",
          userAgent: "你的浏览器UA",
        },
        pushConfig: {
          SC_KEY: "",
          SCT_KEY: "",
          TG_BOT_TOKEN: "",
          TG_USER_ID: "",
          TG_USE_CUSTOM_URL: false,
          DING_TALK_URL: "",
          DING_TALK_SECRET: "",
          PUSH_PLUS_TOKEN: "",
          WE_COM_GROUP_TOKEN: "",
          WE_COM_APP_CORPID: "",
          WE_COM_APP_CORP_SECRET: "",
          WE_COM_APP_AGENT_ID: 0,
          WE_COM_APP_TO_USER: "",
          WE_COM_APP_MEDIA_ID: "",
          PROXY_HTTP_HOST: "",
          PROXY_SOCKET_HOST: "",
          PROXY_PORT: 0,
        },
      },
      textarea: "待生成",
      options: [
        {
          value: true,
          label: "是",
        },
        {
          value: false,
          label: "否",
        },
      ],
      handModelOptions: [
        {
          value: true,
          label: "高赔率",
        },
        {
          value: false,
          label: "低赔率",
        },
      ],
      devicePlatformOpt: [
        {
          value: "ios",
          label: "苹果",
        },
        {
          value: "android",
          label: "安卓",
        },
      ],
      selectLikeoptions: [
        {
          value: 1,
          label: "是",
        },
        {
          value: 0,
          label: "否",
        },
      ],
      Coinoptions: [
        {
          value: 1,
          label: "优先关注的up主",
        },
        {
          value: 0,
          label: "优先热榜",
        },
      ],
    };
  },
  created() {
    this.config.taskConfig.userAgent = navigator.userAgent;
  },
  methods: {
    onSubmit() {
      //this.textarea = JSON.stringify(this.config)
      this.textarea = this.config;
      console.log(this.textarea);
    },
  },
};
</script>
<style scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}
</style>
