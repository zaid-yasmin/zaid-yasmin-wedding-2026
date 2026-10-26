
// عناصر الصفحات والأزرار
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const openButton = document.getElementById("openInvitation");

const backButton = document.getElementById("backToCover");


 // فتح الدعوة والانتقال إلى التفاصيل
openButton.addEventListener("click", function () {
    cover.hidden = true;
    invitation.hidden = false;

    // تشغيل حركة أسماء العروسين
    const coupleNames = document.getElementById("coupleNames");

    if (coupleNames) {
        coupleNames.classList.remove("is-animated");
        void coupleNames.offsetWidth;
        coupleNames.classList.add("is-animated");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// العودة إلى الغلاف
backButton.addEventListener("click", function () {
    invitation.hidden = true;
    cover.hidden = false;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// موعد الزفاف: الجمعة 13 نوفمبر 2026، الساعة 5:30 مساءً بتوقيت الأردن
const weddingDate = new Date("2026-11-13T17:30:00+03:00").getTime();

// تحويل الأرقام إلى أرقام عربية
function toArabicNumbers(number) {
    return String(number).replace(/\d/g, function (digit) {
        return "٠١٢٣٤٥٦٧٨٩"[digit];
    });
}

// تحديث العد التنازلي
function updateCountdown() {
    const now = Date.now();
    const remaining = weddingDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const countdown = document.getElementById("countdown");

    if (remaining <= 0) {
        daysElement.textContent = "٠";
        hoursElement.textContent = "٠";
        minutesElement.textContent = "٠";
        secondsElement.textContent = "٠";

        const heading = document.querySelector(".countdown-section h2");
        if (heading) {
            heading.textContent = "اليوم فرحتنا بكم!";
        }
        return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (remaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    daysElement.textContent = toArabicNumbers(days);
    hoursElement.textContent = toArabicNumbers(
        String(hours).padStart(2, "0")
    );
    minutesElement.textContent = toArabicNumbers(
        String(minutes).padStart(2, "0")
    );
    secondsElement.textContent = toArabicNumbers(
        String(seconds).padStart(2, "0")
    );
}

// تشغيل العد التنازلي وتحديثه كل ثانية
updateCountdown();
setInterval(updateCountdown, 1000);
