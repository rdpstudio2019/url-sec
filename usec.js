db = {
    "https://192link.com/": "疑似色情内容"
}

function usec(url){
    if (db.hasOwnProperty(url)){
        return db[url];
    } else {
        return "ok";
    }
}
