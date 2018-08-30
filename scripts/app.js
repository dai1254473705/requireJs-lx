/**
 * 项目配置
 * @date 2018-8-30 12:25
 * @author DIEW
 * @email 1254473705@qq.com
 */

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/app',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        util:"../util",
        main:"main",
        lib:"../lib"
    }
});