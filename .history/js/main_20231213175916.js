


// acodian

const accordionItem = document.querySelectorAll(".accordion-item");

    accordionItem.forEach((el) =>
        el.addEventListener("click", () => {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            } else {
                accordionItem.forEach((el2) => el2.classList.remove("active"));
                el.classList.add("active");
            }
        })
    );



//rolling
document.addEventListener('DOMContentLoaded', function () {
    var words = ['백일', '첫 옹알이', '첫 뒤집기', '첫 나들이', '첫 이유식', '첫돌', '첫 걸음마', '모든'];
    var index = 0;
    var rollingText = document.getElementById('rollingText');

    function updateText() {
        // 애니메이션 클래스를 추가하여 애니메이션 시작
        rollingText.classList.add('animate-text');

        // 텍스트 변경
        rollingText.textContent = words[index++];

        // 약간의 지연 후 애니메이션 클래스 제거
        setTimeout(function() {
            rollingText.classList.remove('animate-text');
        }, 500); // 0.5초 후 클래스 제거

        // 모든 단어가 표시되면 롤링 중지
        if (index === words.length) {
            clearInterval(intervalId);
        }
    }

    var intervalId = setInterval(updateText, 3000); // 필요에 따라 간격 조정
});

