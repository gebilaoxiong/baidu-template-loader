/**
 * 
 * @authors  gebilaoxiong 
 * @email    gebilaoxiong@gmail.com
 * @date     2016-06-12 18:41:15
 * @version  百度模板引擎webpack预编译模块
 */

var baiduTplEngine = require('baidutemplate-x').template,

  dependence = "var baidu = require('common:components/baidutemplate/baidutemplate');\n";

/**
 * 预编译
 * 调用百度模板引擎的编译函数 将模板字符串转换为模板方法
 * @param  {String}           source            需要编译的模板字符串
 * @return {String}                             处理后的模板方法
 */
function precompile(source){
  source = baiduTplEngine

    // 字符串模板 => function
    ._compile(source)

    // function => string
    .toString()

    // remove function name
    .replace(/^(function) anonymous/, '$1');

  // output
  return dependence + 'module.exports=' + source;
}


module.exports = function(source, map) {
  var me = this;

  me.cacheable();

  source = precompile(source);

  me.callback(null, source, map);
};

