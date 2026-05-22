// js/app.js(第一部分)
let finalScores = { stress: 0, social: 0, focus: 0, emotion: 0 }
document.addEventListener('DOMContentLoaded', () => {
  // 模块一：单页面应用(SPA)路由切换控制
  const navItems = document.querySelectorAll('.nav-item')
  const viewSections = document.querySelectorAll('.view-section')

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // 1.移除所有导航菜单的激活状态
      navItems.forEach(nav => nav.classList.remove('active'))
      // 2.将选中的菜单项设为激活
      item.classList.add('active')

      // 3.隐藏所有视图区域
      viewSections.forEach(view => view.style.display = 'none')

      // 4.显示当前点击对应的目标视图
      const targetId = item.getAttribute('data-target')
      const targetView = document.getElementById(targetId)
      targetView.style.display = 'block'

      // 联动：如果切换到图表页，且问卷已经做完，则触发重新渲染图表，防止 Canvas 变形
      if (targetId === 'dashboard-view' && currentQuestionIndex >= surveyData.length) {
        drawChart()
      }
    })
  })
  // 模块二：动态多维问卷状态机引擎
  let currentQuestionIndex = 0
  // 初始化多维向量分值存储

  const questionTitle = document.getElementById('question-title')
  const optionsContainer = document.getElementById('options-container')
  const progressFill = document.getElementById('progress-fill')

  function renderQuestion() {
    // 更新进度条百分比
    const progressPercent = (currentQuestionIndex / surveyData.length) * 100
    progressFill.style.width = `${progressPercent}%`

    // 检查问卷是否全部做完
    if (currentQuestionIndex >= surveyData.length) {
      finishSurvey()
      return
    }

    // 读取当前题目数据
    const currentQ = surveyData[currentQuestionIndex]
    questionTitle.textContent = `Q${currentQuestionIndex + 1}: ${currentQ.text}`

    // 清空原有的旧选项 HTML 内容
    optionsContainer.innerHTML = ''

    // 动态构建并渲染当前题目的选项按钮
    currentQ.options.forEach(option => {
      const btn = document.createElement('button')
      btn.className = 'option-btn'
      btn.textContent = option.text

      // 绑定点击事件处理逻辑
      btn.addEventListener('click', () => handleAnswer(option.scores))
      optionsContainer.appendChild(btn)
    })
  }

  function handleAnswer(scores) {
    // 多维数值矩阵累加运算
    finalScores.stress += scores.stress
    finalScores.social += scores.social
    finalScores.focus += scores.focus
    finalScores.emotion += scores.emotion

    // 指针下移，递进渲染下一题
    currentQuestionIndex++
    renderQuestion()
  }

  function finishSurvey() {
    alert('🎉 恭喜你完成全部测评题！现在将自动为您切往分析面板查看多维心理特征图。')

    // 自动触发页面路由切换
    document.querySelector('[data-target="survey-view"]').classList.remove('active')
    document.querySelector('[data-target="dashboard-view"]').classList.add('active')
    document.getElementById('survey-view').style.display = 'none'
    document.getElementById('dashboard-view').style.display = 'block'

    // 执行图表绘制函数
    drawChart()
  }

  // 执行首次渲染初始化启动
  renderQuestion()
})

// 模块三：数据可视化渲染层
let radarChartInstance = null // 用于缓存图表对象的全局实例指针

function drawChart() {
  const ctx = document.getElementById('radarChart').getContext('2d')

  // 内存安全防护：如果之前存在过图表实例，必须先销毁，否则会导致画布重叠图像错乱
  if (radarChartInstance) {
    radarChartInstance.destroy()
  }

  // 实例化 Chart.js 雷达图
  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        '压力易感性(Stress)',
        '社交倾向上限(Social)',
        '深度专注潜能(Focus)',
        '情感共鸣敏感度(Emotion)'
      ],
      datasets: [{
        label: '当前个体心理多维投射多边形',
        data: [
          finalScores.stress,
          finalScores.social,
          finalScores.focus,
          finalScores.emotion
        ],
        backgroundColor: 'rgba(78, 115, 223, 0.2)', // 填充淡蓝色
        borderColor: 'rgba(78, 115, 233, 1)', // 边缘深蓝色
        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { display: true },
          suggestedMin: 0,
          suggestedMax: 20, // 对应题目累加分值的理论最高上限
          ticks: { stepSize: 5 }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  })
}