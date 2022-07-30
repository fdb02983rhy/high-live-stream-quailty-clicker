autoHigh() {
    let time1 = setInterval(function() {
        try {
            let videoDom = document.querySelector("#live-player");
            videoDom.dispatchEvent(new Event("mousemove"));
            let quality = document.querySelector(".quality-wrap");
            quality.dispatchEvent(new Event("mouseenter"));
            if (
                document.querySelector(".quality-it.selected").innerText !=
                "原画"
            ) {
                let list = document.querySelectorAll(".quality-it");
                list[0].click();
                quality.dispatchEvent(new Event("mouseleave"));
            }
            clearInterval(time1);
        } catch {}
    }, 1000);
};