# PsychoMetric Dashboard 📊

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

PsychoMetric Dashboard 是一个专为高校学生活动场景打造的多维心理特征测评与交互式数据可视化分析面板。应用完全基于原生单页面应用（SPA）前端架构开发。

## 💡 核心技术栈与架构设计
- **响应式双栏布局**：放弃传统流式布局，运用 **CSS Grid 与 Flexbox** 混合嵌套模式，实现契合现代后台管理系统的左右分栏布局。
- **高维特征测算引擎**：设计离散问卷映射矩阵，通过 JavaScript 捕获 DOM 事件流，对用户的多选操作进行动态特征累加计算。
- **Canvas 图表渲染层**：引入 **Chart.js** 引擎，动态销毁与重建图形上下文内存，将抽象的评分降维映射为雷达图谱多边形。
- **纯前端路由体系**：不依赖任何第三方复杂框架，仅基于 Vanilla JS 的 `data-*` 属性控制视图容器的状态流转，确保应用达到轻量、秒开的体验。

## 🛠️ 本地开发运行指引
1. 克隆本项目：
   ```bash
   git clone [https://github.com/你的用户名/PsychoMetric-Dashboard.git](https://github.com/你的用户名/PsychoMetric-Dashboard.git)