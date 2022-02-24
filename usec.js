db = {
    "https://192link.com/": "此站点存在疑似色情内容"
}

function usec(url){
    if (db.hasOwnProperty(url)){
        return "RDPStudio网址安全中心提醒您：" + db[url];
    } else {
        return "ok";
    }
}
