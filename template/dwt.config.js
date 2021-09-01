/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
// DWT 自动化测试产出物目录
const dwtOutputPath = path.join(__dirname, './.dwt');
// dwt.config.js 是来控制流水线的，因此与流水线应该一一对应
// 一部分是公共，另外一部分是各个子流水线需要的
module.exports = {
  reporter: { savePath: dwtOutputPath },
  // DWT 自动化测试产出物目录
  dwtOutputPath,
  // 项目负责人列表，用于推送测试报告等，填写 rtx，例如 [rtx1, rtx2]
  projectOwner: [''],
  // EPC 上报等场景需要依赖的平台
  platformDependencies: {
    // // http://eptest.oa.com 平台，https://iwiki.woa.com/pages/viewpage.action?pageId=336160280
    // eptest: {
    //   // 项目名，即在 EPTest 平台上的名字
    //   projectId: 'matmanjs/web-test-demo-jest',
    // },
    // // http://macaron.oa.com 平台，https://iwiki.woa.com/pages/viewpage.action?pageId=336160000
    // macaron: {
    //   // 项目ID，格式例如： f6b0d681-13b8-4fe5-8eef-d16491e5
    //   projectId: 'f6b0d681-13b8-4fe5-8eef-d16491e5',
    // },
  },
  // 蓝盾平台（http://devops.oa.com/）流水线的配置参数
  devopsPipeline: {
    // UV-单元测试
    unitTest: {
      // 蓝盾流水线模板名字，用于区分不同流水线
      templateName: 'UT-Jest',
      // 是否跳过测试，用于临时调试
      disableTest: false,
      // 是否为调试模式，该模式下不会上报数据到效能平台进行epc统计，用于临时调试
      isDebug: false,
      // 【终端平台测试插件】
      eptest: {
        // 执行命令
        cmd: 'npm install && npm run test:unit',
      },
      // 【覆盖率-前置信息采集】【覆盖率-后置信息处理】
      macaron: {
        // lcov.info 的文件的绝对路径
        lcovInfoFilePath: path.join(dwtOutputPath, 'coverage/lcov.info'),
      },
      // 【归档构件(new)】
      archive: {
        // 待归档的文件
        filePath: path.join(dwtOutputPath, 'UT-output.zip'),
      },
      // 质量红线配置
      quality: {
        // 用例通过率
        passRate: 99.5,
        // 全量代码行覆盖率
        allLineCov: 15,
        // 增量代码行覆盖率
        newLineCov: 0,
      },
    },
  },
};
