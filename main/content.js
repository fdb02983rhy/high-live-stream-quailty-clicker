const autoHighBilibili = () => {
	let time1 = setInterval(() => {
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

const autoHighHuya = () => {
	let time1 = setInterval(() => {
		try {
			let videoDom = document.querySelector("#player-video");
			videoDom.dispatchEvent(new Event("mousemove"));
			let quality = document.querySelector(".player-videotype-cur");
			quality.dispatchEvent(new Event("mousemove"));
			if (
				document
					.querySelector(".player-videotype-cur")
					.innerText.includes("超清")
			) {
				let list = document.querySelector(".player-videotype-list");
				list.firstChild.click();
				quality.dispatchEvent(new Event("mouseleave"));
			}
			clearInterval(time1);
		} catch {}
	}, 1000);
};

currentUrl = window.location.href;

if (currentUrl.includes("live.bilibili")) {
	autoHighBilibili();
} else if (currentUrl.includes("huya")) {
	autoHighHuya();
}
