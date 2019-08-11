function check() {
    str = new RegExp('Windows');
    var os = navigator.appVersion;
    was = str.exec(os);
    console.log(os);
}
check()