// 题目数据源：包含问题及各选项对四个心理特征维度的加权分数
const surveyData = [
  {
    id: 1,
    text: '当遇到一个需要连续熬夜 debug 的高难度大作业时，你的真实心态是？',
    options: [
      { text: "充满斗志，觉得攻克后会有巨大的成就感", scores: { stress: 1, social: 1, focus: 5, emotion: 2 } },
      { text: "感到极度焦虑，担心自己无法按时完成", scores: { stress: 5, social: 1, focus: 2, emotion: 4 } },
      { text: "无所谓，在社交群里和同学疯狂吐槽抱团取暖", scores: { stress: 2, social: 5, focus: 1, emotion: 3 } },
      { text: "冷静地将任务拆解为精细的步骤，一步步执行", scores: { stress: 2, social: 1, focus: 4, emotion: 1 } }
    ]
  },
  {
    id: 2,
    text: "辅导员突然通知你，要你在下午的年级大会上作为学生代表即兴发言 3 分钟：",
    options: [
      { text: "迅速组织语言，渴望在这个公开场合展示自己", scores: { stress: 1, social: 5, focus: 3, emotion: 3 } },
      { text: "心跳加速，四肢冰凉，满脑子想怎么推脱掉", scores: { stress: 5, social: 1, focus: 1, emotion: 4 } },
      { text: "感到无压力，随便上去说几句敷衍一下就行", scores: { stress: 1, social: 2, focus: 2, emotion: 1 } },
      { text: "专注于思考要讲的三个核心要点，开始写提纲", scores: { stress: 2, social: 2, focus: 5, emotion: 1 } }
    ]
  },
  {
    id: 3,
    text: "在小组合作完成期末大作业时，若组员进度严重滞后，你会？",
    options: [
      { text: "直接自己加班把滞后的工作全做了，懒得沟通", scores: { stress: 3, social: 1, focus: 5, emotion: 2 } },
      { text: "耐心找组员沟通，了解困难并给予情感支持", scores: { stress: 1, social: 5, focus: 2, emotion: 5 } },
      { text: "极度烦躁，在群里直接发火或者找老师投诉", scores: { stress: 4, social: 2, focus: 2, emotion: 5 } }
    ]
  },
  {
    id: 4,
    text: "当你的室友或好朋友突然情绪低落、一言不发地回到宿舍，你会？",
    options: [
      { text: "敏锐地捕捉到不对劲，主动过去安慰和倾听", scores: { stress: 1, social: 4, focus: 1, emotion: 5 } },
      { text: "虽然注意到了，但由于害怕尴尬选择保持沉默", scores: { stress: 3, social: 1, focus: 2, emotion: 4 } },
      { text: "完全沉浸在自己的电脑世界里，根本没有发现", scores: { stress: 1, social: 1, focus: 4, emotion: 1 } }
    ]
  }
]