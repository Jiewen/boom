cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
    cc.view.adjustViewPort(true);
    
    //这里将分辨率设置为 960 600 为背景图的宽和高  然后针对不同屏幕强行拉伸 效果不会太差
    cc.view.setDesignResolutionSize(950, 600, cc.ResolutionPolicy.EXACT_FIT);
    cc.view.resizeWithBrowserSize(true);
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new GameWorldScene());
    }, this);
};
cc.game.run();