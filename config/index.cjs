/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx70f884b4d1b74fdf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8802db279327baf8e005ba72709a0714',
  // 请将以下代码按照图示粘贴到对应位置
USE_PASSAGE: 'push-plus',

  USERS: [
    {
      // 想要发送的人的名字
      name: '燕子',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '33e5fab4b9504516986a30f0aca1f2f6',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0003',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-29' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4XRH7KUJ2ulyQB1og1nIJCPyc6E',
    }
  ],

}

module.exports = USER_CONFIG

