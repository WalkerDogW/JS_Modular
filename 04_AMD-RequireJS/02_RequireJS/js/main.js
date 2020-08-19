(
    function () {

        requirejs.config({
            // baseUrl:'js',//基本路径
            paths:{//配置路径
                 dataService:'./modules/dataService',
                 alerter:'./modules/alerter',
                 jquery:'./lib/jquery',
                 angular:'./lib/angular'
            },
            shim:{
                angular:{
                    exports:'angular'
                }
            }
        })

        requirejs(['alerter','angular'], function (alerter,angular) {
            alerter.showMsg();
            console.log(angular);
        })
    }
)()